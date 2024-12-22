type AppType = 'ygt';

const paths: Record<AppType, string> = {
  ygt: 'dbv3oah7mgkxy.cloudfront.net/ygt'
};

export function getImagePath({ app, path }: { app: AppType; path: string }) {
  return `https://${paths[app]}/${path}`;
}
