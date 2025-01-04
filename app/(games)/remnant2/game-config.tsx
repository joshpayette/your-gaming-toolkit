import { Remnant2Icon } from '@/app/(components)/icons/Remnant2Icon';
import type { GameConfig } from '@/app/types';

export const REMNANT2_CONFIG: GameConfig = {
  name: 'Remnant 2 Toolkit',
  description:
    'Remnant 2 build creation tools, share or browse builds with the community, track your item collection progress, find advanced info on item interactions, and more!',
  icon: <Remnant2Icon width={22} height={22} />,
  path: '/remnant2'
};
