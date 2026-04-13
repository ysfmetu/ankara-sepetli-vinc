import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

import { SEO_CONFIG } from '@/config/seo';
import { getMetadataAlternates } from '@/lib/seo-utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SEO_CONFIG.siteName}`,
    default: SEO_CONFIG.defaultTitle,
  },
  description: SEO_CONFIG.defaultDescription,
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  alternates: getMetadataAlternates('/'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.baseUrl,
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SEO_CONFIG.siteName,
  image: `${SEO_CONFIG.baseUrl}/images/hero-bg.jpg`,
  description: SEO_CONFIG.defaultDescription,
  '@id': SEO_CONFIG.baseUrl,
  url: SEO_CONFIG.baseUrl,
  telephone: '+905516066878',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yenimahalle',
    addressRegion: 'Ankara',
    addressCountry: 'TR',
  },
  areaServed: {
    '@type': 'City',
    name: 'Ankara',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-900`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
