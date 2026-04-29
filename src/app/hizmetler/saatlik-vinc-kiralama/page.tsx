import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Clock, Zap, ShieldCheck, MapPin, CheckCircle2, ArrowRight, Wallet, HardHat, PenTool, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceRegionalLinks from '@/components/ServiceRegionalLinks';

import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Ankara Saatlik Vinç Kiralama | Hızlı ve Uygun Fiyatlı Hizmet',
  description: 'Ankara’da kısa süreli işler için saatlik vinç kiralama. Tabela, elektrik, cephe ve bakım işleri için aynı gün hizmet: 0551 606 68 78',
  alternates: getMetadataAlternates('/hizmetler/saatlik-vinc-kiralama'),
  openGraph: {
    title: 'Ankara Saatlik Vinç Kiralama | Hızlı ve Uygun Fiyatlı Hizmet',
    description: 'Ankara’da kısa süreli işler için saatlik vinç kiralama. Tabela, elektrik, cephe ve bakım işleri için aynı gün hizmet: 0551 606 68 78',
    url: getCanonicalUrl('/hizmetler/saatlik-vinc-kiralama'),
  },
};

export default function SaatlikVincKiralamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Ankara Saatlik Vinç Kiralama',
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
        serviceType: 'Saatlik Vinç Kiralama',
        description: "Ankara’da saatlik vinç kiralama hizmeti ile kısa süreli işleriniz için hızlı ve uygun fiyatlı çözüm. Aynı gün vinç yönlendirme ve operatörlü hizmet.",
        url: getCanonicalUrl('/hizmetler/saatlik-vinc-kiralama')
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
        
        {/* 1. Hero Alanı ve Üst CTA */}
        <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero-bg.jpg"
              alt="ankara saatlik vinç kiralama"
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
                  { label: 'Hizmetler', href: '/hizmetler' },
                  { label: 'Saatlik Vinç', href: '/hizmetler/saatlik-vinc-kiralama' },
                ]}
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight">
                Ankara Saatlik Vinç Kiralama
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light">
                Ankara’da kısa süreli işleriniz için saatlik vinç kiralama hizmetiyle hızlı ve uygun fiyatlı çözümler sunuyoruz. Aynı gün vinç yönlendirme, deneyimli operatör desteği ve bütçe dostu fiyatlandırma ile 1 saatten başlayan esnek kiralama seçenekleri.
              </p>
              
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
                  href="#fiyat-mantigi"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Hızlı Fiyat Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Saatlik Kiralama Mantığı ve İçerik */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none">
              <h2 className="text-3xl font-bold mt-0 mb-6">Kısa Süreli İşler İçin Hızlı Çözüm</h2>
              <p>
                Ankara gibi trafiği ve iş temposu yoğun bir şehirde, bazen sadece 1 veya 2 saat sürecek operasyonlar için tam günlük kiralama ücretleri ödemek bütçenizi gereksiz yere yorabilir. İşte bu noktada <strong>saatlik vinç kiralama</strong> sistemimiz devreye girer. Tabela sökümü, klima dış ünite montajı, kısa süreli cam silimi, sokak lambası değişimi veya ufak çaplı arıza onarımları gibi <strong>kısa süreli işler</strong> için en ekonomik kiralama yöntemidir.
              </p>
              
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl my-8 flex items-start gap-4">
                <Zap className="text-primary shrink-0 w-8 h-8" />
                <div>
                  <h3 className="font-bold text-gray-900 mt-0 mb-2">Aynı Gün Vinç Yönlendirme</h3>
                  <p className="m-0 text-gray-600 text-base">
                    Acil müdahale gerektiren durumlarda veya aniden planlanan montaj işlerinde beklemeye tahammülünüz olmadığını biliyoruz. Geniş araç filomuz ve Ankara geneline yayılmış hizmet ağımız sayesinde, bize ulaştığınız anda uygun aracı belirler ve <strong>aynı gün vinç yönlendirme</strong> garantisiyle en kısa sürede sahanıza ulaştırırız. Ankara genelinde özellikle <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Etimesgut sepetli vinç kiralama</Link> taleplerine hızlı dönüş sağlıyoruz. <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Keçiören sepetli vinç</Link> hizmetlerinde dar sokak ve apartman cephe işleri için uygun araç yönlendirmesi yapıyoruz. <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Ostim sepetli vinç kiralama</Link> hizmetlerinde fabrika, depo ve sanayi bakım işleri öne çıkarken, <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="font-semibold underline text-primary">Yenimahalle vinç kiralama</Link> taleplerinde hem sanayi hem konut bölgelerine hızlı hizmet veriyoruz.
                  </p>
                </div>
              </div>

              <h2 id="fiyat-mantigi" className="text-3xl font-bold mb-6">Saatlik Fiyat Mantığı Nasıl Çalışır?</h2>
              <p>
                Saatlik kiralama sisteminde, aracın şantiyenize veya iş alanınıza ulaşıp kurulumunu tamamlamasıyla süreç başlar. <strong>Saatlik fiyat mantığı</strong>, tam yevmiye ödemek yerine yalnızca kullandığınız saatin (genellikle minimum 1 veya 2 saat başlangıç) ücretini ödemeniz üzerine kuruludur. Vinç modeline, çalışma yüksekliğine ve makinenin kat edeceği mesafeye göre hesaplama yapılır. Bu model, özellikle küçük işletmeler, reklamcılar ve bireysel kullanıcılar için ciddi bir maliyet avantajı yaratır.
              </p>

              {/* FİYAT CTA (ZORUNLU) */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center my-8">
                <p className="text-lg font-bold text-gray-900 m-0">
                  Detaylı fiyat almak için <a href="tel:05516066878" className="text-primary hover:underline">0551 606 68 78</a> numarasını arayın veya WhatsApp’tan yazın.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Orta CTA Alanı */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Kısa Süreli İşleriniz İçin Beklemeyin</h3>
            <p className="text-primary-foreground mb-8 text-lg">Bir saatlik iş için tam gün ödemeyin. Hemen şimdi bizi arayın, projenize en uygun saatlik teklifi sunalım.</p>
            <div className="flex justify-center">
              <a
                href="tel:05516066878"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
            </div>
          </div>
        </section>

        {/* 4. Lokal Linkler Bölümü */}
        <ServiceRegionalLinks variant="A" />

        {/* 5. Internal Links (ZORUNLU) */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Diğer Vinç Kiralama Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href="/hizmetler/sepetli-vinc-kiralama" className="group bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <PenTool size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">Ankara sepetli vinç kiralama</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Her türlü yüksek erişim işlemi için ideal, manevra kabiliyeti yüksek geniş sepetli platform filomuz.</p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 mt-auto">Sayfaya Git <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/operatorlu-vinc-kiralama" className="group bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <HardHat size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">Operatörlü vinç kiralama</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">İş güvenliği sertifikalı, profesyonel operatörlerimiz eşliğinde garantili ve güvenli sepetli vinç hizmeti.</p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 mt-auto">Sayfaya Git <ArrowRight size={16} /></span>
              </Link>

              <Link href="/hizmetler/gunluk-vinc-kiralama" className="group bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-primary hover:bg-white hover:shadow-md transition-all flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">Günlük vinç kiralama</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Uzun süren dış cephe çalışmaları, şantiye işleri ve detaylı peyzaj düzenlemeleri için ekonomik günlük kiralama seçenekleri.</p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 mt-auto">Sayfaya Git <ArrowRight size={16} /></span>
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

        {/* 6. Alt CTA Alanı */}
        <section className="bg-gray-900 py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Aynı Gün İçinde İşinizi Halledelim</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">Saatlik vinç kiralama avantajlarıyla hızlı, güvenilir ve uygun fiyatlı çözüme ulaşmak için çağrı merkezimiz 7/24 hizmetinizde.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:05516066878"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <Phone size={24} />
                0551 606 68 78
              </a>
              <a
                href="https://wa.me/905516066878"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
              >
                <MessageCircle size={24} />
                WhatsApp Destek
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* 7. MOBİL STICKY BAR (ÇOK ÖNEMLİ) */}
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
      
      {/* 
        Sayfa içeriğinin sonuna boşluk ekliyoruz ki mobil sticky bar 
        footer'ın son kısımlarını kapatmasın.
      */}
      <div className="h-[72px] md:hidden w-full bg-transparent"></div>

    </div>
  );
}
