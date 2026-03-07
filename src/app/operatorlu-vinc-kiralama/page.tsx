import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, CheckCircle, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: 'Ankara Operatörlü Vinç Kiralama',
    description: "Ankara operatörlü vinç kiralama hizmetleri ile güvenli ve profesyonel kaldırma çözümleri.",
    alternates: {
        canonical: `${siteUrl}/operatorlu-vinc-kiralama`,
    },
    openGraph: {
        title: 'Ankara Operatörlü Vinç Kiralama',
        description: "Ankara operatörlü vinç kiralama hizmetleri ile güvenli ve profesyonel kaldırma çözümleri.",
        url: `${siteUrl}/operatorlu-vinc-kiralama`,
    }
};

export default function OperatorluVincKiralamaPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmetler', href: '/hizmetler' },
        { label: 'Operatörlü Vinç Kiralama', href: '/operatorlu-vinc-kiralama' },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Operatörlü Vinç Kiralama',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Ankara Sepetli Vinç',
            url: siteUrl
        },
        description: "Ankara operatörlü vinç kiralama hizmetleri ile güvenli ve profesyonel kaldırma çözümleri.",
        url: `${siteUrl}/operatorlu-vinc-kiralama`
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
                        alt="Ankara Operatörlü Vinç Kiralama"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6 mb-6">
                            Ankara Operatörlü Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
                            G Sınıfı iş makinesi ehliyetli ve sayısız saha mesaisi tamamlamış sertifikalı operatörlerimiz eşliğinde vinciniz projenizin güvenli kanadı olsun.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Article */}
            <main className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Operatörlü Vinç Kiralama Sisteminin Kritik Önemi</h2>
                            <p>
                                İleri yapılaşma hamleleriyle şekillenen <Link href="/">Ankara vinç kiralama</Link> sektöründe, makinenin ne kadar güçlü olduğundan bağımsız olarak, aracı idare eden teknik personelin deneyimi tüm iş akışının zembereğidir. Dikey ve yatay tonaj kaldırma, saniyeden küçük rüzgar direnç hesaplamaları yüksek katlı binalarda can kurtaran detaylardır. Bu nedenle sadece araç teslimi yapmaz; bizzat vincin kokpitinde ter dökecek, tüm projenizin sorumluluğunu alacak sertifikalı operatör arkadaşlarımızı filomuza entegre ederiz.
                            </p>

                            <div className="my-8 bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4 items-start">
                                <Shield className="w-10 h-10 text-blue-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-bold text-blue-900 m-0 mb-2">Tam Sigortalı, Sıfır Risk Hareketi</h4>
                                    <p className="m-0 text-blue-800 text-sm">
                                        Vinç sahanızdaki her bir çalışma anı, yasal emniyet protokollerimizle güvence altındadır. İşveren olarak aracı kimin kullanacağını dert etmenize gerek kalmaz, tek yetkili daima kurumumuza bağlı tecrübeli operatördür.
                                    </p>
                                </div>
                            </div>

                            <h2>Operatörlerimiz Hangi Alanlarda Yanınızda?</h2>
                            <p>
                                <Link href="/sepetli-vinc-kiralama">Sepetli vinç kiralama ankara</Link> taleplerinin hemen hemen tamamına operatörlü hizmet eşlik eder. Peki teknik personelimiz nerelerde müdahale sağlar?
                            </p>
                            <ul className="list-none space-y-4 pl-0">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <span><strong>Zorlu Köşe Dönüşleri ve Manevralar:</strong> Dar sokaklarda tabelacılar veya elektrikçiler vinç kolunu manevra ettirirken devasa kazalara gebe olabilir. Operatörümüz santimetrik hassasiyetle yükü yerine kilitler.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <span><strong>Anlık Teknik Arızalara Karşı Refleks:</strong> Hidrolik kaçaklar veya rüzgarın aniden şiddetlenmesi gibi doğal risk uyarıcılara karşı sistemin anında durdurulması ya da güvenli iniş mekanizmalarının devreye sokulması ancak yılların şantiye tecrübesiyle mümkündür.</span>
                                </li>
                            </ul>

                            <h2>Kiralama Süresince Rehberlik Edebilir mi?</h2>
                            <p>
                                Evet. Özellikle dış cephe yalıtım ve <Link href="/hizmetler">hizmetlerimizdeki</Link> mantolama periyotlarında, sepetli platform içerisine yükleme yapılırken kapasite aşımlarına profesyonellerimiz karar verir ve "iş iptali" yetkisine sahip olarak daima can güvenliğinizi asgari koruma limitlerinin üstünde tutarlar.
                            </p>

                            <p>
                                Ankara'nın neresinde olursanız olun sevk talep etmek ve kurumsal planlamanızı ekspertize aktarmak için resmi <Link href="/iletisim">iletisim</Link> ağımızdan bizi saniyeler içinde yetkilendirebilirsiniz.
                            </p>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
                                    Diğer Modeller
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/saatlik-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Saatlik Kiralamalar →</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gunluk-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Günlük Vinç İhtiyacı →</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {/* FAQ Block */}
            <div className="bg-gray-50 pb-20">
                <FAQ />
            </div>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
