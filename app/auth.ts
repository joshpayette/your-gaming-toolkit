import NextAuth, { type DefaultSession } from 'next-auth';
import Discord from 'next-auth/providers/discord';
import Resend from 'next-auth/providers/resend';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/app/(features)/database';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      displayName: string;
      bio: string;
      avatarId: string;
      image: string;
      role: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user'];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Discord,
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: 'no-reply@yourgamingtoolkit.com'
    })
  ],
  callbacks: {
    async session({ session, user }) {
      const userProfile = await prisma.userProfile.upsert({
        where: {
          userId: user.id
        },
        update: {},
        create: {
          displayName: user.name ?? 'Traveler',
          bio: 'No bio set yet.',
          avatarId: '', // TODO: Add default avatar
          user: {
            connect: {
              id: user.id
            }
          }
        }
      });

      session.user = {
        ...session.user,
        id: user.id,
        displayName: userProfile.displayName,
        bio: userProfile.bio,
        avatarId: userProfile.avatarId,
        image: userProfile.image ?? ''
      };

      return session;
    }
  }
});
