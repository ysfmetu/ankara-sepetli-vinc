import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, ShieldCheck, HardHat } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
    title: 'Etimesgut Sepetli Vinç Kiralama | Eryaman ve Bağlıca Bölgesi',
    description: 'Ankara Etimesgut, Eryaman, Elvankent ve Bağlıca bölgelerinde kiralık sepetli vinç, hiyap ve operatörlü vinç hizmetimiz 7/24 devam etmektedir.',
    alternates: {
        canonical: `${siteUrl}/etimesgut-sepetli-vinc`,
    },
};

export default function EtimesgutSepetliVincPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Etimesgut Sepetli Vinç', href: '/etimesgut-sepetli-vinc' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Etimesgut Sepetli Vinç Kiralama arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-6 mb-4">
                            Etimesgut Sepetli Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Etimesgut, Eryaman, Bağlıca, Elvankent bölgelerindeki tüm inşai, montaj ve bakım projeleri için 15 ile 75 metre arası tam donanımlı platform vinçler.
                        </p>
                        <a
                            href="tel:+905320000000"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>Etimesgut Vinç Çağır: 0532 000 00 00</span>
                        </a>
                    </div>
                </div>
            </section>

            <main className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Etimesgut, Eryaman ve Bağlıca'da Vinç Hizmetleri</h2>
                            <p>
                                Ankara'nın konutlaşma ve kentsel gelişim açısından en hızlı büyüyen ilçelerinden olan Etimesgut, yüzlerce yeni toplu konut alanını, geniş bulvarları ve her gün büyüyen ticari kompleksleri barındırır. Bu hızlı kentleşme beraberinde sürekli bir altyapı, mantolama, inşaat revizyonu ihtiyacı doğurur. Firmamız, <Link href="/ankara-sepetli-vinc-kiralama">Ankara sepetli vinç kiralama</Link> ağının önemli bir modülü olarak <strong>Etimesgut sepetli vinç</strong> ihtiyaçlarına jet hızıyla cevap vermektedir.
                            </p>

                            <hr className="my-6" />

                            <h2>Hangi Senaryolarda Etimesgut İçin Bizi Arıyorlar?</h2>
                            <p>
                                Batı Ankara aksında kurulan yüksek katlı siteler (Eryaman konutları vb.) yüksekte çalışmayı zorunlu kılan birçok iş kalemine sahiptir:
                            </p>
                            <ul>
                                <li><strong>Bina Dış Cephe İzolasyon:</strong> Sitelerin dış mantolama yenilemelerinde iskele kurmanın maliyetli ve tehlikeli olduğu noktalarda.</li>
                                <li><strong>Klima ve Kombi Motor Montajları:</strong> Yüksek katlı dairelerin dış balkonlarına risk almadan ünite bağlama işlemleri.</li>
                                <li><strong>Oluk ve Yağmur Borusu Tamiri:</strong> Kış aylarında Bağlıca ve Elvankent gibi bölgelerdeki şiddetli don/rüzgar hasarlarının anında giderilmesi.</li>
                                <li><strong>Reklam ve Fişek Tabela:</strong> İlçe ticari dükkanlarının kurumsal cam kaplamalarında ve led ışıklı totem kurulumlarında.</li>
                            </ul>

                            <hr className="my-6" />

                            <h2>Hızlı Ulaşım, Sertifikalı Personel</h2>
                            <p>
                                Etimesgut otoyol girişleri ve çevre yolu bağlantılarına yakın konuşlandırdığımız yedek araç birimlerimizle, ilçenin dört bir yanına acil olarak ulaşıyoruz. Üstelik piyasaki en <Link href="/sepetli-vinc-kiralama-fiyatlari">uygun sepetli vinç kiralama fiyatları</Link> tarifesi ile site yönetimlerine saatlik veya yevmiyeli kiralama paketleri sunmaktayız. G Sınıfı E Sınıfı ehliyetlere ve çalışma yüksekliği eğitim sertifikalarına sahip tecrübeli operatörlerimiz devasa makineleri en dar site otopark aralarında bile milimetrik hassasiyetle konumlandırarak hizmetinizdedir.
                            </p>

                            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl flex flex-col items-center text-center">
                                <HardHat className="w-10 h-10 text-blue-500 mb-3" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Eryaman - Bağlıca Hattında Çalışıyor Musunuz?</h4>
                                <p className="mb-4 text-gray-700">Elvankent'ten İstasyon Mahallesi'ne, Eryaman'dan Bağlıca bulvarlarına kadar her noktaya servisimiz vardır. Ücretsiz metraj keşfi için arayın.</p>
                                <a href="tel:+905320000000" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-bold">
                                    <PhoneCall className="w-5 h-5" /> 0532 000 00 00
                                </a>
                            </div>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">%100 Kurumsal İhale Uyumluluğu</h4>
                                <p className="text-sm text-gray-600 mb-6">Kamu binaları ve TSK askeri havaalanı sızdırmazlık kurallarına haiz, periyodik denetimli araçlar sunuyoruz.</p>
                                <a href="tel:+905320000000" className="block bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md">Araç Tahsis Et</a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-400" /> Yakın Bölgeler</h3>
                                <ul className="flex flex-col gap-3">
                                    <li><Link href="/sincan-sepetli-vinc" className="text-gray-600 hover:text-primary">Sincan Sepetli Vinç</Link></li>
                                    <li><Link href="/ostim-sepetli-vinc" className="text-gray-600 hover:text-primary">Ostim Sepetli Vinç</Link></li>
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
