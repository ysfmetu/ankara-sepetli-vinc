import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Ostim Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Ostim bölgesinde dış cephe, tabela ve sanayi montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
  keywords:
    'ostim sepetli vinç kiralama, ostim vinç kiralama, ankara sepetli vinç, ostim kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/ostim-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Ostim Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Ostim bölgesinde dış cephe, tabela ve sanayi montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
    url: getCanonicalUrl('/bolgeler/ostim-sepetli-vinc-kiralama'),
  },
};

export default function OstimPage() {
  return (
    <DistrictPageLayout
      districtName="Ostim"
      districtSlug="ostim"
      heroSubtitle="Ankara organize sanayisinin kalbi OSTİM'de tüm fabrika ve atölyeler için vinç ile malzeme ve personel yüksek erişim hizmeti veriyoruz."
      arrivalTime="10-15"
      introText="Türkiye'nin en köklü ve dev üretim bölgesi OSTİM Organize Sanayi Bölgesi. Dar imalat atölyelerinden, tavan yüksekliği devasa boyutlara varan üretim hangarlarına değin yüzlerce yapıda güvenli tamirat gereklidir. Fabrika iç aydınlatma arızaları, tavan vinci onarımı, dış cephe çatı yalıtımları ve üretim makinesi hortum tesisat rotaları gibi işlerde OSTİM firmalarına komşu olan işletme lokasyonumuz avantajıyla hızla"
      image1={{
        src: '/images/bolge/ostim-sepetli-vinc-calisma2.png',
        alt: 'Ostim sepetli platform vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/ostim-sepetli-vinc-kiralama-1.jpg',
        alt: 'Ostim platform kiralama dış cephe montajı',
      }}
      services={[
        {
          title: 'Fabrika İçi Elektrik ve Vinç Bakımı',
          description:
            "Kompakt dizaynlı platform araçlarımız, depo ve hangar kapılarından içeri girerek tavan aydınlatma veya tavana asılı portal vinçlerin tamirine erişim sağlar.",
        },
        {
          title: 'Fabrika Çatı Onarımı ve Sızdırmazlık',
          description:
            "Endüstriyel tesislerin metal sandviç panellerinin yalıtımı ve rüzgardan sökülen sacların vidalanması için çatı metrajlarına ve rampa erişimlerine uygun bomlara sahibiz.",
        },
        {
          title: 'Büyük Çaplı Endüstriyel Havalandırma Montajı',
          description:
            "Ağır sanayi parçası, havalandırma motorları veya bacaların OSTİM semalarında yukarı çekilmesi ve montaj işlemi.",
        },
        {
          title: 'İş Tabelası ve Afiş Uygulamaları',
          description:
            "Ostim bulvarı üzerinde çalışan işletmelere LED dükkan tabelaları ve endüstriyel boy branda/totem asımlarında güvenli sepet araçları.",
        },
        {
          title: 'Dış Cephe Kompozit Tamiri',
          description:
            "İş merkezi haline gelmiş yeni Ostim Mega veya Prestij binalarının aynalı cam temizliği ile cephe boyama servisleri.",
        },
      ]}
      whyCards={[
        {
          icon: '📍',
          title: 'Tam Merkezdeyiz',
          description:
            "Garajımızın da bulunduğu lokasyon dolayısıyla Ostim içerisinde herhangi bir cadde ve sokağa saatler hatta günler beklemeden ulaşıyoruz.",
        },
        {
          icon: '🏭',
          title: 'Sanayi Makineleri Uzmanı',
          description:
            "Fabrika içi hareket ve makineler arası alan darlığını hesap edebilen usta sepet operatörlerimiz makineye/ekipmana asla fiziksel hasar vermeden sıfır kaza ile çalışır.",
        },
        {
          icon: '💼',
          title: 'Kurumsal Faturalandırma',
          description:
            "Organize sanayi bölgesinin yoğun işleyişinde aylık bakım çerçeve anlaşmaları ve anında e-fatura/fiş gibi kurumsal altyapı hizmeti.",
        },
      ]}
      neighbors={[
        { name: 'İvedik', href: '/bolgeler/ivedik-sepetli-vinc-kiralama', icon: '⚙️' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Etimesgut', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama', icon: '🏘️' },
        { name: 'Sincan', href: '/bolgeler/sincan-sepetli-vinc-kiralama', icon: '🏭' },
      ]}
      faq={[
        {
          q: "Ostim atölyemin içerisine yüksek tavan lamba onarımı için vinç girer mi?",
          a: "Eğer kepenk yüksekliğiniz en az 2.20 - 2.50 metre seviyesini karşılıyorsa kısa şase (örneğin Isuzu) araçlarımız atölyenizin içine güvenle girerek stabilizatör ayaklarını açar.",
        },
        {
          q: "Ostim bölgesindeki fabrikama gelmeniz ne kadar sürer?",
          a: "Aynı lokasyonda (Merkez) konumlandığımız için uygun olan ilk vincimiz size en fazla <strong>10-15 dakika</strong> içerisinde teslim edilmektedir.",
        },
        {
          q: 'Operatör saat kaçta mesaisini bitiriyor? Pazarları Ostim açık mı?',
          a: "Biz 7-24 sisteminde hizmet ettiğimiz için atölyelerinizin üretim duruşlarını fırsat bilip pazar dahil veya gece yarısı tavan tamirlerinizi yapmanız için operatör ve vinç ayarlıyoruz.",
        },
      ]}
      ctaMessage="Merhaba, Ostim içi acil bir sepetli platform vinç kiralaması planlıyorum. Fabrikam için fiyat alabilir miyim?"
    />
  );
}
