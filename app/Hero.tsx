import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { Link } from '@/app/(components)/link/Link';

export function HeroContainer() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Free, open source, and ad free {` `}
          <Text component="span" inherit className={classes.highlight}>
            gaming tools
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Create and share builds, track your progress, and much more with
            Your Gaming Toolkit.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="filled"
            size="lg"
            component={Link}
            href="/faq"
          >
            Get started
          </Button>
          <Button
            variant="outline"
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Support us
          </Button>
        </div>
      </div>
    </div>
  );
}
