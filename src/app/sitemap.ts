import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    '',
    '/blog',
    '/hizmetler',
    '/iletisim',
    '/sepetli-vinc-kiralama',
    '/operatorlu-vinc-kiralama',
    '/saatlik-vinc-kiralama',
    '/gunluk-vinc-kiralama',
    ...getPublishedPosts().map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/blog/') ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
