import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Gölbaşı Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Gölbaşı Koru Siteler, Tulumtaş ve İncek bölgelerinde premium konut ve villalara özel 7/24 operatörlü sepetli vinç kiralama. Dış cephe, cam temizliği, peyzaj. 0551 606 68 78.',
  keywords:
    'gölbaşı sepetli vinç kiralama, gölbaşı vinç kiralama, ankara sepetli vinç, gölbaşı kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/golbasi-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Gölbaşı Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Gölbaşı Koru Siteler ve İncek bölgesinde premium konut projelerine özel operatörlü sepetli vinç kiralama. 0551 606 68 78.',
    url: getCanonicalUrl('/bolgeler/golbasi-sepetli-vinc-kiralama'),
  },
};

export default function GolbasiPage() {
  return (
    <DistrictPageLayout
      districtName="Gölbaşı"
      districtSlug="golbasi"
      heroSubtitle="Koru Siteler, Tulumtaş ve İncek'teki premium konut ve villa projelerine 25-40 dakika içinde ulaşıyor; site standartlarınıza uygun çalışıyoruz."
      arrivalTime="25-40"
      introText="Eymir Gölü kıyısında uzanan Gölbaşı; Koru Siteler'in lüks villalarından İncek'in modern rezidanslarına kadar Ankara'nın en prestijli konut bölgelerinden birini oluşturmaktadır. Premium konut stoku, yüksek standartta bakım ve uygulama talebi doğurur. Villa cam cephe temizliği, site dış cephe yenileme ve bahçe peyzaj işlerinde"
      image1={{
        src: '/images/bolge/golbasi-sepetli-vinc-calisma.png',
        alt: 'Gölbaşı kiralık sepetli vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/golbasi-platform-kiralama-fiyatlari.png',
        alt: 'Gölbaşı sepetli platform kiralama fiyatları',
      }}
      services={[
        {
          title: 'Villa ve Rezidans Dış Cam Temizliği',
          description:
            "Koru Siteler ve İncek'teki geniş cam cepheli villaların periyodik dış cam temizliği; kirletici iz bırakmayan özel ekipmanlarla profesyonel hizmet.",
        },
        {
          title: 'Dış Cephe Boya ve Mantolama',
          description:
            "Premium konut ve villa projelerinde dış cephe yenileme, mantolama ve silikon kaplama; peyzajı koruyarak temiz iş alanıyla çalışma.",
        },
        {
          title: 'Çatı ve Kiremit Onarımı',
          description:
            "Koru Siteler'deki kiremitli villaların rüzgar hasarı, su birikimi veya kiremit kaymasına bağlı çatı onarımı ve yalıtım işlemleri.",
        },
        {
          title: 'Peyzaj ve Bahçe Ağaç Budama',
          description:
            "Lüks site bahçelerinde büyük ağaçların estetik ve güvenli budanması; geniş bahçe alanlarında mükemmel araç konuşlanma imkânı.",
        },
        {
          title: 'Tabela ve Kurumsal Kimlik Uygulamaları',
          description:
            "Gölbaşı merkezindeki ticari binaların yüksek cephe tabela montajı ve güncelleme hizmetleri.",
        },
      ]}
      whyCards={[
        {
          icon: '🏡',
          title: 'Premium Ortam Uyumu',
          description:
            "Site kurallarına tam uyum; peyzaj, araç parkı tahsisi ve çalışma saati tercihlerine göre uyarlanan esnek operasyon disiplini.",
        },
        {
          icon: '⚡',
          title: 'Hızlı Ulaşım',
          description:
            "Ankara'nın güneybatısındaki Gölbaşı'na <strong>25-40 dakika</strong> içinde ulaşıyoruz. Site yönetimiyle koordineli randevu planlaması.",
        },
        {
          icon: '🔄',
          title: 'Periyodik Bakım',
          description:
            "Büyük site yönetimleriyle aylık ve mevsimlik periyodik hizmet anlaşması yapılabilir. Öncelikli araç tahsisi ve avantajlı fiyatlandırma.",
        },
      ]}
      neighbors={[
        { name: 'Çankaya', href: '/bolgeler/cankaya-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama', icon: '🏘️' },
        { name: 'Mamak', href: '/bolgeler/mamak-sepetli-vinc-kiralama', icon: '🏗️' },
        { name: 'Pursaklar', href: '/bolgeler/pursaklar-sepetli-vinc-kiralama', icon: '🏢' },
      ]}
      faq={[
        {
          q: "Gölbaşı Koru Siteler'e kaç dakikada gelirsiniz?",
          a: "Ankara'nın güneybatı aksındaki Gölbaşı'na <strong>25-40 dakika</strong> içinde ulaşıyoruz. Koru Siteler ve İncek bölgesine aynı sürede erişim. Hemen: <a href='tel:05516066878' class='text-primary font-semibold'>0551 606 68 78</a>",
        },
        {
          q: 'Operatör hizmeti fiyata dahil mi?',
          a: "Evet. Tüm kiralama paketlerinde G sınıfı ehliyetli, iş güvenliği sertifikalı operatörümüz fiyata dahildir.",
        },
        {
          q: 'Geniş villa bahçelerinde araç konuşlandırabilir misiniz?',
          a: "Evet. Farklı araç boyutu seçenekleriyle geniş bahçeli villaların özel yollarında güvenle çalışıyoruz. Site giriş kapısı genişliğini önceden bildiriniz.",
        },
        {
          q: 'Periyodik bakım anlaşması yapılabilir mi?',
          a: "Evet. Koru Siteler ve İncek gibi büyük site yönetimleriyle aylık veya mevsimlik anlaşmalar mümkündür. Öncelikli araç tahsisi için arayınız.",
        },
      ]}
      ctaMessage="Merhaba, Gölbaşı bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
    />
  );
}
