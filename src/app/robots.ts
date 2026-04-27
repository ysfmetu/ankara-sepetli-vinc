import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/private',
          '/drafts',
          '/unused-posts',
          '/api/',
          '/_next/',
          // Block URL patterns with query parameters (faceted navigation etc.)
          '/*?*',
        ],
      },
    ],
    // Host directive signals canonical domain to crawlers (Yandex).
    // Must be the bare domain — no scheme prefix.
    host: 'ankarasepetlivinckirala.com',
    sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
