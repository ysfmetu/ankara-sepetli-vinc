import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Factory, Building2, Settings, Zap, Clock, Wrench, ShieldCheck, ClipboardList } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'İvedik Sepetli Vinç Kiralama | Fabrika ve OSB Vinç Hizmeti',
  description: "Ankara İvedik OSB'de fabrika bakımı, üretim hattı montajı ve CNC makine kurulumu için acil sepetli vinç kiralama hizmeti. Hemen Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/ivedik-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'İvedik Sepetli Vinç Kiralama | Fabrika ve OSB Vinç Hizmeti',
    description: "Ankara İvedik OSB'de fabrika bakımı, üretim hattı montajı ve CNC makine kurulumu için acil sepetli vinç kiralama hizmeti. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/ivedik-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'İvedik’te vinç ne kadar sürede gelir?',
    a: 'Garaj merkezimizin bölgeye doğrudan sınır olması sayesinde, İvedik OSB içerisindeki çağrılara trafiğe bağlı olmaksızın en hızlı şekilde (genellikle 15-20 dakika içerisinde) müdahale edebiliyoruz.'
  },
  {
    q: 'OSB içinde vinç hizmeti var mı?',
    a: 'Kesinlikle. İvedik Organize Sanayi Bölgesi (OSB) içerisindeki tüm adalar, üretim tesisleri ve atölyeler için ağır sanayi standartlarında 7/24 vinç kiralama desteği sunuyoruz.'
  },
  {
    q: 'Acil vinç yönlendirme yapılır mı?',
    a: 'Evet, fabrikalarda üretim bandının durmasına sebep olabilecek acil çatı akıntıları, elektrik pano arızaları veya egzoz fanı değişimleri için anında acil durum yönlendirmesi yapmaktayız.'
  },
  {
    q: 'Proje bazlı kiralama mümkün mü?',
    a: 'Yeni kurulan fabrikaların komple dış cephe yalıtımı, çatı güneş paneli (GES) montajı veya çelik konstrüksiyon üretim hatları için avantajlı proje bazlı ve aylık kiralama modellerimiz mevcuttur.'
  }
];

export default function IvedikPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'İvedik Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'İvedik'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "İvedik OSB'de fabrika bakımı, üretim hattı montajı ve sanayi tesislerine profesyonel vinç kiralama hizmetleri.",
        url: getCanonicalUrl('/bolgeler/ivedik-sepetli-vinc-kiralama')
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
            name: 'İvedik Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/ivedik-sepetli-vinc-kiralama`
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
              src="/images/bolge/ivedik-fabrika-vinc.jpg"
              alt="ivedik sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'İvedik', href: '/bolgeler/ivedik-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                İvedik Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-red-400 mb-6">
                Ankara İvedik OSB’de 7/24 Profesyonel Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, sanayi ve teknoloji üretim kapasitesiyle <strong>İç Anadolu Bölgesi</strong>'nin ticari yükünü sırtlayan en önemli metropoldür. Bu metropolün üretim motorunu çalıştıran ve on binlerce atölyeye ev sahipliği yapan <strong>Ankara’nın en yoğun sanayi bölgelerinden biri olan İvedik</strong> Organize Sanayi Bölgesi, aralıksız çalışan fabrikalarıyla devasa bir ekosistemdir.
                </p>
                <p>
                  İvedik OSB, Ostim, Yenimahalle sanayi bölgesi, Şaşmaz ve Gimat toptancılar sitesi gibi birbiriyle entegre çalışan bu üretim havzalarında, ağır makine montajından yüksek fabrika çatı onarımlarına kadar her adımda vinç kullanımı günlük iş süreçlerinin vazgeçilmez bir parçasıdır. Geleneksel bina işlerinden çok daha farklı ve riskli olan bu operasyonlarda <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-red-400 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> araçlarımız, iş sağlığı ve güvenliği yönetmeliklerine %100 uyumlu şekilde hizmet sunar. Üretim bandının aksamaması ve personel güvenliği için bu bölgelerde sadece uzman kadrolarımızla <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-red-400 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> sağlamaktayız.
                </p>
                <p>
                  Atölye girişindeki arızalı bir tabelanın onarımı veya depo önündeki tek bir aydınlatmanın değişimi gibi hızlı müdahaleler için B2B firmalarımıza pratik olan <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-red-400 hover:text-white underline font-medium">saatlik vinç kiralama</Link> modelini sunarken; İvedik OSB'de yeni açılan dev üretim tesislerinin çelik iskelet kurulumu ve sandviç panel montajları için satın alma yöneticilerine bütçe avantajı yaratan kurumsal <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-red-400 hover:text-white underline font-medium">günlük vinç kiralama</Link> sözleşmeleri imzalıyoruz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-900/30"
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
                  href="https://wa.me/905516066878?text=Merhaba,%20İvedik%20OSB'deki%20projemiz%20i%C3%A7in%20fiyat%20almak%20istiyoruz."
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

        {/* 2. EN KRİTİK BÖLÜM: İvedik’te Sepetli Vinç Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">İvedik’te Sepetli Vinç Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-red-500 transition-colors group">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  <Factory size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Fabrika Bakım ve Onarım İşleri</h3>
                <p className="text-gray-600">Sanayi tesislerindeki yağmur oluklarının tamiri, çatı havalandırma (egzoz) motorlarının değişimi ve fabrika dış cephe kaplama işlerinin yüksek güvenlik standartlarında tamamlanması.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-red-500 transition-colors group">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Üretim Hattı Montajı</h3>
                <p className="text-gray-600">Fabrika içerisine yeni kurulan otomotiv, savunma sanayi veya yedek parça üretim bantlarının üst bağlantıları ve makine üstü elektrik tavalarının güvenle çekilmesi.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-red-500 transition-colors group">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">CNC Makine Kurulumu</h3>
                <p className="text-gray-600">Lojistik tırlarıyla atölyelere indirilen tonlarca ağırlıktaki pres, lazer kesim ve CNC makinelerinin dar fabrika kapılarından hassas bir şekilde taşınarak doğru konuma yerleştirilmesi.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-red-500 transition-colors group">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Depo Aydınlatma Sistemleri</h3>
                <p className="text-gray-600">İvedik OSB'deki 15-20 metre tavan yüksekliğine sahip lojistik antrepoların LED dönüşümleri ve raf aralarına giren yangın spring sistemlerinin montajı.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-red-500 transition-colors group">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center text-red-600 mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Çelik Konstrüksiyon Montajı</h3>
                <p className="text-gray-600">Yeni inşa edilen üretim hangarlarının devasa çelik kolonlarının ve kiriş bağlantılarının, iskele kurmaya gerek kalmadan havada vidalanıp kaynaklanması.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OPERASYON HIZI (B2B DÖNÜŞÜM GETİRİR) */}
        <section className="py-16 bg-red-50 border-y border-red-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-red-100">
                  <Clock size={100} className="text-red-600" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">İvedik OSB’de Hızlı Vinç Hizmeti Neden Önemlidir?</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Sanayi sektörünün altın kuralı şudur: <strong>Üretim durmamalı!</strong> İvedik Organize Sanayi Bölgesinde faaliyet gösteren bir fabrikanın üretim bandının 1 saat durması bile devasa maddi kayıplara ve teslimat krizlerine yol açar. Çatısı akan bir deponun ürünlere zarar vermesi veya patlayan bir ana elektrik trafosu, sanayicinin en büyük kabusudur.
                  </p>
                  <p>
                    Bu gibi riskli kriz anlarında saniyeler içinde sağlanan <strong>hızlı müdahale</strong> hayati bir önem taşır. Biliyoruz ki sanayide <strong>zaman = maliyet</strong> demektir. Merkeze uzak vinç şirketlerinden araç bekleyerek iş gücü kaybı yaşamak yerine, hemen sınırınızda yer alan araç filomuzla <strong>acil vinç ihtiyacı</strong> olan noktalara dakikalar içerisinde ulaşıyoruz. B2B çözüm ortağınız olarak, fabrikanızın çarkları dönmeye devam etsin diye 7/24 teyakkuzdayız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-red-600 py-12 border-y border-red-700">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">İvedik’te en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-red-100 mb-8 text-lg">Fabrikanızda üretim durmasın, acil montaj veya onarım işlerinizi anında çözelim.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">İvedik Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  İvedik OSB'deki ağır sanayi vinç kiralama hizmetlerinde, standart bir apartman tarifesinden farklı bir fiyatlandırma stratejisi uygulanır. Burada maliyeti etkileyen ana unsur, işin operasyonel hacmidir. Kısacası <strong>işin büyüklüğü fiyatı belirler</strong>. Yeni kurulan bir üretim hattının montajı ile küçük bir tabelanın asılması doğal olarak farklı bütçelendirilir.
                </p>
                <p className="text-lg">
                  Fabrikalar, lojistik depoları ve imalathanelerdeki uzun soluklu <strong>sanayi işleri genelde günlük</strong> ve haftalık paketler üzerinden fiyatlandırılarak firmalara maliyet avantajı sağlanır. Aylarca sürecek endüstriyel tesis kurulumları için kurumsal satın alma departmanlarınıza özel <strong>proje bazlı fiyat</strong> teklifleri sunarak, en rekabetçi bütçeleri oluşturuyoruz.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Şirketinize özel net fiyat ve keşif için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">İvedik’te Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">İvedik OSB çevresinde üretim tesisleri ve atölyeler için başarıyla tamamlanan referans operasyonlar.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/ivedik-fabrika-vinc.jpg"
                    alt="ankara ivedik vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                    <Factory size={20} /> Fabrika Bakım İşi
                  </div>
                  <p className="text-gray-600 text-sm">İvedik Organize Sanayi Bölgesinde yer alan büyük bir yedek parça fabrikasının dış cephe havalandırma (egzoz) motoru, üretim bandı durdurulmadan güvenli şekilde değiştirildi.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <Settings size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                    <Settings size={20} /> Makine Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Atölye girişindeki dar kapıdan tırla getirilen 5 tonluk yeni nesil CNC tezgahının içeri alınması ve tavan bağlantılarının yapılması işlemi sıfır kaza riski ile tamamlandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/ivedik-vinc.jpg"
                    alt="ivedik sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                    <Zap size={20} /> Depo Aydınlatma
                  </div>
                  <p className="text-gray-600 text-sm">Lojistik bir deponun 12 metre yükseklikteki tavanına, raf aralarına ustalıkla giren kısa şaseli platformumuz aracılığıyla yangın ihbar sistemi ve LED aydınlatmalar yerleştirildi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">İvedik OSB Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48914.363806967735!2d32.73030386121408!3d39.98864705500585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d349a21dc3b573%3A0xe5435dcda14e4171!2zSXZlZGlrb3NiLCBZZW5pbWFoYWxsZS9BbmthcmE!5e0!3m2!1str!2str!4v1714164000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="İvedik OSB Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">İvedik’te Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">Sanayi ve üretim tesislerine yönelik sunduğumuz operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-red-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-red-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-red-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-red-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/elektrik-bakim" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-red-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-lg mb-2">Elektrik Bakım Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-red-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors text-lg mb-2">Cephe İşleri Vinç</span>
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
              <p className="text-lg text-gray-600">İvedik OSB içerisindeki sanayi operasyonlarıyla ilgili merak edilen detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">
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
          className="flex-1 bg-red-600 hover:bg-red-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
