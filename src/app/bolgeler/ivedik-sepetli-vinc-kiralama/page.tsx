import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'İvedik Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
  description:
    'İvedik bölgesinde dış cephe, tabela ve sanayi montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
  keywords:
    'ivedik sepetli vinç kiralama, ivedik vinç kiralama, ankara sepetli vinç, ivedik kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/ivedik-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'İvedik Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
    description:
      'İvedik bölgesinde dış cephe, tabela ve sanayi montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
    url: getCanonicalUrl('/bolgeler/ivedik-sepetli-vinc-kiralama'),
  },
};

export default function IvedikPage() {
  return (
    <DistrictPageLayout
      districtName="İvedik"
      districtSlug="ivedik"
      heroSubtitle="Ankara'nın üretim devlerinden İvedik OSB'de makine kurulumları, aydınlatma, çatı yalıtımı ve sanayi bakımları için kiralık platform filosu parmaklarınızın ucunda."
      arrivalTime="10-20"
      introText="Türkiye'nin en hareketli sanayi ve üretim havzalarından olan İvedik Organize Sanayi Bölgesi (İvedik OSB) sınırları dahilindeki binlerce fabrikanın rutin bakım işlerini hızlıca çözmek uzmanlık ister. Atölye içi elektrik sistemlerinden yüksek tavan vinci tamirine, iş merkezlerinin totem tabelalarından hangar çatı yalıtımlarına kadar her yükseklikte yanınızdayız. Ostim ile bitişik olan merkezimizden, dükkanlarınıza en hızlı kiralık sepet servisini sunarak operasyonları kolaylaştırmak için"
      image1={{
        src: '/images/bolge/ivedik-sepetli-vinc-calisma.jpg',
        alt: 'İvedik sepetli platform vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/ivedik-platform-kiralama.jpg',
        alt: 'İvedik platform kiralama dış cephe montajı',
      }}
      services={[
        {
          title: 'İvedik OSB İçi Tabela İşlemleri',
          description:
            "Firmaların kurumsal binalarına veya dükkan girişlerine ışıklı logo/kayan yazı tabelalarının tam tavan hizalarına sıfır riskle montajı.",
        },
        {
          title: 'Fabrika Havalandırma Ekipmanı (Baca, Filtre)',
          description:
            "Ağır sanayi parçası, havalandırma motorları veya toz tutucu sistemlerin atölye çatılarına yukarı çekilmesi ve ekiplere montaj platformu sunulması.",
        },
        {
          title: 'Elektrik Tel ve Sokak Lambası Tamiri',
          description:
            "İvedik sanayi caddeleri üzerindeki ana aydınlatma arızaları ile fabrika cephe aydınlatmalarına uzman bakım.",
        },
        {
          title: 'Matbaa ve Ahşap Atölyeleri İçi Dar Uzanım',
          description:
            "İçerisi oldukça dolu durumda bulunan endüstriyel tesislerde küçük manevralarla lamba ve çatı kiremiti onarmak.",
        },
        {
          title: 'Dış Cephe Yalıtımı ve Boya',
          description:
            "Melih Gökçek Bulvarındaki plazalar, yeni yapılan Ankara Teknopark veya OSTİM metro civarlarındaki ofis katlarının mantolaması ve cephe giydirme işlemleri.",
        },
      ]}
      whyCards={[
        {
          icon: '📍',
          title: 'Komşu Sınırlar',
          description:
            "Geniş araç parkurumuz İvedik ile iç içe olduğundan araç bekleme veya uzun nakliye ücreti ödeme derdi yok.",
        },
        {
          icon: '🏗️',
          title: 'Bom Kırma Manevrası',
          description:
            "Fabrika tavan iskelet yapıları ve kirişlerin arasından geçebilen kırma bomlu mobil vinç sepetlerimiz sayesinde her engebeye rahat uzanıyoruz.",
        },
        {
          icon: '💼',
          title: 'Maliyet ve Zaman Güvencesi',
          description:
            "Makine işlerindeki duruşun ne kadar maliyetli olduğunu biliyor ve anlaşmalı olarak üretimi asgari seviyede aksatacak planla geliyor anlaştığımız vakitte bitiriyoruz.",
        },
      ]}
      neighbors={[
        { name: 'Ostim', href: '/bolgeler/ostim-sepetli-vinc-kiralama', icon: '⚙️' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Kahramankazan', href: '/bolgeler/kahramankazan-sepetli-vinc-kiralama', icon: '🏭' },
        { name: 'Keçiören', href: '/bolgeler/kecioren-sepetli-vinc-kiralama', icon: '🏢' },
      ]}
      faq={[
        {
          q: "İvedik OSB'ye gelirken yolda takılma olur mu?",
          a: "Hayır. Araç merkezimiz çok yakın, siparişiniz iletilir iletilmez tahmini <strong>10 ile 20 dakika</strong> arasında kapınızda olmuş oluyoruz. Uzun yol stresi taşımazsınız.",
        },
        {
          q: "Dükkânımın içerisine vinç sokup yüksek tavanımdaki ısıtıcıları tamir edebilir miyim?",
          a: "Eğer kepenk yüksekliğiniz en az 2.20 metre seviyesini karşılıyorsa kısa şaseli (hafif tonajlı) sepetli vinçlerimiz atölyenizin içine rahatlıkla girerek kuruma girer.",
        },
        {
          q: 'Sanayi firmamız adına resmi fatura kesiliyor mu?',
          a: "Evet, tüm operasyonlarımız için çalışma süresine veya pakete uygun bedel kurumsal e-Fatura olarak İvedik ve diğer Vergi dairelerine bağlı firmalarınıza kesilmektedir.",
        },
      ]}
      ctaMessage="Merhaba, İvedik Organize Sanayisindeki işletmem için sepetli vinç kiralama fiyat teklifi istiyorum."
    />
  );
}
