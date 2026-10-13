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
    description:
      'Birden fazla gün süren planlı dış cephe, çatı, bakım ve kurumsal tesis çalışmalarımız.',
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
        title: 'AS İnşaat – İncek/Ahlatlıbel Sitesi',
        description: '~20 günlük dış cephe, cam temizliği ve silikon çalışması',
        href: '/blog/incek-ahlatlibel-sepetli-vinc-dis-cephe-calismasi',
        icon: '🏘️',
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
    description:
      'İş merkezleri, üretim tesisleri, şantiyeler ve kurumsal işletmeler için planlı sepetli vinç çözümleri.',
    href: '',
    bottomText: 'Tüm Kurumsal Çalışmaları Gör',
    subProjects: [
      {
        title: 'Sazak İnşaat – Beysukent Şantiyesi',
        description: '7 günlük konut şantiyesi – 45 metre mobil platform',
        href: '/blog/beysukent-sazak-insaat-santiyesi-45-metre-mobil-platform-sepetli-vinc',
        icon: '🏗️',
      },
      {
        title: 'Başkent OSB – Fabrika Cam Temizliği',
        description: 'Üretim tesisi dış cephe temizliği',
        href: '/blog/baskent-osb-cam-temizligi-sepetli-vinc',
        icon: '🏭',
      },
      {
        title: 'İvedik OSB – 4 Katlı İş Yeri',
        description: 'Dış cephe cam temizliği operasyonu',
        href: '/blog/ivedik-osb-4-katli-is-yeri-dis-cam-temizligi',
        icon: '🏢',
      },
    ],
  },
  {
    icon: '🏢',
    title: 'İş Merkezleri',
    subtitle: '',
    badge: 'Tabela & Cam temizleme',
    description:
      'İş merkezleri, plazalar ve sanayi sitelerinde gerçekleştirdiğimiz tabela, temizlik, bakım ve karot alma çalışmaları.',
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
      {
        title: 'Otonomi',
        description: 'İş merkezi dış cephe cam silme',
        href: '/blog/otonomi-sepetli-vinc-dis-cephe-cam-silme-kahramankazan',
        icon: '🚗',
      },
    ],
  },
  {
    icon: '🏗',
    title: 'Tamir İşlemleri',
    subtitle: '',
    badge: 'Branda & Çatı Oluk',
    description: 'Kentsel dönüşüm branda montajı, çatı oluk tamiri ve bina bakım çalışmaları.',
    href: '',
    bottomText: 'Tüm Tamir Çalışmalarını Gör',
    subProjects: [
      {
        title: 'Çankaya Oran – Çatı Oluk Tamiri',
        description: '3 saatlik oluk tamiri, mobil platform ile',
        href: '/blog/oran-sitesi-cankaya-cati-oluk-tamiri-sepetli-vinc',
        icon: '🏠',
      },
      {
        title: 'Alacaatlı – Çayyolu Villa Çalışması',
        description: '3 günlük dış cephe, çatı ve oluk bakımı',
        href: '/blog/alacaatli-cayyolu-villa-dis-cephe-cati-calismasi-sepetli-vinc',
        icon: '🏡',
      },
      {
        title: 'Altındağ – Branda Montajı',
        description: 'Kentsel dönüşüm binasında branda asma çalışması',
        href: '/blog/altindag-ornek-mahallesi-kentsel-donusum-binasi-branda-asma-calismasi',
        icon: '🏗️',
      },
    ],
  },
];

interface BankBranch {
  name: string;
  href?: string;
}

const bankBranches: BankBranch[] = [
  {
    name: 'Halkbank – Ovacık / Ankara',
    href: '/blog/kecioren-ovacik-halkbank-dis-cephe-cam-temizligi',
  },
  {
    name: 'Halkbank – Şentepe / Ankara',
  },
  {
    name: 'QNB Finansbank – Kayseri',
  },
  {
    name: 'Akbank – Esenler / İstanbul',
  },
  {
    name: 'Akbank – Hoşdere / Ankara',
    href: '/blog/cankaya-hosdere-akbank-sepetli-vinc-cam-temizligi',
  },
  {
    name: 'Akbank – İvedik / Ankara',
  },
  {
    name: 'DenizBank – Antalya',
  },
];

export default function CorporateProjects() {
  const CHUNK_SIZE = 5;
  const bankColumns: BankBranch[][] = [];
  for (let i = 0; i < bankBranches.length; i += CHUNK_SIZE) {
    bankColumns.push(bankBranches.slice(i, i + CHUNK_SIZE));
  }

  return (
    <section
      className="py-12 md:py-16 bg-white border-b border-gray-100"
      aria-label="Kurumsal Referans Projelerimiz"
    >
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
            Ankara genelinde kamu kurumları, fabrikalar, üretim tesisleri, bankalar, iş merkezleri
            ve kurumsal işletmelere planlı sepetli vinç hizmeti sunuyoruz. Tamamladığımız gerçek
            saha çalışmalarını inceleyerek çalışma sürecimizi, kullandığımız ekipmanları ve elde
            edilen sonuçları görebilirsiniz.
          </p>
        </div>

        {/* 4 Ana Referans Kategorisi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            if (project.subProjects) {
              return (
                <div
                  key={index}
                  className="flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl bg-white p-3 rounded-xl shadow-sm border border-gray-50">
                      {project.icon}
                    </span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-sm text-gray-500 font-medium mb-3">{project.subtitle}</p>
                    )}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>

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
                          <ArrowRight
                            size={14}
                            className="text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0"
                          />
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
                  <span className="text-4xl bg-white p-3 rounded-xl shadow-sm border border-gray-50">
                    {project.icon}
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {project.badge}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <span className="inline-flex items-center text-gray-500 group-hover:text-primary font-semibold transition-colors text-sm">
                    Detayları İncele
                    <ArrowRight
                      size={16}
                      className="ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* BANKALAR Referans Alanı */}
        <div className="mt-8 md:mt-10 bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          {/* Sol taraf: Dar, dikey başlık alanı (~%20–25, dikey ve yatay ortalı) */}
          <div className="w-full lg:w-[23%] p-6 sm:p-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center text-center shrink-0">
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-4xl inline-flex items-center justify-center bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                🏦
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider text-white">
                  BANKALAR
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                  Türkiye Geneli Referanslar
                </p>
              </div>
            </div>
          </div>

          {/* Sağ taraf: Şube Listesi (~%75–80, hafif kompakt) */}
          <div className="w-full lg:w-[77%] p-5 sm:p-6 bg-gray-50 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-3.5">
              <h4 className="text-base sm:text-lg font-bold text-gray-900">
                Tamamlanan Şube Çalışmaları
              </h4>
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                {bankBranches.length} Şube
              </span>
            </div>

            <div className="overflow-x-auto pb-1">
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 min-w-full">
                {bankColumns.map((col, colIdx) => (
                  <div key={colIdx} className="flex-1 md:min-w-[240px] space-y-2">
                    {col.map((branch, bIdx) => {
                      if (branch.href) {
                        return (
                          <Link
                            key={bIdx}
                            href={branch.href}
                            className="group flex items-center justify-between py-2.5 px-3 rounded-xl bg-white border border-gray-200/80 hover:border-blue-500 hover:bg-blue-50/40 hover:shadow-sm transition-all text-sm font-semibold text-gray-800 hover:text-blue-700"
                            aria-label={`${branch.name} çalışmasını incele`}
                          >
                            <span className="truncate">{branch.name}</span>
                            <ArrowRight
                              size={15}
                              className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
                            />
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={bIdx}
                          className="flex items-center py-2.5 px-3 rounded-xl bg-white/80 border border-gray-200/60 text-sm font-medium text-gray-700"
                        >
                          <span className="truncate">{branch.name}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
