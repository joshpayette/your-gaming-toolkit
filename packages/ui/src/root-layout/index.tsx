import '@mantine/core/styles.css';
import './index.module.css';
import '../themes/themes.css';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { ThemeProvider } from './theme-provider';
import { Header } from './header';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export function YGTRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps} data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
