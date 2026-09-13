import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  Building2,
  Wrench,
  CheckCircle2,
  Camera,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Haymana Sepetli Vinç Kiralama | ASV Vinç',
  description:
    "Haymana'da kurumsal tesis, çatı, bakım, temizlik ve yüksek erişim işleri için operatörlü sepetli vinç hizmeti. Konum ve çalışma detaylarını ileterek teklif alın.",
  alternates: getMetadataAlternates('/bolgeler/haymana-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Haymana Sepetli Vinç Kiralama | ASV Vinç',
    description:
      "Haymana'da kurumsal tesis, çatı, bakım ve yüksek erişim işleri için operatörlü sepetli vinç. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/haymana-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: "Haymana'ya sepetli vinç gönderiyorsunuz?",
    a: "Evet. Haymana ilçesi ve çevresine operatörlü sepetli vinç hizmeti sunuyoruz. Çalışmanın yeri ve niteliğine göre en uygun aracı planlamak için konum ve iş detaylarınızı paylaşmanız yeterlidir.",
  },
  {
    q: 'Kurumsal tesislerde vinç hizmeti sağlıyor musunuz?',
    a: "Evet. Üretim tesisleri, depo alanları ve kurumsal işletmelerde çatı çalışmaları, bakım, temizlik ve ekipman taşıma gibi ihtiyaçlara yönelik planlı vinç hizmeti veriyoruz. Aviagen Anadolu'nun Haymana'daki tesislerinde bu kapsamda gerçekleştirdiğimiz çalışmalar örnek gösterilebilir.",
  },
  {
    q: 'Çatı kontrolü ve kuşkonmaz montajında sepetli vinç kullanılabilir mi?',
    a: 'Evet. Beş ila on metre arasındaki çatı yüksekliklerinde kuşkonmaz montajı, çatı kontrolü ve temizlik gibi işler için uygun erişim kapasitesine sahip araçlar sahaya sevk edilebilir. İhtiyacın yatay ve dikey erişim ölçüleri belirlendikten sonra doğru araç seçilir.',
  },
  {
    q: "Haymana'da kullanılacak araç nasıl belirlenir?",
    a: 'Çalışılacak yükseklik, tesisin zemin koşulları ve yapılacak işin türü araç seçimini belirler. Saha fotoğrafı veya ölçü bilgisiyle tarafımıza ulaştığınızda uygun araç önerisini ve teklifi hazırlıyoruz.',
  },
  {
    q: 'Platform veya ekipman taşıma işleri için hangi bilgiler gerekir?',
    a: 'Taşınacak parçanın boyutları ve ağırlığı (varsa), taşınacağı mesafe, erişim koşulları ve sahaya araç giriş imkânı hakkında bilgi paylaşmanız, doğru vinç planlaması için gereklidir.',
  },
];

export default function HaymanaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Haymana Sepetli Vinç Kiralama',
        provider: {
          '@id': `${SEO_CONFIG.baseUrl}/#business`,
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Haymana',
          },
          {
            '@type': 'City',
            name: 'Ankara',
          },
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description:
          "Haymana'da kurumsal tesis, çatı kontrolü, temizlik, kuşkonmaz montajı ve platform taşıma çalışmaları için operatörlü sepetli vinç hizmeti.",
        url: getCanonicalUrl('/bolgeler/haymana-sepetli-vinc-kiralama'),
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
            name: 'Haymana Sepetli Vinç Kiralama',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/haymana-sepetli-vinc-kiralama`,
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
              src="/images/blog/haymana-ak3-27-metre-sepetli-vinc-cati-temizligi.webp"
              alt="Haymana sepetli vinç kiralama — Aviagen AK3 tesisinde çalışma"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Haymana', href: '/bolgeler/haymana-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Haymana Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-red-300 mb-6">
                Kurumsal Tesisler ve Yüksek Erişim Gerektiren Çalışmalar için Vinç
              </h2>

              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  Haymana, Ankara'nın güneyinde geniş arazilere yayılmış kurumsal işletmeler ve
                  tarım alanlarıyla dikkat çeken bir ilçedir. Bu bölgedeki{' '}
                  <strong>kurumsal tesisler, üretim alanları ve kırsal işletmeler</strong>, zaman
                  zaman çatı temizliği, ekipman montajı, çatı kontrolü veya büyük parça taşıma gibi
                  ihtiyaçlar doğurur. Bu tür yüksek erişim gerektiren çalışmalar için{' '}
                  <Link
                    href="/hizmetler/sepetli-vinc-kiralama"
                    className="text-red-300 hover:text-white underline font-medium"
                  >
                    operatörlü sepetli vinç
                  </Link>{' '}
                  sahaya sevk ediyoruz.
                </p>
                <p>
                  Haymana ve çevresinde gerçekleştirdiğimiz çalışmalar arasında Aviagen
                  Anadolu&apos;nun AK3 ve ANK2 tesislerindeki platform taşıma, çatı temizliği ve
                  kuşkonmaz montajı yer almaktadır. Her işin ihtiyacına göre doğru araç belirlenir;
                  küçük ölçekli çatı çalışmaları için kompakt araç, büyük parça taşıma için ağır
                  kapasite araç planlanır.
                </p>
              </div>

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
                <a
                  href="https://wa.me/905516066878?text=Merhaba%2C%20Haymana%20b%C3%B6lgesinde%20vin%C3%A7%20i%C5%9Fi%20var.%20Foto%C4%9Fraf%20g%C3%B6nderiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <Camera size={20} />
                  Fotoğraf Gönder
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Haymana'da Vinç Kullanım Alanları */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Haymana&apos;da Sepetli Vinç Hangi İşlerde Kullanılır?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Kurumsal Tesis Çalışmaları
                </h3>
                <p className="text-gray-600">
                  Haymana&apos;daki kurumsal tesislerde çatı bakımı, temizlik, ekipman montajı ve
                  büyük parça taşıma gibi yüksek erişim gerektiren işler için operatörlü vinç
                  desteği sağlanır.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Çatı Temizliği ve Kontrolü
                </h3>
                <p className="text-gray-600">
                  Büyük tesis çatılarının temizlenmesi ve kontrolü, sepetli vinç yardımıyla güvenli
                  ve verimli biçimde yapılabilir. 27 metre erişim kapasiteli araçlar bu tür
                  çalışmalar için uygundur.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Kuşkonmaz Montajı
                </h3>
                <p className="text-gray-600">
                  Beş ila on metre arasındaki çatı yüksekliklerine kuşkonmaz montajı için yatay ve
                  dikey erişim ihtiyacı belirlenerek ölçeğe uygun kompakt araç sahaya sevk edilir.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Platform ve Ekipman Taşıma
                </h3>
                <p className="text-gray-600">
                  Tesis içindeki büyük yapısal platformların veya ağır ekipmanların taşınmasında
                  yüksek kapasiteli çift kırma vinç kullanılır. Sepetli vinç de operasyona
                  koordinasyon desteği sağlayarak eşlik edebilir.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Saha Ölçüsüne Göre Araç Seçimi
                </h3>
                <p className="text-gray-600">
                  Haymana gibi geniş arazilerdeki tesislerde gereksiz yere büyük araç göndermek
                  maliyet ve lojistik yükü artırır. Yatay/dikey erişim ihtiyacına göre doğru araç
                  belirlenerek sahaya sevk edilir.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Kırsal ve Tarımsal İşletmeler
                </h3>
                <p className="text-gray-600">
                  Haymana çevresindeki tarımsal ve kırsal işletmelerde de çatı, bakım ve ekipman
                  çalışmaları için vinç desteği talep edilebilir. Konum ve ihtiyaç bilgileri
                  paylaşıldıktan sonra uygun araç planlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Gerçek Proje Kartı */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Haymana&apos;da Gerçekleştirdiğimiz Vinç Çalışmaları
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Haymana&apos;daki kurumsal tesislerde yürüttüğümüz gerçek saha çalışması.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <Link
                href="/blog/haymana-aviagen-ak3-ank2-tesisleri-vinc-calismasi"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/blog/haymana-aviagen-ak3-ank2-vinc-calismasi-kapak.webp"
                    alt="Haymana Aviagen AK3 ve ANK2 tesislerinde platform taşıma ve sepetli vinç çalışması"
                    fill
                    sizes="(max-width: 640px) 100vw, 512px"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                    <Building2 size={16} />
                    <span>Aviagen Anadolu – Haymana</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Aviagen AK3 ve ANK2 Tesislerinde Vinç Çalışması
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm flex-grow leading-relaxed">
                    Haymana&apos;daki AK3 tesisinde platform taşıma ile çatı ve tesis temizliği,
                    ANK2 tesisinde ise çatı kontrolü ve kuşkonmaz montajı çalışmalarına uygun
                    vinçlerle destek sağladık.
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all duration-300">
                    Haymana tesis çalışmalarını inceleyin
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. İçerik Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 max-w-none">
              <h2 className="text-3xl font-bold mb-6">
                Haymana&apos;da Kurumsal Tesis Çalışmaları
              </h2>
              <p>
                Haymana, Ankara'nın güney aksında yer alan ve geniş arazi üzerine kurulu kurumsal
                işletmelere ev sahipliği yapan bir ilçedir. Bu işletmelerde periyodik bakım,
                temizlik, ekipman montajı veya büyük parçaların taşınması gibi ihtiyaçlar zaman
                zaman ortaya çıkar. Bu tür çalışmalar için iskele kurmanın pratik olmadığı yerlerde{' '}
                <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-primary underline font-medium">
                  operatörlü vinç kiralama
                </Link>{' '}
                çözümümüz devreye girer.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Çatı Temizliği ve Çatı Kontrolünde Vinç
              </h3>
              <p>
                Büyük tesis çatıları düzenli temizlik ve kontrol gerektirir. 27 metre erişim
                kapasitesine sahip{' '}
                <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-primary underline font-medium">
                  sepetli vinç
                </Link>
                , tesis çevresini dolaşarak çatının farklı noktalarına güvenle ulaşır. Temizlik
                ekibi, yüksekte güvenli bir platform üzerinden çalışır; merdiven veya iskele
                gerektirmez.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Kuşkonmaz Montajı ve Kısa Süreli Çatı Çalışmaları
              </h3>
              <p>
                Beş ila on metre yüksekliğindeki çatılara kuşkonmaz montajı, hava egzoz fanı
                değişimi veya çatı kontrolü için kompakt bir araç yeterlidir. İhtiyaç tespitinde
                aracın yatay ve dikey erişim kapasitesi belirlendikten sonra sahaya en uygun araç
                gönderilir. Bu yaklaşım hem maliyeti düşürür hem de sahada gereksiz manevra
                karmaşasını önler.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Platform ve Ekipman Taşıma
              </h3>
              <p>
                Tesis içindeki büyük yapısal platformların veya ağır ekipmanların tesis dışına
                taşınması, yüksek kapasiteli çift kırma vinç gerektiren bir işlemdir. Bu tür
                operasyonlarda aynı zamanda sepetli vinç de yük taşıma sürecine destek amacıyla
                eşlik edebilir. Haymana'daki AK3 tesisinde bu tür bir çalışmayı 36 tonluk çift
                kırma vinç ve 27 metre sepetli vinç koordinasyonuyla gerçekleştirdik. Detaylar için{' '}
                <Link
                  href="/blog/haymana-aviagen-ak3-ank2-tesisleri-vinc-calismasi"
                  className="text-primary underline font-medium"
                >
                  Haymana AK3 ve ANK2 tesis çalışma yazımızı
                </Link>{' '}
                inceleyebilirsiniz.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Hizmet Seçenekleri
              </h3>
              <p>
                Haymana'daki çalışmalar için saatlik, günlük veya işe dayalı hizmet seçenekleri
                sunulmaktadır. Kısa süreli çatı müdahaleleri için{' '}
                <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-primary underline font-medium">
                  saatlik kiralama
                </Link>
                , daha uzun süren tesis çalışmaları için ise{' '}
                <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-primary underline font-medium">
                  günlük kiralama modeli
                </Link>{' '}
                değerlendirilebilir. Bala tesisindeki gibi çok günlü kurumsal operasyonlarda her
                günün iş planı önceden belirlenerek saha süreci planlı yürütülür.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Haymana için teklif almak ister misiniz?
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Konum bilgisi ve çalışmanın kısa açıklamasını paylaşın; size uygun araç planını ve
              teklifi hazırlayalım.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <Phone size={24} />
                Hemen Ara: 0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878?text=Merhaba%2C%20Haymana%20b%C3%B6lgesinde%20vin%C3%A7%20hizmeti%20almak%20istiyorum.%20Detaylar%C4%B1%20payla%C5%9Fabilir%20miyim%3F"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 6. Hizmetler İç Link Bloğu */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Haymana&apos;da Sunulan Vinç Hizmetleri
              </h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik hizmet seçeneklerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/hizmetler/sepetli-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">
                  Sepetli Vinç Kiralama
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/operatorlu-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">
                  Operatörlü Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/saatlik-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">
                  Saatlik Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/gunluk-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">
                  Günlük Vinç
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/hizmetler/cephe-temizligi-sepetli-vinc"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">
                  Çatı ve Cephe Temizliği
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
              <Link
                href="/bolgeler/golbasi-sepetli-vinc-kiralama"
                className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">
                  Gölbaşı Bölgesi
                </span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">
                  İncele <ChevronRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                Haymana ve çevresi için vinç hizmeti hakkında merak edilenler.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
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
