import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle2, MapPin, ArrowRight, Building2, Factory, HardHat, Camera, Sparkles, Clock, CalendarDays, ChevronRight, PenTool } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceRegionalLinks from '@/components/ServiceRegionalLinks';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Cephe Temizliği İçin Sepetli Vinç | Dış Cephe Hizmeti',
  description: 'Ankara’da dış cephe, cam cephe, apartman, site ve plaza temizlikleri için operatörlü sepetli vinç hizmeti. Hemen arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/cephe-temizligi-sepetli-vinc'),
  openGraph: {
    title: 'Ankara Cephe Temizliği İçin Sepetli Vinç | Dış Cephe Hizmeti',
    description: 'Ankara’da dış cephe, cam cephe, apartman, site ve plaza temizlikleri için operatörlü sepetli vinç hizmeti. Hemen arayın: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/cephe-temizligi-sepetli-vinc'),
  },
};

const faqs = [
  {
    q: 'Cephe temizliği için sepetli vinç kullanılır mı?',
    a: 'Kesinlikle. Özellikle iskele kurulumunun riskli veya maliyetli olduğu yüksek binalarda, cam yüzeylerde ve kompozit cephelerde temizlik personelinin en güvenli çalışma platformu sepetli vinçlerdir.'
  },
  {
    q: 'Ankara cephe temizliği sepetli vinç fiyatı nasıl belirlenir?',
    a: 'Fiyatlar binanın yüksekliğine, temizlenecek cephe alanının genişliğine, aracın kiralama süresine (saatlik veya günlük) ve konumuna göre değişiklik gösterir.'
  },
  {
    q: 'Cam cephe temizliği için vinç kiralanabilir mi?',
    a: 'Evet, plazalar ve iş merkezleri gibi tamamen cam kaplı dış yüzeylerin çizilmeden, lekesiz ve güvenli bir şekilde silinmesi için sepetli vinç kiralama en sık başvurulan yöntemdir.'
  },
  {
    q: 'Apartman dış cephe temizliği için saatlik vinç yeterli olur mu?',
    a: 'Eğer temizlik sadece lokal bir bölgede (örneğin birkaç cam veya tek bir köşe) yapılacaksa saatlik vinç kiralama yeterli ve ekonomik olacaktır.'
  },
  {
    q: 'Büyük bina cepheleri için günlük vinç kiralamak gerekir mi?',
    a: 'Bütün bir site bloğu, plaza veya fabrika cephesi temizlenecekse işlem saatler süreceğinden dolayı, günlük vinç kiralama modeli hem daha stressiz hem de bütçe açısından daha hesaplıdır.'
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: 'Tüm sepetli vinç kiralama hizmetlerimizde, sepeti güvenle yönetecek iş güvenliği sertifikalı uzman operatörümüz fiyata dahildir.'
  },
  {
    q: 'Aynı gün cephe temizliği için vinç yönlendirebilir misiniz?',
    a: 'Ankara genelinde yaygın araç ağımız sayesinde, boşta aracımız olması durumunda acil cephe temizliği taleplerinize aynı gün vinç tahsis edebiliyoruz.'
  },
  {
    q: 'Ankara’nın hangi ilçelerine hizmet veriyorsunuz?',
    a: 'Çankaya, Yenimahalle, Keçiören, Etimesgut, Eryaman, Sincan, Mamak, Gölbaşı ve Kazan başta olmak üzere Ankara’nın tüm bölgelerine sepetli vinç yönlendiriyoruz.'
  }
];

export default function CepheTemizligiSepetliVincPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Cephe Temizliği İçin Sepetli Vinç',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        },
        serviceType: 'Cephe Temizliği Sepetli Vinç Hizmeti',
        description: "Ankara’da dış cephe, cam cephe, plaza, site ve apartman temizliği için operatörlü sepetli vinç hizmeti alın.",
        url: getCanonicalUrl('/hizmetler/cephe-temizligi-sepetli-vinc')
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
            name: 'Hizmetler',
            item: `${SEO_CONFIG.baseUrl}/hizmetler`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Cephe Temizliği',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/cephe-temizligi-sepetli-vinc`
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
              src="/images/hero-bg.jpg"
              alt="ankara cephe temizliği sepetli vinç"
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
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Cephe Temizliği', href: '/hizmetler/cephe-temizligi-sepetli-vinc' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Cephe Temizliği İçin Sepetli Vinç
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara genelinde apartman, site, plaza, iş merkezi, fabrika ve yüksek katlı binaların dış cephe temizlik işleri için operatörlü sepetli vinç hizmeti sunuyoruz. Cam cephe, tabela çevresi, bina dış yüzeyi ve yüksek erişim gerektiren temizlik işlemlerinde güvenli, hızlı ve planlı çözümler sağlıyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
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
                  WhatsApp’tan Teklif Al
                </a>
                <a
                  href="#fiyatlar"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Cephe Temizliği Fiyatı Al
                </a>
                <Link
                  href="/bolgeler"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white underline hover:text-gray-200 px-4 py-4 font-medium transition-all"
                >
                  Hizmet Bölgelerini Gör
                </Link>
              </div>

              {/* Güven Sinyalleri */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Building2 size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Yüksek Bina Erişimi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><HardHat size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Operatörlü Sepetli Vinç</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Sparkles size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Site, Plaza ve Apartman Hizmeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><MapPin size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Ankara Geneli Hızlı Yönlendirme</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Niyet Odaklı Giriş */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Cephe Temizliği İçin Neden Sepetli Vinç Kullanılır?</h2>
              <p>
                Dış cephe temizliği; yüksek erişim gücü, tavizsiz güvenlik ve doğru makine ekipmanı gerektiren oldukça spesifik bir hizmet dalıdır. Çoğu zaman klasik iskele kurulumu binalar için her zaman pratik veya ekonomik olmayabilir; zira iskelenin kurulması ve sökülmesi başlı başına ayrı bir maliyet ve zaman kaybıdır. İşte bu noktada <strong>cephe temizliği sepetli vinç</strong> kiralama seçeneği, özellikle kısa ve orta süreli temizlik işlerinde benzersiz bir hız, anında kurulum, güvenli personel erişimi ve ciddi bir zaman tasarrufu sağlar.
              </p>
              <p>
                Ankara’nın her geçen gün yükselen silueti düşünüldüğünde; modern mimariye sahip site yönetimleri, cam kaplı lüks apartmanlar, ticaretin merkezi olan plazalar, devasa fabrikalar ve iş merkezleri için <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold underline">Ankara sepetli vinç kiralama</Link> desteği almak kaçınılmazdır. Temizlik personelleriniz dışarıda asılı kalma korkusu yaşamadan, vincin geniş sepeti içerisinde hareket ederek en zorlu köşeleri dahi mükemmel şekilde temizleyebilir. 
              </p>
              <p>
                Ayrıca, kullanılacak platformun yüksekliğine bağlı olarak doğru aracı seçmek hayati bir öneme sahiptir. Profesyonel <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold underline">operatörlü vinç kiralama</Link> sistemimiz sayesinde aracın binaya olan mesafesi, rüzgar direnci ve sepet içi yük dengesi tamamen deneyimli personelimiz tarafından kontrol edilir. Temizlik süresi birkaç saatlik bir pencerede tamamlanacaksa, bütçe dostu <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link> alternatifimiz devreye girer. Ancak devasa bir plazanın tüm dış yüzeyi silinecekse <Link href="/hizmetler/gunluk-vinc-kiralama" className="font-semibold underline">günlük vinç kiralama</Link> modeli şüphesiz çok daha avantajlıdır. Tüm bu süreçleri <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> standartlarımız altında, iş güvenliği yasalarına %100 uygun olarak gerçekleştiriyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Hizmet Kapsamı */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sepetli Vinç ile Cephe Temizliği Hizmet Kapsamı</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Binalarınızın dış görünümünü yenilemek ve temizlik ekiplerine güvenli bir platform sunmak için sunduğumuz hizmet alanları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Kart 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Apartman Dış Cephe Temizliği</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Standart iskele ile günlerce sürecek apartman dış yüzey silimi ve cephe boya kalıntısı temizliği işlemleri, sepetli vinç yardımıyla çevre sakinlerine rahatsızlık vermeden tamamlanır.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Cephe temizliği için sepetli vinç desteği almak isterseniz <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              {/* Kart 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Site ve Blok Cephe Temizliği</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Geniş peyzaj alanlarına sahip sitelerde, birden çok bloğun dış cephe bakım ve temizliği için en uygun araçlar tercih edilerek bloklar arası hızlı geçiş sağlanır.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Cephe temizliği için sepetli vinç desteği almak isterseniz <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              {/* Kart 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plaza ve İş Merkezi Cam Cephe Temizliği</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Tamamı camla kaplı lüks plazaların ve iş merkezlerinin prestijini koruması adına, camların çizilmeden pırıl pırıl temizlenebilmesi için özel yükselticili araçlarımız tahsis edilir.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Cephe temizliği için sepetli vinç desteği almak isterseniz <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              {/* Kart 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Factory size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fabrika ve Depo Dış Yüzey Temizliği</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Sanayi tesisleri, fabrika binaları ve depoların zamanla oluşan endüstriyel kirden arındırılması, kompozit dış yüzeylerin basınçlı suyla yıkanması işlerinde platform desteği sunulur.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Cephe temizliği için sepetli vinç desteği almak isterseniz <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              {/* Kart 5 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tabela Çevresi ve Cephe Bakımı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Bina yüzeyine asılı büyük reklam panolarının arkasında ve çevresinde biriken kirlerin, kuş pisliklerinin veya tozların detaylı temizliği vinç sepetinden rahatlıkla yapılır.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Cephe temizliği için sepetli vinç desteği almak isterseniz <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              {/* Kart 6 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yüksek Katlı Bina Temizlik İşleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Normal merdiven veya geleneksel yöntemlerle ulaşılması imkansız olan çok katlı binaların zorlu cam ve kompozit temizlikleri yüksek metrajlı vinçlerimizle kolaylaşır.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Cephe temizliği için sepetli vinç desteği almak isterseniz <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orta CTA Alanı */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Bina Fotoğrafı Gönderin, Hemen Fiyatlandıralım</h3>
            <p className="text-primary-foreground mb-8 text-lg">Dış cephe temizliği için vincin gireceği alanı ve binayı bize WhatsApp'tan göndererek hızlı fiyat alabilirsiniz.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <MessageCircle size={24} />
                Bina Fotoğrafı Gönder
              </a>
              <a
                href="tel:05516066878"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
            </div>
          </div>
        </section>

        {/* 4. Cephe Temizliğinde Avantajlar */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cephe Temizliğinde Sepetli Vinç Kullanmanın Avantajları</h2>
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">İskele kurulumuna göre çok <strong>daha hızlı çözüm</strong> üretir, kurulum saniyeler sürer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">En <strong>yüksek noktalara</strong> emniyet kemeri sistemleriyle tam <strong>güvenli erişim</strong> sağlar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Kısa ve günlük işler için geleneksel yöntemlerden çok daha <strong>ekonomik kullanımdır.</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg"><strong>Operatörlü çalışma</strong> sayesinde makine sarsıntısız, milimetrik ve <strong>kontrollü hareket</strong> eder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Site ve apartman önlerinde kurulu kalarak <strong>daha az alan işgali</strong> yaratır, trafiği kilitlemez.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Özellikle <strong>dar alanlarda</strong> veya engelli zeminlerde <strong>uygun araç yönlendirme</strong> imkanı sunar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Geniş filomuzla <strong>Ankara içi hızlı hizmet</strong> imkanından faydalanırsınız.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Lokal SEO Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Cephe Temizliği İçin Sepetli Vinç Hizmeti Verdiğimiz Bölgeler</h2>
              <p>
                Ankara gibi kurumsal yapılaşmanın, lüks konut projelerinin ve ağır sanayi tesislerinin iç içe olduğu bir şehirde <strong>ankara cephe temizliği sepetli vinç</strong> hizmetlerine her bölgeden yoğun talep gelmektedir. İşletmemiz, şehrin her bir ilçesindeki binaların fiziksel yapısına ve sokağın dar/geniş olma durumuna göre filomuzdan en uygun aracı sahanıza yönlendirmektedir.
              </p>
              
              <p>
                Kurumsal ofislerin ve yüksek camlı ticari binaların yoğunlaştığı merkez ilçelerde temizlik hassasiyeti çok yüksektir. Çankaya ve Kızılay bölgesinde plaza, lüks ofis ve devasa tabela cepheleri düzenli olarak temizliğe ihtiyaç duyar. Bu alanlar için <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="font-semibold underline">Çankaya cephe temizliği vinç hizmeti</Link> departmanımız sokağı ve trafiği engellemeden hızlı kurulum yapabilen araçlarımızı görevlendirir.
              </p>

              <p>
                Başkentin batı koridoruna doğru uzanan Etimesgut, Eryaman ve Bağlıca bölgesinde ise genellikle geniş peyzaja sahip site ve apartman cepheleri öne çıkmaktadır. Bu çok bloklu yapıların dönemsel dış yüzey yıkamaları ve cam silimlerinde <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline">Etimesgut cephe temizliği sepetli vinç</Link> ekiplerimiz bloklar arası hızlı manevra yaparak büyük kolaylık sağlar.
              </p>

              <p>
                Bununla birlikte, endüstriyel kirlenmenin yoğun olduğu sanayi alanlarında; Yenimahalle ve Ostim’de fabrika, depo ve devasa sanayi yapılarının dış yüzey kompozitleri zamanla simsiyah olur. Buralardaki yoğun kirin sökülmesi ve temizlenmesi için <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline">Yenimahalle cephe temizliği vinç</Link> birimimiz, uzun süre sahada kalabilen sağlam platformlarla destek verir. Aynı ağır sanayi konsepti Sincan ve Kazan’da üretim tesisleri, fabrika ve depo dış yüzeyleri için geçerliyken, bu bölgelerdeki taleplere de <Link href="/bolgeler/sincan-sepetli-vinc-kiralama" className="font-semibold underline">Sincan dış cephe vinç hizmeti</Link> araçlarımızla yanıt veriyoruz.
              </p>

              <p>
                Daha iç içe geçmiş, eski yapıların ve dar sokakların bulunduğu Keçiören ve Mamak’ta dar sokaklı apartman cepheleri temizlenirken manevra çok zordur; burada özel bom sistemli <Link href="/bolgeler/mamak-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Mamak sepetli vinç hizmeti</Link> platformlarımız fark yaratır. Lüks yaşantının adresi Gölbaşı’nda ise villa, site ve bina cephe temizliklerinde maksimum hassasiyetle araç tahsis edilir. Ankara genelinde özellikle <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Etimesgut sepetli vinç kiralama</Link> taleplerine hızlı dönüş sağlıyoruz. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Keçiören sepetli vinç</Link> hizmetlerinde dar sokak ve apartman cephe işleri için uygun araç yönlendirmesi yapıyoruz. <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Ostim sepetli vinç kiralama</Link> hizmetlerinde fabrika, depo ve sanayi bakım işleri öne çıkarken, <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Yenimahalle vinç kiralama</Link> taleplerinde hem sanayi hem konut bölgelerine hızlı hizmet veriyoruz. İşletmenize en uygun olan lokasyon desteklerimizi incelemek için <Link href="/bolgeler" className="font-semibold underline text-primary">Ankara hizmet bölgeleri</Link> listemize göz atabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <ServiceRegionalLinks variant="C" />

        {/* 6. Saatlik / Günlük Kiralama Bağlantısı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Cephe Temizliği İçin Saatlik mi Günlük mü Vinç Kiralanmalı?</h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-blue-600 w-8 h-8" />
                  Saatlik Vinç
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Kısa cephe müdahaleleri ve küçük lekelerin temizliği</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Küçük apartman işleri ve düşük katlı bina silimleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Tabela çevresi ve vitrin üstü hızlı temizlikleri</span>
                  </li>
                </ul>
                <Link href="/hizmetler/saatlik-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl border-2 border-blue-600 text-blue-700 font-bold hover:bg-blue-50 transition-colors gap-2">
                  saatlik vinç kiralama <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-primary/5 border-2 border-primary/30 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <CalendarDays className="text-primary w-8 h-8" />
                  Günlük Vinç
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Büyük cephe temizliği ve bütün binanın yıkanması</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Site, plaza, fabrika ve devasa depo işleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Uzun süren yüksek erişim ve cephe boya hazırlığı çalışmaları</span>
                  </li>
                </ul>
                <Link href="/hizmetler/gunluk-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors gap-2">
                  günlük vinç kiralama <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Fiyat Bölümü */}
        <section id="fiyatlar" className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Ankara Cephe Temizliği Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8">
                <p>
                  <strong>Dış cephe temizliği vinç kiralama</strong> süreçlerinde sabit bir fiyat tarifesi belirlemek yanıltıcıdır. Çünkü her binanın mimari zorluğu ve kullanılacak iş makinesinin kapasitesi birbirinden farklıdır. Fiyat teklifimizi hazırlarken şu faktörleri baz alıyoruz:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <ul className="space-y-3 m-0">
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Binanın Yüksekliği:</strong> Kaç metrelik vinç gerekeceği.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Cephe Alanı:</strong> Binanın genişliği ve silinecek alan.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Çalışma Süresi:</strong> Ne kadar zaman ayrılacağı.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Kiralama Tercihi:</strong> Saatlik veya günlük planlama.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>İlçe Konumu:</strong> Binanın bulunduğu ilçe uzaklığı.</li>
                  </ul>
                  <ul className="space-y-3 m-0">
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Araç Yanaşma Alanı:</strong> Binanın dibine girebilme şansı.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Trafik Durumu:</strong> Dar sokak veya ana cadde kısıtlamaları.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Operatör İhtiyacı:</strong> Ekstra mesai veya standart operatör.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>İşin Aciliyeti:</strong> Acil çağrı yönlendirmesi.</li>
                  </ul>
                </div>
                <p className="mt-6 mb-0 text-gray-800 font-medium">
                  Cephe temizliği için en doğru fiyat, binanın fotoğrafı ve konumu incelendikten sonra verilir. WhatsApp’tan bina görseli ve adres bilgisi göndererek hızlı teklif alabilirsiniz.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center shadow-sm">
                <p className="text-gray-900 font-bold mb-4 text-lg">Cephe temizliği vinç fiyatı için 0551 606 68 78 numarasını arayın veya WhatsApp’tan yazın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> 0551 606 68 78
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Süreç Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Cephe Temizliği İçin Sepetli Vinç Kiralama Süreci</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Phone size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">İletişime Geçin</h3>
                <p className="text-gray-600 text-sm">0551 606 68 78 numarasını arayın veya hemen WhatsApp’tan yazın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Camera size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Detayları İletin</h3>
                <p className="text-gray-600 text-sm">Bina fotoğrafı, konum bilgisi ve tahmini cephe çalışma alanını bize paylaşın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><CalendarDays size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Planlama Yapılsın</h3>
                <p className="text-gray-600 text-sm">İşe ve yüksekliğe en uygun sepetli vinç ve operatör planlaması profesyonelce yapılsın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Sparkles size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">İşlem Tamamlansın</h3>
                <p className="text-gray-600 text-sm">Araç sahaya yönlendirilir ve cephe temizlik çalışması güvenli bir şekilde tamamlanır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. İç Link Destek Alanı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">İlgili Vinç Kiralama Hizmetleri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ankara Sepetli Vinç Kiralama</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Operatörlü Vinç Kiralama</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Saatlik Vinç Kiralama</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Günlük Vinç Kiralama</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ankara Vinç Kiralama Hizmetleri</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/bolgeler" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Hizmet Bölgeleri</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        {/* 10. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Cephe temizliğinde vinç kullanımı ile ilgili merak edilenler.</p>
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

        {/* İç Link ve CTA Alanı */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bulunduğunuz İlçeye En Yakın Vinci Yönlendirelim</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ankara’da bulunduğunuz ilçeye göre en yakın vinci yönlendiriyoruz. Konumunuzu ve yapılacak işi paylaşarak hızlı fiyat alabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Etimesgut sepetli vinç kiralama</Link>
                <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Keçiören vinç kiralama</Link>
                <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Yenimahalle sepetli vinç hizmeti</Link>
                <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Ostim sanayi vinç hizmeti</Link>
                <Link href="/bolgeler" className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">Tüm hizmet bölgeleri</Link>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:05516066878" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors">
                  <Phone size={20} /> Hemen Ara: 0551 606 68 78
                </a>
                <a href="https://wa.me/905516066878" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1ebd5a] transition-colors">
                  <MessageCircle size={20} /> WhatsApp'tan Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Alt CTA */}
        <section className="bg-gray-900 py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tertemiz Cepheler, Güvenli Erişim</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Binanızın dış yüzeyi ne kadar yüksek olursa olsun, operatörlü sepetli vinçlerimizle temizlik ekibinize güvenli ve sarsıntısız çalışma imkanı sunuyoruz.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <Phone size={24} />
                Hemen Ara: 0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <MessageCircle size={24} />
                Bina Fotoğrafı Gönder
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* MOBİL STICKY BAR (ÇOK ÖNEMLİ) */}
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
      
      {/* Sayfa içeriğinin sonuna boşluk ekliyoruz ki mobil sticky bar footer'ın son kısımlarını kapatmasın. */}
      <div className="h-[72px] md:hidden w-full bg-transparent"></div>

    </div>
  );
}
