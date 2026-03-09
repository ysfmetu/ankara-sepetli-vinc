import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MapPin, ShieldCheck, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
    title: 'Çankaya Sepetli Vinç | Merkez Vinç Kiralama',
    description: 'Ankara Çankaya ilçesinde iş güvenliği standartlarına uygun sepetli platform, vinç kiralama ve hiyap hizmeti. Kızılay, Tunalı ve tüm mahallelere acil servis.',
    alternates: {
        canonical: `${siteUrl}/cankaya-sepetli-vinc`,
    },
};

export default function CankayaSepetliVincPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Çankaya Sepetli Vinç', href: '/cankaya-sepetli-vinc' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Çankaya Sepetli Vinç Kiralama arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-6 mb-4">
                            Çankaya Sepetli Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Ankara'nın kalbi Çankaya'da, yüksek katlı plazalar, kamu binaları ve elçilik projeleri için dar sokaklara girebilen kompakt veya yüksek metrajlı teleskopik vinç çözümleri.
                        </p>
                        <a
                            href="tel:+905320000000"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>Çankaya Vinç İste: 0532 000 00 00</span>
                        </a>
                    </div>
                </div>
            </section>

            <main className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <h2>Çankaya Merkezinde Prestijli Vinç Hizmeti</h2>
                            <p>
                                Nüfusu ve ticari hacmiyle Türkiye'nin en büyük ilçesi olan Çankaya, Kızılay, Tunalı, Oran, Çukurambar gibi birbirinden yoğun alt merkezleri bünyesinde barındırır. Bakanlıkların, büyükelçiliklerin ve kurumsal holding plazalarının yoğunlaştığı bu hat üzerinde, dış cephe işlemlerini sessiz, hızlı ve yaya/araç trafiğini tıkamadan halletmek şarttır. Firmamız, <Link href="/ankara-sepetli-vinc-kiralama">Ankara sepetli vinç kiralama</Link> uzmanlığını Çankaya standartlarına özel protokollerle uygulayarak, çevreyi rahatsız etmeden çalışan modern sepetli platformlar temin etmektedir.
                            </p>

                            <hr className="my-6" />

                            <h2>Çankaya Plazaları İçin Geniş Filo</h2>
                            <p>
                                Klasik araçların giremeyeceği dar sokaklar veya yüksek katlı kuleler için portföyümüzde özel mühendislik ürünü araçlar yer almaktadır:
                            </p>
                            <ul>
                                <li><strong>Dar Sokak Örümcek Vinçler:</strong> Tunalı veya Esat gibi dar sokaklarda bina aralarına girip, apartman mantolaması yapılmasını sağlayan kompakt manevra makineleri.</li>
                                <li><strong>75 Metre Teleskopik Devler:</strong> Çukurambar ve Söğütözü plazalarının en tepe noktalarındaki reklam panosu söküm/takım işlerinde, cam silme süreçlerinde devasa güvenlik sağlayan uzun araçlar.</li>
                                <li><strong>Ağaç Budama ve Kesim:</strong> Elçilik bahçelerinde, Çankaya köşk bölgesindeki tarihi ağaçların çevreye zarar vermeden <Link href="/blog/agac-budama-sepetli-vinc">profesyonel budaması</Link>.</li>
                            </ul>

                            <hr className="my-6" />

                            <h2>Kurumsal Anlaşmalar ve Güvenlik</h2>
                            <p>
                                Özellikle bakanlık binaları ve büyük alışveriş merkezlerinin yürüttüğü tadilat ihalelerinde aranan tek şart "Sıfır Hata ve Tescilli Belge" olgusudur. Tüm TMMOB sızdırmazlık testlerinden başarıyla geçmiş, 20 metreden 75 metreye kadar çeşitlilik gösteren <Link href="/sepetli-vinc-kiralama-fiyatlari">uygun fiyatlı filomuz</Link> ve G sertifikalı (yüksekte çalışma belgeli) operatörlerimizle <strong>Çankaya sepetli vinç</strong> hizmetinde 1 numaralı tercih konumundayız.
                            </p>

                            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl flex flex-col items-center text-center">
                                <Building2 className="w-10 h-10 text-blue-500 mb-3" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Çankaya Merkezli Bir Tesisiniz Mi Var?</h4>
                                <p className="mb-4 text-gray-700">Rutin bina cephe bakımlarınız veya haftalık cam temizlikleri için bizimle aylık sabit uygun sözleşmeler imzalayabilirsiniz.</p>
                                <a href="tel:+905320000000" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-bold">
                                    <PhoneCall className="w-5 h-5" /> 0532 000 00 00
                                </a>
                            </div>

                        </article>

                        <aside className="lg:w-1/3 flex flex-col gap-6">
                            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Trafik Engeli Yaratmıyoruz</h4>
                                <p className="text-sm text-gray-600 mb-6">Şehir merkezinin en yoğun ana arterlerinde bile işimizi gece mesaisinde veya hızlı operasyonla kimseyi mağdur etmeden bitiriyoruz.</p>
                                <a href="tel:+905320000000" className="block bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md">Acil Gece Vinci</a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-400" /> Bağlantılı Güzergâhlar</h3>
                                <ul className="flex flex-col gap-3">
                                    <li><Link href="/yenimahalle-sepetli-vinc" className="text-gray-600 hover:text-primary">Yenimahalle Sepetli Vinç</Link></li>
                                    <li><Link href="/etimesgut-sepetli-vinc" className="text-gray-600 hover:text-primary">Etimesgut Sepetli Vinç</Link></li>
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
