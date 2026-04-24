import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'ankarasepetlivinckirala.com';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Skip canonicalization for localhost / dev / preview environments
  if (
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1') ||
    hostname.includes('vercel.app')
  ) {
    return NextResponse.next();
  }

  // ─── Compute the fully canonical URL in a single pass ─────────────────
  // All normalization rules are applied cumulatively before a single redirect.
  let needsRedirect = false;

  // 1. Force HTTPS
  if (protocol !== 'https') {
    needsRedirect = true;
  }

  // 2. Force non-www
  let canonicalHost = hostname;
  if (canonicalHost.startsWith('www.')) {
    canonicalHost = canonicalHost.replace(/^www\./, '');
    needsRedirect = true;
  }

  // 3. Force canonical host
  if (canonicalHost !== CANONICAL_HOST) {
    canonicalHost = CANONICAL_HOST;
    needsRedirect = true;
  }

  // 4. Remove trailing slash (except root /)
  // next.config.ts has skipTrailingSlashRedirect: true, so middleware is the
  // sole handler — this prevents 2-hop chains with other normalizations.
  let canonicalPath = pathname;
  if (canonicalPath.length > 1 && canonicalPath.endsWith('/')) {
    canonicalPath = canonicalPath.replace(/\/+$/, '');
    needsRedirect = true;
  }

  // 5. Enforce lowercase paths
  const lowerPath = canonicalPath.toLowerCase();
  if (canonicalPath !== lowerPath) {
    canonicalPath = lowerPath;
    needsRedirect = true;
  }

  // 6. Legacy URL mapping (instead of next.config.ts redirects for single-pass 301)
  const legacyRedirects: Record<string, string> = {
    '/sepetli-vinc-kiralama': '/hizmetler/sepetli-vinc-kiralama',
    '/operatorlu-vinc-kiralama': '/hizmetler/operatorlu-vinc-kiralama',
    '/saatlik-vinc-kiralama': '/hizmetler/saatlik-vinc-kiralama',
    '/gunluk-vinc-kiralama': '/hizmetler/gunluk-vinc-kiralama',
    '/cankaya-sepetli-vinc': '/bolgeler/cankaya-sepetli-vinc-kiralama',
    '/etimesgut-sepetli-vinc': '/bolgeler/etimesgut-sepetli-vinc-kiralama',
    '/ostim-sepetli-vinc': '/bolgeler/ostim-sepetli-vinc-kiralama',
    '/yenimahalle-sepetli-vinc': '/bolgeler/yenimahalle-sepetli-vinc-kiralama',
    '/sincan-sepetli-vinc': '/bolgeler/sincan-sepetli-vinc-kiralama',
    '/fiyatlar': '/sepetli-vinc-kiralama-fiyatlari',
    '/hizmetler/cephe-temizligi': '/hizmetler/cephe-temizligi-sepetli-vinc',
    '/ankara-sepetli-vinc-kiralama': '/hizmetler/sepetli-vinc-kiralama',
    '/blog/cephe-temizligi-sepetli-vinc': '/hizmetler/cephe-temizligi-sepetli-vinc',
    '/blog/sepetli-vinc-kac-metreye-cikar': '/blog/sepetli-vinc-kac-metreye-kadar-cikar',
  };

  if (legacyRedirects[canonicalPath]) {
    canonicalPath = legacyRedirects[canonicalPath];
    needsRedirect = true;
  }

  // ─── Single-hop 301 redirect ──────────────────────────────────────────
  if (needsRedirect) {
    const canonicalUrl = `https://${canonicalHost}${canonicalPath}${search}`;
    const response = NextResponse.redirect(canonicalUrl, 301);
    // Cache the redirect for 1 day — long enough for crawl efficiency,
    // short enough to correct mistakes without waiting a year.
    response.headers.set('Cache-Control', 'public, max-age=86400');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, favicon.svg (favicon files)
     * - Static assets with file extensions (.png, .jpg, .css, .js, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|favicon\\.svg|.*\\..*).*)',
  ],
};

