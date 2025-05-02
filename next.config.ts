import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/sass'],
    additionalData: `@use 'variables' as *;`,
  },
};

export default nextConfig;

