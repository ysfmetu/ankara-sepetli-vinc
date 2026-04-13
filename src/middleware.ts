import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const pathname = url.pathname;

  // 1. Force HTTPS
  if (protocol === 'http' && !hostname?.includes('localhost') && !hostname?.includes('127.0.0.1')) {
    return NextResponse.redirect(`https://${hostname}${pathname}${url.search}`, 301);
  }

  // 2. WWW -> Non-WWW Redirect
  if (hostname?.startsWith('www.')) {
    const newHost = hostname.replace('www.', '');
    return NextResponse.redirect(`https://${newHost}${pathname}${url.search}`, 301);
  }

  // 3. Trailing Slash Removal (Ana sayfa hariç)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // 4. Lowercase Enforcement
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.).*)',
  ],
};
