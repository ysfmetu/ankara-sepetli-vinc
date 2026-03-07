import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: 'Ankara Sepetli Vinç Kiralama',
    description: "Ankara'da sepetli vinç kiralama hizmeti, operatörlü ve güvenli platform çözümleri.",
    alternates: {
        canonical: `${siteUrl}/sepetli-vinc-kiralama`,
    },
    openGraph: {
        title: 'Ankara Sepetli Vinç Kiralama',
        description: "Ankara'da sepetli vinç kiralama hizmeti, operatörlü ve güvenli platform çözümleri.",
        url: `${siteUrl}/sepetli-vinc-kiralama`,
    }
};

export default function SepetliVincKiralamaPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmetler', href: '/hizmetler' },
        { label: 'Sepetli Vinç Kiralama', href: '/sepetli-vinc-kiralama' },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Sepetli Vinç Kiralama',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Ankara Sepetli Vinç Kiralama',
            url: siteUrl
        },
        areaServed: {
            '@type': 'City',
            name: 'Ankara'
        },
        description: "Ankara'da sepetli vinç kiralama hizmeti, operatörlü ve güvenli platform çözümleri.",
        url: `${siteUrl}/sepetli-vinc-kiralama`,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Kiralama Hizmetleri',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Günlük Sepetli Vinç Kiralama'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Saatlik Sepetli Vinç Kiralama'
                    }
                }
            ]
        }
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Ankara sepetli vinç kiralama fiyatları ne kadar?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Fiyatlar vincin çalışma yüksekliğine, kiralama süresine (saatlik, günlük, haftalık) ve çalışma bölgesine göre değişiklik göstermektedir.'
                }
            },
            {
                '@type': 'Question',
                name: 'Sepetli vinçler kaç metreye kadar çıkabiliyor?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Filomuzda bulunan farklı araç modelleriyle 15 metreden 75 metreye kadar çeşitli yüksekliklere güvenle ulaşabilen sepetli vinçlerimiz mevcuttur.'
                }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Ankara Sepetli Vinç Kiralama Hizmetleri"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6 mb-6">
                            Ankara Sepetli Vinç Kiralama
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Yüksek cephe operasyonlarınız için tasarlanmış profesyonel araç filomuzla, ankara vinç kiralama denilince akla gelen ilk kurumsal marka olmaktan gurur duyuyoruz.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="tel:+905516066878"
                                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span>Canlı Destek: 0551 606 68 78</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bar */}
            <section className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                        <div className="flex flex-col items-center justify-center text-center">
                            <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                            <h3 className="font-bold text-gray-900">Lisanslı Operatörler</h3>
                            <p className="text-sm text-gray-500 mt-1">Sıfır iş kazası hedefi</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <Clock className="w-8 h-8 text-primary mb-3" />
                            <h3 className="font-bold text-gray-900">Saatlik ve Günlük</h3>
                            <p className="text-sm text-gray-500 mt-1">İhtiyacınıza uygun seçenek</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <MapPin className="w-8 h-8 text-primary mb-3" />
                            <h3 className="font-bold text-gray-900">Geniş Ağ</h3>
                            <p className="text-sm text-gray-500 mt-1">Tüm Ankara ilçelerine sevk</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                <span className="font-bold text-primary">15+</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Farklı Model</h3>
                            <p className="text-sm text-gray-500 mt-1">İşinizin gereğine göre araç</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Article */}
            <main className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Article Text Content */}
                        <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-a:text-primary max-w-none text-gray-600 leading-relaxed">

                            <p>
                                Modern şehir hayatının yükselen altyapısında, yerden metrelerce yükseğe tırmanarak işlem yapmak ciddi bir güvenlik altyapısı talep eder. Tam da bu noktada devreye giren <Link href="/">Ankara vinç kiralama</Link> uzmanlığımız, yüksek katlı konutlarda, karmaşık endüstri bölgelerinde veya mahalle arası operasyonlarda en sağlam çözüm ortamını sağlar.
                            </p>

                            <hr className="my-8" />

                            <h2>Sepetli Vinç Kiralama Nedir?</h2>
                            <p>
                                Yüksekte icra edilecek olan montaj, bakım ve temizlik işlerinde kullanılan <strong>sepetli platformlar</strong>, üzerinde 1 ila 3 personelin güvenle durabileceği sepet monteli araçlardır. Sepetli vinç, iskele kurulumu veya dış cephe asansörü kurma gibi son derece uzun ve maliyetli süreçleri denklemden çıkarır. Özellikle Ankara gibi sürekli büyüyen, dış cephe işlemlerinin hiç durmadığı bir lokasyonda hızlı manevra kabiliyeti büyük önem taşır.
                            </p>
                            <p>
                                İster saatlik bir arıza giderimi yapın, isterseniz de 2 haftalık bir şantiye çalışması planlayın; modern sistemlerimizle çalışanların sepet içinden çıkmadan sadece bir joystick kumandası ile yükselip alçalabildiği esnek, rüzgar direnci yüksek, sepetli donanımlar sayesinde hem personel can sağlığını maksimum düzeyde tutar hem de saha süresini yarı yarıya azaltırsınız. Daha detaylı teorik anlatımlar için dilerseniz <Link href="/blog">Ankara vinç kiralama rehberine</Link> ulaşabilirsiniz.
                            </p>

                            <h2>Ankara’da Sepetli Vinç Hangi İşlerde Kullanılır?</h2>
                            <p>
                                <Link href="/hizmetler">Vinç kiralama hizmetleri</Link> alanındaki uygulamalar o kadar çeşitlidir ki, bazen akla gelmeyen kreatif alanlarda dahi sepetli araçlardan faydalanılır:
                            </p>
                            <ul>
                                <li><strong>Açık Hava Reklamcılığı:</strong> Otoyol kenarı, avm cephesi veya dükkân üstü tabela ve branda germe operasyonları.</li>
                                <li><strong>Telekomünikasyon ve Elektrik:</strong> Yüksek gerilim hatları, sokak aydınlatmaları ve baz istasyonu verici bakımları.</li>
                                <li><strong>Bina Temizlik Yönetimi:</strong> Dış cephe cam silimi, yalıtım ve mantolama onarımları.</li>
                                <li><strong>Ağaç Budama:</strong> Orman müdürlükleri, belediyeler veya site yöneticilikleri tarafından talep edilen tehlike arz eden dalların kesimi.</li>
                                <li><strong>Sinema ve Dizi Sektörü:</strong> Kuşbakışı çekimler (Jimmy Jib tarzı) ve aydınlatma setlerinin (ışık kulesi) kurulması.</li>
                            </ul>
                            <p>
                                Bütün bu hizmet kalemleri için ihtiyacınız olan donanım, firmamızın kapsamlı otoparkında sizi bekliyor.
                            </p>

                            <h2>Sepetli Vinç Kiralamanın Avantajları</h2>
                            <p>
                                Ankara metropolünde iş yapıyorsanız süreciniz hem hızlı hem de esnek olmalıdır. <Link href="/operatorlu-vinc-kiralama">Operatörlü vinç kiralama</Link> paketimiz eşliğinde sahaya davet edeceğiniz aracımız, projenize şu büyük avantajları sağlar:
                            </p>
                            <ol>
                                <li><strong>Portatiflik ve Hız:</strong> Araç istenilen sokağa geldiğinde en fazla 10-15 dakika içerisinde hidrolik ayaklarını sabitleyip kolları yukarı doğru şaha kaldırır. İskeleye oranla kurulum sıfıra yakındır.</li>
                                <li><strong>Üst Düzey Güvenlik (Sıfır Risk):</strong> İhtimallere bırakılmayan elektronik terazi sistemleri sayesinde sepetin dengesi sarsılmaz haldedir. Operatörümüz 7/24 risk analizi yaparak iş kamerasından faaliyeti gözetler.</li>
                                <li><strong>Lokasyon Zenginliği:</strong> Keçiören'in yokuşlarından, Yenimahalle'nin sıkışık apartmanlarına, oradan Etimesgut ve Çankaya bulvarlarına kadar her noktaya rahatça girip konumlanabilen mobil cihazlardır.</li>
                            </ol>

                            <h2>Fiyatları Etkileyen Faktörler</h2>
                            <p>
                                Ankara vinç pazarında fiyatlandırma yapılırken en çok dikkate alınan iki ana kriter bulunur: Sepetin çıkacağı maksimum yükseklik (buna makine metrajı da denir) ve işin planlanan mesai süresi. Hızlı giderilen durumlar için tasarlanan <Link href="/saatlik-vinc-kiralama">saatlik vinç</Link> kendi özel ve dar kalıplı maliyet sınırını çizer. Ancak eğer bir temizlik ya da tabela çalışması akşama kadar sürecekse <Link href="/gunluk-vinc-kiralama">günlük (yevmiye) vinç kiralama</Link> devreye alınır ki bu da işletmelere muazzam bir indirim imkanı sunar.
                            </p>
                            <p>
                                Ayrıca sevk edileceği bölgenin Sincan veya Çankaya olması gibi konum mesafeleri de çok küçük oranlarda fiyatlara etki edebilir. Tam teşekküllü fiyat ve zaman matrisi hakkında maliyet çıkarımlarına <Link href="/hizmetler">Ankara vinç hizmetleri</Link> sayfamız üzerinden ya da daha da doğrusu hemen bizi arayarak ulaşabilirsiniz.
                            </p>

                            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
                            <p>
                                Bizler yalnızca bir araç kiralamıyoruz; şantiyenizde veya binanızda can güvenliği riski taşıyan önemli bir sorumluluk alıyoruz. Bizi rakiplerimizden ayıran temel ilkeler şunlardır:
                            </p>
                            <ul>
                                <li>Zamanlı teslimat ve randevu sadakati</li>
                                <li>Ağır bakımları eksiksiz yapılmış modern araç parkuru</li>
                                <li>G sınıfı sertifikalı ve tecrübeli profesyonel operatör ekibi</li>
                                <li>Esnek ödeme koşulları ve ulaşılabilir fiyat yapısı</li>
                            </ul>

                            <p>
                                Sektöre dair daha pek çok uzman ipucuna, araç seçmeye dair aklınıza takılan her nevi pürüzü çözmek adına tüm kılavuzlara <Link href="/blog">Blog - Bilgi Merkezi</Link> alanımızdan ulaşarak okumalar yapabilirsiniz.
                            </p>

                            <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                                <h4 className="text-xl font-bold mb-4">Şimdi Vinç Talep Edin</h4>
                                <p className="mb-6">7 gün 24 saat aktif çağrı merkezimize ulaşarak metraj bilgisini iletip saniyeler içinde fiyat alabilirsiniz.</p>
                                <div className="flex justify-center flex-wrap gap-4">
                                    <a
                                        href="tel:+905516066878"
                                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        <span>Bize Ulaşın</span>
                                    </a>
                                    <Link
                                        href="/iletisim"
                                        className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-bold transition-colors"
                                    >
                                        İletişim Formu
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:w-1/3 flex flex-col gap-6">

                            {/* Hizmet Ağımız Widget */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                                    Hızlı Yönlendirme Paneli
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/hizmetler" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Tüm Hizmet Çeşitleri</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/operatorlu-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Operatörlü Hizmetler</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/saatlik-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Saatlik Kiralamalar</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gunluk-vinc-kiralama" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Günlük (Yevmiye) Opsiyonları</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Destek Widget */}
                            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center">
                                <PhoneCall className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Acil Vinç mi Lazım?</h4>
                                <p className="text-sm text-gray-600 mb-6">
                                    Ankara içi lokasyonlardan size en yakın olan sepetli vinci anında yönlendiriyoruz. Randevu planlamak için arayın.
                                </p>
                                <a
                                    href="tel:+905516066878"
                                    className="block w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md"
                                >
                                    0551 606 68 78
                                </a>
                            </div>

                        </aside>
                    </div>
                </div>
            </main>

            {/* FAQ Block */}
            <div className="bg-white pb-20">
                <FAQ />
            </div>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
