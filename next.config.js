/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? "/test" : undefined,
  assetPrefix: isProd ? "/test" : undefined,
};

module.exports = nextConfig;
