import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ChevronDown, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Ağaç Budama ve Kesim İçin Sepetli Vinç Kiralama',
  description:
    'Ankara’da yüksek ağaç budama, tehlikeli dal kesimi ve çevre düzenleme işleri için güvenli sepetli vinç kiralama hizmeti. Fiyat almak için arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/agac-budama'),
  openGraph: {
    title: 'Ankara Ağaç Budama ve Kesim İçin Sepetli Vinç Kiralama',
    description:
      'Ankara’da yüksek ağaç budama, tehlikeli dal kesimi ve çevre düzenleme işleri için güvenli sepetli vinç kiralama hizmeti. Fiyat almak için arayın: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/agac-budama'),
  },
};

const projects = [
  {
    title: 'Gölbaşı Tulumtaş – Villa Sitesi Ağaç Budama',
    location: 'Tulumtaş / Gölbaşı / Ankara',
    description:
      '70 konutluk villa sitesinde bir gün süren ağaç budama çalışmasında yüksek ve erişimi zor dallara sepetli vinçle ulaşım sağlandı.',
    href: '/blog/golbasi-tulumtas-villa-sitesi-agac-budama-sepetli-vinc',
    image: '/images/blog/golbasi-tulumtas-sepetli-vinc-agac-budama.webp',
    alt: 'Tulumtaş villa sitesinde ağaç dallarına uzanan sepetli vinç',
  },
  {
    title: 'Bahçelievler – Dut Ağacı Budama',
    location: 'Bahçelievler / Çankaya / Ankara',
    description:
      'Büyülü Fener Sineması bahçesindeki dut ağacının uzayan dallarında sepetli vinç desteğiyle budama çalışması gerçekleştirildi.',
    href: '/blog/cankaya-bahcelievler-agac-budama-sepetli-vinc-destegi',
    image: '/images/blog/ankara-sepetli-vinc-bahcelievler-agac-budama-calismasi-1.jpg',
    alt: 'Bahçelievler Büyülü Fener bahçesinde dut ağacının altında budanan dalların toplanması',
  },
  {
    title: 'Bağlıca – Villa Bahçesinde Ağaç Budama',
    location: 'Bağlıca / Etimesgut / Ankara',
    description:
      'Villa bahçesindeki ağaç budama çalışmasında sepetli vinç desteği sağlandı; budama sonrası temizlik ve nakliye süreci yürütüldü.',
    href: '/blog/baglica-villa-bolgesinde-agac-budama-calismasi',
    image: '/images/blog/baglica-agac-budama-3.jpeg',
    alt: 'Bağlıca ağaç budama çalışmasında bina yanındaki dallara sepetten erişim',
  },
];

const faqs = [
  {
    q: 'Sepetli vinç ile hangi ağaçlarda budama yapılabilir?',
    a: 'Yüksek veya erişimi zor dalları bulunan ağaçlarda, ağacın yapısı ve çevre koşulları uygunsa kullanılabilir. Uygun yöntem yalnızca ağaç türüne göre değil, dalın konumuna ve erişim ihtiyacına göre belirlenir.',
  },
  {
    q: 'Villa sitelerinde ağaç budama çalışması yapılabilir mi?',
    a: 'Evet. Araç girişi, kurulum alanı, zemin ve çevredeki yapılar değerlendirilerek planlama yapılabilir. Site içindeki yaya ve araç geçişleri de çalışma öncesinde dikkate alınır.',
  },
  {
    q: 'Ağaç budama için vinç seçimi nasıl yapılır?',
    a: 'Gerekli çalışma yüksekliği, yatay erişim mesafesi, giriş genişliği ve zemin koşulları birlikte değerlendirilir. Her budama işinde vinç kullanımı zorunlu değildir; ekipman işin ihtiyacına göre seçilir.',
  },
  {
    q: 'Ağaç budama hizmetinin fiyatı nasıl belirlenir?',
    a: 'Fiyat; budanacak bölümlerin kapsamına, erişim koşullarına, konuma, kullanılacak ekipmana ve çalışma süresine bağlıdır. Fotoğraf ve konum bilgisi ön değerlendirmeye yardımcı olur; temizlik ve nakliye gibi ek işlerin kapsamı ayrıca görüşülür.',
  },
];

export default function AgacBudamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Ağaç Budama Sepetli Vinç',
        provider: {
          '@id': `${SEO_CONFIG.baseUrl}/#business`,
        },
        telephone: '+905516066878',
        areaServed: {
          '@type': 'City',
          name: 'Ankara',
        },
        serviceType: 'Ağaç Budama Vinç Hizmeti',
        description:
          'Ankara’da yüksek ve erişimi zor dallarda ağaç budama için sepetli vinç desteği. Villa ve site bahçelerinde saha koşullarına göre erişim planlaması.',
        url: getCanonicalUrl('/hizmetler/agac-budama'),
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
            name: 'Hizmetler',
            item: `${SEO_CONFIG.baseUrl}/hizmetler`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Ağaç Budama',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/agac-budama`,
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
        <section className="relative bg-gray-900 text-white overflow-hidden py-10 md:py-14">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/services/agac-budama.jpg"
              alt="Ankara ağaç budama için sepetli vinç hizmeti"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-gray-900/90 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="[&_ol]:text-gray-300 [&_a]:text-gray-300 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-gray-400">
                <Breadcrumb
                  items={[
                    { label: 'Ana Sayfa', href: '/' },
                    { label: 'Hizmetler', href: '/hizmetler' },
                    { label: 'Ağaç Budama', href: '/hizmetler/agac-budama' },
                  ]}
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight leading-tight">
                Ankara Ağaç Budama İçin Sepetli Vinç Hizmeti
              </h1>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6 max-w-3xl">
                Ankara ağaç budama ihtiyaçlarında, yüksek ve erişilmesi zor dallara ulaşmak için
                operatörlü sepetli vinç desteği sunuyoruz. Villa ve site bahçelerinde çalışma
                yapılacak ağacın konumunu, araç girişini ve zemin koşullarını değerlendirerek
                uygun erişim çözümünü planlıyoruz. Her işin kapsamı farklıdır; budama yapılacak
                bölümler ve ihtiyaç duyulan ekipman çalışma öncesinde netleştirilir. Ağacın ve
                çevresinin fotoğraflarını, konumunu ve talebinizi telefon veya WhatsApp üzerinden
                paylaşarak ön bilgi alabilirsiniz. Aşağıda tamamladığımız gerçek saha
                çalışmalarını inceleyebilir, benzer bir iş için hizmet kapsamını ve kiralama
                seçeneklerini bizimle görüşebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:05516066878" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover px-6 py-3.5 rounded-xl font-bold transition-colors">
                  <Phone size={20} /> Hemen Ara: 0551 606 68 78
                </a>
                <a href="https://wa.me/905516066878" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] px-6 py-3.5 rounded-xl font-bold transition-colors">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Tamamladığımız Ağaç Budama Çalışmaları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Link
                  key={project.href}
                  href={project.href}
                  aria-label={`${project.title} projesini incele`}
                  className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-green-500 transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                    projects.length % 2 === 1 && index === projects.length - 1
                      ? 'md:col-span-2 md:w-[calc((100%-1.5rem)/2)] md:justify-self-center lg:col-span-1 lg:w-full'
                      : ''
                  } ${projects.length % 3 === 1 && index === projects.length - 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-green-700 mb-2">{project.location}</p>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1 text-green-700 text-sm font-semibold">Projeyi İncele <ChevronRight size={16} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sepetli Vinç ile Ağaç Budama</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sepetli vinç ile ağaç budama, yüksek dallara çalışma platformundan erişim
                sağlanabilen işlerde tercih edilebilir. Villa ve site bahçelerinde dalların
                yapılara, bahçe sınırlarına ve geçiş yollarına göre konumu incelenir. Amaç,
                budama yapılacak bölüme uygun mesafeden ulaşabilmektir; her ağaç için aynı
                yöntem veya araç uygun olmayabilir.
              </p>
              <p>
                Ekipman seçerken çalışma yüksekliği kadar yatay erişim mesafesi de önemlidir.
                Aracın bahçeye girebilmesi, kurulum için yeterli alan bulunması ve zeminin
                taşıma koşulları birlikte değerlendirilir. Eğim, çevredeki yapılar, elektrik
                hatları ve hava koşulları çalışma planını etkileyebilir. Yaya ve araç
                geçişlerinin düzenlenmesi ile budanacak dalların çevreden ayrılması da saha
                hazırlığının parçasıdır.
              </p>
              <p>
                İşin kapsamını görüşmek için ağacın tamamını, erişilecek dalları ve araç girişini
                gösteren fotoğraflar paylaşabilirsiniz. Budama, dal toplama, temizlik ve nakliye
                beklentilerinin önceden belirtilmesi, teklifin hangi işleri kapsadığını
                netleştirir. <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-primary underline">Operatörlü vinç</Link>
                {' '}desteği, saha ihtiyacına göre <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-primary underline">saatlik</Link>
                {' '}veya <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-primary underline">günlük kiralama</Link>
                {' '}ile planlanabilir. Uygun araç ve süre hakkında bilgi için <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-primary underline">sepetli vinç kiralama</Link>
                {' '}seçeneklerini inceleyebilirsiniz. Budama sürecine ilişkin ek bilgiler
                {' '}<Link href="/blog/agac-budama-sepetli-vinc" className="text-primary underline">ağaç budama rehberimizde</Link> yer alır.
              </p>
            </div>
            <details className="mt-6 rounded-xl border border-gray-200 text-sm text-gray-600">
              <summary className="cursor-pointer px-4 py-3 font-semibold text-gray-900">Hizmet seçenekleri ve bölge bağlantıları</summary>
              <nav aria-label="İlgili hizmet ve bölgeler" className="flex flex-wrap gap-x-4 gap-y-3 px-4 pb-4">
                <Link href="/hizmetler" className="underline hover:text-primary">Tüm hizmetler</Link>
                <Link href="/bolgeler" className="underline hover:text-primary">Hizmet bölgeleri</Link>
                <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="underline hover:text-primary">Çankaya</Link>
                <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="underline hover:text-primary">Etimesgut</Link>
                <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="underline hover:text-primary">Keçiören</Link>
                <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="underline hover:text-primary">Ostim</Link>
                <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="underline hover:text-primary">Yenimahalle</Link>
                <Link href="/bolgeler/sincan-sepetli-vinc-kiralama" className="underline hover:text-primary">Sincan</Link>
              </nav>
            </details>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Sık Sorulan Sorular</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details key={faq.q} id={index === faqs.length - 1 ? 'fiyatlar' : undefined} className="group bg-white border border-gray-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-gray-900 hover:text-primary">
                    {faq.q}
                    <ChevronDown size={20} className="shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MOBİL STICKY BAR (ÇOK ÖNEMLİ) */}
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

    </div>
  );
}
