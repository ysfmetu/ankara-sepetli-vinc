import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Mamak Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Mamak bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
  keywords:
    'mamak sepetli vinç kiralama, mamak vinç kiralama, ankara sepetli vinç, mamak kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/mamak-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Mamak Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Mamak bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
    url: getCanonicalUrl('/bolgeler/mamak-sepetli-vinc-kiralama'),
  },
};

export default function MamakPage() {
  return (
    <DistrictPageLayout
      districtName="Mamak"
      districtSlug="mamak"
      heroSubtitle="Ankara'nın doğusundan Samsun Yoluna uzanan geniş güzergâhta, Mamak bölgesindeki kentsel dönüşüm ve inşaat projelerine vinç sağlıyoruz."
      arrivalTime="25-40"
      introText="Ankara'nın doğu girişini oluşturan Mamak ve devasa kentsel dönüşüm yatırımlarının sürdüğü Nato Yolu ile Samsun Yolu aksında her noktada çalışıyoruz. Yoğun konut projelerinde cam montajları, mantolama hizmetleri ve viyadük ayaklarındaki bakım operasyonları; vinç sektöründe ciddiyet gerektiren konulardır. Bölgenin en yüksek katlı sitelerinde ve inşaatlarında rüzgara karşı korumalı ve tam iş güvenliği sunan sepetli makinelerimizle işlerinizi emniyetle çözmek için"
      image1={{
        src: '/images/bolge/mamak-sepetli-vinc-kiralama-1.png',
        alt: 'Mamak sepetli platform vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/mamak-sepetli-vinc-kiralama-2.jpeg',
        alt: 'Mamak platform kiralama dış cephe montajı',
      }}
      services={[
        {
          title: 'Kentsel Dönüşüm Desteği',
          description:
            "Eski yapıların söküm aşamasında çatı sökümleri veya yeni yapılan 15+ katlı binaların silikon ve dış cephe boyama işlemlerinde güvenli erişim.",
        },
        {
          title: 'Viyadük ve Köprü Altı Bakımları',
          description:
            "Samsun Yolu güzergahındaki köprülerin alt izolasyon boyaları veya korkuluk tamiratlarında sepetli uzanabilen makineler.",
        },
        {
          title: 'Balkon Camlama ve Çerçeve',
          description:
            "Yeni konutların balkonlarına malzeme ile birlikte ustayı çıkararak sepet içerisinden hızlı alüminyum gövde profil montajı.",
        },
        {
          title: 'Ağaç Kesme ve Budama',
          description:
            "Kayaş, Abidinpaşa ve Ege Mahallesi gibi köklü yerleşim yerlerinde evlerin ya da arabaların üzerine sarkan tehlikeli dalların budanması.",
        },
        {
          title: 'Totem Tabela Yıkama ve Kurulum',
          description:
            "Ana yol üzerindeki akaryakıt istasyonları veya dev otomotiv mağazalarının reklam totemlerini gece veya gündüz aydınlatma değişimi.",
        },
      ]}
      whyCards={[
        {
          icon: '🛣️',
          title: 'Samsun Yolu Ağımız',
          description:
            "Ana yola yakın mobilite ile Mamak trafiğine takılmadan her noktaya çok hızlı vinç gönderiminde bulunuyoruz.",
        },
        {
          icon: '🏗️',
          title: 'Yüksek Konut Çözümleri',
          description:
            "Kentsel dönüşüm harikası devasa sitelerin çatısına ulaşabilmek için filomuzdaki 60 ile 75 metrelik dev makineleri dahi yönlendirebiliyoruz.",
        },
        {
          icon: '🤝',
          title: 'Güvenilir Teklif',
          description:
            "Gevşek zemin şantiyelerinden beton dökümü devam eden alanlara kadar ücretsiz ön keşif yaparak doğru aracı doğru fiyata kiralamanızı sağlıyoruz.",
        },
      ]}
      neighbors={[
        { name: 'Altındağ', href: '/bolgeler/altindag-sepetli-vinc-kiralama', icon: '🏛️' },
        { name: 'Çankaya', href: '/bolgeler/cankaya-sepetli-vinc-kiralama', icon: '🏢' },
        { name: 'Gölbaşı', href: '/bolgeler/golbasi-sepetli-vinc-kiralama', icon: '🏡' },
        { name: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama', icon: '🏢' },
      ]}
      faq={[
        {
          q: "Mamak sanayisine veya Nato Yoluna ortalama kaç dakikada gelirsiniz?",
          a: "Mamak'a ulaşım süremiz bulunduğunuz lokasyona (Kayaş, Boğaziçi veya Natoyolu) göre değişmekle birlikte genelde <strong>25 ile 40 dakika</strong> bandındadır.",
        },
        {
          q: "İnşaat alanının zeminine tekerlekli araba giremiyor, vinç destek ayağı açılır mı?",
          a: "Tam kapasite ile güvenli görev yapabilmek için sepetli aracın destek ayaklarının (stabilizatör) sağlam bir zemine basması kritik şarttır. Kurulum alanını önden kontrol edelim.",
        },
        {
          q: 'Gece vakti cam değişimi için operatörlü vinç kiralayabilir miyim?',
          a: "Evet, işlek cadde üzerinde olan kurumsal binaların veya bankaların acil cam vitrin onarımlarında 7/24 hizmet parolamızla hizmetteyiz.",
        },
      ]}
      ctaMessage="Merhaba, Ankara Mamak bölgesi için sepetli vinç kiralama fiyat teklifi istiyorum."
    />
  );
}
