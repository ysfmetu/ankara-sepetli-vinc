import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import TrustBar from '@/components/TrustBar';
import WhyUs from '@/components/WhyUs';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Hakkımızda | Ankara Sepetli Vinç',
  description:
    'Yılların tecrübesi, geniş araç filomuz ve iş güvenliği odaklı hizmet anlayışımızla Ankara kiralık sepetli vinç sektörünün öncüsüyüz.',
  alternates: {
    canonical: '/hakkimizda',
  },
  openGraph: {
    title: 'Kurumsal | Ankara Sepetli Vinç',
    description:
      'Yılların tecrübesi, geniş araç filomuz ve iş güvenliği odaklı hizmet anlayışımızla Ankara kiralık sepetli vinç sektörünün öncüsüyüz.',
    url: 'https://ankarasepetlivinc.com/hakkimizda',
  },
};

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hakkımızda', href: '/hakkimizda' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Hakkımızda & <span className="text-primary">Kurumsal Değerlerimiz</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Yükseklerde güvenle çalışmanın teminatı olarak; tecrübe, dinamizm ve %100 iş güvenliği
              anlayışıyla hizmetinizdeyiz.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
          <div className="prose prose-lg prose-red max-w-none text-gray-700">
            <h2 className="text-gray-900">Hikayemiz ve Misyonumuz</h2>
            <p>
              Ankara Sepetli Vinç Kiralama markası olarak, başkentimizin ve çevre illerin artan
              inşaat, bakım, temizlik ve montaj ihtiyaçlarını en profesyonel şekilde karşılamak
              amacıyla kurulduk.
            </p>
            <p>
              Temel prensibimiz <strong>&quot;Sıfır İş Kazası&quot;</strong> ve{' '}
              <strong>&quot;Mutlak Müşteri Memnuniyeti&quot;</strong>dir. Her biri alanında uzman,
              kaldırma ve iletme makineleri kullanım sertifikasına sahip operatörlerimizle
              çalışıyoruz. Araç filomuz, global standartlarda üretilmiş, periyodik muayeneleri
              düzenli yapılan ve her koşula uyum sağlayacak esneklikte seçilmiş platformlardan
              oluşmaktadır.
            </p>

            <h3 className="text-gray-900">Neden Bizi Seçmelisiniz?</h3>
            <ul>
              <li>
                <strong>Zamanında Tedarik:</strong> Vinç sektörünün en büyük problemi olan geç
                kalınmaları, merkezi Ostim lokasyonumuz ve Ankara&apos;ya yayılmış araç ağımızla
                ortadan kaldırıyoruz.
              </li>
              <li>
                <strong>Şeffaf Fiyatlandırma:</strong> İşin ortasında &quot;ekstra saat, ekstra
                kat&quot; gibi sürpriz maliyetler çıkarmıyor; işinizin doğasına en uygun fiyat
                teklifini en baştan sunuyoruz.
              </li>
              <li>
                <strong>Modern Filo:</strong> 10 metreden 70 metreye kadar farklı uzunluklarda
                kırma, düz ve örümcek tip araçlarımız sayesinde her işe uyan &quot;doğru
                makine&quot; tahsisini gerçekleştiriyoruz.
              </li>
            </ul>
          </div>
        </div>

        {/* Reuse the existing Trust and Why Us sections to bolster the About page */}
        <div className="py-8">
          <TrustBar />
        </div>
        <WhyUs />

        <CallToAction
          title="Bizimle Güvendesiniz"
          message="Merhaba, firmanız ve kiralık araçlarınız hakkında bilgi almak istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
