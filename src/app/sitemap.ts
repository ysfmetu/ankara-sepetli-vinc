import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/mdx';
import { getCanonicalUrl } from '@/lib/seo-utils';

// Sitemap ISR — regenerate at most once per hour instead of on every request.
export const revalidate = 3600;

// Slugs that have been consolidated into the main pricing page via 301 redirect
const REDIRECTED_BLOG_SLUGS = [
  'ankara-sepetli-vinc-kiralama-fiyatlari',
  'vinc-kiralama-ankara-fiyatlari-2026',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().filter((post) => !REDIRECTED_BLOG_SLUGS.includes(post.slug));

  const postDateMap = new Map<string, Date>();
  posts.forEach((p) => {
    const postRecord = p as unknown as Record<string, unknown>;
    const rawDate = postRecord.updated || postRecord.modified || postRecord.dateModified || p.date;
    if (rawDate && typeof rawDate === 'string') {
      const parsed = new Date(rawDate);
      if (!isNaN(parsed.getTime())) {
        postDateMap.set(`/blog/${p.slug}`, parsed);
      }
    }
  });

  const routes = [
    '',
    '/blog',
    '/hizmetler',
    '/hizmetler/cephe-temizligi-sepetli-vinc',
    '/hizmetler/tabela-montaj',
    '/hizmetler/elektrik-bakim',
    '/hizmetler/agac-budama',
    '/hakkimizda',
    '/iletisim',
    '/hizmetler/sepetli-vinc-kiralama',
    '/hizmetler/operatorlu-vinc-kiralama',
    '/hizmetler/saatlik-vinc-kiralama',
    '/hizmetler/gunluk-vinc-kiralama',
    '/sepetli-vinc-kiralama-fiyatlari',
    '/bolgeler',
    '/bolgeler/etimesgut-sepetli-vinc-kiralama',
    '/bolgeler/eryaman-sepetli-vinc-kiralama',
    '/bolgeler/ostim-sepetli-vinc-kiralama',
    '/bolgeler/yenimahalle-sepetli-vinc-kiralama',
    '/bolgeler/cankaya-sepetli-vinc-kiralama',
    '/bolgeler/mamak-sepetli-vinc-kiralama',
    '/bolgeler/ivedik-sepetli-vinc-kiralama',
    '/bolgeler/sincan-sepetli-vinc-kiralama',
    '/bolgeler/kecioren-sepetli-vinc-kiralama',
    '/bolgeler/altindag-sepetli-vinc-kiralama',
    '/bolgeler/pursaklar-sepetli-vinc-kiralama',
    '/bolgeler/golbasi-sepetli-vinc-kiralama',
    '/bolgeler/haymana-sepetli-vinc-kiralama',
    '/bolgeler/bala-sepetli-vinc-kiralama',
    '/bolgeler/kahramankazan-sepetli-vinc-kiralama',
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => {
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'monthly';
    if (route === '' || route === '/blog') {
      changeFrequency = 'daily';
    } else if (
      route.startsWith('/hizmetler/') ||
      route.startsWith('/bolgeler/') ||
      route === '/hizmetler/sepetli-vinc-kiralama'
    ) {
      changeFrequency = 'weekly';
    } else if (route.startsWith('/blog/')) {
      changeFrequency = 'weekly';
    }

    let priority = 0.8;
    if (route === '') priority = 1;
    else if (route === '/blog') priority = 0.9;
    else if (route === '/sepetli-vinc-kiralama-fiyatlari') priority = 0.9;
    else if (route.startsWith('/hizmetler/')) priority = 0.85;
    else if (route.startsWith('/bolgeler/')) priority = 0.75;
    else if (route.startsWith('/blog/')) priority = 0.7;

    // Determine lastModified date only if verified date exists
    let lastModified: Date | undefined = undefined;
    if (route === '/sepetli-vinc-kiralama-fiyatlari') {
      lastModified = new Date('2026-07-19');
    } else if (route.startsWith('/blog/') && postDateMap.has(route)) {
      lastModified = postDateMap.get(route);
    }

    return {
      url: getCanonicalUrl(route),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency,
      priority,
    };
  });
}
