import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Vinç Kiralama Fiyatları | Ankara 2024',
  description:
    'Saatlik, günlük ve haftalık sepetli vinç kiralama fiyatları, fiyatlandırma kriterleri ve örnek tablolar.',
  alternates: {
    canonical: '/fiyatlar',
  },
  openGraph: {
    title: 'Sepetli Vinç Kiralama Fiyatları | Ankara Sepetli Vinç',
    description:
      'Saatlik, günlük ve haftalık sepetli vinç kiralama fiyatları, fiyatlandırma kriterleri ve örnek tablolar.',
    url: 'https://ankarasepetlivinc.com/fiyatlar',
  },
};

export default function FiyatlarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Fiyatlar', href: '/fiyatlar' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Sepetli Vinç Kiralama <span className="text-primary">Fiyatları</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Şeffaf fiyatlandırma, esnek saat/gün/ay paketleri ve detaylı fiyatlandırma
              kriterlerimiz.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
          <div className="space-y-12">
            <div className="prose prose-lg prose-red max-w-none text-gray-700">
              <h2 className="text-gray-900">Fiyatlamayı Ne Etkiler?</h2>
              <p>
                Vinç sektöründe &quot;sabit bir tarife&quot; bulunmamasına rağmen, maliyet tablomuz
                son derece şeffaftır. Fiyat teklifi hesaplanırken göz önünde bulundurduğumuz
                metrikler şunlardır:
              </p>
              <ul>
                <li>
                  <strong>İhtiyaç Duyulan Yükseklik:</strong> 15 metrelik bir aracın işletim
                  maliyetiyle 70 metrelik devasa bir mobil vincin işletim maliyeti doğal olarak
                  farklıdır.
                </li>
                <li>
                  <strong>Kiralama Süresi:</strong> Saatlik operasyonlarda saat birim fiyatı
                  yüksekken, günlük, haftalık veya aylık projelere tahsislerde ciddi iskontolar
                  (indirimler) uygulanmaktadır.
                </li>
                <li>
                  <strong>Çalışma Alanı (Lokasyon):</strong> Merkezimize olan uzaklık, yolculuk
                  esnasında harcanan yakıtı ve zamanı etkiler. (Yenimahalle ve çevresi için yol
                  maliyeti 0&apos;a yakındır.)
                </li>
                <li>
                  <strong>Gereken Extra İzinler:</strong> Şehir merkezi veya trafiğin yoğun olduğu
                  lokasyonlarda kapatılması gereken yollar ve zabıta izinleri gibi maliyetler sürece
                  dahil edilebilir.
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Örnek Başlangıç Fiyat Arası
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Not: Aşağıdaki fiyat aralıkları temsilidir, doğru fiyat için operatörümüze
                danışınız.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-gray-800">10-20 Metre Vinç (Saatlik)</span>
                  <span className="text-primary font-bold">Teklif Alınız</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-gray-800">20-30 Metre Vinç (Günlük)</span>
                  <span className="text-primary font-bold">Teklif Alınız</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-gray-800">45+ Metre Vinç (Günlük)</span>
                  <span className="text-primary font-bold">Teklif Alınız</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-gray-800">Örümcek Platform</span>
                  <span className="text-primary font-bold">Proje Bazlı</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToAction
          title="Net Fiyatı Hemen Öğrenin"
          message="Merhaba, yapılacak işin detaylarını iletip net ve uygun bir fiyat teklifi almak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
