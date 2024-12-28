'use client';

import { Box, Group } from '@mantine/core';
import classes from './Header.module.css';
import { Logo } from '../logo/Logo';
import { ColorSchemeToggle } from '../themes/ColorSchemeToggle';
import { ThemeToggle } from '../themes/ThemeToggle';

export function ComingSoonHeader() {
  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Logo width={58} height={40} />
          <Group>
            <ColorSchemeToggle />
            <ThemeToggle />
          </Group>
        </Group>
      </header>
    </Box>
  );
}
