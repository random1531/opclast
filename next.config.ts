import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Pour le développement - désactive l'optimisation des images
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
