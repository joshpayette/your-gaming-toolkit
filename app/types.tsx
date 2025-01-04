import { REMNANT2_CONFIG } from '@/app/(games)/remnant2/game-config';
import type { JSX } from 'react';
/**
 * The base item type that all game items should be built upon
 * Category should be a string enum of all possible item categories
 */
export interface AppItem<Category> {
  id: string;
  name: string;
  category: Category;
  imagePath: string;
  description: string;
  links: string[]; // Links to external resources
}

/**
 * The base configuration for each game that will get a toolkit
 */
export interface GameConfig {
  name: string; // Will be used as page title, etc.
  description: string; // Will be used for metadata, etc.
  icon: JSX.Element;
  path: string; // the subfolder path for the game, i.e. /remnant2
  // items: AppItem<string>[];
}

export const APP_CONFIG = {
  games: {
    remnant2: REMNANT2_CONFIG
  }
};
