import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  ChevronRight,
  ClipboardList,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Kahramankazan Sepetli Vinç Kiralama | Fabrika ve Sanayi',
  description:
    'Ankara Kahramankazan ve Keresteciler bölgesindeki dev üretim tesisleri, ağır makine montajı ve çelik konstrüksiyon işleri için profesyonel vinç kiralama.',
  alternates: getMetadataAlternates('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Kahramankazan Sepetli Vinç Kiralama | Fabrika ve Sanayi',
    description:
      'Ankara Kahramankazan, Keresteciler ve Saray bölgesindeki dev üretim tesisleri, ağır makine montajı ve çelik konstrüksiyon işleri için vinç hizmeti. Arayın: 0551 606 68 78',
    url: getCanonicalUrl('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Kahramankazan’da vinç ne kadar sürede gelir?',
    a: 'Kahramankazan, Otonomi, Keresteciler ve Saray çevresine araç uygunluğu, trafik ve çalışma konumuna göre mümkün olan en kısa sürede sepetli vinç yönlendirmesi yapıyoruz. Güncel araç durumunu ve tahmini ulaşım süresini telefon veya WhatsApp üzerinden öğrenebilirsiniz.',
  },
  {
    q: 'Otonomi’de dış cephe cam silme hizmeti veriyor musunuz?',
    a: 'Evet. Kahramankazan Otonomi ve çevresindeki ticari yapılarda sepetli vinç temini ile dış cephe cam silme uygulamasını tek operasyonda birlikte sunuyoruz. Detaylı bilgi ve randevu için iletişime geçebilirsiniz.',
  },
  {
    q: 'Kahramankazan’da saatlik veya günlük vinç kiralanabilir mi?',
    a: 'Evet. Kısa süreli montaj ve tabela işleri için saatlik, fabrika bakımı veya geniş kapsamlı projeler için günlük kiralama seçeneklerimiz mevcuttur. İşinizin kapsamına göre en uygun kiralama planı oluşturulur.',
  },
  {
    q: 'Sepetli vinç hizmetine operatör dahil mi?',
    a: 'Evet. Sepetli vinç kiralama hizmetlerimiz iş güvenliği kurallarına uygun olarak deneyimli ve sertifikalı operatörlerimiz ile birlikte sunulmaktadır. Operasyon sürecinde güvenli çalışma ortamı sağlanır.',
  },
];

export default function KahramankazanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Kahramankazan Sepetli Vinç Kiralama',
        provider: {
          '@id': `${SEO_CONFIG.baseUrl}/#business`,
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Kahramankazan',
          },
          {
            '@type': 'City',
            name: 'Ankara',
          },
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description:
          'Kahramankazan, Otonomi, Saray ve Keresteciler Sanayi bölgesindeki üretim tesisleri, iş merkezleri ve ticari yapılar için operatörlü sepetli vinç ve dış cephe erişim hizmeti.',
        url: getCanonicalUrl('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
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
            name: 'Kahramankazan Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/kahramankazan-sepetli-vinc-kiralama`,
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
              src="/images/bolge/sanayi-vinc.jpg"
              alt="kahramankazan sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900/90 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Kahramankazan', href: '/bolgeler/kahramankazan-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Kahramankazan Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
                Ankara Kahramankazan, Otonomi, Keresteciler ve Saray’da 7/24 Vinç Hizmeti
              </h2>

              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  Ankara Kahramankazan, Otonomi, Keresteciler ve Saray çevresinde profesyonel ve
                  güvenilir{' '}
                  <Link
                    href="/hizmetler/operatorlu-vinc-kiralama"
                    className="text-slate-300 hover:text-white underline font-medium"
                  >
                    operatörlü sepetli vinç kiralama
                  </Link>{' '}
                  hizmeti sunuyoruz. Fabrika ve depo bakımından tabela montajına, endüstriyel
                  tesislerden yüksek erişim gerektiren tüm teknik işlere kadar sahaya en uygun
                  araçları yönlendiriyoruz.
                </p>
                <p>
                  Otonomi bölgesinde yer alan ticari yapılarda sepetli vinç desteğiyle dış cephe cam
                  temizliği çalışmalarını tek operasyonda başarıyla tamamlıyoruz. İhtiyacınıza göre
                  kısa süreli montaj işleri için{' '}
                  <Link
                    href="/hizmetler/saatlik-vinc-kiralama"
                    className="text-slate-300 hover:text-white underline font-medium"
                  >
                    saatlik vinç kiralama
                  </Link>
                  , kapsamlı sanayi projeleri içinse{' '}
                  <Link
                    href="/hizmetler/gunluk-vinc-kiralama"
                    className="text-slate-300 hover:text-white underline font-medium"
                  >
                    günlük vinç kiralama
                  </Link>{' '}
                  seçeneklerimizden faydalanabilirsiniz. Kahramankazan ve çevresinde
                  gerçekleştirdiğimiz gerçek saha çalışmalarını aşağıda inceleyebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-700 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-slate-900/30"
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
                <a
                  href="https://wa.me/905516066878?text=Merhaba,%20Kahramankazan'daki%20projemiz%20i%C3%A7in%20fiyat%20almak%20istiyoruz."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <ClipboardList size={20} />
                  Proje Gönder Fiyat Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bölüm: Kahramankazan’da Gerçekleştirdiğimiz Vinç Çalışmaları (Hero'dan hemen sonra) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kahramankazan’da Gerçekleştirdiğimiz Vinç Çalışmaları
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Otonomi, Keresteciler ve Saray bölgesinde tamamladığımız gerçek saha operasyonlarını inceleyin.
              </p>
            </div>

            {/* Doğrulanmış Gerçek Saha Çalışmaları Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kart 1: Otonomi */}
              <Link
                href="/blog/otonomi-sepetli-vinc-dis-cephe-cam-silme-kahramankazan"
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group hover:border-slate-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer"
                aria-label="Otonomi İş Merkezinde Dış Cephe Cam Silme ve Sepetli Vinç çalışmasını incele"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blog/otonomi-kahramankazan-sepetli-vinc-cam-silme.webp"
                    alt="Ankara Kahramankazan Otonomi iş merkezinde sepetli vinç ile dış cephe cam silme çalışması"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Otonomi / Kahramankazan
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-800 transition-colors mb-3">
                      Otonomi İş Merkezinde Dış Cephe Cam Silme ve Sepetli Vinç
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Ankara Kahramankazan Otonomi bölgesindeki bir iş merkezinde, dış cephe cam silme ve sepetli vinç hizmetini birlikte gerçekleştirdik. Yüksek cam yüzeylerine vinçle erişim sağlanarak temizlik çalışması tamamlandı.
                    </p>
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 flex items-center gap-1.5 mt-auto pt-3 border-t border-gray-100">
                    Gerçek çalışmayı incele &rarr;
                  </span>
                </div>
              </Link>

              {/* Kart 2: Keresteciler */}
              <Link
                href="/blog/keresteciler-sanayi-sitesi-karot-alma-sepetli-vinc-destegi"
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group hover:border-slate-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer"
                aria-label="Keresteciler Sanayi Sitesi Karot Alma Çalışması projesini incele"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blog/keresteciler-sanayi-sitesi-karot-alma-islemi-kahramankazan-ankara.png"
                    alt="keresteciler sanayi sitesi karot alma çalışması"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Keresteciler / Saray
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-800 transition-colors mb-3">
                      Keresteciler Sanayi Sitesi Karot Çalışması
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Keresteciler Sanayi Sitesi&apos;ndeki yeni endüstriyel yapının kolonlarından karot
                      numunesi alınması amacıyla 27 metrelik sepetli platform desteği sağlandı.
                    </p>
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 flex items-center gap-1.5 mt-auto pt-3 border-t border-gray-100">
                    Projeyi İncele &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Bölüm: Kahramankazan’da Sunulan Vinç Hizmetleri */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Kahramankazan’da Sunulan Vinç Hizmetleri
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sanayi tesisleri, iş merkezleri ve ticari yapılar için sunduğumuz kiralama çözümleri.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/hizmetler/sepetli-vinc-kiralama"
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-slate-900 transition-colors">
                  Sepetli Vinç Kiralama
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/hizmetler/operatorlu-vinc-kiralama"
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-slate-900 transition-colors">
                  Operatörlü Vinç Kiralama
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/hizmetler/saatlik-vinc-kiralama"
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-slate-900 transition-colors">
                  Saatlik Vinç Kiralama
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/hizmetler/gunluk-vinc-kiralama"
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-slate-900 transition-colors">
                  Günlük Vinç Kiralama
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/hizmetler/cephe-temizligi-sepetli-vinc"
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-slate-900 transition-colors">
                  Dış Cephe Temizliği İçin Sepetli Vinç
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/hizmetler/elektrik-bakim"
                className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-slate-900 transition-colors">
                  Elektrik Bakım Çalışmaları
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Sıkça Sorulan Sorular Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                Kahramankazan, Otonomi, Keresteciler ve Saray bölgesindeki vinç operasyonlarıyla ilgili merak edilenler.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-slate-700 transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-gray-50 p-2 rounded-full shadow-sm border border-gray-100">
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
          className="flex-1 bg-slate-700 hover:bg-slate-800 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
