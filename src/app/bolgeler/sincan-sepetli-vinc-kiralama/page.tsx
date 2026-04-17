import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Sincan Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Sincan OSB, Atatürk Bulvarı ve sanayi sitelerinde 7/24 operatörlü sepetli vinç kiralama. Fabrika cephe, tabela montajı, çatı bakımı. Hemen arayın: 0551 606 68 78.',
  keywords:
    'sincan sepetli vinç kiralama, sincan vinç kiralama, ankara sepetli vinç, sincan osb vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/sincan-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Sincan Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Sincan OSB ve sanayi sitelerinde 7/24 operatörlü sepetli vinç kiralama. 0551 606 68 78.',
    url: getCanonicalUrl('/bolgeler/sincan-sepetli-vinc-kiralama'),
  },
};

export default function SincanPage() {
  return (
    <DistrictPageLayout
      districtName="Sincan"
      districtSlug="sincan"
      heroSubtitle="Sincan OSB, Atatürk Bulvarı ve sanayi sitelerindeki yüksekte çalışma ihtiyaçlarına 30-45 dakika içinde ulaşıyoruz."
      arrivalTime="30-45"
      introText="Ankara'nın batısında konumlanan Sincan; Sincan OSB'nin devasa fabrika alanları, Atatürk Bulvarı boyunca sıralanan ticari işletmeler ve hızla büyüyen konut stokuyla çift yönlü bir iş merkezidir. OSB fabrikalarından tabela montajına, konut dış cephe işlerinden sanayi elektrik sistemlerine kadar her noktada"
      image1={{
        src: '/images/bolge/sincan-sepetli-vinc-calisma.png',
        alt: 'Sincan kiralık sepetli vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/sincan-platform-kiralama-fiyatlari.png',
        alt: 'Sincan sepetli platform kiralama fiyatları',
      }}
      services={[
        {
          title: 'Fabrika ve Depo Dış Cephe Bakımı',
          description:
            "OSB'deki fabrika binalarının metal cephe paneli yenileme, çatı saçak temizliği ve boya işlemleri; 70+ m kapasiteli araçlarla iskele gerekmeksizin tamamlanır.",
        },
        {
          title: 'Sanayi Tesisi Tabela ve Kimlik Uygulamaları',
          description:
            "OSB içi firmaların tesis girişi tabelaları, cephe giydirme ve büyük format afiş montajları; gece vardiyasını kapsayan esnek çalışma saatiyle.",
        },
        {
          title: 'Konut Dış Cephe ve Cam Temizliği',
          description:
            "Fatih, Piri Reis ve Anafartalar mahallelerindeki çok katlı konutlarda dış cephe boyama ve cam temizliği; saatlik kiralama modeliyle hızlı tamamlama.",
        },
        {
          title: 'Elektrik Direği ve Aydınlatma Bakımı',
          description:
            'OSB sokaklarındaki yüksek direk aydınlatma değişimi ve yüksek voltaj hattı yakınında izole sepetlerle güvenli çalışma.',
        },
        {
          title: 'Ağaç Budama',
          description:
            "Atatürk Bulvarı ve park alanlarındaki tehlike arz eden yüksek ağaçların uzman eşliğinde kontrollü budanması.",
        },
      ]}
      whyCards={[
        {
          icon: '🏭',
          title: 'Sanayi Tecrübesi',
          description:
            "Sincan OSB ve çevre sanayi bölgelerinde yüzlerce fabrika ve depo cephe operasyonu tamamladık. Büyük açık alanlarda araç konuşlandırma konusunda güçlü deneyimiz var.",
        },
        {
          icon: '🚛',
          title: 'Büyük Kapasite',
          description:
            "15 m'den 70+ m'ye araç seçeneği. OSB'nin yüksek fabrika ve depo binalarına erişim sağlayan ağır vasıta araçlar filomuzda mevcut.",
        },
        {
          icon: '⚡',
          title: 'Hızlı Varış',
          description:
            "Sincan bölgesine <strong>30-45 dakika</strong> içinde ulaşıyoruz. Hafta sonu ve gece vardiyasında da aktif hizmet sunuyoruz.",
        },
      ]}
      neighbors={[
        { name: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama', icon: '🏘️' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama', icon: '🏢' },
        { name: 'Kahramankazan', href: '/bolgeler/kahramankazan-sepetli-vinc-kiralama', icon: '🏭' },
      ]}
      faq={[
        {
          q: 'Sincan OSB\'ye kaç dakikada gelirsiniz?',
          a: "Konumumuzdan Sincan OSB'ye ortalama <strong>30-45 dakika</strong> içinde ulaşıyoruz. Büyük sanayi projeleri için önceden rezervasyon da mümkün. Hemen aramak için: <a href='tel:05516066878' class='text-primary font-semibold'>0551 606 68 78</a>",
        },
        {
          q: 'Operatör hizmeti fiyata dahil mi?',
          a: "Evet. Tüm paketlerde G sınıfı ehliyetli, iş güvenliği sertifikalı operatörümüz fiyata dahildir. Ayrıca personel ücreti ödenmez.",
        },
        {
          q: 'Hafta sonu ve gece çalışma imkânı var mı?',
          a: "Evet. 7/24 aktif kadromuzla hafta sonu, resmi tatil ve gece vardiyasında da hizmet veriyoruz. Gece operasyonu için önceden bildirim yeterlidir.",
        },
        {
          q: 'Büyük fabrika binaları için yeterli kapasiteye sahip misiniz?',
          a: "Evet. Filomuzda 40-75 metre arası büyük kapasiteli araçlarımız mevcuttur. Tek katlı fabrikadan çok katlı plaza boyutlarına kadar uygun ekipmanı sunabiliriz.",
        },
      ]}
      ctaMessage="Merhaba, Sincan bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
    />
  );
}
