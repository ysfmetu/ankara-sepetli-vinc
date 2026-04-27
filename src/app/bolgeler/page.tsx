import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import ServiceAreas from '@/components/ServiceAreas';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Sepetli Vinç Kiralama Bölgeleri | Tüm İlçelerde Hizmet',
  description:
    "Ankara’nın tüm ilçelerinde sepetli vinç kiralama hizmeti. Çankaya, Etimesgut, Keçiören, Yenimahalle, Sincan ve diğer bölgelerde hızlı vinç yönlendirme. Hemen arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler'),
  openGraph: {
    title: 'Ankara Sepetli Vinç Kiralama Bölgeleri | Tüm İlçelerde Hizmet',
    description:
      "Ankara’nın tüm ilçelerinde sepetli vinç kiralama hizmeti. Çankaya, Etimesgut, Keçiören, Yenimahalle, Sincan ve diğer bölgelerde hızlı vinç yönlendirme. Hemen arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler'),
  },
};

const faqs = [
  {
    q: 'Ankara’nın tüm ilçelerine sepetli vinç hizmeti veriyor musunuz?',
    a: 'Evet, Ostim/Yenimahalle merkezli araç filomuzla Ankara’nın tüm metropol ilçelerine ve sanayi bölgelerine kesintisiz sepetli vinç kiralama hizmeti sunuyoruz.'
  },
  {
    q: 'En yakın vinç ne kadar sürede gelir?',
    a: 'Lokasyonunuza ve trafik durumuna bağlı olarak, acil müdahale gerektiren durumlarda size en yakın aracımızı 30 ila 45 dakika içerisinde yönlendirebiliyoruz.'
  },
  {
    q: 'İlçeye göre vinç kiralama fiyatı değişir mi?',
    a: 'Sepetli vinç kiralama fiyatlarımızda temel belirleyici unsur kullanılacak makinenin metrajı ve çalışma süresidir. Ancak merkeze çok uzak dış ilçelerde (örn: Polatlı, Şereflikoçhisar vb.) yol/mazot farkı yansıtılabilmektedir.'
  },
  {
    q: 'Aynı gün sepetli vinç yönlendirebilir misiniz?',
    a: 'Müsaitlik durumumuza göre elbette. Tabelanız uçtuysa, elektrik arızanız varsa veya acil cam temizliği gerekiyorsa gün içinde hızlı araç yönlendirmesi yapıyoruz.'
  },
  {
    q: 'Hangi işler için sepetli vinç kiralanabilir?',
    a: 'Tabela montajı, cephe temizliği, cam silimi, klima motoru montajı, ağaç budama, elektrik direği bakımı, oluk tamiri, baca temizliği ve her türlü yüksek erişim gerektiren tadilat işlemi için vinç kiralayabilirsiniz.'
  }
];

const districtsData = [
  {
    name: 'Çankaya',
    slug: 'cankaya',
    image: '/images/bolge/cankaya-sepetli-vinc-calisma.png',
    excerpt: 'Çankaya, Kızılay ve çevresinde tabela montajı, dış cephe temizliği, plaza bakım işleri ve yüksek erişim gerektiren lüks konut çalışmaları için güvenli sepetli vinç kiralama hizmeti sunuyoruz.',
  },
  {
    name: 'Yenimahalle',
    slug: 'yenimahalle',
    image: '/images/bolge/yenimahalle-sepetli-vinc-calisma.jpg',
    excerpt: 'Yenimahalle genelinde bina dış cephe tadilatları, klima montajı, cam silimi ve yüksek katlı apartmanlardaki bakım çalışmaları için uygun fiyatlı kiralık platform vinçlerimizle hızlı yönlendirme yapıyoruz.',
  },
  {
    name: 'Sincan',
    slug: 'sincan',
    image: '/images/bolge/sincan-sepetli-vinc-calisma.png',
    excerpt: 'Sincan merkez, OSB ve Fatih yerleşim alanlarındaki devasa fabrika aydınlatma değişimi, çatı onarımı ve endüstriyel depo dış cephe işlemleri için saatlik ve günlük sepetli vinç kiralama.',
  },
  {
    name: 'Keçiören',
    slug: 'kecioren',
    image: '/images/bolge/kecioren-sepetli-vinc-calisma.png',
    excerpt: 'Keçiören’in dar sokaklarına ve yokuşlarına kolayca girebilen manevra kabiliyeti yüksek sepetli vinçlerimizle apartman boya, yalıtım ve çatı oluk temizliği işlerinde profesyonel çözüm üretiyoruz.',
  },
  {
    name: 'Mamak',
    slug: 'mamak',
    image: '/images/bolge/mamak-sepetli-vinc-kiralama-cover.png',
    excerpt: 'Mamak ve çevresinde, kentsel dönüşüm alanlarındaki inşaat destekleri, mantolama, pencere montajı ve cephe bakım işlemlerinizde operatörlü sepetli vinç hizmeti ile her zaman yanınızdayız.',
  },
  {
    name: 'Etimesgut',
    slug: 'etimesgut',
    image: '/images/bolge/etimesgut-sepetli-vinc-kiralama-1.jpg',
    excerpt: 'Etimesgut, Eryaman ve Bağlıca bölgesinde devasa site bahçeleri, apartman blokları temizliği ve yüksek ağaç budama işleri için çevreyi rahatsız etmeyen sessiz ve pratik kiralık vinç desteği.',
  },
  {
    name: 'Altındağ',
    slug: 'altindag',
    image: '/images/bolge/altindag-sepetli-vinc-calisma.png',
    excerpt: 'Tarihi Ulus, Siteler ve ticari bölge Altındağ genelinde trafik akışını engellemeden; güvenli tente montajı, reklam panosu asımı ve tadilat imkanı sunan kiralık sepetli vinç servisleri.',
  },
  {
    name: 'Pursaklar',
    slug: 'pursaklar',
    image: '/images/bolge/pursaklar-sepetli-vinc-calisma.png',
    excerpt: 'Pursaklar ve havaalanı yolu güzergahında hava koşullarına dayanıklı araçlarımızla aydınlatma direkleri bakımı, cephe boya işleri ve inşaat dış yüzey montajı için saatlik vinç kiralama çözümleri.',
  },
  {
    name: 'Gölbaşı',
    slug: 'golbasi',
    image: '/images/bolge/golbasi-sepetli-vinc-calisma.png',
    excerpt: 'Gölbaşı, İncek ve Mogan çevresindeki lüks villalar, müstakil bahçeler ve yeni projelerde hassas ağaç budama, baca temizliği ve kamera montajı için güvenilir sepetli vinç hizmetleri.',
  },
  {
    name: 'Kahramankazan',
    slug: 'kahramankazan',
    image: '/images/bolge/kahramankazan-sepetli-vinc-calisma.png',
    excerpt: 'Saray ve Kahramankazan sanayi bölgelerindeki dev lojistik üsleri ve üretim tesislerinin çatı onarımı, yüksek cephe izolasyonu ve oluk bakımlarında ağır tonajlı vinç seçenekleri.',
  },
  {
    name: 'Ostim',
    slug: 'ostim',
    image: '/images/bolge/ostim-sepetli-vinc-calisma2.png',
    excerpt: 'Ankara sanayisinin kalbi Ostim OSB’de fabrika içi dar alanlara girebilen, yüksek tavan aydınlatma bakımları ve depo raf sistemleri onarımına uyumlu 7/24 kesintisiz vinç kiralama.',
  },
  {
    name: 'İvedik',
    slug: 'ivedik',
    image: '/images/bolge/ivedik-sepetli-vinc-calisma.jpg',
    excerpt: 'İvedik OSB ve Matbaacılar sitesindeki işletmelere özel çatı izolasyon tadilatı, kompozit cephe değişimi ve dış mekan kamera montaj vinçleri ile uygun saatlik fiyatlar sunuyoruz.',
  },
];

export default function BolgelerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Sepetli Vinç Kiralama Hizmet Bölgeleri',
        provider: {
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
          }
        },
        telephone: '+905516066878',
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        },
        serviceType: 'Sepetli Vinç Kiralama',
        url: getCanonicalUrl('/bolgeler')
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
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmet Bölgeleri', href: '/bolgeler' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Ankara Sepetli Vinç Kiralama <span className="text-primary">Hizmet Bölgeleri</span>
            </h1>
            
            <div className="prose prose-lg text-gray-600 mx-auto text-left">
              <p>
                Ankara gibi geniş bir coğrafyada faaliyet gösteren işletmeler, site yönetimleri ve inşaat firmaları için zamanlama en az iş güvenliği kadar önemlidir. Şehrin her noktasında kesintisiz <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold text-primary underline">Ankara sepetli vinç kiralama</Link> operasyonları yürütüyor, nerede olursanız olun ihtiyaç duyduğunuz iş makinesini saatler içerisinde kapınıza getiriyoruz. Ostim ve Yenimahalle merkezli dinamik araç ağımız sayesinde, başkentin trafiğine ve coğrafi yapısına hakim ekiplerimiz size en yakın aracı anında sevk eder.
              </p>
              <p>
                Bölgelere özel geliştirdiğimiz <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold text-primary underline">operatörlü vinç kiralama</Link> sistemimizde; Çankaya'daki bir plazanın tabela montajı için ayrı bir araç, Sincan'daki devasa fabrikanın cephe temizliği için çok daha yüksek metrajlı farklı bir araç yönlendirilir. Amacımız her bölgenin mimari zorluklarına ve sokak daralmalarına karşı doğru manevra kabiliyetine sahip makineyi seçmektir. Elektrik bakımından ağaç budama işlerine kadar çok geniş bir yelpazede görev alan <Link href="/hizmetler" className="font-semibold text-primary underline">Ankara vinç kiralama hizmetleri</Link> departmanımız, talebe göre esneklik gösterir.
              </p>
              <p>
                Bireysel kullanıcılar için apartman dış cephe onarımlarında veya tek bir klima motorunun takılması durumunda oldukça uygun maliyetli olan <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold text-primary underline">saatlik vinç kiralama</Link> modelimiz devrededir. Öte yandan Etimesgut'taki devasa sitelerin veya Kahramankazan sanayi sitelerindeki geniş tesislerin boyama, aydınlatma bakımı gibi günlerce sürecek şantiye işleri için <Link href="/hizmetler/gunluk-vinc-kiralama" className="font-semibold text-primary underline">günlük vinç kiralama</Link> paketi sunuyoruz. Bulunduğunuz ilçedeki acil araç müsaitlik durumunu öğrenmek ve hemen fiyat almak için bizi 0551 606 68 78 numaramızdan günün her saati arayabilirsiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a
                href="tel:05516066878"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                <Phone size={20} />
                0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp'tan Konum Gönder
              </a>
            </div>

          </div>
        </div>

        <ServiceAreas />

        {/* Bölge Kartları Alanı */}
        <div className="bg-gray-50 py-16 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ankara İlçe Hizmet Rehberleri
              </h2>
              <p className="text-lg text-gray-600">
                Bulunduğunuz ilçeye özel sepetli vinç kiralama detaylarını ve bölgenizde sıkça gerçekleştirdiğimiz hizmetleri inceleyin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {districtsData.map((district) => (
                <Link
                  href={`/bolgeler/${district.slug}-sepetli-vinc-kiralama`}
                  key={district.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                >
                  <div className="relative h-56 md:h-64 w-full overflow-hidden">
                    <Image
                      src={district.image}
                      alt={`${district.name} Sepetli Vinç Kiralama`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{district.name}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {district.name} Sepetli Vinç Kiralama
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                      {district.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold mt-auto group-hover:gap-3 transition-all duration-300">
                      Bölge Detaylarını İncele &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Ankara'nın Farklı Bölgelerinde Sepetli Vinç Kullanım Alanları */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-center mb-8">Ankara’nın Farklı Bölgelerinde Sepetli Vinç Kullanım Alanları</h2>
              <p className="text-center mb-10 text-xl text-gray-500 font-light">Başkentin dinamik yapısı gereği, her ilçenin mimarisi ve ticaret dokusu farklı sepetli vinç kullanım senaryoları doğurmaktadır.</p>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin size={24}/> Çankaya ve Kızılay Bölgesi</h3>
                  <p>Ankara'nın en işlek ticaret merkezi olan bu bölgede gündüz trafik akışı çok yoğundur. Genellikle gece saatlerinde AVM dış cephe temizliği, lüks plazaların cam silim işleri ve yüksek binaların tepe noktalarına devasa reklam/tabela montajı için sepetli vinç kiralama hizmetine yoğun talep almaktayız. Trafiği kapatmadan çalışabilen kompakt araçlarımız bu hat için çok idealdir.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin size={24}/> Ostim ve Yenimahalle Bölgesi</h3>
                  <p>Ağır sanayinin merkezi sayılan Ostim OSB ve İvedik bölgesinde işin rengi tamamen endüstriyeldir. Fabrika çatı yalıtımı, devasa depo içi tavan aydınlatma montajı, güvenlik kamerası kurulumları ve endüstriyel dış cephe bakım işleri için işletmeler genellikle üretim hatlarını durdurmadan hızlıca iş görebilecek operatörlü platform vinçlerimizi saatlik veya günlük olarak kiralamaktadır.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin size={24}/> Etimesgut, Eryaman ve Bağlıca</h3>
                  <p>Çok bloklu dev sitelerin ve yeni konut projelerinin yükseldiği bu güzergahta daha çok "site yönetimi" merkezli talepler karşılanır. Yüksek katlı apartmanların dış cephe yalıtımı, düşen malzemelerin alınması, fırtınadan hasar gören çatı oluklarının onarımı ve site içi ortak alanların peyzajı (örneğin tehlikeli ağaçların budanması) için vinç hizmeti verilir.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin size={24}/> Keçiören ve Mamak</h3>
                  <p>Eski yerleşim yeri olan bu iki büyük ilçede sokakların dar ve yokuşlu olması en büyük dezavantajdır. Buna çözüm olarak filomuzdaki kısa şaseli ve manevra yeteneği yüksek sepetli araçlarımız kullanılır. Bölgede sıkça rastlanan klima dış ünite montajı, taşınma yardımı ve kentsel dönüşüm yan bina cephe onarımları güvenle halledilir.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin size={24}/> Sincan ve Kahramankazan</h3>
                  <p>Geniş yollara ve dev üretim tesislerine ev sahipliği yapan bu hat üzerinde, ağır tonajlı ve yüksek metrajlara ulaşabilen dev sepetli vinçlerimiz görev alır. Çelik konstrüksiyon fabrika kurulumları, yüksek totem tabela montajı ve lojistik depolarının cephe giydirme işlemleri günlük periyotlarla profesyonel şekilde tamamlanır.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin size={24}/> Gölbaşı ve İncek</h3>
                  <p>Ankara'nın lüks müstakil yaşam alanlarında, villaların çatı baca temizlikleri, akıllı ev dış cephe kamera kurulumları ve bahçe içerisindeki dev çam ağaçlarının budanması (peyzaj bakımları) gibi çevreyi ve çimleri bozmadan yapılması gereken ince operasyonlarda küçük metrajlı hafif vinçlerimiz tercih edilir.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Ankara Vinç Kiralama Hizmetlerimiz */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ankara Vinç Kiralama Hizmetlerimiz</h2>
              <p className="text-lg text-gray-600">Her türlü yüksekte çalışma ihtiyacınıza özel profesyonel hizmet paketlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Ankara Sepetli Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Operatörlü Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Saatlik Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Günlük Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Cephe Temizliği İçin Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/tabela-montaj" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Tabela Montaj İçin Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/elektrik-bakim" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Elektrik Bakım İçin Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-lg transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Ağaç Budama İçin Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">Hizmeti İncele <ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* SSS (FAQ) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Bölgeler ve vinç kiralama süreçleri hakkında aklınıza takılan sorular.</p>
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

        <CallToAction
          title="Bulunduğunuz Bölgeye Vinç İsteyin"
          message="Merhaba, ilçemize sepetli vinç talebinde bulunmak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
      
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
