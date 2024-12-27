import '@mantine/core/styles.css';
import classes from './RootLayout.module.css';
import '../themes/themes.css';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Header } from './Header';
import { Inter } from 'next/font/google';
import cx from 'clsx';
import StoreProvider from '../store/StoreProvider';
import { ThemeProvider } from './ThemeProvider';
import { ModalsProvider } from '@mantine/modals';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export function YGTRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={cx(classes.page, inter.className)}>
        <StoreProvider>
          <ThemeProvider>
            <ModalsProvider>
              <Header />
              {children}
            </ModalsProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
