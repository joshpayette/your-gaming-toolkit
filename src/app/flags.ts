import { unstable_flag as flag } from '@vercel/flags/next';

export const showComingSoon = flag({
  key: 'coming-soon',
  decide: () => process.env.FLAGS_COMING_SOON === 'true'
});
