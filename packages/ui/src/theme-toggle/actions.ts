'use server';

import { cookies } from 'next/headers';
import type { YGTTheme } from '../themes/types';

export async function create(theme: YGTTheme) {
  const cookieStore = await cookies();

  cookieStore.set({
    name: 'theme',
    value: theme,
    httpOnly: true,
    path: '/'
  });
}
