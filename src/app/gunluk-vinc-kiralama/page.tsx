import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: 'Ankara Günlük Vinç Kiralama',
    description: "Ankara günlük vinç kiralama hizmetleri ile tam gün profesyonel kaldırma ve erişim çözümleri.",
    alternates: {
        canonical: `${siteUrl}/gunluk-vinc-kiralama`,
    },
    openGraph: {
        title: 'Ankara Günlük Vinç Kiralama',
        description: "Ankara günlük vinç kiralama hizmetleri ile tam gün profesyonel kaldırma ve erişim çözümleri.",
        url: `${siteUrl}/gunluk-vinc-kiralama`,
    }
};

export default function GunlukVincKiralamaPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmetler', href: '/hizmetler' },
        { label: 'Günlük Vinç Kiralama', href: '/gunluk-vinc-kiralama' },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Günlük Vinç Kiralama',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Ankara Sepetli Vinç',
            url: siteUrl
        },
        description: "Ankara günlük vinç kiralama hizmetleri ile tam gün profesyonel kaldırma ve erişim çözümleri.",
        url: `${siteUrl}/gunluk-vinc-kiralama`
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Ankara Günlük Vinç Kiralama"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-gray-900"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6 mb-6">
                            Ankara Günlük Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
                            Geniş çaplı inşaat şantiyeleri, plaza dış cephe bakım operasyonları gibi mesaisi bitmeyen sabahtan akşama kadar sürecek projelerde yanınızdayız.
                        </p>
                    </div>
                </div>
            </section>

            <main className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Uzun Soluklu Projelerde Yevmiye Modeli</h2>
                            <p>
                                İş yükünün çok ağır olduğu yapılaşma merkezlerinde zaman ve bütçe planlamasının isabetli yapılması şirketin kar oranıyla doğrudan bağlantılıdır. <Link href="/">Ankara vinç kiralama</Link> altyapımızın devasa gövdeli makineleri bu yüzden koca bir mesai gününü o şantiyeye hapsedecek yapılar için, ekstra maliyeti kırpan <strong>Günlük Vinç Kiralama</strong> (yevmiye) tarifesi barındırırlar.
                            </p>

                            <h2>Günlük Vinç İhtiyacı Hangi Hizmetlerde Kaçınılmazdır?</h2>
                            <p>
                                Eğer aracı 4 saatin üzerinde sabitleyip ağır ve ritmik bir tempoyla çalışmanız gerekiyorsa <Link href="/saatlik-vinc-kiralama">saatlik kiralama</Link> modeli bütçenize eksi yönde zarar verecektir. Büyük boyutta işlemlerde daima günlük sistem tercih edilir:
                            </p>
                            <ul>
                                <li><strong>Kompleks Dış Cephe Yalıtımı ve Cam Silimi:</strong> 15, 20 katlı plazaların, bakanlık binalarının temizliği ve silikon yalıtımlarının yenilenmesi günler veya aylar sürer. <Link href="/sepetli-vinc-kiralama">Sepetli vinç</Link> burada iş için demirbaş haline gelir.</li>
                                <li><strong>Özel Etkinlik Organizasyon Konserleri:</strong> Dev ses kolonlarının veya sahne demir mekanizmalarının havaya askılanması.</li>
                                <li><strong>Müstakil Yaşam Konutları ve Villa Projeleri:</strong> Çatı oluk sistemlerinin sıfırdan oluşturulması süreci.</li>
                            </ul>

                            <h2>Anlaşma ve İskonto Avantajları</h2>
                            <p>
                                Bir araç, bulunduğu noktada şantiyeden ayrılmadan <Link href="/operatorlu-vinc-kiralama">operatörlü bir şekilde</Link> mesailere iştirak ediyorsa, kiralama periyodu saatliğin aksine oldukça ucuza mal edilmiş olur. Ayrıca kurumsal departmanlarla aylık veya dönemsel kiralama protokolleri sağlanarak kâr/zarar eğrisinde büyük optimizasyon elde edilebilir. Tüm proje süreçleriniz ve sözleşmeli vinç parkur iskontoları ile ilgili bilgi almak maksadıyla bizlere derhal <Link href="/iletisim">iletisim panosundan</Link> veya doğrudan telefonla ulaşarak fikir danışabilirsiniz.
                            </p>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
                                    Rehber Bağlantılar
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/hizmetler" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Sunulan Tüm Hizmetler →</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Bilgi Merkezine Katıl →</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <div className="bg-gray-50 pb-20">
                <FAQ />
            </div>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
