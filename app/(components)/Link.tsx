'use client';

import { Anchor, type AnchorProps } from '@mantine/core';
import type { ReactNode, JSX } from 'react';
import NextLink from 'next/link';

interface LinkProps extends AnchorProps {
  children: ReactNode;
  newTab?: boolean;
  href: string;
}

export function Link({
  children,
  href,
  newTab,
  ...other
}: LinkProps): JSX.Element {
  return (
    <Anchor
      component={NextLink}
      href={href}
      rel={newTab ? 'noreferrer' : undefined}
      target={newTab ? '_blank' : undefined}
      {...other}
    >
      {children}
    </Anchor>
  );
}
