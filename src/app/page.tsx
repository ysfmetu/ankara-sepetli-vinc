import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Ankara Sepetli Vinç',
        image: `${siteUrl}/logo.png`,
        telephone: '+905516066878',
        email: 'info@ankarasepetlivinckirala.com',
        priceRange: '₺₺',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ostim Organize Sanayi Bölgesi',
          addressLocality: 'Yenimahalle',
          addressRegion: 'Ankara',
          addressCountry: 'TR',
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        url: siteUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Fiyat neye göre değişir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fiyatlarımız saatlik, günlük veya haftalık olarak; kiralanacak vincin çalışma yüksekliğine ve işin niteliğine göre değişiklik göstermektedir. Kesin fiyat için ücretsiz teklif alabilir veya bizi arayabilirsiniz.',
            },
          },
          {
            '@type': 'Question',
            name: 'Operatör ve sigorta var mı?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet, tüm sepetli vinç ve platform kiralama hizmetlerimizde alanında uzman, sertifikalı operatörlerimiz aracı kullanmak üzere fiyata dahildir. Ayrıca tüm hizmetlerimiz iş güvenliği standartlarına uygun olarak sigortalı şekilde gerçekleştirilir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Aynı gün hizmet mümkün mü?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Filomuzun genişliği ve Ankara'nın farklı noktalarındaki hazır araçlarımız sayesinde, uygunluk durumuna göre acil taleplerinize aynı gün içinde en hızlı şekilde yanıt verip sevk sağlıyoruz.",
            },
          },
          {
            '@type': 'Question',
            name: 'Kaç metreye kadar hizmet veriyorsunuz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Araç filomuzda 10 metreden başlayıp 70+ metreye kadar çalışabilen farklı uzunluklarda ve tonajlarda sepetli vinç, örümcek platform ve hiyap seçenekleri mevcuttur.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <ServiceAreas />
        <FAQ />
        <BlogSection />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
