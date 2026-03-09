import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, ShieldCheck, Construction } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
    title: 'Yenimahalle Sepetli Vinç | Saatlik ve Günlük Kiralama',
    description: 'Ankara Yenimahalle, Batıkent, Demetevler ve Macunköy sanayi sahalarına özel operatörlü kiralık sepetli vinç, hiyap platform çözümleri. Şok fiyatlar!',
    alternates: {
        canonical: `${siteUrl}/yenimahalle-sepetli-vinc`,
    },
};

export default function YenimahalleSepetliVincPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Yenimahalle Sepetli Vinç', href: '/yenimahalle-sepetli-vinc' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Yenimahalle Sepetli Vinç Kiralama arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-6 mb-4">
                            Yenimahalle Sepetli Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Batıkent konut projelerinden, Demetevler ticari alanlarına ve Macunköy gıda sanayisine kadar Yenimahalle'nin kalbinde anında kiralık platform vinç desteği sunuyoruz.
                        </p>
                        <a
                            href="tel:+905320000000"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>Yenimahalle Vinç: 0532 000 00 00</span>
                        </a>
                    </div>
                </div>
            </section>

            <main className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Yenimahalle'nin Yüksek Çözüm Adresi</h2>
                            <p>
                                Hem köklü bir ilçe kültürü barındıran hem de Batıkent gibi modern ve geniş yeşil alanlı rekreasyon alanlarına uzanan Yenimahalle, yoğun iş temposuna sahip dev bir alandır. Ticari işletmelerin ve yüksek site bloklarının yan yana yer aldığı bu geniş ilçede onarım ve montaj işlerinde güvenilir bir çözüm ortağı elzemdir. Bizler, genel <Link href="/ankara-sepetli-vinc-kiralama">Ankara sepetli vinç kiralama</Link> rotamızın tam merkezinde kalan <strong>Yenimahalle sepetli vinç</strong> istasyonumuzla acil çağrılara 20 dakika gibi kısa sürelerde yanıt verebilmekteyiz.
                            </p>

                            <hr className="my-6" />

                            <h2>Yaygın Vinç Kullanım Alanlarımız</h2>
                            <p>
                                Demetevler'in yoğun yapılaşmasından, Batıkent'in ferah sitelerine kadar sunduğumuz hizmetlerden bazıları:
                            </p>
                            <ul>
                                <li><strong>Balkon ve Klima Ünite Transferleri:</strong> Dar merdiven boşluklarından geçirilemeyen ağır mobilyaların veya büyük klima motorlarının doğrudan sepetli platformlar aracılığıyla yüksek kat balkonlarına aktarımı.</li>
                                <li><strong>Kurumsal Dış Cephe Giydirme:</strong> Macunköy ve çevresindeki otomotiv, gıda fabrikası binalarına şirket logosu veya kompozit giydirme işlemlerinin asma iskele maliyetine katlanmadan yapılması.</li>
                                <li><strong>Yolda Kalan veya Risk Oluşturan Ağaçlar:</strong> Kışın fırtınalarda yola devrilme veya elektrik tellerine takılma tehlikesi olan sitelerdeki ağaçların <Link href="/blog/agac-budama-sepetli-vinc">kontrollü budanması</Link>.</li>
                            </ul>

                            <hr className="my-6" />

                            <h2>Avantajlı Saatlik Kiralama Yöntemi</h2>
                            <p>
                                Yenimahalle içerisindeki kısa sürekli işleriniz için günlerce süren anlaşmalar yapmanıza gerek yoktur. Park alanında kopan bir kamera kablosunu bağlamak gibi işiniz yarım saat bile sürse, size özel tahsis edeceğimiz <Link href="/sepetli-vinc-kiralama-fiyatlari">saatlik vinç yevmiye tarifeleriyle</Link> en uygun rakamla işinizi çözüme kavuşturuyoruz. Yenimahalle vinç ihtiyacınızda, tam donanımlı filomuz esnek sözleşmelerle anında sahanızda yer alır.
                            </p>

                            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl flex flex-col items-center text-center">
                                <Construction className="w-10 h-10 text-blue-500 mb-3" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Hızlı Metraj Tespiti</h4>
                                <p className="mb-4 text-gray-700">Kaç metrelik bir vinç çağıracağınızdan emin değilseniz operasyon merkezimiz binanıza WhatsApp üzerinden resim analiziyle doğru tahminde bulunur.</p>
                                <a href="tel:+905320000000" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-bold">
                                    <PhoneCall className="w-5 h-5" /> Danışman Bize Ulaş
                                </a>
                            </div>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Merkezi Garaj</h4>
                                <p className="text-sm text-gray-600 mb-6">Araçlarımızın bekleme alanı Ostim/Yenimahalle sınırında olduğu için transfer ücretinden direkt tasarruf ediyorsunuz!</p>
                                <a href="tel:+905320000000" className="block bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md">Acil Servis İste</a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-400" /> Diğer Koordinatlar</h3>
                                <ul className="flex flex-col gap-3">
                                    <li><Link href="/ostim-sepetli-vinc" className="text-gray-600 hover:text-primary">Ostim Sepetli Vinç</Link></li>
                                    <li><Link href="/cankaya-sepetli-vinc" className="text-gray-600 hover:text-primary">Çankaya Sepetli Vinç</Link></li>
                                    <li><Link href="/ankara-sepetli-vinc-kiralama" className="text-gray-600 hover:text-primary">Merkez Sepetli Vinç</Link></li>
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
