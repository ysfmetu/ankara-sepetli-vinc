import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, ShieldCheck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Sincan Sepetli Vinç | Sincan Organize Kiralık Vinç',
    description: 'Ankara Sincan OSB, Fatih ve Törekent bölgelerinde fabrika bakımları ve şantiye hizmetleri için 7/24 sepetli vinç, örümcek platform kiralama.',
    alternates: {
        canonical: 'https://ankarasepetlivinc.com/sincan-sepetli-vinc',
    },
};

export default function SincanSepetliVincPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Sincan Sepetli Vinç', href: '/sincan-sepetli-vinc' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Sincan Sepetli Vinç Kiralama arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-6 mb-4">
                            Sincan Sepetli Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            ASO 1. OSB, Yenikent, Fatih ve Törekent merkezli sanayi kuruluşları ve toplu konut şantiyeleri için ağır tonajlı veya hafif manevralı kiralık sepetli platformlar.
                        </p>
                        <a
                            href="tel:+905320000000"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>Sincan Vinç İste: 0532 000 00 00</span>
                        </a>
                    </div>
                </div>
            </section>

            <main className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Sincan OSB'nin Yüksek Çözüm Ortağı</h2>
                            <p>
                                Ankara sanayisinin kalbi konumunda olan Sincan ASO 1. Organize Sanayi Bölgesi (veya Ankara Sanayi Odası OSB), yüzlerce lojistik, otomotiv ve savunma devine ev sahipliği yapar. Böylesi zorlu iş makinesi trafiklerinde üretim bandının durmaması için <strong>Sincan sepetli vinç kiralama</strong> ve hiyap hizmetlerine ciddi bağımlılık söz konusudur. Sincan bölgesine ayrılan 25 ve 75 metre menzilli hazır sepetli makine filomuzla hem ilçe merkezi (Fatih, Lale) ticari işlerini hem de Yenikent şantiyelerinin yükseklik sorunlarını çözüyoruz.
                            </p>

                            <hr className="my-6" />

                            <h2>Sincan ve Yenikent İçin Kesintisiz Çözümler</h2>
                            <p>
                                Tüm Ankara geneline hızla tahsis ettiğimiz <Link href="/ankara-sepetli-vinc-kiralama">Ankara sepetli vinç kiralama</Link> sistemlerimiz, Sincan coğrafyasında şu işlemleri rutine bindirmiştir:
                            </p>
                            <ul>
                                <li><strong>Fabrika Silo ve Boru Montajı:</strong> Yüksek beton santrallerinde kaynayan devasa çelik boruların güvenlikle lehimlenmesi.</li>
                                <li><strong>Yenikent Site Dış Cepheleri:</strong> Son yıllarda hızla dikey büyüyen Yenikent çevresindeki yeni binaların boya ve yalıtım taşımaları.</li>
                                <li><strong>Otomotiv Şantiyeleri:</strong> ASO içerisinde yeni inşaa edilen dev depoların sandviç panel montajları.</li>
                                <li><strong>İdari Bina Cam Temizliği:</strong> Geniş OSB merkez idari binalarının haftalık / aylık dış cam temizliği platform kiralama <Link href="/sepetli-vinc-kiralama-fiyatlari">uygun paketlerle</Link> bizler tarafından sağlanır.</li>
                            </ul>

                            <hr className="my-6" />

                            <h2>Güçlü Filo ve TMMOB Onaylı Testler</h2>
                            <p>
                                Sincan OSB sınırlarına tahsis ettiğimiz sepetli vinçler, ISG kanunları çerçevesinde talep edilen tüm kaçak akım röleleri, moment kontrol sensörleri ve Enyat denge terazisi modüllerine sahip yeni model araçlardan oluşur. Hiçbir sepetimiz hidrolik çatlağı veya sızdırmazlık problemiyle sahanıza girmez.
                            </p>

                            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl flex flex-col items-center text-center">
                                <Wrench className="w-10 h-10 text-blue-500 mb-3" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Pazar Günü Sincan'a Vinç Gelir Mi?</h4>
                                <p className="mb-4 text-gray-700">7/24 esasıyla! Pazar günleri özellikle fabrikaların üretimi durdurduğu onarım nöbetlerine göre esnek tarifelerle (1. OSB, 2. OSB ve civarı) hizmetteyiz.</p>
                                <a href="tel:+905320000000" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-bold">
                                    <PhoneCall className="w-5 h-5" /> Fiyat Görüşelim
                                </a>
                            </div>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Makine Güvenliği Önceliğimiz</h4>
                                <p className="text-sm text-gray-600 mb-6">Meyilli sanayi arsalarında dahi tam kapasite stabilite ile çalışan kırma sistemli örümcek platformlarımız hizmetinizde.</p>
                                <a href="tel:+905320000000" className="block bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md">OSB Servisine Ulaş</a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-400" /> Bağlantılı Güzergâhlar</h3>
                                <ul className="flex flex-col gap-3">
                                    <li><Link href="/etimesgut-sepetli-vinc" className="text-gray-600 hover:text-primary">Etimesgut Sepetli Vinç</Link></li>
                                    <li><Link href="/ostim-sepetli-vinc" className="text-gray-600 hover:text-primary">Ostim Sepetli Vinç</Link></li>
                                    <li><Link href="/ankara-sepetli-vinc-kiralama" className="text-gray-600 hover:text-primary">Ankara Merkez Vinç Kiralama</Link></li>
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
