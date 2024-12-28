'use client';

import { MantineProvider } from '@mantine/core';
import { useAppSelector } from '../store/hooks';
import { useIsClient } from '../utils/use-is-client';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(state => state.theme.theme);
  const variant = useAppSelector(state => state.theme.variant);
  const [activeTheme, setActiveTheme] = useState<any>(null);

  useEffect(() => {
    async function loadTheme() {
      let themeModule;
      switch (theme) {
        case 'cyan':
          themeModule = await import('./colors/cyan');
          break;
        case 'green':
          themeModule = await import('./colors/green');
          break;
        case 'indigo':
          themeModule = await import('./colors/indigo');
          break;
        case 'orange':
          themeModule = await import('./colors/orange');
          break;
        case 'purple':
          themeModule = await import('./colors/purple');
          break;
        case 'red':
          themeModule = await import('./colors/red');
          break;
        case 'yellow':
          themeModule = await import('./colors/yellow');
          break;
        case 'zinc':
          themeModule = await import('./colors/zinc');
          break;
        default:
          themeModule = await import('./colors/purple');
          break;
      }
      setActiveTheme(themeModule);
    }

    loadTheme();
  }, [theme]);

  const isClient = useIsClient();
  if (!isClient) return null;
  if (!activeTheme) return null;

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
