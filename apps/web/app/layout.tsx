import '@mantine/core/styles.css';
import { YGTRootLayout } from '@ygt/ui/root-layout';
import { modals } from './modals';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <YGTRootLayout modals={modals}>{children}</YGTRootLayout>;
}
