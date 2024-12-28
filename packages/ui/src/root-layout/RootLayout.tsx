import '@mantine/core/styles.css';
import classes from './RootLayout.module.css';
import '../themes/colors/themes.css';

import {
  Box,
  ColorSchemeScript,
  Container,
  Group,
  mantineHtmlProps
} from '@mantine/core';
import { Header } from './Header';
import { Geist } from 'next/font/google';
import cx from 'clsx';
import StoreProvider from '../store/StoreProvider';
import { ThemeProvider } from '../themes/ThemeProvider';
import { ModalsProvider } from '@mantine/modals';
import { ComingSoonHeader } from './ComingSoonHeader';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist'
});

export function YGTRootLayout({
  children,
  showComingSoon
}: {
  children: React.ReactNode;
  showComingSoon: boolean;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={cx(classes.page, geist.className)}>
        <StoreProvider>
          <ThemeProvider>
            <ModalsProvider>
              {showComingSoon ? <ComingSoonHeader /> : <Header />}
              <main>
                <Container size="xl">{children}</Container>
              </main>
            </ModalsProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
