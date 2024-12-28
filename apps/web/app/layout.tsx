import '@mantine/core/styles.css';
import { YGTRootLayout } from '@ygt/ui/root-layout';
import { showComingSoon } from '@ygt/ui/flags';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const comingSoon = await showComingSoon();
  return <YGTRootLayout showComingSoon={comingSoon}>{children}</YGTRootLayout>;
}
