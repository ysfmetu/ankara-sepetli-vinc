import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, CheckCircle2, ChevronRight, Factory, Zap, Building2, Map, ShieldCheck, Wrench, HardHat } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Sincan Sepetli Vinç Kiralama | Sanayi ve Fabrika Vinç Hizmeti',
  description: "Ankara Sincan OSB, Yenikent ve Temelli bölgelerinde fabrika, depo ve dış cephe işleri için 7/24 operatörlü sepetli vinç kiralama. Hemen Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/sincan-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Sincan Sepetli Vinç Kiralama | Sanayi ve Fabrika Vinç Hizmeti',
    description: "Ankara Sincan OSB, Yenikent ve Temelli bölgelerinde fabrika, depo ve dış cephe işleri için 7/24 operatörlü sepetli vinç kiralama. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/sincan-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Sincan’da vinç ne kadar sürede gelir?',
    a: 'Sincan bölgesindeki geniş araç filomuz ve OSB merkezli araç bekleme noktalarımız sayesinde, acil durumlarda ortalama 30 ila 45 dakika içerisinde adresinize ulaşıyoruz.'
  },
  {
    q: 'OSB (Organize Sanayi Bölgesi) tarafına hizmet var mı?',
    a: 'Kesinlikle. Sincan OSB, ASO 1. OSB ve çevresindeki tüm endüstriyel tesislere, ağır sanayi şartlarına uygun büyük metrajlı sepetli vinç kiralama hizmetini 7/24 kesintisiz sunuyoruz.'
  },
  {
    q: 'Aynı gün vinç gelir mi?',
    a: 'Müsaitlik durumumuza göre fabrikalardaki acil elektrik arızaları, tavan aydınlatma onarımları veya fırtına sonrası hasarlar için Sincan bölgesine aynı gün acil vinç müdahalesi gerçekleştiriyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Evet, tabela değişimi, kısa süreli cam silimi veya tek bir aydınlatma arızası gibi ufak işleriniz için saatlik kiralama modelimiz aktiftir.'
  }
];

export default function SincanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Sincan Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Sincan'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Sincan OSB, Yenikent ve Temelli'de fabrika, depo ve dış cephe işlemleri için sepetli vinç kiralama hizmeti.",
        url: getCanonicalUrl('/bolgeler/sincan-sepetli-vinc-kiralama')
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
            name: 'Sincan Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/sincan-sepetli-vinc-kiralama`
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
              src="/images/bolge/sincan-vinc-kiralama.jpg"
              alt="sincan sepetli vinç kiralama"
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
                  { label: 'Sincan', href: '/bolgeler/sincan-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Sincan Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Ankara Sincan’da 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, sanayi ve üretim kapasitesiyle <strong>İç Anadolu Bölgesi</strong>'nin kalbidir. Bu devasa üretim gücünün en büyük temsilcilerinden biri ise şüphesiz <strong>Ankara’nın batı ilçelerinden biri olan Sincan</strong> lokasyonudur. Sincan, özellikle devasa sanayi tesislerinin, dev fabrikaların ve lojistik depoların kümelendiği çok geniş bir üretim alanıdır. Sincan merkez, Törekent, Temelli, OSB (Organize Sanayi Bölgesi) ve Yenikent gibi bölgeler, sürekli bir inşaat, tadilat ve bakım döngüsü içerisindedir.
                </p>
                <p>
                  Üretim alanlarında ve geniş açık sahalarda yüksek erişim gerektiren işlemler çok sık karşımıza çıkar. Fabrika içi tavan aydınlatma bakımları, yüksek çelik konstrüksiyon işlemleri veya devasa dış cephe temizliği işleri için <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> araçlarımızın kullanımı son derece yaygındır. Üretimin aksamaması için bu tür endüstriyel işlemlerde kiralama hizmeti mutlaka hızlı ve doğru planlanmalıdır. İş güvenliğini maksimumda tutmak adına, ağır sanayi şartlarına uygun iş güvenliği sertifikalı uzman ekiplerimizle <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> desteği sağlamaktayız.
                </p>
                <p>
                  Sincan'da genellikle çok uzun sürecek şantiye süreçleri, kompozit cephe mantolamaları veya komple fabrika aydınlatma değişimleri ağırlıktadır. Bu nedenle işletmeler bütçelerini daha verimli kullanmak için <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> paketlerimizi tercih ederler. Öte yandan OSB içindeki ufak tefek elektrik arızaları, tek bir kameranın veya makinenin montajı gibi daha minimal taleplerde ise <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> modelimiz hızlı ve pratik bir çözüm olarak devrededir. Sanayinin çarkları hiç durmasın diye 7/24 hizmetinizdeyiz.
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

        {/* 2. Bölüm: Sincan’da Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Sincan’da Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Factory size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">OSB (Organize Sanayi)</h3>
                <p className="text-gray-600">Sincan OSB bölgesindeki ağır makine fabrikaları, dev üretim holleri ve çelik konstrüksiyon binalarda endüstriyel çatı bakımları, vinç yolları kontrolü ve fabrika içi yüksek tavan aydınlatma tamiratlarında sepetli vinç zorunlu bir ihtiyaçtır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Temelli</h3>
                <p className="text-gray-600">Lojistik üsleri ve devasa depolama alanlarının merkezi Temelli'de, hangarların dış cephe kompozit yalıtımları, yangın ve havalandırma borularının montajı ve depo güvenlik kamera kurulumları vinçlerimizle sorunsuz gerçekleştirilir.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Törekent</h3>
                <p className="text-gray-600">Törekent bölgesinde yoğunlaşan modern yerleşim alanlarında yüksek bloklu site yapıları dikkat çeker. Düşen sıva parçaları, apartman çatı onarımları, klima ünite taşıması ve site bahçelerindeki peyzaj alanları bakımı için hizmet veririz.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yenikent</h3>
                <p className="text-gray-600">Hızla büyüyen Yeni Kent ovasında çok geniş konut şantiyeleri mevcuttur. Dış cephe mantolama projelerinde, yeni binaların yağmur oluğu sistemleri çekilirken, dar alan sıkıntısı yaşamayan geniş araç filomuzla aralıksız hizmet sunarız.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sincan Merkez</h3>
                <p className="text-gray-600">Ticari hayatın yoğun olduğu Sincan merkezinde yer alan iş merkezleri ve mağazalar için büyük ışıklı tabela montajları, kurumsal marka logolarının cepheye asılması, cam yüzeylerin silinmesi işlemleri trafiği aksatmadan yapılır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CTA EKLE (ORTA BLOK) */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Sincan’da en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Fabrika işleriniz veya cephe tamiratlarınız için iskeleyle vakit kaybetmeyin.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sincan Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Sincan bölgesi, çok geniş bir coğrafyaya yayıldığı için düz caddelere ve ferah ulaşım hatlarına sahiptir. Sincan'daki geniş alanlar sayesinde vinçlerin ulaşımı ve çalışma alanına park edilmesi son derece kolaydır. İşlem süresini kısaltan bu durum <strong>Sincan sepetli vinç fiyatları</strong> üzerinde doğrudan tasarruf avantajı sağlar.
                </p>
                <p className="text-lg">
                  Ancak unutulmamalıdır ki, sanayi bölgelerindeki işler çoğunlukla apartman işlerinden daha uzun süreli ve daha yüksek meblağlı projelere aittir. Büyük fabrika boyamaları, çelik konstrüksiyon işleri veya depo çatı tamiratları büyük çaplı olduğu için genelde saatlik kiralama yerine günlük kiralama mantığı devreye girer. Ayrıca çok yüksek tavanlı sanayi işleri için ağır makinelere ihtiyaç duyulması, kullanılacak bom uzunluğunu değiştireceği için fiyat değişkenlik gösterebilir.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Net fiyat için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> 0551 606 68 78
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sincan’da Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Yılların getirdiği tecrübeyle Sincan OSB ve çevresinde sayısız endüstriyel başarıya imza attık.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/sincan-fabrika-vinc.jpg"
                    alt="ankara sincan vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Wrench size={20} /> Fabrika Bakım Örneği
                  </div>
                  <p className="text-gray-600 text-sm">Sincan ASO 1. OSB bölgesinde yer alan devasa bir üretim tesisinin dış cephe kompozit yalıtım onarımlarını, iş güvenliği standartlarına uygun şekilde günlerce süren vinç kiralama operasyonumuzla sorunsuz tamamladık.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                   {/* Kullanıcı sadece 2 görsel adı verdi, 3. kart için sembolik bir alan tutuyoruz */}
                  <Zap size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Zap size={20} /> Depo Aydınlatma İşi
                  </div>
                  <p className="text-gray-600 text-sm">Temelli lojistik üslerinde bulunan dev hangarların 15 metre yüksekliğindeki iç tavan aydınlatma armatürlerinin LED dönüşümünü, fabrika içine giren manevra kabiliyeti yüksek sepetli araçlarımızla sıfır kazayla bitirdik.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <ShieldCheck size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <HardHat size={20} /> Tabela Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Sincan merkez Lale Meydanı çevresindeki ticari mağazaların ve çok katlı iş hanlarının çatılarına ağır çelik profilli kutu harf tabela ve totem reklam panosu montajlarını gece vardiyasında emniyetle gerçekleştirdik.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. HARİTA EKLE (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Sincan Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195861.94828114094!2d32.4082260799402!3d39.95759792040974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3393b4e94b15f%3A0xe5a3c2cfd7e1ea1d!2sSincan%2C%20Ankara!5e0!3m2!1str!2str!4v1714150000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sincan Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 7. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sincan’da Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">Sanayi ve yapı sektörüne sunduğumuz operasyonel hizmet gruplarımız.</p>
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
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Cephe Temizliği</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/tabela-montaj" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Tabela Montaj</span>
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
              <p className="text-lg text-gray-600">Sincan bölgesindeki vinç operasyonlarıyla ilgili bilmeniz gerekenler.</p>
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
