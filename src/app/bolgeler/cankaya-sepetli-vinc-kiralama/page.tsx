import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight, ChevronRight, Clock, Building2, Map, ShieldCheck, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Çankaya Sepetli Vinç Kiralama | Uygun Fiyat & 24 Saat Hizmet',
  description: 'Çankaya bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz. Hemen arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/bolgeler/cankaya-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Çankaya Sepetli Vinç Kiralama | Uygun Fiyat & 24 Saat Hizmet',
    description: 'Çankaya bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz. Hemen arayın: 0551 606 68 78',
    url: getCanonicalUrl('/bolgeler/cankaya-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Çankaya’da vinç ne kadar sürede gelir?',
    a: 'Çankaya merkezi konumu sebebiyle araç filomuzun en yoğun bulunduğu ve hızlı ulaşım sağladığı ilçelerin başında gelir. Müsaitlik durumuna göre ve trafik yoğunluğu da hesaplanarak acil durumlarda ortalama 20-35 dakika içerisinde adresinize araç yönlendiriyoruz.'
  },
  {
    q: 'Aynı gün hizmet var mı?',
    a: 'Evet, özellikle tabela uçması, fırtına sonrası ağaç devrilmesi veya acil cam temizliği gibi anlık gelişen ihtiyaçlar için Çankaya bölgesine aynı gün acil vinç müdahalesi gerçekleştirebiliyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Kesinlikle. Klima motoru montajı, ufak bir aydınlatma değişimi veya tek bir ağacın budanması gibi kısa süreli işleriniz için saatlik vinç kiralama modelimiz Çankaya bölgesinde en çok tercih edilen seçenektir.'
  },
  {
    q: 'Çankaya fiyatları farklı mı?',
    a: 'Çankaya konumu itibarıyla merkez ilçe olduğu için, şehrin çok dışındaki uzak bölgelere göre daha uygun fiyatlandırmalara tabidir. Yol veya ekstra yakıt maliyeti yansıtılmadığından bütçe dostu fiyatlar sunabiliyoruz.'
  }
];

export default function CankayaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Çankaya Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: {
          '@type': 'City',
          name: 'Çankaya'
        },
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Çankaya'da sepetli vinç kiralama, plaza cam temizliği, tabela montajı ve bina bakım işleri.",
        url: getCanonicalUrl('/bolgeler/cankaya-sepetli-vinc-kiralama')
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
            name: 'Çankaya Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/cankaya-sepetli-vinc-kiralama`
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
              src="/images/bolge/cankaya-sepetli-vinc-calisma.png"
              alt="Çankaya sepetli vinç kiralama"
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
                  { label: 'Çankaya', href: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Çankaya Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">
                Ankara Çankaya’da 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  Başkentin atan kalbi Çankaya, Kızılay Meydanı'nın yoğun yaya trafiğinden Bahçelievler'in yerleşim karmaşasına, Dikmen'in yüksek rakımlı tepelerinden Oran ve Balgat'taki lüks plaza oluşumlarına kadar her noktasıyla Ankara'nın en hareketli iş ve yaşam bölgesidir. İncek gibi hızla gelişen villa konseptli lokasyonları da içine alan bu dev metropol ilçesi, kesintisiz bir hizmet ve bakım döngüsüne ihtiyaç duyar.
                </p>
                <p>
                  Özellikle ticari rekabetin üst seviyede olduğu bu bölgede mağaza vitrin yenilemeleri, devasa <Link href="/hizmetler/tabela-montaj" className="text-blue-300 hover:text-white underline font-medium">tabela montaj işlemleri</Link>, iş merkezlerinin <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="text-blue-300 hover:text-white underline font-medium">dış cephe temizliği</Link> ve sokakların aydınlatılması adına <Link href="/hizmetler/elektrik-bakim" className="text-blue-300 hover:text-white underline font-medium">elektrik bakım onarımları</Link> yoğun olarak yapılır. Klasik iskele sistemlerinin kurulmasının günlerce sürdüğü ve trafiği kilitlediği noktalarda <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> sistemimiz en akılcı ve hızlı çözümü sunmaktadır.
                </p>
                <p>
                  Sepetli vinç hizmeti böylesine kilit bir bölgede planlanırken sıfır hata prensibi gerektirir. Alanın darlığı, park sorunları ve yaya güvenliği gibi değişkenler, kiraladığınız aracın kontrolünü kimin sağladığı sorusunu doğurur. Ekiplerimiz, iş güvenliği sertifikalı kadrosuyla <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> modeli uygulayarak çalışmalarda risk faktörünü tamamen ortadan kaldırır. Kısa süreli aydınlatma ve klima motoru değişimlerinde <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> paketlerimizden yararlanabilirken, dev rezidansların cephe mantolama işlemlerinde çok daha maliyet avantajlı olan <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> hizmetimizle projelerinizi güvenle sonlandırabilirsiniz.
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
                  WhatsApp'tan Konum Gönder
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bölüm: Çankaya’da Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Çankaya’da Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kızılay</h3>
                <p className="text-gray-600">Yaya ve araç trafiğinin başkentteki sıfır noktası olan Kızılay'da; ticari dükkanların devasa tabela değişimleri, dış cephe giydirme işlemleri ve AVM süslemeleri gibi operasyonlarda mesai dışı ve gece çalışmaları vinçlerimizle yürütülür.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bahçelievler</h3>
                <p className="text-gray-600">Yerleşimin sık ve köklü olduğu Bahçelievler semtinde genellikle apartman dış cephe onarımları, düşmekte olan eski çatı parçalarının alınması, oluk temizliği ve cam silimi gibi site yönetimlerinin talepleri sepetli vinç ile karşılanır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dikmen</h3>
                <p className="text-gray-600">Dikmen'in yüksek rakımlı, bol rüzgar alan yapısı ve dik yokuşlarında dengeli çalışabilecek vinçler şarttır. Buradaki yüksek binaların dış cephe boya, mantolama ve anten/kamera montaj işlemleri sarsıntısız platformlarımız sayesinde güvence altındadır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Oran</h3>
                <p className="text-gray-600">Diplomatik alanların, lüks konut projelerinin ve büyük sitelerin yoğunlukta olduğu Oran semtinde, binaların mimari dokusuna zarar vermeyen sessiz makine parkurumuz ile cephe onarımları ve bahçe aydınlatmaları bakımı yapılmaktadır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Balgat</h3>
                <p className="text-gray-600">Kamu kurumlarının ve özel şirket plazalarının yan yana dizildiği Balgat aksında, rezidansların dış cam yüzey temizliği, büyük ofis logolarının (kutu harf) montajı ve klimaların dış ünite değişimleri en sık uyguladığımız operasyonlardır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">İncek</h3>
                <p className="text-gray-600">Çankaya'nın müstakil villalara ve geniş arazilere ev sahipliği yapan İncek bölgesinde genellikle çim ve bahçeyi ezmeyen kompakt vinçler istenir. Yüksek çam ağaçlarının budanması, peyzaj düzenlemesi ve çatı oluk temizliği hızlıca sağlanır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CTA EKLE (ORTA BLOK) */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Çankaya’da vinç ihtiyacınız varsa en yakın aracı hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">İskele maliyetinden ve zaman kaybından kurtulmak için hemen ulaşın.</p>
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

        {/* 4. FİYAT BÖLÜMÜNÜ GÜÇLENDİR */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Çankaya Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Çankaya, Ankara'nın tam merkezi konumunda olduğu için araç filomuzun lojistik olarak en rahat ve en hızlı ulaştığı noktaların başında gelir. Şehrin kilometrelerce uzağındaki dış ilçelerde vinç kiralama hesaplamalarına dahil edilen uzun yol mesafesi ve yüksek yakıt tüketimi gibi dezavantajlar Çankaya bölgesi için geçerli değildir. 
                </p>
                <p className="text-lg">
                  Bu merkezi avantaj, <strong>Çankaya vinç fiyatları</strong> üzerinde doğrudan olumlu bir etki yaratarak maliyetleri aşağı çeker. Tabi ki fiyatlandırmayı kesinleştiren asıl unsur; işlemin gerçekleştirileceği binanın yüksekliği (vincin kaç metre açılacağı) ve operasyonun tahmini olarak kaç saat süreceğidir. Yarım günlük bir cam temizliği veya tüm güne yayılacak bir reklam panosu montajı, adil ve rekabetçi bir fiyat cetveliyle sizlere sunulur.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Projenize özel net fiyat için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> Fiyat Bilgisi Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GÜÇLÜ LOCAL PARAGRAF EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
              <Zap size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Çankaya’da Vinç Hizmetinde Hızlı Müdahale</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Çankaya gibi gündüz nüfusunun milyonları aştığı, bulvar ve caddelerinde yaya ve araç trafiğinin asla durmadığı yoğun metropol bölgelerinde, yapılacak tadilat işleminin hızı her şeyden önemlidir. Trafik akışını bozmamak ve bölgedeki ticari hayata engel olmamak adına, bize ulaştığınız saniye itibariyle koordinasyon merkezimiz konumunuza <strong>en yakın olan vinci tespit eder</strong> ve hızla size yönlendirir. Zamanla yarışan projelerinizde veya acil müdahale gerektiren kriz anlarında (fırtına hasarı, arıza vs.) kesintisiz erişim güvencesi sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* 6. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Çankaya’da Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Cephe Temizliği</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/tabela-montaj" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Tabela Montaj</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Bölgesel süreçler ve aklınıza takılan detaylar.</p>
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
