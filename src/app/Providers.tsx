'use client';

import StoreProvider from '@/app/(features)/store/StoreProvider';
import { ThemeProvider } from '@/app/(features)/themes/ThemeProvider';
import { ModalsProvider } from '@mantine/modals';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <StoreProvider>
        <ThemeProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </ThemeProvider>
      </StoreProvider>
    </SessionProvider>
  );
}
