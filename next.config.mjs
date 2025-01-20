import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
    staticRouteIndicator: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ReactRefreshWebpackPlugin"
      );
    }
    config.resolve.alias['@components'] = path.resolve(process.cwd(), 'components');

    return config;
  },
};

export default nextConfig;
