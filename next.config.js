/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "xe845uo7to7d",
    CONTENTFUL_ACCESS_KEY: "uBT0Jqs46gpmPPeg5DhZW7u8QzFK-Ve_twvv1L4C7V4"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
