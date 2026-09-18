import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  const commonDisallow = ['/admin', '/private', '/drafts', '/unused-posts', '/api/'];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: commonDisallow,
      },
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot'],
        allow: '/',
        disallow: commonDisallow,
      },
    ],
    // Host directive signals canonical domain to crawlers (Yandex).
    // Must be the bare domain — no scheme prefix.
    host: 'ankarasepetlivinckirala.com',
    sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
