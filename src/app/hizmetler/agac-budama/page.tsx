import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Ankara Ağaç Budama Hizmeti | Sepetli Vinç ile Güvenli Çalışma',
  description:
    "Ankara'da yüksek ağaç budama, riskli dal kesimi ve bina çevresi budama işleri için operatörlü sepetli vinç desteği. Hızlı teklif alın.",
  alternates: {
    canonical: `${siteUrl}/hizmetler/agac-budama`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ankara Ağaç Budama Hizmeti | Sepetli Vinç ile Güvenli Çalışma',
    description:
      "Ankara'da yüksek ağaç budama, riskli dal kesimi ve bina çevresi budama işleri için operatörlü sepetli vinç desteği. Hızlı teklif alın.",
    url: `${siteUrl}/hizmetler/agac-budama`,
    type: 'website',
    locale: 'tr_TR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ankara Ağaç Budama Hizmeti',
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
    "Ankara'nın tüm ilçelerinde yola, binalara veya elektrik hatlarına sarkan tehlikeli ve yüksek ağaçların budanması için profesyonel sepetli vinç hizmeti.",
  url: `${siteUrl}/hizmetler/agac-budama`,
};

const faqItems = [
  {
    q: 'Ağaç budama için sepetli vinç gerekli midir?',
    a: "Özellikle 2-3 metreyi aşan, yüksek, ince dallara sahip veya bina cephesine aşırı yaklaşmış ağaçlarda merdivenle budama yapmak yüksek kaza riski taşır. Sepetli vinç ile ağacın herhangi bir noktasına güvenle erişebilir ve dengeli bir şekilde testere kullanılabilir.",
  },
  {
    q: "Ankara'da aynı gün budama hizmeti alabilir miyim?",
    a: 'Eğer devrilme tehlikesi veya yola taşma gibi acil bir risk söz konusu ise, filomuzun uygunluk durumuna göre Ankara içindeki adresinize aynı gün intikal sağlamaktayız.',
  },
  {
    q: 'Bina kenarındaki ağaçlar için güvenli çalışma yapıyor musunuz?',
    a: "Kesinlikle. Bina camlarına veya çatı oluklarına sürtünen dalları sepet üzerinden, çevreye veya binaya zarar vermeden kontrollü bir şekilde kesip alıyoruz.",
  },
  {
    q: 'Operatör hizmete dahil mi?',
    a: "Evet, tüm vinç kiralama hizmetlerimizde olduğu gibi ağaç budama işlemlerinde de araçlarımızı sadece sertifikalı ve tecrübeli operatörlerimiz kullanmaktadır.",
  },
  {
    q: 'Hangi yüksekliklerde çalışma yapılabiliyor?',
    a: 'Araçlarımızın dikey erişim boyları 70 metreye kadar ulaşabildiği için orman veya site içlerindeki en yüksek kavak ve çam ağaçlarının tepe budama işlemlerine kadar tüm yüksek alan çalışmalarını güvenle yapabiliyoruz.',
  },
  {
    q: 'Riskli dallar kontrollü şekilde alınabiliyor mu?',
    a: "Evet. Aşağıda park halinde araçlar veya özel peyzaj alanları varsa dallar doğrudan aşağı bırakılmaz; sepet içerisinden küçük parçalara ayrılarak güvenli alana taşınır.",
  },
  {
    q: 'İlçelere göre hizmet süresi değişir mi?',
    a: "Vinçlerimiz Ankara'nın farklı merkez lokasyonlarından hareket etmektedir. Çankaya'dan Eryaman'a kadar her ilçeye mümkün olan en kısa planlama süresinde ulaşım sağlanmaktadır.",
  },
  {
    q: 'Teklif almak için hangi bilgileri paylaşmalıyım?',
    a: 'Ağacın bulunduğu ilçe ve mahalleyi, ağacın yaklaşık tepe yüksekliğini ve çalışma ortamının dar/geniş (önüne araç park edebilir mi vs) bilgisini paylaşarak anında net bir teklif alabilirsiniz.',
  },
];

export default function AgacBudamaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-green-900 to-green-800 py-20 md:py-28 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-[url('/images/services/agac-budama.jpg')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
                { label: 'Ağaç Budama', href: '/hizmetler/agac-budama' },
              ]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Ankara&apos;da <span className="text-green-400">Ağaç Budama</span> Hizmeti
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  Yüksek ve riskli ağaçlarınızın, tehlikeli dalların çevreye zarar vermeden kontrollü kesimi için operatörlü sepetli vinç desteği. Site, iş yeri ve park ortamlarında güvenli erişim çözümleri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+905516066878"
                    id="hero-call-cta-budama"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-lg text-lg"
                  >
                    📞 Hemen Ara: 0551 606 68 78
                  </a>
                  <a
                    href="#teklif-formu"
                    id="hero-form-cta-budama"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-7 rounded-xl transition-all text-lg"
                  >
                    Ücretsiz Teklif Al →
                  </a>
                </div>
              </div>

              {/* Güven unsurları */}
              <div className="hidden lg:grid grid-cols-2 gap-4" aria-hidden="true">
                {[
                  { icon: '🛡️', label: 'Güvenli Ulaşım' },
                  { icon: '✂️', label: 'Kontrollü Kesim' },
                  { icon: '🏗️', label: 'Operatörlü Ekipman' },
                  { icon: '⏱️', label: 'Hızlı Planlama' },
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
              Ağaç budama işlemi doğayla uyumlu ve dikkat gerektiren bir eylemdir ancak çoğu zaman yüksekte çalışmanın riskleri göz ardı edilir. Elinde motorlu testere bulunan bir personelin yüksek ince dallarda veya çürümüş gövdelerde merdiven üzerinde durması ölümcül kazalara yol açabilir. <strong>Sepetli vinç ile budama</strong>, işçi güvenliğini maksimum seviyede tutarken uygulamanın çok daha kontrollü yapılmasını sağlar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Özellikle site içi devasa çam ağaçları, rüzgarla birlikte apartman camlarına vuran dallar, dükkan ve tabela önünü kapatan peyzajlar veya elektrik direklerine dolaşmış tehlikeli dal yapıları için vinç desteği tek akılcı çözümdür. Operatörümüz sizi veya anlaştığınız budama personelini tam olarak müdahale edilecek noktaya, sarsıntısız ve güvenle taşır.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ankara&apos;nın her bölgesinde; parklarda, okul bahçelerinde, kamu ve özel binaların çevresindeki ulaşılamayan tüm ağaçlar için araç filomuzla hizmetinizdeyiz. Can güvenliğini riske atmadan profesyonel destek alarak budama sürecini hızlandırın.
            </p>
          </div>
        </section>

        {/* ── H2: Ağaç Budama Hizmeti ───────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ankara&apos;da Ağaç Budama Hizmeti
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bireysel konutlardan yoğun plazaların çevre düzenlemelerine kadar bütün budama ihtiyaçlarında emniyetli erişim altyapısı kuruyoruz. Doğru alana konumlanan vinçlerimiz ile yüksek alan işlemleriniz eksiksiz gerçekleştirilmektedir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Yüksek Ağaç Budama',
                  desc: 'Topraktan veya iskeleden erişimi imkansız olan yüksek gövdeli ağaç türlerinin tepe noktalarına kolayca ve sıfır sarsıntıyla uzanabilme desteği.',
                },
                {
                  title: 'Riskli ve Çürük Dal Kesimi',
                  desc: 'Yoğun kar ya da fırtına sonrası üstten kırılarak asılı kalan, her an altından geçen araç veya yaya üzerine düşme tehlikesi olan dalların toplanması.',
                },
                {
                  title: 'Bina ve Çatı Kenarı Ağaç Budamaları',
                  desc: 'Bina izolasyonuna, çatı oluklarına veya apartman camlarına baskı yapan sarkan dalların çevre yapılara zarar vermeden kesilmesi.',
                },
                {
                  title: 'Site ve İş Yeri Çevresi',
                  desc: 'Kurumsal dış görünümü optimize etmek için yapılan rutin peyzaj budamaları veya ışık kirliliğini - tabela engellemelerini ortadan kaldırma erişimi.',
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
              Sepetli Vinç ile Ağaç Budama Neden Tercih Edilir?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ağaçlara tırmanarak veya yüksek seyyar merdivenler kullanarak gerçekleştirilen budamalar ciddi tehlikelere ev sahipliği yapar. Bunun yerine sepetli platformlar tercih edilmelidir çünkü:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Maksimum Güvenli Erişim',
                  desc: 'Budama esnasında denge kaybı yaşanması, motor testere ile birleştiğinde son derece kritiktir. Sepetlerimiz personeli emniyet kemeri noktalarıyla sabitler ve güvenle durmasını sağlar.',
                },
                {
                  title: 'Hızlı ve Dengeli Müdahale',
                  desc: "Kurulum gerekmez. İstenen cepheye araç yanaşır, ayaklar açılır ve dalın boyutuna göre operatör sepeti doğrudan kesim yapılacak noktaya iter.",
                },
                {
                  title: 'Kontrollü İş Güvenliği',
                  desc: 'Budanan dallar otonom bir şekilde sepete alınabilir, böylece aşağıda oynayan çocuklar veya park etmiş araçlar için tehlike oluşturan serbest düşüş senaryosu engellenir.',
                },
                {
                  title: 'Zor Noktalar ve Operatör Kontrolü',
                  desc: 'Duvar arkası, elektrik teli yanı gibi sadece usta bir operatörün hassas manevrası ile girilebilecek dar ve zor konumlarda benzersiz üstünlük sağlar.',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100"
                >
                  <span className="text-green-500 font-bold text-xl mt-0.5">✓</span>
                  <div>
                    <strong className="text-gray-900 block mb-1">{item.title}</strong>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── H2: Hangi Budama İşlerinde Hizmet Veriyoruz? ───────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hangi Budama İşlerinde Hizmet Veriyoruz?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Tek bir tehlikeli daldan devasa ormanlık otopark içlerine kadar tüm durumlarda kullanıma hazır filomuz beklemektedir:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🌲', label: 'Yüksek ağaç budama erişimi' },
                { icon: '✂️', label: 'Riskli ve çürüyen dal kesimi' },
                { icon: '🏢', label: 'Bina yakını çatıyı çizen ağaç desteği' },
                { icon: '🏡', label: 'Site ve apartman çevresi dengeleme' },
                { icon: '🛣️', label: 'Araç yolu üstüne taşan sarkan dallar' },
                { icon: '⚡', label: 'Elektrik hatlarına tehlike arz eden dallar' },
                { icon: '⚖️', label: 'Dengeleme ve form budama çalışmaları' },
                { icon: '🍂', label: 'Kış hazırlığı amaçlı derin budama' },
                { icon: '🏗️', label: 'Erişimi zor şev noktalarında budama' },
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
                  title: 'Operatörlü Deneyim',
                  desc: 'Sepetli aracımız sertifikalı operatörce kullanılır. Sizin ekipleriniz yalnızca kesime odaklanarak hız kazanır.',
                },
                {
                  icon: '🚀',
                  title: 'Ankara İçi Hızlı Planlama',
                  desc: "Özellikle tehlike arz eden acil kesim işlemleri için hızlı filo koordinasyonu sağlayabiliyoruz.",
                },
                {
                  icon: '⚙️',
                  title: 'Tam Bakımlı Araçlar',
                  desc: 'Hassas manevraların düzgün çalışabilmesi için hidrolik ve mekanik periyodik bakımları zamanında yapılır.',
                },
                {
                  icon: '🛡️',
                  title: 'İş Güvenliği Standartları',
                  desc: 'Tüm sepetlerimizde emniyet kemeri bağlantı noktaları ve sarsıntı önleyici denge valfleri eksiksizdir.',
                },
                {
                  icon: '📅',
                  title: 'Zamanında Uygulama',
                  desc: 'Söz verilen randevu ve planlama saatine titizlikle uyarak kesim ekiplerinizi boşa bekletmeyiz.',
                },
                {
                  icon: '🤝',
                  title: 'Kontrollü ve Düzenli Taahhüt',
                  desc: 'Çok dar sokaklarda bile etraftaki araçlara zarar dokunmadan ağaç içi erişim teknikleri konularında deneyimliyiz.',
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
              Peyzaj alanlarının geniş olduğu Yenimahalle, Sincan, Etimesgut ve Gölbaşı ilçelerinden; eski binalara ve asırlık ağaçlara ev sahipliği yapan Çankaya, Keçiören, Mamak, Altındağ ve Pursaklar&apos;a kadar geniş bir rotada kiralama organizasyonu yapmaktayız. İşletmeler için Ostim, İvedik ve diğer sanayi bahçelerinde de güçlü servis desteğimiz aktiftir.
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
                  className="bg-gray-100 hover:bg-green-50 hover:text-green-700 border border-gray-200 hover:border-green-200 text-gray-700 font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
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
              Ağaç Budama Fiyatını Etkileyen Unsurlar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Budama operasyonları için kiralanacak olan sepetli vincin kiralama bedelleri işin sahadaki zorluk ve durumlarına göre hesaplanmaktadır:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Ağacın Yüksekliği',
                  desc: '20 metreye çekilecek bir vinçle, 45 metrelik bir dev ağaca ulaşacak vincin sınıfı ve yakıt gideri farklı olduğundan maliyeti değiştirir.',
                },
                {
                  title: 'Lokasyon ve Çevre Erişimi',
                  desc: 'Dar sokaklar veya yokuş alanlar kullanılacak aracın aks mesafesini belirler.',
                },
                {
                  title: 'Çalışma Süresi',
                  desc: 'Bir adet kırık dal kesimi için saatlik kiralama yapılabilirken, tüm site peyzajı için günlük rezervasyon daha uygun maliyetli olacaktır.',
                },
                {
                  title: 'Risk Durumu',
                  desc: 'Parça asarak kesim gerektiren komplike elektrik hattı altı budamalar daha yavaş sürüp ekstra zaman gerektirebilir.',
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
            <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-4 font-medium">
                Müdahale edilecek ağacın yüksekliğini ve ilçenizi paylaşarak adresinize uygun aracın fiyat değerlendirmesini anında yapabiliriz.
              </p>
              <a
                href="#teklif-formu"
                id="fiyat-teklif-cta-budama"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow"
              >
                Ağaç Budama İçin Hızlı Teklif Al
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
          className="py-16 md:py-24 bg-gradient-to-br from-green-900 to-green-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ağaç Budama İçin Hızlı Teklif Alın
                </h2>
                <p className="text-gray-200 leading-relaxed mb-8">
                  Konumunuzu, budanacak ağaçların yaklaşık yüksekliğini ve sayısını iletin. Site veya binanıza erişim ölçütlerine en uygun sepetli vincimizi hemen planlayalım.
                </p>
                <ul className="space-y-3 text-gray-200">
                  {[
                    'Kısa süre içerisinde operasyon ekibi cevabı',
                    'Ağaca uygun sepetli vinç boyutu yönlendirmesi',
                    'Ankara geneline esnek sevk imkanı',
                    'Sürpriz ek maliyetler sunmayan net araç fiyatı',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-white/20 pt-8">
                  <p className="text-gray-300 text-sm mb-2">Acil riskli durumlar için hattımız:</p>
                  <a
                    href="tel:+905516066878"
                    className="text-2xl font-bold text-white hover:text-green-400 transition-colors"
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
                  desc: 'Bütün yüksek işleriniz için operatörlü vinç kiralama',
                },
                {
                  href: '/operatorlu-vinc-kiralama',
                  title: 'Operatörlü Vinç Çözümleri',
                  desc: 'Belgeli operatör ile sarsılmaz kesim desteği',
                },
                {
                  href: '/hizmetler/elektrik-bakim',
                  title: 'Elektrik Bakım Arıza',
                  desc: 'Ağaca giren tellerin sökümü veya direk işlemleri',
                },
                {
                  href: '/hizmetler/tabela-montaj',
                  title: 'Tabela Montaj Asım',
                  desc: 'Peyzaj ve dış alan reklam/afiş asımları',
                },
                {
                  href: '/hizmetler/cephe-temizligi-sepetli-vinc',
                  title: 'Bina Cephe Temizliği',
                  desc: 'Dış cephelere uzanan dalların kesim sonrası temizliği',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-200 rounded-xl p-5 transition-colors group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-green-700 block mb-1 text-sm">
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
