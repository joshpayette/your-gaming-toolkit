import type { JSX } from 'react';
import { Remnant2Icon } from './(components)/icons/Remnant2Icon';

interface GameConfig {
  name: string;
  icon: JSX.Element;
  title: string;
  description: string;
  path: string;
}

interface AppConfig {
  games: GameConfig[];
}

/**
 * Configuration for the app.
 */
export const CONFIG: AppConfig = {
  games: [
    {
      name: 'Remnant 2 Toolkit',
      icon: <Remnant2Icon width={22} height={22} />,
      title: 'Remnant 2 Toolkit',
      description:
        'Remnant 2 build creation tools, share or browse builds with the community, track your item collection progress, find advanced info on item interactions, and more!',
      path: '/remnant2'
    }
  ]
};
