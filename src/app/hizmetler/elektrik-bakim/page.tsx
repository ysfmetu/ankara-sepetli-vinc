import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Ankara Elektrik Bakım Hizmeti | Sepetli Vinç ile Güvenli Müdahale',
  description:
    "Ankara'da elektrik bakım, dış aydınlatma arızası ve yüksek alan elektrik müdahaleleri için operatörlü sepetli vinç desteği. Hızlı teklif alın.",
  alternates: {
    canonical: `${siteUrl}/hizmetler/elektrik-bakim`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ankara Elektrik Bakım Hizmeti | Sepetli Vinç ile Güvenli Müdahale',
    description:
      "Ankara'da elektrik bakım, dış aydınlatma arızası ve yüksek alan elektrik müdahaleleri için operatörlü sepetli vinç desteği. Hızlı teklif alın.",
    url: `${siteUrl}/hizmetler/elektrik-bakim`,
    type: 'website',
    locale: 'tr_TR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ankara Elektrik Bakım Hizmeti',
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
    "Ankara'da sokak aydınlatması, projektör değişimi, tabela aydınlatmaları ve bina dışı elektrik ekipmanları arıza müdahaleleri için profesyonel sepetli vinç hizmeti.",
  url: `${siteUrl}/hizmetler/elektrik-bakim`,
};

const faqItems = [
  {
    q: 'Elektrik bakım çalışmaları için sepetli vinç gerekli midir?',
    a: "Özellikle sokak aydınlatmaları, yüksek direkler, dış cephe projektörleri ve bina üstü aydınlatma sistemleri gibi noktalara merdiven ile güvenli bir şekilde ulaşmak imkansızdır. Elektrik çarpılma riski ve düşme tehlikesini ortadan kaldırmak için izolasyonlu sepetli vinç kullanımı hayati derecede önemlidir.",
  },
  {
    q: "Ankara'da aynı gün elektrik bakım hizmeti alabilir miyim?",
    a: 'Elektrik arızalarının aciliyetinin farkındayız. Araç filomuz ve nöbetçi operatör sistemimiz sayesinde genellikle acil durum taleplerine Ankara içi aynı gün ve en kısa sürede yanıt verebiliyoruz.',
  },
  {
    q: 'Dış aydınlatma arızalarında destek veriyor musunuz?',
    a: "Evet, otopark, park, site içi aydınlatma direkleri, yüksek cephe aydınlatmaları ve sokak lambası değişim işlemlerinde güvenli erişim sağlıyoruz. Elektrikçinizin sahada rahatça çalışabileceği bir platform sunuyoruz.",
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: "Bütün araçlarımız iş güvenlik sertifikalarına sahip deneyimli operatörlerimiz eşliğinde kiralanmaktadır. Bu sayede vinç kullanımı için ekstra bir uzmanlık düşünmenize gerek kalmaz.",
  },
  {
    q: 'Hangi yüksekliklerde çalışma yapılabiliyor?',
    a: 'Elektrik direklerinden fabrika tavan aydınlatmalarına ve 70 metreye varan gökdelen dış aydınlatma değişimlerine kadar tüm yüksekliklere uygun geniş bir araç parkurumuz bulunmaktadır.',
  },
  {
    q: 'Projektör veya armatür değişimi yapılıyor mu?',
    a: "Siz ya da anlaşmalı elektrikçi personeliniz armatür veya projektörleri yanınızda getirdiğiniz sürece, sepetli vinç platformumuz üzerinden istenilen arızaya güvenle ulaşarak tamirat ve değişim işlemlerini kolayca gerçekleştirebilirsiniz.",
  },
  {
    q: 'İlçelere göre hizmet süresi değişir mi?',
    a: "Merkez ilçelerde çok yüksek hızlı sevkiyatımız bulunurken, çevre ilçelere olan yol durumuna göre ulaşım süresi farklılık gösterebilmektedir ancak her koşulda en verimli rota tercihine dikkat edilmektedir.",
  },
  {
    q: 'Teklif almak için hangi bilgileri paylaşmalıyım?',
    a: 'Arızanın bulunduğu konumu (ilçe/mahalle), yaklaşık yüksekliği, yapılacak olan elektrik/bakım işinin türünü tarafımıza ilettiğiniz an ücretsiz olarak hızlıca teklifinizi oluşturmaktayız.',
  },
];

export default function ElektrikBakimPage() {
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
            className="absolute inset-0 opacity-10 bg-[url('/images/services/elektrik-bakim.jpg')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
                { label: 'Elektrik Bakım', href: '/hizmetler/elektrik-bakim' },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Ankara&apos;da <span className="text-red-400">Elektrik Bakım</span> Hizmeti
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Yol aydınlatmaları, park/site aydınlatma direkleri, yüksek gerilim direkleri ve yüksek cephe elektrik müdahaleleri için 7/24 kesintisiz, operatörlü sepetli vinç desteği sağlıyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+905516066878"
                    id="hero-call-cta-elektrik"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-lg text-lg"
                  >
                    📞 Acil Çağrı: 0551 606 68 78
                  </a>
                  <a
                    href="#teklif-formu"
                    id="hero-form-cta-elektrik"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-xl transition-all text-lg"
                  >
                    Ücretsiz Teklif Al →
                  </a>
                </div>
              </div>

              {/* Güven unsurları */}
              <div className="hidden lg:grid grid-cols-2 gap-4" aria-hidden="true">
                {[
                  { icon: '⏱️', label: 'Hızlı Müdahale' },
                  { icon: '🏗️', label: 'Operatörlü Hizmet' },
                  { icon: '🛡️', label: 'Güvenli İzolasyon' },
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
              Elektrik arızaları ve bakım süreçleri, yüksek alanlara taşındığında can güvenliği nedeniyle ciddi bir profesyonel yaklaşım gerektirir. Basit bir merdiven kullanıldığında oluşabilecek kaza riskleri, çalışma alanında ekstra tehlikeler doğurur. Elektrik akımı ve yükseklik korkusunu birleştiren bu tarz durumlarda <strong>sepetli vinç</strong> kiralamak her zaman en güvenilir yöntemdir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ankara&apos;da sokak aydınlatması değişimlerinden bina dış cephe aydınlatmalarına, sanayi alanlarındaki dev projektör onarımlarından direk üstü çalışmalara kadar birçok zorlu işlemi sepet kasalarımız sayesinde güvenle yürütüyoruz. Üstelik çalışma alanının boyutuna göre park ve site aralarına dahi sığabilen çeşitli araç boyutlarımız bulunmaktadır.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Profesyonel sepetli vinç hizmetimizde kontrol operatördedir. Saha ekibiniz sadece sepet içerisinde elektrik arızasına odaklanırken bizler güvenli ortam ve yüksek denge sağlarız.
            </p>
          </div>
        </section>

        {/* ── H2: Elektrik Bakım Hizmeti ───────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ankara&apos;da Elektrik Bakım Hizmeti
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kurumsal firmaların fabrika bakımlarından, sitelerin otopark aydınlatma arızalarına, sokakların uzun aydınlatma direklerinden alışveriş merkezlerinin dış dekorasyon elektrik düzeneklerine kadar elektrik uzmanı gerektiren her türlü yüksek alan çalışmasında vinç lojistiği sunuyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Dış Aydınlatma ve Sokak Lambaları',
                  desc: 'Site içi yol, ortak alan, otopark aydınlatmaları ve sokak lambalarında gerekli ampul, tesisat, hat kontrolü arızalarına vinç platformu desteği.',
                },
                {
                  title: 'Yüksek Alan Elektrik Arızası',
                  desc: 'Merdiven veya bina içinden ulaşımı mümkün olmayan noktalarda kısa devre, hat kopması gibi yüksek müdahale gerektiren durumlarda teknik altyapımız hazırdır.',
                },
                {
                  title: 'Projektör ve Armatür Değişimi',
                  desc: "Fabrika veya saha aydınlatmalarında kullanılan lojistik projektörler, halı saha aydınlatmaları gibi ağır armatür değişimlerinde yüksek sarsılmazlık sağlarız.",
                },
                {
                  title: 'Direk Üstü Elektrik ve Kablo Kontrolü',
                  desc: 'Enerji aktarım hatları, telefon - internet kablolama arızalarındaki üst bağlantı çalışma esnasında personelinizin rahat çalışması için doğru açı sağlanır.',
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
              Sepetli Vinç ile Elektrik Bakım Neden Tercih Edilir?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Özellikle dış mekan bakım işleri, beklenmedik hava şartları ve güvenlik kaygıları taşır. Tırmanma, iskele kurma gibi opsiyonlara göre vinç kullanımı sektörde standart hale gelmiştir:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'İş ve İşçi Güvenliği',
                  desc: 'Elektrikle çalışmak yeteri kadar riskliyken personeli bir de denge sağlamakla uğraştırmamak gerekir. İzolasyonlu platformlarda sarsıntı yaşanmaz.',
                },
                {
                  title: 'Hızlı Bakım ve Arıza Çözümü',
                  desc: "Sepetli vinç, hedeflenen çalışma yerine saniyeler içinde ulaşır, gereksiz kurulum süresi olmadığı için elektrik kesinti süresi asgariye indirilir.",
                },
                {
                  title: 'Ulaşılmaz Noktalarda Çözüm',
                  desc: 'Dar peyzaj alanları, engelli otopark girişleri veya ağaçlık yollar... Vinçlerimiz uygun konumlamayla en zor noktalara erişim imkanı tanır.',
                },
                {
                  title: 'Operatör Kontrolü',
                  desc: 'Aracımızı bir profesyonel kullanır, siz ve veya elektrikçiniz sadece sisteme odaklanırsınız, yön bulma ve manevra kaygısı çekmezsiniz.',
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

        {/* ── H2: Hangi Bakım İşlerinde Hizmet Veriyoruz? ───────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hangi Elektrik Bakım İşlerinde Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Kısmi küçük sokak arızasından dev fabrika dış cephelerine kadar geniş kullanım alanı için ekipman mevcuttur:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '💡', label: 'Dış aydınlatma bakım' },
                { icon: '🔦', label: 'Projektör ve armatür değişimi' },
                { icon: '🛣️', label: 'Sokak / site aydınlatma desteği' },
                { icon: '🚥', label: 'Trafik lambası onarım desteği' },
                { icon: '🏢', label: 'Bina dış cephe elektrik bakım' },
                { icon: '⚡', label: 'Direk üstü elektrik kontrol' },
                { icon: '🔌', label: 'Arıza sonrası kablolama çalışmaları' },
                { icon: '🏙️', label: 'Tabela aydınlatma bakım' },
                { icon: '🔋', label: 'Trafo dış bağlantı müdahalesi' },
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
                  title: 'Operatörlü Hizmet',
                  desc: 'Sepetli aracı deneyimli, sertifikalı operatörlerimiz yönlendirir, manevra riski almanıza gerek yoktur.',
                },
                {
                  icon: '🔧',
                  title: 'Bakımlı Araçlar',
                  desc: 'Özellikle elektrik müdahaleleri izolasyon gerektirir. Periyodik olarak bakımımız ve denetimlerimiz yapılmaktadır.',
                },
                {
                  icon: '🚀',
                  title: 'Hızlı Acil Destek',
                  desc: "Elektrik kesintilerinin ne kadar kritik olduğunu biliyoruz. Olabildiğince hızlı şekilde sahaya intikal ediyoruz.",
                },
                {
                  icon: '🛡️',
                  title: 'Sarsılmaz Kurulum',
                  desc: 'Aracın örümcek denge ayakları maksimum seviyede açılarak sepetin beşik gibi rüzgarda sallanması engellenir.',
                },
                {
                  icon: '📅',
                  title: 'Planlı Çalışmalar',
                  desc: 'Büyük çaplı aydınlatma ihale ve bakımlarında filo kiralama ve günlük bazlı kurumsal çözümleri destekliyoruz.',
                },
                {
                  icon: '⏱️',
                  title: 'Zamanında Teslim',
                  desc: 'Acil olmayan ancak saat verilen planlı çalışmalarda vaktinde orada olarak gereksiz iş beklemelerini ortadan kaldırırız.',
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
              Hizmet alanımız Ankara ve tüm çevresini kapsamaktadır. En merkezi ilçe Çankaya ve Yenimahalle gibi iş alanlarından, Ostim ve İvedik sanayi bölgelerindeki fabrikalara; Keçiören ve Mamak gibi yoğun yerleşkelerden Etimesgut, Sincan, Gölbaşı, Pursaklar gibi gelişen ilçelere her noktaya aynı gün intikal imkanımız bulunmaktadır.
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
          </div>
        </section>

        {/* ── H2: Fiyat ───────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Elektrik Bakım Fiyatını Etkileyen Unsurlar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sabit bir bakım bedelinden ziya projenin ağırlığını inceliyoruz. Araç fiyatlarımız ve kiralama bedelleri şu unsurlara göre şekillenir:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Müdahale Yüksekliği',
                  desc: 'Mesafe arttıkça kullanılan aracın bom ve şasi boyutları büyümektedir, bu da orantılı olarak fiyatlamayı etkiler.',
                },
                {
                  title: 'Acil Müdahale mi Planlı mı?',
                  desc: 'Acil ve gece arızalarında direkt şantiyeden kalkış durumlarında farklı operasyon giderleri işin içine girebilir.',
                },
                {
                  title: 'Çalışma Süresi',
                  desc: 'Projenin veya değişimin saatlik, günlük veya haftalık periyotlarda sürecek olmasına bağlı saat ücreti hesaplaması.',
                },
                {
                  title: 'Erişim Zorluğu',
                  desc: 'Ağaçlık alan, yüksek eğim, bataklık gibi arıza zorluklarında uygun platform tespiti gerekmektedir.',
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
                Müdahale edilecek yer hakkında kısa bir açıklama yaparak hemen net araç fiyatı oluşturabiliriz.
              </p>
              <a
                href="#teklif-formu"
                id="fiyat-teklif-cta-elektrik"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow"
              >
                Ücretsiz Teklif Al
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
                  Elektrik Bakım İçin Hızlı Teklif Alın
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Yaşadığınız zorluk veya arızayı açıklamanız; ilçe ve yaklaşık çalışma yüksekliğini belirtmeniz en uygun sepetli aracı tarafınıza sunmamız için yeterlidir.
                </p>
                <ul className="space-y-3 text-gray-300">
                  {[
                    '15 dakika içinde hızlı geri dönüş',
                    'Fırsat maliyeti olmadan net fiyatlandırma',
                    'Ankara geneli hızlı acil sevk garantisi',
                    '7/24 Kesintisiz destek hattı hizmeti',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-white/20 pt-8">
                  <p className="text-gray-400 text-sm mb-2">Acil müdahaleler için arayın:</p>
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
                  href: '/hizmetler/tabela-montaj',
                  title: 'Tabela Montaj',
                  desc: 'Dış cephe ve tabela asım teknik desteği',
                },
                {
                  href: '/hizmetler/cephe-temizligi-sepetli-vinc',
                  title: 'Cephe Temizliği İşleri',
                  desc: 'Bina içi ve ofis cam güvenli ulaşım çözümü',
                },
                {
                  href: '/hizmetler/agac-budama',
                  title: 'Ağaç Budama İçin',
                  desc: 'Tehlikeli boyutlara uzanmış ağaç operasyonları',
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
