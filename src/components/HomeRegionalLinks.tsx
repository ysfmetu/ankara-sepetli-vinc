import React from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

const regions = [
  { name: 'Etimesgut sepetli vinç kiralama', path: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
  { name: 'Keçiören sepetli vinç kiralama', path: '/bolgeler/kecioren-sepetli-vinc-kiralama' },
  { name: 'Yenimahalle sepetli vinç kiralama', path: '/bolgeler/yenimahalle-sepetli-vinc-kiralama' },
  { name: 'Ostim sepetli vinç kiralama', path: '/bolgeler/ostim-sepetli-vinc-kiralama' },
  { name: 'Çankaya sepetli vinç kiralama', path: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
  { name: 'Sincan sepetli vinç kiralama', path: '/bolgeler/sincan-sepetli-vinc-kiralama' },
];

export default function HomeRegionalLinks() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ankara’nın Farklı Bölgelerinde Sepetli Vinç Hizmeti
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ankara genelinde en çok talep aldığımız bölgelerde sepetli vinç kiralama hizmeti sunuyoruz. Bulunduğunuz ilçeye en yakın aracı yönlendirerek tabela montajı, cephe temizliği, elektrik bakım, ağaç budama ve yüksek erişim gerektiren işlerde hızlı çözüm sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {regions.map((region, idx) => (
            <Link
              key={idx}
              href={region.path}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {region.name}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/bolgeler"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-yellow-500 hover:text-gray-900 transition-colors"
          >
            Tüm hizmet bölgeleri
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
