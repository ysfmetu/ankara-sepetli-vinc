import { CheckCircle2, Building2, MapPin, Target } from 'lucide-react';

const stats = [
  {
    icon: <CheckCircle2 className="w-10 h-10 text-primary mb-4" />,
    value: '100+',
    label: 'Tamamlanan Operasyon',
  },
  {
    icon: <Building2 className="w-10 h-10 text-primary mb-4" />,
    value: '25+',
    label: 'Kurumsal İşletme',
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary mb-4" />,
    value: '15+ İlçe',
    label: 'Ankara Geneli',
  },
  {
    icon: <Target className="w-10 h-10 text-primary mb-4" />,
    value: '%100',
    label: 'Zamanında Teslim',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Rakamlarla ASV Ankara Sepetli Vinç
            </h2>
            <div className="h-px bg-gray-300 w-12 sm:w-24"></div>
          </div>
          <p className="text-gray-600 text-lg">
            Ankara genelinde bireysel, ticari ve kurumsal projelerde güvenli sepetli vinç hizmeti sunuyoruz. Tamamlanan saha çalışmalarımızla hem hızlı müdahale hem de planlı operasyonlarda çözüm ortağı oluyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
