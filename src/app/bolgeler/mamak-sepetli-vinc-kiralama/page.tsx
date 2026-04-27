import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, ChevronRight, AlertTriangle, Building2, Zap, Trees, Paintbrush, HardHat, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Mamak Sepetli Vinç Kiralama | Dar Sokaklara Özel Vinç Hizmeti',
  description: "Ankara Mamak'ta dar sokaklara girebilen kısa şaseli araçlarımızla apartman dış cephe, boya ve ağaç budama işleri için sepetli vinç. Hemen Arayın: 0551 606 68 78",
  alternates: getMetadataAlternates('/bolgeler/mamak-sepetli-vinc-kiralama'),
  openGraph: {
    title: 'Mamak Sepetli Vinç Kiralama | Dar Sokaklara Özel Vinç Hizmeti',
    description: "Ankara Mamak'ta dar sokaklara girebilen kısa şaseli araçlarımızla apartman dış cephe, boya ve ağaç budama işleri için sepetli vinç. Hemen Arayın: 0551 606 68 78",
    url: getCanonicalUrl('/bolgeler/mamak-sepetli-vinc-kiralama'),
  },
};

const faqs = [
  {
    q: 'Mamak’ta vinç ne kadar sürede gelir?',
    a: 'Mamak bölgesindeki araçlarımız müsaitlik durumuna göre ve trafik şartları göz önüne alındığında acil müdahale gerektiren durumlarda genellikle 30-40 dakika içerisinde adresinize yönlendirilir.'
  },
  {
    q: 'Dar sokakta vinç çalışır mı?',
    a: 'Evet, Mamak ilçesinin en büyük özelliği olan dar ve yokuşlu sokakları için filomuzda özel kısa şaseli (dingil mesafesi dar) ve denge ayakları esnek sepetli vinçlerimiz mevcuttur. Çevreye zarar vermeden güvenle konumlanabilir.'
  },
  {
    q: 'Aynı gün hizmet var mı?',
    a: 'Mamak geneli için aynı gün hizmet imkanımız bulunmaktadır. Özellikle tehlike arz eden kırık ağaç dalları, düşen sıvalar veya acil cephe müdahalelerinde gün içerisinde anında araç sevk edebiliyoruz.'
  },
  {
    q: 'Saatlik kiralama yapılır mı?',
    a: 'Bireysel müşterilerin en çok talep ettiği modeldir. Klima motoru dış ünite değişimi, tek bir binanın oluk tamiri veya ufak montaj işleriniz için saatlik kiralama yapmak en ekonomik seçenektir.'
  }
];

export default function MamakPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Mamak Sepetli Vinç Kiralama',
        provider: {
          '@type': 'LocalBusiness',
          name: 'AS Ankara Sepetli Vinç Kiralama Hizmetleri',
          url: SEO_CONFIG.baseUrl
        },
        telephone: '+905516066878',
        areaServed: [
          {
            '@type': 'City',
            name: 'Mamak'
          },
          {
            '@type': 'City',
            name: 'Ankara'
          }
        ],
        serviceType: 'Sepetli Vinç Kiralama',
        description: "Mamak'ta apartman dış cephe işleri, dar sokak çalışmaları, ağaç budama ve tabela montajı için kiralık sepetli vinç.",
        url: getCanonicalUrl('/bolgeler/mamak-sepetli-vinc-kiralama')
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
            name: 'Bölgeler',
            item: `${SEO_CONFIG.baseUrl}/bolgeler`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mamak Sepetli Vinç',
            item: `${SEO_CONFIG.baseUrl}/bolgeler/mamak-sepetli-vinc-kiralama`
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
              src="/images/bolge/mamak-vinc.jpg"
              alt="mamak sepetli vinç kiralama"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumb
                items={[
                  { label: 'Ana Sayfa', href: '/' },
                  { label: 'Bölgeler', href: '/bolgeler' },
                  { label: 'Mamak', href: '/bolgeler/mamak-sepetli-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-4 tracking-tight leading-tight">
                Mamak Sepetli Vinç Kiralama
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Ankara Mamak’ta 7/24 Vinç Hizmeti
              </h2>
              
              <div className="prose prose-lg text-gray-200 mb-10 max-w-3xl font-light">
                <p>
                  <strong>Türkiye’nin başkenti Ankara</strong>, köklü tarihi ve gelişen mimarisiyle <strong>İç Anadolu Bölgesi</strong>'nin en karmaşık kentleşme yapılarına sahip illerinden biridir. Bu kozmopolit yapının içerisinde, <strong>Ankara’nın doğu ilçelerinden biri olan Mamak</strong>; yoğun yerleşim yapısı, bitişik nizam apartmanları, yokuşlu coğrafyası ve birbirini kesen dar sokaklarıyla öne çıkar. Abidinpaşa, Akdere, Cengizhan, Hüseyingazi, Boğaziçi, Tuzluçayır ve Kartaltepe gibi mahallelerde nüfus yoğunluğu çok yüksektir.
                </p>
                <p>
                  Mamak'ın bu kendine has dokusu, vinç kullanımının son derece dikkatli, manevra kabiliyeti yüksek araçlarla ve profesyonel ekiplerce planlanmasını zorunlu kılar. Bölgede sıklıkla apartman dış cephe mantolama işleri, ticari mağazaların tabela montajları, risk taşıyan dev kavak ve çam ağaçlarının budanması, ve sokak arası elektrik bakım çalışmaları gerçekleştirilmektedir. Her bir santimetrenin önem taşıdığı bu dar alanlarda <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">Ankara sepetli vinç kiralama</Link> araçlarımız, iskele kurmanın imkansız olduğu noktalarda cankurtaran görevi görür. Çevredeki araçlara veya bina pencerelerine zarar vermemek adına <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">operatörlü vinç kiralama</Link> sistemimizle iş güvenliğini her şeyin üstünde tutuyoruz.
                </p>
                <p>
                  Sokak aralarındaki ufak çaplı işlerde yolları uzun süre kapatmamak için <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">saatlik vinç kiralama</Link> tercih edilirken, Kentsel Dönüşüm'ün yoğun olduğu Mamak'ta yeni yapılan binaların günlerce sürecek cam montajı veya cephe boyama işleri için daha ekonomik olan <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-blue-300 hover:text-white underline font-medium">günlük vinç kiralama</Link> paketlerimizden faydalanabilirsiniz. Mamak'ın tüm sokaklarına hakimiz ve anında müdahaleye hazırız.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
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
                  Hızlı teklif al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bölüm: Mamak’ta Sepetli Vinç En Çok Nerelerde Kullanılır? */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Mamak’ta Sepetli Vinç En Çok Nerelerde Kullanılır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Apartman Cephe İşleri</h3>
                <p className="text-gray-600">Mamak'taki yokuşlu sokaklarda yer alan bitişik nizam apartmanlarda düşen sıvaların tamiratı, çatı oluklarının onarımı, yağmur suyu gider borusu montajları ve dışarıdan yapılan cam temizlikleri dar sokaklara giren vinçlerimizle sağlanır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Paintbrush size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bina Bakım ve Boya</h3>
                <p className="text-gray-600">Özellikle eski konutların yenilenmesi aşamasında, iskele kurulması mümkün olmayan dar alanlarda dış cephe boya işleri ve yalıtım (mantolama) çalışmaları sepetli platformlar üzerinden güvenle yapılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <HardHat size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tabela Montajı</h3>
                <p className="text-gray-600">Nato Yolu ve Tıp Fakültesi caddesi gibi ticari lokasyonlarda yer alan dükkanların ve AVM'lerin cephe reklamları, totem tabelaları ve büyük kutu harf montajları çevreye rahatsızlık verilmeden yapılır.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Trees size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ağaç Budama</h3>
                <p className="text-gray-600">Akdere ve Hüseyingazi gibi bölgelerdeki parklarda veya gecekondu dönüşüm alanlarında, fırtına riski taşıyan, binaların pencere ve çatılarına kadar uzanmış tehlikeli dalların kontrollü kesimi için budama hizmeti sunuyoruz.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-primary transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Elektrik Bakım</h3>
                <p className="text-gray-600">Sokak aydınlatmalarının onarımı, mahalle aralarındaki trafo direklerindeki acil müdahaleler ve koptuğu için tehlike yaratan hatların düzeltilmesi izolasyonlu fiber sepetler aracılığıyla gerçekleştirilir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DAR ALAN VURGUSU (ÇOK KRİTİK) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle size={120} />
              </div>
              <AlertTriangle size={48} className="text-primary mx-auto mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">Mamak’ta Dar Sokaklarda Vinç Hizmeti</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light relative z-10">
                Mamak'ın yerleşim planı, oldukça yokuşlu caddeler ve araçların dahi park etmekte zorlandığı çok dar sokaklardan oluşur. Bu tip bölgelerde <strong>dar alanlarda çalışma kapasitesine sahip doğru araç seçimi</strong> hayati bir konudur. Hantal ve devasa vinçler bu sokaklara giremez. Araç filomuzda yer alan kısa şaseli (dingil mesafesi dar) ve ahtapot denge ayakları esnek şekilde açılabilen vinçlerimiz, Mamak'ın en zorlu sokaklarına girip milimetrik pozisyon alabilir. Deneyimli <strong>operatörlü kullanım avantajımız</strong> sayesinde çevredeki park halindeki araçlara, balkon demirlerine veya elektrik tellerine sıfır risk ile yaklaşarak en dar alanlarda bile güvenli çalışmayı garanti ediyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA BLOĞU */}
        <section className="bg-primary py-12 border-y border-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Mamak’ta en yakın vinci hızlıca yönlendirelim.</h3>
            <p className="text-primary-foreground mb-8 text-lg">Dar sokaklara uygun araçlarımızla hemen müdahale ediyoruz.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <Phone size={24} />
                Hemen Ara: 0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl justify-center"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 5. FİYAT BÖLÜMÜ */}
        <section id="fiyatlar" className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mamak Sepetli Vinç Fiyatları</h2>
              <div className="prose prose-gray max-w-none mb-8 text-left">
                <p className="text-lg">
                  Vinç kiralama süreçlerinde fiyatı belirleyen temel faktör, işin yapılacağı konumun fiziki zorluğudur. <strong>Dar alan</strong> ve yokuşlu sokaklarda aracı dengelemek ve işleme başlamak ciddi bir <strong>iş zorluğu</strong> yaratır ve ekstra dikkat gerektirir. Mamak gibi bölgelerde aracı güvenli konuma getirmek zaman alabildiğinden, toplam kullanım <strong>süresi</strong> doğrudan kiralama fiyatını belirleyen en önemli metriktir.
                </p>
                <p className="text-lg">
                  Mamak'ta bireysel bina sakinlerinin sıkça talep ettiği baca temizliği, çatı oluk onarımı, dış cam silimi, klima motoru sökülmesi veya tek bir ağacın budanması gibi nispeten <strong>kısa işler</strong> için <strong>saatlik kiralama</strong> modeli finansal olarak çok daha <strong>avantajlıdır</strong>. İşinizin gerektirdiği yüksekliğe ve çalışma zorluğuna göre en uygun fiyatlamayı yapıyoruz.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm inline-block w-full">
                <p className="text-gray-900 font-bold mb-4 text-xl">İşinize özel net fiyat için arayın.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="tel:05516066878" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors text-lg">
                    <Phone size={22} /> Net fiyat için arayın
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. GÜVEN BLOĞU (E-E-A-T) */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mamak’ta Gerçekleştirdiğimiz Vinç Çalışmaları</h2>
              <p className="text-lg text-gray-600">İlçenin zorlu fiziki şartlarında tamamladığımız sayısız başarılı operasyondan örnekler.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/mamak-apartman-vinc.jpg"
                    alt="ankara mamak vinç hizmeti"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Building2 size={20} /> Apartman Cephe İşi
                  </div>
                  <p className="text-gray-600 text-sm">Abidinpaşa'da iki bina arasındaki boşluğa iskele kurmanın imkansız olduğu dar sokak cephesinde, apartmanın sıva onarım ve boya izolasyon işlerini milimetrik yanaşma ile sorunsuz teslim ettik.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                  <HardHat size={48} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <HardHat size={20} /> Tabela Montajı
                  </div>
                  <p className="text-gray-600 text-sm">Tıp Fakültesi Caddesi üzerindeki ticari bir mağazanın eskimiş ışıklı tabelasının demontajı ve devasa yeni totem tabelasının çatı katına montajı trafiği aksatmadan gece çalışmasıyla gerçekleştirildi.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/bolge/mamak-vinc.jpg"
                    alt="mamak sepetli vinç kiralama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Trees size={20} /> Ağaç Budama
                  </div>
                  <p className="text-gray-600 text-sm">Hüseyingazi bölgesindeki bir site bahçesinde rüzgardan kırılarak binanın çatı oluklarına ve elektrik tellerine yaslanmış tehlikeli kavak dalları, operatörümüzün dikkatli manevralarıyla güvenle budanarak uzaklaştırıldı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HARİTA (ÇOK KRİTİK) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Mamak Hizmet Lokasyonu</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.20760431304!2d32.74836014439097!3d39.90793612502283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34c1b18d22dfb%3A0xc3fecaf215a3bb40!2sMamak%2C%20Ankara!5e0!3m2!1str!2str!4v1714152000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mamak Ankara Harita"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 8. İÇ LİNK BLOĞU EKLE */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mamak’ta Sunulan Vinç Hizmetleri</h2>
              <p className="text-lg text-gray-600">İhtiyacınıza yönelik sunduğumuz başlıca operasyonel çözümlerimiz.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Sepetli Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Operatörlü Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/saatlik-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Saatlik Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/gunluk-vinc-kiralama" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Günlük Vinç</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/cephe-temizligi-sepetli-vinc" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Cephe Temizliği</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
              <Link href="/hizmetler/tabela-montaj" className="bg-white border border-gray-200 p-5 rounded-xl hover:border-primary hover:shadow-md transition-all flex flex-col group">
                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg mb-2">Tabela Montaj</span>
                <span className="text-sm text-gray-500 mt-auto flex items-center gap-1 font-medium">İncele <ChevronRight size={16} /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FAQ Bölümü */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600">Mamak bölgesindeki dar sokak vinç operasyonlarıyla ilgili bilmeniz gerekenler.</p>
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
          href="https://wa.me/905516066878"
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
