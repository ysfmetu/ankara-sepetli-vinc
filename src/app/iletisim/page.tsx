import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinc.com';

export const metadata: Metadata = {
  title: 'Ankara Vinç Kiralama İletişim',
  description:
    'Ankara sepetli vinç kiralama hizmeti için bizimle iletişime geçin. Ostim, Etimesgut, Çankaya, Yenimahalle bölgelerinde operatörlü vinç kiralama 7/24 hizmetinizde.',
  alternates: {
    canonical: `${siteUrl}/iletisim`,
  },
  openGraph: {
    title: 'Ankara Vinç Kiralama İletişim | Ankara Sepetli Vinç',
    description:
      'Ankara sepetli vinç kiralama hizmeti için bizimle iletişime geçin. Ostim ve tüm bölgelerde operatörlü kiralama 7/24 hizmet.',
    url: `${siteUrl}/iletisim`,
  },
};

export default function IletisimPage() {
  const phone = '0551 606 68 78';
  const telLink = 'tel:+905516066878';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ankara Sepetli Vinç Kiralama',
    telephone: '+905516066878',
    email: 'info@ankarasepetlivinc.com',
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ostim Organize Sanayi Bölgesi',
      addressLocality: 'Yenimahalle',
      addressRegion: 'Ankara',
      addressCountry: 'TR',
    },
    areaServed: 'Ankara',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+905516066878',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'TR',
      availableLanguage: 'Turkish'
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'İletişim', href: '/iletisim' },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="text-primary">İletişim</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>Ankara vinç kiralama</strong> ve <strong>sepetli vinç kiralama Ankara</strong> çözümleri için bize 7 gün 24 saat ulaşabilirsiniz. Acil durumlarda <strong>operatörlü vinç kiralama</strong> taleplerinize anında yanıt veriyor, Ostim merkezimizden aracı derhal yola çıkarıyoruz. Size en yakın vinci yönlendirebilmemiz için çalışma lokasyonunuzu iletmeniz yeterlidir.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl text-primary">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Telefon / WhatsApp (7/24 Nöbetçi)
                  </h3>
                  <a
                    href={telLink}
                    className="text-xl text-gray-600 hover:text-primary transition-colors font-medium mt-1 block"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Merkez Garaj Tesisimiz</h3>
                  <p className="text-lg text-gray-600 font-medium mt-1">
                    Ostim Organize Sanayi Bölgesi
                    <br />
                    Yenimahalle / Ankara, TR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl text-primary">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">E-Posta</h3>
                  <a
                    href="mailto:info@ankarasepetlivinc.com"
                    className="text-lg text-gray-600 hover:text-primary transition-colors font-medium mt-1 block"
                  >
                    info@ankarasepetlivinc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl text-primary">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Çalışma Saatleri</h3>
                  <p className="text-lg text-gray-600 font-medium mt-1">
                    7 Gün 24 Saat, Resmi Tatiller Dahil hizmetinizdeyiz. Nöbetçi vinç sistemiyle
                    ekstra mesai talep etmiyoruz.
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl text-primary flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Hizmet Bölgelerimiz</h3>
                  <p className="text-lg text-gray-600 font-medium mt-1">
                    <strong>Ankara ve çevresi:</strong><br />
                    Ostim, Etimesgut, Çankaya, Yenimahalle, Sincan, Keçiören, Mamak başta olmak üzere tüm merkez ve çevre ilçelere hızlı sevk.
                  </p>
                </div>
              </div>

              {/* Trust Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Neden Biz?</h4>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Periyodik Bakımlı Güvenli Filo</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> G Sınıfı Sertifikalı Operatörler</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Söz Verilen Saatte Teslimat</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Rekabetçi ve Şeffaf Fiyatlandırma</li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-3xl h-[250px] w-full flex items-center justify-center shadow-inner relative overflow-hidden mt-8 border border-gray-300">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                ></div>
                <span className="text-gray-500 font-bold text-xl z-10 flex items-center gap-2">
                  <MapPin size={28} /> Harita Entegrasyonu
                </span>
              </div>
            </div>

            {/* İletişim Formu (LeadForm u buraya taşıyoruz farklı başlıkla) */}
            <div className="bg-white rounded-3xl p-2 h-fit">
              <LeadForm />
            </div>
          </div>
        </div>

        <CallToAction
          title="Çayımızı İçmeye Bekleriz"
          message="Merhaba, adresinizi rica edebilir miyim? Görüşmeye gelmek istiyorum."
        />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
