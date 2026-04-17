import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Pursaklar Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Pursaklar TOKİ konutları, Merkez ve Saray mahallelerinde yeni binalara özel 7/24 operatörlü sepetli vinç kiralama. Dış cephe, cam montajı ve tabela. 0551 606 68 78.',
  keywords:
    'pursaklar sepetli vinç kiralama, pursaklar vinç kiralama, ankara sepetli vinç, pursaklar kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/pursaklar-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Pursaklar Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Pursaklar TOKİ ve yeni site projelerine 7/24 operatörlü sepetli vinç kiralama. 0551 606 68 78.',
    url: getCanonicalUrl('/bolgeler/pursaklar-sepetli-vinc-kiralama'),
  },
};

export default function PursaklarPage() {
  return (
    <DistrictPageLayout
      districtName="Pursaklar"
      districtSlug="pursaklar"
      heroSubtitle="TOKİ konutları, yeni site projeleri ve Merkez mahallesi yapılarına 35-50 dakika içinde ulaşıyor; teslim tarihlerinize yetişiyoruz."
      arrivalTime="35-50"
      introText="Ankara'nın kuzeydoğusunda hızla büyüyen Pursaklar; Merkez, Saray ve Karacakaya mahallelerinde canlanan TOKİ konut projeleri ve yeni site gelişimleriyle her geçen yıl yüksekte çalışma talebinin arttığı bir ilçedir. Yeni teslim apartmanlarda dış cephe işlemleri, cam balkon montajı ve tabela uygulamaları için"
      image1={{
        src: '/images/bolge/pursaklar-sepetli-vinc-calisma.png',
        alt: 'Pursaklar kiralık sepetli vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/pursaklar-platform-kiralama-fiyatlari.png',
        alt: 'Pursaklar sepetli platform kiralama fiyatları',
      }}
      services={[
        {
          title: 'Yeni Konut Projelerinde Dış Cephe Son İşlemleri',
          description:
            "TOKİ ve özel müteahhit projelerinde teslim aşamasında kalan mantolama, boya ve silikon derzleme; saatlik kiralama modeliyle hızlı tamamlama.",
        },
        {
          title: 'Cam Balkon ve Korkuluk Montajı',
          description:
            "Yüksek katlara cam balkon sistemi veya çelik korkuluk montajında vincimiz malzeme ve ustayı aynı anda yüksek noktaya taşır.",
        },
        {
          title: 'Site Tabela ve Ortak Alan Uygulamaları',
          description:
            "Yeni konut sitelerinin giriş tabelaları, bina isim levhaları, kamera direkleri ve ortak alan aydınlatma montajı işlemleri.",
        },
        {
          title: 'Dış Cephe Cam Temizliği',
          description:
            "Yeni binaların teslim öncesi dış cam temizliği ve inşaat sonrası cephe yıkama; projenin son halini ortaya çıkarmak için.",
        },
        {
          title: 'Ağaç Budama ve Peyzaj',
          description:
            "Pursaklar'ın gelişen yeşil alanlarındaki ağaçların uzman budanması ve şehir peyzaj projesine destek.",
        },
      ]}
      whyCards={[
        {
          icon: '🏗️',
          title: 'Yeni Proje Deneyimi',
          description:
            "Pursaklar ve çevre ilçelerdeki onlarca yeni konut projesinde çalıştık. Müteahhit koordinasyonu ve teslim tarihine uyumda deneyimliyiz.",
        },
        {
          icon: '📅',
          title: 'Esnek Kiralama',
          description:
            "Saatlik, günlük, haftalık — proje teslim dönemlerinin yoğun temposuna uygun esnek paket seçenekleri. Uzun dönemde avantajlı fiyat.",
        },
        {
          icon: '⚡',
          title: 'Hızlı Sevkiyat',
          description:
            "Pursaklar'a <strong>35-50 dakika</strong> içinde ulaşıyoruz. Acil teslim projelerinde öncelikli slot imkânı.",
        },
      ]}
      neighbors={[
        { name: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama', icon: '🏢' },
        { name: 'Altındağ', href: '/bolgeler/altindag-sepetli-vinc-kiralama', icon: '🏛️' },
        { name: 'Mamak', href: '/bolgeler/mamak-sepetli-vinc-kiralama', icon: '🏗️' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
      ]}
      faq={[
        {
          q: "Pursaklar'a kaç dakikada gelirsiniz?",
          a: "Konumumuzdan Pursaklar'a <strong>35-50 dakika</strong> içinde ulaşıyoruz. Acil teslim projelerinde öncelikli slot mümkündür. Hemen: <a href='tel:05516066878' class='text-primary font-semibold'>0551 606 68 78</a>",
        },
        {
          q: 'Operatör hizmeti fiyata dahil mi?',
          a: "Evet. G sınıfı ehliyetli, iş güvenliği sertifikalı operatörümüz araçla birlikte gelir. Ayrıca operatör ücreti ödenmez.",
        },
        {
          q: 'Birden fazla bloklu projeler için çalışabilir misiniz?',
          a: "Evet. Filomuzdan ek araç sevkiyatı yapılabilir. Çok bloklu projeler için ortak fiyatlandırma ve koordineli iş programı uygulanır.",
        },
        {
          q: 'Teslim zamanı sıkışık projeler için acil randevu alabilir miyim?',
          a: "Evet. 7/24 aktif hattımız bu tür acil talepleri öncelikli olarak karşılar. Durumu açıklayın, en hızlı şekilde araç sevk edelim.",
        },
      ]}
      ctaMessage="Merhaba, Pursaklar bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
    />
  );
}
