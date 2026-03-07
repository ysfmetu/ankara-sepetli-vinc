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
    title: 'Ankara Saatlik Vinç Kiralama',
    description: "Ankara'da saatlik vinç kiralama hizmeti ile kısa süreli işler için ekonomik çözümler.",
    alternates: {
        canonical: `${siteUrl}/saatlik-vinc-kiralama`,
    },
    openGraph: {
        title: 'Ankara Saatlik Vinç Kiralama',
        description: "Ankara'da saatlik vinç kiralama hizmeti ile kısa süreli işler için ekonomik çözümler.",
        url: `${siteUrl}/saatlik-vinc-kiralama`,
    }
};

export default function SaatlikVincKiralamaPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmetler', href: '/hizmetler' },
        { label: 'Saatlik Vinç Kiralama', href: '/saatlik-vinc-kiralama' },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Saatlik Vinç Kiralama',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Ankara Sepetli Vinç',
            url: siteUrl
        },
        description: "Ankara'da saatlik vinç kiralama hizmeti ile kısa süreli işler için ekonomik çözümler.",
        url: `${siteUrl}/saatlik-vinc-kiralama`
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
                        alt="Ankara Saatlik Vinç Kiralama"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-gray-900"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6 mb-6">
                            Ankara Saatlik Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
                            Ufak tefek işler için günlüğü bloklamaya gerek kalmadan, sadece ihtiyacınız olan süre kadar ödeyeceğiniz, seri ve verimli kiralama metodu.
                        </p>
                    </div>
                </div>
            </section>

            <main className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Kısa Metraj, Hızlı İşlem!</h2>
                            <p>
                                İrili ufaklı şirketlerin ve dükkân sahiplerinin en çok başvurduğu <Link href="/">Ankara vinç kiralama</Link> paketimiz olan saatlik kiralama, gün boyu bekleyerek boşa bütçe israfı yaşanmaması için oluşturulmuştur. Makine parkurundan şantiyenize kadar hızla yönlenen filomuz en acil taleplere saniyeler içinde cevap verebilmenin garantisini sunar.
                            </p>

                            <h2>Saatlik Sepetli Vinç Kiralamanın Sıklıkla Kullanıldığı Yerler</h2>
                            <p>
                                Ankara'daki yoğun tempoda pek çok müdahale pratik bitmek zorundadır. <Link href="/sepetli-vinc-kiralama">Sepetli vinç</Link> mekaniği bu aşamada aşağıdaki hizmetlerde başı çeker:
                            </p>
                            <ul>
                                <li><strong>Tabela ve Pano:</strong> Rüzgardan kopmuş tehlikeli sallanan totem bir tabelanın anlık vida yenilemesi.</li>
                                <li><strong>Sokak Lambası ve Sensör:</strong> Dükkân alarm sistemlerinin veya pır sensör arızalarının yarım saatlik müdahale süresinde çözümlenmesi.</li>
                                <li><strong>Ağaç Tahliyesi:</strong> Arabaların veya yayaların üzerine çok fazla esnemiş çınar ya da kavak dallarının ivedilikle <Link href="/hizmetler">kesim hizmetleriyle</Link> uzaklaştırılması.</li>
                            </ul>

                            <h2>Nasıl Hesaplanır?</h2>
                            <p>
                                Genel olarak <Link href="/operatorlu-vinc-kiralama">operatörlü kiraladığınız</Link> araç, merkezinizden hareket edip deponunuza ulaştığı an itibariyle minimum servis bedeli ile sürece başlar ve 1, 2, veya 3 saatlik taksimetre dilimleriyle size en ideal ve net maliyeti çıkarır. Randevunuzu önceden rezerve etmek için daima profesyonel çağrı ekibimizle <Link href="/iletisim">iletişim</Link> içerisinde bulunmanız tavsiye edilir.
                            </p>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
                                    Paketler & Seçenekler
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/gunluk-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>İşim Uzun Sürer, Günlük Kirala →</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sepetli-vinc-kiralama-fiyatlari" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Fiyat Listesine Göz Atın →</span>
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
