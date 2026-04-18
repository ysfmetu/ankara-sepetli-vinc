import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Trailing slash olmayan yapıyı zorunlu kıl (sitemap & canonical ile tutarlılık)
  trailingSlash: false,

  async redirects() {
    return [
      // ─── 1. WWW → Non-WWW (301 Kalıcı Yönlendirme) ───────────────────────
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ankarasepetlivinckirala.com' }],
        destination: 'https://ankarasepetlivinckirala.com/:path*',
        permanent: true,
      },

      // ─── 2. Eski Hizmet Sayfaları → /hizmetler/ Altına ───────────────────
      {
        source: '/sepetli-vinc-kiralama',
        destination: '/hizmetler/sepetli-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/operatorlu-vinc-kiralama',
        destination: '/hizmetler/operatorlu-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/saatlik-vinc-kiralama',
        destination: '/hizmetler/saatlik-vinc-kiralama',
        permanent: true,
      },
      {
        source: '/gunluk-vinc-kiralama',
        destination: '/hizmetler/gunluk-vinc-kiralama',
        permanent: true,
      },

      // ─── 3. Eski Bölge URL'leri → /bolgeler/ Altına (301) ─────────────────
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
        destination: '/bolgeler/sincan-sepetli-vinc-kiralama',
        permanent: true,
      },

      // ─── 4. Eski Hizmet/Fiyat Sayfaları (Legacy) ─────────────────────────
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
        destination: '/hizmetler/sepetli-vinc-kiralama',
        permanent: true,
      },

      // ─── 5. Eski Blog URL'leri ─────────────────────────────────────────────
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
    ];
  },
};

export default nextConfig;
