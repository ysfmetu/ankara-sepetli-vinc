import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Ankara Sepetli Vinç Kiralama | 7/24 Operatörlü Vinç Hizmeti',
    description: 'Ankara sepetli vinç kiralama hizmeti. Ostim, Etimesgut, Sincan ve tüm Ankara’da profesyonel operatörlü vinç kiralama hizmeti.',
    alternates: {
        canonical: 'https://ankarasepetlivinc.com/ankara-sepetli-vinc-kiralama',
    },
};

export default function AnkaraSepetliVincKiralamaPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Ankara Sepetli Vinç Kiralama', href: '/ankara-sepetli-vinc-kiralama' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Ankara Sepetli Vinç Kiralama arka planı"
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
                            Ostim, Etimesgut, Sincan, Çankaya ve Yenimahalle başta olmak üzere tüm Ankara&apos;da
                            7/24 operatörlü, sigortalı ve profesyonel sepetli vinç kiralama hizmeti veriyoruz. Yüksekte güvenli çözüm ortağınız.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="tel:+905320000000"
                                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span>Hemen Fiyat Al: 0532 000 00 00</span>
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
                            <h3 className="font-bold text-gray-900">İş Güvenliği Onaylı</h3>
                            <p className="text-sm text-gray-500 mt-1">Sertifikalı makineler</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <Clock className="w-8 h-8 text-primary mb-3" />
                            <h3 className="font-bold text-gray-900">7/24 Kesintisiz Hizmet</h3>
                            <p className="text-sm text-gray-500 mt-1">Acil vinç ihtiyaçlarına destek</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <MapPin className="w-8 h-8 text-primary mb-3" />
                            <h3 className="font-bold text-gray-900">Tüm Ankara&apos;ya Hizmet</h3>
                            <p className="text-sm text-gray-500 mt-1">Ostim, Sincan, Çankaya...</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                <span className="font-bold text-primary">10+</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Araç Filosu</h3>
                            <p className="text-sm text-gray-500 mt-1">Her yüksekliğe uygun seçenekler</p>
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

                            <h2>Sepetli Vinç Nedir?</h2>
                            <p>
                                <strong>Sepetli vinç</strong>, özellikle yüksek binalarda, inşaat alanlarında, aydınlatma direklerinde veya ağaç budama gibi yüksekte çalışma gerektiren her türlü operasyonda devasa kolaylık sağlayan, ucunda personelin güvenle durabileceği bir sepet (platform) bulunduran hidrolik kaldırma araçlarıdır.
                            </p>
                            <p>
                                Çalışma mantığı gereği, araç üstü taşıyıcı şasiye entegre edilmiş hidrolik katlanabilir veya teleskopik bomlar sayesinde belirli bir metraj yüksekliğine insan ve hafif ekipman çıkartmak amacıyla tasarlanmışlardır. Günümüzde Ankara gibi hızla kentleşen ve sürekli inşai yenilenme yaşayan metropollerde <strong>sepetli vinç kiralama ankara</strong> hizmetleri, hem iş verimliliği hem de işçi sağlığı açısından kritik bir konuma sahiptir. Eklemeli, teleskopik veya örümcek tip olmak üzere birçok farklı model alternatifine sahip sepetli vinçler, vinç operatörü yardımıyla sevk ve idare edilir.
                            </p>
                            <p>
                                Yüksek gerilim hatlarının onarımı, yüksek cephe reklam folyolarının veya dev <Link href="/blog/tabela-montaji-sepetli-vinc">tabela montajlarının</Link> yapılması asma iskele kurulumuna kıyasla, sepetli vinçler sayesinde çok daha pratik, hızlı ve risksizdir. Düşme riski ortadan kaldırıldığı için, güvenlik standartlarına harfiyen uyan kurumsal firmalar tarafından sıklıkla tercih edilmektedir.
                            </p>

                            <hr className="my-8" />

                            <h2>Ankara'da Sepetli Vinç Nerelerde Kullanılır?</h2>
                            <p>
                                Geniş yüzölçümü, çok sayıda sanayi bölgesi ve sürekli gelişen yerleşim alanlarıyla Ankara, yüksekte çalışma platformlarına dört mevsim yoğun talep gösteren bir şehirdir. Firmamız, Ankara'nın her noktasına <strong>operatörlü vinç kiralama</strong> hizmeti sağlayarak geniş bir uygulama yelpazesine hitap etmektedir.
                            </p>
                            <ul>
                                <li><strong>Bina Cephe ve Cam Temizliği:</strong> Plazaların ve yüksek katlı hastane, üniversite binalarının dış yüzey restorasyonları ve temizlikleri.</li>
                                <li><strong>Tabela ve Reklam Panosu Montajı:</strong> Otoyol kenarı devasa totem tabelalar veya dükkân üstü kompozit LED reklam uygulamaları.</li>
                                <li><strong>Elektrik ve Aydınlatma İşleri:</strong> Şehir içi cadde aydınlatmalarının, elektrik direklerinin ve yüksek gerilim trafolarının bakımları.</li>
                                <li><strong>Ağaç Budama ve Kesim Hizmetleri:</strong> Park ve bahçelerdeki tehlike arz eden, devrilme potansiyeli olan yüksek orman bitkilerinin güvenli tahliyesi.</li>
                                <li><strong>Oluk ve Çatı Tamiri:</strong> Rüzgârlı veya yağışlı havalarda zarar gören bina kiremitlerinin ve su oluklarının yüksek güvenlikte onarımı.</li>
                                <li><strong>Dış Cephe Mantolama ve Boyama:</strong> İnşaat ve tadilat aşamasındaki dairelerin veya müstakil projelerin dış cephe yalıtım faaliyetleri.</li>
                            </ul>
                            <p>
                                Gerek <Link href="/ostim-sepetli-vinc">ostim sepetli vinç</Link> talepleri gibi endüstriyel yoğunluklu alanlarda, gerekse <Link href="/etimesgut-sepetli-vinc">etimesgut sepetli vinç</Link> gibi gelişen konut projelerinde her türlü altyapı faaliyetine uygun bom uzanımı olan araç tedarik etmekteyiz. Amacımız her bölgeye saatler içinde ulaşıp süreci hızlandırmaktır.
                            </p>

                            <hr className="my-8" />

                            <h2>Sepetli Vinç Kiralama Fiyatları</h2>
                            <p>
                                Müşterilerin en çok merak ettiği konulardan biri olan <strong>ankara sepetli vinç</strong> kiralama ücretleri, belirli parametrelere göre şekillenmektedir. Standart bir "tek fiyat" modelinden ziyade, projeye ve makinenin sahada kalış süresine göre bir fiyatlandırma yapılır. Fiyat politikasını etkileyen ana başlıklar şunlardır:
                            </p>
                            <ol>
                                <li><strong>Makine Metrajı (Yüksekliği):</strong> 20 metrelik bir sepetli platform ile, 70 metre yüksekliğe uzanan devasa bir teleskopik vincin günlük ameliyat maliyeti ve makine amortismanı farklıdır. Ulaşılacak metre arttıkça maliyet paralel olarak yükselir.</li>
                                <li><strong>Kiralama Süresi:</strong> Saatlik kiralama seçenekleri, kısa metrajlı acil onarımlar (örneğin ufak bir tabela düzeltmesi veya oluk tamiri) için ideal ve ekonomikken; gün boyu sürecek mantolama, cam silme gibi operasyonlar için günlük, haftalık hatta aylık periyotlarda anlaşmalar yapılarak çok daha ekonomik <Link href="/sepetli-vinc-kiralama-fiyatlari">Sepetli Vinç Kiralama Fiyatları</Link> tarifesi oluşturulur.</li>
                                <li><strong>Mesafe ve Lokasyon:</strong> Vinçlerin bulunduğu garaj veya ana park konumundan, uygulama merkezine olan intikal mesafesi yakıt masrafını etkilediğinden ufak farklar yaratabilir. Ancak biz Ankara içerisindeki merkezi dağıtım ağımız ile bu maliyet farkını minimuma indirgiyoruz.</li>
                            </ol>
                            <p>
                                Kesin ve net bir fiyat teklifi alabilmek adına, yapılacak işin yüksekliğini ve niteliğini çağrı merkezimize iletmeniz durumunda size anında en ucuz vinç kiralama teklifi netleştirilecektir. Firmamız kurumsal sözleşmeli çalışmalarla, sanayi bölgelerine ve site yönetimlerine bütçe dostu iskontolar da sunmaktadır.
                            </p>

                            <hr className="my-8" />

                            <h2>Sepetli Vinç Çalışma Yüksekliği Seçimi Nasıl Yapılır?</h2>
                            <p>
                                Doğru makineyi kiralamak, işinizi tek seferde çözmek için en önemli adımdır. Eksik metrajlı bir aracın sahaya gelmesi zaman kaybına, gereğinden fazla büyük bir aracın gelmesi ise bütçe israfına ve dar sokaklarda manevra zorluğuna sebep olur. Araç filomuz, 15 metreden başlayarak 75 metrelere kadar uzanan devasa kapasitelere sahiptir.
                            </p>
                            <ul>
                                <li><strong>20 - 25 Metre Sepetli Vinçler:</strong> Genellikle 5-6 katlı binaların çatılarına ulaşmak, ağaç budamak, kamera montajı yapmak ve direk aydınlatmalarında elektrikçilere sepet platformu sağlamak için tercih edilir. Konut aralarına kolayca girebilen şase yapısına sahiptir.</li>
                                <li><strong>30 - 45 Metre Sepetli Vinçler:</strong> Ortalama 10 ile 15 katlı apartmanların diş cephe yalıtımlarında, büyük cam binaların temizlenmesinde ve yüksek totem tabelaların kurulmasında kullanılır. Çift kırmalı modelleriyle engellerin arkasına sarkma yapabilir.</li>
                                <li><strong>50 - 75 Metre Sepetli Vinçler:</strong> Gökdelen, viyadük, rüzgâr türbini onarımı veya çok katlı plazaların en zirve noktalarına ulaşım için dizayn edilmiş, geniş açma ayaklarına sahip tam teşekküllü ağır sanayi makineleridir.</li>
                            </ul>
                            <p>
                                Müşteri temsilcilerimizle iletişime geçtiğinizde hedef noktayı (kat sayısı vs.) belirtebilir, gerekirse ücretsiz ekspertiz talep edebilir ve <strong>ankara sepetli vinç</strong> ekiplerimizin en doğru metraj aracı tahsis etmesini sağlayabilirsiniz.
                            </p>

                            <hr className="my-8" />

                            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
                            <p>
                                Rekabetin güçlü olduğu vinç sektöründe, güvenilirliği ve yenilikçi hizmet anlayışını bir araya getiren firmamız, "sıfır iş kazası" prensibiyle çalışmaktadır. Bizimle yola çıkmanın temel faydaları şunlardır:
                            </p>
                            <ul>
                                <li><strong>Sertifikalı ve Profesyonel Operatörler:</strong> Uygulama sahasına gelen her personelimiz G Sınıfı Ehliyet (Operatörlük Belgesi) sahibi olup, zorlu hava koşullarında veya dar şantiyelerde dahi platformları güvenle idare edebilir. Hiçbir zaman <em>operatörlü vinç kiralama</em> standartlarından ödün vermiyoruz.</li>
                                <li><strong>Periyodik Muayenesi Tam Filo:</strong> Sistemimizdeki tüm sepetli iş makinelerinin ve hiyap vinçlerin üç aylık mekanik TMMOB Makina Mühendisleri Odası muayeneleri, sızdırmazlık testleri ve ağır bakımları günceldir. Halat ve lift kopması gibi endişeler taşımazsınız.</li>
                                <li><strong>Müşteri Odaklı Hız:</strong> Siparişi geçtiğiniz andan itibaren araç parkımızda hazır bir şekilde bekleyen vinçler dakikalar içerisinde kontak açıp, en hızlı ulaşım hattından yanınıza intikal eder. Zaman maliyettir gerçeğinin bilincindeyiz.</li>
                                <li><strong>Şeffaf Ücretlendirme Politikası:</strong> Kiralama bittikten sonra anlaşılan tutarlar dışında gizli bedellerle veya ekstra ücretlerle karşılaşmazsınız. İşe özel tahsis edilen fiyat sondur.</li>
                            </ul>
                            <p>
                                Sonuç olarak, yüksek standartlardaki filomuzu deneyimlemek, projenizi profesyonel ellere teslim etmek ve hızlıca <strong>sepetli vinç kiralama ankara</strong> hizmeti almak için, bizlerle iletişime geçebilir ve garantili yükselme dünyasına adım atabilirsiniz.
                            </p>

                            <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                                <h4 className="text-xl font-bold mb-4">Hemen Ankara Sepetli Vinç Kiralayın</h4>
                                <p className="mb-6">7 gün 24 saat aktif çağrı merkezimize ulaşarak güncel fiyatları öğrenebilir, uzmanlarımızla projenize uygun vinci tespit edebilirsiniz.</p>
                                <div className="flex justify-center">
                                    <a
                                        href="tel:+905320000000"
                                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        <span>Bizimle İletişime Geçin</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:w-1/3 flex flex-col gap-6">

                            {/* Hizmet Bölgeleri Widget */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                                    Ana Hizmet Bölgeleri
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/ostim-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Ostim Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/etimesgut-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Etimesgut Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sincan-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Sincan Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cankaya-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Çankaya Sepetli Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/yenimahalle-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Yenimahalle Sepetli Vinç</span>
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
                                    Araç parkımızdan size en yakın olan sepetli vinci anında yönlendiriyoruz. Fiyat ve randevu için bizi arayın.
                                </p>
                                <a
                                    href="tel:+905320000000"
                                    className="block w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-all shadow-md"
                                >
                                    0532 000 00 00
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
