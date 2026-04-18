import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import ServiceAreas from '@/components/ServiceAreas';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Ankara Sepetli Vinç Hizmet Bölgeleri',
  description:
    "Ankara'da Çankaya, Yenimahalle, Ostim, İvedik ve tüm ilçelere 7/24 hızlı sevk imkanıyla kiralık sepetli vinç.",
  alternates: getMetadataAlternates('/bolgeler'),
  openGraph: {
    title: 'Hizmet Bölgelerimiz | Ankara Sepetli Vinç',
    description:
      "Ankara'da Çankaya, Yenimahalle, Ostim, İvedik ve tüm ilçelere 7/24 hızlı sevk imkanıyla kiralık sepetli vinç.",
    url: getCanonicalUrl('/bolgeler'),
  },
};

const districtsData = [
  {
    name: 'Çankaya',
    slug: 'cankaya',
    image: '/images/bolge/cankaya-sepetli-vinc-calisma.png',
    excerpt: 'Plazalar, iş merkezleri ve büyükelçilikler bölgesi Çankaya\'ya özel sepetli vinç kiralama hizmeti. Yüksek katlı binalarda dış cephe, tabela ve montaj işleriniz için hızlı ve güvenli çözüm.',
  },
  {
    name: 'Yenimahalle',
    slug: 'yenimahalle',
    image: '/images/bolge/yenimahalle-sepetli-vinc-calisma.jpg',
    excerpt: 'Yenimahalle genelinde bina dış cephe işleri, nakliye ve yüksek katlı binalardaki montaj çalışmaları için uygun fiyatlı kiralık platform vinçlerimizle hizmetinizdeyiz.',
  },
  {
    name: 'Sincan',
    slug: 'sincan',
    image: '/images/bolge/sincan-sepetli-vinc-calisma.png',
    excerpt: 'Sincan OSB ve yerleşim alanlarındaki endüstriyel bakım, çatı onarımı ve dış cephe işlemleri için saatlik, günlük veya haftalık kiralık sepetli vinç seçenekleri.',
  },
  {
    name: 'Keçiören',
    slug: 'kecioren',
    image: '/images/bolge/kecioren-sepetli-vinc-calisma.png',
    excerpt: 'Türkiye\'nin en yoğun ilçesi Keçiören\'in dar sokaklarına kolayca girebilen kısa dingilli araçlarımızla bina dış cephe, boya ve yalıtım işlerinde hızlı çözüm üretiyoruz.',
  },
  {
    name: 'Mamak',
    slug: 'mamak',
    image: '/images/bolge/mamak-sepetli-vinc-kiralama-cover.png',
    excerpt: 'Mamak ve çevresinde, yüksek güvenlik standartlarına sahip sepetli vinç filomuzla inşaat, tadilat, bakım ve cephe işlemlerinizde her zaman yanınızdayız.',
  },
  {
    name: 'Etimesgut',
    slug: 'etimesgut',
    image: '/images/bolge/etimesgut-sepetli-vinc-kiralama-1.jpg',
    excerpt: 'Eryaman ve Etimesgut bölgesindeki yeni yerleşim yerlerinde yüksek katlı bina bakımı ve site içi çalışmalarda çevreyi rahatsız etmeyen profesyonel destek.',
  },
  {
    name: 'Altındağ',
    slug: 'altindag',
    image: '/images/bolge/altindag-sepetli-vinc-calisma.png',
    excerpt: 'Tarihi ve ticari bölge Altındağ\'da trafik ve çevreye zarar vermeden, hızlı ve güvenli montaj ve tadilat imkanı sunan kiralık sepetli vinç hizmetleri.',
  },
  {
    name: 'Pursaklar',
    slug: 'pursaklar',
    image: '/images/bolge/pursaklar-sepetli-vinc-calisma.png',
    excerpt: 'Esnek çalışma saatleri ve uygun fiyatlarla Pursaklar bölgesine özel vinç kiralama çözümleri ile işlerinizi hızlandırıyor, maliyetlerinizi düşürüyoruz.',
  },
  {
    name: 'Gölbaşı',
    slug: 'golbasi',
    image: '/images/bolge/golbasi-sepetli-vinc-calisma.png',
    excerpt: 'Gölbaşı, İncek gibi villalar ve yeni projelerin yoğunlaştığı bölgelerde profesyonel, güvenilir ve uygun fiyatlı sepetli vinç servisleri ile bir telefon kadar uzağınızdayız.',
  },
  {
    name: 'Kahramankazan',
    slug: 'kahramankazan',
    image: '/images/bolge/kahramankazan-sepetli-vinc-calisma.png',
    excerpt: 'Saray ve Kahramankazan sanayi bölgelerine özel vinç kiralama hizmeti ile endüstriyel tesislerin çatı, aydınlatma ve bakım onarımlarında pratik sonuçlar sunuyoruz.',
  },
  {
    name: 'Ostim',
    slug: 'ostim',
    image: '/images/bolge/ostim-sepetli-vinc-calisma2.png',
    excerpt: 'Ankara sanayisinin kalbi Ostim OSB\'de fabrika içi, hangar dışı çalışma alanlarına tam uyumlu ekipmanlarla 7/24 kesintisiz vinç kiralama hizmeti.',
  },
  {
    name: 'İvedik',
    slug: 'ivedik',
    image: '/images/bolge/ivedik-sepetli-vinc-calisma.jpg',
    excerpt: 'İvedik OSB işletmelerine özel çatı tadilatı, aydınlatma değişimi ve oluk onarım vinçleri uygun saatlik fiyatlarla her an göreve hazır.',
  },
];

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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ankara İlçe Hizmet Rehberleri
            </h2>
            <p className="text-lg text-gray-600">
              Bulunduğunuz ilçeye özel sepetli vinç kiralama detaylarını, yapılan örnek çalışmaları ve avantajlı fiyatlandırma bilgilerini inceleyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districtsData.map((district) => (
              <Link
                href={`/bolgeler/${district.slug}-sepetli-vinc-kiralama`}
                key={district.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                  <Image
                    src={district.image}
                    alt={`${district.name} Sepetli Vinç`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{district.name}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {district.name} Sepetli Vinç Kiralama
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {district.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold mt-auto group-hover:gap-3 transition-all duration-300">
                    Bölge Detaylarını İncele &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

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
