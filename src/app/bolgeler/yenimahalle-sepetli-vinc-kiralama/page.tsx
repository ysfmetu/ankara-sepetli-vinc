import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Factory, Building2, Home, Trees, Zap, AlertTriangle, ShieldCheck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Yenimahalle Sepetli Vinç Kiralama | Batıkent ve Ostim',
  description: "Ankara Yenimahalle'de Ostim sanayi bölgesi fabrika bakımları, Batıkent site işleri ve Demetevler dar sokak cephe işleri için sepetli vinç kiralama. Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/yenimahalle-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Yenimahalle Sepetli Vinç Kiralama | Batıkent ve Ostim',
    description: "Ankara Yenimahalle'de Ostim sanayi bölgesi fabrika bakımları, Batıkent site işleri ve Demetevler dar sokak cephe işleri için sepetli vinç kiralama. Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/yenimahalle-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Yenimahalle’de vinç ne kadar sürede gelir?',
    a: 'Merkez garajımız Yenimahalle lokasyonunda (Ostim) bulunduğu için bölgeye hizmetimiz son derece hızlıdır. Trafik durumuna göre genellikle 20-30 dakika içerisinde adresinize ulaşıyoruz.'
  },
  {
    q: 'Batıkent’e hizmet var mı?',
    a: 'Evet, Batıkent Yenimahalle\'nin en yoğun çalıştığımız bölgelerinden biridir. Özellikle çok bloklu sitelerde cephe boyama, dış cephe mantolama ve ağaç budama işleri için sürekli hizmet vermekteyiz.'
  },
  {
    q: 'Ostim sanayi bölgesine vinç gelir mi?',
    a: 'Kesinlikle. Ostim OSB ve İvedik OSB bölgelerindeki ağır sanayi tesislerine, depo içi aydınlatma değişimlerine ve CNC makine montajlarına 7/24 vinç kiralama desteği sunuyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Bireysel müşterilerimiz ve Demetevler gibi bölgelerdeki apartman sakinleri için klima motoru sökümü, tek bir ağaç budaması veya tabela montajı gibi kısa süreli işlerde saatlik kiralama seçeneğimiz aktiftir.'
  }
];

export default function YenimahallePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Yenimahalle Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Yenimahalle'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Yenimahalle'de Batıkent, Ostim, İvedik ve Demetevler bölgeleri için fabrika bakımı, site onarımı ve dar sokak vinç hizmetleri.",
        url: getCanonicalUrl('/bolgeler/yenimahalle-sepetli-vinc-kiralama')
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
            name: 'Yenimahalle Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/yenimahalle-sepetli-vinc-kiralama`
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
              src="/images/bolge/yenimahalle-sepetli-vinc-kiralama-cover.png"
              alt="yenimahalle sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Yenimahalle Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Ankara Yenimahalle’de 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, son yıllarda batıya doğru hızla büyürken bu büyümenin merkez üssünü <strong>İç Anadolu Bölgesi</strong>'nin en güçlü altyapılarına sahip ilçeleri çekmektedir. Bu bağlamda <strong>Ankara’nın merkezi ve en büyük ilçelerinden biri olan Yenimahalle</strong>, hem ağır sanayi bölgelerini hem de çok yüksek nüfuslu yerleşim alanlarını aynı anda barındıran en çeşitli yapıya sahip bölgedir. Batıkent, Demetevler, Ostim, İvedik, Macunköy ve Yenimahalle merkez, ilçenin farklı vinç kiralama ihtiyaçlarına sahip ana damarlarıdır.
                </p>
                <p>
                  Yenimahalle'nin bu ikili yapısı, operasyon planlamasının doğru yapılmasını şart koşar. Ostim ve İvedik OSB bölgelerinde yoğunlaşan fabrika, üretim ve çelik konstrüksiyon montaj çalışmaları ağır sanayi kurallarıyla yürütülürken; Batıkent ve Demetevler gibi yüksek yerleşim alanlarında ise apartman, site cephe boyama, dış cephe yalıtımı ve devasa ağaç budama işleri öne çıkar. Her iki senaryoda da iş güvenliğini temel alan <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> sistemimiz, yüksek esneklikle çalışır. Deneyimli kadromuzla, sıfır kaza politikası eşliğinde <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> hizmetini tüm ilçe geneline sunmaktayız.
                </p>
                <p>
                  Demetevler'in dar sokaklarındaki tabela yenileme işlerinden Batıkent'teki bir ağacın budanmasına kadar kısa süren müdahaleler için daha hesaplı olan <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> çözümünü önerirken; Macunköy'deki lojistik depoların veya Ostim'deki fabrikaların günlerce sürecek çatı izolasyonu ve cephe giydirme işlemleri için kurumsal <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> seçeneklerimizi devreye sokuyoruz. Merkez garajımız Yenimahalle'de yer aldığı için anında müdahale garantisi veriyoruz.
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

        {/* 2. EN KRİTİK BÖLÜM: Yenimahalle’de Sepetli Vinç Nerelerde Kullanılır? */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Yenimahalle’de Sepetli Vinç Nerelerde Kullanılır?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Sanayi, Site ve Apartman blokları olmak üzere üç ana kolda uzmanlaşmış vinç çözümleri.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* 1. SANAYİ (OSTİM / İVEDİK) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-primary transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Factory size={120} />
                </div>
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 relative z-10">
                  <Factory size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Sanayi (Ostim / İvedik)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-primary mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Fabrika Bakım İşleri</strong>
                      <span className="text-gray-600 text-sm">Üretim tesislerinin dış cephe panelleri ve izolasyon tamiratları.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-primary mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Makine Montajı</strong>
                      <span className="text-gray-600 text-sm">Büyük CNC tezgahlarının üst havalandırma ve tesisat bağlantıları.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-primary mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Depo Aydınlatma</strong>
                      <span className="text-gray-600 text-sm">Yüksek lojistik depolarında armatür ve LED değişim işlemleri.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 2. SİTE (BATIKENT) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-emerald-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Building2 size={120} />
                </div>
                <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 relative z-10">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Site (Batıkent)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-emerald-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Site Cephe İşleri</strong>
                      <span className="text-gray-600 text-sm">Çok katlı blokların boya, mantolama ve oluk tamir işlemleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-emerald-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Ağaç Budama</strong>
                      <span className="text-gray-600 text-sm">Site içerisindeki tehlike arz eden büyük çam ve ağaçların kesimi.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-emerald-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Bakım İşleri</strong>
                      <span className="text-gray-600 text-sm">Çatı izolasyonu, uydu anteni montajı ve kamera sistemleri.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. APARTMAN (DEMETEVLER) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-amber-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Home size={120} />
                </div>
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 mb-6 relative z-10">
                  <Home size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Apartman (Demetevler)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Dar Sokak Vinç Kullanımı</strong>
                      <span className="text-gray-600 text-sm">Kısa şaseli araçlarla trafiği felç etmeden yapılan çalışmalar.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Tabela Montaj</strong>
                      <span className="text-gray-600 text-sm">Zemin katta yer alan dükkanların üstlerine reklam panosu asımı.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Cephe İşleri</strong>
                      <span className="text-gray-600 text-sm">Balkon altı sıva dökülmeleri, baca temizliği ve klima sökümü.</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Yenimahalle’de en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Fabrikanız, siteniz veya apartmanınız için Merkez Garaj'dan hemen çıkış yapıyoruz.</p>
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

        {/* 4. FİYAT BÖLÜMÜ */}
        <section id="fiyatlar" className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Yenimahalle Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Yenimahalle sınırları içerisindeki vinç kiralama fiyatları, işin niteliğine göre şekillenir. Ostim ve İvedik bölgesindeki fabrikalarda yapılan montaj veya üretim revizyonu işleri uzun sürdüğü için <strong>sanayi işleri günlük olarak fiyatlandırılır</strong> ve ekonomik avantaj sağlanır.
                </p>
                <p className="text-lg">
                  Buna karşın Batıkent ve Demetevler'de yaşayan bina sakinlerinin ihtiyaç duyduğu baca temizliği, dış oluk tamiri veya klima değişimi gibi <strong>apartman işleri genellikle saatlik paketler</strong> üzerinden ücretlendirilir. İşin yapılacağı mahallenin garajımıza olan <strong>lokasyon mesafesi</strong> ve dar sokak kurulum zorlukları da <strong>fiyatı etkiler</strong>. Projeniz için size özel çözümler sunuyoruz.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">İşinizin net bütçesini öğrenmek için bizi arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> Net Fiyat İçin Arayın
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GÜVEN BLOĞU (E-E-A-T) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yenimahalle’de Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">İlçenin çok farklı yapıya sahip mahallelerinde tamamladığımız referans operasyonlardan örnekler.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/batikent-vinc.jpg"
                    alt="ankara yenimahalle vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Building2 size={20} /> Batıkent Site İşi
                  </div>
                  <p className="text-gray-600 text-sm">Batıkent Çakırlar bölgesindeki çok bloklu bir sitede rüzgardan hasar gören dış cephe izolasyon kaplamaları, çevreye zarar vermeden vinç platformumuz yardımıyla onarıldı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/ostim-fabrika-vinc.jpg"
                    alt="yenimahalle sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Factory size={20} /> Ostim Fabrika İşi
                  </div>
                  <p className="text-gray-600 text-sm">İvedik OSB'de yeni kurulan bir yedek parça fabrikasının dış cephe havalandırma egzoz borularının çelik montajı üretim hattı devreye girmeden tamamlandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/yenimahalle-vinc.jpg"
                    alt="ankara yenimahalle vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <AlertTriangle size={20} /> Demetevler Apartman İşi
                  </div>
                  <p className="text-gray-600 text-sm">Demetevler'in oldukça dar sokaklarından birinde, yola park etmiş araçlara rağmen kısa şaseli vincimizle 7. kattaki tehlikeli klima dış ünitesi güvenle söküldü.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Yenimahalle Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97877.0706240097!2d32.710712776856524!3d39.98188175510443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3494793f7db29%3A0xeab5ed4d26217be5!2sYenimahalle%2C%20Ankara!5e0!3m2!1str!2str!4v1714159000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Yenimahalle Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 7. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Yenimahalle’de Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/elektrik-bakim" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Elektrik Bakım</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Cephe İşleri Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Ağaç Budama Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Yenimahalle, Batıkent ve Ostim çevresindeki operasyonlarla ilgili detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
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
