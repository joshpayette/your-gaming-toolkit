'use client';

import { IconChevronDown } from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { Logo } from './(components)/Logo';
import { ColorSchemeToggle } from './(features)/themes/ColorSchemeToggle';
import { Remnant2Icon } from './(components)/icons/Remnant2Icon';
import { ThemeToggle } from './(features)/themes/ThemeToggle';
import { signIn, signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Link } from '@/app/(components)/Link';

function LoginLogoutButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Button variant="default" loading={true}>
        &nbsp;
      </Button>
    );
  }

  if (status === 'unauthenticated' || !session) {
    return (
      <Button variant="default" onClick={() => signIn()}>
        Log in
      </Button>
    );
  }

  return (
    <Button variant="default" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}

const games = [
  {
    icon: <Remnant2Icon width={22} height={22} />,
    title: 'Remnant 2',
    description: 'Build tools, item tracking, item interactions, and more!',
    path: '/remnant2'
  }
];

export function Header({ showComingSoon }: { showComingSoon?: boolean }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const links = games.map(item => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      onClick={() => redirect(item.path)}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          {item.icon}
        </ThemeIcon>
        <Stack>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </Stack>
      </Group>
    </UnstyledButton>
  ));

  if (showComingSoon) {
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

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Logo width={58} height={40} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Games
                    </Box>
                    <IconChevronDown size={16} className={classes.icon} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Games</Text>
                  {/* <Anchor href="#" fz="xs">
                    View all
                  </Anchor> */}
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Getting started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Not sure where to start? Check out our FAQ!
                      </Text>
                    </div>
                    <Button variant="default" component={Link} href="/faq">
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Support Us!
            </a>
          </Group>

          <Group visibleFrom="sm">
            <ColorSchemeToggle />
            <ThemeToggle />
            <LoginLogoutButton />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Games
              </Box>
              <IconChevronDown size={16} className={classes.icon} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Support Us!
          </a>

          <Divider my="sm" />

          <Group justify="center" pb="xl" px="md">
            <ColorSchemeToggle />
            <ThemeToggle />
            <LoginLogoutButton />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
