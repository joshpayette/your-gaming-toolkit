import { ComingSoon } from '@/app/HeroComingSoon';
import { showComingSoon } from '@/app/flags';
import { HeroContainer } from '@/app/Hero';

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
