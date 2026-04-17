import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Kahramankazan Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Kahramankazan OSB ve Kazan sanayi bölgesinde ağır sanayi yapıları için 7/24 operatörlü sepetli vinç kiralama. Fabrika çatısı, güneş paneli, yüksek depo bakımı. 0551 606 68 78.',
  keywords:
    'kahramankazan sepetli vinç kiralama, kazan vinç kiralama, ankara sepetli vinç, kazan osb vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Kahramankazan Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Kahramankazan OSB ve Kazan sanayi bölgesinde 7/24 operatörlü sepetli vinç kiralama. 0551 606 68 78.',
    url: getCanonicalUrl('/bolgeler/kahramankazan-sepetli-vinc-kiralama'),
  },
};

export default function KahramankazanPage() {
  return (
    <DistrictPageLayout
      districtName="Kahramankazan"
      districtSlug="kahramankazan"
      heroSubtitle="Kazan OSB'deki büyük fabrika ve lojistik depolarına 40-55 dakika içinde büyük kapasiteli araç sevkiyatı yapıyor; sanayi boyutlu ihtiyaçlarınızı karşılıyoruz."
      arrivalTime="40-55"
      introText="İstanbul-Ankara otoyolu güzergâhında konumlanan Kahramankazan; büyük üretim tesisleri, lojistik depolar ve güneş enerjisi tesisleriyle Ankara'nın en büyük sanayi koridorlarından birini oluşturmaktadır. Fabrika çatı bakımından GES kurulumuna, dev depo cephe işlerinden yüksek baca bakımına kadar her projede"
      image1={{
        src: '/images/bolge/kahramankazan-sepetli-vinc-calisma.png',
        alt: 'Kahramankazan kiralık sepetli vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/kahramankazan-platform-kiralama-fiyatlari.png',
        alt: 'Kahramankazan sepetli platform kiralama fiyatları',
      }}
      services={[
        {
          title: 'Fabrika ve Depo Çatı Bakımı',
          description:
            "Kazan OSB'deki fabrika çatı kaplama yenileme, yağmur oluğu tamiri, termal izolasyon ve cam değişimi; 40-75 m kapasiteli araçlarla iskele gerekmeksizin.",
        },
        {
          title: 'Güneş Paneli Kurulum ve Bakım',
          description:
            "Büyük fabrika ve depo çatılarına GES kurulumu için ağır malzeme kaldırma ve montaj desteği. Periyodik panel temizliği anlaşması imkânı.",
        },
        {
          title: 'Lojistik Depo Cephe ve Tabela İşleri',
          description:
            "Dev lojistik merkezi binalarının kurumsal kimlik giydirmesi, büyük format logo uygulamaları ve güvenlik kamera sistemi montajı.",
        },
        {
          title: 'Sanayi Tesisi Aydınlatma Sistemi',
          description:
            "OSB sokaklarındaki yüksek direk aydınlatma değişimi, fabrika floodlight montajı; yüksek voltaj güvenliği için izole sepetler.",
        },
        {
          title: 'Baca ve Havalandırma Sistem Bakımı',
          description:
            "Fabrika bacaları, endüstriyel havalandırma kanalları ve yüksek baca çıkışlarına güvenli erişim hizmeti.",
        },
      ]}
      whyCards={[
        {
          icon: '🏭',
          title: 'Ağır Sanayi Deneyimi',
          description:
            "Sincan OSB, Ostim ve Başkent OSB'de yüzlerce büyük sanayi projesi tamamladık. Büyük açık alanlarda konuşlandırma ve yüksek kapasiteli bom operasyonunda güçlü deneyim.",
        },
        {
          icon: '🚀',
          title: 'Büyük Kapasite',
          description:
            "40-75 metre ağır vasıta araçlarımız Kazan OSB'nin yüksek fabrika ve ambarlarına erişim sağlar. Sanayi tipi ağır yük kapasiteli sepetler.",
        },
        {
          icon: '📋',
          title: 'Kurumsal Altyapı',
          description:
            "Büyük firmalar için iş emri, yazılı sözleşme ve kurumsal fatura altyapısı. Periyodik anlaşma ve çoklu araç talebi mümkündür.",
        },
      ]}
      neighbors={[
        { name: 'Sincan', href: '/bolgeler/sincan-sepetli-vinc-kiralama', icon: '🏭' },
        { name: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama', icon: '🏘️' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Ostim', href: '/bolgeler/ostim-sepetli-vinc-kiralama', icon: '⚙️' },
      ]}
      faq={[
        {
          q: "Kahramankazan / Kazan OSB'ye kaç dakikada gelirsiniz?",
          a: "Konumumuzdan Kahramankazan'a <strong>40-55 dakika</strong> içinde ulaşıyoruz. Büyük sanayi projeleri için sözleşmeli ekip ve araç tahsisi yapılabilir. Hemen: <a href='tel:05516066878' class='text-primary font-semibold'>0551 606 68 78</a>",
        },
        {
          q: 'Operatör hizmeti fiyata dahil mi?',
          a: "Evet. G sınıfı ehliyetli, MMO sertifikalı operatörümüz her iş emrinde araçla birlikte gelir. Büyük projelerde ek güvenlik personeli de sağlanabilir.",
        },
        {
          q: 'Fabrika yüksekliklerine uygun araçlarınız var mı?',
          a: "Evet. Filomuzda 40, 50 ve 75 metrelik ağır vasıta sepetli araçlarımız mevcut. Kazan OSB'nin yüksek fabrika ve depo binalarına erişimde maksimum kapasite sunuyoruz.",
        },
        {
          q: 'Sanayi tesisi için periyodik anlaşma yapılabilir mi?',
          a: "Evet. Aylık, çeyreklik veya yıllık periyodik bakım anlaşmaları mümkündür. Öncelikli slot, kurumsal fatura ve toplu iş indirimi için arayınız.",
        },
      ]}
      ctaMessage="Merhaba, Kahramankazan / Kazan OSB bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
    />
  );
}
