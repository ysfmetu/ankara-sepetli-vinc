'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceAreas() {
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);

  const districts = [
    { name: 'Çankaya', slug: 'cankaya' },
    { name: 'Yenimahalle', slug: 'yenimahalle' },
    { name: 'Sincan', slug: 'sincan' },
    { name: 'Keçiören', slug: 'kecioren' },
    { name: 'Mamak', slug: 'mamak' },
    { name: 'Etimesgut', slug: 'etimesgut' },
    { name: 'Altındağ', slug: 'altindag' },
    { name: 'Pursaklar', slug: 'pursaklar' },
    { name: 'Gölbaşı', slug: 'golbasi' },
    { name: 'Kahramankazan', slug: 'kahramankazan' },
    { name: 'Ostim', slug: 'ostim' },
    { name: 'İvedik', slug: 'ivedik' },
  ];

  return (
    <section id="bolgeler" className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hizmet Verdiğimiz Bölgeler
            </h2>
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Districts List */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {districts.map((district, index) => (
                <Link
                  key={index}
                  href={`/bolgeler/${district.slug}-sepetli-vinc-kiralama`}
                  onMouseEnter={() => setActiveDistrict(district.name)}
                  onMouseLeave={() => setActiveDistrict(null)}
                  className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="bg-red-50 group-hover:bg-primary/10 p-1.5 rounded-full transition-colors flex-shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span className="text-[14px] font-bold text-gray-800 group-hover:text-primary transition-colors leading-tight">
                    {district.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#teklif-formu"
                className="inline-flex w-full justify-center rounded-xl bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 transition-colors shadow-lg"
              >
                Tüm Ankara / Fiyat Sor
              </Link>
            </div>
          </div>

          {/* Map/Illustration Area */}
          <div className="w-full lg:w-[60%] relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white">
              <Image
                src="/images/blog/hizmetler/sepetli-vinc-kiralama-ankara-1.png"
                alt="Ankara Geneli Sepetli Vinç Kiralama Hizmet Bölgelerimiz"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
