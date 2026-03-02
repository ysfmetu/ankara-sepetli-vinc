import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import Services from '@/components/Services';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Sepetli Vinç Kiralama Hizmetleri',
  description:
    'Ankara genelinde tabela montajı, cephe temizliği, elektrik bakım ve ağaç budama gibi pek çok alanda sepetli vinç kiralama çözümleri sunuyoruz.',
  alternates: {
    canonical: '/hizmetler',
  },
  openGraph: {
    title: 'Sepetli Vinç Kiralama Hizmetleri | Ankara Sepetli Vinç',
    description:
      'Ankara genelinde tabela montajı, cephe temizliği, elektrik bakım ve ağaç budama gibi pek çok alanda sepetli vinç kiralama çözümleri sunuyoruz.',
    url: 'https://ankarasepetlivinc.com/hizmetler',
  },
};

export default function HizmetlerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
              Sepetli Vinç <span className="text-primary">Kiralama Hizmetlerimiz</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Farklı yükseklik, tonaj ve erişim gereksinimlerine uygun geniş araç filomuzla
              Ankara&apos;nın tüm ilçelerinde profesyonel çözümler üretiyoruz. İş güvenliğine tam
              uyumlu, periyodik bakımları yapılmış araçlarımız ve sertifikalı operatörlerimizle 7/24
              hizmetinizdeyiz.
            </p>
          </div>
        </div>

        {/* Reuse the Services component from home page without the bottom CTA inside it */}
        <Services />
        <CallToAction
          title="İşinize Uygun Vinç İçin Hemen Fiyat Alın"
          message="Merhaba, sunduğunuz hizmetler hakkında detaylı bilgi ve fiyat teklifi almak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
