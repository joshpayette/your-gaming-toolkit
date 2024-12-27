import '@mantine/core/styles.css';
import classes from './index.module.css';
import '../themes/themes.css';

import { ModalsProvider, type ModalsProviderProps } from '@mantine/modals';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { ThemeProvider } from './theme-provider';
import { Header } from './header';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export function YGTRootLayout({
  children,
  modals
}: {
  children: React.ReactNode;
  modals: ModalsProviderProps['modals'];
}) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme="dark"
      className={classes.page}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className={clsx(classes.page, inter.className)}>
        <ThemeProvider>
          <ModalsProvider modals={modals}>
            <Header />
            {children}
          </ModalsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
