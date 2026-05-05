import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Building2, Home, Store, Trees, Clock, ShieldCheck, Paintbrush, Zap, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ZoomableImage from '@/components/ZoomableImage';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Eryaman Sepetli Vinç Kiralama | Aynı Gün Hızlı Hizmet',
  description: 'Eryaman’da sepetli vinç kiralama hizmeti. Ağaç budama, cephe işleri ve tabela montajı için hızlı çözüm. 0551 606 68 78',
  alternates: getMetadataAlternates('/bolgeler/eryaman-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Eryaman Sepetli Vinç Kiralama | Aynı Gün Hızlı Hizmet',
    description: 'Eryaman’da sepetli vinç kiralama hizmeti. Ağaç budama, cephe işleri ve tabela montajı için hızlı çözüm. 0551 606 68 78',
    url: getCanonicalUrl('/bolgeler/eryaman-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Eryaman’da vinç kiralama ne kadar sürer?',
    a: 'Eryaman bölgesi araçlarımızın ana faaliyet lokasyonlarından biridir. Trafik ve hava şartlarına bağlı olarak genellikle 30-45 dakika içinde hızlıca sahanıza ulaşıp vinç kurulumunu tamamlıyoruz.'
  },
  {
    q: 'Aynı gün vinç gelir mi?',
    a: 'Evet, özellikle Eryaman ve çevresindeki acil müdahale gerektiren cephe temizliği, cam onarımı veya tabela değişimleri için filomuzda sürekli hazır araçlar bekletmekteyiz. İletişime geçmeniz halinde aynı gün vinç tahsis edebiliyoruz.'
  },
  {
    q: 'Saatlik kiralama var mı?',
    a: 'Kısa süreli işleriniz için saatlik kiralama seçeneğimiz bulunmaktadır. Mağaza tabelası asmak, yüksek kata eşya çekmek ya da aydınlatma değiştirmek gibi pratik işlerde en avantajlı ve bütçe dostu hizmet paketimizdir.'
  },
  {
    q: 'Ağaç budama için vinç gerekli mi?',
    a: 'Kesinlikle gereklidir. Eryaman ve Bağlıca’daki villa projelerinde uzun gövdeli ağaçların güvenli budanması, çevredeki peyzaja ve yapıya zarar vermeden ancak sepetli vinç platformları sayesinde mümkündür. Ayrıca iş güvenliği (İSG) açısından risksiz bir yöntemdir.'
  },
  {
    q: 'Fiyatlar neye göre değişir?',
    a: 'Kiralama bedellerimiz; projenizdeki çalışma yüksekliğine, ne kadar süre kalacağımıza (saatlik/günlük), işin zorluk derecesine ve tam lokasyonunuza göre farklılık göstermektedir. Şeffaf fiyatlandırma için WhatsApp hattımızdan fotoğraf paylaşabilirsiniz.'
  }
];

export default function EryamanPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Eryaman Sepetli Vinç Kiralama',
      provider: {
        '@type': 'LocalBusiness',
        name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
        url: SEO_CONFIG.baseUrl
      },
      telephone: '+905516066878',
      areaServed: [
        {
          '@type': 'City',
          name: 'Eryaman'
        },
        {
          '@type': 'City',
          name: 'Etimesgut'
        },
        {
          '@type': 'City',
          name: 'Ankara'
        }
      ],
      serviceType: 'Sepetli Vinç Kiralama',
      description: "Eryaman, Etimesgut ve Bağlıca bölgesinde sepetli vinç kiralama hizmeti. Ağaç budama, cephe işleri, tabela montajı ve çatı tamiri için hızlı çözüm.",
      url: getCanonicalUrl('/bolgeler/eryaman-sepetli-vinc-kiralama')
    },
    {
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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
          name: 'Eryaman Sepetli Vinç Kiralama',
          item: getCanonicalUrl('/bolgeler/eryaman-sepetli-vinc-kiralama')
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* 1. HERO ALANI */}
        <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bolge/etimesgut-vinc.jpg"
              alt="Eryaman sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-gray-900/90 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Eryaman', href: '/bolgeler/eryaman-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Eryaman Sepetli Vinç Kiralama Hizmeti
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-6">
                Eryaman, Bağlıca ve Etimesgut Çevresinde 30 Dakikada Hızlı Çözüm
              </h2>

              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  Başkent <strong>Ankara</strong> her geçen gün yatay ve dikey mimaride gelişmeye devam ederken, bu devasa gelişimin ana arterlerinden biri hiç şüphesiz <strong>Etimesgut</strong> ilçesidir. Bu bölgenin en planlı yapılaşmasına sahip, devasa site kompleksleriyle dikkat çeken <strong>Eryaman</strong>, yüksek erişim gerektiren profesyonel iş makinesi çözümlerine en çok ihtiyaç duyulan noktadır. Ankara’nın modern yüzünü temsil eden Eryaman ve hemen yanı başındaki <strong>Bağlıca</strong> ile <strong>Elvankent</strong> mahallelerinde, periyodik bakım onarım, dış cephe temizliği, tabela montajı ve ağaç budama gibi işlemler için güvenilir sepetli platformlar büyük bir gereksinim haline gelmiştir.
                </p>
                <p>
                  Geleneksel erişim yöntemlerinin yetersiz ve tehlikeli kaldığı yüksek katlı mimarilerde, profesyonel mobil vinç kiralama hizmeti projelere zaman ve bütçe tasarrufu sağlar. Filomuzda bulunan, farklı metraj kapasitelerine sahip hidrolik platformlu vinçlerimizle Eryaman ve çevre bölgelerdeki tüm operasyonlarda maksimum iş güvenliği (İSG) standartlarıyla hizmet sunuyoruz. İster acil bir çatı onarımı olsun ister geniş bir AVM'nin tabela değişimi, Eryaman sepetli vinç kiralama çözümlerimiz haftanın 7 günü hizmetinizdedir.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30"
                >
                  <Phone size={20} /> Hemen Ara
                </a>
                <a
                  href="https://wa.me/905516066878"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-500/30"
                >
                  <MessageCircle size={20} /> WhatsApp’tan Teklif Al
                </a>
                <a
                  href="#fiyatlar"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Hızlı Fiyat Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ERYAMAN'DA SEPETLİ VİNÇ HANGİ İŞLERDE KULLANILIR */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Eryaman’da Sepetli Vinç Hangi İşlerde Kullanılır?</h2>
              <p className="text-xl text-gray-600">Eryaman'ın yüksek katlı siteleri ve geniş caddelerinde güvenli yüksek erişim çözümleri.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-10">
              <p>
                Eryaman, özellikle 1990'lı yılların sonundan itibaren devasa kooperatiflerin ve lüks konut projelerinin inşa edildiği, günümüzde Ankara'nın en kalabalık ve en düzenli yerleşim alanlarından biridir. Bu planlı yapılaşmanın bir sonucu olarak bölgede yüzlerce çok katlı apartman, geniş peyzaj alanlarına sahip büyük siteler ve bunları besleyen devasa ticari arterler bulunur. Tüm bu yapıların zaman içerisinde periyodik bakıma, yenilenmeye ve onarıma ihtiyacı vardır. Geleneksel merdivenler veya riskli çelik iskeleler, Eryaman'ın hızlı yaşam temposuna ayak uyduramaz; saatlerce süren iskele kurma işlemleri hem bölge sakinlerini rahatsız eder hem de operasyon maliyetlerini ciddi şekilde şişirir.
              </p>
              <p>
                İşte tam bu noktada, Ankara sepetli vinç kiralama hizmetlerimiz devreye girer. <Link href="/" className="text-primary hover:text-primary/80 font-semibold underline transition">Ankara sepetli vinç kiralama</Link> altyapımızın en önemli ayaklarından birini oluşturan Eryaman bölgesinde, farklı iş makinesi kapasitelerimizle çok çeşitli operasyonel ihtiyaçlara yanıt vermekteyiz. Ağaç budama işleminden tutun, yüksek cephelerin temizliğine, tehlikeli mantolama ve dış cephe boyasından, gösterişli tabela montajı ve karmaşık elektrik-aydınlatma işlemlerine kadar her türlü saha çalışmasında en pratik, en hızlı ve en güvenli çözüm mobil sepetli vinçlerdir. Hidrolik sistemleri ve 360 derece dönebilen platformları sayesinde araçlarımız, apartman bahçelerine veya site yollarına minimum işgaliye ile yerleşip, işçilerin en ulaşılmaz görünen noktalara dahi güvenle erişmesini sağlamaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* 3. AĞAÇ BUDAMA VE PEYZAJ */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trees size={64} className="text-gray-200" />
                  </div>
                  <ZoomableImage src="/images/blog/agac-budama-sepetli-vinc-cover.png" alt="Eryaman Ağaç Budama Vinç" fill className="object-contain p-4" containerClassName="absolute inset-0 z-10" />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <Trees size={28} />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Eryaman Ağaç Budama ve Peyzaj İşlerinde Vinç Kullanımı</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Eryaman ve çevresini Ankara'nın diğer birçok bölgesinden ayıran en önemli özelliklerinden biri, site içerisindeki geniş yeşil alanlar ve planlı peyzaj düzenlemeleridir. Ancak yıllar içerisinde kontrolsüzce büyüyen çam, çınar ve kavak ağaçları; elektrik hatlarına, apartman pencerelerine ve otoparklardaki araçların üzerine risk oluşturmaya başlar. Sert kış aylarında kar yüküyle veya şiddetli lodos fırtınalarında devrilme tehlikesi taşıyan ağır dalların budanması, uzmanlık gerektiren kritik bir işlemdir.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Site içi ağaç budama operasyonlarında yüksek ağaçlara tırmanarak işlem yapmak hem belediyenin iş güvenliği standartlarına aykırıdır hem de personelin can güvenliğini direkt olarak tehlikeye atar. Đặc biệt Eryaman'a çok yakın konumda bulunan ve müstakil yaşamın merkezi olan villa bölgelerinde (örneğin Bağlıca bağlantısı üzerinden ulaştığımız elit konut projelerinde) peyzajın dokusuna zarar vermeden budama yapmak şarttır. Vinç sepetinden motorlu testereyle ağaca yaklaşan operatör, ağır dalları yavaşça ve kontrollü bir şekilde yere indirir. Bu modern yöntem hem operasyonel bir güvenlik avantajı sağlar hem de çalışmayı dakikalar içinde bitirir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CEPHE TEMİZLİĞİ VE MANTOLAMA */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 size={64} className="text-gray-200" />
                  </div>
                  <ZoomableImage src="/images/bolge/eryaman-cephe-temizligi-mantolama.png" alt="Eryaman Dış Cephe Temizliği Vinç" fill className="object-contain p-4" containerClassName="absolute inset-0 z-10" />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-indigo-100 w-14 h-14 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Paintbrush size={28} />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Cephe Temizliği, Boya ve Mantolama Çalışmaları</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Eryaman'daki 10 ila 15 katlı apartman ve site işlerinde, dış cephe bakımının zamanında ve doğru yapılması bina ömrünü uzatan en büyük faktördür. Ankara'nın sert kış şartlarında yıpranan, rüzgar ve yağmurla kirlenen, yalıtım özelliğini kaybeden cephelere müdahale etmek için iskele kurmak, site sakinlerinin günlerce toz ve gürültü çekmesi anlamına gelir. Ayrıca güvenlik riskleri de iskele sistemlerinde oldukça yüksektir.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Yüksek kat erişim ihtiyacı olan devasa mantolama projeleri, silikonlu kompozit cam temizliği, rutubete karşı lokal dış cephe boya işlemleri ve su sızıntılarına karşı izolasyon uygulamaları sepetli vinçlerimiz ile çok daha rasyonel şekilde yönetilir. Özellikle haftalarca sürecek kapsamlı bir dış cephe kaplaması veya boya revizyonu planlıyorsanız, firmamızın sunduğu <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-primary hover:text-primary/80 font-semibold underline transition">günlük vinç kiralama</Link> paketleri maliyetleri ciddi anlamda düşürecektir. Sabit ve güvenli bir platform üzerinden çalışan ustalarınız, yorulmadan ve risk almadan çok daha estetik ve hatasız bir işçilik çıkaracaktır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ÇATI TAMİRİ VE PARATONER */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Çatı Tamiri, Oluk ve Paratoner Montajı</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Şiddetli lodos, yoğun kar yağışı veya beklenmedik fırtınalar sonrası Eryaman bölgesinde en sık karşılaşılan problemlerden biri çatı hasarlarıdır. Uçan kiremitler, yerinden sökülen şıngıllar veya şiddetli rüzgarın kopardığı sac kaplamalar hem bina sakinleri için hem de sokaktan geçen yayalar için anlık ve ölümcül tehditler oluşturur. Hasarlı bölgeye içeriden veya çatı kapağından ulaşmak genellikle zordur veya çatı eğimi nedeniyle hayati tehlike taşır.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Çatı onarım süreçlerinin yanı sıra sonbahar aylarında kurumuş yapraklarla dolup taşan ve yağmurlarda duvarlara su sızdıran yağmur oluklarının temizliği de vincin sepetinden güvenle yapılır. Yüksek güvenlikli yalıtımlı sepetlerimizle, yüksek gerilim hatlarının yakınından geçen bölgelerde yıldırımdan korunma sağlayan paratoner kurulumu veya anten/çanak değişimleri de hızlıca gerçekleştirilir. Tüm bu zorlu operasyonlar, İSG belgeli, tecrübeli ve <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-primary hover:text-primary/80 font-semibold underline transition">operatörlü vinç hizmeti</Link> garantimiz altında sorunsuz bir şekilde teslim edilir.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Home size={64} className="text-gray-200" />
                  </div>
                  <ZoomableImage src="/images/bolge/eryaman-cati-oluk-tamiri.png" alt="Eryaman Çatı Tamiri Vinç" fill className="object-contain p-4" containerClassName="absolute inset-0 z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TABELA MONTAJ */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="md:w-1/2">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Zap size={28} />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Eryaman Tabela Montaj ve Reklam Uygulamaları</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Eryaman; Optimum AVM, Metromall çevresi ve Gimsa park alanları gibi devasa ticaret arterlerine, restoranlara, sağlık kuruluşlarına ve eğitim komplekslerine ev sahipliği yapar. Sürekli gelişen ticari ekosistemde, markaların öne çıkması ve müşteri çekmesi için görünürlüğün maksimum seviyede olması gerekir. Görünürlüğün en büyük aracı ise stratejik noktalara yerleştirilmiş devasa reklam panoları ve mağaza tabelalarıdır.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ağır kompozit malzemelerden üretilen mağaza tabelaları, yola cephe dev totem tabelalar ve geniş AVM dış cephesini kaplayan dev folyo reklam uygulamalarının montajı estetik, matematik ve yüksek güç gerektirir. Kilolarca ağırlıktaki bu tabelaları vinç olmaksızın insan gücüyle kaldırmak ve hassas bir teraziyle monte etmek imkansızdır. Şerit trafiğini aksatmadan AVM veya cadde uygulamaları için gerekli izinleri alıp, hızlı manevra kabiliyetine sahip platformlarımızla markanızın kimliğini gökyüzüne en güvenli ve en şık şekilde taşıyoruz.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Store size={64} className="text-gray-200" />
                  </div>
                  <ZoomableImage src="/images/bolge/eryaman-tabela-montaj-reklam.png" alt="Eryaman Tabela Montajı Vinç" fill className="object-contain p-4" containerClassName="absolute inset-0 z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FİYAT BLOĞU (CTR + CONVERSION) */}
        <section id="fiyatlar" className="py-16 bg-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Eryaman Sepetli Vinç Kiralama Fiyatları</h2>
            <p className="text-lg text-teal-100 mb-8 max-w-3xl mx-auto">
              Eryaman ve çevre bölgelerde yürüteceğiniz çalışmalar için Ankara'nın en rekabetçi ve adil fiyatlandırma politikasını sunuyoruz. Fiyatlarımızı şeffaf bir şekilde etkileyen ana faktörler şunlardır:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-teal-300 font-bold mb-1">Yükseklik</div>
                <div className="text-sm text-gray-300">20m, 35m veya 45m gibi metrajlar araç modelini değiştirir.</div>
              </div>
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-teal-300 font-bold mb-1">Süre</div>
                <div className="text-sm text-gray-300">Saatlik, günlük veya haftalık olarak farklı birim fiyat hesaplanır.</div>
              </div>
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-teal-300 font-bold mb-1">İş Türü</div>
                <div className="text-sm text-gray-300">Ağır parça kaldırma veya sadece insan taşıma (sepet) gibi görevler.</div>
              </div>
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-teal-300 font-bold mb-1">Lokasyon</div>
                <div className="text-sm text-gray-300">Merkez garajımıza olan mesafe ve sahanın zorluk derecesi.</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-black text-gray-900">Projenize Özel Fiyat Alın</h3>
                <p className="text-gray-600 font-medium">Hemen çalışma sahanızın fotoğrafını gönderin, 5 dakikada net teklifinizi iletelim.</p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
                <a href="tel:05516066878" className="flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-primary px-6 py-3 rounded-xl font-bold transition-colors w-full">
                  <Phone size={18} /> 0551 606 68 78
                </a>
                <a href="https://wa.me/905516066878" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-6 py-3 rounded-xl font-bold transition-colors w-full shadow-lg">
                  <MessageCircle size={18} /> WhatsApp Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ETİMESGUT SAYFASINI BESLEME (HUB LINKING) */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="inline-flex items-center justify-center p-4 bg-teal-50 border border-teal-100 rounded-2xl w-full">
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-500 text-white p-2 rounded-full hidden sm:block">
                    <MapPin size={24} />
                  </div>
                  <p className="text-lg font-medium text-gray-800 text-left">
                    “Eryaman bölgesindeki vinç ihtiyaçlarınız için detaylı hizmet sayfamıza buradan ulaşabilirsiniz.”
                  </p>
                </div>
                <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="shrink-0 font-bold bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-6 py-2.5 rounded-xl transition-all flex items-center gap-2">
                  etimesgut sepetli vinç kiralama <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-gray-50 p-2 rounded-full shadow-sm border border-gray-100 text-gray-400 group-hover:text-teal-600">
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
    </div>
  );
}
