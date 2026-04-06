import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Keep strict mode enabled
  output: "export", // Enable static export for GitHub Pages
  basePath: "/joemato", // Add your GitHub repository name here
  assetPrefix: "/joemato/", // Ensure assets load correctly
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