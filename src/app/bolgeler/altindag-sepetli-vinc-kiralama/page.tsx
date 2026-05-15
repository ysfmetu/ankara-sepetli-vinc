import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Landmark, Building2, Wrench, HardHat, AlertTriangle, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Altındağ Sepetli Vinç Kiralama | Siteler ve Ulus Vinç Hizmeti',
  description: "Ankara Altındağ'da Ulus, Siteler, Hacıbayram ve Kale bölgelerine özel sepetli vinç kiralama hizmeti. Tarihi alanlarda hassas çalışma. Hemen Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/altindag-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Altındağ Sepetli Vinç Kiralama | Siteler ve Ulus Vinç Hizmeti',
    description: "Ankara Altındağ'da Ulus, Siteler, Hacıbayram ve Kale bölgelerine özel sepetli vinç kiralama hizmeti. Tarihi alanlarda hassas çalışma. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/altindag-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Altındağ’da vinç ne kadar sürede gelir?',
    a: 'Altındağ ve çevresindeki merkezi lokasyonumuz sayesinde, trafiğin yoğunluğuna bağlı olarak genellikle 30-45 dakika içerisinde acil müdahale gerektiren durumlarda vinç yönlendirmesi yapabiliyoruz.'
  },
  {
    q: 'Siteler bölgesine hizmet var mı?',
    a: 'Evet, mobilya sanayisinin kalbi olan Siteler bölgesindeki atölyeler, üretimhaneler ve depolar için tabela montajı, cephe yalıtımı ve malzeme sevkiyatı gibi işlemlerde kesintisiz hizmet veriyoruz.'
  },
  {
    q: 'Dar sokakta vinç çalışır mı?',
    a: 'Altındağ\'ın özellikle Kale ve çevre mahallelerindeki yokuşlu ve dar sokaklarına girebilen özel kısa şaseli sepetli platformlarımız mevcuttur. Çevreye zarar vermeden dar alanlarda güvenle çalışıyoruz.'
  },
  {
    q: 'Tarihi bölgelerde çalışma yapılır mı?',
    a: 'Kesinlikle. Hacıbayram, Ulus ve Ankara Kalesi gibi tarihi dokunun yoğun olduğu bölgelerde sarsıntısız hareket eden araçlarımız ve deneyimli operatörlerimizle binalara sıfır temas sağlayarak son derece hassas çalışmalar yürütmekteyiz.'
  }
];

export default function AltindagPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Altındağ Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Altındağ'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Altındağ'da Ulus, Siteler, Hacıbayram ve tarihi alanlarda tabela montajı, cephe temizliği ve dar sokak vinç hizmetleri.",
        url: getCanonicalUrl('/bolgeler/altindag-sepetli-vinc-kiralama')
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
            name: 'Altındağ Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/altindag-sepetli-vinc-kiralama`
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
              src="/images/bolge/altindag-vinc.jpg"
              alt="altindag sepetli vinç kiralama"
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
                  { label: 'Altındağ', href: '/bolgeler/altindag-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Altındağ Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Ankara Altındağ’da 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, tarihi kökleri ve gelişen ticaret ağlarıyla <strong>İç Anadolu Bölgesi</strong>'nin merkezidir. Bu devasa şehrin en eski yerleşimlerinden biri olan, aynı zamanda <strong>Ankara’nın merkezi ve tarihi ilçelerinden biri olan Altındağ</strong>, kendine has mimari dokusu ve ticari hacmiyle çok özel bir konuma sahiptir. Ulus, Siteler, Hacıbayram, Kale ve Altındağ merkez mahalleleri, hem turistik değer taşıyan asırlık yapıları hem de Türkiye'nin en büyük mobilya üretim merkezlerini bir arada barındırır.
                </p>
                <p>
                  Altındağ'ın bu ikili yapısı, bölgedeki vinç operasyonlarının son derece profesyonel yürütülmesini gerektirir. Ulus ve Hacıbayram gibi tarihi yapılara ev sahipliği yapan lokasyonlarda restorasyon veya dış cephe onarımları büyük bir dikkatle yapılmalıdır. Diğer taraftan, Siteler bölgesindeki devasa atölye ve üretim tesisleri, tabela montajından çatı izolasyonuna kadar çok daha yoğun ve ağır sanayi tipi vinç kullanımını zorunlu hale getirir. Her iki senaryoda da <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> araçlarımız iş güvenliği standartlarının en üst seviyesinde hizmet verir. Tarihi binalara zarar vermemek adına risk almadan tamamen <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> modeli uygulanmaktadır.
                </p>
                <p>
                  Sitelerdeki üretim alanlarında veya Altındağ merkezdeki ticari dükkanların cephe temizliği ve tabela yenileme işlemlerinde, firmalarımız genelde işi kısa sürede bitiren <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> seçeneğini değerlendirirken; kentsel dönüşüm alanlarındaki apartman boyama ve mantolama işleri için çok daha hesaplı olan <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> modeli sıkça tercih edilir. Hem tarihi dokuya hem de üretime saygılı, kesintisiz bir vinç hizmeti sunuyoruz.
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

        {/* 2. Bölüm: Altındağ’da Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Altındağ’da Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Landmark size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ulus</h3>
                <p className="text-gray-600">Tarihi Ankara'nın ilk merkezlerinden olan Ulus'ta yoğun yaya trafiğinin arasında; ticari mağaza tabela yenilemeleri, dış cephe reklam logolarının asılması ve sokak aydınlatmalarının bakımları sarsıntısız araçlarımızla yapılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Siteler</h3>
                <p className="text-gray-600">Mobilya ve ahşap üretiminin başkenti Siteler bölgesindeki büyük atölyelerin çatı yalıtımları, yüksek üretim hollerindeki elektrik tesisatı çekimi ve fabrika tabelalarının montajı yoğun olarak gerçekleştirdiğimiz işlemlerdir.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hacıbayram</h3>
                <p className="text-gray-600">Dini ve kültürel dokusuyla ön plana çıkan Hacıbayram çevresinde, tarihi yapılara sıfır temas kuralıyla gerçekleştirilen hassas çalışma gerektiren bakım, aydınlatma ve peyzaj restorasyonlarında vincimiz kritik görev alır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ankara Kalesi</h3>
                <p className="text-gray-600">Kale içindeki dar sokak ve dik yokuş erişim problemleri, eski evlerin çatı tamiratı ve sokak düzenlemelerinde; manevra yeteneği güçlü kısa şaseli platform vinçlerimiz sayesinde güvenle aşılmaktadır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Altındağ Merkez</h3>
                <p className="text-gray-600">Genel Altındağ bölgesindeki yerleşim yerlerinde kentsel dönüşüm dışı kalan eski apartmanların dış cephe mantolaması, boya işleri, düşen sıvaların tadilatı ve oluk temizlikleri hızlıca organize edilir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TARİHİ ALAN VURGUSU (ÇOK KRİTİK) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Landmark size={120} />
              </div>
              <Landmark size={48} className="text-primary mx-auto mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">Altındağ’da Tarihi Bölgelerde Vinç Kullanımı</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light relative z-10">
                Altındağ, Ulus ve Ankara Kalesi gibi asırlık mimari yapılara ev sahipliği yapar. Bu bölgelerde yapılacak dış cephe onarımı, aydınlatma değişimi veya tabela asımı işlemleri sıradan bir sokaktaki işten çok daha büyük bir özen ister. Tarihi dokuya zarar vermemek için milimetrik yanaşma kabiliyeti olan platformlara ihtiyaç vardır. En ufak bir sarsıntı eski taş yapılarda geri döndürülemez hasarlara yol açabilir. Bu noktada <strong>hassas çalışma</strong> disiplinimiz, vincin pürüzsüz ve <strong>kontrollü hareketi</strong> ile birleşir. Eğitimli ekibimizin <strong>operatörlü kullanım</strong> zorunluluğu, tarihi bölgelerde %100 iş güvenliğini ve hasarsız operasyon garantisini sizlere sunar.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Altındağ’da en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Tarihi alanlar veya sanayi atölyeleri için güvenli sepetli vinç desteği.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Altındağ Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Altındağ bölgesindeki vinç kiralama maliyetleri, işin yapılacağı bölgenin fiziki koşullarına göre değişkenlik gösterir. Örneğin Ankara Kalesi veya Hamamönü gibi trafiğe kapalı sayılabilecek <strong>dar sokaklar</strong>, aracı sabitlemek ve güvenliği sağlamak açısından ciddi bir operasyonel <strong>zorluk</strong> yaratır. Bu tür zorlu kurulumlar zaman aldığı için maliyeti bir miktar etkileyebilir.
                </p>
                <p className="text-lg">
                  Bunun yanı sıra Siteler mobilya bölgesindeki <strong>sanayi işleri</strong> ve atölye dış cephe tamiratlarında işlemlerin <strong>süresi daha uzun olabilir</strong>. Bölgenin şehir merkezine yakın bir <strong>lokasyon</strong> olması lojistik avantaj getirse de, işin kaç metre yüksekte ve kaç saat/gün yapılacağı kiralama <strong>fiyatını direkt etkiler</strong>. Projenize uygun saatlik veya günlük fiyatlamayı yapmak üzere keşif ve analiz sunuyoruz.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">İşinize özel net fiyat için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Altındağ’da Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Hem Siteler sanayisinde hem de tarihi dokuda gerçekleştirdiğimiz referans operasyonlar.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/siteler-vinc.jpg"
                    alt="ankara altindag vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Wrench size={20} /> Siteler Üretim İşi
                  </div>
                  <p className="text-gray-600 text-sm">Siteler mobilya üretim bölgesinde faaliyet gösteren devasa bir atölyenin havalandırma borularının montajı ve çatı kompozit izolasyonunu üretim akışını kesmeden hızlıca teslim ettik.</p>
                </div>
              </div>

              <Link href="/blog/ulus-ruzgarli-sokakta-dis-cephe-mermer-degisimi" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:border-primary transition-all flex flex-col shadow-lg hover:shadow-xl">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/blog/altindag-ulus-vinc-calismasi.png"
                    alt="Ulus Rüzgarlı Sokak sepetli vinç mermer çalışmaları"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Building2 size={20} /> Ulus Mermer Çalışmaları
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Rüzgarlı Sokak'ta gerçekleştirdiğimiz dış cephe mermer değişim ve onarım çalışmaları. Sepetli vinç ile güvenli erişim sağlayarak operasyonu profesyonelce tamamladık.</p>
                  <span className="text-sm text-primary mt-auto flex items-center gap-1 font-bold group-hover:underline">Vaka Çalışmasını İncele <ChevronRight size={16} /></span>
                </div>
              </Link>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/altindag-vinc.jpg"
                    alt="altindag sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <AlertTriangle size={20} /> Kale Dar Sokak Çalışması
                  </div>
                  <p className="text-gray-600 text-sm">Ankara Kalesi içindeki dik yokuşlu ve dar yapılı sokaklarda bulunan tarihi bir konağın restorasyon öncesi çatı güvencesi kısa dingilli kompakt aracımızla sarsıntısız sağlandı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Altındağ Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48935.15570227918!2d32.8436531548698!3d39.9540445667362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e83c2ebbcdd%3A0xe7a505b8719c8f35!2sAlt%C4%B1nda%C4%9F%2C%20Ankara!5e0!3m2!1str!2str!4v1714154000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Altındağ Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Altındağ’da Sunulan Vinç Hizmetleri</h2>
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

        {/* 9. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Altındağ bölgesindeki operasyonlar hakkında merak edilen detaylar.</p>
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
