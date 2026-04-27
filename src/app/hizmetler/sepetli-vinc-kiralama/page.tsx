import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ShieldCheck, Clock, MapPin, CheckCircle2, ArrowRight, Wrench, Zap, Trees, Building2, PenTool, HardHat, Camera, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Ankara Sepetli Vinç Kiralama | 7/24 Operatörlü Vinç Hizmeti',
  description: "Ankara sepetli vinç kiralama hizmetiyle tabela montajı, cephe temizliği, ağaç budama ve yüksek erişim işleriniz için 7/24 operatörlü vinç desteği alın.",
  alternates: getMetadataAlternates('/hizmetler/sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Ankara Sepetli Vinç Kiralama | 7/24 Operatörlü Vinç Hizmeti',
    description: "Ankara sepetli vinç kiralama hizmetiyle tabela montajı, cephe temizliği, ağaç budama ve yüksek erişim işleriniz için 7/24 operatörlü vinç desteği alın.",
    url: getCanonicalUrl('/hizmetler/sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Ankara sepetli vinç kiralama fiyatları nasıl belirlenir?',
    a: 'Fiyatlar vincin ulaşması gereken maksimum çalışma yüksekliği, kiralama süresi (saatlik veya günlük), işin yapılacağı lokasyon ve operatör gereksinimine göre belirlenir. En doğru fiyatı almak için işinizin detaylarını bize iletmeniz yeterlidir.'
  },
  {
    q: 'Sepetli vinç saatlik kiralanabilir mi?',
    a: 'Evet, özellikle kısa süren tabela montajları, lamba değişimleri veya hızlı arıza müdahaleleri için bütçe dostu saatlik sepetli vinç kiralama hizmetimiz bulunmaktadır.'
  },
  {
    q: 'Günlük sepetli vinç kiralama hangi işler için uygundur?',
    a: 'Dış cephe temizliği, mantolama tamiratları, kapsamlı ağaç budama işlemleri veya tüm gün sürecek şantiye çalışmaları için günlük kiralama hem daha ekonomik hem de pratiktir.'
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: 'Evet, güvenliğiniz bizim için her şeyden önemlidir. Bu nedenle tüm sepetli vinç kiralama hizmetlerimizde iş güvenliği lisanslı, alanında uzman operatörlerimiz hizmete dahildir.'
  },
  {
    q: 'Aynı gün sepetli vinç yönlendirebilir misiniz?',
    a: 'Ankara’nın farklı noktalarındaki geniş araç filomuz sayesinde uygunluk durumuna göre acil taleplerinize aynı gün, hatta birkaç saat içinde araç sevk edebiliyoruz.'
  },
  {
    q: 'Sepetli vinç kaç metreye kadar çıkar?',
    a: 'İşletmemizin filosunda 15 metreden başlayarak 75 metreye kadar farklı yüksekliklere güvenle ulaşabilen sepetli vinç ve platform seçenekleri mevcuttur.'
  },
  {
    q: 'Tabela montajı için sepetli vinç kullanılır mı?',
    a: 'Kesinlikle. Açık hava reklamcılığı, bina cephesi totemleri ve mağaza tabelalarının güvenli, pratik ve hızlı bir şekilde montajı için sepetli vinçler en doğru araçlardır.'
  },
  {
    q: 'Ağaç budama için sepetli vinç kiralanır mı?',
    a: 'Binalara ve elektrik hatlarına yakın, merdivenle ulaşılamayan yüksek dalların güvenli ve çevreye zarar vermeden kesimi için sepetli vinç kiralamaktayız.'
  },
  {
    q: 'Ankara’nın hangi ilçelerine hizmet veriyorsunuz?',
    a: 'Çankaya, Yenimahalle, Keçiören, Etimesgut, Sincan, Mamak, Altındağ ve Gölbaşı başta olmak üzere Ankara’nın tüm ilçelerine kesintisiz hizmet sağlıyoruz.'
  }
];

export default function SepetliVincKiralamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        },
        serviceType: 'Sepetli Vinç Kiralama',
        telephone: siteConfig.contact.phoneE164,
        description: "Ankara sepetli vinç kiralama hizmetiyle tabela montajı, cephe temizliği, ağaç budama ve yüksek erişim işleriniz için 7/24 operatörlü vinç desteği alın.",
        url: getCanonicalUrl('/hizmetler/sepetli-vinc-kiralama')
      },
      {
        '@type': 'LocalBusiness',
        name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
        url: SEO_CONFIG.baseUrl,
        telephone: siteConfig.contact.phoneE164,
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
            name: 'Sepetli Vinç Kiralama',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/sepetli-vinc-kiralama`
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-24 pb-0">
        
        {/* 1. Hero Alanı */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-30">
            {/* Using Next Image for optimization */}
            <Image
              src="/images/hero-bg.jpg"
              alt="ankara sepetli vinç kiralama hizmeti"
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
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Sepetli Vinç', href: '/hizmetler/sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Sepetli Vinç Kiralama
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara’nın tüm ilçelerinde tabela montajı, dış cephe temizliği, elektrik bakım, ağaç budama, bina bakım-onarım ve yüksek erişim gerektiren tüm işler için operatörlü sepetli vinç kiralama hizmeti sunuyoruz. Saatlik, günlük ve proje bazlı çözümlerle aynı gün hızlı yönlendirme sağlıyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30"
                >
                  <Phone size={20} />
                  Hemen Ara
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
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
                  Fiyat Bilgisi Al
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
                  <div className="bg-primary/20 p-2 rounded-lg"><Clock size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">7/24 Ankara Geneli Hizmet</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><ShieldCheck size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Operatörlü Güvenli Çalışma</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><CheckCircle2 size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Saatlik ve Günlük Kiralama</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Wrench size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Tabela, Cephe, Budama İşleri</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Kısa Giriş Bölümü */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Profesyonel Sepetli Vinç Hizmeti</h2>
              <p>
                Gelişen inşaat teknolojileri ve mimari yapılar, yüksekte çalışmayı gerektiren operasyonları şehrin ayrılmaz bir parçası haline getirmiştir. İster ticari bir binanın cam temizliği olsun, ister sokaktaki bir elektrik arızası, yerden metrelerce yükseğe güvenli bir şekilde ulaşmak hayati önem taşır. İşte bu noktada <strong>ankara sepetli vinç kiralama</strong> hizmetlerimiz, geleneksel ve riskli yöntemlerin yerini alarak size %100 güvenli, esnek ve pratik bir platform sunar.
              </p>
              <p>
                Sepetli vinç, saatlerce süren iskele kurulumuna veya maliyetli dış cephe asansörlerine göre çok daha hızlı, güvenli ve ekonomik bir çözümdür. Gelişmiş hidrolik sistemleri sayesinde dar sokaklara bile rahatça girebilen bu mobil araçlar, sadece birkaç dakika içerisinde kurularak personelinizi metrelerce yüksekliğe ulaştırır. Ankara’da özellikle yüksek bina cepheleri, ağır tabela montajları, sanayi tesisleri, site yönetimlerinin rutin bakım onarımları, riskli ağaç budama işleri ve yüksek gerilim elektrik bakım çalışmalarında bir numaralı tercih konumundadır.
              </p>
              <p>
                Geniş araç parkurumuzda bulunan 15 metreden 75 metreye kadar erişim sağlayan platformlarımızla <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> sunuyoruz. Üstelik sahaya gönderdiğimiz her araç, konusunda uzman ve iş güvenliği (G sınıfı) ehliyetine sahip personellerimiz tarafından yönetilmektedir. <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold underline">Operatörlü vinç kiralama</Link> sistemimiz sayesinde siz işinize odaklanırken, araç yönetimi ve platform dengesi profesyonellerimize emanettir. Kısa süren periyodik bakımlarınız için <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link> avantajlarımızdan yararlanarak bütçenizi optimize edebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Kullanım Alanları Bölümü */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sepetli Vinç Hangi İşlerde Kullanılır?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Esnek yapısı ve yüksek güvenlik standartları sayesinde sepetli platformlar Ankara'da çok çeşitli sektörler tarafından tercih edilmektedir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Kart 1 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tabela Montajı ve Reklam Panoları</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Bina cepheleri, otoyol kenarları veya mağaza üstlerine yerleştirilecek olan dev boyutlu reklam panoları ve ışıklı totemlerin güvenle monte edilmesi için tasarlanmıştır. Ağır parçaların taşınması ve personelin rahatça vidalama yapabilmesi için idealdir.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                  Bu işlem için sepetli vinç gerekiyorsa hemen fiyat alın <ArrowRight size={16} />
                </a>
              </div>

              {/* Kart 2 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dış Cephe Temizliği ve Bakım</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Gökdelen, plaza veya AVM gibi yüksek katlı cam giydirme yapıların periyodik dış cephe temizliklerinde iskele riskini ortadan kaldırır. Personel sepet içinde güvenle hareket ederek tüm yüzeyleri kusursuz şekilde temizler ve parlatır.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                  Bu işlem için sepetli vinç gerekiyorsa hemen fiyat alın <ArrowRight size={16} />
                </a>
              </div>

              {/* Kart 3 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Elektrik Arıza ve Aydınlatma Bakımı</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Sokak lambalarının değişimi, park aydınlatmaları, yüksek gerilim hattı müdahaleleri, stadyum veya şantiye projektörlerinin bakımlarında elektrik personelinin emniyetle ve yalıtkan ortamda çalışmasını garanti altına alır.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                  Bu işlem için sepetli vinç gerekiyorsa hemen fiyat alın <ArrowRight size={16} />
                </a>
              </div>

              {/* Kart 4 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Trees size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ağaç Budama ve Peyzaj İşleri</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Rüzgarda kırılma tehlikesi olan, binalara sürten, elektrik tellerine dolanan yüksek boylu ağaçların budanmasında ve tehlikeli dalların çevreye zarar vermeden aşağıya indirilmesinde en emniyetli platform sistemidir.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                  Bu işlem için sepetli vinç gerekiyorsa hemen fiyat alın <ArrowRight size={16} />
                </a>
              </div>

              {/* Kart 5 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Wrench size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bina Bakım, Boya ve Mantolama</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Apartmanların ve sitelerin çatı akıntılarının tamiri, yağmur oluğu onarımı, dış cephe boya rötuşları, mantolama düzeltmeleri ve korniş montajları gibi işlemlerde saatler süren iskele işlemlerine gerek kalmadan anında çözüm sunar.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                  Bu işlem için sepetli vinç gerekiyorsa hemen fiyat alın <ArrowRight size={16} />
                </a>
              </div>

              {/* Kart 6 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <HardHat size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fabrika, Depo ve Sanayi Çalışmaları</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Yüksek tavanlı depo içi temizlikler, fabrika tavan havalandırma (HVAC) sistemlerinin montajı, çelik konstrüksiyon yapıların vida kontrolleri gibi ağır sanayi operasyonlarında hızlı yer değiştirme avantajıyla muazzam zaman kazandırır.
                </p>
                <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline">
                  Bu işlem için sepetli vinç gerekiyorsa hemen fiyat alın <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Lokal SEO Senaryoları */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’nın Tüm İlçelerine Sepetli Vinç Yönlendirme</h2>
              <p>
                Ankara gibi coğrafi olarak oldukça geniş ve trafik yoğunluğu olan bir şehirde zamanla yarışıyorsanız, vincinizin size ne kadar hızlı ulaşacağı kritik bir faktördür. Geniş araç ağımız sayesinde başkentin kalbinden en uç noktalarına kadar <strong>ankara sepetli vinç kiralama</strong> hizmetini kesintisiz ulaştırıyoruz. İster dar sokaklarda manevra yapmak, ister geniş bir şantiye alanında ağır bir platform kurmak olsun, her ilçenin yapısal farklılıklarına uygun bir ekipmanımız mevcuttur.
              </p>
              
              <p>
                Tabela montajı ve kurumsal firmaların dış cephe yenileme talepleri genellikle merkezi iş lokasyonlarında yoğunlaşır. Özellikle <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama">Çankaya sepetli vinç kiralama</Link> taleplerimizde, Kızılay, Tunalı ve GOP bölgelerinde yaya trafiğini aksatmadan hızlı tabela ve cephe işleri için dar şaseli araçlarımızı kullanıyoruz. Bu bölgelerdeki iş yeri sahipleri, vitrin veya reklam panosu yenilemelerinde sepetli platformlarımızın hızına güvenmektedir.
              </p>

              <p>
                Öte yandan, sanayi ve üretim dendiğinde akla gelen ana arterlerde ağır bakım işleri ön plandadır. Ostim, İvedik ve Yenimahalle'de sanayi bakım işleri, fabrika çatısı tamiratları ve çelik montaj işlemleri için <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama">Yenimahalle sepetli vinç kiralama</Link> ekiplerimiz genellikle tam gün mesai yapmaktadır. Benzer şekilde, büyük depoların ve lojistik tesislerin yer aldığı dış halkalarda da aralıksız hizmet veriyoruz; <Link href="/bolgeler/sincan-sepetli-vinc-kiralama">Sincan sepetli vinç kiralama</Link> ve Kazan çevresinde fabrika, depo ve tesis bakım işlerinde ağır tonajlı platformlarımız devreye girmektedir.
              </p>

              <p>
                Konut projelerinin, dev sitelerin ve lüks yapıların yükseldiği batı koridorunda ise genellikle site yönetimlerinin düzenli talepleriyle karşılaşıyoruz. Etimesgut, Eryaman ve Bağlıca'da site ve bina çalışmaları; dış cephe boya rötuşları, oluk temizliği ve cam silimi gibi işler için tasarlanmıştır. Bu bölgelerdeki hızlı ihtiyaçlarınız için <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama">Etimesgut sepetli vinç kiralama</Link> departmanımız saniyeler içinde araç sevkiyatı başlatır.
              </p>

              <p>
                Şehrin daha geleneksel, yokuşlu ve dar sokaklı yapısına sahip olan mahallelerinde ise ağaç budama, sokak lambası tamiri veya çatı oluk onarımı sıkça yaşanır. Keçiören ve Mamak'ta dar sokaklarda yüksek erişim sağlamak ciddi bir operatör becerisi ister. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama">Keçiören sepetli vinç kiralama</Link> ve <Link href="/bolgeler/mamak-sepetli-vinc-kiralama">Mamak sepetli vinç kiralama</Link> hizmetlerimiz, katlanabilir bomlu araçlarımızla en zorlu ve dar sokak aralarında bile güvenli bir şekilde konumlanarak mahalleyi rahatsız etmeden işlemi tamamlar.
              </p>

              <p>
                Hedefimiz, lokasyonunuz Gölbaşı, Pursaklar veya Altındağ neresi olursa olsun en doğru aracı kapınıza getirmektir. Tüm semtlere ait detaylı ağımızı görmek için <Link href="/bolgeler">Ankara hizmet bölgeleri</Link> sayfamızı inceleyebilir ve mahallenize özel çözümlerimiz hakkında bilgi alabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Ara CTA */}
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Konum ve Fotoğraf Gönder, Hızlı Fiyat Al</h3>
            <p className="text-primary-foreground mb-8 text-lg">İşinizin yapılacağı yerin fotoğrafını WhatsApp'tan gönderin, size en uygun aracı ve fiyatı anında iletelim.</p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
            >
              <MessageCircle size={24} />
              WhatsApp'tan Gönder
            </a>
          </div>
        </div>

        {/* 5. Kiralama Seçenekleri Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Saatlik, Günlük ve Proje Bazlı Sepetli Vinç Kiralama</h2>
              <p className="text-lg text-gray-600">İhtiyacınızın süresine göre bütçenizi en iyi şekilde optimize edecek kiralama paketlerimiz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
                <div className="bg-blue-600 h-2 w-full"></div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="bg-blue-50 text-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Clock size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Saatlik Kiralama</h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Kısa süreli işlemleriniz için en ideal ve ekonomik seçenektir. Genellikle hızlı tabela söküm/montaj, sokak aydınlatması değişimi, klima dış ünite montajı veya ufak çaplı arıza bakım işleri için tercih edilir. Sadece kullandığınız saat kadar ödeme yaparsınız.
                  </p>
                  <Link href="/hizmetler/saatlik-vinc-kiralama" className="inline-flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-blue-50 text-blue-700 font-bold py-3 px-4 rounded-xl transition-colors border border-gray-200 hover:border-blue-200">
                    Detayları İncele <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">En Çok Tercih Edilen</div>
                <div className="bg-primary h-2 w-full"></div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Günlük Kiralama</h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Tüm gün mesaisi gerektiren operasyonlar içindir. Plaza dış cephe temizliği, apartman mantolama ve tamiratı, orman ve parklardaki uzun süreli ağaç budama veya şantiye çalışmaları gibi uzun soluklu işlerde saatliğe kıyasla çok daha büyük maliyet avantajı sağlar.
                  </p>
                  <Link href="/hizmetler/gunluk-vinc-kiralama" className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl transition-colors">
                    Detayları İncele <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
                <div className="bg-green-600 h-2 w-full"></div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="bg-green-50 text-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Operatörlü Kiralama</h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Sıfır risk prensibiyle hareket etmek isteyen kurumlar ve bireyler içindir. Aracı kiralamanızın yanı sıra aracı kullanacak lisanslı ve tecrübeli operatörümüz de sahada bulunur. Makinenin güvenli kurulumu ve sepetin kusursuz yönetimi tamamen profesyonel çalışma güvencesindedir.
                  </p>
                  <Link href="/hizmetler/operatorlu-vinc-kiralama" className="inline-flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-green-50 text-green-700 font-bold py-3 px-4 rounded-xl transition-colors border border-gray-200 hover:border-green-200">
                    Detayları İncele <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Fiyat ve 7. Neden Bizi Tercih Etmelisiniz? */}
        <section id="fiyatlar" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Fiyat Bölümü */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ankara Sepetli Vinç Kiralama Fiyatları</h2>
                <div className="prose prose-gray max-w-none mb-8">
                  <p>
                    Ankara pazarında sepetli vinç kiralama fiyatları sabit bir liste üzerinden değil, projenizin spesifik detaylarına ve risk faktörlerine göre dinamik olarak belirlenmektedir. Tüketiciler olarak en doğru maliyet planlamasını yapabilmeniz için fiyatı doğrudan etkileyen ana faktörleri şu şekilde özetleyebiliriz:
                  </p>
                  <ul className="space-y-2 mt-4 text-gray-700">
                    <li><strong>Çalışma Yüksekliği:</strong> 20 metrelik bir cephe ile 60 metrelik bir kuleye erişim sağlamak farklı kapasitede hidrolik makineler gerektirir. Makinenin metrajı büyüdükçe maliyet de buna paralel şekillenir.</li>
                    <li><strong>İşin Süresi:</strong> Planlamanız saatlik bir değişim mi yoksa günlük veya haftalık bir şantiye çalışması mı? Uzun vadeli kiralamalarda birim saat ücretleri her zaman daha uyguna gelmektedir.</li>
                    <li><strong>Lokasyon ve Alan Darlığı:</strong> Aracın sevk edileceği ilçenin uzaklığı ve vincin kurulacağı sokağın, kaldırımın darlığı operasyon zorluğunu etkiler.</li>
                    <li><strong>İşin Türü:</strong> Ağır sanayi taşıması, ince işçilik gerektiren tabela montajı, riskli ağaç budama veya ıslak zemine sahip cephe temizliği gibi faktörler, kullanılacak güvenlik donanımını değiştirir.</li>
                    <li><strong>Acil Yönlendirme ve Operatör:</strong> Acil çağrılar ve mesai saatleri dışı talepler fiyatı etkileyebilir. Tüm hizmetlerimiz deneyimli operatör dahildir.</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                  <p className="text-gray-900 font-semibold mb-4">En doğru fiyat için bizi arayın veya WhatsApp’tan fotoğraf ve konum göndererek hızlı teklif alın.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a href={`tel:${siteConfig.contact.phoneE164}`} className="inline-flex justify-center items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
                      <Phone size={18} /> 0551 606 68 78
                    </a>
                  </div>
                </div>
              </div>

              {/* Neden Biz */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Neden Ankara Sepetli Vinç Kiralama?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Ankara Genelinde Hızlı Araç Yönlendirme</h3>
                      <p className="text-gray-600 text-sm mt-1">Ostim, Sincan, Çankaya fark etmeksizin başkentin her noktasına geniş filomuzla saniyeler içinde aracınızı rezerve edip yola çıkarıyoruz.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">İşe Uygun Vinç Seçimi</h3>
                      <p className="text-gray-600 text-sm mt-1">15 metreden 75 metreye kadar değişen geniş araç envanterimizle işinizin gerektirdiği tam yüksekliği bulmanızı sağlıyoruz.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Deneyimli Operatör Desteği</h3>
                      <p className="text-gray-600 text-sm mt-1">Makinelerimiz G sınıfı ehliyetli, iş güvenliği konusunda tam eğitimli ve tecrübeli profesyonellerimizce kullanılmaktadır.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">4</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Saatlik ve Günlük Esnek Kiralama</h3>
                      <p className="text-gray-600 text-sm mt-1">İhtiyacınız yarım saat sürse dahi size uygun paketler üretiyor, projenize en ekonomik zamanlamayı ayarlıyoruz.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">5</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Tabela, Cephe, Budama İşlerinde Tecrübe</h3>
                      <p className="text-gray-600 text-sm mt-1">Her sektörün dinamiğini biliyor, tabela montajından ağır budama işlerine kadar referanslı tecrübemizle sahaya iniyoruz.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">6</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Güvenlik Odaklı Çalışma</h3>
                      <p className="text-gray-600 text-sm mt-1">Periyodik bakımları yapılmış makine sensörlerimiz, emniyet kemerleri ve baret standartlarıyla sıfır kaza hedefiyle çalışıyoruz.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. İç Link Destek Alanı */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">İlgili Vinç Kiralama Hizmetleri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ankara Vinç Hizmetleri</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Operatörlü Vinç</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Saatlik Vinç</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Günlük Vinç</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ağaç Budama</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/bolgeler" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Hizmet Bölgeleri</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FAQ Bölümü */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Sepetli vinç kiralama süreçleri hakkında merak edilenler.</p>
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

        {/* Son CTA */}
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Yükseklerdeki İşlerinizi Ertelemeyin</h2>
            <p className="text-primary-foreground mb-10 text-lg max-w-2xl mx-auto">Güvenli ve hızlı sepetli vinç kiralama için şimdi bizi arayın, projenize en uygun aracı hemen sevk edelim.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
              >
                <MessageCircle size={24} />
                WhatsApp Destek
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
