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
        '/sepetli-vinc-kiralama',
        '/operatorlu-vinc-kiralama',
        '/saatlik-vinc-kiralama',
        '/gunluk-vinc-kiralama'
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
