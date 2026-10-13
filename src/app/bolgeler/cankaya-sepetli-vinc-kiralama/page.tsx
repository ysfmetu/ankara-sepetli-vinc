import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

interface RecentProject {
  title: string;
  location: string;
  description: string;
  href: string;
  badge: string;
  image: string;
}

const recentProjects: RecentProject[] = [
  {
    title: 'Hoşdere Akbank – Dış Cephe Cam Temizliği',
    location: 'Hoşdere Caddesi – Çankaya',
    description:
      'Çankaya Hoşdere\'deki Akbank şubesinde sepetli vinç kullanılarak gerçekleştirilen dış cephe cam temizliği çalışması.',
    href: '/blog/cankaya-hosdere-akbank-sepetli-vinc-cam-temizligi',
    badge: 'Hoşdere / Çankaya',
    image: '/images/blog/cankaya-hosdere-akbank-vinc-kiralama-calismasi.webp',
  },
  {
    title: 'Oran Sitesi – Çatı ve Oluk Tamiri',
    location: 'Oran Mahallesi – Çankaya',
    description:
      'Oran Sitesi\'nde hasarlı çatı oluğu sepetli vinç mobil platformuyla güvenli ve hızlı biçimde onarıldı.',
    href: '/blog/oran-sitesi-cankaya-cati-oluk-tamiri-sepetli-vinc',
    badge: 'Oran / Çankaya',
    image: '/images/blog/cankaya-oran-sepetli-vinc-cati-oluk-tamiri-asv-vinc.png',
  },
  {
    title: 'Beysukent – Sazak İnşaat Şantiyesi',
    location: 'Sazak İnşaat Şantiyesi – Beysukent',
    description:
      'Sazak İnşaat konut şantiyesinde 45 metrelik mobil platform ile dış cephe erişimi ve personel güvenliği sağlandı.',
    href: '/blog/beysukent-sazak-insaat-santiyesi-45-metre-mobil-platform-sepetli-vinc',
    badge: 'Beysukent / Çankaya',
    image: '/images/blog/beysukent-cankaya-sazak-insaat-45-metre-mobil-platform-kapak.png',
  },
  {
    title: 'Alacaatlı / Çayyolu – Villa Dış Cephe Çalışması',
    location: 'Çayyolu Mevkii – Çankaya',
    description:
      'Çayyolu Alacaatlı mevkiinde sepetli platform desteğiyle villa dış cephe, çatı ve boya çalışması tamamlandı.',
    href: '/blog/alacaatli-cayyolu-villa-dis-cephe-cati-calismasi-sepetli-vinc',
    badge: 'Çayyolu / Alacaatlı',
    image: '/images/blog/alacaatli-cayyolu-villa-dis-cephe-cati-calismasi-sepetli-vinc-asv.png',
  },
  {
    title: 'Bilkent – İş Merkezi Dış Cephe Çalışması',
    location: 'Mazı İnşaat Şantiyesi – Bilkent',
    description:
      'Mazı İnşaat yükleniciliğindeki iş merkezinde 27 metrelik sepetli platform ile çatı ve dış cephe işlemleri tamamlandı.',
    href: '/blog/bilkent-is-merkezi-dis-cephe-cati-calismasi-sepetli-vinc',
    badge: 'Bilkent / Çankaya',
    image: '/images/blog/bilkent-cankaya-sepetli-vinc-dis-cephe-cati-calismasi-asv-vinc.png',
  },
  {
    title: 'İncek / Ahlatlıbel – Dış Cephe Projesi',
    location: 'AS İnşaat Sitesi – İncek/Ahlatlıbel',
    description:
      'AS İnşaat site projelerinde mobil platform ile cam temizliği, silikon uygulaması ve dış cephe bakım desteği sağlandı.',
    href: '/blog/incek-ahlatlibel-sepetli-vinc-dis-cephe-calismasi',
    badge: 'İncek / Ahlatlıbel',
    image: '/images/blog/incek-ahlatlibel-asv-vinc-dis-cephe-calismasi-kapak.jpeg',
  },
  {
    title: 'Bahçelievler – Ağaç Budama Operasyonu',
    location: 'Büyülü Fener Bahçesi – Bahçelievler',
    description:
      'Bahçelievler bölgesinde çevre ve yaya güvenliği sağlanarak sepetli vinç ile yüksek ağaç budama çalışması tamamlandı.',
    href: '/blog/cankaya-bahcelievler-agac-budama-sepetli-vinc-destegi',
    badge: 'Bahçelievler / Çankaya',
    image: '/images/blog/ankara-sepetli-vinc-kiralama-bahcelievler-buyulu-fener-dut-agaci-budama.png',
  },
];

const serviceLinks = [
  {
    title: 'Sepetli Vinç Kiralama',
    href: '/hizmetler/sepetli-vinc-kiralama',
  },
  {
    title: 'Operatörlü Vinç Kiralama',
    href: '/hizmetler/operatorlu-vinc-kiralama',
  },
  {
    title: 'Dış Cephe Temizliği İçin Sepetli Vinç',
    href: '/hizmetler/cephe-temizligi-sepetli-vinc',
  },
  {
    title: 'Tabela ve Reklam Montajı',
    href: '/hizmetler/tabela-montaj',
  },
  {
    title: 'Saatlik Vinç Kiralama',
    href: '/hizmetler/saatlik-vinc-kiralama',
  },
  {
    title: 'Günlük Vinç Kiralama',
    href: '/hizmetler/gunluk-vinc-kiralama',
  },
];

export const metadata: Metadata = {
  title: 'Çankaya Sepetli Vinç Kiralama | Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Çankaya bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz. Hemen arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/bolgeler/cankaya-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Çankaya Sepetli Vinç Kiralama | Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Çankaya bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz. Hemen arayın: 0551 606 68 78',
    url: getCanonicalUrl('/bolgeler/cankaya-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: "Çankaya'da hangi bölgelerde sepetli vinç hizmeti veriyorsunuz?",
    a: "Kızılay, Balgat, Çukurambar, Hoşdere, Oran, Beysukent, Bilkent, İncek ve Bahçelievler başta olmak üzere Çankaya'nın tüm mahalle ve caddelerine araç yönlendirmesi sağlıyoruz.",
  },
  {
    q: 'Banka ve iş merkezi dış cephe çalışmalarında sepetli vinç kullanılabilir mi?',
    a: 'Evet. Cadde üzerindeki banka şubeleri, plazalar ve iş merkezlerinde dış cephe cam temizliği, tabela montajı ve bakım operasyonları için operatörlü sepetli vinç güvenle tercih edilmektedir.',
  },
  {
    q: "Çankaya'da saatlik veya günlük vinç kiralama yapılabilir mi?",
    a: 'Evet. Kısa süreli montaj ve bakım işleri için saatlik, şantiye ve geniş kapsamlı bina cephe operasyonları için günlük veya haftalık vinç kiralama seçeneklerimiz bulunmaktadır.',
  },
  {
    q: 'Vinç seçimi ve fiyatlandırma nasıl belirlenir?',
    a: 'Çalışma yapılacak yapının yüksekliği, cephe yanaşma mesafesi ve operasyonun tahmini süresine göre en uygun vinç belirlenir ve şeffaf fiyat teklifi sunulur.',
  },
];

export default function CankayaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Çankaya Sepetli Vinç Kiralama',
        provider: {
          '@id': `${SEO_CONFIG.baseUrl}/#business`,
        },
        telephone: '+905516066878',
        areaServed: {
          '@type': 'City',
          name: 'Çankaya',
        },
        serviceType: 'Sepetli Vinç Kiralama',
        description:
          "Çankaya'da sepetli vinç kiralama, plaza cam temizliği, tabela montajı ve bina bakım işleri.",
        url: getCanonicalUrl('/bolgeler/cankaya-sepetli-vinc-kiralama'),
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
            name: 'Çankaya Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/cankaya-sepetli-vinc-kiralama`,
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

      <main className="flex-grow">
        {/* Bölüm 1: Hero */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-10 md:py-14">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/bolge/cankaya-sepetli-vinc-calisma.png"
              alt="Çankaya sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900/90 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="[&_ol]:text-gray-300 [&_a]:text-gray-300 [&_a:hover]:text-white [&_span]:text-white [&_span]:font-semibold [&_svg]:text-gray-400">
                <Breadcrumb
                  items={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Bölgeler', href: '/bolgeler' },
                    { label: 'Çankaya', href: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
                  ]}
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-3 tracking-tight leading-tight">
                Çankaya Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
                Ankara Çankaya’da 7/24 Vinç Hizmeti
              </h2>

              <div className="prose prose-lg text-gray-200 mb-8 max-w-3xl font-light text-base md:text-lg">
                <p>
                  Ankara Çankaya genelinde banka şubeleri, iş merkezleri, plazalar ve konut projeleri
                  için profesyonel{' '}
                  <Link
                    href="/hizmetler/operatorlu-vinc-kiralama"
                    className="text-blue-300 hover:text-white underline font-medium"
                  >
                    operatörlü sepetli vinç kiralama
                  </Link>{' '}
                  hizmeti sunuyoruz. Dış cephe cam temizliği ve silikon bakımından tabela montajına,
                  çatı ve oluk onarımlarından yüksekte erişim gerektiren tüm teknik operasyonlara
                  kadar sahaya en uygun vinç çözümlerini yönlendiriyoruz. İhtiyacınıza göre{' '}
                  <Link
                    href="/hizmetler/saatlik-vinc-kiralama"
                    className="text-blue-300 hover:text-white underline font-medium"
                  >
                    saatlik vinç kiralama
                  </Link>{' '}
                  veya{' '}
                  <Link
                    href="/hizmetler/gunluk-vinc-kiralama"
                    className="text-blue-300 hover:text-white underline font-medium"
                  >
                    günlük vinç kiralama
                  </Link>{' '}
                  seçeneklerimizden faydalanabilir, Çankaya&apos;da tamamladığımız gerçek saha
                  çalışmalarını aşağıda inceleyebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg shadow-primary/30"
                >
                  <Phone size={20} />
                  Hemen Ara: 0551 606 68 78
                </a>
                <a
                  href="https://wa.me/905516066878"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg shadow-green-500/30"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bölüm 2: Çankaya'da Tamamladığımız Vinç Çalışmaları (Hero'nun hemen altında) */}
        <section className="py-14 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Çankaya&apos;da Tamamladığımız Vinç Çalışmaları
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Hoşdere, Oran, Beysukent, Bilkent, İncek, Çayyolu ve Bahçelievler bölgelerinde
                tamamladığımız gerçek saha operasyonlarını inceleyin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => {
                // Masaüstünde (lg: 3 sütun) son satırda tek kalan bir kart varsa (örneğin 7, 10 eleman), satırın ortasına yerleştir
                const isSingleInLastRow =
                  recentProjects.length % 3 === 1 && index === recentProjects.length - 1;

                return (
                  <Link
                    key={index}
                    href={project.href}
                    className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary ${
                      isSingleInLastRow ? 'lg:col-start-2' : ''
                    }`}
                    aria-label={`${project.title} projesini incele: ${project.location}`}
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-blue-600 text-white text-[11px] font-medium rounded-full shadow-sm">
                        {project.badge}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium mb-2.5 flex items-center gap-1">
                          <MapPin size={13} className="text-gray-400" />
                          {project.location}
                        </p>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-3 border-t border-gray-100">
                        <span className="inline-flex items-center text-primary group-hover:text-primary-hover font-bold transition-colors text-sm">
                          Projeyi İncele &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bölüm 3: Çankaya Sepetli Vinç Hizmetleri */}
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Çankaya Sepetli Vinç Hizmetleri
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Banka şubeleri, iş merkezleri ve ticari yapılar için sunduğumuz başlıca kiralama
                çözümlerimiz.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {serviceLinks.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bölüm 4: Sıkça Sorulan Sorular */}
        <section className="py-14 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Çankaya bölgesindeki vinç kiralama ve saha operasyonlarımızla ilgili merak edilenler.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
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

      {/* Mobil Sabit İletişim Çubuğu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] z-[100] flex p-2 gap-2">
        <a
          href="tel:05516066878"
          className="flex-1 bg-primary hover:bg-primary-dark text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
