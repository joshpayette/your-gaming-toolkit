import '@mantine/core/styles.css';
import classes from './layout.module.css';
import './(features)/themes/themes.css';

import { ColorSchemeScript, Container, mantineHtmlProps } from '@mantine/core';
import { Geist } from 'next/font/google';
import cx from 'clsx';
import Script from 'next/script';
import { showComingSoon } from '@/app/flags';
import { Providers } from '@/app/Providers';
import { Header } from '@/app/Header';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist'
});

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const comingSoon = await showComingSoon();

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
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3a31a0b8-45aa-4eef-823f-13ed62943420"
        />

        <Providers>
          <Header showComingSoon={comingSoon} />
          <main>
            <Container size="xl">{children}</Container>
          </main>
        </Providers>
      </body>
    </html>
  );
}
