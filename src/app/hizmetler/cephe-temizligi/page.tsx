import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';

import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cephe Temizliği İçin Sepetli Vinç',
  description:
    'Ankara genelinde plaza, rezidans, dış cephe cam temizliği için sepetli vinç ve platform kiralama.',
  alternates: {
    canonical: '/hizmetler/cephe-temizligi',
  },
  openGraph: {
    title: 'Cephe Temizliği Sepetli Vinç Kiralama | Ankara Sepetli Vinç',
    description:
      'Ankara genelinde plaza, rezidans, dış cephe cam temizliği için sepetli vinç ve platform kiralama.',
    url: 'https://ankarasepetlivinc.com/hizmetler/cephe-temizligi',
  },
};

export default function CepheTemizligiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Cephe Temizliği',
            provider: { '@type': 'LocalBusiness', name: 'Ankara Sepetli Vinç' },
            areaServed: { '@type': 'City', name: 'Ankara' },
            description:
              'Sepetli vinç yardımıyla yüksek katlı binaların cephe ve cam temizlikleri Ankara içi profesyonel şekilde tamamlanır.',
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
                { label: 'Cephe Temizliği', href: '/hizmetler/cephe-temizligi' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Dış Cephe Temizliği <span className="text-primary">Sepetli Vinç Kiralama</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Yüksek katlı plazalar ve apartmanların dış cephe temizliği için güvenli, sarsıntısız
              platform ve sepet araçlarımızla hizmetinizdeyiz.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Sarsıntısız Platform, Kusursuz Temizlik
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cam temizlik personellerinin rüzgarlı havalarda ya da yüksek noktalarda güvenle
                çalışabilmeleri için stabil sepet mekanizmaları şarttır. Sepetli vinç kiralama
                hizmetimizle, hem iş güvenliğini azamiye çıkarıyor hem de temizliğin hızlıca
                yapılmasını sağlıyoruz.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    70+ Metreye kadar çalışma imkanı sunan dev vinçler
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Ekstra sarsılmaz denge ayakları (örümcek platform vs.)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Ekmeğini cam temizliğinden kazanan personel için yüksek iş güvenliği standardı
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-3xl h-[400px] flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/5"></div>
              <span className="text-gray-400 font-bold text-lg z-10">Cephe Temizliği Görseli</span>
            </div>
          </div>
        </div>

        <CallToAction
          title="Temizlik İşleriniz İçin Fiyat Teklifi Alın"
          message="Merhaba, bina dış cephe temizliği için sepetli vinç kiralamak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
