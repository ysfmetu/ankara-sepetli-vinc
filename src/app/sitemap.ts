import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ankarasepetlivinc.com';

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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
