import { Button, Container, Text, Title } from '@mantine/core';
import classes from './ComingSoon.module.css';

export function ComingSoon() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{
                  from: 'var(--mantine-primary-color-5)',
                  to: 'var(--mantine-primary-color-2)'
                }}
              >
                fully featured
              </Text>{' '}
              collection of gaming tools
            </Title>

            <Text className={classes.description} mt={30}>
              From the creator of Remnant 2 Toolkit, Your Gaming Toolkit is a
              collection of tools for a variety of games. It is currently in
              active development and will be available as soon as possible.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
