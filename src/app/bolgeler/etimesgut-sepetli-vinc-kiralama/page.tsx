import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Building2, Home, Store, Trees, Clock, ShieldCheck, Paintbrush, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Etimesgut Sepetli Vinç Kiralama | Eryaman ve Bağlıca Vinç',
  description: "Ankara Etimesgut, Eryaman, Bağlıca ve Elvankent'te site cephe işleri, yüksek katlı konut bakımı ve tabela montajı için sepetli vinç kiralama. Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/etimesgut-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Etimesgut Sepetli Vinç Kiralama | Eryaman ve Bağlıca Vinç',
    description: "Ankara Etimesgut, Eryaman, Bağlıca ve Elvankent'te site cephe işleri, yüksek katlı konut bakımı ve tabela montajı için sepetli vinç kiralama. Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/etimesgut-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Etimesgut’ta vinç ne kadar sürede gelir?',
    a: 'Etimesgut\'un modern kentleşme yapısı ve geniş yolları sayesinde trafiğe takılmadan hızlıca hareket edebiliyoruz. İhtiyaç anında genellikle 30 dakika içerisinde adresinize araç yönlendiriyoruz.'
  },
  {
    q: 'Eryaman ve Bağlıca’ya hizmet var mı?',
    a: 'Evet, özellikle Eryaman ve Bağlıca bölgelerindeki devasa yüksek katlı siteler ve lüks villaların cephe onarımı, dış cam temizliği ve ağaç budama işlemleri için günlük yoğun operasyonlar yürütüyoruz.'
  },
  {
    q: 'Aynı gün vinç gelir mi?',
    a: 'Kesinlikle. Rüzgarda sallanan tehlikeli tabela, kırılmış ve kopmak üzere olan büyük ağaç dalları veya acil dış cephe tamiratları için aynı gün içerisinde acil müdahale ekibimizi sevk ediyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Etimesgut merkezde veya AVM cadde üstündeki dükkanların tabela montajı, klima söküm/takım işleri gibi kısa süreli operasyonlar için bütçe dostu saatlik kiralama paketimiz mevcuttur.'
  }
];

export default function EtimesgutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Etimesgut Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Etimesgut'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Etimesgut, Eryaman ve Bağlıca bölgelerinde lüks site cephe işleri, ağaç budama ve sepetli vinç hizmetleri.",
        url: getCanonicalUrl('/bolgeler/etimesgut-sepetli-vinc-kiralama')
      },
      {
        '@type': 'LocalBusiness',
        name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
        url: SEO_CONFIG.baseUrl,
        telephone: '+905516066878',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ostim Organize Sanayi Bölgesi',
          addressLocality: 'Yenimahalle',
          addressRegion: 'Ankara',
          addressCountry: 'TR'
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: SEO_CONFIG.baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Bölgeler',
            item: `${SEO_CONFIG.baseUrl}/bolgeler`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Etimesgut Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/etimesgut-sepetli-vinc-kiralama`
          }
        ]
      }
    ]
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
              src="/images/bolge/etimesgut-vinc.jpg"
              alt="etimesgut sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Etimesgut Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-6">
                Ankara Etimesgut’ta 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, batı koridoruna doğru genişlerken, bu modernleşmenin en önemli çekim merkezlerini <strong>İç Anadolu Bölgesi</strong>'nin planlı yerleşimleri oluşturmaktadır. Bu planlı büyümenin kalbi olan ve nüfus yoğunluğu ile <strong>Ankara’nın en hızlı gelişen ilçelerinden biri olan Etimesgut</strong>, geniş yolları, büyük site projeleri, lüks rezidansları ve devasa yeşil alanlarıyla vinç kullanımının en yoğun olduğu modern yaşam alanlarının başında gelir.
                </p>
                <p>
                  Etimesgut'un sınırları içerisinde yer alan Eryaman, Elvankent, Bağlıca, Ahi Mesut, Etimesgut merkez ve Göksu Park çevresi gibi mahalleler, çok katlı mimari yapılarıyla dikkat çeker. Yüksek katlı bu binaların dış cephe izolasyon işleri, dış cephe cam temizliği, Fransız balkon tamiratları ve geniş site bahçelerindeki tehlike arz eden dev ağaçların budanması için <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-teal-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> sistemlerine duyulan ihtiyaç aralıksız sürer. Göksu ve Eryaman etrafındaki dev konutlarda iş güvenliğinden taviz verilemeyeceği için operasyonlarımız tamamen <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-teal-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> modeliyle yönetilir ve riskler sıfıra indirilir.
                </p>
                <p>
                  Etimesgut merkezdeki esnafın dükkan tabelasını yenilemesi veya Eryaman'daki bir dairenin klimasının dış ünitesinin takılması gibi işlemler için müşterilerimiz genellikle bütçe dostu <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-teal-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> paketimizi değerlendirmektedir. Ancak Bağlıca ve Elvankent'teki lüks sitelerin haftalarca sürecek dış cephe boya ve onarım ihalelerinde iskele kurma zahmetini ortadan kaldıran ve çok daha avantajlı olan <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-teal-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> modelimiz site yönetimleri tarafından sıklıkla tercih edilmektedir.
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
                  href="#fiyatlar"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Hızlı teklif al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EN KRİTİK BÖLÜM: Etimesgut’ta Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Etimesgut’ta Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern yaşam alanlarında 3 farklı yapı tipine özel operasyonel vinç çözümleri.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* 1. SİTE YAŞAMI (ERYAMAN / BAĞLICA) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-teal-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Building2 size={120} />
                </div>
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 mb-6 relative z-10">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Site Yaşamı (Eryaman / Bağlıca)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-teal-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Site Cephe Temizliği</strong>
                      <span className="text-gray-600 text-sm">Gökdelen ve yüksek rezidansların dış cam ve kompozit temizliği.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-teal-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Ağaç Budama</strong>
                      <span className="text-gray-600 text-sm">Geniş peyzaj alanlarındaki uzun ağaçların kontrollü budanması.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-teal-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Yüksek Katlı Bina Çalışmaları</strong>
                      <span className="text-gray-600 text-sm">Oluk, izolasyon, Fransız balkon onarımı gibi bakım işleri.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 2. APARTMAN (MERKEZ) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-indigo-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Home size={120} />
                </div>
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 relative z-10">
                  <Home size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Apartman (Merkez)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-indigo-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Cephe Boya ve Bakım</strong>
                      <span className="text-gray-600 text-sm">Etimesgut merkezdeki eski binaların dış mantolama işleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-indigo-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Tabela Montaj</strong>
                      <span className="text-gray-600 text-sm">Mahalle arası ticari işletmelerin ve zincir market tabelaları.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-indigo-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Elektrik Bakım</strong>
                      <span className="text-gray-600 text-sm">Sokak aydınlatmaları ve apartmanların üst kat aydınlatma onarımı.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. TİCARİ ALAN (AVM / CADDE) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-rose-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Store size={120} />
                </div>
                <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center text-rose-600 mb-6 relative z-10">
                  <Store size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Ticari Alan (AVM/Cadde)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-rose-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Reklam Tabelaları</strong>
                      <span className="text-gray-600 text-sm">AVM dış cephe logoları ve büyük totem tabelaların kurulumu.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-rose-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Cephe Temizliği</strong>
                      <span className="text-gray-600 text-sm">Ticari plazaların ve iş merkezlerinin dış cam temizlik işlemleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-rose-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Bakım İşleri</strong>
                      <span className="text-gray-600 text-sm">Klimaların, dış ünitelerin ve AVM havalandırma motoru değişimi.</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3. HIZ & ERİŞİM VURGUSU (FARK YARATAN BÖLÜM) */}
        <section className="py-16 bg-teal-50 border-y border-teal-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Clock size={100} className="text-teal-600" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Etimesgut’ta Hızlı Vinç Hizmeti</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Etimesgut, eski yerleşim yerlerine kıyasla çok daha düzenli bir şehir planlamasına sahiptir. İlçenin <strong>geniş yolları</strong>, bulvarları ve düzenli otopark alanları; sepetli vinç gibi büyük iş makinelerinin lokasyona ulaşımını ve kurulumunu oldukça kolaylaştırır.
                  </p>
                  <p>
                    Dar sokak krizlerinin yaşanmadığı bu modern altyapı sayesinde araçlarımız hedefe trafiğe takılmadan <strong>hızlı ulaşım</strong> sağlar. Eryaman'ın en yüksek sitesinden Bağlıca'nın lüks villalarına kadar her noktada <strong>planlı çalışma</strong> disiplinimiz sayesinde işinize anında başlanır. Gecikme yaşanmadan, iş gücü kaybı yaratmadan <strong>kısa sürede müdahale</strong> edebilme yeteneğimiz, bölgedeki en büyük operasyonel gücümüzdür.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Etimesgut’ta en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Eryaman sitelerinden Bağlıca villalarına, anında güvenli araç sevkiyatı.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <Phone size={24} />
                Hemen Ara: 0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
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

        {/* 5. FİYAT BÖLÜMÜ */}
        <section id="fiyatlar" className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Etimesgut Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Etimesgut ve Eryaman bölgesindeki vinç fiyatlandırmasını belirleyen temel faktör çalışma süresidir. Yüksek katlı devasa <strong>site işleri</strong>, kompozit yenileme veya tüm blokların dış cephe boyaması gibi günlerce/haftalarca sürebilir. Bu tür uzun soluklu şantiyelerde <strong>genelde günlük kiralama</strong> ve proje bazlı aylık kiralama modelleri uygulanarak site yönetimlerine ciddi maliyet avantajları sağlanır.
                </p>
                <p className="text-lg">
                  Buna karşın, tek bir dairenin klimasının taşınması, bir ağacın budanması veya AVM caddesindeki bir tabelanın asılması gibi <strong>kısa işler saatlik kiralama</strong> üzerinden fiyatlandırılır. Aracın merkez garajdan gideceği mesafe ve <strong>lokasyon fiyatı etkiler</strong>. Projeniz için en doğru ve ekonomik teklifi oluşturmak adına keşif talep edebilirsiniz.
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Sitenize veya apartmanınıza özel net fiyat için bizi arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors text-lg">
                    <Phone size={22} /> Net Fiyat Alın
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. GÜVEN BLOĞU (E-E-A-T) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Etimesgut’ta Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Eryaman, Bağlıca ve Elvankent'teki lüks konutlarda ve AVM'lerde başarıyla biten operasyonlar.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/eryaman-site-vinc.jpg"
                    alt="etimesgut sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-teal-600 font-bold mb-2">
                    <Building2 size={20} /> Site Cephe İşi
                  </div>
                  <p className="text-gray-600 text-sm">Eryaman Göksu mevkiindeki 15 katlı lüks bir sitede, şiddetli fırtınadan hasar gören dış cephe sandviç panellerinin sökülüp yenilenmesi işlemi iskele kurulmadan vincimizle çözüldü.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <Store size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-teal-600 font-bold mb-2">
                    <Paintbrush size={20} /> Tabela Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Bağlıca bulvarı üzerinde yeni açılan bir zincir marketin, mağaza dış cephe kompozit giydirmesi ve gece aydınlatmalı büyük kutu harf tabela montajı sorunsuz teslim edildi.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/etimesgut-vinc.jpg"
                    alt="ankara etimesgut vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-teal-600 font-bold mb-2">
                    <Trees size={20} /> Ağaç Budama
                  </div>
                  <p className="text-gray-600 text-sm">Elvankent sınırlarında bulunan ve dalları park halindeki araçların üzerine sarkan dev çam ağaçları, peyzaja zarar vermeden üstten kesim yapılarak güvenle budandı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Etimesgut Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48938.82489814421!2d32.61868512534571!3d39.94639735492471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337f7c6cd0c59%3A0xe5426715f3de40b0!2sEtimesgut%2C%20Ankara!5e0!3m2!1str!2str!4v1714161000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Etimesgut Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Etimesgut’ta Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-teal-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-teal-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-teal-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-teal-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-teal-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg mb-2">Cephe İşleri Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-teal-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg mb-2">Ağaç Budama Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Etimesgut, Eryaman ve Bağlıca bölgesindeki operasyonlarla ilgili merak edilen detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
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
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
