import React from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

type VariantType = 'A' | 'B' | 'C';

interface ServiceRegionalLinksProps {
  variant?: VariantType;
}

const regionsData: Record<VariantType, { name: string; path: string }[]> = {
  A: [
    { name: 'Etimesgut sepetli vinç kiralama', path: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
    { name: 'Keçiören sepetli vinç hizmeti', path: '/bolgeler/kecioren-sepetli-vinc-kiralama' },
    { name: 'Yenimahalle vinç kiralama', path: '/bolgeler/yenimahalle-sepetli-vinc-kiralama' },
    { name: 'Ostim sanayi sepetli vinç', path: '/bolgeler/ostim-sepetli-vinc-kiralama' },
    { name: 'Çankaya sepetli vinç hizmeti', path: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
    { name: 'Sincan vinç kiralama', path: '/bolgeler/sincan-sepetli-vinc-kiralama' },
  ],
  B: [
    { name: 'Etimesgut vinç hizmeti', path: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
    { name: 'Keçiören sepetli vinç', path: '/bolgeler/kecioren-sepetli-vinc-kiralama' },
    { name: 'Yenimahalle sepetli vinç hizmeti', path: '/bolgeler/yenimahalle-sepetli-vinc-kiralama' },
    { name: 'Ostim vinç kiralama', path: '/bolgeler/ostim-sepetli-vinc-kiralama' },
    { name: 'Çankaya vinç hizmeti', path: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
    { name: 'Sincan sepetli vinç hizmeti', path: '/bolgeler/sincan-sepetli-vinc-kiralama' },
  ],
  C: [
    { name: 'Etimesgut kiralık sepetli vinç', path: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
    { name: 'Keçiören vinç kiralama', path: '/bolgeler/kecioren-sepetli-vinc-kiralama' },
    { name: 'Yenimahalle vinç hizmetleri', path: '/bolgeler/yenimahalle-sepetli-vinc-kiralama' },
    { name: 'Ostim sepetli platform', path: '/bolgeler/ostim-sepetli-vinc-kiralama' },
    { name: 'Çankaya kiralık vinç', path: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
    { name: 'Sincan sepetli vinç kiralama', path: '/bolgeler/sincan-sepetli-vinc-kiralama' },
  ],
};

export default function ServiceRegionalLinks({ variant = 'A' }: ServiceRegionalLinksProps) {
  const regions = regionsData[variant];

  return (
    <section className="py-12 bg-white border-t border-gray-100 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ankara’da Yoğun Hizmet Verdiğimiz Bölgeler
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Ankara genelinde hizmet veriyoruz. Özellikle Etimesgut, Keçiören, Yenimahalle, Ostim, Çankaya, Sincan, Mamak ve Gölbaşı bölgelerinde sepetli vinç kiralama taleplerine hızlı dönüş sağlıyoruz. Bulunduğunuz ilçeyi ve yapılacak işi bize iletin, en yakın vinci yönlendirelim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {regions.map((region, idx) => (
            <Link
              key={idx}
              href={region.path}
              className="flex items-center justify-between p-3.5 bg-gray-50 rounded-lg hover:bg-yellow-50 border border-transparent hover:border-yellow-200 transition-all group"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                <span className="font-medium text-gray-700 group-hover:text-yellow-800 transition-colors text-sm sm:text-base">
                  {region.name}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/bolgeler"
            className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
          >
            Tüm Ankara hizmet bölgeleri
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
