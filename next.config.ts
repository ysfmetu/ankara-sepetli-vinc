import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Trailing slash olmayan yapıyı zorunlu kıl (sitemap & canonical ile tutarlılık)
  trailingSlash: false,

  // Trailing slash otomatik yönlendirmesini devre dışı bırak.
  // Bu redirect, middleware'den ÖNCE çalışır ve 2 adımlı chain'e neden olur
  // (örn: /Hizmetler/ → 308 /Hizmetler → 301 /hizmetler).
  // Middleware tüm normalleştirmeyi tek seferde yapar.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
