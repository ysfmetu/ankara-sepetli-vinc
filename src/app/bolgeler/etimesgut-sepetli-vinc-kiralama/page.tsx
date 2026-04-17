import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Etimesgut Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Etimesgut bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
  keywords:
    'etimesgut sepetli vinç kiralama, etimesgut vinç kiralama, ankara sepetli vinç, etimesgut kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/etimesgut-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Etimesgut Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Etimesgut bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
    url: getCanonicalUrl('/bolgeler/etimesgut-sepetli-vinc-kiralama'),
  },
};

export default function EtimesgutPage() {
  return (
    <DistrictPageLayout
      districtName="Etimesgut"
      districtSlug="etimesgut"
      heroSubtitle="Eryaman, Bağlıca, Elvankent ve Şaşmaz çevresindeki konut ile sanayi projelerinde güvenli kiralık vinç çözümleri."
      arrivalTime="20-30"
      introText="Hızla büyüyen konut projeleriyle Ankara'nın batı aksındaki cazibe merkezlerinden biri olan Etimesgut; Eryaman ve Bağlıca'daki devasa site inşaatları ile Şaşmaz Oto Sanayi'nin endüstriyel potansiyelini bir arada barındırır. Yeni binaların dış cephe boya rutüşları, cam balkon montajları, çatı izolasyonları ile sanayi dükkânlarının çatı değişimleri yüksek erişim imkanı sağlayan özel platformlar gerektirir. Konut yoğun bölgelerde peyzajı bozmayan araç filomuzla "
      image1={{
        src: '/images/bolge/etimesgut-sepetli-vinc-kiralama-1.jpg',
        alt: 'Etimesgut sepetli platform vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/etimesgut-platform-kiralama.png',
        alt: 'Etimesgut platform kiralama dış cephe montajı',
      }}
      services={[
        {
          title: 'Yeni Konut ve Site Dış Cephesi',
          description:
            "Eryaman ve Bağlıca'da teslimi yaklaşan site inşaatlarında dış cephe son kat boyama, silikon çekimi, cam ve Fransız balkon korkuluk montajları için iskele olmaksızın hızlı işlem.",
        },
        {
          title: 'Oto Sanayi ve Endüstriyel Tesis Bakımı',
          description:
            "Şaşmaz Sanayi Sitesi'ndeki fabrikaların veya atölyelerin metal çatı onarımları, oluk temizliği ve atölye içi vinç kiralama servisi.",
        },
        {
          title: 'Tabela, Totem ve Reklam Montajı',
          description:
            "AVM'lerin, mağaza zincirlerinin ve Eryaman'daki cadde üzeri işletmelerin kurumsal kimlik tabela uygulamaları ve vinil gerdirme işleri.",
        },
        {
          title: 'Peyzaj ve Bahçe Ağaç Budama',
          description:
            "Büyük sitelerin park alanlarında bulunan yüksek kavak veya çam ağaçlarının site sakinlerine risk oluşturmadan güvenle budanması.",
        },
        {
          title: 'Elektrik Bakım ve Aydınlatma Desteği',
          description:
            "Yeni bağlanan caddelerde ve büyük site komplekslerinin iç aydınlatma direklerinde onarım çalışmaları.",
        },
      ]}
      whyCards={[
        {
          icon: '🏘️',
          title: 'Site Yaşamına Saygılı',
          description:
            "Gürültü yönetmeliklerine uygun, yaşamı aksatmayan çalışma saatleri; yeşilliğe veya otopark alanlarına zarar vermeden destek açabilen modern sepetli vinç filosu.",
        },
        {
          icon: '🏗️',
          title: 'Mimari Esneklik',
          description:
            "Bağlıca'daki villalardan Eryaman'ın 15-20 katlı dev binalarına kadar her metraja uygun erişim kapasitesine (70+ metreye kadar) ulaşıyoruz.",
        },
        {
          icon: '⚡',
          title: 'Jet Hızında Tedarik',
          description:
            "Bölgede sık bulunan araçlarımızla Etimesgut, Eryaman, Bağlıca rotasına kısa sürede araç yönlendirerek projelerinizin duraklamasını engelliyoruz.",
        },
      ]}
      neighbors={[
        { name: 'Sincan', href: '/bolgeler/sincan-sepetli-vinc-kiralama', icon: '🏭' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Kahramankazan', href: '/bolgeler/kahramankazan-sepetli-vinc-kiralama', icon: '🏭' },
        { name: 'Gölbaşı', href: '/bolgeler/golbasi-sepetli-vinc-kiralama', icon: '🏡' },
      ]}
      faq={[
        {
          q: "Etimesgut Şaşmaz sanayisine gece vardiyasında vinç yolluyor musunuz?",
          a: "Evet, oto sanayi sitelerindeki gündüz yoğunluğu dikkate alınarak tabela ve çatı onarımları gibi işlemlerde gece ve pazar çalışma hizmetimiz mevcuttur.",
        },
        {
          q: "Bağlıca'daki yeni villamın dış boyası için kiralamak mantıklı mı?",
          a: "Kesinlikle mantıklı. Komple evi iskele ile sarmak hem pahalı hem de uzun sürer; villanızın çevresindeki peyzaja hiç zarar vermeden bir gün içerisinde sepetli vincimizle rötüşları yapabilirsiniz.",
        },
        {
          q: 'Eryaman bölgesine geliş süreniz nedir?',
          a: "Eryaman ve Etimesgut merkez bölgelerine yaklaşık <strong>25 dakika</strong> içerisinde aracımızı konuma ulaştırıyor ve derhal iş güvenliği önlemleri altında kuruluma başlıyoruz.",
        },
      ]}
      ctaMessage="Merhaba, Etimesgut - Eryaman bölgesine acil sepetli vinç yönlendirme veya fiyat bilgisi alabilir miyim?"
    />
  );
}
