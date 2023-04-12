/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent-iad3-2.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent-iad3-1.cdninstagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
