import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Building2, Paintbrush, Zap, Trees, Wrench, Users, AlertTriangle, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Keçiören Sepetli Vinç Kiralama | Yoğun Nüfus ve Dar Sokak Vinç Hizmeti',
  description: "Ankara Keçiören'de Etlik, İncirli ve Ovacık bölgelerinde dar sokaklar ve yoğun trafik için hızlı sepetli vinç kiralama. Hemen Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/kecioren-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Keçiören Sepetli Vinç Kiralama | Yoğun Nüfus ve Dar Sokak Vinç Hizmeti',
    description: "Ankara Keçiören'de Etlik, İncirli ve Ovacık bölgelerinde dar sokaklar ve yoğun trafik için hızlı sepetli vinç kiralama. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/kecioren-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Keçiören’de vinç ne kadar sürede gelir?',
    a: 'Keçiören trafiğinin yoğun saatlerine rağmen, Yenimahalle merkezli garajımızdan ve bölgedeki gezici araçlarımızdan konumunuza en hızlı (yaklaşık 30-40 dakika içerisinde) aracı yönlendiriyoruz.'
  },
  {
    q: 'Dar sokakta vinç çalışır mı?',
    a: 'Evet, Keçiören\'in özellikle Kalaba ve Ufuktepe gibi dar sokaklı ve bitişik nizam yapılı mahallelerinde kısa şaseli platform vinçlerimiz ile yolu tamamen kapatmadan ve güvenle çalışma imkanı sağlıyoruz.'
  },
  {
    q: 'Aynı gün hizmet var mı?',
    a: 'Kesinlikle. Kırılan ağaç dalları, kopan tabelalar veya düşmek üzere olan tehlikeli apartman sıvaları gibi acil müdahale gerektiren konularda aynı gün içerisinde anında hizmet veriyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Özellikle nüfusun ve apartmanların çok olduğu Keçiören\'de cam silimi, baca tamiri veya tek bir dış ünite sökümü gibi ufak işlemler için saatlik kiralama paketimiz en çok tercih edilen seçenektir.'
  }
];

export default function KeciorenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Keçiören Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Keçiören'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Keçiören'de Etlik, İncirli ve merkez mahallelerinde apartman cephe, tabela montaj ve ağaç budama vinç kiralama hizmetleri.",
        url: getCanonicalUrl('/bolgeler/kecioren-sepetli-vinc-kiralama')
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
            name: 'Keçiören Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/kecioren-sepetli-vinc-kiralama`
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
              src="/images/bolge/kecioren-vinc.jpg"
              alt="kecioren sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Keçiören Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">
                Ankara Keçiören’de 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, durmaksızın gelişen mimarisi ve yüksek nüfusu ile <strong>İç Anadolu Bölgesi</strong>'nin en hareketli metropolüdür. Bu metropol yapının içerisinde, nüfus sayımı verilerine göre <strong>Ankara’nın en kalabalık ilçelerinden biri olan Keçiören</strong>, bitişik nizam konut yapısı ve milyonluk nüfusuyla inanılmaz bir sirkülasyona sahiptir. Etlik, İncirli, Kalaba, Ufuktepe, Ovacık ve Keçiören merkez başta olmak üzere, bu devasa ilçede yaşamın devamlılığı için altyapı ve üstyapı bakım işlemleri hiçbir zaman durmaz.
                </p>
                <p>
                  Keçiören'in bu yüksek yoğunluklu kent dokusu; cadde esnaflarının tabela montajı, eski apartmanların dış cephe temizliği, bina bakım onarım işleri ve arıza veren elektrik aydınlatmalarının onarımı gibi yüksekte çalışma gerektiren işlemlerin sürekliliğini mecburi kılar. Bu gibi sirkülasyonu yüksek ve trafikli bölgelerde sepetli vinç kiralama hizmeti sıradan bir iş olmaktan çıkıp; hızlı, saatlik olarak planlı ve en doğru kompakt araç seçimi ile yönetilmesi gereken bir mühendislik işine dönüşür. İşin güvenliğini ve çevre sakinlerinin sağlığını korumak adına tüm operasyonlarda <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> sistemimiz tam donanımlı olarak çalışır. Riske mahal vermemek için %100 <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> desteği sağlamaktayız.
                </p>
                <p>
                  Vatandaşların günlük yaşamını aksatmadan, cadde üzerindeki bir mağaza camı değişimi veya bir apartman bacası temizliği için çok daha pratik olan <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> modeli ilçede en çok tercih edilen kiralama türüdür. Öte yandan, kentsel dönüşümle inşa edilen yeni Ovacık sitelerinin boya, izolasyon ve cam montajı gibi daha kapsamlı ve günlerce sürecek şantiye süreçleri için uygun bütçeli <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> imkanımız da bulunmaktadır. Keçiören'in hızına ve yoğunluğuna anında cevap veren güçlü filomuzla yanınızdayız.
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

        {/* 2. Bölüm: Keçiören’de Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Keçiören’de Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-500 transition-colors group">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Apartman Cephe İşleri</h3>
                <p className="text-gray-600">Özellikle İncirli ve Etlik gibi eski yerleşim yerlerindeki çok katlı binalarda dökülen sıvaların onarımı, yağmur oluklarının değiştirilmesi ve yüksek katlara eşya çekimi gibi apartman cephe işlerinde sıklıkla kiralama yapılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-500 transition-colors group">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Tabela Montajları</h3>
                <p className="text-gray-600">Nüfusun yoğun olduğu Keçiören merkez, Fatih ve Sanatoryum Caddesi gibi ana arterlerde yer alan esnafların ışıklı reklam panolarının, mağaza cephe giydirmelerinin sökülüp takılması işleri için şarttır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-500 transition-colors group">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Paintbrush size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Bina Bakım ve Boya</h3>
                <p className="text-gray-600">İskele kurulumunun günlerce sürebildiği ve çevre esnafı rahatsız edebildiği durumlarda, eski binaların dış mantolama, izolasyon yenileme ve dış cephe boya işlemleri araç üstü platformlardan hızla bitirilir.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-500 transition-colors group">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Trees size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Ağaç Budama</h3>
                <p className="text-gray-600">Kalaba ve çevresindeki parklarda veya eski binaların bahçelerinde yer alan, uzayarak elektrik tellerine değen veya fırtınada çatıya düşme tehlikesi bulunan dev kavak ve çam ağaçlarının kontrollü kesimini sağlar.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-500 transition-colors group">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Elektrik Bakım Çalışmaları</h3>
                <p className="text-gray-600">Bölgedeki cadde aydınlatma direklerinin LED dönüşümleri, park aydınlatmalarının onarımı ve trafo direklerindeki yüksek gerilim tamiratları esnasında yalıtımlı sepetlerimizle tam güvenlik sağlanır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. YOĞUNLUK VURGUSU (ÇOK ÖNEMLİ - RANK GETİRİR) */}
        <section className="py-16 bg-blue-50 border-y border-blue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Users size={100} className="text-blue-600" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Keçiören’de Yoğun Yapılaşma ve Vinç Kullanımı</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Keçiören; milyonluk <strong>yüksek nüfus</strong> profili, çok katlı bitişik apartman blokları ve dar arnavut kaldırımlı eski sokaklarıyla tam bir metropol dokusuna sahiptir. Bu fiziki yapı; herhangi bir dış cephe çalışmasını veya onarımını son derece riskli ve karmaşık hale getirir. İki binanın birbirine yapışık olduğu <strong>dar sokaklar</strong>, devasa tonajlı iş makinelerinin bu alanlara girmesini imkansız kılar.
                  </p>
                  <p>
                    Bu engelleri aşmak için en önemli kriter doğru araç seçimidir. Araç filomuzda yer alan kısa şaseli (dingil açıklığı az) ve dar alanlarda denge ayaklarını asimetrik açabilen kompakt sepetli platformlarımızla, yolları tamamen kapatmadan çalışıyoruz. <strong>Yoğun trafik</strong> akışını durdurmadan yapılan bu operasyonlarda <strong>hızlı müdahale ihtiyacı</strong> temel ilkemizdir. Uzman operatörlerimiz sayesinde Keçiören'in en dik ve dar mahallelerinde bile en hızlı, en güvenli çözümü saniyeler içinde üretiyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Keçiören’de en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Dar sokaklara ve yoğun trafiğe uygun araçlarımızla hemen müdahale ediyoruz.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Keçiören Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Keçiören bölgesindeki vinç kiralama maliyetlerini optimize eden en önemli faktör lojistik yakınlıktır. Merkezimize olan <strong>kısa mesafe</strong> maliyet açısından müşterilerimiz için ciddi bir <strong>avantaj</strong> yaratır. Ancak sadece ulaşım değil, çalışma yapılacak alanın fiziki durumu da fiyatlandırmayı etkiler.
                </p>
                <p className="text-lg">
                  Aracı kurmanın zor olduğu, park halindeki araçlar yüzünden vincin denge ayaklarının açılamadığı <strong>dar alan</strong> işlemleri operasyonel <strong>zorluk</strong> ve ekstra dikkat gerektirdiği için işin yapılışını yavaşlatabilir. Bu noktada sepetli platformun kullanılacağı toplam kullanım <strong>süresi</strong> (saat veya gün) genel <strong>fiyatı belirler</strong>. Ufak bir cephe onarımı ile tüm binanın boyanması bütçe olarak farklılık gösterecektir.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">İşinize özel net fiyat için hemen arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keçiören’de Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">İlçenin dar sokaklarında ve işlek caddelerinde başarıyla tamamladığımız referans operasyonlar.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/kecioren-apartman-vinc.jpg"
                    alt="ankara kecioren vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                    <Building2 size={20} /> Apartman Cephe İşi
                  </div>
                  <p className="text-gray-600 text-sm">İncirli'de yer alan ve araç parkları sebebiyle sokağa girmenin imkansız olduğu bir noktada, kısa şaseli platform aracımız ile 8. kattaki düşmek üzere olan tehlikeli balkon sıvası güvenle söküldü.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <Wrench size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                    <Wrench size={20} /> Tabela Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Etlik caddesi üzerinde faaliyet gösteren kurumsal bir bankanın, trafik akışının en yoğun olduğu saatlerde gece mesaisi yapılarak ışıklı devasa kutu harf logoları vinç yardımıyla başarıyla asıldı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/kecioren-vinc.jpg"
                    alt="kecioren sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                    <Zap size={20} /> Elektrik Bakım
                  </div>
                  <p className="text-gray-600 text-sm">Ufuktepe'de yüksek gerilim hattına temas eden sokak aydınlatma direklerinin LED dönüşümü ve arıza giderimi, yalıtımlı fiber sepet platform kullanılarak sıfır iş kazası riski ile çözüldü.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Keçiören Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48911.39169601614!2d32.83067868846337!3d39.99266138676239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34bc7e4c9cce5%3A0x6d9fbb34f6b219fb!2sKe%C3%A7i%C3%B6ren%2C%20Ankara!5e0!3m2!1str!2str!4v1714160000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Keçiören Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Keçiören’de Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg mb-2">Cephe İşleri Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/tabela-montaj" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg mb-2">Tabela Montaj Vinç</span>
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
              <p className="text-lg text-gray-600">Keçiören, Etlik ve İncirli çevresindeki operasyonlarla ilgili merak edilen detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
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
