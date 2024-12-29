export const logger = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.log('LOGGER: ', ...args);
};
