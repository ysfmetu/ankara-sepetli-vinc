import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const posts = getAllPosts();

  const routes = [
    '',
    '/blog',
    '/hizmetler',
    '/iletisim',
    '/sepetli-vinc-kiralama',
    '/operatorlu-vinc-kiralama',
    '/saatlik-vinc-kiralama',
    '/gunluk-vinc-kiralama',
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => {
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'monthly';
    if (route === '' || route === '/blog') {
      changeFrequency = 'daily';
    } else if (route.startsWith('/blog/')) {
      changeFrequency = 'weekly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === '' ? 1 : route === '/blog' ? 0.9 : route.startsWith('/blog/') ? 0.7 : 0.8,
    };
  });
}
