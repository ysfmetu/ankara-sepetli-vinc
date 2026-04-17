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
        '/iletisim',
        '/hizmetler/sepetli-vinc-kiralama',
        '/hizmetler/operatorlu-vinc-kiralama',
        '/hizmetler/saatlik-vinc-kiralama',
        '/hizmetler/gunluk-vinc-kiralama'
      ],
      disallow: [
        '/admin',
        '/private',
        '/drafts',
        '/unused-posts'
      ],
    },
    sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
