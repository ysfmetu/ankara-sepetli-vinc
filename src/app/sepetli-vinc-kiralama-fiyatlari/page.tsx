import { Metadata } from 'next';
import Link from 'next/link';
import {
    PhoneCall,
    Info,
    Clock,
    CalendarDays,
    Repeat,
    HardHat,
    ArrowUpFromLine,
    MapPin,
    CheckCircle2,
    MessageCircle,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

import { getMetadataAlternates } from '@/lib/seo-utils';
import { SEO_CONFIG } from '@/config/seo';
import PricingFAQ from './PricingFAQ';

/* ─────────────────────── METADATA ─────────────────────── */

export const metadata: Metadata = {
    title: {
        absolute: 'Ankara Sepetli Vinç Kiralama Fiyatları 2026 | Saatlik ve Günlük',
    },
    description:
        'Ankara sepetli vinç kiralama fiyatları 2026: saatlik ve günlük kiralama seçenekleri, fiyatı belirleyen faktörler ve operatörlü hizmet detayları. Teklif alın.',
    alternates: getMetadataAlternates('/sepetli-vinc-kiralama-fiyatlari'),
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Ankara Sepetli Vinç Kiralama Fiyatları 2026',
        url: 'https://ankarasepetlivinckirala.com/sepetli-vinc-kiralama-fiyatlari',
        type: 'website',
        siteName: SEO_CONFIG.siteName,
        locale: SEO_CONFIG.locale,
    },
};

/* ─────────────────────── DATA ─────────────────────── */

const PHONE_DISPLAY = '0 551 606 68 78';
const PHONE_TEL = 'tel:+905516066878';
const WHATSAPP_URL = 'https://wa.me/905516066878';

const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Sepetli Vinç Kiralama Fiyatları', href: '/sepetli-vinc-kiralama-fiyatlari' },
];

const faqItems = [
    {
        question: 'Ankara sepetli vinç kiralama fiyatları neye göre belirlenir?',
        answer: 'Fiyatlar; çalışma yüksekliği, araç tipi, kiralama süresi (saatlik veya günlük), çalışma yapılacak ilçe ve ulaşım mesafesi, zemin şartları, gece çalışması durumu ve işin risk seviyesine göre belirlenmektedir. Her projenin kendine özgü koşulları olduğu için sabit bir tarife uygulanmaz; ücretsiz keşif sonrası net fiyat teklifi sunulur.',
    },
    {
        question: 'Saatlik sepetli vinç kiralamak mümkün mü?',
        answer: 'Evet, kısa süreli işler için saatlik kiralama seçeneğimiz mevcuttur. Tabela montajı, aydınlatma direği tamiri, acil ağaç budama gibi 1-3 saat sürecek operasyonlarda saatlik paket en ekonomik tercihtir. Minimum sevk süresi uygulanabilir.',
    },
    {
        question: 'Günlük kiralama hangi işler için daha avantajlıdır?',
        answer: 'Dış cephe boyama, mantolama, çok katlı bina cam silimi veya büyük tabela montajı gibi sabahtan akşama kadar sürecek projelerde günlük kiralama tercih edilmelidir. Saatlik ücretin toplamına kıyasla günlük pakette önemli oranda iskonto sağlanır.',
    },
    {
        question: 'Operatör hizmeti kiralamaya dahil mi?',
        answer: 'Evet, ASV Ankara Sepetli Vinç olarak tüm kiralama paketlerimiz sertifikalı operatör dahil şekilde sunulmaktadır. Sepetli vinci operatörsüz kiralamak yasal mevzuata uygun değildir; tüm araçlarımız deneyimli operatörlerimiz eşliğinde çalışır.',
    },
    {
        question: 'Kaç metrelik sepetli vinç kiralamalıyım?',
        answer: 'Doğru metraj seçimi bütçenizi doğrudan etkiler. Projeniz için gerekenden büyük bir araç kiralamak gereksiz maliyet oluşturur. Çalışma adresinizi, tahmini yüksekliği ve yapılacak işi bize bildirdiğinizde en uygun aracı öneriyoruz. Ücretsiz keşif hizmetimizden faydalanabilirsiniz.',
    },
    {
        question: 'Kesin fiyat teklifi almak için hangi bilgiler gerekir?',
        answer: 'Çalışma adresi, tahmini yükseklik, yapılacak iş, tahmini çalışma süresi, aracın kurulacağı alanın fotoğrafı ve yol/zemin durumu gibi bilgileri paylaşmanız, hızlı ve doğru fiyat teklifi almak için yeterlidir.',
    },
    {
        question: "Ankara'nın ilçelerine araç gönderiliyor mu?",
        answer: "Evet, Ankara\'nın tüm merkez ve çevre ilçelerine araç sevkiyatı yapılmaktadır. Çankaya, Yenimahalle, Etimesgut, Keçiören, Sincan, Ostim, Mamak, Altındağ, Pursaklar ve daha birçok bölgeye hızlı ulaşım sağlıyoruz. Stratejik garaj noktalarımız sayesinde merkezden uzak ilçelere de kısa sürede intikal mümkündür.",
    },
];

const pricingOptions = [
    {
        icon: Clock,
        title: 'Saatlik Sepetli Vinç Kiralama',
        description:
            'Tabela montajı, aydınlatma direği tamiri, acil ağaç budama gibi 1-3 saat sürecek kısa operasyonlar için en ekonomik seçenek. Minimum sevk süresi uygulanabilir.',
    },
    {
        icon: CalendarDays,
        title: 'Günlük Sepetli Vinç Kiralama',
        description:
            'Dış cephe boyama, mantolama, cam silimi gibi sabahtan akşama sürecek planlı mesailer için idealdir. Saatlik ücretin toplamına kıyasla önemli iskonto sağlanır.',
    },
    {
        icon: Repeat,
        title: 'Uzun Süreli Kiralama',
        description:
            'Haftalık veya aylık periyotlarda büyük inşaat projeleri, periyodik bakım sözleşmeleri ve kurumsal şantiye tahsisleri için en yüksek iskonto oranları uygulanır.',
    },
    {
        icon: HardHat,
        title: 'Operatörlü Sepetli Vinç Kiralama',
        description:
            'Tüm kiralama paketlerimiz sertifikalı operatör dahildir. Deneyimli operatörlerimiz aracı güvenle kullanır ve iş güvenliği standartlarına uygun çalışır.',
    },
    {
        icon: ArrowUpFromLine,
        title: 'Yüksek Metrajlı Araç Kiralama',
        description:
            'Plaza, gökdelen, viyadük ve stadyum çatısı gibi büyük projelere özel 50-75 metre kapasiteli platformlar. Geniş ve açık şantiyelere tahsis edilir.',
    },
];

/* ─────────────────────── PAGE ─────────────────────── */

export default function SepetliVincKiralamaFiyatlariPage() {
    /* ── JSON-LD: Service ── */
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ankara Sepetli Vinç Kiralama',
        description:
            'Ankara genelinde saatlik, günlük ve uzun süreli operatörlü sepetli vinç kiralama hizmeti. 10 metreden 75 metreye kadar farklı kapasitelerde araç filosu.',
        provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://ankarasepetlivinckirala.com/#business',
        },
        areaServed: {
            '@type': 'City',
            name: 'Ankara',
        },
        serviceType: 'Sepetli Vinç Kiralama',
    };

    /* ── JSON-LD: FAQPage ── */
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* JSON-LD Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <Header />

            {/* ━━━ HERO SECTION ━━━ */}
            <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-28">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Ankara sepetli vinç kiralama fiyatları arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-6 mb-6">
                            Ankara Sepetli Vinç Kiralama Fiyatları 2026
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed font-light">
                            Saatlik ve günlük kiralama seçenekleri, fiyatı belirleyen faktörler ve operatörlü hizmet detaylarıyla Ankara genelinde şeffaf fiyatlandırma.
                        </p>
                        <p className="text-sm text-gray-400 mb-8">
                            Son Güncelleme:{' '}
                            <time dateTime="2026-07-19" className="font-medium text-gray-300">
                                19 Temmuz 2026
                            </time>
                        </p>

                        {/* ── CTA: Hero ── */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <a
                                href={PHONE_TEL}
                                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30 text-sm sm:text-base"
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span>Hemen Ara: {PHONE_DISPLAY}</span>
                            </a>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>WhatsApp&apos;tan Teklif Al</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━ MAIN CONTENT ━━━ */}
            <main className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                        {/* ── Article ── */}
                        <article className="lg:w-2/3 space-y-12">
                            {/* ── 1. Giriş Alanı ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                    Sepetli Vinç Kiralama Fiyatları Neden Sabit Değildir?
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Ankara sepetli vinç kiralama fiyatları, tek bir sabit rakamdan oluşmaz. Her projenin kendine özgü koşulları fiyatı doğrudan etkiler. Çalışma yüksekliği, araç tipi, kiralama süresi, çalışma yapılacak ilçe ve ulaşım mesafesi, zemin şartları ve işin risk durumu gibi birçok değişken fiyatlandırmayı belirleyen temel faktörlerdir.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    2026 yılı itibarıyla güncellenen amortisman hesaplamaları, yakıt giderleri ve işçi sigortaları neticesinde değişen maliyet tablosu, kiralama sektöründe de birtakım yeni standartları beraberinde getirmiştir. Geleneksel iskelelerden farklı olarak mobil platformlar hızla kurulup toplandığı için dolaylı yoldan binlerce liralık işçilik süresi tasarrufu sağlamaktadır.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    ASV Ankara Sepetli Vinç olarak şeffaflık ilkemiz gereği, fiyatı etkileyen tüm faktörleri bu sayfada detaylı şekilde açıklıyoruz. Amacımız projenize uygun bütçeyi doğru planlamanız için size net bir çerçeve sunmaktır.
                                </p>
                            </section>

                            {/* ── 2. 2026 Fiyatlandırma Seçenekleri ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                    2026 Fiyatlandırma Seçenekleri
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {pricingOptions.map((option, index) => {
                                        const Icon = option.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col gap-3 p-5 sm:p-6 bg-gray-50 border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                        <Icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                                                        {option.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {option.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <div className="flex gap-3">
                                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                                        <p className="m-0 text-sm text-blue-900">
                                            Fiyat; araç yüksekliği, çalışma süresi, lokasyon ve işin niteliğine göre belirlenmektedir. Projenize özel net fiyat teklifi almak için bizimle iletişime geçin.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 3. Fiyatı Belirleyen Faktörler ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                    Fiyatı Belirleyen Faktörler
                                </h2>
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            1. Çalışma Yüksekliği ve Araç Metrajı
                                        </h3>
                                        <p className="mb-3">
                                            Fiyatı belirleyen en önemli unsur vincin çalışma kapasitesidir. Araç ne kadar yüksek çıkabiliyorsa, motor gücü, amortisman ve bakım maliyeti o oranda artar. Her vincin kapasitesi ve saatlik yakıt sarfiyatı farklıdır.
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                            <li><strong>15-25 metre arası (kompakt araçlar):</strong> Standart apartman dış cepheleri, tabela montajı ve ağaç budama için idealdir. En ekonomik seçenektir.</li>
                                            <li><strong>30-45 metre arası (orta sınıf):</strong> Dış cephe izolasyonları ve orta ölçekli binalarda kullanılır. Büyük şaseli kamyonlar üzerinde oldukları için maliyet bir kademe yükselir.</li>
                                            <li><strong>50-75 metre arası (yüksek kapasite):</strong> Viyadük, plaza ve büyük projelere özel platformlardır. Saatlik ve günlük bedelleri en yüksek baremi temsil eder.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            2. Saatlik veya Günlük Çalışma Süresi
                                        </h3>
                                        <p>
                                            Kısa süreli işlerde saatlik, tam gün sürecek projelerde günlük kiralama tercih edilir. Günlük pakette saatlik ücretin toplamına göre önemli oranda iskonto sağlanır. Haftalık ve aylık kiralama sözleşmelerinde birim saatlik maliyet çok daha düşük seviyelere inebilir.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            3. Çalışma Yapılacak İlçe ve Ulaşım Mesafesi
                                        </h3>
                                        <p>
                                            Aracın garajdan şantiyeye ulaşma süresi yakıt maliyetini etkiler. Ankara merkez ilçelerdeki (Çankaya, Yenimahalle, Keçiören) garaj noktalarımız sayesinde çoğu projede bu ek masrafı minimize ediyoruz. Şehir dışı veya uzak ilçelere yapılan sevklerde ufak bir nakliye katkı payı uygulanabilir.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            4. Yol Genişliği ve Aracın Konumlandırılması
                                        </h3>
                                        <p>
                                            Dar sokaklarda çalışılması gerektiğinde kompakt araçlar tercih edilir. Büyük şaseli araçların geniş ve açık alanlara ihtiyacı vardır; aracın yerleşim koşulları operasyonun süresini ve dolayısıyla maliyeti etkileyebilir.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            5. Zemin ve Dengeleme Şartları
                                        </h3>
                                        <p>
                                            Vincin kurulacağı alanın eğimi ve taşıma kapasitesi önemlidir. Toprak zeminler için farklı, beton veya asfalt zeminler için farklı destek padlerine (stabilizatör) sahip araçlar gerekebilir. Ankara ilçelerinin birçoğunda eğimli zemin koşulları mevcuttur.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            6. Gece Çalışması veya Acil Sevkiyat
                                        </h3>
                                        <p>
                                            Gece yapılacak çalışmalarda operatör fazla mesai ücreti ve ek aydınlatma ihtiyacı maliyeti artırabilir. Hafta sonu veya resmi tatil günlerindeki acil çağrılarda da ek ücret uygulanabilir.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            7. Operatör ve Yardımcı Personel İhtiyacı
                                        </h3>
                                        <p>
                                            Tüm kiralama paketlerimiz sertifikalı operatör dahildir. Bazı projelerde ek yardımcı personel gerekebilir; bu durum maliyete yansıyabilir. Operatörün platformu açmaya başladığı an itibariyle süreç başlatılır.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            8. İşin Risk Seviyesi
                                        </h3>
                                        <p>
                                            Askeri alan, havaalanı çevresi gibi özel izin gerektiren lokasyonlarda ek bürokratik süreçler maliyeti etkileyebilir. Yüksek riskli çalışma ortamlarında (şiddetli rüzgar, eğimli arazi) ek güvenlik önlemleri gerekebilir.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            9. Uzun Süreli Kiralamalarda Fiyat Avantajı
                                        </h3>
                                        <p>
                                            Büyük inşaat projelerinde veya periyodik bakım sözleşmelerinde en yüksek iskonto oranları uygulanır. Aylık veya yıllık uzun periyotlu şantiye taahhüt anlaşmalarında çok daha ekonomik filo indirim avantajları sunulmaktadır.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 4. Doğru Araç Seçimi ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                    Doğru Araç Seçimi ile Bütçenizi Koruyun
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    İhtiyacınız 15 metre ise 45 metrelik bir araç çağırmak gereksiz maliyet oluşturur. Makinenin devasa motoru ve yüksek hidrolik yakıt sarfiyatı faturanızı lüzumsuz yere kabarır. İşinizi çözecek en uygun kapasiteli aracı kiralayarak bütçenizi optimize edin.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    ASV Ankara Sepetli Vinç olarak ücretsiz keşif hizmetimizle doğru araç tespiti yapıyoruz. Teklif alırken aşağıdaki bilgileri paylaşmanız sürecin hızlanmasını sağlar:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Çalışma adresi',
                                        'Tahmini yükseklik',
                                        'Yapılacak iş',
                                        'Tahmini çalışma süresi',
                                        'Aracın kurulacağı alanın fotoğrafı',
                                        'Yol ve zemin durumu',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* ── CTA: Mid-page ── */}
                            <section className="bg-primary/5 p-6 sm:p-8 rounded-2xl border border-primary/20 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    Ücretsiz Fiyat Teklifi Alın
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm sm:text-base">
                                    Sürpriz ekstra ücretler olmadan, doğrudan makine parkurumuzun sahibi olan ASV Ankara Sepetli Vinç&apos;ten net rakamları öğrenin.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-3">
                                    <a
                                        href={PHONE_TEL}
                                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-colors text-sm sm:text-base"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        <span>Hemen Ara</span>
                                    </a>
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3 rounded-xl font-bold transition-colors text-sm sm:text-base"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <span>WhatsApp&apos;tan Teklif Al</span>
                                    </a>
                                </div>
                            </section>

                            {/* ── 5. Saatlik mi Günlük mü? ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                    Saatlik mi Günlük mü? Karşılaştırma
                                </h2>
                                <div className="overflow-x-auto -mx-2 sm:mx-0">
                                    <table className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="border border-gray-200 px-3 sm:px-5 py-3 text-left font-bold text-gray-900 whitespace-nowrap">
                                                    Kriter
                                                </th>
                                                <th className="border border-gray-200 px-3 sm:px-5 py-3 text-left font-bold text-gray-900 whitespace-nowrap">
                                                    Saatlik Kiralama
                                                </th>
                                                <th className="border border-gray-200 px-3 sm:px-5 py-3 text-left font-bold text-gray-900 whitespace-nowrap">
                                                    Günlük Kiralama
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="even:bg-gray-50">
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 font-medium text-gray-900">
                                                    Uygun olduğu işler
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Tabela montajı, aydınlatma tamiri, acil ağaç budama
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Dış cephe boyama, mantolama, çok katlı cam silimi
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 font-medium text-gray-900">
                                                    Çalışma süresi
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    1-3 saat (minimum sevk süresi uygulanabilir)
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Tam gün (genellikle 08:30 – 17:30)
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 font-medium text-gray-900">
                                                    Avantajı
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Kısa işlerde en düşük toplam maliyet
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Uzun işlerde birim saatlik maliyette önemli iskonto
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 font-medium text-gray-900">
                                                    Fiyatlandırma yöntemi
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Saat bazlı ücretlendirme
                                                </td>
                                                <td className="border border-gray-200 px-3 sm:px-5 py-3 text-gray-700">
                                                    Paket yevmiye ücreti
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <div className="flex gap-3">
                                        <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <p className="m-0 text-sm text-blue-900">
                                            Saatlik kiralama yaparken, aracın size ulaşma süresi değil, <strong>şantiyeye intikal ettikten sonra operatörün platformu açmaya başladığı an</strong> itibariyle süreç başlatılır.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 6. Hizmet Kapsamı ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                    Hizmet Kapsamı
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        ASV Ankara Sepetli Vinç olarak tüm kiralama paketlerimiz <strong>sertifikalı operatör dahil</strong> şekilde sunulmaktadır. Aracı operatörsüz kiralamak yasal mevzuata uygun değildir; araçlarımız deneyimli operatörlerimiz eşliğinde güvenle çalışır.
                                    </p>
                                    <p>
                                        Filomuzda bulunan tüm araçlar <strong>periyodik bakım takvimlerine</strong> uygun şekilde kontrol edilir. Stabilizatör (ayak) mekanizmaları, rüzgar denge sensörleri ve hidrolik emniyet sistemleri düzenli olarak denetlenir.
                                    </p>
                                    <p>
                                        Projenize en uygun çözümü sunmak için <strong>ücretsiz keşif ve çalışma planlaması</strong> hizmeti sağlıyoruz. Çalışma sahasının fotoğrafını, aracın park edeceği alanın boyutlarını ve işin kapsamını değerlendirerek en doğru aracı ve kiralama modelini öneriyoruz.
                                    </p>
                                </div>
                            </section>

                            {/* ── 7. Hizmet Bölgeleri ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                    Hizmet Bölgeleri
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Ankara&apos;nın büyük ilçelerinde stratejik garaj noktalarımız sayesinde hızlı sevkiyat ve uygun fiyatlı hizmet sunuyoruz. Aracın garajdan iş sahasına erken ulaşması, boşa giden saatlerin önüne geçerek toplam maliyetinizi düşürür.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { label: 'Çankaya sepetli vinç kiralama', href: '/bolgeler/cankaya-sepetli-vinc-kiralama' },
                                        { label: 'Yenimahalle sepetli vinç kiralama', href: '/bolgeler/yenimahalle-sepetli-vinc-kiralama' },
                                        { label: 'Etimesgut sepetli vinç kiralama', href: '/bolgeler/etimesgut-sepetli-vinc-kiralama' },
                                        { label: 'Keçiören sepetli vinç kiralama', href: '/bolgeler/kecioren-sepetli-vinc-kiralama' },
                                        { label: 'Sincan sepetli vinç kiralama', href: '/bolgeler/sincan-sepetli-vinc-kiralama' },
                                        { label: 'Ostim sepetli vinç kiralama', href: '/bolgeler/ostim-sepetli-vinc-kiralama' },
                                    ].map((region) => (
                                        <Link
                                            key={region.href}
                                            href={region.href}
                                            className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors p-3 rounded-lg border border-gray-100 hover:border-primary/30 group"
                                        >
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                {region.label}
                                            </span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* ── 8. İlgili Hizmetler ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                    İlgili Hizmetler
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    İhtiyacınıza en uygun kiralama modelini detaylı incelemek için aşağıdaki hizmet sayfalarımızı ziyaret edebilirsiniz:
                                </p>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/hizmetler/saatlik-vinc-kiralama" className="text-primary hover:text-primary-hover font-medium underline underline-offset-2">
                                            Saatlik vinç kiralama
                                        </Link>{' '}
                                        <span className="text-gray-500 text-sm">— Kısa süreli operasyonlar için ideal</span>
                                    </li>
                                    <li>
                                        <Link href="/hizmetler/gunluk-vinc-kiralama" className="text-primary hover:text-primary-hover font-medium underline underline-offset-2">
                                            Günlük vinç kiralama
                                        </Link>{' '}
                                        <span className="text-gray-500 text-sm">— Tam gün sürecek projeler için avantajlı</span>
                                    </li>
                                    <li>
                                        <Link href="/hizmetler/operatorlu-vinc-kiralama" className="text-primary hover:text-primary-hover font-medium underline underline-offset-2">
                                            Operatörlü vinç kiralama
                                        </Link>{' '}
                                        <span className="text-gray-500 text-sm">— Sertifikalı operatör dahil güvenli hizmet</span>
                                    </li>
                                    <li>
                                        <Link href="/hizmetler/sepetli-vinc-kiralama" className="text-primary hover:text-primary-hover font-medium underline underline-offset-2">
                                            Sepetli vinç kiralama
                                        </Link>{' '}
                                        <span className="text-gray-500 text-sm">— Tüm kiralama seçeneklerinin genel rehberi</span>
                                    </li>
                                </ul>
                            </section>

                            {/* ── 9. SSS ── */}
                            <section className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                    Sıkça Sorulan Sorular
                                </h2>
                                <PricingFAQ items={faqItems} />
                            </section>

                            {/* ── 10. CTA: Bottom ── */}
                            <section className="bg-gray-900 text-white p-6 sm:p-8 md:p-10 rounded-2xl text-center">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                                    Projenize Özel Fiyat Teklifi Alın
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-lg mx-auto text-sm sm:text-base">
                                    Çalışma adresinizi ve yapılacak işi bildirin, ASV Ankara Sepetli Vinç olarak size en uygun aracı ve fiyatı önerelim.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-3">
                                    <a
                                        href={PHONE_TEL}
                                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-colors text-sm sm:text-base"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        <span>Hemen Ara: {PHONE_DISPLAY}</span>
                                    </a>
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3 rounded-xl font-bold transition-colors text-sm sm:text-base"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <span>WhatsApp&apos;tan Teklif Al</span>
                                    </a>
                                </div>
                                <p className="text-gray-400 mt-4 text-sm">
                                    <a href={PHONE_TEL} className="text-gray-300 hover:text-white transition-colors">
                                        {PHONE_DISPLAY}
                                    </a>
                                </p>
                            </section>
                        </article>

                        {/* ── Right Sidebar ── */}
                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            {/* Hizmet Bölgeleri Widget */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                                    Merkez Hizmet Ağımız
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/bolgeler/cankaya-sepetli-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Çankaya Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bolgeler/ostim-sepetli-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Ostim Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bolgeler/etimesgut-sepetli-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Etimesgut Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bolgeler/sincan-sepetli-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Sincan Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bolgeler/kecioren-sepetli-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Keçiören Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bolgeler/yenimahalle-sepetli-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Yenimahalle Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                </ul>

                                {/* Sidebar CTA */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <a
                                        href={PHONE_TEL}
                                        className="block w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-center transition-all"
                                    >
                                        Ücretsiz Fiyat Teklifi Al
                                    </a>
                                </div>
                            </div>

                            {/* Kurumsal İskontolar */}
                            <div className="bg-gray-900 text-white rounded-2xl border border-gray-800 p-6 text-center shadow-xl">
                                <Repeat className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold mb-2">Kurumsal İskontolar</h4>
                                <p className="text-sm text-gray-300 mb-6 font-light">
                                    Aylık veya yıllık uzun periyotlu şantiye taahhüt anlaşmalarında ekonomik filo indirim avantajları sunuyoruz. Projenize özel maliyeti hesaplayalım.
                                </p>
                                <a
                                    href={PHONE_TEL}
                                    className="block w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-bold transition-all"
                                >
                                    Projeye Özel Keşif İste
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
