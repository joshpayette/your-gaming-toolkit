'use client';

import { MantineProvider, type MantineThemeOverride } from '@mantine/core';
import { mantineTheme } from '../themes/purple';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={mantineTheme}>
      {children}
    </MantineProvider>
  );
}
