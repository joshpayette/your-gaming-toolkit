import { RootLayout } from '@repo/ui/components/root-layout'
import "@repo/ui/styles.css"

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}