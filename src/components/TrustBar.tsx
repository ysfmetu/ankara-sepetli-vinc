import { Clock, ShieldCheck, Wrench } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: '7/24 Hizmet',
      desc: 'Günün her saati acil operasyon desteği',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Sertifikalı Operatörler',
      desc: 'İş güvenliği belgeli uzman kadro',
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: 'Bakımlı Ekipman',
      desc: 'Periyodik bakımı yapılmış güvenli araçlar',
    },
  ];

  return (
    <section className="bg-white py-10 border-b border-gray-100 shadow-sm relative z-20 -mt-6 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 first:pt-0"
            >
              <div className="p-3 bg-red-50 rounded-2xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
