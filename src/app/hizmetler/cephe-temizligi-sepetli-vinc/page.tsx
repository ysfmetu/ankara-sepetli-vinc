import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Ankara Cephe Temizliği İçin Sepetli Vinç Kiralama | Operatörlü Hizmet',
  description:
    "Ankara'da dış cephe temizliği için operatörlü sepetli vinç kiralama. Plaza, AVM ve yüksek katlı yapılar için güvenli çalışma, hızlı çözüm. Ücretsiz teklif alın.",
  alternates: {
    canonical: `${siteUrl}/hizmetler/cephe-temizligi-sepetli-vinc`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ankara Cephe Temizliği İçin Sepetli Vinç Kiralama | Operatörlü Hizmet',
    description:
      "Ankara'da dış cephe temizliği için operatörlü sepetli vinç kiralama. Plaza, AVM ve yüksek katlı yapılar için güvenli çalışma, hızlı çözüm. Ücretsiz teklif alın.",
    url: `${siteUrl}/hizmetler/cephe-temizligi-sepetli-vinc`,
    type: 'website',
    locale: 'tr_TR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ankara Cephe Temizliği İçin Sepetli Vinç Kiralama',
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
    "Ankara'da dış cephe temizliği için operatörlü sepetli vinç kiralama hizmeti. Plaza, AVM ve yüksek katlı yapılar için iş güvenliğine tam uyumlu profesyonel çözüm.",
  url: `${siteUrl}/hizmetler/cephe-temizligi-sepetli-vinc`,
};

const faqItems = [
  {
    q: 'Cephe temizliği için kaç metrelik sepetli vinç gerekir?',
    a: 'Yapının yüksekliğine ve konumuna göre değişmekle birlikte, çoğu bina dış cephe temizliği için 20 ila 50 metre arasında bir çalışma yüksekliği yeterlidir. Plaza ve çok katlı yapılarda 50–70 metrelik araçlarımız devreye girmektedir. Bina yüksekliğinizi paylaşırsanız uygun araca birlikte karar verebiliriz.',
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: 'Evet, tüm vinclerimiz sertifikalı ve deneyimli operatörlerimizle birlikte teslim edilmektedir. Siz sadece temizlik ekibinizi getirin; araca erişim ve güvenli çalışma koşulları bizim sorumluluğumuzdadır.',
  },
  {
    q: 'Saatlik mi, günlük mü kiralama yapılır?',
    a: 'Her iki seçenek de mevcuttur. Kısa süreli işler için saatlik, uzun ve kapsamlı cephe temizliği projeleri için günlük kiralama daha ekonomik olabilir. Projenizin kapsamını anlatırsanız size en uygun fiyatlandırmayı sunabiliriz.',
  },
  {
    q: 'Aynı gün hizmet alabilir miyim?',
    a: 'Araç müsaitliğine göre aynı gün sevkiyat mümkün olabilir. Ancak özellikle yoğun dönemlerde önceden rezervasyon yapılması tavsiye edilir. Acil talepleriniz için hattımızı arayabilirsiniz.',
  },
  {
    q: "Ankara'nın her bölgesine hizmet veriyor musunuz?",
    a: "Çankaya, Keçiören, Yenimahalle, Etimesgut, Sincan, Mamak, Pursaklar, Gölbaşı ve Ostim başta olmak üzere Ankara'nın tüm merkez ve ilçelerine hizmet veriyoruz. Lokasyonunuzu belirterek bize ulaşabilirsiniz.",
  },
  {
    q: 'Teklif almak için hangi bilgileri paylaşmalıyım?',
    a: 'Binanın yaklaşık yüksekliği, temizlik yapılacak cephe alanı, iş tarihini ve ilçeyi bildirmeniz yeterlidir. Bu bilgilerle size en kısa sürede doğru bir fiyat teklifi sunabiliriz.',
  },
];

export default function CepheTemizligiSepetliVincPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/services/cephe-temizligi.jpg')] bg-cover bg-center" aria-hidden="true" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
                { label: 'Cephe Temizliği', href: '/hizmetler/cephe-temizligi-sepetli-vinc' },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Ankara&apos;da Cephe Temizliği İçin{' '}
                  <span className="text-red-400">Sepetli Vinç Kiralama</span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Yüksek katlı binalarda, plazalarda ve AVM&apos;lerde dış cephe temizliği için
                  operatörlü sepetli vinç hizmeti sunuyoruz. İş güvenliğine tam uyumlu, bakımlı
                  araçlarımız ve sertifikalı ekibimizle Ankara genelinde hızlı çözüm üretiyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+905516066878"
                    id="hero-call-cta"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-lg text-lg"
                  >
                    📞 Hemen Ara: 0551 606 68 78
                  </a>
                  <a
                    href="#teklif-formu"
                    id="hero-form-cta"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-xl transition-all text-lg"
                  >
                    Ücretsiz Teklif Al →
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex justify-center" aria-hidden="true">
                <div className="grid grid-cols-2 gap-4">
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
          </div>
        </section>

        {/* GİRİŞ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dış cephe temizliği, özellikle yüksek katlı yapılarda, iş güvenliği ve erişim imkânı
              açısından ciddi bir planlama gerektirir. İskele kurmadan, taşıyıcı sistem
              kurulumlarına gerek kalmadan, <strong>sepetli vinç</strong> ile çok daha hızlı ve
              güvenli şekilde erişim sağlanabilir. Temizlik personeli, sabit ve dengeli bir
              çalışma platformundan yüksek noktalara erişebilir; hem hız hem de iş güvenliği
              açısından bu yöntem günümüzde tercih edilen standart hale gelmiştir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ankara&apos;da cephe temizliği hizmeti alan işletmeler, apartman yönetimleri ve
              temizlik firmaları; kendi bünyelerinde araç bulundurmak yerine operatörlü sepetli
              vinç kiralama yolunu seçmektedir. Bu yaklaşım, hem sabit yatırım maliyetini ortadan
              kaldırır hem de işin uzmanı operatörlerle daha verimli çalışma imkânı sunar.
            </p>
          </div>
        </section>

        {/* H2: Kiralama */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ankara&apos;da Cephe Temizliği İçin Sepetli Vinç Kiralama
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hizmetimiz; Ankara&apos;daki plaza, iş merkezi, AVM, rezidans, endüstriyel tesis ve
              yüksek katlı konut projelerinde dış cephe temizliği operasyonlarına destek vermek
              üzere kurgulanmıştır. Araçlarımız farklı yükseklik seçenekleriyle hizmet vermektedir:
              camilerin minareleri, çok katlı konut blokları ve kurumsal ofis binaları başta olmak
              üzere 15 ila 70 metreye kadar çalışma kabiliyeti sağlıyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Plaza ve İş Merkezleri',
                  desc: 'Cam giydirme cephe sistemleri başta olmak üzere çok katlı ofis binalarının tüm dış yüzeyleri.',
                },
                {
                  title: 'Alışveriş Merkezleri (AVM)',
                  desc: 'Geniş çaplı dış cephe ve çatı kenarı temizlik operasyonları için geniş erişim imkânı.',
                },
                {
                  title: 'Yüksek Katlı Konutlar',
                  desc: 'Rezidans ve site yönetimlerinin periyodik veya mevsimsel bina temizlik projeleri.',
                },
                {
                  title: 'Endüstriyel Tesisler',
                  desc: 'Fabrika, depo ve üretim tesislerinin dış yüzeylerinde güvenli temizlik erişimi.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H2: Hangi İşler */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Cephe Temizliği İçin Sepetli Vinç Hangi İşlerde Kullanılır?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sepetli vinç; temizlik operasyonlarının yalnızca cam silme kısmıyla sınırlı olmadığı
              durumlarda da sıklıkla kullanılmaktadır. Aşağıdaki işler, vincin en çok talep gördüğü
              cephe temizleme operasyonlarıdır:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Dış Cephe Cam Temizliği',
                  desc: 'Yüksek katlı binaların cam cephe sistemlerinin düzenli olarak temizlenmesi, özellikle mimari açıdan öne çıkan yapılarda kritik önem taşır.',
                },
                {
                  title: 'Bina Dış Yüzey Temizliği',
                  desc: 'Travertin, alüminyum kompozit panel veya betonarme dış yüzeylerin yüksek basınçlı su ile temizlenmesi.',
                },
                {
                  title: 'Yüksek Katlı Yapı Temizliği',
                  desc: 'Standart temizlik ekipmanlarının ulaşamadığı 5. kat ve üzeri alanlarda güvenli çalışma platformu sağlanması.',
                },
                {
                  title: 'Kurumsal Bina ve Plaza Cephe İşleri',
                  desc: 'Representatif binaların görsel temizliği; kurumsal kimliği destekleyen düzenli bakım protokolleri.',
                },
                {
                  title: 'Erişimi Zor Alanlarda Güvenli Çalışma',
                  desc: 'İskele veya rope access sistemi kurulamayan dar alanlarda, sepetli vinç tek pratik erişim yöntemi olarak öne çıkar.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100">
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

        {/* H2: Neden Bizimle */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Neden Bizimle Çalışmalısınız?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '👷',
                  title: 'Operatörlü Hizmet',
                  desc: 'Tüm vinclerimiz iş güvenliği sertifikalı operatörlerle teslim edilir. Araç kullanımı konusunda ayrıca düşünmenize gerek kalmaz.',
                },
                {
                  icon: '🔧',
                  title: 'Bakımlı Ekipman',
                  desc: 'Araç filomuz periyodik teknik bakıma tabidir. Saha teslimatında her araç çalışmaya hazır haldedir.',
                },
                {
                  icon: '🚀',
                  title: 'Ankara İçi Hızlı Sevkiyat',
                  desc: "Ankara'nın tüm ilçelerinde kısa sürede araç sahamıza yönlendirebiliyoruz. Projenizin zamanlaması sıkışık olsa da çözüm buluyoruz.",
                },
                {
                  icon: '🛡️',
                  title: 'İş Güvenliği Odaklı',
                  desc: 'Yüksekte çalışma mevzuatına tam uyumlu ekipman ve operasyon planlaması ile çalışıyoruz.',
                },
                {
                  icon: '📅',
                  title: 'Esnek Planlama',
                  desc: 'Saatlik, yarım günlük veya tam günlük kiralama seçenekleriyle projenizin ihtiyacına göre plan yapabilirsiniz.',
                },
                {
                  icon: '⏱️',
                  title: 'Zamanında Hizmet',
                  desc: 'Belirlenen tarih ve saatte saha teslimatını taahhüt ediyoruz. Gecikmeler hem sizin hem de bizim için kabul edilemez.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H2: Bölgeler */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ankara&apos;da Hangi Bölgelere Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ankara&apos;nın merkezi ve gelişen ilçelerinde aktif olarak hizmet sunuyoruz. İster
              kurumsal alanda bir plaza, ister sanayi bölgesinde bir fabrika tesisiniz olsun,
              sepetli vinç ihtiyacınızı sizin yerinize çözüme kavuşturuyoruz:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Çankaya', href: '/cankaya-sepetli-vinc' },
                { label: 'Keçiören', href: '/bolgeler' },
                { label: 'Yenimahalle', href: '/yenimahalle-sepetli-vinc' },
                { label: 'Etimesgut', href: '/etimesgut-sepetli-vinc' },
                { label: 'Sincan', href: '/sincan-sepetli-vinc' },
                { label: 'Ostim', href: '/ostim-sepetli-vinc' },
                { label: 'Pursaklar', href: '/bolgeler' },
                { label: 'Gölbaşı', href: '/bolgeler' },
                { label: 'Mamak', href: '/bolgeler' },
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
              Yukarıda bulunmayan ilçeler için de hizmet verebiliyoruz.{' '}
              <Link href="/iletisim" className="text-red-600 hover:underline font-medium">
                Bize ulaşın
              </Link>{' '}
              ve lokasyonunuzu paylaşın.
            </p>
          </div>
        </section>

        {/* H2: Fiyat */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Fiyatı Etkileyen Unsurlar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Cephe temizliği için sepetli vinç kiralamanın fiyatı birkaç farklı faktöre göre
              şekillenmektedir. Net bir fiyat vermeden önce aşağıdaki bilgileri değerlendiriyoruz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Çalışma Yüksekliği',
                  desc: 'Binanın kattaki yüksekliği, kullanılacak araç kapasitesini doğrudan belirler. Farklı yükseklik seçenekleri farklı ekipman sınıflarını gerektirebilir.',
                },
                {
                  title: 'Hizmet Süresi',
                  desc: 'Saatlik, yarım günlük veya tam gün olarak planlanan çalışma süresi, toplam maliyetin temel belirleyicisidir.',
                },
                {
                  title: 'Lokasyon',
                  desc: "Aracın ana üslerimize olan uzaklığı ve Ankara içindeki konumu, saha erişim planlamasını etkiler.",
                },
                {
                  title: 'Zemin ve Erişim Koşulları',
                  desc: 'Aracın konumlanacağı zemin tipi (beton, parke, toprak) ve sahaya yaklaşım yolu, ekipman seçimini etkileyebilir.',
                },
                {
                  title: 'İş Kapsamı',
                  desc: 'Temizlenecek cephe alanının büyüklüğü ile kullanılacak ek ekipman ihtiyacı (su pompası, platform vb.) maliyeti şekillendirir.',
                },
                {
                  title: 'Planlama ve Tarih',
                  desc: 'Önceden rezervasyon yapılması durumunda daha avantajlı koşullar sunabiliyoruz. Acil talepler ayrıca değerlendirilmektedir.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-4 font-medium">
                Projenizin detaylarını paylaşın; size özel, net bir fiyat teklifi hazırlayalım.
              </p>
              <a
                href="#teklif-formu"
                id="fiyat-teklif-cta"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow"
              >
                Ücretsiz Teklif Al
              </a>
            </div>
          </div>
        </section>

        {/* H2: SSS */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-5">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEKLİF FORMU */}
        <section id="teklif-formu" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Cephe Temizliği İçin Ücretsiz Teklif Alın
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Projeniz hakkında kısa bilgi bırakın; uzman ekibimiz en kısa sürede size geri
                  dönsün. Kesin bir fiyat için ek detay gerekmez — ilk teması formdan kurun,
                  gerisini biz halledelim.
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    '15 dakika içinde uzman ekibimiz sizi arar',
                    'Kesin fiyat teklifi — gizli maliyet yok',
                    'Ankara genelinde hızlı araç sevkiyatı',
                    'Operatörlü, iş güvenliği tam uyumlu hizmet',
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

        {/* İç Linkleme */}
        <section className="py-14 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">İlgili Hizmetler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/sepetli-vinc-kiralama"
                className="block bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl p-5 transition-colors group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-red-700 block mb-1">
                  Sepetli Vinç Kiralama
                </span>
                <span className="text-gray-500 text-sm">
                  Ankara genelinde sepetli vinç kiralama hizmeti
                </span>
              </Link>
              <Link
                href="/operatorlu-vinc-kiralama"
                className="block bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl p-5 transition-colors group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-red-700 block mb-1">
                  Operatörlü Vinç Kiralama
                </span>
                <span className="text-gray-500 text-sm">
                  Sertifikalı operatörlerle güvenli vinç kiralama
                </span>
              </Link>
              <Link
                href="/hizmetler/tabela-montaj"
                className="block bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl p-5 transition-colors group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-red-700 block mb-1">
                  Tabela Montajı
                </span>
                <span className="text-gray-500 text-sm">
                  Yüksek alanlarda tabela ve totem montajı
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
