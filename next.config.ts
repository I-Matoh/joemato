import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/joemato",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;