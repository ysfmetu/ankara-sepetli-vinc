import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import Services from '@/components/Services';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Ankara Vinç Kiralama Hizmetleri',
  description:
    "Ankara'da sepetli vinç kiralama, operatörlü vinç kiralama, saatlik ve günlük vinç kiralama hizmetleri.",
  alternates: {
    canonical: `${siteUrl}/hizmetler`,
  },
  openGraph: {
    title: 'Ankara Vinç Kiralama Hizmetleri | Ankara Sepetli Vinç',
    description:
      "Ankara'da sepetli vinç kiralama, operatörlü vinç kiralama, saatlik ve günlük vinç kiralama hizmetleri.",
    url: `${siteUrl}/hizmetler`,
  },
};

export default function HizmetlerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ankara Vinç Kiralama Hizmetleri',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ankara Sepetli Vinç Kiralama',
      url: siteUrl
    },
    areaServed: {
      '@type': 'City',
      name: 'Ankara'
    },
    description: "Ankara'da sepetli vinç kiralama, operatörlü vinç kiralama, saatlik ve günlük vinç kiralama hizmetleri.",
    url: `${siteUrl}/hizmetler`
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ankara Vinç <span className="text-primary">Kiralama Hizmetleri</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Farklı yükseklik, tonaj ve erişim gereksinimlerine uygun geniş araç filomuzla
              Ankara'nın tüm ilçelerinde profesyonel çözümler üretiyoruz. İş güvenliğine tam
              uyumlu, periyodik bakımları yapılmış araçlarımız ve sertifikalı operatörlerimizle 7/24
              hizmetinizdeyiz.
              Daha detaylı bilgi için <Link href="/" className="text-primary hover:underline font-semibold">ana sayfamızı</Link> ziyaret edebilir veya tüm filomuza göz atabilirsiniz.
            </p>

            {/* SEO Content Sections */}
            <div className="text-left space-y-12 mt-12 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none">
              <section id="sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Sepetli Vinç Kiralama</h2>
                <p>
                  Yüksek katlı binaların dış cephe temizlikleri, tabela montajları ve açık hava reklamcılığında güvenlik gerektiren tüm işlemleriniz için idealdir. <Link href="/sepetli-vinc-kiralama">Ankara sepetli vinç kiralama</Link> departmanımız, dar ara sokaklarda bile manevra kabiliyeti yüksek modern araç filosu sunar.
                </p>
                <Link href="/sepetli-vinc-kiralama" className="inline-block mt-4 text-primary font-bold hover:underline">Sepetli Vinç Detayları →</Link>
              </section>

              <section id="operatorlu-vinc-kiralama" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Operatörlü Vinç Kiralama</h2>
                <p>
                  Vincin kiralanması sürecinde, iş güvenliği lisanslı ve tecrübeli operatörlerimiz aracı sizin için bizzat yönetir. Yükseltici platformların profesyonellerce kullanılması sıfır iş kazası prensibi için kaçınılmazdır. Daha fazla bilgi için <Link href="/operatorlu-vinc-kiralama">operatörlü hizmet sürecimizi</Link> inceleyin.
                </p>
                <Link href="/operatorlu-vinc-kiralama" className="inline-block mt-4 text-primary font-bold hover:underline">Operatörlü Hizmet Detayları →</Link>
              </section>

              <section id="saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Saatlik Vinç Kiralama</h2>
                <p>
                  Kısa süreli tabela onarımları veya lambası değişimleri için bütçe dostu <strong>saatlik vinç kiralama</strong> seçeneklerimiz mevcuttur. Daha az maliyetle hızlı müdahale arayanlar için <Link href="/saatlik-vinc-kiralama">saatlik vinç kiralama servisimiz</Link> 7/24 hizmettedir.
                </p>
                <Link href="/saatlik-vinc-kiralama" className="inline-block mt-4 text-primary font-bold hover:underline">Saatlik Rezervasyon →</Link>
              </section>

              <section id="gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Günlük Vinç Kiralama</h2>
                <p>
                  Dış cephe izolasyon projeleri veya şantiyelerde <strong>günlük vinç kiralama</strong> alternatifimiz daha ekonomik fayda sağlar. Detaylar ve kiralama avantajları için <Link href="/gunluk-vinc-kiralama">günlük kiralama opsiyonumuza</Link> veya direkt <Link href="/iletisim">İletişim sayfamıza</Link> göz atın.
                </p>
                <Link href="/gunluk-vinc-kiralama" className="inline-block mt-4 text-primary font-bold hover:underline">Günlük Seçenekler →</Link>
              </section>

              <section id="cephe-temizligi" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Cephe Temizliği İçin Sepetli Vinç</h2>
                <p>
                  Ankara&apos;da plaza, AVM ve yüksek katlı binalarda <strong>dış cephe cam temizliği</strong> ve bina yüzey temizliği operasyonları için operatörlü sepetli vinç hizmeti sunuyoruz. İskele kurmanıza gerek kalmadan, çok daha hızlı ve güvenli erişim sağlıyoruz. <Link href="/hizmetler/cephe-temizligi-sepetli-vinc">Ankara cephe temizliği sepetli vinç kiralama</Link> sayfamızda detaylı bilgi ve teklif formu yer almaktadır.
                </p>
                <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="inline-block mt-4 text-primary font-bold hover:underline">Cephe Temizliği Hizmeti Detayları →</Link>
              </section>

              <section id="tabela-montaj" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Tabela Montaj Hizmeti</h2>
                <p>
                  Mağaza tabelasından bina cephesine, ışıklı toteme kadar <strong>tabela montajı ve söküm</strong> operasyonlarında operatörlü sepetli vinç desteği sunuyoruz. Ankara genelinde hızlı sevkiyat, iş güvenliğine tam uyum. <Link href="/hizmetler/tabela-montaj">Ankara tabela montaj hizmeti</Link> sayfamızda detaylı bilgi ve teklif formu yer almaktadır.
                </p>
                <Link href="/hizmetler/tabela-montaj" className="inline-block mt-4 text-primary font-bold hover:underline">Tabela Montaj Hizmeti Detayları →</Link>
              </section>

              <section id="elektrik-bakim" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Elektrik Bakım ve Arıza Müdahalesi</h2>
                <p>
                  Sokak lambası değişiminden yüksek gerilim direklerine, bina dış cephe aydınlatmalarından projektör arızalarına kadar tüm yüksek alan elektrik müdahalelerinde <strong>7/24 sepetli vinç</strong> desteği veriyoruz. Hızlı sevk ve güvenli çalışma için detaylar <Link href="/hizmetler/elektrik-bakim">Ankara elektrik bakım hizmeti</Link> sayfamızda.
                </p>
                <Link href="/hizmetler/elektrik-bakim" className="inline-block mt-4 text-primary font-bold hover:underline">Elektrik Bakım Hizmeti Detayları →</Link>
              </section>

              <section id="agac-budama" className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Ağaç Budama Hizmeti</h2>
                <p>
                  Yol kenarlarına sarkan, binaların camlarına veya çatısına temas eden tehlikeli ve yüksek ağaçların <strong>kontrollü budama işlemleri</strong> için operatörlü vinç kiralama hizmeti sunuyoruz. Güvenli ağaç kesimi ve budama erişimi konusunda detaylı planlamalarımız için <Link href="/hizmetler/agac-budama">Ankara ağaç budama hizmeti</Link> sayfamızı inceleyin.
                </p>
                <Link href="/hizmetler/agac-budama" className="inline-block mt-4 text-primary font-bold hover:underline">Ağaç Budama Hizmeti Detayları →</Link>
              </section>

              <section id="hizmet-bolgeleri" className="bg-white border text-center border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="mt-0">Ankara'da Hangi Bölgelerde Hizmet Veriyoruz?</h2>
                <p>
                  Sanayi ve inşaatın kalbi <strong>Ostim</strong> başta olmak üzere; <strong>Çankaya</strong>, <strong>Etimesgut</strong>, <strong>Yenimahalle</strong>, <strong>Sincan</strong>, <strong>Keçiören</strong> ve <strong>Mamak</strong> olmak üzere Ankara'nın her lokasyonuna anında araç sevk edecek mobil filomuz hazır beklemektedir. Bize ulaşarak bölgenize en yakın vinci talep edebilirsiniz.
                </p>
                <Link href="/iletisim" className="inline-block mt-4 text-primary font-bold hover:underline">Bölgeniz İçin Vinç Talep Edin →</Link>
              </section>
            </div>
          </div>
        </div>

        {/* Reuse the Services component from home page without the bottom CTA inside it */}
        <Services />
        <CallToAction
          title="İşinize Uygun Vinç İçin Hemen Fiyat Alın"
          message="Merhaba, sunduğunuz hizmetler hakkında detaylı bilgi ve fiyat teklifi almak istiyorum."
        />
        <div className="bg-white pb-20">
          <FAQ />
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
