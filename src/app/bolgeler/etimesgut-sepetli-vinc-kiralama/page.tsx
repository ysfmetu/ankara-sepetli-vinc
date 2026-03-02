import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';

import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Etimesgut Sepetli Vinç Kiralama',
  description:
    'Ankara Etimesgut bölgesinde uygun fiyatlı, 7/24 kiralık sepetli vinç ve platform hizmetleri.',
  alternates: {
    canonical: '/bolgeler/etimesgut-sepetli-vinc-kiralama',
  },
  openGraph: {
    title: 'Etimesgut Sepetli Vinç Kiralama | Ankara Sepetli Vinç',
    description:
      'Ankara Etimesgut bölgesinde uygun fiyatlı, 7/24 kiralık sepetli vinç ve platform hizmetleri.',
    url: 'https://ankarasepetlivinc.com/bolgeler/etimesgut-sepetli-vinc-kiralama',
  },
};

export default function EtimesgutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmet Bölgeleri', href: '/bolgeler' },
                { label: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Etimesgut <span className="text-primary">Sepetli Vinç Kiralama</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Ankara Etimesgut bölgesinde endüstri, sanayi ve konut projelerinize özel
              hızlı kiralama seçenekleri.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
          <div className="prose prose-lg prose-red max-w-none">
            <p className="lead font-medium text-xl text-gray-700">
              Ankara Etimesgut bölgesi ve çevresinde yılların deneyimiyle en hızlı, en güvenli sepetli vinç kiralama hizmetini sunuyoruz. Geniş makine parkurumuz sayesinde 10 metreden 70+ metreye kadar tüm yükseklik ihtiyaçlarınıza aynı gün çözüm üretiyoruz.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">En Sık Kullanım Alanları</h3>
            <ul>
              <li><strong>Dış Cephe İşlemleri:</strong> Cam temizliği, boya, mantolama ve tamirat.</li>
              <li><strong>Tabela ve Reklam:</strong> Totem tabela montajı, afiş asımı ve sökümü.</li>
              <li><strong>Ağaç Bakımı:</strong> Tehlike arz eden ve yüksek ağaçların budanması.</li>
              <li><strong>Elektrik ve Aydınlatma:</strong> Sokak lambaları ve yüksek direk arızaları.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Kiralama Sürecimiz (3 Adım)</h3>
            <ol className="space-y-2">
              <li><strong>1. İhtiyaç Analizi:</strong> Bizi arayın veya form doldurun. Ücretsiz keşif veya telefonda durum tespiti yapalım.</li>
              <li><strong>2. Doğru Araç Seçimi:</strong> Metraj ve kullanım alanına en uygun sepetli vincimizi hemen hazırlayalım.</li>
              <li><strong>3. Hızlı Operasyon:</strong> Sertifikalı operatörümüzle birlikte aracımız tam saatinde adresinizde olsun ve işiniz güvenle tamamlansın.</li>
            </ol>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4 not-prose mt-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Etimesgut bölgesine ne kadar sürede araç gönderebilirsiniz?</h4>
                <p className="text-gray-600 text-sm">Bölgelerdeki hazır araçlarımız sayesinde genellikle 30-45 dakika içerisinde acil sevkiyat sağlayabiliyoruz.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Operatör hizmeti fiyata dahil mi?</h4>
                <p className="text-gray-600 text-sm">Evet, tüm kiralama hizmetlerimizde alanında uzman, iş güvenliği sertifikalı operatörlerimiz aracı kullanmak üzere fiyata dahildir.</p>
              </div>
            </div>

          </div>
        </div>

        <CallToAction
          title="Etimesgut Bölgesi İçin Vinç Çağırın"
          message="Merhaba, Etimesgut bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
