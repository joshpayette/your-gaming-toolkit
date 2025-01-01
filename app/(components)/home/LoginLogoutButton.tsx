import { signIn, signOut } from '@/app/auth';
import { Button } from '@mantine/core';
import { useSession } from 'next-auth/react';

export function LoginLogoutButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Button variant="default" loading={true}>
        &nbsp;
      </Button>
    );
  }

  if (status === 'unauthenticated' || !session) {
    return (
      <Button variant="default" onClick={() => signIn()}>
        Log in
      </Button>
    );
  }

  return (
    <Button variant="default" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}
