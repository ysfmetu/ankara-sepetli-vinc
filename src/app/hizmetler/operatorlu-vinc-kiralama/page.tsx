import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, ArrowRight, HardHat, ClipboardCheck, Wrench, AlertTriangle, Headset, MapPin, Building2, Zap, Trees, PenTool, Truck, Camera } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceRegionalLinks from '@/components/ServiceRegionalLinks';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Ankara Operatörlü Vinç Kiralama | Güvenli Sepetli Vinç Hizmeti',
  description: 'Ankara’da operatörlü vinç kiralama hizmeti. Güvenli çalışma, doğru ekipman seçimi ve hızlı vinç yönlendirme için hemen arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/operatorlu-vinc-kiralama'),
  openGraph: {
    title: 'Ankara Operatörlü Vinç Kiralama | Güvenli Sepetli Vinç Hizmeti',
    description: 'Ankara’da operatörlü vinç kiralama hizmeti. Güvenli çalışma, doğru ekipman seçimi ve hızlı vinç yönlendirme için hemen arayın: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/operatorlu-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Operatörlü vinç kiralama nedir?',
    a: 'Operatörlü vinç kiralama, sadece makinenin değil, aynı zamanda aracı kullanacak, iş güvenliği sertifikasına ve tecrübeye sahip profesyonel bir operatörün de tarafımızdan tahsis edildiği güvenli kiralama modelidir.'
  },
  {
    q: 'Ankara’da operatörlü vinç kiralama fiyatı nasıl belirlenir?',
    a: 'Fiyatlar projenin yüksekliği, kiralama süresi (saatlik veya günlük), lokasyon, zemin koşulları ve yanaşma mesafesi gibi değişkenlere göre belirlenir. En net fiyat için işinizin detaylarını bize iletmeniz yeterlidir.'
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: 'Evet, tüm ankara operatörlü vinç kiralama hizmetlerimizde deneyimli ve sertifikalı operatörlerimiz aracı kullanmak üzere fiyata dahildir.'
  },
  {
    q: 'Operatörlü sepetli vinç saatlik kiralanabilir mi?',
    a: 'Kesinlikle. Özellikle kısa süren arıza, montaj veya tamirat işlemleriniz için operatörlü sepetli vinçlerimizi saatlik olarak kiralayabilirsiniz.'
  },
  {
    q: 'Aynı gün operatörlü vinç yönlendirebilir misiniz?',
    a: 'Geniş araç ağımız ve uzman kadromuz sayesinde, Ankara içi uygunluk durumuna göre acil taleplerinizde aynı gün araç ve operatör yönlendirmesi yapmaktayız.'
  },
  {
    q: 'Tabela montajı için operatörlü vinç gerekir mi?',
    a: 'Evet, tabela montajı genellikle dar alanlarda ve yüksek noktalarda yapıldığı için güvenli bir çalışma ortamı sağlamak adına operatörlü vinç kullanımı kesinlikle önerilir.'
  },
  {
    q: 'Ağaç budama işlerinde operatörlü vinç kullanılır mı?',
    a: 'Evet, çevreye veya elektrik hatlarına zarar vermeden yüksek dalların güvenle kesilebilmesi için operatör kontrollü sepetli vinçler en güvenli ve etkili çözümdür.'
  },
  {
    q: 'Ankara’nın hangi ilçelerine hizmet veriyorsunuz?',
    a: 'Çankaya, Yenimahalle, Keçiören, Etimesgut, Mamak, Sincan, Kazan ve Gölbaşı başta olmak üzere Ankara’nın tüm bölgelerine operatörlü hizmet sağlamaktayız.'
  }
];

export default function OperatorluVincKiralamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Operatörlü Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        },
        serviceType: 'Operatörlü Vinç Kiralama',
        telephone: siteConfig.contact.phoneE164,
        description: "Ankara’da operatörlü vinç kiralama hizmetiyle tabela montajı, cephe çalışmaları, elektrik bakım ve ağaç budama işleriniz için güvenli, hızlı ve profesyonel destek alın.",
        url: getCanonicalUrl('/hizmetler/operatorlu-vinc-kiralama')
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
            name: 'Operatörlü Vinç Kiralama',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/operatorlu-vinc-kiralama`
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
            <Image
              src="/images/hero-bg.jpg"
              alt="ankara operatörlü vinç kiralama"
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
                  { label: 'Operatörlü Vinç', href: '/hizmetler/operatorlu-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Operatörlü Vinç Kiralama
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara’nın tüm ilçelerinde yüksek erişim gerektiren işleriniz için deneyimli operatör eşliğinde sepetli vinç kiralama hizmeti sunuyoruz. Tabela montajı, dış cephe çalışmaları, elektrik bakım, ağaç budama, fabrika ve site bakım işleri için güvenli, planlı ve hızlı çözümler sağlıyoruz.
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
                  href="/hizmetler/sepetli-vinc-kiralama"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white underline hover:text-gray-200 px-4 py-4 font-medium transition-all"
                >
                  Sepetli Vinç Kiralama Sayfasına Git
                </Link>
              </div>

              {/* Güven Sinyalleri */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><HardHat size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Deneyimli Operatör Desteği</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Clock size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Ankara Geneli Hızlı Yönlendirme</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><ShieldCheck size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">İşe Uygun Vinç Seçimi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><CheckCircle2 size={24} className="text-primary" /></div>
                  <span className="font-semibold text-sm md:text-base">Saatlik ve Günlük Kiralama</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Niyet Odaklı Giriş Bölümü */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Operatörlü Vinç Kiralama Neden Önemlidir?</h2>
              <p>
                Yüksek alanlarda gerçekleştirilecek çalışmalar, doğası gereği ciddi riskler barındırır. Bu nedenle sepetli vinç yalnızca araç kiralama işi değildir; doğru operatör, güvenlik bilinci ve saha tecrübesi gerektiren hayati bir süreçtir. Makinenin kalitesi kadar, o makineyi yöneten kişinin deneyimi de işinizin sağlıklı yürümesi için en belirleyici unsurdur. İşe uygun olmayan bir makine seçimi ya da tecrübesiz bir kullanım, maddi hasarlara ve çok daha kötüsü iş kazalarına davetiye çıkarabilir.
              </p>
              <p>
                Dar sokaklar, eğimli zeminler, bina cepheleri, sıkışık tabela alanları, rüzgarlı hava koşulları veya yoğun trafik gibi dış etkenlerin olduğu senaryolarda operatör tecrübesi tartışmasız bir öneme sahiptir. <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold underline">Ankara sepetli vinç kiralama</Link> süreçlerinde operatörlerimiz sadece aracı alana getirmekle kalmaz; rüzgar hızından zeminin yük taşıma kapasitesine kadar birçok unsuru analiz eder. Bu profesyonel ve operatörlü hizmet, işi hızlandırır, beklenmedik riskleri azaltır ve doğru ekipman kullanımını tam olarak sağlar.
              </p>
              <p>
                Ankara gibi sürekli hareketli ve dinamik bir yapısı olan metropolde, her ilçenin kendi saha dinamikleri vardır. Çankaya’nın kalabalık caddeleri, Yenimahalle ve Ostim’in yoğun sanayi alanları, Etimesgut’un yeni gelişen yerleşkeleri veya Keçiören, Mamak ve Sincan gibi bölgelerin kendine has dokusu birbirinden farklı planlamalar gerektirir. <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> kapsamında ekibimiz, bu bölgelerdeki farklı saha şartlarına göre en doğru makineyi belirler ve sertifikalı operatörü ile birlikte projenize dahil olur. Gerek uzun süreli projelerinizde gerekse anlık müdahaleler gerektiren <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link> işlemlerinizde, can ve mal güvenliğiniz profesyonellerimize emanettir.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Operatörlü Hizmet Kapsamı */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operatörlü Vinç Hizmetimiz Neleri Kapsar?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sadece bir araç değil, projenizin başından sonuna kadar kusursuz ilerlemesini sağlayan kapsamlı bir teknik destek paketi sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Saha ve İş Analizi</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Operasyon başlamadan önce uzman ekibimiz tarafından işin yüksekliği, lokasyonu, zemin durumu, aracın yanaşma mesafesi ve çalışma süresi profesyonel bir gözle değerlendirilir ve en risksiz plan yapılır.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Doğru Vinç Yönlendirme</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  İşin türüne, metrajına ve fiziksel alanına göre filomuzdan sizin için en verimli olacak sepetli vinç, örümcek platform veya uygun yükseklikteki mobil araç özenle seçilir. Yanlış araçla zaman kaybı yaşamazsınız.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <HardHat size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deneyimli Operatör Kullanımı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Vinç kullanımı sadece bir aracın hareket ettirilmesi değildir; iş güvenliği kurallarına tam uyum içerisinde, G sınıfı ehliyetli ve sahalarda sayısız saat tecrübesi olan operatörümüz tarafından idare edilir.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenli Çalışma Planı</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Dar alanlarda dönüşler, anlık trafik akışı, ani rüzgar değişimleri, yüksek elektrik hatları ve çevre güvenliği gibi tüm riskler operatörümüz tarafından dikkate alınarak sıfır kaza hedefiyle çalışılır.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Headset size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">İş Süresince Teknik Destek</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Sadece makineyi yönetmekle kalmayan operatörümüz, sepet içerisindeki personellerinize iş boyunca yönlendirme yapar, en ideal pozisyonu alır ve güvenli çalışma akışını anlık olarak yönetir.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Teklif ve Yönlendirme</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Zamanınızın değerli olduğunu biliyoruz. Konum bilgisi ve işin yapılacağı yerin fotoğrafı ile WhatsApp üzerinden hemen iletişime geçtiğinizde saniyeler içinde hızlı fiyatlandırma ve planlama yapılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ara CTA */}
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Konum ve Fotoğraf Gönder, Hızlı Fiyat Al</h3>
            <p className="text-primary-foreground mb-8 text-lg">İhtiyacınız olan operatörlü vinç desteği için iş alanınızın fotoğrafını bize iletin, en güvenli aracı yönlendirelim.</p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
            >
              <MessageCircle size={24} />
              WhatsApp'tan Teklif İste
            </a>
          </div>
        </div>

        {/* 4. Kullanım Alanları */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Operatörlü Vinç Hangi İşlerde Tercih Edilir?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hassas manevra ve çevre güvenliğinin kritik olduğu yüksek alan operasyonları için operatör şarttır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><PenTool size={24} /></div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">Tabela Montajı ve Sökümü</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ağır reklam panolarının vitrin veya bina cephelerine takılması esnasında sepetin milimetrik hareket ettirilmesi gerekir. Operatör bu dengeyi sağlar.
                </p>
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="text-primary font-bold text-sm hover:underline">Operatörlü vinç desteği için hemen teklif alın →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Building2 size={24} /></div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">Dış Cephe Temizlik ve Bakım</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Temizlik personelinin işine odaklanabilmesi için vincin pencereler arasında pürüzsüzce geçiş yapması ve güvenli mesafeyi koruması operatöre bağlıdır.
                </p>
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="text-primary font-bold text-sm hover:underline">Operatörlü vinç desteği için hemen teklif alın →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Zap size={24} /></div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">Elektrik Direği ve Aydınlatma Bakımı</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Yüksek gerilim hatları veya zorlu sokak lambası değişimlerinde tehlike çok büyüktür. Operatörümüz izolasyon ve çevre güvenliğini denetler.
                </p>
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="text-primary font-bold text-sm hover:underline">Operatörlü vinç desteği için hemen teklif alın →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Trees size={24} /></div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">Ağaç Budama ve Tehlikeli Dal Kesimi</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Düşen dev dalların bina çatılarına veya arabalara zarar vermemesi için doğru pozisyon alınmalı ve sepetin sarsılması engellenmelidir.
                </p>
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="text-primary font-bold text-sm hover:underline">Operatörlü vinç desteği için hemen teklif alın →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Wrench size={24} /></div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">Site, Apartman ve Plaza Bakımları</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Bina mantolaması, oluk tamiratı ve baca işlerinde rüzgarlı havalarda bile makinenin yere sağlam basmasını sertifikalı personel garantiler.
                </p>
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="text-primary font-bold text-sm hover:underline">Operatörlü vinç desteği için hemen teklif alın →</a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Truck size={24} /></div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">Fabrika, Depo ve Sanayi İşleri</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Fabrika içi tavan aydınlatma ve HVAC kurulumları gibi dar üretim hatları üzerinde manevra yapmak tamamen operatör tecrübesine bağlıdır.
                </p>
                <a href={`tel:${siteConfig.contact.phoneE164}`} className="text-primary font-bold text-sm hover:underline">Operatörlü vinç desteği için hemen teklif alın →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ankara Lokal Hizmet Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Operatörlü Vinç Kiralama Hizmeti Verdiğimiz Bölgeler</h2>
              <p>
                Ankara’da her semtin, caddenin ve sanayi sitesinin kendine has fiziksel yapısı ve çalışma zorlukları bulunur. Binaların çok yakın olduğu dar sokaklardan, rüzgar alan geniş fabrika arazilerine kadar farklı sahalar farklı uzmanlıklar gerektirir. <strong>Ankara operatörlü vinç kiralama</strong> hizmetlerimizle şehrin her ilçesinde, o bölgenin dinamiklerini bilen tecrübeli operatörlerimizle çalışıyoruz.
              </p>
              
              <p>
                Özellikle ticari hayatın merkezinde yer alan <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama">Çankaya operatörlü vinç kiralama</Link> taleplerinde Kızılay, Tunalı ve iş merkezlerinin bulunduğu dar alanlarda tabela ve cephe temizlik işlerini trafiği aksatmadan, çevreye zarar vermeden tamamlıyoruz. Yoğunluğun fazla olduğu bu ilçelerde, operatörlerimizin hızlı kurulum ve iş bitirme yetenekleri büyük avantaj sağlamaktadır.
              </p>

              <p>
                Başkentin üretim ve sanayi gücünü yansıtan Ostim ve İvedik gibi noktalarda sanayi bakım işleri hiç durmaz. Bu ağır sanayi şartlarında <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama">Yenimahalle vinç kiralama</Link> hizmetimizle fabrika içlerinde havalandırma montajı, depo dış cephe tamiratları gibi hassasiyet gerektiren görevler operatörlerimiz tarafından başarıyla yürütülür. Aynı şekilde daha büyük ölçekli üretim tesislerinin bulunduğu dış bölgelerde, <Link href="/bolgeler/sincan-sepetli-vinc-kiralama">Sincan operatörlü vinç</Link> ve Kazan çevresindeki fabrika, depo ve üretim tesisi bakım işleri için daha yüksek tonajlı, rüzgar dayanımı yüksek cihazlarımızla sahada yer alıyoruz.
              </p>

              <p>
                Hızla gelişen modern konut ve devasa site projelerinin yer aldığı batı aksında ise site yönetimlerinin sürekli bakım ihtiyaçları doğar. <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama">Etimesgut operatörlü sepetli vinç</Link> ekiplerimiz; Eryaman ve Bağlıca'da site ve apartman çalışmaları kapsamında dış cephe boyama, çatı oluk onarımı veya mantolama onarımları için hızlı çözümler üretir.
              </p>

              <p>
                Daha eski ve geleneksel yapıların yoğun olduğu alanlarda iş yapmak çok daha farklı bir uzmanlık ister. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama">Keçiören sepetli vinç hizmeti</Link> ve <Link href="/bolgeler/mamak-sepetli-vinc-kiralama">Mamak sepetli vinç kiralama</Link> ekiplerimiz yokuşlu arazilerde, dar sokak aralarında ve yüksek binalara erişimde emniyeti asla elden bırakmayan özel tekniklerle yanaşma yapar. 
              </p>

              <p>
                Son olarak, lüks konutların ve peyzaj alanlarının yoğun olduğu Gölbaşı’nda villa, site ve bahçe düzenleme işleri için tehlikeli ağaç budama veya dekoratif çatı onarımları güvenli ekipmanlarımızla sağlanır. Ankara genelinde özellikle <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Etimesgut sepetli vinç kiralama</Link> taleplerine hızlı dönüş sağlıyoruz. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Keçiören sepetli vinç</Link> hizmetlerinde dar sokak ve apartman cephe işleri için uygun araç yönlendirmesi yapıyoruz. <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Ostim sepetli vinç kiralama</Link> hizmetlerinde fabrika, depo ve sanayi bakım işleri öne çıkarken, <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Yenimahalle vinç kiralama</Link> taleplerinde hem sanayi hem konut bölgelerine hızlı hizmet veriyoruz. Ankara'nın her noktası için hazırladığımız <Link href="/bolgeler" className="font-semibold underline text-primary">Ankara hizmet bölgeleri</Link> planlamamızı inceleyebilir ve mahallenize uygun güvenli aracı talep edebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <ServiceRegionalLinks variant="C" />

        {/* 6. Fiyat Bölümü */}
        <section id="fiyatlar" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Ankara Operatörlü Vinç Kiralama Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8">
                <p>
                  Operatör destekli vinç hizmetlerinde net bir rakam vermek yerine, her projenin kendi dinamiklerine uygun olarak şeffaf bir fiyatlandırma politikası uyguluyoruz. Fiyatı belirleyen temel unsurlar şunlardır:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <ul className="space-y-3 m-0">
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Çalışma Yüksekliği:</strong> Erişilecek kat ve metre.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>İşin Süresi:</strong> Saatlik veya günlük periyotlar.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>İşin Yapılacağı İlçe:</strong> Yola çıkılacak mesafe durumu.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Zemin ve Yanaşma Durumu:</strong> Kurulumun zorluğu.</li>
                  </ul>
                  <ul className="space-y-3 m-0">
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>İş Güvenliği Riski:</strong> Çevre etkenleri ve tehlike boyutu.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Operatör İhtiyacı:</strong> Operatörün çalışma süresi.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Acil Yönlendirme:</strong> Hızlı ve acil talep durumu.</li>
                    <li className="flex items-start gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0 mt-1" size={18} /> <strong>Çalışma Günü:</strong> Hafta içi / hafta sonu / gece farkı.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <p className="text-gray-900 font-semibold mb-4">En doğru fiyat için konum, iş fotoğrafı ve tahmini çalışma süresini WhatsApp’tan gönderin; hızlı teklif alın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1ebd5a] transition-colors">
                    <MessageCircle size={18} /> Hızlı Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Operatörlü vs Operatörsüz */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Operatörlü Vinç Kiralama ile Operatörsüz Kiralama Arasındaki Fark</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-500 text-white font-bold py-1 px-4 rounded-bl-xl text-sm">Kesinlikle Önerilir</div>
                  <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="text-green-600 w-10 h-10" />
                    <h3 className="text-2xl font-bold text-green-900 m-0">Operatörlü Kiralama</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                      <span className="text-green-900 font-medium"><strong>Çok Daha Güvenlidir:</strong> İşi ehline teslim eder, kaza riskini sıfıra indirirsiniz.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                      <span className="text-green-900 font-medium"><strong>Profesyonel Yönetim:</strong> İş güvenliği ve ekipman kullanımı profesyonelce yönetilir.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                      <span className="text-green-900 font-medium"><strong>Saha Riskleri Azalır:</strong> Yanlış araç kullanımı ve altyapıya zarar verme gibi maliyetli riskler ortadan kalkar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                      <span className="text-green-900 font-medium"><strong>Hızlı ve Planlı Süreç:</strong> Personeliniz platformu çözmeye çalışmaz, iş daha hızlı ve planlı ilerler.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                      <span className="text-green-900 font-medium"><strong>Lokal Avantaj:</strong> Ankara içi saha şartlarında deneyimli operatör manevra ve zaman avantajı sağlar.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 opacity-80">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="text-orange-500 w-10 h-10" />
                    <h3 className="text-2xl font-bold text-gray-600 m-0">Operatörsüz Kiralama (Kuru Kiralama)</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-300 shrink-0 mt-1 flex items-center justify-center text-white text-xs font-bold">-</div>
                      <span className="text-gray-600">Makinenin tüm yasal sorumluluğu ve kaza riski tamamen size geçer.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-300 shrink-0 mt-1 flex items-center justify-center text-white text-xs font-bold">-</div>
                      <span className="text-gray-600">Sertifikalı ve aracı tanıyan bir personel bulmak sizin sorumluluğunuzdadır.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-300 shrink-0 mt-1 flex items-center justify-center text-white text-xs font-bold">-</div>
                      <span className="text-gray-600">Makinenin kurulması ve denge ayaklarının ayarlanması tecrübe eksikliğiyle uzayabilir.</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-sm text-gray-500 italic bg-white p-4 rounded-lg border border-gray-100">
                    Firmamız tüm yüksek erişim projelerinde, can ve mal güvenliği ilkesi gereği daima operatörlü kiralama hizmeti alınmasını tavsiye etmektedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Süreç Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Operatörlü Vinç Kiralama Süreci Nasıl İşler?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Phone size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Bizi Arayın</h3>
                <p className="text-gray-600 text-sm">Bizi arayın veya hızlıca WhatsApp’tan yazarak talebinizi oluşturun.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Camera size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Detay Paylaşın</h3>
                <p className="text-gray-600 text-sm">İşin yapılacağı konum, iş türü ve alanın fotoğrafını bizimle paylaşın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><ClipboardCheck size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Planlama Yapılsın</h3>
                <p className="text-gray-600 text-sm">Uygun vinç ve size hizmet verecek operatör planlaması eksiksiz yapılsın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><ShieldCheck size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Güvenli Çalışma</h3>
                <p className="text-gray-600 text-sm">Araç sahaya yönlendirilsin ve projeniz tam güvenlik içinde selametle tamamlansın.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. İlgili Hizmetler İç Link Alanı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">İlgili Vinç Kiralama Hizmetleri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ankara Sepetli Vinç</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ankara Vinç Hizmetleri</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Saatlik Vinç</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Günlük Vinç</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/hizmetler/agac-budama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Ağaç Budama</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
              <Link href="/bolgeler" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm md:text-base">Hizmet Bölgeleri</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        {/* 10. FAQ Bölümü */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Güvenli operatörlü hizmet süreci hakkında merak edilenler.</p>
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
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Operatörlü ve Güvenli Hizmet İçin Bizi Arayın</h2>
            <p className="text-primary-foreground mb-10 text-lg max-w-2xl mx-auto">İşinizin gerektirdiği güvenliği şansa bırakmayın. Sertifikalı operatörlerimizle projelerinizi güvenle tamamlıyoruz.</p>
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
                WhatsApp'tan Teklif Al
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
