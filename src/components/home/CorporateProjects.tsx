import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SubProject {
  icon: string;
  title: string;
  description: string;
  href: string;
}

interface Project {
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  href: string;
  subProjects?: SubProject[];
  bottomText?: string;
}

const projects: Project[] = [
  {
    icon: '⏳',
    title: '3 Gün ve Üzeri Çalışmalar',
    subtitle: '',
    badge: 'Uzun Süreli Operasyonlar',
    description: 'Birden fazla gün süren planlı dış cephe, çatı, bakım ve kurumsal tesis çalışmalarımız.',
    href: '',
    bottomText: 'Tüm Uzun Süreli Çalışmaları Gör',
    subProjects: [
      {
        title: 'Aviagen Anadolu – Bala Tesisi',
        description: '4 günlük kurumsal tesis operasyonu',
        href: '/blog/bala-kurumsal-tesiste-4-gunluk-sepetli-vinc-hizmeti',
        icon: '🏭',
      },
      {
        title: 'Alacaatlı – Çayyolu Villa Çalışması',
        description: '3 günlük dış cephe, çatı ve oluk çalışması',
        href: '/blog/alacaatli-cayyolu-villa-dis-cephe-cati-calismasi-sepetli-vinc',
        icon: '🏡',
      },
      {
        title: 'MAZI İnşaat',
        description: '3 günlük iş merkezi dış cephe ve çatı çalışması',
        href: '/blog/bilkent-is-merkezi-dis-cephe-cati-calismasi-sepetli-vinc',
        icon: '🏢',
      },
    ],
  },
  {
    icon: '🏢',
    title: 'Kurumsal Projeler',
    subtitle: '',
    badge: 'Kurumsal İşletmeler',
    description: 'Banka şubeleri, iş merkezleri, üretim tesisleri ve kurumsal işletmeler için planlı sepetli vinç çözümleri.',
    href: '',
    bottomText: 'Tüm Kurumsal Çalışmaları Gör',
    subProjects: [
      {
        title: 'Halkbank – Keçiören Ovacık',
        description: 'Şube dış cephe cam temizliği',
        href: '/blog/kecioren-ovacik-halkbank-dis-cephe-cam-temizligi',
        icon: '🏦',
      },
    ],
  },
  {
    icon: '🏢',
    title: 'İş Merkezleri',
    subtitle: '',
    badge: 'Tabela & Bakım',
    description: 'İş merkezleri, plazalar ve sanayi sitelerinde gerçekleştirdiğimiz tabela, temizlik, bakım ve karot alma çalışmaları.',
    href: '',
    bottomText: 'Tüm İş Merkezi Çalışmalarını Gör',
    subProjects: [
      {
        title: 'Yaşamkent – Elya Center',
        description: 'Tabela montajı ve cam temizliği',
        href: '/blog/yasamkentte-27-metre-sepetli-vinc-ile-tabela-montaji-ve-cam-silme-hizmeti',
        icon: '🏢',
      },
      {
        title: 'Keresteciler Sanayi',
        description: 'Karot numune alma çalışması',
        href: '/blog/keresteciler-sanayi-sitesi-karot-alma-sepetli-vinc-destegi',
        icon: '🏭',
      },
    ],
  },
  {
    icon: '🏗',
    title: 'Kentsel Dönüşüm',
    subtitle: 'Altındağ',
    badge: 'Branda Montajı',
    description: 'Kentsel dönüşüm projesinde yüksek katlara güvenli branda montajı.',
    href: '/blog/altindag-ornek-mahallesi-kentsel-donusum-binasi-branda-asma-calismasi',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            if (project.subProjects) {
              return (
                <div
                  key={index}
                  className="flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl bg-white p-3 rounded-xl shadow-sm border border-gray-50">{project.icon}</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    {project.subtitle && <p className="text-sm text-gray-500 font-medium mb-3">{project.subtitle}</p>}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mt-4">
                      {project.subProjects.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          className="group flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200/60 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                          aria-label={`${sub.title} projesini incele: ${sub.description}`}
                        >
                          <span className="text-2xl flex-shrink-0">{sub.icon}</span>
                          <div className="flex-grow min-w-0">
                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                              {sub.title}
                            </h4>
                            <p className="text-xs text-gray-500 truncate leading-snug">
                              {sub.description}
                            </p>
                          </div>
                          <ArrowRight size={14} className="text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <span className="inline-flex items-center text-gray-400 font-semibold text-xs uppercase tracking-wider">
                      {project.bottomText}
                    </span>
                  </div>
                </div>
              );
            }

            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
