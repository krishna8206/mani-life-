import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 95, 98, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://mani-life-1n34.vercel.app/api/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/all-product-range:ext(.*)",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
