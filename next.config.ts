import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/cephe-temizligi-sepetli-vinc',
        destination: '/hizmetler/cephe-temizligi-sepetli-vinc',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
