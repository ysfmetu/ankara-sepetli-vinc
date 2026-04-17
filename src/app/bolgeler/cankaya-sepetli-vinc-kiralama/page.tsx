import { Metadata } from 'next';
import DistrictPageLayout from '@/components/DistrictPageLayout';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Çankaya Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
  description:
    'Çankaya bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
  keywords:
    'çankaya sepetli vinç kiralama, çankaya vinç kiralama, ankara sepetli vinç, çankaya kiralık vinç, sepetli vinç kiralama ankara',
  alternates: getMetadataAlternates('/bolgeler/cankaya-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Çankaya Sepetli Vinç Kiralama — Uygun Fiyat & 24 Saat Hizmet',
    description:
      'Çankaya bölgesinde dış cephe, tabela ve montaj işleri için profesyonel sepetli vinç kiralama. 20 dakikada adresteyiz.',
    url: getCanonicalUrl('/bolgeler/cankaya-sepetli-vinc-kiralama'),
  },
};

export default function CankayaPage() {
  return (
    <DistrictPageLayout
      districtName="Çankaya"
      districtSlug="cankaya"
      heroSubtitle="Plazalar, iş merkezleri ve büyükelçilikler bölgesi Çankaya'ya özel, yüksek güvenlik standartlarına sahip sepetli vinç filomuzla 20 dakikada yanınızdayız."
      arrivalTime="20-35"
      introText="Ankara'nın kalbi Çankaya, Kızılay'dan Çukurambar'a uzanan modern iş merkezleri, yüksek plazalar ve yoğun yerleşim alanlarıyla dikkat çeker. Yüksek katlı binalarda dış cephe cam temizliği, rezidans mantolama işlemleri, büyükelçilik bina bakımları ve AVM tabela montajı gibi işlemler sıkça ihtiyaç duyulan çalışmalardır. Klasik iskele kurmanın zor ve yavaş olduğu bu alanlarda, saatlik periyotta hızlı çözüm üretiyoruz."
      image1={{
        src: '/images/bolge/cankaya-sepetli-vinc-calisma.png',
        alt: 'Çankaya sepetli platform vinç çalışması',
      }}
      image2={{
        src: '/images/bolge/cankaya-platform-kiralama.png',
        alt: 'Çankaya platform kiralama ve cephe temizliği',
      }}
      services={[
        {
          title: 'Plaza ve Rezidans Cam Temizliği',
          description:
            "Çukurambar, Söğütözü ve Gaziosmanpaşa'daki yüksek plazaların ve iş merkezlerinin dış cephe cam temizleme işleri için özel sepetli platformlar.",
        },
        {
          title: 'Tabela ve İlan Montajı',
          description:
            "AVM ve mağazaların aydınlatmalı tabela değişimi, totem tabela montajı ve kurumsal logo uygulamaları; araç ve yaya trafiğine engel olmadan gece mesaisi ile.",
        },
        {
          title: 'Dış Cephe Boya, Yalıtım ve Bakım',
          description:
            "Dikmen, Ayrancı ve Bahçelievler'deki çok katlı yapıların dış cephe mantolama, silikon çekimi ve boya tadilatları.",
        },
        {
          title: 'Ağaç Budama',
          description:
            "Yoğun trafiğin olduğu bulvarlarda, elçilik bahçelerinde ve parklarda uzman gözetiminde güvenli ve çevreye duyarlı ağaç budama.",
        },
        {
          title: 'İklimlendirme ve Klima Motor Montajı',
          description:
            "İş merkezlerinde yüksek katlara dış ünite klima motorlarının çıkarılması ve hassas montajı.",
        },
      ]}
      whyCards={[
        {
          icon: '🏢',
          title: 'Plaza Deneyimi',
          description:
            "Çankaya'nın modern plaza çevrelerine zarar vermeden pozisyon alabilen ve iş güvenliğini en üst seviyede tutan uzman kadro.",
        },
        {
          icon: '🚦',
          title: 'Esnek Çalışma Saatleri',
          description:
            "Gündüz trafiğinin yoğun olduğu iş merkezi bölgelerinde gece veya hafta sonu planlanan bakım operasyonları için 7/24 hizmet.",
        },
        {
          icon: '⚡',
          title: 'Acil Çözüm',
          description:
            "Tüm Çankaya mahallelerine merkezi konumumuz sayesinde hızla araç yönlendiriyoruz. Maksimum <strong>20-35 dakika</strong> garantisi.",
        },
      ]}
      neighbors={[
        { name: 'Altındağ', href: '/bolgeler/altindag-sepetli-vinc-kiralama', icon: '🏛️' },
        { name: 'Yenimahalle', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama', icon: '🏙️' },
        { name: 'Mamak', href: '/bolgeler/mamak-sepetli-vinc-kiralama', icon: '🏗️' },
        { name: 'Gölbaşı', href: '/bolgeler/golbasi-sepetli-vinc-kiralama', icon: '🏡' },
      ]}
      faq={[
        {
          q: "Çankaya'nın dik yokuşlu dar sokaklarına uygun vinciniz var mı?",
          a: "Evet, özellikle Dikmen, Ayrancı, Seyranbağları gibi yokuşlu bölgeler için özel stabilizatörlü ayakları olan kısa dingilli platform araçlarımız her mahalleye hizmet verebilir.",
        },
        {
          q: 'Trafik olan caddelerde izin almamıza gerek var mı?',
          a: "Kısa süreli (saatlik) bakım ve tabela işlemlerinde geniş güvenlik dubaları kullanılarak trafiği kilitlemeyen çalışmalar yapıyoruz. Ancak bulvarı tamamen kapatacak hacimli büyük tamirat operasyonları için ilgili belediyelerden izin alınması konusunda sizlere danışmanlık yapabiliyoruz.",
        },
        {
          q: 'Plaza bölgelerine ne kadar sürede ulaşıyorsunuz?',
          a: "Çukurambar ve Söğütözü gibi iş merkezlerine genellikle yoğun saatler harici 20 dakikada, tüm Çankaya bölgesine ortalama 30-35 dakikada ulaşabiliyoruz.",
        },
      ]}
      ctaMessage="Merhaba, Çankaya bölgesi için sepetli vinç kiralama maliyetlerini öğrenmek istiyorum."
    />
  );
}
