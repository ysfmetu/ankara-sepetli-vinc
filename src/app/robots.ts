import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
