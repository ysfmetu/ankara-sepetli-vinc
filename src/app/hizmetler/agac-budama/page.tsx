import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';

import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Ağaç Budama Sepetli Vinç | Ankara',
  description:
    "Ankara'da peyzaj, site içi ve riskli ağaç budama işleriniz için uygun fiyatlı sepetli vinç kiralama hizmeti.",
  alternates: {
    canonical: '/hizmetler/agac-budama',
  },
  openGraph: {
    title: 'Ağaç Budama İçin Sepetli Vinç | Ankara Sepetli Vinç',
    description:
      "Ankara'da peyzaj, site içi ve riskli ağaç budama işleriniz için uygun fiyatlı sepetli vinç kiralama hizmeti.",
    url: 'https://ankarasepetlivinc.com/hizmetler/agac-budama',
  },
};

export default function AgacBudamaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ağaç Budama',
            provider: { '@type': 'LocalBusiness', name: 'Ankara Sepetli Vinç' },
            areaServed: { '@type': 'City', name: 'Ankara' },
            description:
              'Tehlike arz eden veya rutin bakıma ihtiyaç duyan ağaçların sepetli vinçlerimizle emniyetli şekilde budanmasını sağlıyoruz.',
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
                { label: 'Ağaç Budama', href: '/hizmetler/agac-budama' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ağaç Budama <span className="text-primary">Sepetli Vinç Kiralama</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Yol kenarı, site bahçesi veya elektrik hatlarına yaklaşan yüksek ve riskli ağaçların
              budanması için güvenli platform kiralama.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Peyzaj İşlerinde Güvenli Budama</h2>
              <p className="text-gray-600 leading-relaxed">
                Belediyeler, site yönetimleri ve kurumsal peyzaj firmaları başta olmak üzere,
                çürümüş, devrilme riski olan veya sadece uzamış dallara müdahale ederken iskele veya
                merdiven pratik değildir. Sepetli vinç kiralayarak testere kullanımında üstün
                stabilite sağlıyor, en dip dallara kadar dahi rahatça büküm yapıp uzanabiliyoruz.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Toprağa ve peyzaj zeminine en az zarar verecek hafif tonajlı araç imkanları
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Belediye kesim izinlerinde ve site yönetimlerinde prosedüre uygun çalışma
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-3xl h-[400px] flex items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-green-900/5"></div>
              <span className="text-gray-400 font-bold text-lg z-10">Ağaç Budama Görseli</span>
            </div>
          </div>
        </div>

        <CallToAction
          title="Budama İçin Sepetli Vinç Kiralayın"
          message="Merhaba, ağaç budama işimiz için günlük/saatlik vinç kiralama fiyatı rica ediyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
