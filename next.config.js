/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dbv3oah7mgkxy.cloudfront.net',
        port: '',
        pathname: '/**/*'
      }
    ]
  }
};

export default nextConfig;
