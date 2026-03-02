import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-9xl font-extrabold text-primary mb-4 opacity-20">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 z-10 -mt-16">
          Sayfa Bulunamadı
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-lg">
          Aradığınız sayfaya ulaşılamıyor veya taşınmış olabilir. Vinç kiralama ihtiyaçlarınız için
          hızlıca teklif alabilirsiniz.
        </p>

        <Link
          href="/"
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors mb-16 shadow-lg inline-flex items-center gap-2"
        >
          Ana Sayfaya Dön
        </Link>
      </main>

      <div className="mt-auto">
        <CallToAction
          title="Kaybolmanıza İzin Vermeyelim. Hemen Teklif Alın!"
          message="Merhaba, aradığım sayfayı bulamadım ancak sepetli vinç fiyatlarınızı öğrenmek istiyorum."
        />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}
