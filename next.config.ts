import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ankarasepetlivinckirala.com',
          },
        ],
        destination: 'https://ankarasepetlivinckirala.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
