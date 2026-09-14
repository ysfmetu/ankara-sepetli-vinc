import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  Building2,
  Wrench,
  Layers,
  ClipboardList,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Bala Sepetli Vinç Kiralama | ASV Vinç',
  description:
    "Bala'da kurumsal tesis, çatı, bakım ve yüksek erişim çalışmalarına operatörlü sepetli vinç desteği sağlıyoruz. Konum ve proje detaylarıyla teklif alın.",
  alternates: getMetadataAlternates('/bolgeler/bala-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Bala Sepetli Vinç Kiralama | ASV Vinç',
    description:
      "Bala'da kurumsal tesis, çatı, bakım ve yüksek erişim işleri için operatörlü sepetli vinç. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/bala-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Bala’ya sepetli vinç gönderiyor musunuz?',
    a: 'Evet. Bala ilçesi genelinde ve çevre yerleşimlerde bulunan sanayi yapıları, kurumsal tesisler, tarımsal işletmeler ve şantiye sahalarına operatörlü sepetli vinç hizmeti sunuyoruz. Çalışılacak sahanın konumu, zeminin durumu ve erişim yüksekliği gibi detayları bizimle paylaştığınızda ekibimiz araç ve operasyon planlamasını tamamlayarak en uygun çözümü oluşturur.',
  },
  {
    q: 'Kurumsal tesislerde çok günlük çalışma yapıyor musunuz?',
    a: 'Evet. Üretim hatları, yem ve kuluçka tesisleri, lojistik depolar ve endüstriyel işletmelerde çok günlük vinç hizmeti planlamaktayız. Tesisin iç operasyonlarını ve biyogüvenlik veya iş sağlığı kurallarını aksatmayacak şekilde çalışma programı belirlenir; günlük iş paketleri oluşturularak süreç adım adım yürütülür. Aviagen Anadolu Bala tesisindeki dört günlük çalışma bu kapsamda gerçekleştirilmiştir.',
  },
  {
    q: 'Bala için saatlik mi günlük mü kiralama daha uygun olur?',
    a: 'Kısa süreli ve tek bir noktada tamamlanabilecek işler için saatlik kiralama tercih edilebilir. Ancak Bala gibi şehir merkezine belirli bir mesafede yer alan bölgelerde, birden fazla cepheyi kapsayan veya kapsamlı bakım gerektiren işlerde işin kapsamına göre günlük planlama daha uygun olabilir. Sahadaki iş hacmini paylaştığınızda sizin için en verimli çalışma modelini öneriyoruz.',
  },
  {
    q: 'Bala’da kullanılacak araç nasıl belirlenir?',
    a: 'Çalışmanın yapılacağı tepe erişim yüksekliği, cepheye olan yatay mesafe, saha zemininin taşıma kapasitesi ve sepet içerisindeki personel ile malzeme yükü birlikte değerlendirilir. Çalışma alanına ait fotoğraflar ve yaklaşık ölçüler incelendikten sonra doğru bom açısına ve çalışma kapasitesine sahip sepetli vinç belirlenir.',
  },
  {
    q: 'Çatı ve dış cephe bakım çalışmalarında sepetli vinç ne zaman tercih edilir?',
    a: 'Geleneksel iskele kurulumunun zaman aldığı, maliyetli olduğu veya mimari engeller sebebiyle zemin kurulumuna elverişli olmadığı durumlarda sepetli vinç güvenli erişim planlamasına yardımcı olur. Çatı panelleri, yağmur olukları, aydınlatma armatürleri veya dış cephe kaplamalarındaki hızlı müdahale ihtiyaçlarında sepetli platformlar pratik ve kontrollü bir erişim imkanı sunar.',
  },
];

export default function BalaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Bala Sepetli Vinç Kiralama',
        provider: {
          '@id': `${SEO_CONFIG.baseUrl}/#business`,
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Bala',
            containedInPlace: {
              '@type': 'City',
              name: 'Ankara',
            },
          },
          {
            '@type': 'City',
            name: 'Ankara',
          },
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description:
          "Bala'da kurumsal tesis, çatı bakımı, dış cephe onarımı, ekipman montajı ve yüksek erişim gerektiren uzun süreli çalışmalar için operatörlü sepetli vinç hizmeti.",
        url: getCanonicalUrl('/bolgeler/bala-sepetli-vinc-kiralama'),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  const usageAreas = [
    {
      icon: <Building2 size={28} className="text-primary" />,
      title: 'Kurumsal Tesis Operasyonları',
      desc: 'Bala ve çevresinde yer alan endüstriyel üretim ve tarımsal entegre tesislerde; çatı kontrolleri, havalandırma bakımları ve periyodik tesis denetimleri için kontrollü erişim desteği sunulmaktadır.',
    },
    {
      icon: <Wrench size={28} className="text-primary" />,
      title: 'Çatı Onarımı ve Oluk Bakımı',
      desc: 'Rüzgar ve sert hava şartlarından etkilenen sanayi çatılarında panel tamiratları, yağmur suyu tahliye kanallarının temizliği ve sızdırmazlık izolasyon uygulamaları emniyetli biçimde gerçekleştirilir.',
    },
    {
      icon: <Layers size={28} className="text-primary" />,
      title: 'Dış Cephe ve Yalıtım Yenileme',
      desc: 'Geniş yüzeyli fabrika, depo ve idari binalarda cephe boyama, kompozit panel onarımı, derz dolgusu ve dış yalıtım montajı uygun saha ve zemin koşullarında titizlikle yürütülür.',
    },
    {
      icon: <ClipboardList size={28} className="text-primary" />,
      title: 'Teknik Ekipman ve Hat Montajı',
      desc: 'Silo kapakları, boru hatları, kuşkonmaz bariyerleri, harici aydınlatma projektörleri, güvenlik kameraları ve paratoner sistemlerinin yüksek irtifada konumlandırılması sağlanır.',
    },
    {
      icon: <ShieldCheck size={28} className="text-primary" />,
      title: 'Periyodik Temizlik ve Denetim',
      desc: 'Yüksek cam yüzeylerin temizlenmesi, dış cephe kirliliklerinin giderilmesi ve tesis binalarının dönemsel teknik kontrolleri için operatörlü sepetli platformlar devreye alınır.',
    },
    {
      icon: <MapPin size={28} className="text-primary" />,
      title: 'Çok Günlü ve Projeli Kiralama',
      desc: 'Geniş kampüslere sahip kurumsal işletmelerde günlere yayılan etaplı bakım programları için günlük veya haftalık esnek çalışma takvimi oluşturulur.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-24 pb-0">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/blog/bala-kurumsal-tesiste-4-gunluk-sepetli-vinc-hizmeti-kapak.webp"
              alt="Bala sepetli vinç kiralama — kurumsal tesis çalışması"
              fill
              sizes="(max-width: 768px) 100vw, 1536px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900/90 to-transparent"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Bala', href: '/bolgeler/bala-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Bala Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6">
                Bala’da Kurumsal Tesis ve Çatı Çalışmalarına Planlı Vinç Desteği
              </h2>
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light leading-relaxed">
                <p>
                  Ankara’nın güneydoğu aksında yer alan <strong>Bala ilçesi</strong>; tarımsal
                  üretim merkezleri, entegre sanayi tesisleri, kuluçkahane ve yem fabrikaları ile
                  geniş depolama alanlarına sahip stratejik bir bölgedir. Bölgedeki ticari ve
                  endüstriyel yapılarda, üretimin kesintisiz devam edebilmesi adına çatı onarımları,
                  dış cephe bakımları, teknik ekipman montajları ve periyodik denetimler düzenli
                  aralıklarla gerçekleştirilmelidir.
                </p>
                <p>
                  Bu tür yüksekte çalışma gerektiren uygulamalarda klasik iskele sistemleri hem
                  zaman kaybına yol açmakta hem de geniş tesis yerleşkelerinde pratik bir çözüm
                  sunamamaktadır. ASV Vinç olarak, bölgedeki tüm işletmelere profesyonel filo
                  güvencesiyle{' '}
                  <Link
                    href="/hizmetler/sepetli-vinc-kiralama"
                    className="text-blue-300 hover:text-white underline font-medium"
                  >
                    operatörlü sepetli vinç kiralama
                  </Link>{' '}
                  hizmeti sunuyoruz. Aracın kullanımı ASV operatörü tarafından yürütülür ve işin her
                  aşamasında güvenli erişim planlamasına yardımcı olunur.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:05516066878"
                  id="bala-hero-call-cta"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
                >
                  <Phone size={20} />
                  0551 606 68 78
                </a>
                <a
                  href="https://wa.me/905516066878?text=Merhaba%2C%20Bala%20i%C3%A7in%20sepetli%20vin%C3%A7%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  id="bala-hero-whatsapp-cta"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
                >
                  <MessageCircle size={20} />
                  WhatsApp ile Konum Gönder
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Bala'da Sepetli Vinç Hizmeti */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bala’da Sepetli Vinç Hizmeti
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Bala bölgesinde yer alan işletmeler ve özel mülkler için sepetli vinç kiralama
                ihtiyacı çoğunlukla yerel olanakların sınırlı olmasından kaynaklanır. İlçe
                merkezindeki kamu yapılarından sanayi sitelerine, kırsal mahallelerdeki
                çiftliklerden otoyol güzergahındaki tesislere kadar geniş bir etki alanında mobil
                vinç platformlarına gereksinim duyulur.
              </p>
              <p>
                Sepetli vinçler, hidrolik uzatma kolları ve dönme kabiliyetine sahip platform
                sepetleri sayesinde personelin yüksek irtifalarda dengeli ve emniyetli biçimde
                çalışmasını mümkün kılar. Merdivenle ulaşılamayan kör noktalara, bina saçaklarına ve
                çatı sırtlarına hızlı erişim imkanı tanır. Uygun saha ve zemin koşullarında araç
                ayakları yere sabitlenerek operasyon güvenle başlatılır.
              </p>
              <p>
                Bölgedeki projelerinizde doğru kapasiteye sahip aracı belirlemek için işin
                niteliğini, tahmini yüksekliği ve çalışma alanının zemin özelliklerini paylaşmanız
                yeterlidir. ASV Vinç, teknik ekibi ve deneyimli operatör kadrosuyla projenize en
                uygun araç konfigürasyonunu belirleyerek sahada zaman tasarrufu elde etmenizi
                sağlar.
              </p>
            </div>
          </div>
        </section>

        {/* Kullanım Alanları Grid */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bala’da Sepetli Vinç Hangi İşlerde Kullanılır?
              </h2>
              <p className="text-lg text-gray-600">
                Endüstriyel tesislerden kırsal işletmelere kadar geniş bir yelpazede yüksek erişim
                çözümleri sunuyoruz.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {usageAreas.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 inline-block p-3 bg-blue-50 rounded-xl">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Kurumsal Tesislerde Yüksek Erişim İhtiyaçları */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Kurumsal Tesislerde Yüksek Erişim İhtiyaçları
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Bala ilçesi ve çevresi, yüksek standartlarda üretim yapan büyük kurumsal yatırımlara
                ev sahipliği yapmaktadır. Kanatlı damızlık tesisleri, yem üretim fabrikaları,
                silolar ve soğuk hava depoları gibi yapılar, sıkı biyogüvenlik ve iş sağlığı
                yönetmeliklerine bağlı çalışırlar. Bu tip tesislerde dışarıdan hizmet alımı
                sırasında operasyonun her adımı önceden planlanmalı ve belirlenen kurallara
                titizlikle uyulmalıdır.
              </p>
              <p>
                Kurumsal tesis sahalarında yürütülen sepetli vinç çalışmalarında aracın kullanımı
                ASV operatörü tarafından yürütülür. Operatörlerimiz, araç dengeleme ayaklarının
                kurulumundan sepet kumanda kontrollerine kadar tüm süreci teknik prosedürlere uygun
                şekilde yönetir. Bu yaklaşım, tesis yetkililerinin kendi iş süreçlerine
                odaklanmasını sağlarken güvenli erişim planlamasına yardımcı olur.
              </p>
              <p>
                Ayrıca üretim hatlarının aralıksız sürdüğü tesislerde, çalışma saatleri vardiya
                düzenine göre ayarlanır. Fabrika içi araç trafiği ve malzeme yükleme alanları
                kısıtlanmadan, vinç bomu hassas manevralarla hedeflenen noktaya yönlendirilir.
                Böylece tesisin günlük işleyişi aksatılmadan yüksek irtifadaki teknik müdahaleler
                tamamlanır.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Çatı, Dış Cephe ve Bakım Çalışmaları */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Çatı, Dış Cephe ve Bakım Çalışmaları
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Bala’nın iklim şartları kış aylarında sert rüzgarlar, yoğun kar yağışı ve ani
                sıcaklık düşüşleri ile kendini gösterir. Bu meteorolojik koşullar, sanayi
                çatılarında ve yüksek bina cephelerinde yıpranmaları hızlandırır. Panel çatılarda
                vida gevşemeleri, sac ayrılmaları, su tahliye oluklarının tıkanması veya sızıntı
                yapan izolasyon derzleri düzenli bakım yapılmadığı takdirde tesis içine zarar
                verebilir.
              </p>
              <p>
                Sepetli vinç platformları, teknik personelin çatı üzerine adım atmasına gerek
                kalmadan, doğrudan sepet içerisinden müdahale edebilmesine olanak tanır. Çatı
                eğiminin tehlike arz ettiği noktalarda çalışanlar sepetin korunaklı korkulukları
                içinde güvenle işlerini icra ederler. Yağmur oluğu temizlikleri, kar tutucu bariyer
                montajları ve sac panel vidalamaları hızlı biçimde bitirilir.
              </p>
              <p>
                Dış cephe tarafında ise yalıtım panellerinin güçlendirilmesi, kompozit cephe
                temizliği, aydınlatma armatürlerinin değiştirilmesi ve tabela montajı gibi işlemler{' '}
                <Link
                  href="/hizmetler/cephe-temizligi-sepetli-vinc"
                  className="text-primary font-semibold underline"
                >
                  cephe çalışmaları için vinç kiralama
                </Link>{' '}
                hizmetimiz doğrultusunda emniyetle çözümlenmektedir.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Günlük ve Uzun Süreli Planlama */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Günlük ve Uzun Süreli Planlama
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Bölgesel kiralama ihtiyaçlarında işin süresini doğru planlamak bütçe ve operasyonel
                verimlilik açısından büyük önem taşır. Tek bir tabela montajı veya kısa bir oluk
                kontrolü gibi dar kapsamlı işlerde saatlik kiralama tercih edilebilirken, geniş
                fabrika sahalarında etaplı işlerin yürütülmesi için{' '}
                <Link
                  href="/hizmetler/gunluk-vinc-kiralama"
                  className="text-primary font-semibold underline"
                >
                  günlük vinç kiralama
                </Link>{' '}
                seçeneği öne çıkar.
              </p>
              <p>
                Bala gibi Ankara merkeze belirli bir ulaşım mesafesi bulunan lokasyonlarda, işin
                kapsamına göre günlük planlama daha uygun olabilir. Aracın sahada hazır beklemesi,
                gün içerisinde farklı binalara veya cephelere hızlıca geçiş yapabilme esnekliği
                sunar. Tesis yönetimleri günlük iş programı oluşturarak vinç kapasitesinden maksimum
                verim elde eder.
              </p>
              <p>
                Haftalık veya çok günlü uzun süreli projelerde ise çalışma takvimi, vardiya
                saatleri, sahadaki güvenli park düzeni ve operasyonel iş paketleri sözleşme
                öncesinde eksiksiz olarak netleştirilir. Böylece sahada beklenmedik duraklamalar
                yaşanmaz ve planlanan tarihte tüm yüksek irtifa işleri sonuçlandırılır.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Ankara’dan Bala’ya Planlı Araç Yönlendirme */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ankara’dan Bala’ya Planlı Araç Yönlendirme
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                ASV Vinç makine parkı Ankara’nın ana lojistik merkezlerinde konuşlanmaktadır. Bala
                ilçesine ve bağlı tüm yerleşim noktalarına araç sevkiyatı önceden yapılan planlama
                çerçevesinde sağlanır. Yol güzergahı, sahanın giriş-çıkış koşulları ve zemin yapısı
                göz önünde bulundurularak araç intikali organize edilir.
              </p>
              <p>
                Özellikle kurumsal tesislerin güvenlik protokolleri, kapı giriş izinleri ve
                biyogüvenlik dezenfeksiyon gereksinimleri yönlendirme öncesinde ele alınır.
                Operatörümüz ve aracımız belirlenen saatte sahada hazır bulunarak işin gecikmeksizin
                başlamasını sağlar.
              </p>
              <p>
                Bala için sepetli vinç teklifi almak oldukça pratiktir: WhatsApp hattımız üzerinden
                sahanın konumunu, yapılacak işin açıklamasını ve varsa cephe fotoğraflarını
                göndermeniz durumunda, teknik ekibimiz hızla değerlendirme yaparak en uygun araç
                modelini ve çalışma takvimini tarafınıza iletir.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Gerçek Aviagen Bala Vaka Kartı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bala’da Gerçekleştirdiğimiz Vinç Çalışmaları
              </h2>
              <p className="text-lg text-gray-600">
                Bala bölgesindeki kurumsal tesislerde tamamladığımız gerçek saha operasyonlarının
                detaylarını inceleyebilirsiniz.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/blog/bala-kurumsal-tesiste-4-gunluk-sepetli-vinc-hizmeti-kapak.webp"
                    alt="Aviagen Anadolu Bala tesisinde 4 günlük sepetli vinç çalışması"
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Bala — Kurumsal Tesis</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Aviagen Anadolu Bala Tesisinde 4 Günlük Vinç Çalışması
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Aviagen Anadolu’nun Bala’da yer alan üretim tesisinde dört gün boyunca planlı
                    sepetli vinç operasyonu yürüttük. Çatı bakımı, oluk kontrolü ve teknik ekipman
                    erişimi kapsamında gerçekleştirilen bu sahadaki çalışma ayrıntılarını vaka
                    yazımızda bulabilirsiniz.
                  </p>
                  <Link
                    href="/blog/bala-kurumsal-tesiste-4-gunluk-sepetli-vinc-hizmeti"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Bala tesis çalışmasını inceleyin <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. İlgili Hizmet Bağlantıları */}
        <section className="py-14 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              İlgili Hizmet Bağlantıları
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/hizmetler/sepetli-vinc-kiralama', label: 'Ankara Sepetli Vinç Kiralama' },
                { href: '/hizmetler/operatorlu-vinc-kiralama', label: 'Operatörlü Vinç Kiralama' },
                { href: '/hizmetler/gunluk-vinc-kiralama', label: 'Günlük Vinç Kiralama' },
                { href: '/hizmetler/saatlik-vinc-kiralama', label: 'Saatlik Vinç Kiralama' },
                {
                  href: '/hizmetler/cephe-temizligi-sepetli-vinc',
                  label: 'Cephe Çalışmaları İçin Vinç',
                },
                { href: '/hizmetler/elektrik-bakim', label: 'Elektrik Bakım İçin Vinç' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white border border-gray-200 p-4 rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">
                    {item.label}
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-gray-400 group-hover:text-primary transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Sıkça Sorulan Sorular (5 SSS) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                Bala’da sepetli vinç kiralama süreçleri hakkında merak edilen tüm konular.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Tek Alt CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Bala İçin Teklif Alın
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Konum ve iş detaylarını paylaşın, size en uygun araç ve çalışma planını hazırlayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05516066878"
                id="bala-bottom-call-cta"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                <Phone size={20} />
                0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878?text=Merhaba%2C%20Bala%20i%C3%A7in%20sepetli%20vin%C3%A7%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                id="bala-bottom-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MOBİL STICKY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] z-[100] flex p-2 gap-2">
        <a
          href="tel:05516066878"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
        >
          <Phone size={22} className="mb-1" />
          <span className="text-xs font-extrabold uppercase tracking-wide">Ara</span>
        </a>
        <a
          href="https://wa.me/905516066878?text=Merhaba%2C%20Bala%20i%C3%A7in%20sepetli%20vin%C3%A7%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#1ebd5a] text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
        >
          <MessageCircle size={22} className="mb-1" />
          <span className="text-xs font-extrabold uppercase tracking-wide">WhatsApp</span>
        </a>
      </div>

      <div className="h-[72px] md:hidden w-full bg-transparent"></div>
    </div>
  );
}
