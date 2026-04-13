import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy Blog Redirects
      {
        source: '/blog/cephe-temizligi-sepetli-vinc',
        destination: '/hizmetler/cephe-temizligi-sepetli-vinc',
        permanent: true,
      },
      {
        source: '/blog/sepetli-vinc-kac-metreye-cikar',
        destination: '/blog/sepetli-vinc-kac-metreye-kadar-cikar',
        permanent: true,
      },
      // Duplicate Region Redirects (Root to /bolgeler)
      {
        source: '/cankaya-sepetli-vinc',
        destination: '/bolgeler/cankaya-sepetli-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/etimesgut-sepetli-vinc',
        destination: '/bolgeler/etimesgut-sepetli-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/ostim-sepetli-vinc',
        destination: '/bolgeler/ostim-sepetli-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/yenimahalle-sepetli-vinc',
        destination: '/bolgeler/yenimahalle-sepetli-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/sincan-sepetli-vinc',
        destination: '/bolgeler/sincan-sepetli-vinc-kiralama', // Sincan had a root page too
        permanent: true,
      },
      // Service and Price Redirects
      {
        source: '/fiyatlar',
        destination: '/sepetli-vinc-kiralama-fiyatlari',
        permanent: true,
      },
      {
        source: '/hizmetler/cephe-temizligi',
        destination: '/hizmetler/cephe-temizligi-sepetli-vinc',
        permanent: true,
      },
      {
        source: '/ankara-sepetli-vinc-kiralama',
        destination: '/sepetli-vinc-kiralama',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
