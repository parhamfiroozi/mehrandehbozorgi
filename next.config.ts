/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'your.cdn.com' },
      // or: domains: ['your.cdn.com']
    ],
  },
};
module.exports = nextConfig;
