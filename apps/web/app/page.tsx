import { ComingSoon } from '@/ComingSoon';
import { HeroContainer } from '@/HeroContainer';
import { showComingSoon } from '@ygt/ui/flags';

export const metadata = {
  title: 'Coming Soon! - Your Gaming Toolkit'
};

export default async function Page() {
  const comingSoon = await showComingSoon();

  if (comingSoon) {
    return <ComingSoon />;
  }

  return (
    <>
      <HeroContainer />
    </>
  );
}
