import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Home, Truck, Factory, Clock, ShieldCheck, Building2, Wrench, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Pursaklar Sepetli Vinç Kiralama | Esenboğa Yolu ve Saray',
  description: "Ankara Pursaklar, Saray, Altınova ve Esenboğa yolu üzerindeki lojistik depolar, sanayi alanları ve apartman cephe işleri için sepetli vinç hizmeti. Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/pursaklar-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Pursaklar Sepetli Vinç Kiralama | Esenboğa Yolu ve Saray',
    description: "Ankara Pursaklar, Saray, Altınova ve Esenboğa yolu üzerindeki lojistik depolar, sanayi alanları ve apartman cephe işleri için sepetli vinç hizmeti. Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/pursaklar-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Pursaklar’da vinç ne kadar sürede gelir?',
    a: 'Pursaklar ve havalimanı yolu güzergahı trafiğin akıcı olduğu ve çevre yollarıyla merkeze bağlanan bir bölgedir. Bu avantaj sayesinde acil çağrılarda genellikle 30-40 dakika içerisinde operasyon noktasına ulaşabiliyoruz.'
  },
  {
    q: 'Esenboğa yolu çevresine hizmet var mı?',
    a: 'Evet, Esenboğa havalimanı protokol yolu ve o güzergah üzerindeki devasa lojistik depolarına, kargo aktarma merkezlerine ve ticari alanlara 7/24 kesintisiz vinç kiralama hizmetimiz mevcuttur.'
  },
  {
    q: 'Aynı gün vinç gelir mi?',
    a: 'Sanayi ve lojistik sektörünün beklemeye tahammülü olmadığının bilincindeyiz. Rüzgarda uçan bir depo çatısı veya acil bir fabrika arızası durumunda anında aynı gün ve saat içerisinde vinç yönlendiriyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Pursaklar merkez ve Sirkeli gibi yerleşim yerlerindeki binaların cephe boyası, balkon onarımı veya dükkan tabelası montajı gibi standart işlemler için ekonomik saatlik kiralama paketimiz bulunmaktadır.'
  }
];

export default function PursaklarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Pursaklar Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Pursaklar'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Pursaklar, Saray sanayi, Esenboğa lojistik bölgeleri ve konut alanları için sepetli vinç kiralama ve operatörlü platform hizmetleri.",
        url: getCanonicalUrl('/bolgeler/pursaklar-sepetli-vinc-kiralama')
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
            name: 'Pursaklar Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/pursaklar-sepetli-vinc-kiralama`
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
              src="/images/bolge/pursaklar-vinc.jpg"
              alt="pursaklar sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Pursaklar', href: '/bolgeler/pursaklar-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Pursaklar Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-300 mb-6">
                Ankara Pursaklar’da 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, kuzey ekseninde havaalanı bağlantısı ile kritik bir lojistik büyüme göstermektedir. Bu büyümenin stratejik noktasında bulunan ve <strong>Ankara’nın gelişen ilçelerinden biri olan Pursaklar</strong>, <strong>İç Anadolu Bölgesi</strong>'nin en önemli ticaret ve konut rotalarından biri haline gelmiştir. Pursaklar, kuzeyde yer almasının avantajıyla hem devasa konut projelerinin hem de lojistik ve sanayi faaliyetlerinin inanılmaz bir uyumla birlikte bulunduğu nadir ilçelerdendir.
                </p>
                <p>
                  Esenboğa Havalimanı (protokol) yolu üzerinde yer alması, bölgedeki devasa depo ve taşımacılık faaliyetlerini zirveye çıkarmıştır. Bununla birlikte Saray ve Altınova mahallelerindeki ağır sanayi/şantiye tesisleri, Pursaklar merkez ve Sirkeli bölgelerindeki yoğun yerleşim alanları ile birleşince vinç kullanımını son derece yaygın ve çeşitli hale getirmiştir. Depoların çatı izolasyonlarından apartmanların dış cephe onarımlarına kadar çok geniş bir yelpazede <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-violet-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> araçlarımıza ihtiyaç duyulmaktadır. Yüksek sanayi binaları ve yoğun protokol trafiğinde güvenliği sağlamak adına sadece <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-violet-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> modeli ile, sertifikalı ve uzman personellerle hizmet veriyoruz.
                </p>
                <p>
                  Pursaklar merkezindeki konut sakinlerinin tabela montajı veya cephe tamiratı gibi taleplerini hızlıca çözen <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-violet-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> opsiyonumuz aktifken; havaalanı yolu üzerindeki lojistik merkezlerinin çatı kompozit panel montajları ve Saray sanayisindeki haftalar süren fabrika inşaatları için bütçenizi koruyan <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-violet-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> anlaşmalarını devreye sokuyoruz.
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

        {/* 2. EN KRİTİK BÖLÜM: Pursaklar’da Sepetli Vinç Nerelerde Kullanılır? */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Pursaklar’da Sepetli Vinç Nerelerde Kullanılır?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Konut, Lojistik ve Sanayi ekseninde 3 farklı amaca hizmet eden profesyonel vinç çözümleri.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* 1. KONUT (MERKEZ / SİRKELİ) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-violet-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Home size={120} />
                </div>
                <div className="bg-violet-100 w-16 h-16 rounded-2xl flex items-center justify-center text-violet-600 mb-6 relative z-10">
                  <Home size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Konut (Merkez / Sirkeli)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-violet-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Apartman Cephe İşleri</strong>
                      <span className="text-gray-600 text-sm">Bina dış mantolama, boya, sıva ve yağmur oluğu onarım işlemleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-violet-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Tabela Montajı</strong>
                      <span className="text-gray-600 text-sm">Pursaklar merkezdeki cadde dükkanlarının ışıklı reklam panolarının asılması.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-violet-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Bakım Çalışmaları</strong>
                      <span className="text-gray-600 text-sm">Klima dış üniteleri, yüksek katlı cam temizliği ve baca izolasyonu.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 2. LOJİSTİK (ESENBOĞA YOLU) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-sky-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Truck size={120} />
                </div>
                <div className="bg-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center text-sky-600 mb-6 relative z-10">
                  <Truck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Lojistik (Esenboğa Yolu)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-sky-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Depo Çalışmaları</strong>
                      <span className="text-gray-600 text-sm">Lojistik aktarma merkezlerinin yüksek tavan LED aydınlatma değişimleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-sky-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Yükleme Alanları</strong>
                      <span className="text-gray-600 text-sm">Kargo dağıtım alanlarındaki dev sundurmaların ve sundurma çatılarının montajı.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-sky-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Taşıma İşlemleri</strong>
                      <span className="text-gray-600 text-sm">Ağır havalandırma ünitelerinin depo çatılarına güvenli bir şekilde alınması.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. ŞANTİYE / SANAYİ (SARAY / ALTINOVA) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:border-amber-500 transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Factory size={120} />
                </div>
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 mb-6 relative z-10">
                  <Factory size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 border-b border-gray-200 pb-4">Sanayi (Saray/Altınova)</h3>
                <ul className="space-y-4 relative z-10 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">İnşaat Çalışmaları</strong>
                      <span className="text-gray-600 text-sm">Yeni kurulan fabrikaların çelik iskelet ve konstrüksiyon bağlantı işleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Makine Montajı</strong>
                      <span className="text-gray-600 text-sm">Üretim bantlarının üzerindeki egzoz bacaları ve üstten ağır makine müdahaleleri.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-amber-600 mt-1 shrink-0" size={20} />
                    <div>
                      <strong className="block text-gray-900">Saha İşleri</strong>
                      <span className="text-gray-600 text-sm">Geniş sanayi arazilerinde trafo, elektrik hattı ve kamera sistemleri çekimi.</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3. KONUM AVANTAJI (FARK YARATAN BÖLÜM) */}
        <section className="py-16 bg-violet-50 border-y border-violet-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Clock size={100} className="text-violet-600" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pursaklar’da Hızlı Vinç Hizmeti Avantajı</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Pursaklar'ın coğrafi yerleşimi, özellikle <strong>ana yollar</strong> üzerine kurulmuş olması sebebiyle devasa iş makinelerinin bölgeye transferini çok kolaylaştırmaktadır. Ankara'nın trafiğine takılmadan çevre yolları üzerinden sağladığımız <strong>hızlı ulaşım</strong> ağı sayesinde, Pursaklar merkezine ve sanayi bölgelerine vakit kaybetmeden ulaşıyoruz.
                  </p>
                  <p>
                    Özellikle <strong>havaalanı yolu</strong> üzerindeki dümdüz uzanan geniş şeritler, acil durumlarda araçlarımızın hedefe <strong>erişimini inanılmaz kolaylaştırır</strong>. Lojistik depoların ve Saray sanayisindeki fabrikaların <strong>geniş alanları</strong> ve otoparkları, sepetli vincin denge ayaklarının rahatça açılmasına ve operasyonun anında başlamasına olanak sağlayan mükemmel bir <strong>çalışma avantajı</strong> yaratır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Pursaklar’da en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Havalimanı yolu, Saray Sanayi ve Konut bölgeleri için 7/24 hizmetinizdeyiz.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pursaklar Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Pursaklar'daki kiralama operasyonlarında fiyatlandırmayı belirleyen en önemli etken projenin niteliğidir. Esenboğa yolu üzerindeki bir lojistik deponun tavan aydınlatmalarının komple yenilenmesi gibi ağır sanayi işleri ile, merkezdeki bir apartmanın tabela asımı farklıdır. Kısacası <strong>iş türü fiyatı doğrudan belirler</strong>.
                </p>
                <p className="text-lg">
                  Bu bağlamda vincin çalışacağı <strong>süre</strong> temel ölçütümüzdür. Kısa işlemler için ekonomik <strong>saatlik kiralama</strong> seçenekleri sunarken, Saray'daki bir fabrika inşaatı için <strong>günlük</strong> kiralama uygulanır. Aracımızın gideceği <strong>lokasyon</strong> (Sirkeli'ye kadar olan mesafe gibi) yakıt ve zaman dengesini <strong>etkiler</strong>. Her sektöre uygun şeffaf fiyatlandırma sağlıyoruz.
                </p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">İşinize özel net fiyat teklifi almak için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-violet-700 transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pursaklar’da Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Saray Sanayi, Esenboğa Yolu ve Pursaklar merkezinde başarıyla yürüttüğümüz referans işler.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/esenboga-vinc.jpg"
                    alt="ankara pursaklar vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-violet-600 font-bold mb-2">
                    <Package size={20} /> Depo Çalışması
                  </div>
                  <p className="text-gray-600 text-sm">Esenboğa protokol yolu üzerinde yeni faaliyete geçen devasa bir uluslararası kargo aktarma merkezinin iç aydınlatma sistemleri ve kamera tesisatı vinç platformu üzerinden hızlıca çekildi.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <Building2 size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-violet-600 font-bold mb-2">
                    <Building2 size={20} /> Apartman Cephe İşi
                  </div>
                  <p className="text-gray-600 text-sm">Pursaklar merkezde bulunan 7 katlı bir apartmanın rüzgarda gevşeyen çatı olukları ve balkon altı sıva dökülmeleri trafiği engellemeden sokağa yanaşan vincimizle onarıldı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/pursaklar-vinc.jpg"
                    alt="pursaklar sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-violet-600 font-bold mb-2">
                    <Wrench size={20} /> Tabela Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Saray bölgesinde yer alan endüstriyel bir tesisin ana giriş kapısına, 10 metre yükseklikte konumlandırılan yeni ışıklı kurumsal logolarının kaynaklı montajı güvenle tamamlandı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Pursaklar Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48866.45391307612!2d32.880196720516776!3d40.04907955502675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0e0bc4eb0b%3A0x86b0f0a4f5b5c92c!2sPursaklar%2C%20Ankara!5e0!3m2!1str!2str!4v1714162000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pursaklar Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pursaklar’da Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-violet-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-violet-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-violet-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-violet-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/elektrik-bakim" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-violet-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-lg mb-2">Elektrik Bakım</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/tabela-montaj" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-violet-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-violet-600 transition-colors text-lg mb-2">Tabela Montaj Vinç</span>
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
              <p className="text-lg text-gray-600">Pursaklar, Saray ve Esenboğa Yolu bölgesindeki operasyonlarla ilgili detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-violet-600 transition-colors">
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
          className="flex-1 bg-violet-600 hover:bg-violet-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
