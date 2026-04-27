import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Factory, Building2, Settings, ClipboardList, Wrench, HardHat, ShieldCheck, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Kahramankazan Sepetli Vinç Kiralama | Fabrika ve Sanayi',
  description: "Ankara Kahramankazan, Keresteciler ve Saray bölgesindeki dev üretim tesisleri, ağır makine montajı ve çelik konstrüksiyon işleri için vinç hizmeti. Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Kahramankazan Sepetli Vinç Kiralama | Fabrika ve Sanayi',
    description: "Ankara Kahramankazan, Keresteciler ve Saray bölgesindeki dev üretim tesisleri, ağır makine montajı ve çelik konstrüksiyon işleri için vinç hizmeti. Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Kahramankazan’da vinç ne kadar sürede gelir?',
    a: 'Garaj lokasyonumuzun Ankara çevre yollarına bağlantısı sayesinde, Kahramankazan gibi Ankara merkezine mesafe olarak daha uzak görünen bir ilçeye dahi trafiğe takılmadan ortalama 45 dakika içerisinde ulaşım sağlayabiliyoruz.'
  },
  {
    q: 'Sanayi bölgelerine hizmet var mı?',
    a: 'Kesinlikle. Keresteciler Sanayi Sitesi, Saray Dökümcüler ve ilçedeki devasa üretim fabrikalarına ağır sanayi standartlarına uygun, sertifikalı vinç hizmeti sunuyoruz.'
  },
  {
    q: 'Proje bazlı vinç kiralama yapılır mı?',
    a: 'Evet, fabrikaların aylarca süren ek bina inşaatları, komple cephe giydirme işlemleri veya uzun süreli bakım duruşları (şalter indirme) dönemleri için avantajlı proje bazlı kiralama sözleşmeleri yapmaktayız.'
  },
  {
    q: 'Günlük vinç kiralama mümkün mü?',
    a: 'Ağır sanayi bölgesindeki makine montajı, çelik konstrüksiyon bağlantısı ve tavan aydınlatma yenilemeleri uzun zaman aldığı için en çok tercih edilen ve maliyet avantajı sağlayan modelimiz günlük kiralamadır.'
  }
];

export default function KahramankazanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Kahramankazan Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Kahramankazan'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Kahramankazan, Saray ve Keresteciler Sanayi bölgesindeki ağır sanayi fabrikaları ve üretim tesisleri için profesyonel vinç kiralama.",
        url: getCanonicalUrl('/bolgeler/kahramankazan-sepetli-vinc-kiralama')
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
            name: 'Kahramankazan Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/kahramankazan-sepetli-vinc-kiralama`
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
              src="/images/bolge/sanayi-vinc.jpg"
              alt="kahramankazan sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Kahramankazan', href: '/bolgeler/kahramankazan-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Kahramankazan Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
                Ankara Kahramankazan’da 7/24 Profesyonel Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, sanayi ve üretim yatırımları açısından sürekli kabuk değiştirmektedir. Şehrin merkezinden dışarıya doğru taşınan ağır sanayinin yeni ve en güçlü kalbi, hiç şüphesiz <strong>Ankara’nın kuzeybatısında yer alan Kahramankazan</strong> ilçesidir. <strong>İç Anadolu Bölgesi</strong>'nin en devasa fabrikalarına ve lojistik depolama alanlarına ev sahipliği yapan bu ilçe; savunma sanayi, çelik döküm, gıda paketleme ve mobilya üretimi gibi lokomotif sektörlerin birleşme noktasıdır.
                </p>
                <p>
                  Bölgede yer alan Saray bölgesi fabrikaları, Keresteciler Sanayi Sitesi ve Kahramankazan merkez bağlantısındaki dev sanayi bölgeleri, sürekli bir yapısal büyüme içerisindedir. Yeni inşa edilen üretim tesisleri, yüzlerce tonluk çelik iskeletlerle kurulmakta ve metrelerce yüksekliğe sahip çatı aydınlatmaları gerektirmektedir. Bu ağır sanayi şartları, risk barındıran tüm yüksekte çalışma ve montaj faaliyetlerinde yüksek kapasiteli araçlarla profesyonel müdahaleyi zorunlu hale getirir. Tüm iş sağlığı güvenliği testlerinden geçmiş araçlarımızla sunduğumuz <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-slate-400 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> hizmetimiz, bölge fabrikalarının tüm bakım anlaşmalarına yanıt verir. Fabrika içerisinde vincin milimetrik manevra yapmasını gerektiren riskli işler nedeniyle sadece sertifikalı <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-slate-400 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> desteği sağlamaktayız.
                </p>
                <p>
                  Kahramankazan ilçe merkezindeki apartmanların veya küçük dükkanların cephe ve tabela işlemlerinde kısa süreli çözümler sunan <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-slate-400 hover:text-white underline font-medium">saatlik vinç kiralama</Link> paketimiz aktiftir. Ancak bu bölgenin ana dinamosunu oluşturan şantiye kurulumları, fabrika dış cephe kaplama işleri, geniş üretim hollerindeki elektrik-havalandırma borusu çekimleri ve makine taşıma gibi büyük ölçekli projeler için bütçenizi ciddi anlamda koruyan kurumsal <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-slate-400 hover:text-white underline font-medium">günlük vinç kiralama</Link> anlaşmalarını tavsiye etmekteyiz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-700 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-slate-900/30"
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
                  href="https://wa.me/905516066878?text=Merhaba,%20Kahramankazan'daki%20projemiz%20i%C3%A7in%20fiyat%20almak%20istiyoruz."
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

        {/* 2. Bölüm: Kahramankazan’da Sepetli Vinç Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Kahramankazan’da Sepetli Vinç Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-slate-500 transition-colors group">
                <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                  <Factory size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">Fabrika Bakım İşleri</h3>
                <p className="text-gray-600">Dev üretim tesislerinin sandviç panel onarımları, çatı yalıtım işlemleri, dış cephe boyamaları ve fabrika bacalarının filtre temizliği gibi uzun soluklu dış bakım operasyonlarında kullanılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-slate-500 transition-colors group">
                <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">Ağır Makine Montajı</h3>
                <p className="text-gray-600">Yurt dışından gelen devasa enjeksiyon, pres ve CNC makinelerinin fabrika içerisine konumlandırılması, bu makinelerin üstten havalandırma egzozlarına bağlanması işlemlerinde kilit rol oynar.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-slate-500 transition-colors group">
                <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">Çelik Konstrüksiyon</h3>
                <p className="text-gray-600">Yeni açılan depo ve imalathanelerin dev çelik iskeletlerinin kaynaklı birleştirilmesi, vidalanması ve montaj personelinin yüksekte güvenle çalışabilmesi için geniş sepetli platformlar tercih edilir.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-slate-500 transition-colors group">
                <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">Depo ve Üretim Alanları</h3>
                <p className="text-gray-600">Lojistik kargo aktarma merkezleri ile gıda depolarının tavan aydınlatma armatürlerinin değiştirilmesi, raf aralarına yangın spring hattı çekilmesi gibi dar ve yüksek alan gerektiren işlerde kullanılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-slate-500 transition-colors group">
                <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                  <HardHat size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">Şantiye Çalışmaları</h3>
                <p className="text-gray-600">Kahramankazan çevresinde inşası devam eden tüm sanayi siteleri şantiyelerinde iskele kurulum zorluğunu ortadan kaldırarak; elektrik çekimi, dış kaplama ve cam montajı işlemlerini çok hızlandırır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SANAYİ DERİNLİĞİ (FARK YARATIR) */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200">
                  <Factory size={100} className="text-slate-700" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kahramankazan Sanayi Bölgesinde Vinç Kullanımı</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p>
                    Sıradan bir apartman boyası ile Kahramankazan'daki ağır sanayi tesislerinde çalışmak çok farklı uzmanlık alanlarıdır. Saray, Keresteciler veya sanayi bölgesinde yürütülen operasyonlar <strong>ağır yük kaldırma</strong> kapasitesi gerektiren ve tolerans payının sıfır olduğu mühendislik hesaplamalarına dayanır. Milyonlarca liralık CNC makinelerinin montajı veya üretim bandı üzerindeki tavan tamiratları, herhangi bir kazaya mahal vermeyecek hassaslıkta olmalıdır.
                  </p>
                  <p>
                    Bu yüksek risk barındıran ortamlarda, makinenin kalitesi kadar operatörün soğukkanlılığı da hayati önem taşır. Bu yüzden <strong>operatörlü kullanım zorunluluğu</strong> ilkemizden asla ödün vermiyoruz. İnşaatı aylarca sürecek dev tesisler için günübirlik çağırmak yerine maliyet avantajı yaratan <strong>proje bazlı çalışma</strong> modeli sunuyoruz. Fabrikanızın ihtiyaç duyduğu tüm <strong>büyük ekipman ihtiyacı</strong> için geniş filomuzla arkanızdayız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-slate-800 py-12 border-y border-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Kahramankazan’da en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-slate-300 mb-8 text-lg">Fabrikanızda işler aksamasın, sanayi bölgesi uzmanı ekibimiz hemen yola çıksın.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kahramankazan Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Kahramankazan bölgesindeki vinç kiralama maliyetleri, tamamen endüstriyel sahanın ihtiyaçlarına göre hesaplanmaktadır. Burada <strong>proje büyüklüğü fiyatı belirler</strong>. Ufak bir tabelanın asılması saatlik iş dilimine girerken, yeni bir deponun çatısının komple onarılması günlerce sürecek bir maliyet planı gerektirir.
                </p>
                <p className="text-lg">
                  Fabrikalar, lojistik depoları ve şantiyelerdeki <strong>sanayi işleri genelde günlük / proje bazlı</strong> olarak sözleşmeye dökülür ve satın alma departmanlarına ekonomik avantaj sağlanır. Garajımızdan çıkacak vincin Keresteciler'e gitmesi ile Kahramankazan sınırlarına girmesi arasında <strong>mesafe fiyatlandırmada etkili</strong> bir faktördür.
                </p>
              </div>
              <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Şirketinize özel net fiyat ve keşif için hemen arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors text-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kahramankazan’da Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Saray, Keresteciler ve ağır sanayi bölgelerinde B2B firmalarla yürüttüğümüz referans projeler.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/kahramankazan-vinc.jpg"
                    alt="ankara kahramankazan vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-700 font-bold mb-2">
                    <Factory size={20} /> Fabrika Bakım İşi
                  </div>
                  <p className="text-gray-600 text-sm">Kahramankazan sanayi bölgesindeki devasa bir gıda paketleme tesisinin, üretim durdurulmadan dış cephe sandviç panellerinin izolasyonu güvenli bir şekilde tamamlandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-slate-200 flex items-center justify-center">
                  <Settings size={48} className="text-slate-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-700 font-bold mb-2">
                    <Settings size={20} /> Makine Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Saray Dökümcüler mevkiinde yer alan bir yedek parça üretim tesisine tırlarla getirilen 12 tonluk pres makinelerinin kurulumu esnasında, havalandırma tahliye boruları vincimizle yukarıdan bağlandı.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/sanayi-vinc.jpg"
                    alt="kahramankazan sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-700 font-bold mb-2">
                    <Building2 size={20} /> Depo Çalışması
                  </div>
                  <p className="text-gray-600 text-sm">Keresteciler Sanayi Sitesi'ndeki ahşap ve mobilya lojistik depolarının yeni tavanlarına, dar raf aralarına girebilen kompakt aracımız sayesinde yangın söndürme spring hatları çekildi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Kahramankazan Sanayi Bölgesi Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195535.40578635817!2d32.482025287706354!3d40.11977750800346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33a6479b7a4bf%3A0xe726df21b033620!2sKahramankazan%2C%20Ankara!5e0!3m2!1str!2str!4v1714163000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kahramankazan Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kahramankazan’da Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">Sanayi ve üretim tesislerine yönelik sunduğumuz operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-slate-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-slate-700 transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-slate-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-slate-700 transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-slate-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-slate-700 transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-slate-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-slate-700 transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/elektrik-bakim" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-slate-500 hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-slate-700 transition-colors text-lg mb-2">Elektrik Bakım Vinç</span>
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
              <p className="text-lg text-gray-600">Kahramankazan, Keresteciler ve Saray bölgesindeki fabrika operasyonlarıyla ilgili detaylar.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-slate-700 transition-colors">
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
          className="flex-1 bg-slate-700 hover:bg-slate-800 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
