import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    '',
    '/hizmetler',
    '/hizmetler/tabela-montaj',
    '/hizmetler/cephe-temizligi',
    '/hizmetler/elektrik-bakim',
    '/hizmetler/agac-budama',
    '/bolgeler',
    '/bolgeler/cankaya-sepetli-vinc-kiralama',
    '/bolgeler/yenimahalle-sepetli-vinc-kiralama',
    '/bolgeler/ostim-sepetli-vinc-kiralama',
    '/bolgeler/ivedik-sepetli-vinc-kiralama',
    '/fiyatlar',
    '/iletisim',
    '/hakkimizda',
    '/blog',
    ...getAllPosts().map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/blog/') ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
