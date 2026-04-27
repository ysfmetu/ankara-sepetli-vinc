import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, ArrowRight, Wrench, Zap, Trees, Building2, HardHat, PenTool } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Ankara Vinç Kiralama Hizmetleri | Sepetli Vinç, Operatörlü Vinç ve Platform',
  description:
    "Ankara genelinde sepetli vinç kiralama, operatörlü vinç, saatlik ve günlük vinç hizmetleri. Tabela montajı, cephe temizliği, elektrik bakım ve ağaç budama için 7/24 hızlı teklif alın.",
  alternates: getMetadataAlternates('/hizmetler'),
  openGraph: {
    title: 'Ankara Vinç Kiralama Hizmetleri | Sepetli Vinç, Operatörlü Vinç ve Platform',
    description:
      "Ankara genelinde sepetli vinç kiralama, operatörlü vinç, saatlik ve günlük vinç hizmetleri. Tabela montajı, cephe temizliği, elektrik bakım ve ağaç budama için 7/24 hızlı teklif alın.",
    url: getCanonicalUrl('/hizmetler'),
  },
};

const faqs = [
  {
    q: 'Ankara’da sepetli vinç kiralama fiyatı nasıl belirlenir?',
    a: 'Fiyatlarımız; ihtiyaç duyduğunuz vincin yüksekliği, çalışma süresi (saatlik veya günlük), lokasyon, yapılacak işin türü, operatör gereksinimi ve aciliyet durumuna göre değişiklik göstermektedir. Kesin ve en doğru fiyat teklifi için bizi hemen arayabilirsiniz.'
  },
  {
    q: 'Saatlik sepetli vinç kiralanabilir mi?',
    a: 'Evet, tabela montajı, lamba değişimi, kısa süreli cephe tamiratı gibi işleriniz için saatlik sepetli vinç kiralama hizmetimiz bulunmaktadır. İhtiyacınıza uygun aracı belirleyip size özel saatlik teklif sunuyoruz.'
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: 'Tüm sepetli vinç ve platform kiralama hizmetlerimizde, alanında uzman ve sertifikalı operatörlerimiz aracı kullanmak üzere hizmete dahildir. Güvenliğiniz ve işin eksiksiz tamamlanması için operatörlü vinç sağlıyoruz.'
  },
  {
    q: 'Hangi ilçelere hizmet veriyorsunuz?',
    a: 'Ankara’nın tüm ilçelerine; Çankaya, Yenimahalle, Keçiören, Mamak, Sincan, Etimesgut, Altındağ, Gölbaşı ve çevre bölgelere 7/24 sepetli vinç kiralama hizmeti sunuyoruz.'
  },
  {
    q: 'Tabela montajı için sepetli vinç kullanılır mı?',
    a: 'Evet, tabela montajı, açık hava reklamcılığı ve dış cephe totem kurulumları için sepetli vinçlerimiz en çok tercih edilen, pratik ve güvenli çözümdür.'
  },
  {
    q: 'Ağaç budama için sepetli vinç kiralanır mı?',
    a: 'Binalara ve elektrik hatlarına yakın, tehlike arz eden veya yüksekte bulunan ağaçların güvenli bir şekilde budanması ve kesilmesi için operatörlü sepetli vinçlerimiz sıklıkla kullanılmaktadır.'
  },
  {
    q: 'Aynı gün vinç yönlendirebilir misiniz?',
    a: 'Geniş araç filomuz sayesinde, Ankara’nın her noktasına uygunluk durumuna göre acil talepleriniz için aynı gün, hatta saatler içinde hızlı araç yönlendirmesi yapabiliyoruz.'
  }
];

export default function HizmetlerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Vinç Kiralama Hizmetleri',
        provider: {
          '@type': 'LocalBusiness',
          name: SEO_CONFIG.siteName,
          url: SEO_CONFIG.baseUrl
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        },
        description: "Ankara genelinde sepetli vinç kiralama, operatörlü vinç, saatlik ve günlük vinç hizmetleri. Tabela montajı, cephe temizliği, elektrik bakım ve ağaç budama için 7/24 hızlı teklif alın.",
        url: getCanonicalUrl('/hizmetler')
      },
      {
        '@type': 'LocalBusiness',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.baseUrl,
        telephone: siteConfig.contact.phoneE164,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ankara',
          addressCountry: 'TR'
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
        <section className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Hizmetlerimiz', href: '/hizmetler' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-6 mb-6 tracking-tight">
                Ankara Vinç <span className="text-primary">Kiralama Hizmetleri</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Ankara Geneli Sepetli Vinç ve Vinç Kiralama Hizmetleri
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                Ankara’nın tüm ilçelerinde; tabela montajı, cephe temizliği, elektrik bakım, ağaç budama, dış cephe çalışmaları ve yüksek erişim gerektiren tüm işler için operatörlü sepetli vinç kiralama hizmeti sunuyoruz. Saatlik, günlük ve proje bazlı kiralama seçenekleriyle hızlı, güvenli ve uygun fiyatlı çözümler sağlıyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <Link
                  href="/bolgeler"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Hizmet Bölgelerini Gör
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Güven Sinyalleri Alanı */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Clock size={28} />
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">7/24 Ankara Geneli Hizmet</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">Operatörlü ve Güvenli Çalışma</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">Saatlik / Günlük Kiralama</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                  <Wrench size={28} />
                </div>
                <h3 className="font-bold text-gray-900 leading-tight">Tabela, Cephe, Budama ve Elektrik İşleri</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Ana Hizmet Kartları */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ankara'da yüksek erişim gerektiren tüm projeleriniz için profesyonel çözümler</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Sepetli Vinç Kiralama</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Her türlü yüksek erişim işlemi için ideal, manevra kabiliyeti yüksek sepetli platformlar.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <HardHat size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Operatörlü Vinç Kiralama</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">İş güvenliğine tam uyumlu, tecrübeli ve sertifikalı operatörlerimiz eşliğinde güvenli hizmet.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/saatlik-vinc-kiralama" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Saatlik Vinç Kiralama</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Kısa süreli işleriniz için esnek ve bütçe dostu saatlik araç kiralama seçenekleri.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/gunluk-vinc-kiralama" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Günlük Vinç Kiralama</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Uzun sürecek projeleriniz, dış cephe veya şantiye çalışmaları için ekonomik günlük kiralama.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Cephe Temizliği Vinç</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Plaza ve yüksek binaların dış cephe cam temizlikleri için iskelden çok daha güvenli çözüm.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/tabela-montaj" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <PenTool size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Tabela Montajı Vinç</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Açık hava reklamcılığı, ışıklı totem ve bina tabelası kurulumları için garantili hizmet.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/elektrik-bakim" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Elektrik Bakım Vinç</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Sokak lambası, aydınlatma direkleri ve yüksek gerilim hattı müdahaleleri için.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/agac-budama" className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm group-hover:bg-white/90">
                  <Trees size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Ağaç Budama Vinç</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 line-clamp-2">Tehlike yaratan dalların kontrollü kesimi ve güvenli ağaç budama işlemleri için.</p>
                <span className="text-primary group-hover:text-white font-semibold flex items-center gap-1 text-sm">İncele <ArrowRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <CallToAction
          title="Yüksekteki İşleriniz İçin Beklemeyin"
          message="Merhaba, Ankara geneli sepetli vinç hizmetleriniz için fiyat bilgisi almak istiyorum."
        />

        {/* 4. SEO İçerik Bölümü */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0">Ankara’da Hangi İşler İçin Sepetli Vinç Kiralanır?</h2>
              
              <p>
                Ankara gibi dinamik ve sürekli gelişen bir metropolde, yüksek katlı yapılara erişim ve zorlu fiziki şartlarda güvenli çalışma zorunluluğu her geçen gün artmaktadır. İster ticari bir işletme olun, ister bireysel bir kullanıcı, <strong>Ankara sepetli vinç kiralama</strong> hizmetlerimiz size iskelenin kurulamayacağı dar alanlarda veya çok yüksek noktalarda pratik çözümler sunar. Firmamız, geniş ve modern araç filosuyla ihtiyaç duyduğunuz her an, işinize en uygun aracı hızlıca yönlendirmektedir.
              </p>

              <p>
                Yüksek erişim gerektiren işlerin başında <strong>tabela montajı</strong> ve açık hava reklamcılığı gelir. Özellikle <strong>Çankaya ve Kızılay'da tabela montajı</strong> yapmak, dar ve yoğun caddeler sebebiyle büyük özen ve manevra kabiliyeti yüksek bir sepetli vinç gerektirir. <strong>Saatlik vinç kiralama</strong> opsiyonumuzla, mağaza tabelası değişimleri veya ışıklı totem montajlarını trafiği engellemeden, en az maliyetle tamamlayabilirsiniz.
              </p>

              <p>
                Sanayi ve üretimin yoğun olduğu bölgelerde ise daha ağır bakım işleri söz konusudur. <strong>Yenimahalle ve Ostim'de sanayi bakım işleri</strong> için genellikle <strong>günlük vinç kiralama</strong> tercih edilmektedir. Fabrika çatı tamiratları, yüksek tavanlı depo içi aydınlatma değişimleri veya dış cephe havalandırma sistemlerinin kurulumu ancak güvenli bir platform üzerinden gerçekleştirilebilir.
              </p>

              <p>
                Konut projeleri ve sitelerin yoğunlukta olduğu <strong>Etimesgut, Eryaman ve Bağlıca'da site ve bina çalışmaları</strong>, sıklıkla <strong>dış cephe temizliği</strong>, mantolama tamiratları veya yağmur oluğu yenileme gibi ihtiyaçlar doğurur. Bu bölgelerde <strong>operatörlü vinç kiralama</strong> hizmetimiz sayesinde bina sakinlerinin güvenliği sağlanarak işler eksiksiz teslim edilir. Operatörlerimiz, binaların cephelerine zarar vermeden sepetli platformu milimetrik olarak yönetir.
              </p>

              <p>
                Eski ve dar yerleşim yerlerine sahip olan <strong>Keçiören ve Mamak'ta dar sokaklarda yüksek erişim işleri</strong> için kompakt boyutlara sahip sepetli vinçlerimiz devreye girmektedir. Çatı tamiratlarının yanı sıra, yollara veya binalara sarkan tehlikeli dalların budanması için de <strong>ağaç budama</strong> işlemleri sepetli vinçler üzerinden gerçekleştirilir. Bu sayede hem çevre güvenliği sağlanır hem de kesilen dalların kontrollü bir şekilde indirilmesi mümkün olur.
              </p>

              <p>
                Ankara'nın çevresindeki organize sanayi bölgelerine doğru uzandığımızda ise fabrika inşası ve yapısal bakımlar öne çıkar. <strong>Sincan ve Kazan çevresinde fabrika / depo bakım işleri</strong> kapsamında geniş bir alanda yüksek aydınlatma sistemleri için <strong>elektrik bakım</strong> çalışmaları sıklıkla yürütülür. 
              </p>

              <p>
                Sonuç olarak, <strong>sepetli vinç kiralama</strong> hizmeti sadece aracı temin etmek değil, işin niteliğine uygun güvenli platformu ve deneyimli operatörü bir arada sunmaktır. Ankara genelindeki tüm <strong>ankara sepetli vinç</strong> ihtiyaçlarınızda, her türlü yapıya ve yüksekliğe hitap eden araçlarımızla 7 gün 24 saat yanınızdayız.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Bölgelere Yönlendirme Alanı */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ankara’nın Tüm İlçelerinde Vinç Kiralama</h2>
              <p className="text-lg text-gray-600 mb-10">
                Size en yakın vinci hızlıca yönlendirebilmek için Ankara’nın birçok ilçesinde sepetli vinç hizmeti veriyoruz.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                  Etimesgut sepetli vinç kiralama
                </Link>
                <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                  Çankaya sepetli vinç kiralama
                </Link>
                <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                  Keçiören sepetli vinç kiralama
                </Link>
                <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                  Yenimahalle sepetli vinç kiralama
                </Link>
                <Link href="/bolgeler/sincan-sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                  Sincan sepetli vinç kiralama
                </Link>
                <Link href="/bolgeler/mamak-sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-medium transition-colors">
                  Mamak sepetli vinç kiralama
                </Link>
                <Link href="/bolgeler" className="bg-primary text-white border border-primary hover:bg-primary-dark px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                  Tüm Bölgeleri Gör <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Fiyat ve 7. Neden Bizi Tercih Etmelisiniz? */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Fiyat Bölümü */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ankara Vinç Kiralama Fiyatları Neye Göre Değişir?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sepetli vinç kiralama fiyatlarımız projenizin özel gereksinimlerine göre şekillenmektedir. Fiyatı belirleyen temel unsurlar şunlardır:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                    <span><strong>Vinç Yüksekliği:</strong> 20 metrelik vinç ile 70 metrelik vincin maliyetleri farklıdır.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                    <span><strong>Çalışma Süresi:</strong> Saatlik, günlük, haftalık veya aylık periyotlar.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                    <span><strong>Lokasyon:</strong> İşin yapılacağı ilçenin merkeze veya parkura olan uzaklığı.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                    <span><strong>İşin Türü:</strong> Ağaç budama, cam temizliği veya tabela montajının gerektirdiği ek ekipmanlar.</span>
                  </li>
                </ul>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                  <p className="text-gray-900 font-semibold mb-4">Projenize en uygun aracı belirlemek ve net fiyat almak için bize ulaşın.</p>
                  <a href={`tel:${siteConfig.contact.phoneE164}`} className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
                    <Phone size={18} />
                    En Doğru Teklif İçin Arayın
                  </a>
                </div>
              </div>

              {/* Neden Biz */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Neden Bizi Tercih Etmelisiniz?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Ankara Genelinde Hızlı Araç Yönlendirme</h3>
                      <p className="text-gray-600 text-sm mt-1">Geniş filomuzla taleplerinize hızla yanıt veriyor, bekleme süresini minimuma indiriyoruz.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Operatörlü Güvenli Hizmet</h3>
                      <p className="text-gray-600 text-sm mt-1">Sertifikalı ve deneyimli operatörlerimiz iş güvenliğini daima ön planda tutar.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Geniş Hizmet Deneyimi</h3>
                      <p className="text-gray-600 text-sm mt-1">Tabela, cephe temizliği, elektrik bakımı ve ağaç budama işlerinde sektörel tecrübeye sahibiz.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Saatlik ve Günlük Kiralama</h3>
                      <p className="text-gray-600 text-sm mt-1">Bütçenizi zorlamadan, projenizin süresine en uygun esnek kiralama paketleri.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">7/24 Destek Hattı</h3>
                      <p className="text-gray-600 text-sm mt-1">Telefon ve WhatsApp üzerinden kesintisiz iletişim ve anında destek alabilirsiniz.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. FAQ Bölümü */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Vinç kiralama süreçleri, fiyatlandırma ve hizmet detayları hakkında merak ettikleriniz.</p>
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
        <CallToAction
          title="Hemen Fiyat Alın, İşinizi Ertelemeyin"
          message="Merhaba, hizmetleriniz hakkında bilgi ve fiyat teklifi almak istiyorum."
        />

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
