import { Clock, ShieldCheck, Wrench, ShieldAlert, FileText } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: 'Hızlı ve Güvenilir',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: 'Uzman Ekip',
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: 'Bakımlı Ekipmanlar',
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-primary" />,
      title: 'Sigortalı Hizmet',
    },
  ];

  return (
    <section id="neden-biz" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
          </div>
          <p className="text-gray-600 text-lg">
            Yılların tecrübesiyle, iş güvenliğinden ödün vermeden, hızlı ve bütçe dostu sepetli vinç
            kiralama sağlıyoruz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200 shadow-sm">
              <ShieldCheck size={16} /> Sertifikalı operatör
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200 shadow-sm">
              <Wrench size={16} /> Periyodik bakımlı ekipman
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-medium border border-orange-200 shadow-sm">
              <Clock size={16} /> Aynı gün sevk
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200 shadow-sm">
              <FileText size={16} /> Faturalı hizmet
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {reasons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="mb-4 bg-white p-4 rounded-full shadow-sm group-hover:shadow-md transition-shadow group-hover:scale-105 transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
