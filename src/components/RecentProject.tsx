import Link from 'next/link';
import { ChevronRight, CheckCircle2, ArrowRight, Paintbrush, Wrench, Building2 } from 'lucide-react';

export default function RecentProject() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <CheckCircle2 className="text-green-500 shrink-0" size={36} />
              Son Saha Çalışmaları
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">
              Ankara genelinde başarıyla tamamladığımız güncel sepetli vinç operasyonlarımız.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group shrink-0 font-bold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200"
          >
            Tümünü Gör <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* NEWEST PROJECT - Highlighted (Full width on top) */}
          <div className="lg:col-span-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-900/10 relative overflow-hidden group">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
             
             <div className="flex-1 relative z-10">
               <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-white/30 backdrop-blur-sm text-blue-50">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  En Yeni Operasyon
               </div>
               <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Keçiören Ovacık · Halkbank</h3>
               <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
                 Halkbank Şubesi&apos;nin dış cephe camları 27 metre sepetli vinç ile yaklaşık 3 saatte eksiksiz temizlendi. Banka faaliyetleri kesintisiz sürerken güvenli ve hızlı operasyon tamamlandı.
               </p>
             </div>
             
             <Link 
               href="/blog/kecioren-ovacik-halkbank-dis-cephe-cam-temizligi" 
               className="shrink-0 relative z-10 inline-flex items-center justify-center gap-2 font-bold text-blue-700 bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all w-full md:w-auto"
             >
               İncele <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          {/* GRID OF PREVIOUS PROJECTS */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                location: 'Keçiören Etlik',
                title: 'Dış Cephe Tamiratı',
                text: 'Dış cephede oluşan hasar, 27 metre sepetli vinç desteğiyle güvenli şekilde tamir edildi.',
                href: '/blog/kecioren-etlik-dis-cephe-tamirati-sepetli-vinc-destegi',
                icon: <Building2 size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />,
              },
              {
                location: 'Altındağ Örnek Mh.',
                title: 'Güvenlik Brandası Montajı',
                text: 'Kentsel dönüşüm alanındaki yüksek katlı binaya devasa güvenlik brandası asıldı.',
                href: '/blog/altindag-ornek-mahallesi-kentsel-donusum-binasi-branda-asma-calismasi',
                icon: <Paintbrush size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />,
              },
              {
                location: 'Yaşamkent',
                title: 'Tabela Montajı ve Cam Silme',
                text: 'Elya Center çevresinde 27 metrelik platform ile güvenli yüksekte çalışma tamamlandı.',
                href: '/blog/yasamkentte-27-metre-sepetli-vinc-ile-tabela-montaji-ve-cam-silme-hizmeti',
                icon: <Wrench size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />,
              },
              {
                location: 'Yenimahalle',
                title: 'Diş Kliniği Tabela Montajı',
                text: 'Onkoloji Hastanesi yakınında bulunan diş kliniğinin tabela montajı tamamlandı.',
                href: '/blog/yenimahallede-27-metre-sepetli-vinc-ile-tabela-montaji-ve-cam-silme-calismasi',
                icon: <Wrench size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />,
              },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="group bg-white border border-gray-200 rounded-3xl p-6 md:p-8 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.location}</span>
                    <div className="bg-gray-50 group-hover:bg-blue-50 p-3 rounded-2xl transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-base">{item.text}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Detayları Gör <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
