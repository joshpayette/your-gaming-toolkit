import '@mantine/core/styles.css';
import { Header } from './header';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Providers } from './Providers';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
