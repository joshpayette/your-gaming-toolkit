import { log } from '@ygt/logger';
import { type JSX } from 'react';

export const metadata = {
  title: 'Store | Kitchen Sink'
};

export default function Store(): JSX.Element {
  log('Hey! This is the Store page.');

  return <p>Page</p>;
}
