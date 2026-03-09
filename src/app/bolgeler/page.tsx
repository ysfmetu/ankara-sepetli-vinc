import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import ServiceAreas from '@/components/ServiceAreas';
import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Ankara Sepetli Vinç Hizmet Bölgeleri',
  description:
    "Ankara'da Çankaya, Yenimahalle, Ostim, İvedik ve tüm ilçelere 7/24 hızlı sevk imkanıyla kiralık sepetli vinç.",
  alternates: {
    canonical: `${siteUrl}/bolgeler`,
  },
  openGraph: {
    title: 'Hizmet Bölgelerimiz | Ankara Sepetli Vinç',
    description:
      "Ankara'da Çankaya, Yenimahalle, Ostim, İvedik ve tüm ilçelere 7/24 hızlı sevk imkanıyla kiralık sepetli vinç.",
    url: `${siteUrl}/bolgeler`,
  },
};

export default function BolgelerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmet Bölgeleri', href: '/bolgeler' },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ankara İçi <span className="text-primary">Hizmet Bölgelerimiz</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ankara&apos;nın neresinde olursanız olun, konumunuza en yakın araçlarımızı en kısa
              sürede yönlendiriyoruz. Yenimahalle ve Ostim/İvedik OSB bölgelerinde yoğunlaşan araç
              filomuz ile tüm Ankara geneline sadece 30 ila 45 dakika içerisinde ulaşım sağlıyoruz.
            </p>
          </div>
        </div>

        <ServiceAreas />

        <CallToAction
          title="Bulunduğunuz Bölgeye Vinç İsteyin"
          message="Merhaba, ilçemize sepetli vinç talebinde bulunmak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
