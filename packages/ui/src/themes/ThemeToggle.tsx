'use client';

import { IconPalette } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Button, Group, Modal, Select } from '@mantine/core';
import classes from './ThemeToggle.module.css';
import { modals } from '@mantine/modals';
import { setTheme, THEMES } from '../store/themeSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useDisclosure } from '@mantine/hooks';

export function ThemeToggle() {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group justify="center">
      <Modal opened={opened} onClose={close} title="Change theme" centered>
        <Select
          label="Color Theme"
          placeholder="Pick value"
          data={THEMES}
          value={theme}
          onChange={(value, option) => {
            if (value) {
              dispatch(setTheme(value));
            }
          }}
        />
        <Button fullWidth onClick={close} mt="md">
          Close
        </Button>
      </Modal>
      <ActionIcon
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
        className={classes.actionIcon}
        onClick={open}
      >
        <IconPalette className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconPalette className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}
