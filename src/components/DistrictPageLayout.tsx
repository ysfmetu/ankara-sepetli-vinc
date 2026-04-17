'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CallToAction from '@/components/CallToAction';
import Breadcrumb from '@/components/Breadcrumb';

/* ------------------------------------------------------------------ */
/* Types                                                                 */
/* ------------------------------------------------------------------ */
export interface DistrictService {
  title: string;
  description: string;
}

export interface DistrictWhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface DistrictNeighbor {
  name: string;
  href: string;
  icon?: string;
}

export interface DistrictFaqItem {
  q: string;
  a: string;
}

export interface DistrictPageLayoutProps {
  /** İlçe adı — H1 ve başlıklarda kullanılır. Örn: "Sincan" */
  districtName: string;
  /** URL slug. Örn: "sincan" */
  districtSlug: string;
  /** Hero alt başlık */
  heroSubtitle: string;
  /** Varış süresi. Örn: "30-45" */
  arrivalTime: string;
  /** Giriş paragrafı — ilçeye özel yerel detaylar */
  introText: string;
  /** Görsel 1 */
  image1: { src: string; alt: string };
  /** Görsel 2 */
  image2: { src: string; alt: string };
  /** Hizmetler listesi */
  services: DistrictService[];
  /** Neden Biz kartları */
  whyCards: DistrictWhyCard[];
  /** Komşu ilçe linkleri */
  neighbors: DistrictNeighbor[];
  /** İlçeye özel SSS sorular */
  faq: DistrictFaqItem[];
  /** WhatsApp CTA mesajı */
  ctaMessage: string;
}

/* ------------------------------------------------------------------ */
/* Bileşen                                                               */
/* ------------------------------------------------------------------ */
export default function DistrictPageLayout({
  districtName,
  districtSlug,
  heroSubtitle,
  arrivalTime,
  introText,
  image1,
  image2,
  services,
  whyCards,
  neighbors,
  faq,
  ctaMessage,
}: DistrictPageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbLabel = districtName;
  const breadcrumbHref = `/bolgeler/${districtSlug}-sepetli-vinc-kiralama`;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pb-20 md:pb-0">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-14 md:py-24 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <Breadcrumb
              items={[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Hizmet Bölgeleri', href: '/bolgeler' },
                { label: breadcrumbLabel, href: breadcrumbHref },
              ]}
            />

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {districtName}{' '}
              <span className="text-primary">Sepetli Vinç Kiralama</span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mt-2">
                — Uygun Fiyat &amp; 24 Saat Hizmet
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {heroSubtitle}
            </p>

            <a
              href="tel:05516066878"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 active:scale-95 transition-all"
            >
              📞 0551 606 68 78 — Hemen Arayın
            </a>
          </div>
        </section>

        {/* ── İçerik ───────────────────────────────────────────── */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">

          {/* Giriş */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            {introText}{' '}
            <a
              href="https://ankarasepetlivinckirala.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Ankara sepetli vinç
            </a>{' '}
            kiralama hizmetimiz {districtName} bölgesinde 7/24 aktiftir.
          </p>

          {/* Görsel 1 — Mobile-First responsive */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md mb-12">
            <Image
              src={image1.src}
              alt={image1.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Hizmetler */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {districtName} Bölgesinde Sunduğumuz Hizmetler
          </h2>
          <p className="text-gray-600 mb-5">
            <a
              href="https://ankarasepetlivinckirala.com/hizmetler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Platform kiralama hizmetlerimiz
            </a>{' '}
            {districtName} özelinde şu alanlarda yoğunlaşır:
          </p>
          <ul className="space-y-3 mb-12">
            {services.map((s, i) => (
              <li key={i} className="flex gap-3 items-start text-gray-700">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>
                  <strong>{s.title}:</strong> {s.description}
                </span>
              </li>
            ))}
          </ul>

          {/* Komşu İlçeler Grid */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🗺️ Komşu İlçelere de Hizmet Veriyoruz
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {neighbors.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="flex flex-col items-center gap-1 bg-white border border-yellow-300 rounded-xl px-3 py-3 text-sm font-semibold text-gray-800 hover:bg-yellow-100 hover:border-primary transition-colors text-center shadow-sm"
                >
                  <span className="text-2xl">{n.icon ?? '📍'}</span>
                  <span>{n.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Neden Biz */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {whyCards.map((c, i) => (
              <div
                key={i}
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 flex flex-col"
              >
                <span className="text-3xl mb-3">{c.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.description }}
                />
              </div>
            ))}
          </div>

          {/* Fiyat & Güvenlik */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Uygun Fiyat Garantisi ve Güvenlik Standartları
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <a
                href="https://ankarasepetlivinckirala.com/sepetli-vinc-kiralama-fiyatlari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Vinç kiralama fiyatları
              </a>{' '}
              konusunda tam şeffaflık uyguluyoruz: keşif öncesi tahmini fiyat, keşif
              sonrası net yazılı teklif. Saatlik, günlük ve haftalık paketler mevcuttur.
              Operatör ücreti ve iş güvenliği sigortası her pakete dahildir. CE/ISO
              sertifikalı araçlar, MMO onaylı operatörler, OHSAS iş güvenliği tam uyumu.
            </p>
          </div>

          {/* Görsel 2 — responsive */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md mb-12">
            <Image
              src={image2.src}
              alt={image2.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
              className="object-cover"
            />
          </div>

          {/* SSS — Accordion */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-3 mb-12">
            {faq.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <span
                    className={`ml-4 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 py-4 bg-white text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                    <span dangerouslySetInnerHTML={{ __html: item.a }} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* ── WhatsApp / Harita CTA ──────────────────────────────── */}
        <CallToAction title={`${districtName} Bölgesi İçin Vinç Çağırın`} message={ctaMessage} />
      </main>

      <Footer />
      <FloatingCTA />

      {/* ── Mobil Sticky Telefon CTA ──────────────────────────────── */}
      <a
        href="tel:05516066878"
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-primary text-white font-bold text-base py-4 shadow-2xl md:hidden"
        aria-label="Hemen ara 0551 606 68 78"
      >
        📞 Hemen Ara: 0551 606 68 78
      </a>
    </div>
  );
}
