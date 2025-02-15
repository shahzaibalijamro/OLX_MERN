import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.olx.com.pk",
      },
    ],
  },
};

export default nextConfig;