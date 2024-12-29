import { showRemnant2 } from '@/app/flags';
import { redirect } from 'next/navigation';

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const isRemnant2Visible = await showRemnant2();

  if (!isRemnant2Visible) {
    redirect('https://remnant2toolkit.com');
  }

  return <>{children}</>;
}
