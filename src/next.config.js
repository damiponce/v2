/** @type {import('next').NextConfig} */

// const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = {
   reactStrictMode: true,
   images: {
      loader: 'custom',
      domains: ['localhost', '13.92.59.236', '192.168.0.69'],
      imageSizes: [16, 32, 48, 64],
      deviceSizes: [
         96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
      ],
   },
   module: {
      rules: [{ test: /\.toml$/, use: 'raw-loader' }],
   },
   webpack: (config, { isServer }) => {
      if (!isServer) {
         // config.resolve.fallback.fs = false;
      }
      return config;
   },
   assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.statically.io/gh/damiponce/v2/gh-pages/' : '.',
};
module.exports = nextConfig;
