import '@mantine/core/styles.css';
import { RootLayout } from '@repo/ui/root-layout'

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}