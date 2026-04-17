import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Altındağ Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Altındağ, Hıdırlıktepe, Ulucanlar ve Bentderesi bölgelerinde dar sokaklara uyumlu operatörlü sepetli vinç kiralama. Tarihi bina onarımı, dış cephe, tabela. 0551 606 68 78.',
  keywords:
    'altındağ sepetli vinç kiralama, altındağ vinç kiralama, ankara sepetli vinç, altındağ kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/altindag-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Altındağ Sepetli Vinç Kiralama - Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Altındağ, Hıdırlıktepe ve Ulucanlar bölgelerinde 7/24 operatörlü sepetli vinç kiralama. 0551 606 68 78.',
    url: getCanonicalUrl('/bolgeler/altindag-sepetli-vinc-kiralama'),
  },
};

export default function AltindagPage() {
  return (
    <DistrictPageLayout
      districtName="Altındağ"
      districtSlug="altindag"
      heroSubtitle="Hıdırlıktepe, Ulucanlar ve Bentderesi'nin dar tarihi sokaklarına uyumlu kompakt araçlarla 20-35 dakika içinde ulaşıyoruz."
      arrivalTime="20-35"
      introText="Ankara'nın tarihsel dokusunu barındıran Altındağ; Hıdırlıktepe'nin değer kazanan mahalleleri, Ulucanlar ile Atıfbey Caddesi'nin tarihi sokakları ve Bentderesi'nin hareketli çarşı dokusuna sahiptir. Kentsel dönüşüm baskısı altında onlarca yıllık bina stoğunun yenilenmesi ve tarihi yapıların restorasyonu için"
      image1={{
        src: '/images/bolge/altindag-sepetli-vinc-calisma.png',
        alt: 'Altındağ kiralık sepetli vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/altindag-platform-kiralama-fiyatlari.png',
        alt: 'Altındağ sepetli platform kiralama fiyatları',
      }}
      services={[
        {
          title: 'Tarihi Bina Dış Cephe Onarım ve Boyama',
          description:
            "Ulucanlar ve Hıdırlıktepe'deki yüzyıllık yapıların dış cephe onarımı ve boyası; tarihi cepheye zarar vermeden, sepet içinden hassas müdahale.",
        },
        {
          title: 'Kentsel Dönüşüm Projelerinde Destek',
          description:
            "Yıkım veya yenileme öncesi kamera sökümü, tabela temizliği ve teknik demontaj işleri için esnek saatlik kiralama seçeneği.",
        },
        {
          title: 'Çarşı ve Ticaret Bölgesi Tabela Montajı',
          description:
            "Bentderesi ve Atıfbey Caddesi'ndeki dükkânların yüksek cephe tabela, reklam panosu ve ışıklı kutu harf montajları; yaya trafiği aksatılmadan.",
        },
        {
          title: 'Cami ve Tarihi Yapı Restorasyon Desteği',
          description:
            "Altındağ'daki tarihi cami ve kamu yapılarının minare boyama, çatı kurşun kaplaması ve saçak onarımı işleri için hassas platformlama.",
        },
        {
          title: 'Dış Cephe Cam Temizliği',
          description:
            "Ticari ve konut binalarında yüksek katlı cam temizliği; çevre sakinlerine zarar vermeden, güvenli çalışma ortamıyla.",
        },
      ]}
      whyCards={[
        {
          icon: '🏘️',
          title: 'Dar Sokak Uzmanı',
          description:
            "Altındağ'ın 3-4 metrelik dar sokaklarında bile çalışabilen kompakt dingil aralıklı araçlarımız mevcuttur. Stabilizatörler minimum alanda açılır.",
        },
        {
          icon: '⚡',
          title: 'Şehir Merkezine Yakın',
          description:
            "Ankara'nın merkezi ilçelerinden biri olduğu için <strong>20-35 dakika</strong> içinde sahada oluyoruz — en kısa varış süremizden biri.",
        },
        {
          icon: '🏛️',
          title: 'Tarihi Yapı Deneyimi',
          description:
            "Tarihi binalarda çalışmanın gerektirdiği hassasiyeti ve özel teknikleri bilen, deneyimli operatör ekibimiz.",
        },
      ]}
      neighbors={[
        { name: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama', icon: '🏢' },
        { name: 'Mamak', href: '/bolgeler/mamak-sepetli-vinc-kiralama', icon: '🏗️' },
        { name: 'Çankaya', href: '/bolgeler/cankaya-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Pursaklar', href: '/bolgeler/pursaklar-sepetli-vinc-kiralama', icon: '🏘️' },
      ]}
      faq={[
        {
          q: "Altındağ'a kaç dakikada gelirsiniz?",
          a: "Ankara'nın merkezi ilçelerinden biri olduğundan <strong>20-35 dakika</strong> içinde ulaşıyoruz — en kısa varış sürelerimizden biri. Hemen aramak için: <a href='tel:05516066878' class='text-primary font-semibold'>0551 606 68 78</a>",
        },
        {
          q: 'Operatör hizmeti fiyata dahil mi?',
          a: "Evet. Tüm kiralama paketlerinde G sınıfı ehliyetli, iş güvenliği sertifikalı operatörümüz fiyata dahildir.",
        },
        {
          q: "Altındağ'ın dar sokaklarında araç girebiliyor musunuz?",
          a: "Evet. Kompakt dingil aralıklı araçlarımız stabilizatörlerini minimum alanda açarak Altındağ'ın en dar sokaklarında güvenle çalışır.",
        },
        {
          q: 'Tarihi yapılarda çalışmak için özel izin gerekiyor mu?',
          a: "Tescilli tarihi yapılarda belediye veya Kültür Bakanlığı izni gerekebilir. İzin sürecinde yol gösterici ön saha tespiti yapabiliriz; ayrıntılar için arayınız.",
        },
      ]}
      ctaMessage="Merhaba, Altındağ bölgesi için sepetli vinç kiralama hakkında bilgi almak istiyorum."
    />
  );
}
