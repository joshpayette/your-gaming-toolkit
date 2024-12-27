import { IconPalette } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Button, Group, TextInput } from '@mantine/core';
import classes from './index.module.css';
import { modals } from '@mantine/modals';

export function ThemeToggle() {
  return (
    <Group justify="center">
      <ActionIcon
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
        className={classes.actionIcon}
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput
                  label="Your email"
                  placeholder="Your email"
                  data-autofocus
                />
                <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                  Submit
                </Button>
              </>
            )
          });
        }}
      >
        <IconPalette className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconPalette className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}
