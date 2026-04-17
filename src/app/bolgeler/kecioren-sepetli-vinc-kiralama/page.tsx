import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Keçiören Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Keçiören, Ovacık, Ufuktepe ve Etlik bölgelerinde 7/24 operatörlü sepetli vinç kiralama. Dış cephe, tabela montajı, cam temizliği. Hemen arayın: 0551 606 68 78.',
  keywords:
    'keçiören sepetli vinç kiralama, keçiören vinç kiralama, ankara sepetli vinç, keçiören kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/kecioren-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Keçiören Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Keçiören, Ovacık ve Etlik bölgelerinde 7/24 operatörlü sepetli vinç kiralama. 0551 606 68 78.',
    url: getCanonicalUrl('/bolgeler/kecioren-sepetli-vinc-kiralama'),
  },
};

export default function KeciorenPage() {
  return (
    <DistrictPageLayout
      districtName="Keçiören"
      districtSlug="kecioren"
      heroSubtitle="Ovacık, Ufuktepe, Etlik ve Ayvalı mahallelerine 30-45 dakika içinde ulaşıyor; dar sokaklarda bile tam manevrayla çalışıyoruz."
      arrivalTime="30-45"
      introText="Ankara'nın en kalabalık ilçelerinden Keçiören; Ovacık'tan Etlik'e uzanan ticari yapısı, Kalaba ve Ufuktepe'nin yoğun konut dokusu ile İncirli Caddesi'nin aktif iş dünyasıyla her gün onlarca yüksekte çalışma operasyonuna ev sahipliği yapar. Bu yoğun kentsel dokuda güvenli ve hızlı bir çözüm sunan"
      image1={{
        src: '/images/bolge/kecioren-sepetli-vinc-calisma.png',
        alt: 'Keçiören kiralık sepetli vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/kecioren-platform-kiralama-fiyatlari.png',
        alt: 'Keçiören sepetli platform kiralama fiyatları',
      }}
      services={[
        {
          title: 'Dış Cephe Boyama ve Mantolama',
          description:
            "Kalaba ve Ufuktepe'deki çok katlı apartmanlarda silikon kaplama, mantolama ve boya işlemleri; iskele kurulumu yerine saatlik kiralama ile günler değil saatler içinde tamamlama.",
        },
        {
          title: 'Tabela ve Reklam Panosu Montajı',
          description:
            "İncirli Caddesi, Etlik ve Ovacık'taki ticari işletmelerin yüksek noktalardaki tabela sökümü, montajı ve ışıklı panel değişimi; gece vardiyasında bile aktif ekip.",
        },
        {
          title: 'Cam Temizliği ve Cephe Yıkama',
          description:
            "Yüksek katlı binaların dış cam yüzeylerinin profesyonel temizliği; yaya güvenliği tehlikeye atılmadan kısa sürede tamamlama.",
        },
        {
          title: 'Ağaç Budama ve Peyzaj',
          description:
            "Keçiören'deki park alanları ve cadde refüjlerinde devrilme tehlikesi taşıyan ağaçların kontrollü, güvenli budanması.",
        },
        {
          title: 'Elektrik ve Aydınlatma Bakımı',
          description:
            "Sokak armatürü değişimi, elektrik direği bakımı ve yüksek voltaj hattına izole sepetlerle güvenli ulaşım.",
        },
      ]}
      whyCards={[
        {
          icon: '👷',
          title: 'Operatör Dahil',
          description:
            "G sınıfı ehliyetli, MMO sertifikalı operatörümüz her operasyonda aracı yönetir. Ekstra işçilik maliyeti ödemezsiniz.",
        },
        {
          icon: '🏙️',
          title: 'Dar Sokak Uzmanı',
          description:
            "Keçiören'in dar ve yokuşlu sokaklarında mükemmel manevra kabiliyetiyle çalışabilen kompakt dingil aralıklı araçlarımız var.",
        },
        {
          icon: '⚡',
          title: 'Hızlı Varış',
          description:
            "Merkezi konumumuzdan Keçiören'e <strong>30-45 dakika</strong> içinde ulaşıyoruz. 7/24 aktif telefon hattı.",
        },
      ]}
      neighbors={[
        { name: 'Sincan', href: '/bolgeler/sincan-sepetli-vinc-kiralama', icon: '🏭' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Altındağ', href: '/bolgeler/altindag-sepetli-vinc-kiralama', icon: '🏛️' },
        { name: 'Çankaya', href: '/bolgeler/cankaya-sepetli-vinc-kiralama', icon: '🏢' },
      ]}
      faq={[
        {
          q: "Keçiören'e kaç dakikada gelirsiniz?",
          a: "Merkezi konumumuzdan Keçiören'e ortalama <strong>30-45 dakika</strong> içinde ulaşıyoruz. Acil durumlarda öncelikli sevkiyat uygulanır. Hemen aramak için: <a href='tel:05516066878' class='text-primary font-semibold'>0551 606 68 78</a>",
        },
        {
          q: 'Operatör hizmeti fiyata dahil mi?',
          a: "Evet. Tüm kiralama paketlerimizde G sınıfı ehliyetli, iş güvenliği sertifikalı operatörümüz fiyata dahildir. Ek işçilik ücreti ödemezsiniz.",
        },
        {
          q: "Keçiören'in dar sokaklarında çalışabilir misiniz?",
          a: "Evet. Kompakt dingil aralıklı, stabilizatörleri minimum alanda açılabilen araçlarımız Keçiören'in en dar sokaklarında bile güvenle çalışır.",
        },
        {
          q: "Dış cephe boyama için ne kadar süre gerekiyor?",
          a: "Standart 5-7 katlı bir apartman cephesi için sepetli vinçle ortalama 1-2 gün yeterlidir; iskele yöntemiyle bu süre 5-7 güne çıkabilir.",
        },
      ]}
      ctaMessage="Merhaba, Keçiören bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
    />
  );
}
