/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrintMode: true,
  transpilePackages: ['@ygt/ui'],
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
