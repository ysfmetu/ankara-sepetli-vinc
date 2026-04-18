import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/blog',
        '/hizmetler',
        '/hizmetler/sepetli-vinc-kiralama',
        '/hizmetler/operatorlu-vinc-kiralama',
        '/hizmetler/saatlik-vinc-kiralama',
        '/hizmetler/gunluk-vinc-kiralama',
        '/hizmetler/cephe-temizligi-sepetli-vinc',
        '/hizmetler/tabela-montaj',
        '/hizmetler/elektrik-bakim',
        '/hizmetler/agac-budama',
        '/iletisim',
        '/hakkimizda',
        '/sepetli-vinc-kiralama-fiyatlari',
        '/bolgeler',
        '/bolgeler/cankaya-sepetli-vinc-kiralama',
        '/bolgeler/yenimahalle-sepetli-vinc-kiralama',
        '/bolgeler/sincan-sepetli-vinc-kiralama',
        '/bolgeler/kecioren-sepetli-vinc-kiralama',
        '/bolgeler/mamak-sepetli-vinc-kiralama',
        '/bolgeler/etimesgut-sepetli-vinc-kiralama',
        '/bolgeler/altindag-sepetli-vinc-kiralama',
        '/bolgeler/pursaklar-sepetli-vinc-kiralama',
        '/bolgeler/golbasi-sepetli-vinc-kiralama',
        '/bolgeler/kahramankazan-sepetli-vinc-kiralama',
        '/bolgeler/ostim-sepetli-vinc-kiralama',
        '/bolgeler/ivedik-sepetli-vinc-kiralama',
      ],
      disallow: [
        '/admin',
        '/private',
        '/drafts',
        '/unused-posts',
        '/api/',
        '/_next/',
      ],
    },
    sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
