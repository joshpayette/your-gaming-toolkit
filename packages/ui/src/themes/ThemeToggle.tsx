'use client';

import { IconPalette } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Button, Group, Modal, Select, Stack } from '@mantine/core';
import classes from './ThemeToggle.module.css';
import { setTheme, setVariant } from '../store/themeSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useDisclosure } from '@mantine/hooks';
import { THEMES, VARIANTS } from './colors/constants';

export function ThemeToggle() {
  const theme = useAppSelector(state => state.theme.theme);
  const variant = useAppSelector(state => state.theme.variant);
  const dispatch = useAppDispatch();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Change theme" centered>
        <Stack>
          <Select
            label="Variant"
            placeholder="Pick value"
            data={VARIANTS}
            value={variant}
            onChange={(value, _option) => {
              if (value) {
                dispatch(setVariant(value));
              }
            }}
          />
          <Select
            label="Colors"
            placeholder="Pick value"
            data={THEMES}
            value={theme}
            onChange={(value, _option) => {
              if (value) {
                dispatch(setTheme(value));
              }
            }}
          />
          <Button fullWidth onClick={close} mt="md">
            Close
          </Button>
        </Stack>
      </Modal>
      <Group justify="center">
        <ActionIcon
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
          className={classes.actionIcon}
          onClick={open}
        >
          <IconPalette
            className={cx(classes.icon, classes.light)}
            stroke={1.5}
          />
          <IconPalette
            className={cx(classes.icon, classes.dark)}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </>
  );
}
