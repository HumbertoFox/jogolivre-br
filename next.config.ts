import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rj22vymlrqn4lam6.public.blob.vercel-storage.com',
        pathname: '/startpage/**',
      },
      {
        protocol: 'https',
        hostname: 'rj22vymlrqn4lam6.public.blob.vercel-storage.com',
        pathname: '/onegamer/**',
      },
    ],
  },
};

export default nextConfig;
