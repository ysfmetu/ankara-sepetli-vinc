import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/cephe-temizligi-sepetli-vinc',
        destination: '/hizmetler/cephe-temizligi-sepetli-vinc',
        permanent: true, // 308 redirect in next.js
      },
      {
        source: '/blog/sepetli-vinc-kac-metreye-cikar',
        destination: '/blog/sepetli-vinc-kac-metreye-kadar-cikar',
        permanent: true, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
