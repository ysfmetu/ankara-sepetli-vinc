import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    template: '%s | Ankara Vinç Kiralama',
    default: 'Ankara Vinç Kiralama | Sepetli Vinç ve Platform Hizmetleri',
  },
  description:
    'Ankara vinç kiralama alanında lider çözüm ortağınız. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel sepetli vinç kiralama ankara hizmetleri. Operatörlü, saatlik ve günlük kiralama.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ankara Vinç Kiralama | Sepetli Vinç ve Platform Hizmetleri',
    description:
      'Ankara vinç kiralama ve sepetli platform alanında profesyonel çözümler. Güvenli operatörlü araçlarla saatlik, günlük kiralama hizmeti.',
    url: siteUrl,
    siteName: 'Ankara Sepetli Vinç Kiralama',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Sepetli Vinç Kiralama | 7/24 Operatörlü Hizmet',
    description:
      'Ankara sepetli vinç kiralama hizmeti. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel operatörlü vinç kiralama. En uygun fiyatlar.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ankara Sepetli Vinç Kiralama',
  image: `${siteUrl}/images/hero-bg.jpg`,
  description: 'Ankara sepetli vinç kiralama hizmeti. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel operatörlü vinç kiralama.',
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+905320000000',
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
