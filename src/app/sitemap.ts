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
    '/hizmetler/cephe-temizligi-sepetli-vinc',
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
    } else if (route === '/hizmetler/cephe-temizligi-sepetli-vinc') {
      changeFrequency = 'weekly';
    } else if (route.startsWith('/blog/')) {
      changeFrequency = 'weekly';
    }

    let priority = 0.8;
    if (route === '') priority = 1;
    else if (route === '/blog') priority = 0.9;
    else if (route === '/hizmetler/cephe-temizligi-sepetli-vinc') priority = 0.85;
    else if (route.startsWith('/blog/')) priority = 0.7;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}

