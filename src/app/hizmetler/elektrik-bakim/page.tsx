import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';

import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
  title: 'Elektrik ve Bakım İşleri Sepetli Vinç',
  description:
    'Ankara sokak aydınlatması, trafo, yüksek gerilim hatları elektrik ve bakım işleri için 7/24 sepetli vinç kiralama.',
  alternates: {
    canonical: `${siteUrl}/hizmetler/elektrik-bakim`,
  },
  openGraph: {
    title: 'Elektrik Bakım Sepetli Vinç Kiralama | Ankara Sepetli Vinç',
    description:
      'Ankara sokak aydınlatması, trafo, yüksek gerilim hatları elektrik ve bakım işleri için 7/24 sepetli vinç kiralama.',
    url: `${siteUrl}/hizmetler/elektrik-bakim`,
  },
};

export default function ElektrikBakimPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Elektrik Bakım ve Arıza',
            provider: { '@type': 'LocalBusiness', name: 'Ankara Sepetli Vinç' },
            areaServed: { '@type': 'City', name: 'Ankara' },
            description:
              'Sokak aydınlatmaları ve yüksek noktalardaki elektrik arızalarına müdahale için saatlik vinç kiralama hizmeti sunuyoruz.',
          }),
        }}
      />
      <Header />

      <main className="flex-grow">
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmetlerimiz', href: '/hizmetler' },
                { label: 'Elektrik Bakım', href: '/hizmetler/elektrik-bakim' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Elektrik & Bakım <span className="text-primary">Sepetli Vinç Kiralama</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Yol aydınlatmaları, elektrik direkleri ve yüksek gerilim trafo onarımları için 7/24
              kesintisiz erişim sağlıyoruz.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                7/24 Acil Müdahale ve Güvenli Erişim
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Elektrik arızaları ve yüksek bakımlar asla beklemez. Özellikle rüzgar ve yağış
                sonrası ortaya çıkan sokak aydınlatma direği onarımları, kamera ve güvenlik
                sistemleri montajları gibi alanlarda kısıtlı alanlara sığabilen platformlarımız ile
                hizmetinizdeyiz. Profesyonel izolasyonlu sepet kasalarımızla elektrik akım
                risklerine karşı ekstra iş güvenliği.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    7/24 Nöbetçi operatör sistemi ile anında ulaşım
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Dar sokaklar ve bariyer araları için manevra kabiliyeti yüksek araçlar
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-3xl h-[400px] flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/5"></div>
              <span className="text-gray-400 font-bold text-lg z-10">
                Elektrik Bakım Temsili Görsel
              </span>
            </div>
          </div>
        </div>

        <CallToAction
          title="Arıza Müdahalesi İçin Vinç mi Çağıracaksınız?"
          message="Merhaba, elektrik direği / kamera montajı için acil sepetli vinç kiralama fiyatı alabilir miyim?"
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
