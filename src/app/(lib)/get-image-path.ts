type AppType = 'ygt';

export function getImagePath({ app, path }: { app: AppType; path: string }) {
  // remove leading slash
  const cleanPath = path.replace(/^\//, '');
  return `https://dbv3oah7mgkxy.cloudfront.net/${app}/${cleanPath}`;
}
