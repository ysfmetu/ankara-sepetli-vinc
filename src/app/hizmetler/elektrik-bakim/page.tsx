import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight, HardHat, Zap, ShieldAlert, Lightbulb, Camera, CalendarDays, ChevronRight, Clock, AlertTriangle, Radio, Settings, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceRegionalLinks from '@/components/ServiceRegionalLinks';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Elektrik Bakım ve Aydınlatma İçin Vinç Kiralama',
  description: 'Ankara’da sokak lambası, direk bakımı, aydınlatma ve yüksek gerilim işleri için operatörlü vinç kiralama hizmeti. Hemen arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/elektrik-bakim'),
  openGraph: {
    title: 'Ankara Elektrik Bakım ve Aydınlatma İçin Vinç Kiralama',
    description: 'Ankara’da sokak lambası, direk bakımı, aydınlatma ve yüksek gerilim işleri için operatörlü vinç kiralama hizmeti. Hemen arayın: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/elektrik-bakim'),
  },
};

const faqs = [
  {
    q: 'Elektrik bakım için vinç gerekir mi?',
    a: 'Kesinlikle. Özellikle 5 metreyi aşan sokak aydınlatmaları, trafo direkleri ve baz istasyonlarındaki çalışmalarda merdiven kullanmak yasal olarak yasak ve hayati risk taşır. Vinç zorunlu ve en güvenli araçtır.'
  },
  {
    q: 'Elektrik direği bakımında vinç zorunlu mu?',
    a: 'Evet, İş Sağlığı ve Güvenliği (İSG) standartları gereği yüksekte yapılan elektrik hatları ve direk bakım çalışmalarında düşme ve çarpılma riskine karşı sepetli vinç kullanımı yasal bir zorunluluktur.'
  },
  {
    q: 'Aynı gün vinç gelir mi?',
    a: 'Elektrik arızalarının aciliyetinin farkındayız. Ankara genelinde boşta aracımız bulunması durumunda acil müdahale gerektiren enerji ve aydınlatma arızalarına aynı gün hızla yönlendirme yapabiliyoruz.'
  },
  {
    q: 'Operatör dahil mi?',
    a: 'Tüm sepetli vinç kiralama hizmetlerimizde, aracı sıfır riskle sabitleyecek ve sepeti kontrol edecek olan iş güvenliği sertifikalı operatörümüz fiyata ve hizmete dahildir.'
  }
];

export default function ElektrikBakimPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Elektrik Bakım Sepetli Vinç',
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
        serviceType: 'Elektrik Bakım Vinç Hizmeti',
        description: "Ankara’da elektrik direği, aydınlatma ve altyapı bakım işleri için operatörlü sepetli vinç kiralama hizmeti.",
        url: getCanonicalUrl('/hizmetler/elektrik-bakim')
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
            name: 'Elektrik Bakım',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/elektrik-bakim`
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
              alt="ankara elektrik bakım sepetli vinç"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Elektrik Bakım', href: '/hizmetler/elektrik-bakim' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Elektrik Bakım İçin Sepetli Vinç Hizmeti
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara genelinde elektrik direkleri, sokak aydınlatmaları, trafik sinyalizasyonu, baz istasyonları ve enerji altyapısı bakım işleri için operatörlü sepetli vinç hizmeti sunuyoruz. Yüksek riskli elektrik çalışmalarında güvenli, hızlı ve profesyonel çözümler sağlıyoruz.
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
                  WhatsApp
                </a>
                <a
                  href="#fiyatlar"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Elektrik Bakım Fiyatı Al
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
                  <div className="bg-primary/20 p-2 rounded-lg"><Zap size={24} className="text-yellow-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Yüksek Voltaj Güvenliği</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><HardHat size={24} className="text-yellow-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Operatörlü Vinç Hizmeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Activity size={24} className="text-yellow-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Ankara Geneli Hızlı Müdahale</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Settings size={24} className="text-yellow-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Elektrik ve Altyapı Deneyimi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Niyet Odaklı Giriş */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Elektrik Bakımında Neden Sepetli Vinç Kullanılır?</h2>
              <p>
                Enerji nakil hatları, sokak aydınlatmaları ve trafo direkleri gibi elektrik bakım işleri genellikle çok yüksek ve son derece riskli alanlarda yapılır. Akıma kapılma tehlikesinin yanı sıra yüksekten düşme riski, elektrik teknisyenlerinin en çok karşılaştığı mesleki kazaların başında gelir. Merdiven ile yapılan çalışmalarda dengenin kaybolması an meselesiyken, <strong>ankara elektrik bakım sepetli vinç</strong> kiralama hizmeti sayesinde teknisyenler tamamen izole, etrafı korkuluklarla çevrili ve milimetrik hareket edebilen güvenli bir platformda çalışır.
              </p>
              <p>
                Sektörel olarak kanıtlanmıştır ki; elektrik bakım, altyapı arızaları ve aydınlatma çalışmaları sepetli vinçlerin en kritik, en yaygın ve en olmazsa olmaz kullanım alanlarından biridir. <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold underline">Ankara sepetli vinç kiralama</Link> departmanımız, enerji şirketleri, site yönetimleri ve taşeron firmalar için acil arıza durumlarında dakikalar içinde müdahale edebilecek donanıma sahiptir.
              </p>
              <p>
                Rüzgarlı havalarda kopan kablolar veya gece karanlığında patlayan aydınlatma armatürlerine müdahale ederken, aracın güvenliği tamamen deneyimli operatörümüzün sorumluluğundadır. Bu sebeple <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold underline">operatörlü vinç kiralama</Link> elektrik işlerinde hayati öneme sahiptir. Acil ve kısa süreli arızalarda maliyeti minimumda tutmak için <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link> paketimizden yararlanabilirsiniz. Şehrin enerji altyapısını ayakta tutmak için <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> olarak daima sahadayız.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Hizmet Kapsamı */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Elektrik Bakımda Verdiğimiz Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Yüksekte çalışma gerektiren tüm arıza, bakım ve sinyalizasyon süreçlerinde platform desteğimizle yanınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sokak Aydınlatma Bakımı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Otoyollar, parklar ve site içerisindeki metrelerce yükseklikte bulunan sokak aydınlatma armatürlerinin ampul değişimi ve kablo arıza onarımları.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Elektrik bakım vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Elektrik Direği Arıza Müdahalesi</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Fırtına, kar veya ağır kış şartlarında devrilme tehlikesi olan, kabloları kopan ahşap veya beton elektrik direklerindeki arızalara anında müdahale.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Elektrik bakım vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trafik Sinyalizasyon Sistemleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Kavşaklarda ve otoyol gişelerinde yüksek direkler üzerinde yer alan trafik ışıkları ile yönlendirme panolarının elektronik bakımları ve ampul değişimleri.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Elektrik bakım vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Camera size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobese ve Kamera Sistemleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Plaza dış cephelerine, site girişlerine veya ana caddelere kurulan güvenlik kameraları ve PTS (Plaka Tanıma Sistemleri) cihazlarının montaj ve bakımları.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Elektrik bakım vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Radio size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Baz İstasyonu ve Anten Bakımı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Bina çatılarına veya kırsal alandaki yüksek direklere kurulan GSM baz istasyonlarının ve dev anten sistemlerinin teknisyenlerce periyodik bakımı.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Elektrik bakım vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Settings size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enerji Hatları ve Dağıtım Panoları</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Şehir içi elektrik nakil şebekelerinin hat çekme, izolatör değişimi ve direk üstü dağıtım panolarının montaj ile güvenli test süreçleri.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Elektrik bakım vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. GÜVENLİK (ÇOK KRİTİK BÖLÜM) */}
        <section className="py-16 bg-red-50 border-y border-red-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center flex items-center justify-center gap-3">
              <ShieldAlert size={36} className="text-red-600" />
              Elektrik Çalışmalarında Sepetli Vinç ile Güvenli Çalışma
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-red-100">
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Elektrik direklerinde veya trafo hatlarında çalışmak, vinç kiralama sektöründeki <strong>en kritik ve en riskli operasyondur.</strong> Yüksek voltaj riski, küçük bir denge kaybında veya yanlış bir adımda ölümcül sonuçlar doğurabilir.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Merdiven ile Çalışmanın Tehlikesi:</strong> 5 metre üzerindeki direklerde merdiven kullanmak hem yasal iş güvenliği mevzuatlarına aykırıdır hem de iki eli serbest bırakarak elektrik akımına müdahale etmeyi imkansız hale getirir.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Yalıtımlı Sepet Avantajı:</strong> Yüksek gerilim hatlarında kullanılmak üzere tasarlanmış fiberglas veya yalıtımlı sepetlerimiz, teknisyeni doğrudan akım çarpmasına karşı ikinci bir kalkan olarak korur.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>İş Güvenliği:</strong> Düşme önleyici emniyet kemerlerinin doğrudan bağlanabileceği standartlara uygun sepet bağlantı noktaları, sıfır sarsıntı ve risk ile operasyon imkanı tanır.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Operatörlü Çalışma Önemi:</strong> Aşırı rüzgar, tel kopması veya hatta elektrik gelmesi durumunda, teknisyenin aşağıdan güvenle ve saniyeler içinde kurtarılmasını sağlayan tek kişi işin başındaki sertifikalı operatördür.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ara CTA */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Arızalara Anında ve Güvenle Müdahale Edin</h3>
            <p className="text-primary-foreground mb-8 text-lg">Acil arıza veya planlı bakım işlemleriniz için vinç taleplerinizi bize şimdi iletin.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <Phone size={24} />
                Acil Müdahale İste
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

        {/* 5. Lokal SEO */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Elektrik Bakım Vinç Hizmeti Verdiğimiz Bölgeler</h2>
              <p>
                Ankara gibi devasa ve kesintisiz enerji akışına ihtiyaç duyan bir metropolde, yerel elektrik arızalarının dakikalar içinde çözümlenmesi gerekir. Bu yüzden <strong>elektrik direk bakım vinç kiralama</strong> hizmetlerimizde şehrin kritik ilçelerine stratejik olarak en uygun aracı yönlendiriyoruz. Çankaya, Kızılay, Etimesgut, Eryaman, Yenimahalle, Ostim, Keçiören, Mamak, Sincan ve Kazan boyunca enerji hatlarının bakımında kamu ve özel sektörle eşgüdümlü çalışıyoruz.
              </p>
              
              <p>
                Trafiğin ve yaya yoğunluğunun maksimum düzeyde olduğu Çankaya ve Kızılay'da şehir içi aydınlatma, sinyalizasyon lambaları ve büyük bina dış mekan aydınlatmalarının onarımı oldukça fazladır. Bu lokasyonlarda <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="font-semibold underline">Çankaya sepetli vinç kiralama</Link> araçlarımız çevre güvenliğini tehlikeye atmadan, gece vardiyalarında dahi hızlı ampul/kablo değişimleri sağlar.
              </p>

              <p>
                Sanayinin şalterinin hiç inmediği Ostim ve Yenimahalle'de ise daha çok sanayi elektrik bakım işleri, ağır üretim tesislerinin yüksek voltaj enerji dağıtım panoları ve çatı tipi güneş enerjisi bağlantı arızaları ön plana çıkar. Ağır vasıta ve vinçlerin yoğun olduğu bu alanlarda tecrübeli operatörlerimiz devasa fabrika aydınlatmaları için aralıksız hizmet verir.
              </p>

              <p>
                Modern yerleşim yerleri olan Etimesgut ve Eryaman’da ise yoğun bir site bakım işleri sirkülasyonu vardır. Devasa site yönetimlerinin bahçe aydınlatmaları, çevre duvarı güvenlik kamera kurulumları ve kablo çekimi operasyonlarında ekiplerimiz binaların peyzaj alanlarına zarar vermeden yüksek noktalara ulaşır. Ankara genelinde özellikle <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Etimesgut sepetli vinç kiralama</Link> taleplerine hızlı dönüş sağlıyoruz. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Keçiören sepetli vinç</Link> hizmetlerinde dar sokak ve apartman cephe işleri için uygun araç yönlendirmesi yapıyoruz. <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Ostim sepetli vinç kiralama</Link> hizmetlerinde fabrika, depo ve sanayi bakım işleri öne çıkarken, <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Yenimahalle vinç kiralama</Link> taleplerinde hem sanayi hem konut bölgelerine hızlı hizmet veriyoruz. Üretim üssü olan Sincan ve Kazan’da da durum farklı değildir; burada fabrika elektrik işleri ve OSB sınırları içindeki trafo bağlantı revizyonlarında dayanıklı, yüksek metrajlı vinçlerimiz kullanılarak işlemler en güvenli şekilde yönetilir. Faaliyet gösterdiğimiz diğer tüm semtleri ve lokasyon detaylarını görmek için <Link href="/bolgeler" className="font-semibold underline text-primary">Ankara hizmet bölgeleri</Link> listemize göz atabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <ServiceRegionalLinks variant="B" />

        {/* 6. Saatlik / Günlük Bağlantı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Elektrik Bakım İçin Saatlik mi Günlük mü Vinç?</h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-blue-600 w-8 h-8" />
                  Saatlik Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Acil arıza müdahale ve kısa devre çözümleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Kopan tel, patlayan ampul veya sigorta değişimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Tek bir direk veya aydınlatma onarımı</span>
                  </li>
                </ul>
                <Link href="/hizmetler/saatlik-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl border-2 border-blue-600 text-blue-700 font-bold hover:bg-blue-50 transition-colors gap-2">
                  saatlik vinç <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-primary/5 border-2 border-primary/30 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <CalendarDays className="text-primary w-8 h-8" />
                  Günlük Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Geniş bakım çalışmaları ve mahalle boyu yenilemeler</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Tüm site aydınlatmalarının veya kamera sistemlerinin montajı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Yeni fabrika veya şantiye elektrik altyapı döşenmesi</span>
                  </li>
                </ul>
                <Link href="/hizmetler/gunluk-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors gap-2">
                  günlük vinç <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Fiyat Bölümü */}
        <section id="fiyatlar" className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ankara Elektrik Bakım Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p>
                  <strong>Elektrik arıza vinç kiralama</strong> ve rutin bakım taleplerinde fiyatlandırma, standart işlemlere göre daha hassas değişkenlere bağlıdır. Can güvenliğinin ön planda olduğu bu işlemlerde teklif hazırlarken şu faktörler dikkate alınır:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
                  <ul className="space-y-3 m-0">
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Ulaşılacak <strong>yükseklik</strong> (metre)</li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Tahmini arıza veya onarım <strong>süresi</strong></li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Aynı gün <strong>acil müdahale</strong> durumu</li>
                  </ul>
                  <ul className="space-y-3 m-0">
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Arızanın yaşandığı <strong>lokasyon</strong></li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Yüksek gerilim vb. <strong>risk seviyesi</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Fiyat almak için 0551 606 68 78 numarasını arayın.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Elektrik Bakım Süreci Nasıl İşler?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Phone size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Arayın</h3>
                <p className="text-gray-600 text-sm">Elektrik arızası veya planlı bakım talebiniz için çağrı merkezimizi arayın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><MapPin size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Konum Gönderin</h3>
                <p className="text-gray-600 text-sm">Arızanın yaşandığı direk, trafo veya aydınlatma alanının konumunu iletin.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><CalendarDays size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Planlama</h3>
                <p className="text-gray-600 text-sm">Araç yüksekliği belirlenip, en uygun izolasyonlu ve güvenli sepetli vinç ayarlanır.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Activity size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Müdahale</h3>
                <p className="text-gray-600 text-sm">Operatör aracı güvenle sabitler, teknisyeniniz emniyetli bir şekilde arızayı giderir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. İç Link Bloğu */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">İlgili Hizmetler</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Sepetli Vinç Kiralama</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Operatörlü Vinç</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Saatlik Vinç</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Günlük Vinç</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
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

        {/* 10. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Elektrik ve aydınlatma bakım süreçlerinde vinç kullanımı hakkında sorularınız.</p>
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

        {/* Alt CTA */}
        <section className="bg-gray-900 py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elektrik Arızalarında Sıfır Risk, Hızlı Çözüm</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Tehlikeli ve yüksek elektrik onarımlarında teknisyenlerinizin can güvenliğini riske atmayın. Operatörlü sepetli vinç kiralama hizmetimizle hemen tanışın.</p>
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
                Acil Müdahale İste
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
