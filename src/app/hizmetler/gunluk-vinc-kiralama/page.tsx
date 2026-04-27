import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, CalendarDays, CheckCircle2, MapPin, ArrowRight, Building2, HardHat, Factory, Trees, ShieldCheck, PenTool, Truck, Wrench, ChevronRight, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Günlük Vinç Kiralama | Operatörlü Sepetli Vinç Hizmeti',
  description: "Ankara’da günlük vinç kiralama hizmetiyle şantiye, cephe, fabrika, depo, tabela ve bakım işleriniz için operatörlü sepetli vinç desteği alın. Hemen arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/hizmetler/gunluk-vinc-kiralama'),
  openGraph: {
    title: 'Ankara Günlük Vinç Kiralama | Operatörlü Sepetli Vinç Hizmeti',
    description: "Ankara’da günlük vinç kiralama hizmetiyle şantiye, cephe, fabrika, depo, tabela ve bakım işleriniz için operatörlü sepetli vinç desteği alın. Hemen arayın: 0551 606 68 78",
    url: getCanonicalUrl('/hizmetler/gunluk-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Günlük vinç kiralama nedir?',
    a: 'Günlük vinç kiralama, kısa sürede bitmeyecek uzun soluklu işleriniz için vincin tüm mesai saati boyunca (genellikle 8 saat) iş sahanızda size ve projenize tahsis edilmesidir.'
  },
  {
    q: 'Ankara günlük vinç kiralama fiyatları nasıl belirlenir?',
    a: 'Fiyatlar vincin çalışma yüksekliğine, kiralama yapılacak gün sayısına, çalışma ortamının zorluk derecesine ve saha uzaklığına (ilçeye) göre belirlenir. En iyi fiyatı iş detaylarınızı bize ileterek alabilirsiniz.'
  },
  {
    q: 'Günlük sepetli vinç hangi işler için uygundur?',
    a: 'Özellikle dış cephe boya/mantolama, şantiye faaliyetleri, fabrika çatı tamiratları, plaza cam temizliği ve kapsamlı ağaç budama gibi saatler sürecek yoğun çalışmalar için son derece uygundur.'
  },
  {
    q: 'Günlük vinç kiralamada operatör dahil mi?',
    a: 'Evet, güvenlik prosedürlerimiz gereği günlük kiralama hizmetlerimizin tamamı iş güvenliği sertifikalı profesyonel operatörlerimiz ile birlikte sunulmaktadır.'
  },
  {
    q: 'Saatlik vinç mi günlük vinç mi daha avantajlı?',
    a: 'Eğer işiniz 1-2 saatte bitecek bir müdahale ise saatlik kiralama; ancak işiniz yarım günü aşacak, uzun metrajlı bir çalışma ise günlük kiralama maddi olarak çok daha avantajlı ve planlıdır.'
  },
  {
    q: 'Aynı gün günlük vinç yönlendirebilir misiniz?',
    a: 'Ankara genelinde bulunan geniş araç ağımız sayesinde, program uygunluk durumuna göre acil taleplerinizde de aynı gün içinde araç yönlendirmesi yapabiliyoruz.'
  },
  {
    q: 'Şantiye işleri için günlük vinç kiralanır mı?',
    a: 'Kesinlikle. İnşaat ve şantiye sahalarındaki ağır ve uzun süreli cephe, cam, veya yalıtım çalışmaları için en güvenli ve uygun maliyetli çözüm günlük veya projeli vinç kiralamaktır.'
  },
  {
    q: 'Ankara’nın hangi ilçelerine hizmet veriyorsunuz?',
    a: 'Çankaya, Yenimahalle, Keçiören, Etimesgut, Mamak, Sincan, Kazan, Gölbaşı ve Altındağ başta olmak üzere başkentin tüm ilçelerine günlük vinç kiralama hizmeti ulaştırmaktayız.'
  }
];

export default function GunlukVincKiralamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Günlük Vinç Kiralama',
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
        serviceType: 'Günlük Vinç Kiralama',
        description: "Ankara’da günlük vinç kiralama hizmetiyle şantiye, cephe, fabrika, depo, tabela ve bakım işleriniz için operatörlü sepetli vinç desteği alın.",
        url: getCanonicalUrl('/hizmetler/gunluk-vinc-kiralama')
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
            name: 'Günlük Vinç Kiralama',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/gunluk-vinc-kiralama`
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
        
        {/* 1. Hero Alanı ve Üst CTA */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-35">
            <Image
              src="/images/hero-bg.jpg"
              alt="ankara günlük vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Günlük Vinç', href: '/hizmetler/gunluk-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Günlük Vinç Kiralama
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara genelinde uzun süreli şantiye, cephe, fabrika, depo, site bakım, tabela montajı ve yüksek erişim gerektiren işleriniz için günlük vinç kiralama hizmeti sunuyoruz. Operatörlü sepetli vinç desteğiyle işlerinizi planlı, güvenli ve ekonomik şekilde tamamlamanıza yardımcı oluyoruz.
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
                  Günlük Fiyat Al
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
                  <div className="bg-primary/20 p-2 rounded-lg"><CalendarDays size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Günlük Kiralama Avantajı</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><HardHat size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Operatörlü Hizmet</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Truck size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Ankara Geneli Hızlı Yönlendirme</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Building2 size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Şantiye, Cephe ve Fabrika İşleri</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Niyet Odaklı Giriş Bölümü */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Günlük Vinç Kiralama Hangi İşler İçin Uygundur?</h2>
              <p>
                Büyük ölçekli projeler, şantiye inşaatları veya tüm bir binayı kapsayan cephe işlemleri genellikle saatlere sığmayacak kadar kapsamlıdır. Bu tarz operasyonlarda aracı saat bazlı kiralamak maliyetlerinizi öngörülemez şekilde artırabilir. <strong>Günlük vinç kiralama</strong>, birkaç saat içinde tamamlanamayacak, uzun süreli ve meşakkatli işler için çok daha doğru ve ekonomik bir çözümdür. Tüm gün boyunca emrinizde olan makine sayesinde işleriniz aceleye gelmez ve tam bir güvenlikle yürütülür.
              </p>
              <p>
                Ankara genelinde <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold underline">Ankara sepetli vinç kiralama</Link> ihtiyacı duyan birçok firma; cephe temizliği, dış cephe boya ve mantolama uygulamaları, büyük reklam panolarının ve totem tabela montajı işlemleri için günlük periyotları tercih eder. Fabrika bakım çalışmaları, devasa depo içi tavan temizlikleri, site yönetimi çatısı altındaki oluk onarımları, toplu ağaç budama veya yeni nesil şantiye faaliyetlerinde, vinçlerin sabahtan akşama kadar aynı sahada kalması gerekir. Bu sayede planlama eksiksiz yapılır, personeller zaman baskısı hissetmeden kaliteli işçilik çıkarır.
              </p>
              <p>
                Saatlik koşturmacanın aksine, günlük kiralama metodunda maliyeti baştan kontrol eder ve işin kesintisiz ilerlemesini sağlarsınız. Üstelik bu uzun süreçlerde vincin kullanımını profesyonel ellere bırakmak riskleri tamamen sıfırlar; bu nedenle <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold underline">operatörlü vinç kiralama</Link> hizmetimiz tam gün boyunca şantiyenizdeki en büyük güvencenizdir. <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> ağımız, en zorlu projelerinizi dahi tam zamanında tamamlamak için tasarlanmıştır. Eğer operasyonunuz yarım günden kısa sürecekse, alternatif olarak sunduğumuz <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link> seçeneklerine de yönelebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Kullanım Alanları */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Günlük Vinç Hangi Alanlarda Kullanılır?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tam gün mesai gerektiren projelerde zaman ve maliyet avantajı sağladığımız temel faaliyet alanları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <HardHat size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Şantiye ve İnşaat Çalışmaları</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Bina dış yüzeyi çelik konstrüksiyon işleri, yalıtım işlemleri, doğrama ve cam montajları gibi uzun mesai gerektiren şantiye şartlarında sürekli yüksek erişim imkanı sağlar.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 m-0">Günlük vinç desteği için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dış Cephe Temizlik ve Bakım</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Plazalar, hastaneler ve AVM gibi devasa yapıların dış cam temizliği, silikon yenilemesi veya kompozit cephe bakımları tüm güne yayıldığından en ideal kiralama türüdür.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 m-0">Günlük vinç desteği için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Factory size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fabrika ve Depo Bakım İşleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Yüksek tavanlı depo içi temizlikleri, havalandırma (HVAC) sistemlerinin döşenmesi veya fabrika çatı aktarım işleri boyunca vincin sahada hazır beklemesi sağlanır.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 m-0">Günlük vinç desteği için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Wrench size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Site, Plaza ve Apartman Çalışmaları</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Site yönetimlerinin düzenlediği genel boya badana rötuşları, tüm blokların oluklarının temizlenmesi veya toplu mantolama bakımlarında tam gün performans sunar.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 m-0">Günlük vinç desteği için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tabela Montajı ve Reklam Panoları</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Otoyol kenarı dev totemlerin yerleştirilmesi, bir AVM'nin tüm cephesindeki giydirmelerin sökülüp yenisinin takılması gibi ağır reklamcılık işleri tam gün hizmet gerektirir.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 m-0">Günlük vinç desteği için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Trees size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ağaç Budama ve Peyzaj İşleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Büyük kampüsler, siteler veya park alanlarındaki tehlikeli ve uzun dalların güvenle kesilip indirilmesi operasyonları, zaman aldığı için günlük periyotta kiralanır.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 m-0">Günlük vinç desteği için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Saatlik ve Günlük Karşılaştırma */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Saatlik mi Günlük mü Vinç Kiralamalısınız?</h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Saatlik Kart */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-blue-600 w-8 h-8" />
                  Saatlik Vinç Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Kısa süreli arıza ve onarım işleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Küçük boyutlu tabela ve cam değişimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Hızlı ve küçük çaplı elektrik bakım müdahalesi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Sadece birkaç saatlik pratik kurulumlar</span>
                  </li>
                </ul>
                <Link href="/hizmetler/saatlik-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl border-2 border-blue-600 text-blue-700 font-bold hover:bg-blue-50 transition-colors gap-2">
                  Saatlik İncele <ArrowRight size={18} />
                </Link>
              </div>

              {/* Günlük Kart */}
              <div className="bg-primary/5 border-2 border-primary/30 rounded-3xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-4 rounded-bl-xl text-sm">Uzun İşler İçin Önerilir</div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <CalendarDays className="text-primary w-8 h-8" />
                  Günlük Vinç Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Gün boyu süren uzun işler ve montajlar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Geniş yüzeyli cephe boyama ve temizlik çalışmaları</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Ağır sanayi, şantiye ve fabrika periyodik bakımı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Tam gün operatörlü çalışma ile risksiz süreç</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Saat bazlı hesaplamaya göre daha planlı ve ekonomik çözüm</span>
                  </li>
                </ul>
                <div className="w-full text-center text-gray-500 italic text-sm border-t border-primary/20 pt-4">Şu an bu sayfadasınız.</div>
              </div>

            </div>
          </div>
        </section>

        {/* Ara CTA */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Şantiye ve Uzun Süreli Projeleriniz İçin Yanınızdayız</h3>
            <p className="text-primary-foreground mb-8 text-lg">Günlük vinç ihtiyaçlarınız için iş sahanızın detaylarını iletin, en güvenli aracı hemen rezerve edelim.</p>
            <div className="flex justify-center">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
            </div>
          </div>
        </section>

        {/* 5. Lokal SEO Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Günlük Vinç Kiralama Hizmeti Verdiğimiz Bölgeler</h2>
              <p>
                Ankara’nın her bir köşesinde her gün onlarca büyük proje ve şantiye çalışması sürmektedir. Devasa bir metropol olan başkentte, lokasyona özel hizmet üretmek, iş makinelerinin sahadaki verimliliğini artıran en önemli unsurdur. <strong>Ankara günlük sepetli vinç</strong> ağımız, şehrin ticari merkezlerinden sanayi akslarına, yeni yerleşim yerlerinden eski mahallelerine kadar her ilçenin yapısal farklılığına uygun araç yönlendirmesi sağlar.
              </p>
              
              <p>
                İş dünyasının ve plazaların kalbi olan Çankaya ve Kızılay bölgesinde, yüksek katlı binaların cepheleri, ağır reklam panoları ve cam silim işleri oldukça yoğundur. <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="font-semibold underline">Çankaya günlük vinç kiralama</Link> ekiplerimiz bu merkezlerdeki plaza ve ticaret alanlarında, sabahtan akşama kadar süren yoğun operasyonlarda tam gün mesai yaparak görev alır.
              </p>

              <p>
                Öte yandan, sanayinin yükünü çeken Ostim ve İvedik gibi noktalarda ise durum tamamen farklıdır. Burada sanayi tesisleri, fabrika çatı onarımları ve büyük depo bakım işleri öne çıkar. <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline">Yenimahalle vinç kiralama</Link> departmanımız, ağır sanayi alanlarında çelik konstrüksiyon işleri veya dış cephe yenilemeleri için büyük tonajlı, rüzgara dayanıklı araçları fabrikalara sevk eder. Aynı üretim eksenindeki dış hatlarda yer alan Sincan ve Kazan’da da yine fabrika, depo ve üretim tesisi çalışmaları için <Link href="/bolgeler/sincan-sepetli-vinc-kiralama" className="font-semibold underline">Sincan günlük vinç kiralama</Link> oldukça yoğun talep gören bir pakettir.
              </p>

              <p>
                Başkentin batı yönüne doğru gelişen Etimesgut, Eryaman ve Bağlıca üçgeni, devasa site ve apartman projeleriyle doludur. Bu sitelerin yıllık dış cephe boyamaları veya izolasyon yenilemeleri için <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline">Etimesgut günlük sepetli vinç</Link> hizmetlerimiz, yönetimlerin en sık başvurduğu, günlerce süren bloklar arası planlı çalışmaları başarıyla yönetir.
              </p>

              <p>
                Şehrin daha köklü ve sokakları dar olan Keçiören ve Mamak ilçelerinde ise uzun süreli bina bakım işleri veya belediye onarımlarında, mahalleyi rahatsız etmeden çalışan araçlarımız görev yapar. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline">Keçiören sepetli vinç hizmeti</Link> ve <Link href="/bolgeler/mamak-sepetli-vinc-kiralama" className="font-semibold underline">Mamak sepetli vinç kiralama</Link> hizmetlerimizle en dik yokuşlarda bile güvenle gün boyu çalışıyoruz. Lüks müstakil yaşamın adresi Gölbaşı’nda ise villa onarımı, site peyzajı ve bahçe düzenleme işleri için araçlarımızı gün boyu tahsis ediyoruz. İşletmenizin konumu ne olursa olsun, en uygun planlama için <Link href="/bolgeler" className="font-semibold underline">Ankara hizmet bölgeleri</Link> sayfamızdan detaylara ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Fiyat Bölümü */}
        <section id="fiyatlar" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Ankara Günlük Vinç Kiralama Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8">
                <p>
                  Günlük vinç kiralama, uzun süren işlerde saatlik kiralama taksimetresine göre maliyet olarak her zaman daha avantajlı ve öngörülebilir olabilir. Şantiyeniz için net bir bütçe oluşturabilmeniz adına <strong>günlük vinç fiyatları ankara</strong> pazarında birtakım dinamik faktörlere bağlı olarak değişiklik gösterir:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <ul className="space-y-3 m-0">
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Çalışma Süresi:</strong> Tam gün (8 saat) veya haftalık planlama.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Vinç Yüksekliği:</strong> Kullanılacak bom/metre uzunluğu.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>İşin Yapılacağı İlçe:</strong> Merkezden uzaklık ve nakliye bedeli.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Zemin Durumu:</strong> Aracın kurulum yapacağı alanın eğimi.</li>
                  </ul>
                  <ul className="space-y-3 m-0">
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Saha Erişimi:</strong> Dar sokak veya engelli alan yapısı.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Operatör İhtiyacı:</strong> Operatörün uzmanlık süreci.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Hafta İçi / Hafta Sonu:</strong> Mesai günleri ve tatil farklılıkları.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Acil Yönlendirme:</strong> Planlı iş ile acil müdahale farkı.</li>
                  </ul>
                </div>
                <p className="mt-6 mb-0 text-gray-800 font-medium">
                  En doğru fiyat için işin konumunu, çalışılacak alanın fotoğrafını ve tahmini çalışma süresini WhatsApp üzerinden ekibimize göndererek anında net bir yevmiye bedeli öğrenebilirsiniz.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center shadow-sm">
                <p className="text-gray-900 font-bold mb-4 text-lg">Günlük vinç fiyatı almak için 0551 606 68 78 numarasını arayın veya WhatsApp’tan yazın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="https://wa.me/905516066878" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1ebd5a] transition-colors text-lg">
                    <MessageCircle size={22} /> Konum ve Fotoğraf Gönder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Günlük Kiralamanın Avantajları */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Günlük Vinç Kiralamanın Avantajları</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Ekonomik Planlama</h3>
                  <p className="text-gray-600 text-sm m-0">Uzun süreli işler için saatlik dilimler yerine tek bir günlük bütçe çıkartılarak maliyet kontrol altına alınır.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Tam Gün Operatörlü Çalışma</h3>
                  <p className="text-gray-600 text-sm m-0">G sınıfı ehliyetli operatörümüz, sabahtan akşama kadar şantiyenizde makinenin başından ayrılmadan güvenliği sağlar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">İşin Kesintisiz İlerlemesi</h3>
                  <p className="text-gray-600 text-sm m-0">Araç sahada sabit kaldığı için iş durmaz, personeliniz zaman baskısı hissetmeden en verimli şekilde çalışır.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Şantiye ve Cephe İçin Uygun Çözüm</h3>
                  <p className="text-gray-600 text-sm m-0">Apartman mantolaması, plaza cam temizliği gibi ağır sanayi ve inşaat projeleri için biçilmiş kaftandır.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Esnek Yönlendirme</h3>
                  <p className="text-gray-600 text-sm m-0">İster aynı gün acil olarak isterseniz ileri tarihli planlı bir şekilde operasyonunuz için aracı rezerve edebilirsiniz.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Saha Şartlarına Uygun Araç Seçimi</h3>
                  <p className="text-gray-600 text-sm m-0">Ankara genelinde, projenizin bulunduğu ilçenin sokak yapısına ve alan darlığına tam uyumlu hidrolik cihaz yönlendirilir.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Süreç Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Günlük Vinç Kiralama Süreci Nasıl İşler?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Phone size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">İletişime Geçin</h3>
                <p className="text-gray-600 text-sm">0551 606 68 78 numarasını arayın veya doğrudan WhatsApp’tan detayları yazın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><MapPin size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Detay Paylaşın</h3>
                <p className="text-gray-600 text-sm">Konum, iş türü, ulaşılacak yükseklik ve tahmini kaç gün süreceğini bizimle paylaşın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><CalendarDays size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Planlama Yapılsın</h3>
                <p className="text-gray-600 text-sm">Projenize en uygun vinç seçimi yapılarak sertifikalı operatör planlaması hazırlansın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><ShieldCheck size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Güvenli Çalışma</h3>
                <p className="text-gray-600 text-sm">Araç mesai başlangıcında sahaya yönlendirilir ve iş güvenli bir şekilde tamamlanır.</p>
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
              <Link href="/hizmetler" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ankara Vinç Kiralama Hizmetleri</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ağaç Budama Hizmeti</span>
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
              <p className="text-lg text-gray-600">Günlük kiralama hizmetimizle ilgili merak edilen başlıklar.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Şantiyeniz İçin Güvenilir Çözüm Ortağınız</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Ankara günlük vinç kiralama hizmetlerimizle tüm gün boyunca güvenle, sorunsuzca çalışın. Profesyonel teklif almak için bizi arayın.</p>
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
                Konum ve Fotoğraf Gönder
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
