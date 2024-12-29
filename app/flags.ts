import { unstable_flag as flag } from '@vercel/flags/next';

export const showComingSoon = flag({
  key: 'coming-soon',
  decide: () => process.env.FLAGS_COMING_SOON === 'true'
});

export const showRemnant2 = flag({
  key: 'remnant2-live',
  decide: () => process.env.FLAGS_REMNANT2_VISIBLE === 'true'
});
