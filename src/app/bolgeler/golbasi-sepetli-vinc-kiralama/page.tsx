import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Gölbaşı Sepetli Vinç Kiralama | İncek Villa & Dış Cephe',
  description:
    'Gölbaşı, Tulumtaş ve İncek çevresinde ağaç budama ve dış cephe işleri için sepetli vinç kiralama. Gerçek saha çalışmalarımızı inceleyin.',
  alternates: getMetadataAlternates('/bolgeler/golbasi-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Gölbaşı Sepetli Vinç Kiralama | İncek Villa ve Ağaç Budama',
    description:
      'Gölbaşı, Tulumtaş ve İncek çevresinde sepetli vinç kiralama. Villa sitesi ağaç budama çalışmamızın fotoğraflarını ve videolarını inceleyin.',
    url: getCanonicalUrl('/bolgeler/golbasi-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Gölbaşı’nda vinç ne kadar sürede gelir?',
    a: 'Ulaşım süresi çalışma konumuna, trafik durumuna ve araç uygunluğuna göre değişir. Güncel planlama ve tahmini ulaşım süresi için bizimle iletişime geçebilirsiniz.',
  },
  {
    q: 'Villa bahçesinde sepetli vinç kullanılabilir mi?',
    a: 'Araç girişi, zemin durumu ve kurulum alanı uygunsa kullanılabilir. Bahçe ve site içindeki erişim koşulları iş öncesinde değerlendirilir.',
  },
  {
    q: 'Ağaç budama için her zaman vinç gerekir mi?',
    a: 'Uygun yöntem ağacın yapısına, dalların konumuna ve çevre koşullarına bağlıdır. Sepetli vinç, yüksek ve erişilmesi zor dallara ulaşmak için değerlendirilebilen seçeneklerden biridir.',
  },
  {
    q: 'Gölbaşı’nda günlük kiralama yapılır mı?',
    a: 'Evet. İşin kapsamına ve erişim ihtiyacına göre saatlik veya günlük kiralama planlanabilir. Fiyat, çalışma süresi ve saha koşulları değerlendirilerek belirlenir.',
  },
];

export default function GolbasiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Gölbaşı Sepetli Vinç Kiralama',
        provider: {
          '@id': `${SEO_CONFIG.baseUrl}/#business`,
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Gölbaşı',
          },
          {
            '@type': 'City',
            name: 'Ankara',
          },
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description:
          "Gölbaşı ve İncek'te villa cephe onarımları, peyzaj, yüksek ağaç budama ve sepetli vinç hizmetleri.",
        url: getCanonicalUrl('/bolgeler/golbasi-sepetli-vinc-kiralama'),
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SEO_CONFIG.baseUrl}/#business`,
        name: 'ASV Ankara Sepetli Vinç Kiralama',
        url: SEO_CONFIG.baseUrl,
        telephone: '+905516066878',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ostim Organize Sanayi Bölgesi',
          addressLocality: 'Yenimahalle',
          addressRegion: 'Ankara',
          addressCountry: 'TR',
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: SEO_CONFIG.baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Bölgeler',
            item: `${SEO_CONFIG.baseUrl}/bolgeler`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Gölbaşı Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/golbasi-sepetli-vinc-kiralama`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-24 pb-0">
        {/* 1. Hero Alanı */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/blog/golbasi-tulumtas-sepetli-vinc-agac-budama.webp"
              alt="golbasi sepetli vinç kiralama"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-gray-900/90 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Gölbaşı', href: '/bolgeler/golbasi-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Gölbaşı Sepetli Vinç Kiralama
              </h1>
              <p className="text-lg text-gray-200 my-6 max-w-3xl leading-relaxed">
                Gölbaşı, Tulumtaş ve İncek çevresinde ağaç budama, villa bakımı ve dış cephe
                işleri için sepetli vinç kiralama hizmeti sunuyoruz. İşinize uygun erişim
                çözümünü saha koşullarına göre birlikte değerlendirebiliriz.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30"
                >
                  <Phone size={20} />
                  Hemen Ara: 0551 606 68 78
                </a>
                <a
                  href="https://wa.me/905516066878"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-500/30"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* Gerçek saha çalışması */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Gölbaşı'nda Tamamladığımız Vinç Çalışmaları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/blog/golbasi-tulumtas-villa-sitesi-agac-budama-sepetli-vinc"
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blog/golbasi-tulumtas-sepetli-vinc-agac-budama.webp"
                    alt="Tulumtaş villa sitesinde ağaç dallarına uzanan sepetli vinç"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-emerald-700 mb-2">Tulumtaş / Gölbaşı / Ankara</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tulumtaş Villa Sitesi – Ağaç Budama</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    70 konutluk villa sitesinde bir gün süren ağaç budama çalışmasında, yüksek ve erişimi zor dallara sepetli vinçle ulaşım sağlandı.
                  </p>
                  <span className="text-emerald-700 font-semibold">Gerçek çalışmayı incele →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gölbaşı Sepetli Vinç Hizmetleri
              </h2>
              <p className="text-lg text-gray-600">
                Ağaç budama ve peyzaj bakımı sırasında yüksek noktalara erişim, dış cephe ve montaj işleri için kiralama seçeneklerimiz. İşin kapsamına göre saatlik veya günlük planlama yapılır.
              </p>
            </div>
            <p className="text-center text-gray-600 mb-8">
              Kiralama bedelini etkileyen unsurlar için{' '}
              <Link href="/sepetli-vinc-kiralama-fiyatlari" className="text-emerald-700 underline">sepetli vinç kiralama fiyatları</Link>
              {' '}sayfamızı inceleyebilirsiniz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/hizmetler/sepetli-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">
                  Sepetli Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/operatorlu-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">
                  Operatörlü Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/saatlik-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">
                  Saatlik Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/gunluk-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">
                  Günlük Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/cephe-temizligi-sepetli-vinc"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">
                  Cephe Temizliği
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/agac-budama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">
                  Ağaç Budama Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                Gölbaşı ve İncek bölgelerindeki operasyonlar hakkında merak edilen detaylar.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MOBİL STICKY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] z-[100] flex p-2 gap-2">
        <a
          href="tel:05516066878"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
        >
          <Phone size={22} className="mb-1" />
          <span className="text-xs font-extrabold uppercase tracking-wide">Ara</span>
        </a>
        <a
          href="https://wa.me/905516066878"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#1ebd5a] text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
        >
          <MessageCircle size={22} className="mb-1" />
          <span className="text-xs font-extrabold uppercase tracking-wide">WhatsApp</span>
        </a>
      </div>

      <div className="h-[72px] md:hidden w-full bg-transparent"></div>
    </div>
  );
}
