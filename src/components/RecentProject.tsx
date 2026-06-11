import Link from 'next/link';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

export default function RecentProject() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-4">
        
        {/* NEWEST PROJECT - Highlighted */}
        <div className="bg-blue-50 border border-blue-100 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-green-500 shrink-0" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Son Tamamlanan İşlerimiz</h3>
            </div>
            <p className="text-gray-700 text-base md:text-lg">
              <span className="font-semibold text-gray-900">Altındağ Örnek Mahallesi:</span> Kentsel dönüşüm alanında bulunan yüksek katlı bir binanın dış cephesine 27 metre sepetli vinç ile devasa güvenlik ve reklam brandası montajı tamamlandı.
            </p>
          </div>
          <Link 
            href="/blog/altindag-ornek-mahallesi-kentsel-donusum-binasi-branda-asma-calismasi" 
            className="shrink-0 inline-flex items-center justify-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors bg-white px-6 py-3.5 rounded-xl shadow-sm border border-gray-200 hover:border-primary/50 w-full md:w-auto"
          >
            Vaka çalışmasını incele <ChevronRight size={18} />
          </Link>
        </div>

        {/* PREVIOUS PROJECT */}
        <div className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="flex-1">
            <p className="text-gray-600 text-base md:text-lg">
              <span className="font-semibold text-gray-800">Ulus Rüzgarlı Sokak:</span> Dış cephe mermer değişimi ve onarım çalışmasını dar sokak yapısına uyumlu vinçlerimizle sorunsuz bir şekilde yerine getirdik.
            </p>
          </div>
          <Link 
            href="/blog/ulus-ruzgarli-sokakta-dis-cephe-mermer-degisimi" 
            className="shrink-0 inline-flex items-center justify-center gap-2 font-bold text-gray-600 hover:text-primary transition-colors bg-white px-6 py-3.5 rounded-xl shadow-sm border border-gray-200 hover:border-gray-300 w-full md:w-auto"
          >
            Vaka çalışmasını incele <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
