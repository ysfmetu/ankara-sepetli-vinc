import LeadForm from './LeadForm';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-gray-200">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Ankara Sepetli Vinç <span className="text-primary">Kiralama Hizmeti</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              <strong>Ankara sepetli vinç kiralama</strong> hizmeti kapsamında şehrin tüm ilçelerinde hızlı ve güvenli çözümler sunuyoruz. Profesyonel operatörlerimiz ve bakımlı araç filomuz ile tabela montajı, dış cephe çalışmaları, elektrik bakım ve yüksek erişim gerektiren tüm işlerinizde yanınızdayız. <strong>Ankara vinç kiralama</strong> ihtiyaçlarınız için 7/24 hizmet veriyoruz.
            </p>

            <div className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  ✓
                </div>
                <span className="text-gray-700 font-medium">Hızlı Sevk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  ✓
                </div>
                <span className="text-gray-700 font-medium">Uzman Kadro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  ✓
                </div>
                <span className="text-gray-700 font-medium">Yeni Ekipman</span>
              </div>
            </div>
            
            <div className="mt-8 pt-4">
              <p className="text-lg font-bold text-gray-800 bg-white/60 p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                Ankara sepetli vinç kiralama hizmeti için hemen arayın:{' '}
                <a href="tel:+905516066878" className="text-primary hover:underline whitespace-nowrap">0551 606 68 78</a>
              </p>
            </div>
          </div>

          {/* Lead Form Area */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
