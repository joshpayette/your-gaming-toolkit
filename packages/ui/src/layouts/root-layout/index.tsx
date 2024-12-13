import '@mantine/core/styles.css';
import { Header } from "./Header";

import { ColorSchemeScript,mantineHtmlProps } from '@mantine/core';

export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        
          <Header />
          {children}
      </body>
    </html>
  );
}