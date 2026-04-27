import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Trees, Home, Camera, Building2, Map, ShieldCheck, Leaf, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Gölbaşı Sepetli Vinç Kiralama | İncek Villa ve Ağaç Budama',
  description: "Ankara Gölbaşı ve İncek bölgesinde villa bahçesi ağaç budama, peyzaj ve dış cephe işlemleri için 7/24 sepetli vinç kiralama. Hemen Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/golbasi-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Gölbaşı Sepetli Vinç Kiralama | İncek Villa ve Ağaç Budama',
    description: "Ankara Gölbaşı ve İncek bölgesinde villa bahçesi ağaç budama, peyzaj ve dış cephe işlemleri için 7/24 sepetli vinç kiralama. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/golbasi-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Gölbaşı’nda vinç ne kadar sürede gelir?',
    a: 'Gölbaşı geniş bir yüzölçümüne sahip olduğu için varış süresi konumunuza göre değişebilir. Ancak merkez ve İncek bölgelerine genellikle trafik durumuna göre 30-45 dakika içerisinde acil araç yönlendirmesi yapabiliyoruz.'
  },
  {
    q: 'Villa bahçesinde vinç çalışır mı?',
    a: 'Kesinlikle. Villa projelerinde sıkça kullanılan peyzaj çimlerini ezmeyen ve çevreye zarar vermeyen özel, hafif tonajlı sepetli vinçlerimiz mevcuttur. Bahçenizin zemin yapısını bozmadan işlem yapabiliriz.'
  },
  {
    q: 'Ağaç budama için vinç gerekir mi?',
    a: 'Özellikle lüks villalarda ve site bahçelerinde bulunan yüksek boylu çam veya meyve ağaçlarının budanmasında merdiven kullanmak ölümcül risk taşır. İş güvenliği gereği ağaç budama işlemlerinde sepetli vinç kullanımı zorunlu ve en güvenli yöntemdir.'
  },
  {
    q: 'Günlük kiralama yapılır mı?',
    a: 'Evet, özellikle Gölbaşı civarındaki çok bloklu sitelerin dış cephe boyaması veya devasa peyzaj alanlarının düzenlenmesi gibi günlerce sürebilecek işlerde günlük kiralama modelimiz hem daha ekonomik hem de çok daha pratiktir.'
  }
];

export default function GolbasiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Gölbaşı Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Gölbaşı'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Gölbaşı ve İncek'te villa cephe onarımları, peyzaj, yüksek ağaç budama ve sepetli vinç hizmetleri.",
        url: getCanonicalUrl('/bolgeler/golbasi-sepetli-vinc-kiralama')
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
            name: 'Gölbaşı Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/golbasi-sepetli-vinc-kiralama`
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
              src="/images/bolge/golbasi-vinc.jpg"
              alt="golbasi sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Gölbaşı', href: '/bolgeler/golbasi-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Gölbaşı Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-300 mb-6">
                Ankara Gölbaşı’nda 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, son yıllarda lüks yaşam alanlarının doğaya doğru genişlediği devasa bir yerleşim planına sahiptir. <strong>İç Anadolu Bölgesi</strong>'nin en kıymetli sulak alanlarına ev sahipliği yapan ve <strong>Ankara’nın güneyinde yer alan Gölbaşı</strong>, villa yerleşimleri, lüks site projeleri ve geniş doğal alanları ile başkentin en farklı ve prestijli ilçelerinden biridir. Özellikle İncek, Tulumtaş, Karagedik, Bahçelievler mahalleleri ile Gölbaşı merkez ve Mogan Gölü çevresi bu hızlı konut gelişiminin merkezindedir.
                </p>
                <p>
                  Gölbaşı'nın bu yatay mimariye ve peyzaja dayalı yapısı, sepetli vinç kullanım alanlarını şehir merkezindeki ilçelerden ayırır. İncek ve Tulumtaş'taki devasa müstakil villaların yüksek çatı onarımları, kamera ve güvenlik sistemlerinin montajı veya Mogan çevresinde bulunan geniş bahçelerdeki tehlikeli ağaç budama işleri için vinç kiralama hizmeti büyük bir avantaj sağlar. Geleneksel merdiven veya iskele kurulumunun hem riskli hem de bahçe peyzajına (çimlere vb.) zarar verdiği bu noktalarda <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-emerald-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> sistemimiz, güvenliği en üst düzeye çıkarır. Lüks konutların mimari yapısına zarar vermemek adına %100 iş güvenliği politikamızla <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-emerald-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> hizmeti vermekteyiz.
                </p>
                <p>
                  Villa sahipleri ve site yönetimleri genellikle ufak çaplı oluk temizliği veya tek bir ağaç kesimi gibi hızlı müdahaleler için <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-emerald-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> paketimizi tercih etmektedir. Ancak Gölbaşı merkezdeki ticari yapıların cephe giydirme işlemleri veya Karagedik tarafındaki geniş depolama tesislerinin inşasında olduğu gibi uzun soluklu şantiye süreçlerinde bütçeyi optimize eden <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-emerald-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> seçeneğimiz devreye girer. Doğaya ve mimariye saygılı araçlarımızla 7/24 hizmetinizdeyiz.
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
                  href="https://wa.me/905516066878?text=Merhaba,%20vin%C3%A7%20i%C5%9Finin%20foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6nderiyorum.%20Fiyat%20alabilir%20miyim?"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <Camera size={20} />
                  Fotoğraf Gönder Fiyat Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bölüm: Gölbaşı’nda Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Gölbaşı’nda Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-emerald-500 transition-colors group">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Home size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">İncek</h3>
                <p className="text-gray-600">İncek ve çevresindeki lüks villa yerleşimlerinde, müstakil bahçe düzenlemeleri, yüksek çatı izolasyonları, baca temizliği ve ev güvenlik kamera/alarm sistemlerinin montajında estetik ve sessiz çalışma sağlanır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-emerald-500 transition-colors group">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Leaf size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Mogan Çevresi</h3>
                <p className="text-gray-600">Mogan ve Eymir Gölü etrafındaki turistik tesisler, restoranlar ve geniş yeşil alanlarda çevre peyzajı, yüksek ağaç budama işlemleri ve park aydınlatmalarının bakımında sepetli vinç kullanılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-emerald-500 transition-colors group">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Karagedik</h3>
                <p className="text-gray-600">Şehrin yoğunluğundan uzaklaşan Karagedik bölgesinde kurulan yeni fabrika alanları, depo tesisleri ve geniş açık hava inşaat şantiyelerinde vinç yolları ve çatı konstrüksiyon işleri sürdürülür.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-emerald-500 transition-colors group">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Tulumtaş</h3>
                <p className="text-gray-600">Tulumtaş mağarası çevresi ve yeni gelişen site projelerinde kaba inşaat sonrası ince işçilik olan dış cephe boya, mantolama ve yağmur oluğu sistemlerinin çekilmesi için vinç kiralanır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-emerald-500 transition-colors group">
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Gölbaşı Merkez</h3>
                <p className="text-gray-600">Gölbaşı'nın ana ticari arterlerinde yer alan esnafların ışıklı tabela montajları, kurumsal logoların asımı ve çok katlı apartmanların cephe yalıtım işlemleri trafiği kilitlemeden vinçlerle gerçekleştirilir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PEYZAJ & AĞAÇ BUDAMA (ÇOK KRİTİK) */}
        <section className="py-16 bg-emerald-50 border-y border-emerald-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Trees size={100} className="text-emerald-600" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Gölbaşı’nda Ağaç Budama ve Peyzaj Çalışmaları İçin Vinç</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Gölbaşı ve İncek bölgelerindeki en büyük taleplerin başında <strong>bahçe düzenleme</strong> ve <strong>yüksek ağaçlar</strong> için talep edilen budama hizmetleri gelmektedir. Devasa boylara ulaşan çam ağaçları veya kurumuş dallar, rüzgarlı havalarda kırılarak binaların çatılarına, pencerelere ve araçların üzerine düşme tehlikesi yaratır.
                  </p>
                  <p>
                    <strong>Villa alanları</strong> içerisinde veya site bahçelerinde bu ağaçlara geleneksel yöntemlerle (merdivenle çıkılarak vb.) müdahale etmek kesinlikle doğru değildir. Vinç platformu üzerinden motorlu testereyle yapılan <strong>güvenli kesim</strong> işlemleri, hem bahçenin peyzaj dokusuna (çimlere ve diğer bitkilere) zarar vermez hem de operatör ve işçi güvenliğini %100 sağlar. Gölbaşı'nda yeşili koruyan kontrollü budama operasyonları için özel donanımlı araçlarımız emrinizdedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Gölbaşı’nda en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Villa bakımı, ağaç budama veya tabela işleriniz için iskele kurarak vakit kaybetmeyin.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gölbaşı Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Gölbaşı, coğrafi olarak oldukça geniş bir yüzölçümüne sahiptir. Bu nedenle vinç kiralama fiyatlarını belirlerken işin yapılacağı bölgenin şehir merkezine olan uzaklığı, yani <strong>mesafe</strong> doğrudan <strong>fiyatı etkiler</strong>. Ancak diğer ilçelerdeki dar sokakların aksine Gölbaşı ve İncek bölgesindeki yollar ve <strong>geniş alanlar</strong> aracın kurulumu ve manevrası için büyük <strong>avantaj</strong> sağladığından, çalışma çok daha hızlı başlar ve işçilik süresinden tasarruf edilir.
                </p>
                <p className="text-lg">
                  Ayrıca yapılacak işin niteliği de maliyet analizinde kritiktir. Örneğin standart bir <strong>villa</strong> bahçesindeki kamera montajı işi sadece birkaç saat sürerken, devasa bir çam ağacının tepeden tırnağa tehlikesizce budanması ve parçaların aşağı alınması işlemlerinin <strong>süresi değişir</strong>.
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">İşinizin fotoğrafını gönderin, net fiyat için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gölbaşı’nda Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">İncek ve Gölbaşı projelerinde doğaya ve çevreye zarar vermeden tamamladığımız bazı operasyonlar.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/incek-villa-vinc.jpg"
                    alt="ankara golbasi vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                    <Trees size={20} /> Villa Budama İşi
                  </div>
                  <p className="text-gray-600 text-sm">İncek'te yer alan müstakil bir villanın bahçesinde bulunan ve rüzgardan kırılarak çatıya yaslanmış 15 metrelik kavak ağacı, peyzaj çimlerine zarar vermeden vincimiz yardımıyla yukarıdan aşağıya güvenle kesilerek budandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <Building2 size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                    <Building2 size={20} /> Site Cephe İşi
                  </div>
                  <p className="text-gray-600 text-sm">Tulumtaş mevkiinde yeni inşa edilen çok bloklu bir lüks konut projesinde, iskele söküldükten sonra fark edilen dış cephe boya hataları ve yağmur oluğu eksiklikleri sepetli platformlar kullanılarak hızlıca giderildi.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/golbasi-vinc.jpg"
                    alt="golbasi sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                    <Wrench size={20} /> Tabela Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Gölbaşı merkezde, Konya yolu güzergahı üzerinde yer alan ticari bir mağazanın 8 metre yüksekliğindeki yeni ışıklı kurumsal totem tabelasının montajı, ana trafik akışını durdurmadan başarıyla uygulandı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Gölbaşı Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196144.37255902166!2d32.65345712170364!3d39.754747738221544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3393282f6f1c7%3A0xe5a228f4ff682fb!2sG%C3%B6lba%C5%9F%C4%B1%2C%20Ankara!5e0!3m2!1str!2str!4v1714156000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Gölbaşı Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gölbaşı’nda Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">Cephe Temizliği</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors text-lg mb-2">Ağaç Budama Vinç</span>
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
              <p className="text-lg text-gray-600">Gölbaşı ve İncek bölgelerindeki operasyonlar hakkında merak edilen detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
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
