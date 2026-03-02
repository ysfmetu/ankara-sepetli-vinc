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
    default: 'Ankara Sepetli Vinç Kiralama',
  },
  description:
    'Ankara içi uygun fiyatlı kiralık sepetli vinç, platform ve hiyap hizmetleri. 7/24 hizmetinizdeyiz.',
  metadataBase: new URL('https://ankarasepetlivinc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ankara Sepetli Vinç Kiralama',
    description:
      'Ankara içi uygun fiyatlı kiralık sepetli vinç, platform ve hiyap hizmetleri. 7/24 hizmetinizdeyiz.',
    url: 'https://ankarasepetlivinc.com',
    siteName: 'Ankara Sepetli Vinç',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Sepetli Vinç Kiralama',
    description:
      'Ankara içi uygun fiyatlı kiralık sepetli vinç, platform ve hiyap hizmetleri. 7/24 hizmetinizdeyiz.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
