import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';

import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Tabela Montajı İçin Sepetli Vinç Kiralama',
  description:
    'Ankara tabela, totem ve dış cephe reklam montajlarınız için güvenilir, uygun fiyatlı sepetli vinç kiralama hizmeti.',
  alternates: {
    canonical: `${siteUrl}/hizmetler/tabela-montaj`,
  },
  openGraph: {
    title: 'Tabela Montajı İçin Sepetli Vinç | Ankara Sepetli Vinç',
    description:
      'Ankara tabela, totem ve dış cephe reklam montajlarınız için güvenilir, uygun fiyatlı sepetli vinç kiralama hizmeti.',
    url: `${siteUrl}/hizmetler/tabela-montaj`,
  },
};

export default function TabelaMontajPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Tabela Montajı',
            provider: { '@type': 'LocalBusiness', name: 'Ankara Sepetli Vinç' },
            areaServed: { '@type': 'City', name: 'Ankara' },
            description:
              'Ankara geneli uzman ekibimizle tabela montajı işleminiz sepetli vinçlerimiz sayesinde güvenli ve hızlı şekilde gerçekleştirilir.',
          }),
        }}
      />
      <Header />

      <main className="flex-grow">
        {/* Banner */}
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
                { label: 'Tabela Montaj', href: '/hizmetler/tabela-montaj' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Tabela ve Totem Montajı <span className="text-primary">Sepetli Vinç Kiralama</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Açık hava reklamcılığının en kritik aşaması olan montaj süreçlerinde, riskleri en aza
              indirerek güvenli çalışma ortamı sağlıyoruz.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Güvenilir ve Hassas Montaj Desteği
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Işıklı tabelalar, dev totemler, dış cephe giydirme operasyonları ve açık hava reklam
                panolarının montajı ciddi hassasiyet ve denge gerektirir. Özel tasarlanmış
                sepetlerimiz sayesinde operatörlerimiz ve montaj ekibiniz kusursuz bir uyum
                içerisinde çalışır.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">Dış cepheye zarar vermeyen özel önlemler</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Rüzgarlı havalarda ekstra denge kabiliyeti sağlayan araçlar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Uzman ve reklamcılık montaj kültürüne aşina operatörler
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-3xl h-[400px] flex items-center justify-center shadow-inner relative overflow-hidden">
              {/* Resim alanı placeholder */}
              <div className="absolute inset-0 bg-blue-900/5"></div>
              <span className="text-gray-400 font-bold text-lg z-10">Tabela Montaj Görseli</span>
            </div>
          </div>
        </div>

        <CallToAction
          title="Tabela Montajınız İçin Sepetli Vinç Lazım Mı?"
          message="Merhaba, tabela montajı için sepetli vinç kiralama fiyatlarınızı öğrenmek istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
