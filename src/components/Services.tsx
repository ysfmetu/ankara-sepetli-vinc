import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Tabela & Montaj',
      description: 'Açık hava reklamcılığı, totem ve dış cephe tabelalarının güvenli montajı.',
      image: '/images/services/tabela-montaj.jpg',
    },
    {
      title: 'Cephe Temizliği',
      description: 'Plaza, iş merkezi ve yüksek katlı binaların dış cephe ve cam temizliği.',
      image: '/images/services/cephe-temizligi.jpg',
    },
    {
      title: 'Elektrik & Bakım',
      description: 'Sokak aydınlatmaları, yüksek gerilim hatları ve direk bakım onarım işleri.',
      image: '/images/services/elektrik-bakim.jpg',
    },
    {
      title: 'Ağaç Budama',
      description: 'Park, bahçe ve yol kenarlarındaki yüksek ağaçların güvenli şekilde budanması.',
      image: '/images/services/agac-budama.jpg',
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sepetli Vinç Kiralama Hizmetlerimiz
            </h2>
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
          </div>
          <p className="text-gray-600 text-lg">
            Ankara&apos;nın her noktasına farklı yükseklik ve çalışma alanlarına uygun araç
            filomuzla profesyonel çözümler üretiyoruz.{' '}
            <Link href="/sepetli-vinc-kiralama" className="text-primary hover:underline hover:text-primary-hover font-medium transition-colors">
              Sepetli vinç kiralama hizmeti hakkında detaylı bilgi için sayfamızı inceleyin.
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Optimized Image Area */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image}
                  alt={`Ankara sepetli vinç kiralama hizmeti - ${service.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                <Link
                  href="#teklif-formu"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
                >
                  Detay
                  <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/hizmetler"
            className="inline-flex max-w-sm justify-center rounded-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 transition-colors shadow-lg"
          >
            Tüm Hizmetlerimiz
          </Link>
        </div>
      </div>
    </section>
  );
}
