import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins = config.plugins.filter(
        (plugin) =>
          plugin.constructor.name !== "ReactRefreshWebpackPlugin" &&
          plugin.constructor.name !== "ReactDevOverlayPlugin"
      );
    }
    config.resolve.alias["@components"] = path.resolve(
      process.cwd(),
      "components"
    );

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "startupqab.duckdns.org",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
