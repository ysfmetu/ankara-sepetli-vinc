import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Ankara Tabela Montaj Hizmeti | Sepetli Vinç ile Güvenli Uygulama',
  description:
    "Ankara'da Altınçiçek Kuyumculuk gibi prestijli mağazaların tercihi; tabela montajı, söküm ve yüksek alan uygulamaları için operatörlü sepetli vinç desteği. Hızlı ve güvenli çözüm.",
  alternates: {
    canonical: `${siteUrl}/hizmetler/tabela-montaj`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ankara Tabela Montaj Hizmeti | Sepetli Vinç ile Güvenli Uygulama',
    description:
      "Ankara'da tabela montajı, söküm ve yüksek alan uygulamaları için operatörlü sepetli vinç desteği. Mağaza, iş yeri, plaza ve bina cephe tabelaları için hızlı teklif alın.",
    url: `${siteUrl}/hizmetler/tabela-montaj`,
    type: 'website',
    locale: 'tr_TR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ankara Tabela Montaj Hizmeti',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Ankara Sepetli Vinç Kiralama',
    url: siteUrl,
    telephone: '+905516066878',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ankara',
      addressCountry: 'TR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Ankara',
  },
  description:
    "Ankara'da tabela montajı, söküm ve yüksek alan uygulamaları için operatörlü sepetli vinç desteği. Mağaza, iş yeri, plaza ve bina cephe tabelaları için profesyonel çözüm.",
  url: `${siteUrl}/hizmetler/tabela-montaj`,
};

const faqItems = [
  {
    q: 'Tabela montajı için sepetli vinç gerekli midir?',
    a: "Her tabela işi sepetli vinç gerektirmez; ancak binanın 2. katı ve üzerindeki alanlarda, dar cephelerde veya zemin ekipmanlarının ulaşamadığı noktalarda sepetli vinç en güvenli ve hızlı çözümdür. Özellikle ışıklı tabela, büyük format totem ve bina cephesi uygulamalarında vinç kullanımı hem iş güvenliği hem de uygulama kalitesi açısından fark yaratır.",
  },
  {
    q: "Ankara'da aynı gün tabela montaj hizmeti alabilir miyim?",
    a: 'Araç müsaitliğine göre aynı gün sevkiyat mümkün olabilmektedir. Ancak özellikle yoğun dönemlerde bir gün öncesinde rezervasyon yapılması tavsiye edilir. Acil talepler için doğrudan hattımızı arayabilirsiniz.',
  },
  {
    q: 'Tabela söküm ve yeniden montaj yapıyor musunuz?',
    a: "Evet. Mevcut bir tabelanın sökülmesi, yeniden konumlandırılması veya yeni bir tabelayla değiştirilmesi işlemlerinin tümüne destek veriyoruz. Söküm + yeni montaj paket olarak planlandığında hem süre hem de maliyet açısından daha verimli sonuç alınır.",
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: "Evet, tüm vinclerimiz iş güvenliği sertifikalı ve deneyimli operatörlerimizle birlikte teslim edilmektedir. Araç kullanımı tamamen bizim sorumluluğumuzdadır; siz yalnızca montaj ekibinizi sahaya getirin.",
  },
  {
    q: 'Hangi yüksekliklere kadar tabela montajı yapılabiliyor?',
    a: 'Araç filomuz 15 metreden başlayıp 70 metreye kadar farklı yükseklik seçenekleri sunmaktadır. Binanın yüksekliğini ve montaj noktasını belirtmeniz yeterli; uygun araç kapasitesini birlikte belirleriz.',
  },
  {
    q: 'Mağaza tabelası montajı için ön keşif gerekiyor mu?',
    a: "Çoğu standart mağaza tabelası işlemi için adres, yaklaşık yükseklik ve tabela boyutunu bilmek yeterli olmaktadır. Ancak karmaşık cephe yapıları veya özel konumlandırma gerektiren projelerde kısa bir ön değerlendirme yapılabilir.",
  },
  {
    q: 'İlçeye göre hizmet süresi değişir mi?',
    a: "Ankara merkez ve çevresi için sevkiyat süreleri oldukça kısadır. Etimesgut, Sincan, Pursaklar veya Gölbaşı gibi biraz daha uç ilçelerde araç ulaşımı için küçük bir fark oluşabilir. Her durumda önceden bilgilendirme yapıyoruz.",
  },
  {
    q: 'Teklif almak için hangi bilgileri paylaşmalıyım?',
    a: 'Montaj yapılacak ilçe/konum, tabelanın türü ve boyutu, montaj yapılacak yükseklik ve tercih edilen tarih bilgilerini paylaşmanız yeterlidir. Bu bilgilerle size en kısa sürede net bir fiyat teklifi sunabiliriz.',
  },
];

export default function TabelaMontajPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-[url('/images/services/tabela-montaj.jpg')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
                { label: 'Tabela Montaj', href: '/hizmetler/tabela-montaj' },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Ankara&apos;da <span className="text-red-400">Profesyonel</span>{' '}
                  Tabela Montaj Hizmeti
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Altınçiçek Kuyumculuk gibi prestijli işletmelerin tercihi olan sepetli vinç
                  destekli tabela montaj hizmetimizle, Ankara genelinde profesyonel ve güvenli
                  çözümler sunuyoruz. 7/24 operatörlü kiralama ve hızlı sevkiyat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+905516066878"
                    id="hero-call-cta-tabela"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-lg text-lg"
                  >
                    📞 Hemen Ara: 0551 606 68 78
                  </a>
                  <a
                    href="#teklif-formu"
                    id="hero-form-cta-tabela"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-xl transition-all text-lg"
                  >
                    Ücretsiz Teklif Al →
                  </a>
                </div>
              </div>

              {/* Güven unsurları */}
              <div className="hidden lg:grid grid-cols-2 gap-4" aria-hidden="true">
                {[
                  { icon: '🏗️', label: 'Operatörlü Hizmet' },
                  { icon: '⚡', label: 'Hızlı Sevkiyat' },
                  { icon: '🛡️', label: 'İş Güvenliği Odaklı' },
                  { icon: '📍', label: 'Ankara Geneli' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-center text-white"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GİRİŞ ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tabela montajı, görünürde basit bir işlem gibi görünse de yüksek alanlarda yapılan
              uygulamalar ciddi bir ekipman planlaması gerektirir. İskele kurulumu zaman alır,
              merdiven yetmez ve kaldırım üzerinde uzun süre alan kaplamak hem yasal hem de
              pratik açıdan sorun yaratabilir. Sepetli vinç ise tüm bu kısıtları ortadan kaldıran
              esnek bir çözum sunar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mağaza tabelasından çok katlı plaza cephesine, karayolu reklamından bina üstü LED
              sistemine kadar farklı ölçekteki tabela işlerinde operatörlü sepetli vinç hizmeti;
              hem zamandan hem güvenlik maliyetinden tasarruf sağlar. Operatörümüz aracı
              konumlandırırken, montaj ekibiniz platformdan güvenle çalışır.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ankara&apos;da tabela firmaları, reklam ajansları ve inşaat müteahhitleri artık
              kendi işçi güvenliği sorumluluklarını azaltmak için kiralamayı tercih ediyor. Tek
              operasyon, tek araç, sıfır iskele kurulum süresi.
            </p>
          </div>
        </section>

        {/* ── H2: Tabela Montaj Hizmeti ───────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ankara&apos;da Tabela Montaj Hizmeti
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hizmetimiz; tabela firmaları, reklam ajansları, mağaza sahipleri ve kurumsal müşteriler
              için sepetli vinç ile yüksek alan erişimi sağlamak üzerine kurgulanmıştır. Kendi
              montaj ekibiniz olmasa bile ihtiyaca göre yönlendirme yapıyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Dış Cephe Tabela Montajı',
                  desc: 'Binanın zemin katı üzerinde kalan, standart merdivenle ulaşılamayan noktalara tabela sabitleme ve kablo bağlantıları.',
                },
                {
                  title: 'Kuyumcu ve Mağaza Tabelaları',
                  desc: 'Altınçiçek Kuyumculuk gibi hassas işçilik gerektiren mağaza cephelerinde, tabela montajı ve LED aydınlatma bakımları için sepetli vinç desteği.',
                },
                {
                  title: 'Totem ve Yol Kenarı Reklamları',
                  desc: "Yüksek formatlı totem, pylon ve karayolu kenarındaki reklam panosu kurulum işleri için sepetli vinç erişimi.",
                },
                {
                  title: 'Plaza ve Kurumsal Cephe İşleri',
                  desc: 'Kurumsal kimlik uygulamaları, bina logoları, kat tabelaları ve büyük format dış cephe grafik uygulamaları.',
                },
                {
                  title: 'Işıklı Tabela ve LED Sistemler',
                  desc: 'Elektrik bağlantısı gerektiren ışıklı tabela, neon sistem ve LED ekran kurulumlarında güvenli çalışma platformu.',
                },
                {
                  title: 'Tabela Söküm ve Yeniden Montaj',
                  desc: 'Mevcut tabelanın yerinden sökülerek yeni tabela ile değiştirilmesi veya farklı bir konuma taşınması işlemleri.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── H2: Neden Sepetli Vinç ───────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sepetli Vinç ile Tabela Montajı Neden Tercih Edilir?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Yüksek alanlarda tabela işleri için farklı erişim yöntemleri mevcut olmakla birlikte,
              sepetli vinç birçok durumda en pratik ve güvenli seçenek olarak öne çıkmaktadır:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Hızlı Kurulum',
                  desc: 'İskele kurmak saatler alabilir. Sepetli vinç sahaya gelir, konumlanır ve çalışma başlar. İş bittiğinde araç ayrılır — sokakta uzun süre alan kaplamaz.',
                },
                {
                  title: 'Kontrollü Erişim',
                  desc: "Platform sabit ve dengeli tutulur; operatör yatay ve dikey konumlamayı milimetrik hassasiyetle ayarlar. Tabela hizalama ve sabitleme işlemleri çok daha kolay yapılır.",
                },
                {
                  title: 'İş Güvenliği',
                  desc: 'Yüksekte çalışma mevzuatına uygun sertifikalı ekipman ve operatök ile çalışıldığında iş kazası riski minimize edilir. Montaj ekibi platformdan güvenle hareket edebilir.',
                },
                {
                  title: 'Erişimi Zor Alanlarda Avantaj',
                  desc: 'Binalar arası dar geçitler, arka cepheler veya yüksek duvarların arkasındaki alanlar için sepetli vinç bom kolu uzantısıyla erişim sağlayabilir.',
                },
                {
                  title: 'Dar Alan Esnekliği',
                  desc: "Ankara'nın yoğun caddelerinde ve dar kaldırımlarında, trafiği ve yaya geçişini engellemeden operasyon yapabilen yüksek manevra kabiliyetli araçlar.",
                },
                {
                  title: 'Operatörlü Hizmetin Önemi',
                  desc: "Aracı kendi başına sürmek veya operatörsüz kiralamak yerine, profesyonel operatörümüz vincin tüm dengesini sağlarken siz sadece montaja odaklanırsınız.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100"
                >
                  <span className="text-red-500 font-bold text-xl mt-0.5">✓</span>
                  <div>
                    <strong className="text-gray-900 block mb-1">{item.title}</strong>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── H2: Hangi Tabela İşlerinde ───────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hangi Tabela İşlerinde Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Küçük ölçekli mağaza tabelasından büyük format plaza uygulamalarına geniş bir
              yelpazede hizmet sunuyoruz. Aşağıdaki iş türlerinde operatörlü araç desteği
              sağlıyoruz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏪', label: 'Mağaza tabela montajı' },
                { icon: '💡', label: 'Işıklı tabela montajı' },
                { icon: '🗼', label: 'Totem tabela montaj desteği' },
                { icon: '🏢', label: 'Cephe tabela montajı' },
                { icon: '🔄', label: 'Tabela söküm ve yeniden montaj' },
                { icon: '🔧', label: 'Tabela bakım / değişim erişimi' },
                { icon: '📋', label: 'Yönlendirme tabelası montajı' },
                { icon: '🌆', label: 'Bina logosu ve kurumsal kimlik uygulamaları' },
                { icon: '📡', label: 'LED ve dijital ekran kurulumu' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 border border-gray-200 flex items-center gap-3 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── H2: Neden Bizimle ────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Neden Bizimle Çalışmalısınız?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '👷',
                  title: 'Operatörlü Ekipman',
                  desc: 'Sertifikalı ve sahada deneyimli operatörlerimiz aracı yönetir; siz yalnızca montaj işine odaklanırsınız.',
                },
                {
                  icon: '🔧',
                  title: 'Bakımlı Araçlar',
                  desc: 'Filodaki tüm vincler periyodik teknik bakımdan geçer. Sahaya her zaman çalışmaya hazır araç gelir.',
                },
                {
                  icon: '🚀',
                  title: 'Ankara İçi Hızlı Planlama',
                  desc: "Ankara'nın her ilçesine kısa sürede araç yönlendirebiliyoruz. Zamanınız kısıtlı olsa da çözüm buluyoruz.",
                },
                {
                  icon: '🛡️',
                  title: 'İş Güvenliği Odaklı',
                  desc: 'Yüksekte çalışma mevzuatına tam uygun ekipman ve operasyon planlaması. İş kazası riskini minimize ediyoruz.',
                },
                {
                  icon: '📅',
                  title: 'Esnek Planlama',
                  desc: 'Saatlik veya günlük kiralama seçeneğiyle projenizin gerçek ihtiyacına göre plan yapabilirsiniz.',
                },
                {
                  icon: '⏱️',
                  title: 'Zamanında Uygulama',
                  desc: 'Belirlenen tarih ve saatte saha teslimatını taahhüt ediyoruz. Siz de müşterinize söz verebilirsiniz.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── H2: İlçeler ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ankara&apos;da Hangi İlçelere Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Hizmet alanımız Ankara genelini kapsamaktadır. Çankaya ve Keçiören gibi merkezi
              ilçelerden Ostim&apos;deki sanayi tesislerine, Etimesgut ve Sincan&apos;daki organize
              sanayi bölgelerine kadar araç sevkiyatı sağlıyoruz. Pursaklar, Gölbaşı, Mamak ve
              Altındağ dahil tüm ilçelere hizmet verebiliriz.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Çankaya', href: '/cankaya-sepetli-vinc' },
                { label: 'Keçiören', href: '/bolgeler' },
                { label: 'Yenimahalle', href: '/yenimahalle-sepetli-vinc' },
                { label: 'Etimesgut', href: '/etimesgut-sepetli-vinc' },
                { label: 'Sincan', href: '/sincan-sepetli-vinc' },
                { label: 'Ostim / İvedik', href: '/ostim-sepetli-vinc' },
                { label: 'Pursaklar', href: '/bolgeler' },
                { label: 'Gölbaşı', href: '/bolgeler' },
                { label: 'Mamak', href: '/bolgeler' },
                { label: 'Altındağ', href: '/bolgeler' },
              ].map((b) => (
                <Link
                  key={b.label}
                  href={b.href}
                  className="bg-gray-100 hover:bg-red-50 hover:text-red-700 border border-gray-200 hover:border-red-200 text-gray-700 font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  {b.label}
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Yukarıda bulunmayan bölgeler için de hizmet verebiliyoruz.{' '}
              <Link href="/iletisim" className="text-red-600 hover:underline font-medium">
                Bize ulaşın
              </Link>{' '}
              ve lokasyonunuzu paylaşın.
            </p>
          </div>
        </section>

        {/* ── H2: Fiyat ───────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tabela Montaj Fiyatını Etkileyen Unsurlar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Net bir fiyat verebilmek için her projeyi ayrı ayrı değerlendiriyoruz. Tabela
              montajı için sepetli vinç hizmetinin maliyetini belirleyen başlıca etkenler şunlardır:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Tabela Boyutu ve Ağırlığı',
                  desc: 'Büyük formatlı veya ağır tabelalar, daha güçlü araç kapasitesi gerektirebilir.',
                },
                {
                  title: 'Montaj Yüksekliği',
                  desc: 'Artan yükseklik, farklı kapasitede ekipman sınıflarını devreye sokabilir.',
                },
                {
                  title: 'Montaj Alanı ve Erişim Zorluğu',
                  desc: 'Dar sokak, arka cephe veya zemin engeli gibi etkenler planlamayı ve aracın konumlanmasını etkiler.',
                },
                {
                  title: 'Çalışma Süresi',
                  desc: 'Saatlik veya günlük bazda yapılan planlama, toplam maliyetin temel belirleyicisidir.',
                },
                {
                  title: 'Söküm + Montaj Birlikte mi?',
                  desc: 'Eski tabelanın söküm ve yeni montajın aynı seferda yapılması çoğu zaman daha ekonomik olur.',
                },
                {
                  title: 'Lokasyon ve Ulaşım',
                  desc: "Aracın ana üslerimize olan uzaklığı, Ankara'nın uç ilçelerinde küçük bir etki yaratabilir.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-4 font-medium">
                Projenizin detaylarını paylaşın; size özel ve net bir fiyat teklifi hazırlayalım.
              </p>
              <a
                href="#teklif-formu"
                id="fiyat-teklif-cta-tabela"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow"
              >
                Tabela Montajı İçin Teklif Al
              </a>
            </div>
          </div>
        </section>

        {/* ── H2: SSS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-5">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEKLİF FORMU ─────────────────────────────────────────── */}
        <section
          id="teklif-formu"
          className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Tabela Montajı İçin Ücretsiz Teklif Alın
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Tabela türünü, montaj noktasını ve tarihi belirtin; uzman ekibimiz size en
                  kısa sürede geri dönsün. Ön keşif gerekmez — ilk teması formdan kurun,
                  detayları planlamaya birlikte karar verelim.
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    '15 dakika içinde uzman ekibimiz sizi arar',
                    'Kesin fiyat teklifi — gizli maliyet yok',
                    'Ankara genelinde hızlı araç sevkiyatı',
                    'Operatörlü, iş güvenliği tam uyumlu hizmet',
                    'Söküm + montaj paket desteği',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-white/20 pt-8">
                  <p className="text-gray-400 text-sm mb-2">Telefon ile ulaşmak için:</p>
                  <a
                    href="tel:+905516066878"
                    className="text-2xl font-bold text-white hover:text-red-400 transition-colors"
                  >
                    0551 606 68 78
                  </a>
                </div>
              </div>
              <div>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── İLGİLİ HİZMETLER ─────────────────────────────────────── */}
        <section className="py-14 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">İlgili Hizmetler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  href: '/sepetli-vinc-kiralama',
                  title: 'Sepetli Vinç Kiralama',
                  desc: 'Ankara genelinde operatörlü sepetli vinç',
                },
                {
                  href: '/operatorlu-vinc-kiralama',
                  title: 'Operatörlü Vinç Kiralama',
                  desc: 'Sertifikalı operatörle güvenli kiralama',
                },
                {
                  href: '/hizmetler/cephe-temizligi-sepetli-vinc',
                  title: 'Cephe Temizliği',
                  desc: 'Dış cephe cam ve yüzey temizliği',
                },
                {
                  href: '/hizmetler/elektrik-bakim',
                  title: 'Elektrik & Bakım',
                  desc: 'Sokak lambası ve direk bakım işleri',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl p-5 transition-colors group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-red-700 block mb-1 text-sm">
                    {item.title}
                  </span>
                  <span className="text-gray-500 text-xs leading-relaxed">{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
