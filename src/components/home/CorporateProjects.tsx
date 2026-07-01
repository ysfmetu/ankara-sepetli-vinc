import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    icon: '🏭',
    title: 'Aviagen Anadolu',
    subtitle: 'Bala Tesisi',
    badge: '4 Günlük Operasyon',
    description: 'Kurumsal üretim tesisinde planlı olarak gerçekleştirilen 4 günlük sepetli vinç operasyonu.',
    href: '/blog/bala-kurumsal-tesiste-4-gunluk-sepetli-vinc-hizmeti',
  },
  {
    icon: '🏦',
    title: 'Halkbank',
    subtitle: 'Keçiören Ovacık',
    badge: 'Cam Temizliği',
    description: 'Şube dış cephesinde gerçekleştirilen profesyonel cam temizliği çalışması.',
    href: '/blog/kecioren-ovacik-halkbank-dis-cephe-cam-temizligi',
  },
  {
    icon: '🏢',
    title: 'İş Merkezi',
    subtitle: 'Yaşamkent',
    badge: 'Tabela + Cam',
    description: 'İş merkezinde tabela montajı ve dış cephe cam temizliği uygulaması.',
    href: '/blog/yasamkentte-27-metre-sepetli-vinc-ile-tabela-montaji-ve-cam-silme-hizmeti',
  },
  {
    icon: '🏗',
    title: 'Kentsel Dönüşüm',
    subtitle: 'Altındağ',
    badge: 'Branda Montajı',
    description: 'Kentsel dönüşüm projesinde yüksek katlara güvenli branda montajı.',
    href: '/blog/altindag-ornek-mahallesi-kentsel-donusum-binasi-branda-asma-calismasi',
  },
  {
    icon: '🏢',
    title: 'Dış Cephe',
    subtitle: 'Keçiören Etlik',
    badge: 'Tamirat',
    description: 'Apartman dış cephesinde hızlı ve güvenli tamirat çalışması.',
    href: '/blog/kecioren-etlik-dis-cephe-tamirati-sepetli-vinc-destegi',
  },
];

export default function CorporateProjects() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100" aria-label="Kurumsal Referans Projelerimiz">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kurumsal Referans Projelerimiz
            </h2>
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
          </div>
          <p className="text-gray-600 text-lg">
            Ankara genelinde kamu kurumları, fabrikalar, üretim tesisleri, bankalar, iş merkezleri ve kurumsal işletmelere planlı sepetli vinç hizmeti sunuyoruz. Tamamladığımız gerçek saha çalışmalarını inceleyerek çalışma sürecimizi, kullandığımız ekipmanları ve elde edilen sonuçları görebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="group flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label={`${project.title} projesini incele`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl bg-white p-3 rounded-xl shadow-sm border border-gray-50">{project.icon}</span>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {project.badge}
                </span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-3">{project.subtitle}</p>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-200">
                <span className="inline-flex items-center text-gray-500 group-hover:text-primary font-semibold transition-colors text-sm">
                  Detayları İncele
                  <ArrowRight size={16} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
