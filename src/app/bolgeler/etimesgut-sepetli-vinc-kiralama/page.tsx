import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, Building2, Home, Store, Trees, Clock, ShieldCheck, Paintbrush, Zap, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Etimesgut Sepetli Vinç Kiralama | 30 Dakikada Ulaşım ⚡ 0551 606 68 78',
  description: 'Etimesgut, Eryaman, Bağlıca ve Elvankent bölgelerinde sepetli vinç kiralama hizmeti. 30 dakikada adresinize ulaşım, operatörlü vinç desteği ve uygun fiyat avantajı için hemen arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/bolgeler/etimesgut-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Etimesgut Sepetli Vinç Kiralama | 30 Dakikada Ulaşım ⚡ 0551 606 68 78',
    description: 'Etimesgut, Eryaman, Bağlıca ve Elvankent bölgelerinde sepetli vinç kiralama hizmeti. 30 dakikada adresinize ulaşım, operatörlü vinç desteği ve uygun fiyat avantajı için hemen arayın: 0551 606 68 78',
    url: getCanonicalUrl('/bolgeler/etimesgut-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Etimesgut’ta sepetli vinç ne kadar sürede gelir?',
    a: 'Etimesgut merkez, Eryaman, Bağlıca ve Şaşmaz bağlantı hattında sürekli hareket halinde olan araçlarımız sayesinde, trafiğin ve mesafenin uygunluğuna göre genellikle 30-45 dakika içinde hızlı yönlendirme yapıyoruz.'
  },
  {
    q: 'Eryaman ve Bağlıca’ya aynı gün vinç yönlendirebilir misiniz?',
    a: 'Evet, Eryaman ve Bağlıca bölgelerindeki yoğun site ve villa projeleri sebebiyle bölgeye her gün özel olarak araç sevk ediyoruz. Acil tabela veya cephe işleriniz için aynı gün içinde hizmet vermemiz mümkündür.'
  },
  {
    q: 'Etimesgut sepetli vinç fiyatları nasıl belirlenir?',
    a: 'Fiyatlarımız çalışılacak yüksekliğe (metraja), işlemin süresine (saatlik, günlük), operatör gereksinimine ve işin niteliğine (ağaç budama, cephe temizliği vb.) göre belirlenmektedir. Net fiyat için WhatsApp üzerinden konum ve iş fotoğrafı gönderebilirsiniz.'
  },
  {
    q: 'Site içinde sepetli vinç çalışabilir mi?',
    a: 'Kesinlikle. Modern Etimesgut, Eryaman ve Elvankent sitelerinin geniş bahçe ve yolları, vinçlerimizin kurulumu için oldukça müsaittir. Araçlarımız peyzaj alanlarına ve site zeminine zarar vermeden güvenle konumlandırılır.'
  },
  {
    q: 'Saatlik vinç kiralama Etimesgut’ta mümkün mü?',
    a: 'Evet, özellikle kısa süren tabela montajı, klima sökümü veya tek bir pencereden eşya çekme gibi işler için bütçe dostu saatlik vinç kiralama seçeneğimiz mevcuttur.'
  },
  {
    q: 'Ağaç budama ve cephe temizliği için vinç kiralanabilir mi?',
    a: 'Elbette. Etimesgut ve çevresinde, ulaşılması zor ağaçların kesimi ve çok katlı binaların cephe/cam temizliği işlemlerinde güvenle sepetli vinç hizmeti sağlamaktayız.'
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: 'Tüm sepetli vinç kiralama hizmetlerimiz, iş güvenliği (İSG) standartları gereği alanında uzman, belgeli ve deneyimli operatörümüz ile birlikte sunulmaktadır. Operatör ücreti fiyata dahildir.'
  }
];

export default function EtimesgutPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Etimesgut Sepetli Vinç Kiralama',
      provider: {
        '@type': 'LocalBusiness',
        name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
        url: SEO_CONFIG.baseUrl
      },
      telephone: '+905516066878',
      areaServed: [
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
      description: "Etimesgut, Eryaman, Bağlıca ve Elvankent’te sepetli vinç kiralama hizmeti. Site, apartman, tabela, cephe ve ağaç işleri için hızlı teklif: 0551 606 68 78",
      url: getCanonicalUrl('/bolgeler/etimesgut-sepetli-vinc-kiralama')
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
          name: 'Etimesgut Sepetli Vinç Kiralama',
          item: `${SEO_CONFIG.baseUrl}/bolgeler/etimesgut-sepetli-vinc-kiralama`
        }
      ]
    }
  ];

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
              src="/images/bolge/etimesgut-vinc.jpg"
              alt="etimesgut sepetli vinç kiralama"
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
                  { label: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Etimesgut Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-6">
                Etimesgut, Eryaman, Bağlıca ve Elvankent’te 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, batı ekseninde muazzam bir hızla büyürken bu sürecin merkezinde <strong>Ankara’nın en hızlı gelişen ilçelerinden biri olan Etimesgut</strong> yer almaktadır. <strong>İç Anadolu Bölgesi</strong>'nin planlı şehirleşme örneklerinden biri olan ilçe, devasa inşaat, ticaret ve peyzaj alanları ile dikkat çekmektedir.
                </p>
                <p>
                  Etimesgut, modern site projeleri, yüksek katlı apartmanlar, geniş yollar, yeni konut alanları ve ticari işletmeleriyle sepetli vinç kullanımının yoğun olduğu bölgelerden biridir. Eryaman, Bağlıca ve Elvankent çevresinde site cepheleri, ağaç budama, tabela montajı, elektrik bakım ve dış cephe işleri için sepetli vinç hizmeti sıkça tercih edilmektedir. İster <strong>Ahi Mesut</strong> mahallesindeki bir binanın çatı tamiratı, ister <strong>Etimesgut merkez</strong> veya <strong>Göksu Park çevresi</strong>'ndeki devasa rekreasyon alanlarının aydınlatma direklerinin bakımı olsun, güvenli erişim çözümlerine duyulan ihtiyaç kesintisiz devam etmektedir. Ayrıca <strong>Şaşmaz bağlantı hattı</strong> üzerindeki ağır sanayi işletmelerinin dış cephe veya çatı onarımlarında da profesyonel vinç kullanımı kritik bir role sahiptir.
                </p>
                <p>
                  Geleneksel ve riskli iskele kurulumları yerine <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-teal-300 hover:text-white underline font-medium">Ankara’da sepetli vinç hizmeti</Link> almak, projelerde büyük zaman ve maliyet avantajı yaratmaktadır. Bölgenin dinamik yapısına uygun olarak her daim hazır bulundurduğumuz filomuzla yüksek katlı yapılardaki işleri güvenle tamamlıyor, iş sağlığı standartlarından ödün vermiyoruz.
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

        {/* 2. ANA SAYFADAN GELEN GÜCÜ KARŞILAYAN İÇERİK BLOĞU */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Etimesgut’ta En Çok Talep Alan Vinç Hizmetleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern yaşam alanlarında farklı yapı tiplerine özel operasyonel vinç senaryolarımız.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Eryaman ve Bağlıca */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Eryaman ve Bağlıca’da Site Cephe İşleri</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Etimesgut’un en yoğun bölgelerinden biri olan Eryaman’da da aktif olarak hizmet vermekteyiz. Detaylı bilgi için <Link href="/bolgeler/eryaman-sepetli-vinc-kiralama" className="font-semibold underline text-primary hover:text-primary/80 transition-colors">Eryaman sepetli vinç kiralama</Link> sayfamızı inceleyebilirsiniz.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={18} />
                    <span>Site dış cephe temizliği</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={18} />
                    <span>Yüksek katlı bina bakımı ve onarımı</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={18} />
                    <span>Geniş ortak alan aydınlatmaları bakımı</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={18} />
                    <span>Güvenli <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold text-primary underline">operatörlü sepetli vinç desteği</Link></span>
                  </li>
                </ul>
              </div>

              {/* Elvankent ve Ahi Mesut */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Home size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Elvankent ve Ahi Mesut’ta Apartman Bakım İşleri</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} />
                    <span>Apartman dış cephe yalıtım ve boya işleri</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} />
                    <span>Tabela montajı ve cam değişimleri</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} />
                    <span>Balkon/çatı çevresi hasar onarımı</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} />
                    <span>Kısa süreli <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold text-primary underline">kısa süreli saatlik vinç çözümü</Link></span>
                  </li>
                </ul>
              </div>

              {/* Etimesgut Merkez */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center text-rose-600 mb-6">
                  <Store size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Merkez ve Göksu Çevresinde Ticari İşler</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-rose-600 shrink-0 mt-1" size={18} />
                    <span>Mağaza tabela montajı ve demontajı</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-rose-600 shrink-0 mt-1" size={18} />
                    <span>Büyük totem ve reklam panosu kurulumu</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-rose-600 shrink-0 mt-1" size={18} />
                    <span>Elektrik, klima ve aydınlatma çalışmaları</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-rose-600 shrink-0 mt-1" size={18} />
                    <span>Aynı gün acil vinç yönlendirme hizmeti</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-teal-50 rounded-2xl border border-teal-100">
              <p className="text-lg text-gray-700 leading-relaxed m-0">
                Ayrıca plazalar ve iş merkezleri için <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="font-semibold text-teal-700 underline">Etimesgut’ta cephe temizliği vinç hizmeti</Link> sağlarken, geniş site ve park alanlarında devasa yeşilliklerin bakımı için <Link href="/hizmetler/agac-budama" className="font-semibold text-teal-700 underline">ağaç budama vinç desteği</Link> sunmaktayız. Uzun soluklu dev projeleriniz için bütçe dostu <Link href="/hizmetler/gunluk-vinc-kiralama" className="font-semibold text-teal-700 underline">günlük vinç kiralama seçeneği</Link> de daima emrinizdedir.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ETİMESGUT ÖZEL FİYAT BÖLÜMÜ */}
        <section id="fiyatlar" className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Etimesgut Sepetli Vinç Kiralama Fiyatları</h2>
              <div className="prose prose-lg text-gray-600 max-w-none text-left mb-8">
                <p>
                  Etimesgut ve çevresinde vinç hizmeti alırken maliyetin her proje için farklılık göstereceğini bilmek, bütçenizi doğru yönetmeniz için kritiktir. Kesin ve standart bir fiyat listesinden ziyade, operasyonun doğasına göre dinamik bir fiyatlandırma modeli uygulanır. Fiyatı etkileyen en önemli faktörlerin başında <strong>çalışma yüksekliği</strong> gelir; 15 metrelik bir aracın operasyon maliyeti ile 45 metrelik bir aracın maliyeti aynı değildir.
                </p>
                <p>
                  Bunun yanı sıra <strong>işin süresi</strong> çok belirleyicidir. Kısa süreli bir tabela işlemi için <strong>saatlik kiralama</strong> bedeli alınırken, devasa bir sitenin günlerce sürecek mantolaması için <strong>günlük kiralama ihtiyacı</strong> doğar ve bu model saat bazında çok daha avantajlı rakamlara denk gelir. Etimesgut merkez ile Eryaman, Bağlıca, Elvankent gibi <strong>lokasyon farkı</strong> aracın transfer maliyetlerini çok ufak etkileyebilir ancak bölgeye yoğun araç sevkiyatımız sayesinde bu farkı minimize ediyoruz.
                </p>
                <p>
                  Sitenin bahçe yapısı, <strong>site içi giriş ve araç yanaşma durumu</strong> makine seçimini zorlaştırabilir. Ayrıca her kiralama işlemine dahil ettiğimiz belgeli <strong>operatör ihtiyacı</strong>, <strong>işin türü</strong> (tabela, cephe, elektrik bakım, ağaç budama) ve anlık hasarlarda gereken <strong>acil yönlendirme ihtiyacı</strong> fiyat tekliflerini şekillendirir. Doğru analiz ve ekonomik fiyat için uzman ekiplerimize ulaşmanız yeterlidir.
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 inline-block w-full">
                <p className="text-teal-900 font-bold mb-4 text-xl">Etimesgut vinç fiyatı için 0551 606 68 78 numarasını arayın veya WhatsApp’tan konum ve iş fotoğrafı göndererek hızlı teklif alın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> Hemen Ara
                  </a>
                  <a href="https://wa.me/905516066878" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1ebd5a] transition-colors text-lg">
                    <MessageCircle size={22} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. E-E-A-T GÜVEN BLOĞU: Gerçek Çalışmalar */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Etimesgut’ta Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">Bölgenin farklı noktalarında tamamladığımız gerçek operasyon örneklerimiz.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Kart 1 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/bolge/eryaman-site-vinc.jpg"
                    alt="eryaman site cephe vinç hizmeti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eryaman’da Site Cephe Çalışması</h3>
                  <div className="space-y-2 mb-6 flex-grow">
                    <p className="text-sm text-gray-700"><strong>İş Türü:</strong> 12 Katlı Site Dış Cephe Yalıtımı</p>
                    <p className="text-sm text-gray-700"><strong>Neden Gerekti:</strong> Geleneksel iskelenin kurulamayacağı dar bir zemine sahip olan bloklarda rüzgar hasarı sebebiyle acil dış cephe onarımı gerekiyordu.</p>
                    <p className="text-sm text-gray-700"><strong>Nasıl Çözüldü:</strong> 45 metrelik sepetli vincimizle site bahçesinin peyzajına zarar vermeden araç sabitlendi ve günlük kiralama ile tüm cephe 2 günde onarıldı.</p>
                  </div>
                  <a href="tel:05516066878" className="inline-flex items-center justify-center w-full py-3 bg-teal-100 text-teal-800 font-bold rounded-lg hover:bg-teal-200 transition-colors text-sm">
                    Benzer iş için 0551 606 68 78
                  </a>
                </div>
              </div>

              {/* Kart 2 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/bolge/baglica-agac-budama-vinc.jpg"
                    alt="bağlıca ağaç budama sepetli vinç"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bağlıca’da Ağaç Budama ve Peyzaj Desteği</h3>
                  <div className="space-y-2 mb-6 flex-grow">
                    <p className="text-sm text-gray-700"><strong>İş Türü:</strong> Villa Bahçesi Yüksek Çam Ağacı Kesimi</p>
                    <p className="text-sm text-gray-700"><strong>Neden Gerekti:</strong> Çatılara sürten ve fırtınada evin camlarına zarar verme riski taşıyan çok yüksek bir çam ağacının güvenli şekilde tepesinin alınması zorunluydu.</p>
                    <p className="text-sm text-gray-700"><strong>Nasıl Çözüldü:</strong> Kompakt sepetli vincimizle bahçe duvarını aşarak erişim sağlandı. Uzman operatör ve testere ekibi ile tehlikeli dallar iplerle yavaşça aşağı indirildi.</p>
                  </div>
                  <a href="tel:05516066878" className="inline-flex items-center justify-center w-full py-3 bg-teal-100 text-teal-800 font-bold rounded-lg hover:bg-teal-200 transition-colors text-sm">
                    Benzer iş için 0551 606 68 78
                  </a>
                </div>
              </div>

              {/* Kart 3 */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/bolge/etimesgut-vinc.jpg"
                    alt="elvankent tabela montaj vinç hizmeti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Elvankent’te Tabela ve Elektrik Bakım İşi</h3>
                  <div className="space-y-2 mb-6 flex-grow">
                    <p className="text-sm text-gray-700"><strong>İş Türü:</strong> Mağaza Işıklı Tabela Montajı</p>
                    <p className="text-sm text-gray-700"><strong>Neden Gerekti:</strong> Yeni açılan ticari bir işletmenin 3. kat hizasına büyük bir ışıklı tabela takılması ve dış aydınlatma hatlarının çekilmesi gerekiyordu.</p>
                    <p className="text-sm text-gray-700"><strong>Nasıl Çözüldü:</strong> Cadde üzerine park edilen aracımız ile trafik akışını engellemeden saatlik kiralama paketi kullanılarak tabela montajı hızlıca tamamlandı.</p>
                  </div>
                  <a href="tel:05516066878" className="inline-flex items-center justify-center w-full py-3 bg-teal-100 text-teal-800 font-bold rounded-lg hover:bg-teal-200 transition-colors text-sm">
                    Benzer iş için 0551 606 68 78
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HARİTA / GEO SİNYALİ */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-2"><MapPin className="text-teal-600" /> Hizmet Lokasyonumuz</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48938.82489814421!2d32.61868512534571!3d39.94639735492471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337f7c6cd0c59%3A0xe5426715f3de40b0!2sEtimesgut%2C%20Ankara!5e0!3m2!1str!2str!4v1714161000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Etimesgut Ankara Harita"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-6 font-medium text-lg">
              Etimesgut, Eryaman, Bağlıca, Elvankent ve çevresinde sepetli vinç yönlendirmesi yapıyoruz.
            </p>
          </div>
        </section>

        {/* 6. İÇ LİNK DESTEK BLOĞU */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Etimesgut’ta Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">Projenizin türüne göre tercih edebileceğiniz operasyonel çözümler.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-md mb-2">Ankara Sepetli Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-md mb-2">Operatörlü Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-md mb-2">Saatlik Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-md mb-2">Günlük Vinç Kiralama</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-md mb-2">Cephe Temizliği İçin Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-gray-50 border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-md mb-2">Ağaç Budama İçin Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/bolgeler" className="bg-teal-50 border border-teal-200 p-5 rounded-xl hover:bg-teal-600 hover:border-teal-600 transition-all flex flex-col group lg:col-span-2">
                <span className="font-bold text-teal-800 group-hover:text-white transition-colors text-md mb-2">Tüm Hizmet Bölgeleri</span>
                <span className="text-sm text-teal-600 group-hover:text-teal-100 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. YAKIN BÖLGELER BLOĞU */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Etimesgut’a Yakın Hizmet Bölgeleri</h2>
            <p className="text-gray-600 mb-6">Etimesgut çevresindeki komşu bölgelere de hızlı araç yönlendirmesi sağlıyoruz.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/bolgeler/sincan-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors">Sincan sepetli vinç kiralama</Link>
              <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors">Yenimahalle vinç kiralama</Link>
              <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors">Ostim sanayi vinç hizmeti</Link>
              <Link href="/bolgeler/golbasi-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors">Gölbaşı sepetli vinç hizmeti</Link>
            </div>
          </div>
        </section>

        {/* 8. BLOG REFERANS BLOĞU */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Etimesgut’ta Sepetli Vinç Nerelerde Kullanılır?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Etimesgut, Eryaman, Bağlıca ve Elvankent bölgelerinde sepetli vinç kullanım alanlarını detaylı olarak anlattığımız rehber içeriğimizi inceleyin.
            </p>
            <Link href="/blog/etimesgut-sepetli-vinc-kiralama-nerelerde-kullanilir" className="font-semibold underline text-primary hover:text-primary/80 transition text-lg inline-flex items-center gap-1 justify-center">
              Etimesgut’ta sepetli vinç nerelerde kullanılır? <ArrowRight size={18} />
            </Link>
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
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
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
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
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
