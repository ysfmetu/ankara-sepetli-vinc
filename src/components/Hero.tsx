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
              Ankara <span className="text-primary">Vinç Kiralama</span> & Sepetli Vinç
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Ankara'nın her bölgesinde hızlı ve güvenilir <strong>ankara vinç kiralama</strong> ve <strong>sepetli vinç kiralama ankara</strong> hizmetleri sunuyoruz.
              Sertifikalı ekibimizle profesyonel <strong>operatörlü vinç kiralama</strong>, projelerinize uygun <strong>saatlik vinç kiralama</strong> veya uzun soluklu işleriniz için <strong>günlük vinç kiralama</strong> çözümleri ile 7/24 yanınızdayız.
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
