import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight, HardHat, Building2, Zap, PenTool, MonitorPlay, Focus, Trash2, Lightbulb, MonitorUp, Camera, CalendarDays, ChevronRight, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceRegionalLinks from '@/components/ServiceRegionalLinks';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Tabela Montajı Vinç Kiralama | Sepetli Vinç Hizmeti',
  description: 'Ankara’da totem tabela, reklam panosu ve dış cephe tabela montajı için güvenli sepetli vinç kiralama hizmeti. Uygun fiyatlı ve hızlı teklif alın: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/tabela-montaj'),
  openGraph: {
    title: 'Ankara Tabela Montajı Vinç Kiralama | Sepetli Vinç Hizmeti',
    description: 'Ankara’da totem tabela, reklam panosu ve dış cephe tabela montajı için güvenli sepetli vinç kiralama hizmeti. Uygun fiyatlı ve hızlı teklif alın: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/tabela-montaj'),
  },
};

const faqs = [
  {
    q: 'Tabela montajı için sepetli vinç gerekir mi?',
    a: 'Kesinlikle. Özellikle mağaza üstleri, AVM dış cepheleri ve plaza girişleri gibi yüksek ve iskele kurmanın zor olduğu noktalara tabela asabilmek için en pratik ve güvenli yöntem sepetli vinç kullanımıdır.'
  },
  {
    q: 'Sepetli vinç ile tabela montajı güvenli mi?',
    a: 'Çok güvenlidir. İş güvenliği sertifikalı operatörlerimiz aracı sabitler ve rüzgar direncine göre pozisyon alarak tabelayı asacak olan ekibe sıfır sarsıntı ve %100 güvenli bir platform sunar.'
  },
  {
    q: 'Tabela montajı kaç saat sürer?',
    a: 'Tabelanın boyutuna, bağlantı noktalarının durumuna ve montajlanacak yerin yüksekliğine bağlı olarak değişmekle birlikte genellikle standart mağaza tabelaları 1-3 saat arasında tamamlanmaktadır.'
  },
  {
    q: 'Aynı gün vinç gelir mi?',
    a: 'Rüzgardan hasar görmüş acil tabela onarımları ve sökümleri veya ani gelişen montaj ihtiyaçlarınız için Ankara genelinde aynı gün araç yönlendirmesi yapabiliyoruz.'
  }
];

export default function TabelaMontajPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Tabela Montaj Sepetli Vinç',
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
        serviceType: 'Tabela Montaj Vinç Hizmeti',
        description: "Ankara’da tabela montajı için sepetli vinç kiralama hizmeti. AVM, iş merkezi, fabrika ve yüksek binalarda güvenli montaj.",
        url: getCanonicalUrl('/hizmetler/tabela-montaj')
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
            name: 'Tabela Montajı',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/tabela-montaj`
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
              alt="ankara tabela montaj sepetli vinç"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Tabela Montajı', href: '/hizmetler/tabela-montaj' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Tabela Montajı İçin Sepetli Vinç Hizmeti
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara genelinde yüksek noktalara tabela montajı, reklam panosu kurulumu, totem tabela yerleştirme ve tabela değişim işlemleri için operatörlü sepetli vinç hizmeti sunuyoruz. AVM, iş merkezi, fabrika ve cadde üzerindeki yüksek tabelalar için hızlı ve güvenli çözümler sağlıyoruz.
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
                  Tabela Montaj Fiyatı Al
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
                  <div className="bg-primary/20 p-2 rounded-lg"><Focus size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Yüksek Noktalara Güvenli Erişim</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><HardHat size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Operatörlü Vinç Hizmeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Zap size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Ankara Geneli Hızlı Yönlendirme</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Building2 size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">AVM & Fabrika Deneyimi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Niyet Odaklı Giriş */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Tabela Montajı İçin Neden Sepetli Vinç Kullanılır?</h2>
              <p>
                Mağaza açılışları, kurumsal kimlik değişimleri veya reklam panolarının yenilenmesi gibi süreçlerde en zorlu aşama genellikle tabelanın yerine asılmasıdır. Tabela montajı genellikle yüksek ve ulaşılması zor alanlarda, bazen ana caddelerdeki trafik akışının tam üstünde veya plazaların yüksek girişlerinde yapılır. Bu denli zorlu lokasyonlarda işi şansa bırakmak mümkün değildir. Sepetli vinç sayesinde montaj ekibi havada güvenli bir şekilde çalışır, devasa tabela milimetrik olarak doğru konuma yerleştirilir ve işlem hiçbir güvenlik zafiyeti verilmeden kısa sürede tamamlanır.
              </p>
              <p>
                Endüstri standardı olarak, <strong>ankara tabela montaj sepetli vinç</strong> uygulamaları iskele kurulumuna göre çok daha hızlı ve ekonomik bir çözümdür. İskele kurup sökmek günlerinizi alabilecekken, <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold underline">Ankara sepetli vinç kiralama</Link> sistemimizle sadece birkaç saat içinde işleminizi bitirebilirsiniz. Bu bilgi sektörel olarak kanıtlanmıştır; zira tabela montajı sepetli vinçlerin en yaygın, en çok talep gören ve en verimli olduğu kullanım alanlarından biridir.
              </p>
              <p>
                Özellikle metrelerce yüksekteki devasa totem tabelaların kurulumu esnasında sarsıntısız ve kusursuz bir platform gereklidir. Bu nedenle sunduğumuz <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold underline">operatörlü vinç kiralama</Link> paketimiz sayesinde vincin kontrolü tamamen profesyonel ellere bırakılır. Kısa süreli harf değişimleri veya arıza giderme işlemlerinde <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link> esnekliğinden faydalanarak bütçenizi koruyabilirsiniz. İhtiyacınız olan her türlü yüksek erişim aracı için geniş filomuzla <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> olarak yanınızdayız.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Hizmet Kapsamı */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tabela Montajında Verdiğimiz Hizmetler</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kurumsal reklam süreçlerinizde her ebatta ve türdeki tabela işlemleri için platform desteği sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Işıklı ve Işıksız Tabela Montajı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Standart mağaza cepheleri ve dükkan üstlerine konumlandırılacak her türlü kutu harf, pleksi ve florasan aydınlatmalı tabelaların güvenli ve terazisinde kurulumu.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Tabela montajı için hemen <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <MonitorUp size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Totem Tabela Kurulumu</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Fabrika girişleri, benzin istasyonları ve otoyol kenarlarında yer alan devasa yükseklikteki ağır totem tabelaların birleştirilmesi ve direk üzeri montajı işlemleri.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Tabela montajı için hemen <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AVM ve Plaza Tabela Montajı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Yüksek katlı ticari binaların zirvesine yerleştirilen kurumsal çatı tabelalarının ve AVM dış cephe markalama işlemlerinin vinç ile emniyetli olarak yapılması.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Tabela montajı için hemen <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reklam Panosu ve Billboard Montajı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Şehir içi duvar reklamları, bina giydirmeleri ve ayaklı billboardların afiş değişim veya metal konstrüksiyon kurum süreçlerinde sepetten güvenli çalışma ortamı.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Tabela montajı için hemen <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Trash2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eski Tabela Söküm ve Değişim</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Rüzgardan hasar görmüş, kopmak üzere olan tehlikeli tabelaların sökümü veya yer değiştiren mağazaların eski logolarının sökülüp yeni adrese güvenle taşınması.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Tabela montajı için hemen <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <MonitorPlay size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">LED ve Dijital Tabela Kurulumu</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Hassas elektronik bileşenler barındıran LED ekranların ve kayan yazı tabelalarının sarsılmadan, zarar görmeden bina cephesine özenle entegre edilmesi.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Tabela montajı için hemen <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Avantajlar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tabela Montajında Sepetli Vinç Kullanmanın Avantajları</h2>
            <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Personeliniz için %100 <strong>güvenli çalışma ortamı</strong> sunar, düşme riskini sıfırlar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Platformun manevra kabiliyeti ile tabelada <strong>milimetrik konumlandırma</strong> yapmanızı sağlar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Hazırlık gerektirmeyen araçlarla sahada anında işe başlayarak <strong>hızlı kurulum</strong> gerçekleştirilir.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Saatler alan ve masraflı olan <strong>iskeleye göre daha ekonomik</strong> ve akıllıca bir çözümdür.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Araç park sorunu olan noktalarda <strong>trafik ve dar alanlara uyum</strong> sağlayan kompakt makine seçenekleri mevcuttur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 text-lg">Ankara içi geniş araç ağımızla talebinize <strong>Ankara'da hızlı hizmet</strong> yanıtı verilir.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ara CTA */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Tabelanız İçin Güvenli Platform Hemen Hazır</h3>
            <p className="text-primary-foreground mb-8 text-lg">Montaj yapılacak yerin fotoğrafını WhatsApp üzerinden paylaşın, operasyonu anında planlayalım.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <MessageCircle size={24} />
                Hızlı Teklif Al
              </a>
            </div>
          </div>
        </section>

        {/* 5. Lokal SEO */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Tabela Montajı İçin Vinç Hizmeti Verdiğimiz Bölgeler</h2>
              <p>
                Reklamcılık sektörünün en aktif olduğu ve sürekli mağaza/mekan döngüsünün yaşandığı Ankara’da, <strong>tabela montaj vinç kiralama</strong> talepleri şehrin her lokasyonundan gelmektedir. Ticari akışın yoğun olduğu merkez ilçelerde ve sanayinin kalbi olan bölgelerde sokağın yapısına en uygun aracı yönlendirmek bizim uzmanlık alanımızdır. Çankaya, Kızılay, Etimesgut, Eryaman, Bağlıca, Yenimahalle, Ostim, Keçiören, Mamak ve Sincan hattı boyunca vinç ağımız kesintisiz çalışmaktadır.
              </p>
              
              <p>
                Özellikle ticaretin ve yaya trafiğinin en yoğun olduğu Çankaya ve Kızılay bölgelerinde, cadde üstü lüks mağaza ve kurumsal marka tabela montaj işlemleri çok sıktır. Buralarda yaya güvenliğini tehlikeye atmadan, gece veya sabahın erken saatlerinde <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="font-semibold underline">Çankaya sepetli vinç kiralama</Link> ekiplerimiz tabela değişim işlemlerini profesyonelce yürütür. 
              </p>

              <p>
                Öte yandan ağır sanayinin ve toptan ticaretin merkezi olan Ostim ve Yenimahalle bölgesinde ise durum daha çok endüstriyel boyutlardadır. Dev harflerden oluşan sanayi tabela işleri, fabrika çatı logoları ve depolama alanı marka giydirmelerinde platformlarımız sürekli görev alır. Bu hat üzerinde ve daha batıya açılan Sincan ile Kazan bölgelerinde de büyük fabrika tabelaları ve yönlendirme totemleri için büyük metrajlı vinçlerimiz sıklıkla tercih edilmektedir.
              </p>

              <p>
                Şehrin yoğun yaşam alanları olan Etimesgut, Eryaman ve Bağlıca üçgeninde ise genellikle yeni yapılan devasa site yönetimlerinin giriş tabelaları, otoyol kenarı reklam panoları ve yerel AVM iş merkezi tabelaları öne çıkmaktadır. Ankara genelinde özellikle <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Etimesgut sepetli vinç kiralama</Link> taleplerine hızlı dönüş sağlıyoruz. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Keçiören sepetli vinç</Link> hizmetlerinde dar sokak ve apartman cephe işleri için uygun araç yönlendirmesi yapıyoruz. <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Ostim sepetli vinç kiralama</Link> hizmetlerinde fabrika, depo ve sanayi bakım işleri öne çıkarken, <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Yenimahalle vinç kiralama</Link> taleplerinde hem sanayi hem konut bölgelerine hızlı hizmet veriyoruz. İşletmenizin konumu veya tabela boyutunuz ne olursa olsun, operasyonunuza tam uyumlu bir planlama yapmak için <Link href="/bolgeler" className="font-semibold underline text-primary">Ankara hizmet bölgeleri</Link> sayfamız üzerinden tüm lokasyon kapsamımızı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <ServiceRegionalLinks variant="A" />

        {/* 6. Saatlik / Günlük Bağlantı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Tabela Montajı İçin Saatlik mi Günlük mü Vinç?</h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-blue-600 w-8 h-8" />
                  Saatlik Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Hızlı tabela harf sökümü ve montajı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Küçük dükkan ve işletme vitrin üstü işleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Aydınlatma arızası tamiri veya folyo yenilemesi</span>
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
                    <span className="text-gray-800 font-medium">Büyük projeler ve çok şubeli mağaza giydirmeleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">AVM çatı tabelası veya ağır totem direk montajı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Uzun süren kompozit oyma ve LED döşeme süreçleri</span>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ankara Tabela Montaj Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p>
                  <strong>Tabela montajı için vinç</strong> kiralama ücretleri, işin karmaşıklığına ve montajın yapılacağı alanın fiziksel şartlarına göre değişir. Montaj esnasında en doğru platformu size rezerve edebilmek adına, fiyatlarımızı şu faktörlere göre esnek olarak belirliyoruz:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
                  <ul className="space-y-3 m-0">
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> <strong>Tabela boyutu</strong> ve ağırlığı</li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Tabelanın asılacağı <strong>yükseklik</strong></li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Tahmini montaj <strong>çalışma süresi</strong></li>
                  </ul>
                  <ul className="space-y-3 m-0">
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> İşlem yapılacak olan <strong>lokasyon</strong></li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Kurulum sahasının ve <strong>işin zorluğu</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Fiyat almak için 0551 606 68 78 numarasını arayın veya WhatsApp’tan yazın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> Hemen Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7.5 Gerçek Proje Örneği */}
        <section className="py-16 bg-blue-50 border-b border-blue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Gerçek Proje Örneği</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ankara Keçiören Ovacık bölgesinde Özka Lastik için gerçekleştirdiğimiz tabela montajı çalışmasında, sepetli vinç desteği ile kurulum işlemi yalnızca 4 saat içinde tamamlandı.
                </p>
                <Link href="/blog/kecioren-ovacik-tabela-montaj-sepetli-vinc-destegi" className="inline-flex items-center justify-center md:justify-start gap-1 font-semibold underline text-primary hover:text-primary-dark transition-colors text-lg">
                  Projenin tüm detaylarını inceleyin <ChevronRight size={20} className="no-underline" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Süreç Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Tabela Montaj Süreci Nasıl İşler?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Phone size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Arayın / WhatsApp Yazın</h3>
                <p className="text-gray-600 text-sm">Bize çağrı merkezimizden veya doğrudan mesaj yoluyla montaj talebinizi iletin.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Camera size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Tabela ve Konum Gönderin</h3>
                <p className="text-gray-600 text-sm">Asılacak tabelanın görselini, tahmini ağırlığını ve binanın adresini iletin.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><CalendarDays size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Planlama Yapılır</h3>
                <p className="text-gray-600 text-sm">Uzman ekibimiz, en güvenli yükseklik sınıfına sahip sepetli vinci işiniz için rezerve eder.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><ArrowRight size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Vinç Yönlendirilir</h3>
                <p className="text-gray-600 text-sm">Araç sahaya belirtilen saatte gelir ve tabela montajı sorunsuz bir şekilde tamamlanır.</p>
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
              <p className="text-lg text-gray-600">Tabela montajı süreçleri hakkında merak edilenler.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tabelanız İçin Hızlı ve Güvenilir Çözüm Ortağınız</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Markanızın en önemli temsilcisi olan tabelalarınızı, güvenilir operatörlerimiz ve modern sepetli vinçlerimizle aynı gün içinde yerine asıyoruz.</p>
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
                WhatsApp'tan Konum Gönder
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
