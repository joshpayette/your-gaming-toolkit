'use client';

import { Accordion, Center, Container, Grid, Text, Title } from '@mantine/core';
import classes from './FAQContent.module.css';
import Image from 'next/image';
import { getImagePath } from '@/app/(lib)/get-image-path';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function FAQContent() {
  const faqReady = false;

  if (!faqReady) {
    return (
      <Container size="xl">
        <Center>
          <Text size="xl" fw={700}>
            Coming Soon
          </Text>
        </Center>
      </Container>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Container size="xl">
        <Grid id="faq-grid" gutter={50} justify="center" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={getImagePath({ app: 'ygt', path: 'general/faq.jpg' })}
              alt="Frequently Asked Questions"
              width={512}
              height={288}
              layout="responsive"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  How can I reset my password?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Can I create more that one account?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  How can I subscribe to monthly newsletter?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
