import '@mantine/core/styles.css';
import { Header } from './header';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { ThemeProvider } from './theme-provider';

export function YGTRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps} data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
