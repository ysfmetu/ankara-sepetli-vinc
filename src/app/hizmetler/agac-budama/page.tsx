import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight, Trees, Leaf, ShieldAlert, Camera, CalendarDays, ChevronRight, HardHat, Clock, AlertTriangle, Wind, Scissors, ShieldCheck, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceRegionalLinks from '@/components/ServiceRegionalLinks';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Ankara Ağaç Budama ve Kesim İçin Sepetli Vinç Kiralama',
  description: 'Ankara’da yüksek ağaç budama, tehlikeli dal kesimi ve çevre düzenleme işleri için güvenli sepetli vinç kiralama hizmeti. Fiyat almak için arayın: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/agac-budama'),
  openGraph: {
    title: 'Ankara Ağaç Budama ve Kesim İçin Sepetli Vinç Kiralama',
    description: 'Ankara’da yüksek ağaç budama, tehlikeli dal kesimi ve çevre düzenleme işleri için güvenli sepetli vinç kiralama hizmeti. Fiyat almak için arayın: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/agac-budama'),
  },
};

const faqs = [
  {
    q: 'Ağaç budama için vinç gerekir mi?',
    a: 'Kesinlikle. 3 metreyi aşan, dalları binalara veya elektrik hatlarına yaklaşan ağaçların merdivenle budanması son derece tehlikelidir. Hem personelin güvenliği hem de çevreye zarar vermemek için sepetli vinç zorunludur.'
  },
  {
    q: 'Yüksek ağaç nasıl kesilir?',
    a: 'Sepetli vinç yardımıyla ağacın en tepe noktasına güvenle ulaşılır. Motorlu testere kullanan personel sepet içinde emniyet kemeriyle sabitlenir ve ağaç yukarıdan aşağıya doğru ufak parçalar halinde kesilerek indirilir.'
  },
  {
    q: 'Aynı gün hizmet var mı?',
    a: 'Fırtına sonrası devrilme tehlikesi olan veya aniden kırılarak bina/araç üzerine düşme riski barındıran ağaçlar için Ankara genelinde aynı gün acil vinç yönlendirmesi yapabiliyoruz.'
  },
  {
    q: 'Operatör dahil mi?',
    a: 'Evet. Sepetli vinç kiralama hizmetimizde, aracı sabitleyen ve budama yapan personeli sepet ile en doğru açıya güvenle yönlendiren iş güvenliği sertifikalı operatörümüz fiyata dahildir.'
  }
];

export default function AgacBudamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Ağaç Budama Sepetli Vinç',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        },
        serviceType: 'Ağaç Budama Vinç Hizmeti',
        description: "Ankara’da yüksek ve tehlikeli ağaç budama işleri için sepetli vinç kiralama hizmeti. Bahçe, site ve park alanları için güvenli çözüm.",
        url: getCanonicalUrl('/hizmetler/agac-budama')
      },
      {
        '@type': 'LocalBusiness',
        name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
        url: SEO_CONFIG.baseUrl,
        telephone: '+905516066878',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ostim Organize Sanayi Bölgesi',
          addressLocality: 'Yenimahalle',
          addressRegion: 'Ankara',
          addressCountry: 'TR'
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: SEO_CONFIG.baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Hizmetler',
            item: `${SEO_CONFIG.baseUrl}/hizmetler`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Ağaç Budama',
            item: `${SEO_CONFIG.baseUrl}/hizmetler/agac-budama`
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-24 pb-0">
        
        {/* 1. Hero Alanı */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/images/hero-bg.jpg"
              alt="ankara ağaç budama sepetli vinç"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Ağaç Budama', href: '/hizmetler/agac-budama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Ağaç Budama İçin Sepetli Vinç Hizmeti
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara genelinde yüksek, tehlikeli veya ulaşılması zor ağaçların budanması ve kesimi için operatörlü sepetli vinç hizmeti sunuyoruz. Site bahçeleri, park alanları, villa çevreleri ve kamu alanlarında güvenli ve hızlı çözümler sağlıyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <a
                  href="tel:05516066878"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30"
                >
                  <Phone size={20} />
                  Hemen Ara: 0551 606 68 78
                </a>
                <a
                  href="https://wa.me/905516066878"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-500/30"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href="#fiyatlar"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Ağaç Budama Fiyatı Al
                </a>
                <Link
                  href="/bolgeler"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white underline hover:text-gray-200 px-4 py-4 font-medium transition-all"
                >
                  Hizmet Bölgelerini Gör
                </Link>
              </div>

              {/* Güven Sinyalleri */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Trees size={24} className="text-green-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Yüksek Ağaçlara Güvenli Erişim</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><HardHat size={24} className="text-green-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Operatörlü Vinç Hizmeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><MapPin size={24} className="text-green-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Ankara Geneli Hizmet</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg"><Leaf size={24} className="text-green-400" /></div>
                  <span className="font-semibold text-sm md:text-base">Bahçe ve Peyzaj Deneyimi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Niyet Odaklı Giriş */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ağaç Budamada Neden Sepetli Vinç Kullanılır?</h2>
              <p>
                Ağaç budama, doğanın korunması ve kent estetiği için vazgeçilmez bir işlemdir. Ancak yüksek ve yaşlı ağaçların budanması, basit bir merdivenle yapılması imkansız ve son derece tehlikeli bir operasyondur. Dengenin kaybedilmesi, motorlu testere kullanımı esnasında yaşanacak anlık bir sarsıntı veya kesilen kalın bir dalın kontrolsüzce aşağı düşmesi hem çalışanlara hem de çevreye felaket getirebilir. İşte bu sebeple, <strong>ankara ağaç budama sepetli vinç</strong> hizmeti, bu riskleri tamamen ortadan kaldıran en profesyonel yöntemdir.
              </p>
              <p>
                Sepetli vinç sayesinde budama işlemi son derece kontrollü, güvenli ve saniyeler içinde ulaşım sağlanarak gerçekleştirilir. Özellikle apartman diplerine kadar uzanmış dallar, devasa site bahçeleri, halka açık parklar ve lüks villa çevrelerinde büyük ağaçların kesimi için vinç kullanımı büyük avantaj sağlar. Bu noktada <Link href="/hizmetler/sepetli-vinc-kiralama" className="font-semibold underline">Ankara sepetli vinç kiralama</Link> araçlarımız, budama personelini tam istediği noktaya ulaştırır ve rahat bir çalışma platformu sunar.
              </p>
              <p>
                Vincin manevra kabiliyeti ve sepetin sabitliği sayesinde devrilme riski sıfıra iner. Çevre güvenliğinin maksimum düzeyde sağlandığı <Link href="/hizmetler/operatorlu-vinc-kiralama" className="font-semibold underline">operatörlü vinç kiralama</Link> paketimizle personelin tüm odak noktası sadece kesim işi olur. Yalnızca birkaç tehlikeli dal alınacaksa <Link href="/hizmetler/saatlik-vinc-kiralama" className="font-semibold underline">saatlik vinç kiralama</Link>, geniş bir parkta veya tüm site bahçesinde kapsamlı bir temizlik yapılacaksa <Link href="/hizmetler/gunluk-vinc-kiralama" className="font-semibold underline">günlük vinç kiralama</Link> yöntemini seçerek bütçenizi optimize edebilirsiniz. Yeşilin her tonuna saygı duyarak çalışırken, her türlü yüksek erişim desteğinde <Link href="/hizmetler" className="font-semibold underline">Ankara vinç kiralama hizmetleri</Link> filomuz emrinizdedir.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Hizmet Kapsamı */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ağaç Budama ve Kesim Hizmetleri</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Doğaya zarar vermeden ve çevre güvenliğini riske atmadan sunduğumuz peyzaj destek hizmetlerimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Trees size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Yüksek Ağaç Budama</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Normal merdivenlerle erişilemeyen 10-20 metre ve üzeri yükseklikteki yaşlı kavak, çınar ve çam ağaçlarının zirve noktalarına güvenle ulaşarak şekillendirme yapılması.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Ağaç budama vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tehlikeli Ağaç Kesimi</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Bina temellerine, elektrik hatlarına veya çatı yüzeylerine temas ederek risk oluşturan, kuruyan ve çevreye tehlike saçan ağaçların güvenli sökümü ve parçalı kesimi.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Ağaç budama vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Scissors size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dal Kesimi ve Temizleme</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Yola taşan, yayaların veya araçların geçişine mani olan kalın dalların sepet içinden motorlu testereyle kontrollü kesilerek aşağıya güvenle indirilmesi işlemi.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Ağaç budama vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Site ve Apartman Bahçeleri</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Apartmanların ortak yaşam alanlarındaki ağaçların bakımının araçları çizmeden, peyzajı bozmadan ve camlara zarar vermeden özenle tamamlanması.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Ağaç budama vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Leaf size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Park ve Peyzaj Alanları</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Geniş kampüsler, millet bahçeleri, parklar ve otoyol refüjlerindeki ağaçların estetik amaçlı mevsimsel genel budamaları için platform desteği.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Ağaç budama vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Wind size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fırtına Sonrası Ağaç Müdahalesi</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  Şiddetli rüzgar ve fırtınalarda gövdesinden yarılmış, yola veya araç üzerine devrilmek üzere olan ağaçlar için acil vinç kurtarma ve temizlik çalışması.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-center mt-auto border border-gray-100">
                  <p className="text-xs font-semibold text-gray-800 m-0">Ağaç budama vinç hizmeti için <br/> <a href="tel:05516066878" className="text-primary hover:underline text-sm">0551 606 68 78</a> numarasını arayın.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. GÜVENLİK */}
        <section className="py-16 bg-red-50 border-y border-red-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-red-900 mb-8 text-center flex items-center justify-center gap-3">
              <ShieldAlert size={36} className="text-red-600" />
              Ağaç Budamada Sepetli Vinç ile Güvenli Çalışma
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-red-100">
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Yüksek dal kesimi, sanıldığı kadar basit bir iş değildir; motorlu testerenin kullanıldığı bu alan <strong>sıfır hata prensibiyle</strong> yönetilmelidir. İş güvenliğini şansa bırakmamak adına vinç kiralama vazgeçilmezdir.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Yüksekten Düşme Riski:</strong> Ağaç dalları esnektir ve kırılgan yapıya sahiptir. Merdiven veya serbest tırmanışla çıkılan ağaçlarda denge kaybetmek veya dalın kırılması sonucu yere çakılmak an meselesidir. Vinç sepeti bu riski ortadan kaldırır.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Kontrolsüz Dal Kesimi Tehlikesi:</strong> Ağır ve devasa bir dal aşağı düşerken bina camlarına, park halindeki araçlara veya yoldan geçenlere zarar verebilir. Sepetten yapılan kontrollü kesimde dallar ipe bağlanarak (halatla) aşağı indirilebilir.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Operatörlü Kullanım Avantajı:</strong> Kesim yapan kişi testereye odaklanırken, operatör vincin sarsılmasını engeller, rüzgar hızını hesaplar ve kişiyi bir sonraki keseceği dala milimetrik olarak ulaştırır.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1 shrink-0"><CheckCircle2 className="text-red-600" size={20} /></div>
                  <span className="text-gray-800 text-lg"><strong>Dar Alanlarda Güvenli Çalışma:</strong> Ağacın bulunduğu alan iki bina arası veya tellerle çevrili olabilir. Hidrolik bomlu sepetli vinç, yaprakların arasından süzülerek hedefe hiçbir yere çarpmadan ulaşır.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ara CTA */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Tehlikeli Ağaçları Güvenle Budayalım</h3>
            <p className="text-primary-foreground mb-8 text-lg">Bahçenizdeki veya sitenizdeki yüksek ağaçların fotoğrafını WhatsApp'tan bize ulaştırarak anında vinç planlaması yapabilirsiniz.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <MessageCircle size={24} />
                Fotoğraf Gönder Fiyat Al
              </a>
            </div>
          </div>
        </section>

        {/* 5. Lokal SEO */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Ankara’da Ağaç Budama Vinç Hizmeti Verdiğimiz Bölgeler</h2>
              <p>
                Ankara gibi yeşil alanları bol, bahçeli nizamı yaygın bir şehirde bahar ve sonbahar aylarında <strong>ağaç budama vinç kiralama</strong> sektörü çok hareketlidir. Ağacın bulunduğu lokasyonun fiziksel şartları; sokağın darlığına veya bahçenin eğimine göre vinç seçimini doğrudan etkiler. Ekiplerimiz Çankaya, Gölbaşı, Etimesgut, Eryaman, Yenimahalle, Keçiören, Mamak ve Sincan hattı boyunca peyzaj projeleri ve acil budama işleri için kesintisiz sahada yer alır.
              </p>
              
              <p>
                Özellikle lüks villa kültürünün ve geniş müstakil bahçelerin yoğun olduğu Çankaya ve Gölbaşı ekseninde çam ağaçları ve ulu çınarların budanması titizlik gerektirir. Buralarda villalara ve camlara zarar vermeden <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="font-semibold underline">Çankaya sepetli vinç kiralama</Link> araçlarımız, peyzaj estetiğini koruyarak villa çevrelerinde güvenle hizmet verir.
              </p>

              <p>
                Şehrin batısında konumlanan, çok katlı bloklardan oluşan devasa sitelerin yer aldığı Etimesgut ve Eryaman bölgesinde ise genellikle ortak peyzaj alanlarındaki kurumuş ağaç bakımları söz konusudur. Bu yüksek site bahçelerindeki tehlikeli kavak veya söğüt ağaçlarının araç park alanlarına devrilmesini engellemek adına <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline">Etimesgut sepetli vinç kiralama</Link> departmanımız yönetim kurullarıyla koordineli, gün boyu süren temizlik çalışmaları yapar.
              </p>

              <p>
                Daha köklü mahalle kültürüne sahip Yenimahalle ve Keçiören’de apartman çevresinde binaların camlarına sürten dalların kesimi sıkça talep edilir. Mamak yokuşlarında dengeli kurulum gerektiren işlerden, Sincan’daki çok daha geniş sanayi ve park alanlarındaki kaba budama işlerine kadar başkentin her noktasında aracımız vardır. Ankara genelinde özellikle <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Etimesgut sepetli vinç kiralama</Link> taleplerine hızlı dönüş sağlıyoruz. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Keçiören sepetli vinç</Link> hizmetlerinde dar sokak ve apartman cephe işleri için uygun araç yönlendirmesi yapıyoruz. <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Ostim sepetli vinç kiralama</Link> hizmetlerinde fabrika, depo ve sanayi bakım işleri öne çıkarken, <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Yenimahalle vinç kiralama</Link> taleplerinde hem sanayi hem konut bölgelerine hızlı hizmet veriyoruz. Ağacınızın nerede olduğu fark etmeksizin; vinç seçeneklerimizi incelemek için <Link href="/bolgeler" className="font-semibold underline text-primary">Ankara hizmet bölgeleri</Link> sayfamız üzerinden detayları inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <ServiceRegionalLinks variant="C" />

        {/* 6. Saatlik / Günlük Bağlantı */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ağaç Budama İçin Saatlik mi Günlük mü Vinç?</h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-green-600 w-8 h-8" />
                  Saatlik Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Bina camına çarpan veya tehlike yaratan 1-2 dalın kesimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Fırtına sonrası kırılıp asılı kalan küçük ağaç müdahaleleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">Sadece 1 adet standart ağacın hızlıca tepesinin alınması</span>
                  </li>
                </ul>
                <Link href="/hizmetler/saatlik-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl border-2 border-green-600 text-green-700 font-bold hover:bg-green-50 transition-colors gap-2">
                  saatlik vinç kiralama <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-primary/5 border-2 border-primary/30 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <CalendarDays className="text-primary w-8 h-8" />
                  Günlük Kiralama
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Site veya kampüs içerisindeki tüm ağaçların peyzaj budaması</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Devasa boyuttaki ve sökülmesi saatler sürecek köklü ağaç kesimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">Otoyol veya cadde boyu sıralı çam ağaçlarının toplu bakımı</span>
                  </li>
                </ul>
                <Link href="/hizmetler/gunluk-vinc-kiralama" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors gap-2">
                  günlük vinç kiralama <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Fiyat Bölümü */}
        <section id="fiyatlar" className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ankara Ağaç Budama Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p>
                  <strong>Yüksek ağaç budama vinç</strong> kiralama taleplerinde fiyatlar standart olmamakla birlikte, işin peyzaj zorluğuna göre dinamik olarak hesaplanmaktadır. Doğru makineyi tespit edebilmek ve net bir rakam verebilmek için fiyatı etkileyen şu faktörleri inceliyoruz:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
                  <ul className="space-y-3 m-0">
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Kesilecek <strong>ağaç yüksekliği</strong> (Metre)</li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Budanacak olan <strong>ağaç sayısı</strong></li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Toplam operasyon <strong>süresi</strong> (Saat/Gün)</li>
                  </ul>
                  <ul className="space-y-3 m-0">
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Ağacın bulunduğu <strong>lokasyon</strong> ve bahçe darlığı</li>
                    <li className="flex items-center gap-2 text-gray-700 m-0"><CheckCircle2 className="text-primary shrink-0" size={18} /> Çevre tehlikesi ve <strong>zorluk seviyesi</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">Fiyat almak için 0551 606 68 78 numarasını arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> Hemen Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Süreç Bölümü */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Ağaç Budama Süreci Nasıl İşler?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Phone size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Arayın</h3>
                <p className="text-gray-600 text-sm">Kesilecek ağaç veya genel peyzaj budama talebiniz için bizi arayın veya WhatsApp'tan yazın.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><Camera size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Fotoğraf Gönderin</h3>
                <p className="text-gray-600 text-sm">Ağacın boyutunu ve etrafındaki alanın (bina/tel) net göründüğü bir fotoğraf iletin.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><CalendarDays size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Planlama</h3>
                <p className="text-gray-600 text-sm">Ağacın yüksekliğine göre filomuzdan en uygun uzunluktaki sepetli vinç tarafınıza tahsis edilir.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative mt-6 lg:mt-0">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-4 mb-3 text-primary flex justify-center"><ShieldCheck size={32} /></div>
                <h3 className="font-bold text-gray-900 mb-2">Müdahale</h3>
                <p className="text-gray-600 text-sm">Aracımız sahaya gelir, operatör emniyetli ortamı kurar ve ağaç kesimi başarıyla tamamlanır.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8.5. GERÇEK REFERANS BLOĞU */}
        <section className="py-16 bg-teal-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gerçek Ağaç Budama Çalışmalarımızdan Bir Örnek</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bağlıca villa bölgesinde gerçekleştirdiğimiz çalışmada, sepetli vinç ile budama işleminin ardından dalların toplanması, nakliye süreci, alan temizliği ve belediye çöp atım izinleri dahil tüm süreci yönettik.
            </p>
            <Link href="/blog/baglica-villa-bolgesinde-agac-budama-calismasi" className="font-bold bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white transition-all px-8 py-4 rounded-xl inline-flex items-center gap-2 justify-center shadow-sm">
              Bağlıca’daki ağaç budama çalışmasını okuyun <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* 9. İç Link Bloğu */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">İlgili Hizmetler</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Sepetli Vinç Kiralama</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Operatörlü Vinç</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Saatlik Vinç</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm">Günlük Vinç</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* İç Link ve CTA Alanı */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bulunduğunuz İlçeye En Yakın Vinci Yönlendirelim</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ankara’da bulunduğunuz ilçeye göre en yakın vinci yönlendiriyoruz. Konumunuzu ve yapılacak işi paylaşarak hızlı fiyat alabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Etimesgut sepetli vinç kiralama</Link>
                <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Keçiören vinç kiralama</Link>
                <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Yenimahalle sepetli vinç hizmeti</Link>
                <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Ostim sanayi vinç hizmeti</Link>
                <Link href="/bolgeler" className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">Tüm hizmet bölgeleri</Link>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:05516066878" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors">
                  <Phone size={20} /> Hemen Ara: 0551 606 68 78
                </a>
                <a href="https://wa.me/905516066878" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1ebd5a] transition-colors">
                  <MessageCircle size={20} /> WhatsApp'tan Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Ağaç budama operasyonlarında vinç kiralama hakkında merak edilenler.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
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

        {/* Alt CTA */}
        <section className="bg-gray-900 py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ağaç Budamada Tehlikeyi Sıfırlayın</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Tehlikeli boyutlara ulaşan yüksek ağaçlarınızı, çevreye ve binalara hiçbir zarar vermeden, operatörlü sepetli vinçlerimizle güvenle temizliyoruz.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <Phone size={24} />
                Hemen Ara: 0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <MessageCircle size={24} />
                Fotoğraf Gönder Fiyat Al
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* MOBİL STICKY BAR (ÇOK ÖNEMLİ) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] z-[100] flex p-2 gap-2">
        <a
          href="tel:05516066878"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
        >
          <Phone size={22} className="mb-1" />
          <span className="text-xs font-extrabold uppercase tracking-wide">Ara</span>
        </a>
        <a
          href="https://wa.me/905516066878"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#1ebd5a] text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors"
        >
          <MessageCircle size={22} className="mb-1" />
          <span className="text-xs font-extrabold uppercase tracking-wide">WhatsApp</span>
        </a>
      </div>
      
      {/* Sayfa içeriğinin sonuna boşluk ekliyoruz ki mobil sticky bar footer'ın son kısımlarını kapatmasın. */}
      <div className="h-[72px] md:hidden w-full bg-transparent"></div>

    </div>
  );
}
