import { SEO_CONFIG } from '@/config/seo';

/**
 * Verilen path'i teknik SEO standartlarına göre temizler ve tam (absolute) canonical URL döndürür.
 * Kurallar:
 * 1. Küçük harfe çevirir.
 * 2. Sondaki slash'i (trailing slash) siler.
 * 3. Base URL ile birleştirir.
 */
export function getCanonicalUrl(pathname: string = ''): string {
  // Query parametrelerini temizle (canonical için gerekmez)
  const pathWithoutQuery = pathname.split('?')[0];
  
  // Küçük harfe çevir ve baştaki/sondaki slashları temizle
  let cleanPath = pathWithoutQuery.toLowerCase().trim();
  
  // Baştaki slash'i koruyalım ama sondakini silelim
  if (cleanPath.endsWith('/') && cleanPath.length > 1) {
    cleanPath = cleanPath.slice(0, -1);
  }
  
  // Eğer sadece / ise boş kalsın (base URL ile birleşince https://domain.com/ olmaması için)
  if (cleanPath === '/') {
    cleanPath = '';
  }

  // Eğer path başı / ile başlamıyorsa ekleyelim (ancak boş değilse)
  if (cleanPath !== '' && !cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  return `${SEO_CONFIG.baseUrl}${cleanPath}`;
}

/**
 * Metadata objesi içindeki alternates: canonical alanını otomatik oluşturur.
 */
export function getMetadataAlternates(pathname: string) {
  return {
    canonical: getCanonicalUrl(pathname),
  };
}
