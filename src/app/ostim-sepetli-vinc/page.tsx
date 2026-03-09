import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, ShieldCheck, Factory } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
    title: 'Ostim Sepetli Vinç | Organize Sanayi Kiralık Platform',
    description: 'Ankara Ostim endüstri ve sanayi bölgesinde kurumsal sepetli vinç kiralama hizmetleri. 7/24 saatlik ve günlük platform kiralama.',
    alternates: {
        canonical: `${siteUrl}/ostim-sepetli-vinc`,
    },
};

export default function OstimSepetliVincPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Ostim Sepetli Vinç', href: '/ostim-sepetli-vinc' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Ostim Sepetli Vinç Kiralama arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-6 mb-4">
                            Ostim Sepetli Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Ostim Organize Sanayi Bölgesi ve civar tesisler için acil veya proje bazlı sepetli vinç, hiyap platform kiralama çözümleri. Operatörlü, sigortalı ve hızlı hizmet.
                        </p>
                        <a
                            href="tel:+905320000000"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>Ostim Vinç Çağır: 0532 000 00 00</span>
                        </a>
                    </div>
                </div>
            </section>

            <main className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Ostim Sanayi Bölgesi İçin İdeal Vinç Çözümleri</h2>
                            <p>
                                Türkiye'nin ve Ankara'nın en büyük sanayi merkezlerinden biri olan Ostim (Ortadoğu Sanayi ve Ticaret Merkezi), devasa fabrikalara, imalathanelere ve üretim tesislerine ev sahipliği yapmaktadır. Metrekarelerce alana yayılan bu devasa kapalı fabrika sahalarında ve depoların yüksek çatılarında sıklıkla bakım onarım işleri gerekmektedir. Firmamız, sanayi üretimini durdurmadan hızlı müdahale sağlayan profesyonel <strong>Ostim sepetli vinç kiralama</strong> hizmetleriyle sanayicimizin çözüm ortağıdır.
                            </p>

                            <hr className="my-6" />

                            <h2>Ostim'de Sepetli Vinç Hangi İşlerde Kullanılır?</h2>
                            <p>
                                Fabrika ve endüstriyel sahalarda <Link href="/ankara-sepetli-vinc-kiralama">Ankara sepetli vinç kiralama</Link> sistemlerimiz birçok kritik senaryoda hayat kurtarır.
                            </p>
                            <ul>
                                <li><strong>Fabrika Çatı İzolasyon ve Onarımı:</strong> Depo ve üretim alanlarında akıtan, rüzgârdan devrilen veya izolasyonu zayıflayan çelik konstrüksiyonlu veya sandviç panelli çatıların güvenli bakımı.</li>
                                <li><strong>Ağır Makine Montaj ve Demontajı:</strong> Yüksek tavanlı fabrikaların içine sarkılarak yapılacak tavan vinci gergilerinin periyodik bakımları veya baca temizlik süreçleri.</li>
                                <li><strong>Dış Cephe ve Tabela Kurulumları:</strong> Sanayi sitelerinde dükkân üstlerine yerleştirilen devasa kompozit dış cephe sistemleri, ışıklı totem tabela kurulumları.</li>
                                <li><strong>Aydınlatma ve CCTV Kamera Tesisatı:</strong> Yüksek gerilim panolarına bakım yapmak ve depo güvenlik kameralarını stratejik tavan noktalarına güvenle monte etmek.</li>
                            </ul>

                            <hr className="my-6" />

                            <h2>Neden Ostim İçin Bizi Tercih Etmelisiniz?</h2>
                            <p>
                                Organize sanayi bölgelerinde zaman kaybı sadece nakit kaybı anlamına gelmez, tüm üretim bandını aksatır. Ostim'e son derece yakın garaj noktamız sayesinde, dakikalar içerisinde filomuz kapınıza dayanır. Makinemizin şantiyeye intikal şoförlüğünü yapan tüm personellerimiz G sınıfı operatör belgelerine ve yüksekte çalışma risk analiz sertifikalarına sahiptir.
                            </p>
                            <p>
                                İhtiyacınıza en uygun metrajı tahmin ederek saatlik kiralama veya uzun proje günlük / haftalık indirimli sözleşmeler gibi <Link href="/sepetli-vinc-kiralama-fiyatlari">uygun sepetli vinç kiralama fiyatları</Link> sunmaktayız. İşletme girişlerinin dar veya sundurmalı olduğu kapalı alanlarda kullanıma uygun örümcek platformlardan, devasa 75 litrelik kamyon üstü teleskopik vinçlere kadar, tamamı son teknolojiyle donatılmış, TMMOB periyodik ve ağır bakımları güncel bir makine yelpazemiz mevcuttur. Sadece üretim için uğraşın, yüksekteki zorlukları güvenle bize bırakın.
                            </p>

                            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl flex flex-col items-center text-center">
                                <Factory className="w-10 h-10 text-blue-500 mb-3" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Ostim'de Sepetli Vinç İşiniz Mi Var?</h4>
                                <p className="mb-4 text-gray-700">Ostim sanayisine 7 gün 24 saat acil hizmet verebilen çağrı merkezimizi arayın, işiniz yarım kalmasın.</p>
                                <a href="tel:+905320000000" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-bold">
                                    <PhoneCall className="w-5 h-5" /> 0532 000 00 00
                                </a>
                            </div>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Sıfır İş Kazası Prensibi</h4>
                                <p className="text-sm text-gray-600 mb-6">Tüm Ostim vinç ekiplerimiz ağır iş sanayisi standartlarında tescilli ve sigortalıdır.</p>
                                <a href="tel:+905320000000" className="block bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md">Ücretsiz Ekspertiz Çağır</a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-400" /> Diğer Bölgeler</h3>
                                <ul className="flex flex-col gap-3">
                                    <li><Link href="/etimesgut-sepetli-vinc" className="text-gray-600 hover:text-primary">Etimesgut Sepetli Vinç</Link></li>
                                    <li><Link href="/sincan-sepetli-vinc" className="text-gray-600 hover:text-primary">Sincan Sepetli Vinç</Link></li>
                                    <li><Link href="/yenimahalle-sepetli-vinc" className="text-gray-600 hover:text-primary">Yenimahalle Sepetli Vinç</Link></li>
                                </ul>
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
