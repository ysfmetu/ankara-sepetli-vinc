import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Factory, Building2, Wrench, HardHat, Zap, Settings, ClipboardList, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ostim Sepetli Vinç Kiralama | Fabrika ve OSB Vinç Hizmeti',
  description: "Ankara Ostim OSB, İvedik ve Şaşmaz sanayi bölgelerinde fabrika bakımı, CNC makine montajı ve çelik konstrüksiyon işleri için 7/24 vinç kiralama. Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/ostim-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Ostim Sepetli Vinç Kiralama | Fabrika ve OSB Vinç Hizmeti',
    description: "Ankara Ostim OSB, İvedik ve Şaşmaz sanayi bölgelerinde fabrika bakımı, CNC makine montajı ve çelik konstrüksiyon işleri için 7/24 vinç kiralama. Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/ostim-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Ostim’de vinç ne kadar sürede gelir?',
    a: 'Araç filomuzun merkezi Yenimahalle ve Ostim/İvedik bölgesinde yer aldığı için, Ostim OSB içerisindeki çağrılara trafiğe bağlı olmaksızın en hızlı şekilde (genellikle 15-25 dakika içerisinde) müdahale edebiliyoruz.'
  },
  {
    q: 'OSB bölgesine hizmet veriyor musunuz?',
    a: 'Kesinlikle. Ostim OSB başta olmak üzere İvedik OSB, Şaşmaz Sanayi Sitesi ve Gimat gibi Ankara\'nın en büyük tüm organize sanayi bölgelerine kesintisiz 7/24 vinç kiralama hizmeti sunuyoruz.'
  },
  {
    q: 'Fabrika işleri için vinç kiralanır mı?',
    a: 'Fabrika içi yüksek tavan aydınlatma değişimleri, dış cephe sandviç panel montajları, çatı izolasyonları ve vinç yollarının bakımı gibi tüm endüstriyel fabrika işleri için sepetli vinçlerimiz özel olarak donatılmıştır.'
  },
  {
    q: 'Günlük kiralama yapılır mı?',
    a: 'Sanayi bölgelerindeki işler genelde uzun süreli montaj ve bakım aşamalarından oluşur. Çelik konstrüksiyon kurulumu veya komple fabrika cephe boyaması gibi projelerde bütçe avantajı sağlayan günlük kiralama modelimiz yoğun olarak tercih edilir.'
  }
];

export default function OstimPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ostim Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Ostim'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Ostim OSB, İvedik ve Yenimahalle sanayi bölgelerinde fabrika bakımı, makine montajı ve çelik konstrüksiyon vinç hizmetleri.",
        url: getCanonicalUrl('/bolgeler/ostim-sepetli-vinc-kiralama')
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
            name: 'Ostim Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/ostim-sepetli-vinc-kiralama`
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
              src="/images/bolge/ostim-fabrika-vinc.jpg"
              alt="ostim sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Ostim', href: '/bolgeler/ostim-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Ostim Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
                Ankara Ostim OSB’de 7/24 Profesyonel Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, sanayi ve teknoloji üretiminde <strong>İç Anadolu Bölgesi</strong>'nin atardamarıdır. Bu devasa üretim hacminin kalbi ise tartışmasız <strong>Ankara’nın en büyük sanayi bölgelerinden biri olan Ostim</strong>'de atmaktadır. Ostim OSB, İvedik OSB, Şaşmaz sanayi sitesi, Gimat toptancılar sitesi ve Yenimahalle sanayi bölgesi gibi birbirine entegre devasa üretim alanları, Ankara'nın endüstriyel lokomotifidir.
                </p>
                <p>
                  Ostim, on binlerce atölyenin, dev makine fabrikalarının, devasa depo alanlarının ve lojistik tesislerin bulunduğu; 7/24 vardiyalı çalışan bir bölgedir. Fabrika, atölye ve depo alanlarında yapılan ağır montaj işlemleri, bakım ve onarım faaliyetlerinde sepetli vinç kullanımı kritik ve vazgeçilmez bir ihtiyaçtır. CNC makine montajından yüksek tavanlı üretim hollerindeki fabrika aydınlatma sistemlerinin yenilenmesine, çelik konstrüksiyon çalışmalarından sandviç panel giydirmelerine kadar her türlü işte kesintisiz bir hizmet süreci gereklidir. Riske toleransı olmayan bu endüstriyel ortamda <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-orange-400 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> araçlarımız, iş güvenliği yönetmeliklerine %100 uyumlu olarak hizmet sunar. Sıfır kaza prensibi ve hassas işçilik gereksinimi sebebiyle, bu bölgelerde sadece <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-orange-400 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> desteği sağlamaktayız.
                </p>
                <p>
                  Sanayi bölgesindeki iş dinamikleri değişkendir. Bir atölyenin bozulan tabelasının değişimi veya tek bir aydınlatmanın tamiri gibi işlemler için şirketler genellikle <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-orange-400 hover:text-white underline font-medium">saatlik vinç kiralama</Link> paketimizi tercih eder. Ancak yeni kurulan bir fabrikanın komple dış cephe yalıtımı, kompozit giydirmesi veya yüksek tonajlı üretim hattı montajları günlerce sürdüğü için, maliyeti ciddi anlamda düşüren <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-orange-400 hover:text-white underline font-medium">günlük vinç kiralama</Link> modeli devreye girer. Merkezimiz bu bölgede yer aldığı için Ostim ve İvedik firmalarına anında araç sevkiyatı yapıyoruz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-600/30"
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
                  href="https://wa.me/905516066878?text=Merhaba,%20Ostim'deki%20projemiz%20i%C3%A7in%20fiyat%20almak%20istiyoruz."
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

        {/* 2. Bölüm: Ostim’de Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Ostim’de Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-orange-500 transition-colors group">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  <Factory size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Fabrika Bakım İşleri</h3>
                <p className="text-gray-600">Devasa üretim tesislerinin çatı izolasyonları, yağmur oluklarının tamiri, dış cephe sandviç panel onarımları ve fabrika içi vinç (gezer köprülü) yollarının dönemsel kontrolü için dışarıdan kiralık vinç desteği alınır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-orange-500 transition-colors group">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">CNC Makine Montajı</h3>
                <p className="text-gray-600">Tonlarca ağırlıktaki CNC işleme merkezlerinin atölye veya fabrika içerisine yerleştirilmesi, havalandırma egzoz borularının bağlanması ve kalibrasyon aşamasında üstten destek gereken işlerde vinçlerimiz kritik rol oynar.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-orange-500 transition-colors group">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Depo Aydınlatma Sistemleri</h3>
                <p className="text-gray-600">10-15 metre tavan yüksekliğine sahip lojistik depolarında, raf sistemlerinin arasına rahatça girebilen sepetli araçlarımızla aydınlatma armatürlerinin LED dönüşümü ve arıza tespitleri güvenle yapılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-orange-500 transition-colors group">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Çelik Konstrüksiyon Montajı</h3>
                <p className="text-gray-600">Yeni inşa edilen sanayi siteleri ve depo antrepolarının dev çelik iskeletlerinin kaynaklı veya cıvatalı birleşimi esnasında, ustaların güvenli çalışabilmesi için iş platformlu vinç filomuz hizmettedir.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-orange-500 transition-colors group">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Üretim Hattı Bakım İşlemleri</h3>
                <p className="text-gray-600">Otomotiv veya savunma sanayi üretim hatlarında, makine parkurunu durdurmadan yukarıdan yapılması gereken elektrik tavası çekimi veya yangın tesisatı kurulumunda hassas manevra ile destek sağlanır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SANAYİ VURGUSU (FARK YARATAN B2B BLOK) */}
        <section className="py-16 bg-orange-50 border-y border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-orange-100">
                  <HardHat size={100} className="text-orange-600" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ostim OSB’de Profesyonel Vinç Kullanımı</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Ostim ve İvedik gibi devasa üretim havzalarındaki operasyonlar; sıradan bina boyama işlerinden çok daha farklı bir ciddiyet, teknik altyapı ve tecrübe gerektirir. <strong>Ağır sanayi işleri</strong> ve <strong>yüksek tonajlı ekipmanların</strong> çatı katlarına veya dar üretim bantlarına taşınması, mühendislik hesaplamaları ile yürütülen <strong>hassas montaj</strong> süreçleridir.
                  </p>
                  <p>
                    Fabrika içerisinde makinelerin üzerinden geçerek yapılan riskli işlerde, yanlış bir hamlenin maliyeti milyonlarca liralık üretim kaybına yol açabilir. Bu nedenle sanayi bölgelerinde vincin sadece kiralanması yeterli değildir; aracı milimetrik kullanabilen eğitimli ellere ihtiyaç vardır. B2B endüstriyel çözüm ortağınız olarak, İş Sağlığı ve Güvenliği (İSG) standartlarına uygun, sertifikalı ve tecrübeli uzmanlarımızla <strong>operatörlü kullanım zorunluluğu</strong> prensibimizden taviz vermeden şirketinizin en riskli operasyonlarını güvence altına alıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-orange-600 py-12 border-y border-orange-700">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ostim’de en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-orange-100 mb-8 text-lg">Fabrikanızda üretim durmasın, acil onarım veya montaj işlerinizi hemen çözelim.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ostim Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Ostim OSB bölgesindeki endüstriyel vinç kiralama maliyetleri standart apartman işlerinden farklı dinamiklere sahiptir. Vinç fiyatlarını hesaplarken <strong>işin büyüklüğü fiyatı belirler</strong> mantığı geçerlidir. Küçük bir atölyenin tek bir klima dış ünitesini taşıması ile 10.000 metrekarelik bir fabrikanın tavan aydınlatmalarını değiştirmesi bütçe olarak tamamen farklıdır.
                </p>
                <p className="text-lg">
                  Yüksek metrajlı veya ağır tonajlı <strong>fabrika işleri</strong> uzun süreli operasyonlar olduğu için <strong>genelde günlük kiralama</strong> modeli ile fiyatlandırılarak firmalara daha ekonomik bütçeler sunulur. Sanayi sitelerinde aylarca sürecek büyük çelik montaj inşaatları veya <strong>proje bazlı fiyatlandırma</strong> talepleri için satın alma uzmanlarınıza rekabetçi kurumsal teklifler iletiyoruz.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Şirketinize özel net fiyat için bizi arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ostim’de Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Ostim ve İvedik sanayi bölgelerinde B2B şirketlere sunduğumuz ağır sanayi operasyonları.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/ostim-fabrika-vinc.jpg"
                    alt="ankara ostim vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                    <Factory size={20} /> Fabrika Bakım Örneği
                  </div>
                  <p className="text-gray-600 text-sm">Ostim OSB Uzay Çağı Caddesi'nde faaliyet gösteren savunma sanayi şirketinin dış cephe kompozit yenilemesi ve üretim holü çatısındaki havalandırma motorlarının değişimi üretim aksamadan tamamlandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <Settings size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                    <Settings size={20} /> Makine Montajı
                  </div>
                  <p className="text-gray-600 text-sm">İvedik OSB'de yeni kurulan bir kalıp fabrikasına getirilen 5 tonluk CNC işleme makinesinin dar atölye kapısından içeri alınması ve kurulum esnasında egzoz borularının yukarıdan montajı hassas vincimizle sağlandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/ostim-sanayi-vinc.jpg"
                    alt="ostim sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                    <Zap size={20} /> Depo Aydınlatma İşi
                  </div>
                  <p className="text-gray-600 text-sm">Şaşmaz Sanayi Sitesi sınırlarında yer alan devasa bir lojistik dağıtım deposunun 12 metre tavan yüksekliğindeki eski tip armatürleri, dar raf aralarına girebilen kısa platformlu vincimiz sayesinde LED sistemlere dönüştürüldü.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Ostim OSB Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24462.618685168032!2d32.723145464406284!3d39.96766624949573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349cd798da09d%3A0xe5435dcda14e4171!2sOstim%20Osb%2C%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1714158000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ostim Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ostim’de Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">Sanayi ve üretim tesislerine sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-orange-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-orange-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-orange-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-orange-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/elektrik-bakim" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-orange-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-lg mb-2">Elektrik Bakım Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-orange-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-lg mb-2">Cephe İşleri Vinç</span>
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
              <p className="text-lg text-gray-600">Ostim OSB ve İvedik çevresindeki sanayi operasyonlarıyla ilgili merak edilen detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
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
          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
