'use client';

import { MantineProvider } from '@mantine/core';
import { shadcnCssVariableResolver, shadcnTheme } from '../themes/purple';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={shadcnTheme}
      cssVariablesResolver={shadcnCssVariableResolver}
    >
      {children}
    </MantineProvider>
  );
}
