import { MetadataRoute } from 'next';
import { getAllPosts, getPublishedPosts } from '@/lib/mdx';
import { getCanonicalUrl } from '@/lib/seo-utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();

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
    '/sepetli-vinc-kiralama',
    '/operatorlu-vinc-kiralama',
    '/saatlik-vinc-kiralama',
    '/gunluk-vinc-kiralama',
    '/sepetli-vinc-kiralama-fiyatlari',
    '/bolgeler',
    '/bolgeler/etimesgut-sepetli-vinc-kiralama',
    '/bolgeler/ostim-sepetli-vinc-kiralama',
    '/bolgeler/yenimahalle-sepetli-vinc-kiralama',
    '/bolgeler/cankaya-sepetli-vinc-kiralama',
    '/bolgeler/mamak-sepetli-vinc-kiralama',
    '/bolgeler/ivedik-sepetli-vinc-kiralama',
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => {
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'monthly';
    if (route === '' || route === '/blog') {
      changeFrequency = 'daily';
    } else if (
      route.startsWith('/hizmetler/') ||
      route.startsWith('/bolgeler/') ||
      route === '/sepetli-vinc-kiralama'
    ) {
      changeFrequency = 'weekly';
    } else if (route.startsWith('/blog/')) {
      changeFrequency = 'weekly';
    }

    let priority = 0.8;
    if (route === '') priority = 1;
    else if (route === '/blog') priority = 0.9;
    else if (route.startsWith('/hizmetler/')) priority = 0.85;
    else if (route.startsWith('/bolgeler/')) priority = 0.75;
    else if (route.startsWith('/blog/')) priority = 0.7;

    return {
      url: getCanonicalUrl(route),
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}

