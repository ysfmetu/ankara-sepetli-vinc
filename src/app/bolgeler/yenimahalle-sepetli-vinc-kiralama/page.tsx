import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Yenimahalle Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Yenimahalle bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
  keywords:
    'yenimahalle sepetli vinç kiralama, yenimahalle vinç kiralama, ankara sepetli vinç, yenimahalle kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/yenimahalle-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Yenimahalle Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Yenimahalle bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
    url: getCanonicalUrl('/bolgeler/yenimahalle-sepetli-vinc-kiralama'),
  },
};

export default function YenimahallePage() {
  return (
    <DistrictPageLayout
      districtName="Yenimahalle"
      districtSlug="yenimahalle"
      heroSubtitle="Batıkent'ten Şentepe'ye, Macunköy'den Ankara'nın mega sanayi üslerine kadar geniş araç parkuru ile anında hizmet veriyoruz."
      arrivalTime="15-25"
      introText="Ankara'nın sanayi, lojistik ve ticaret kalbini Ostim ve İvedik gibi üslerle besleyen, eş zamanlı olarak da Batıkent ve Şentepe gibi çok katlı yoğun konut alanlarına ev sahipliği yapan Yenimahalle; sepetli platformlar için en fazla operasyon yürüttüğümüz ilçedir. Lojistik depoların bakımından, devasa sitelerin mantolamasına ve AVM tabela yerleşimlerine kadar geniş bir spektrum içerisindeyiz. Profesyonel kadromuzla"
      image1={{
        src: '/images/bolge/yenimahalle-sepetli-vinc-calisma.jpg',
        alt: 'Yenimahalle sepetli platform vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/yenimahalle-platform-kiralama.png',
        alt: 'Yenimahalle platform kiralama bina cephesi yıkama',
      }}
      services={[
        {
          title: 'Batıkent Konut İzolasyon ve Cephe İşlemleri',
          description:
            "Batıkent ve Çakırlar bölgesindeki çok bloklu devasa site projelerinde cephe tamiratları, dış cam temizliği, alüminyum kompozit ve korkuluk montajları.",
        },
        {
          title: 'Şentepe Yüksek Yapı İşlemleri',
          description:
            "Şentepe'nin yokuşlu alanlarında dar açıklıklara adapte olabilen yatay uzanım kapasitesi yüksek araçlarımızla sorunsuz tamir, boya hizmeti.",
        },
        {
          title: 'Makina Kurulumu ve Havalandırma Bakımı',
          description:
            "Macunköy, Gimat gibi gıda veya ticari lojistik yerleşkelerinde endüstriyel klima santrali değişimleri, dış soğutucu motor montajları.",
        },
        {
          title: 'Tabela, Kutu Harf ve Totem Bakımı',
          description:
            "İstanbul Yolu üzerindeki plazalar, AVM'ler ve otomotiv bayilerinin 30 metre üzeri kurumsal totem, LED tabela bakım ve onarımları.",
        },
        {
          title: 'Cami Minaresi ve Özel Yapı Restorasyonu',
          description:
            "Yenimahalle geneli ibadethane, belediye kurumu gibi yapılarda çatı kurşunu tamiri, bayrak direği bakımı gibi özel sepetli hizmetleri.",
        },
      ]}
      whyCards={[
        {
          icon: '📍',
          title: 'Merkez Üssümüz',
          description:
            "Araç garajımızın ve merkez ofisimizin konum itibarıyla İvedik/Yenimahalle rotasında olması size büyük ulaşım maliyeti/süre avantajı sağlar.",
        },
        {
          icon: '🏗️',
          title: 'Filo Gücü',
          description:
            "Farklı noktalarda eşzamanlı olarak onlarca vinç kiralama operasyonunu sürdürebilen makine parkuru ile yüksek tonaj ve bom kapasitesi garantisi.",
        },
        {
          icon: '📋',
          title: 'Tam SGK & İş Güvenliği',
          description:
            "G sınıfı kurumsal ehliyet ve belgeye sahip operatörlerimiz ile fabrika ya da kurumsal AVM şantiyelerinde evrak sorunu yaşamadan derhal işe başlayabilme.",
        },
      ]}
      neighbors={[
        { name: 'Ostim', href: '/bolgeler/ostim-sepetli-vinc-kiralama', icon: '⚙️' },
        { name: 'İvedik', href: '/bolgeler/ivedik-sepetli-vinc-kiralama', icon: '🏭' },
        { name: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama', icon: '🏢' },
        { name: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama', icon: '🏘️' },
      ]}
      faq={[
        {
          q: "Yenimahalle'deki İstanbul Yolu bayime acil vinç gönderebilir misiniz?",
          a: "Elbette, ana kampüsümüze çok yakın olduğu için sipariş onayı gelir gelmez <strong>15-20 dakika</strong> içinde yola çıkıp İstanbul Yolu'ndaki bayinize ulaşabiliyoruz.",
        },
        {
          q: "Şentepe'nin dik rampalarında vincin dengesini nasıl sağlıyorsunuz?",
          a: "Şentepe gibi coğrafi eğimi yüksek lokasyonlarda özel açılı denge ayakları (stabilizatör) ve makine eğim sensörlerine sahip güvenli platformları tercih ediyor, risk almadan rampa da dahi aracı sıfır terazisine çekiyoruz.",
        },
        {
          q: "Batıkent'teki site bloğumuzun çatısı için yüksek metrajlı vinç gerekiyor.",
          a: "15 kat ve üzeri konutlar için 50 metre, 60 metre, veya gerekirse devasa 75 metreye kadar bom uzatabilen sepetli vinçlerimiz sayesinde çatıda ne işiniz varsa eksiksiz tamamlayabilirsiniz.",
        },
      ]}
      ctaMessage="Merhaba, Yenimahalle - Batıkent bölgesine araç yönlendirme veya fiyat bilgisi alabilir miyim?"
    />
  );
}
