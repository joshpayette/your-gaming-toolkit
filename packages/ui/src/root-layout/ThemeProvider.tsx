'use client';

import { MantineProvider } from '@mantine/core';
import { useAppSelector } from '../store/hooks';
import * as purpleTheme from '../themes/purple';
import * as cyanTheme from '../themes/cyan';
import { useIsClient } from '../utils/use-is-client';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(state => state.theme.theme);
  const variant = useAppSelector(state => state.theme.variant);

  let activeTheme;

  switch (theme) {
    case 'cyan': {
      activeTheme = cyanTheme;
      break;
    }
    case 'purple': {
      activeTheme = purpleTheme;
      break;
    }
  }

  const isClient = useIsClient();
  if (!isClient) return null;

  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={
        variant === 'mantine'
          ? activeTheme.mantineTheme
          : activeTheme.shadcnTheme
      }
      cssVariablesResolver={
        variant === 'mantine'
          ? activeTheme.mantineCssVariableResolver
          : activeTheme.shadcnCssVariableResolver
      }
    >
      {children}
    </MantineProvider>
  );
}
