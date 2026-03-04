import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
    template: '%s | Ankara Sepetli Vinç',
    default: 'Ankara Sepetli Vinç Kiralama | 7/24 Operatörlü Hizmet',
  },
  description:
    'Ankara sepetli vinç kiralama hizmeti. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel operatörlü vinç kiralama. En uygun sepetli vinç kiralama fiyatları.',
  metadataBase: new URL('https://ankarasepetlivinc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ankara Sepetli Vinç Kiralama | 7/24 Operatörlü Hizmet',
    description:
      'Ankara sepetli vinç kiralama hizmeti. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel operatörlü vinç kiralama. En uygun sepetli vinç kiralama fiyatları.',
    url: 'https://ankarasepetlivinc.com',
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
  image: 'https://ankarasepetlivinc.com/images/hero-bg.jpg',
  description: 'Ankara sepetli vinç kiralama hizmeti. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel operatörlü vinç kiralama.',
  '@id': 'https://ankarasepetlivinc.com',
  url: 'https://ankarasepetlivinc.com',
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
      </body>
    </html>
  );
}
