import { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, Info, Calculator, Banknote, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarasepetlivinckirala.com';

export const metadata: Metadata = {
    title: 'Sepetli Vinç Kiralama Fiyatları Ankara 2025 | Güncel Tarife',
    description: 'Saatlik, günlük ve aylık periyotlarla sepetli vinç kiralama fiyatları. Metraj ve yüksekliğe göre Ankara vinç kiralama ücretleri rehberi.',
    alternates: {
        canonical: `${siteUrl}/sepetli-vinc-kiralama-fiyatlari`,
    },
};

export default function SepetliVincKiralamaFiyatlariPage() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Sepetli Vinç Kiralama Fiyatları', href: '/sepetli-vinc-kiralama-fiyatlari' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Ankara Sepetli Vinç Kiralama Fiyatları arka planı"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Breadcrumb items={breadcrumbItems} />
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6 mb-6">
                            Sepetli Vinç Kiralama Fiyatları
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Ankara genelinde projeleriniz ve kısa süreli operasyonlarınız için en şeffaf, bütçe dostu saatlik ve günlük kiralama ücretleri. Yükseklik limitine göre doğru bütçelendirme yapın.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="tel:+905320000000"
                                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span>Canlı Fiyat Al: 0532 000 00 00</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Pricing Info Cards */}
            <section className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                        <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Saatlik Kiralama</h3>
                                <p className="text-sm text-gray-600 mt-1">Acil onarım ve kısa metrajlı hızlı işlemler için en ideal ve ucuz faturalandırma modeli.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Calculator className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Günlük Kiralama</h3>
                                <p className="text-sm text-gray-600 mt-1">Dış cephe temizliği, cam montajı gibi sabahtan akşama kadar süren planlı mesailer için.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Banknote className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">Aylık Kiralama</h3>
                                <p className="text-sm text-gray-600 mt-1">Büyük inşaat projelerinde araç kiralama şirketinin şantiyeye vinci günlerce sabitlemesi.</p>
                            </div>
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

                            <h2>Sepetli Vinç Kiralama Fiyatları Ankara</h2>
                            <p>
                                Sepetli vinç kiralama fiyatları, müşteri bütçesini doğrudan etkileyen ve pek çok değişkene bağlı olan kritik bir operasyon maliyetidir. Ankara gibi çok merkezli ve geniş yüzölçümlü bir sanayi, ticaret ve konut altyapısında, makinenin nereye gideceğinden, ne kadar çalışacağına kadar birçok parametre bu fiyatları belirler. En uygun maliyetle en yüksek verimi almak için kiralama yöntemlerinin tümüne aşina olmanız büyük fayda sağlar.
                            </p>
                            <p>
                                Müşterilerimizin genellikle <strong>"1 saat vinç çağırmak ne kadar eder?"</strong> veya <strong>"Gökdelen camı silmek için bütün gün sepetli vinç lazım, bütçesi ne çıkar?"</strong> şeklindeki sorularına istinaden; bu rehberdeki ücretlendirme modellerini şeffaflık ilkemiz gereği sizler için sınıflandırdık.
                            </p>

                            <hr className="my-8" />

                            <h2>Saatlik Sepetli Vinç Fiyatları</h2>
                            <p>
                                Saatlik kiralama, genellikle çok kısa bir müdahale gerektiren teknik onarım veya montaj işlerinde tercih edilir. Bunlara örnek olarak;
                            </p>
                            <ul>
                                <li>Yırtılan bir <Link href="/blog/tabela-montaji-sepetli-vinc">reklam tabelasının</Link> acil olarak değiştirilmesi veya tamiratı,</li>
                                <li>Belediye sınırları içindeki yüksek aydınlatma direklerinde patlayan ampullerin veya yanan şalterlerin onarılması,</li>
                                <li>Çatı ve su oluklarında meydana gelen anlık tıkanıklıkların veya parça kopmalarının rüzgârlı havalarda süratle çözümlenmesi,</li>
                                <li>Şehir içi veya mahalle aralarında yola sarkan ağaç dallarının yarım saat içerisinde tehlikesizce budanması (<Link href="/blog/agac-budama-sepetli-vinc">ayrıntılı bilgi için</Link>) gibi kısa işlemleri gösterebiliriz.</li>
                            </ul>
                            <p>
                                Saatlik ücretlendirmede, vincin garajından çıkıp bulunduğu hedefe gelmesi (nakliye bedeli veya ambar yolu) fiyata dâhildir ve genellikle 2 saat, 3 saat gibi minimum sevk süreleri ile anlaşma sağlanabilir. Makinenin boşta bekleme süresi veya personelle operasyon başında beklemesi saatlik bedeli üzerinden taksimetre misali fatura edilir.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                <div className="flex gap-3">
                                    <Info className="w-6 h-6 text-blue-500 shrink-0" />
                                    <p className="m-0 text-sm text-blue-900">
                                        Saatlik kiralama yaparken, aracın size ulaşma süresi değil, <strong>şantiyeye intikal ettikten sonra operatörün platformu açmaya başladığı an</strong> itibariyle süreç başlatılır.
                                    </p>
                                </div>
                            </div>

                            <h2>Günlük Sepetli Vinç Fiyatları</h2>
                            <p>
                                Günlük vinç kiralama (yevmiye), genellikle sabah 08:30 civarında başlayan ve akşam 17:30'a kadar devam eden uzun soluklu işler için biçilmiş kaftandır. Saatlik ödemeye kıyasla çok daha indirimli bir paket fiyattır.
                            </p>
                            <p>
                                Günlük kiralama gerektiren temel projeler:
                            </p>
                            <ul>
                                <li><strong>Bina Dış Cephe İşleri:</strong> Cam silimi, cephe kaplaması, silikon çekimi veya boya badana işlemlerinin bütün apartman boyunca kat kat aşağıya inilerek uygulanması süreci.</li>
                                <li><strong>Büyük Tabela veya Çelik Montajları:</strong> Şantiyelerde yüzlerce kilo çelik parçanın veya devasa bir markaya ait totem tabelanın gün boyu yavaşça yerine oturtulması.</li>
                                <li><strong>Sera veya Stadyum Organizasyonları:</strong> Kurumsal şirketlerin etkinlik hazırlıklarında sabahtan akşama dek taşıyıcı vinç arayışları.</li>
                            </ul>
                            <p>
                                <strong>Ankara sepetli vinç kiralama</strong> süreçlerinde günlük paketi tercih ettiğinizde, operatör size gün boyu eşlik eder. Saat stresine girmeden işçi güvenliğiniz standartlar dâhilinde ilerlerken, hem zamanı hem bütçeyi daha öngörülebilir yönetirsiniz.
                            </p>

                            <hr className="my-8" />

                            <h2>Vinç Yüksekliğine Göre Fiyatlar (Metraj Filtresi)</h2>
                            <p>
                                Fiyatı belirleyen ikinci devasa unsur, çağırılan makinenin boyutudur. Her vincin kapasitesi ve saatlik yakıt sarfiyatı aynı değildir. İhtiyacınız 15 metre ise ve şantiyenize 45 metrelik bir vinç geldiyse, makinenin devasa motoru ve yaktığı devasa hidrolik yakıt sebebiyle faturanız lüzumsuz yere kabarır.
                            </p>
                            <ul>
                                <li><strong>20-25 Metre Arası Araçlar:</strong> Şehir içindeki rutin 5-6 katlı binalar için son derece ucuzdur. Araç boyutları kompakttır. Bu sebeple günlük yevmiye bedelleri de çok bütçe dostudur.</li>
                                <li><strong>30-45 Metre Arası Araçlar:</strong> Dış cephe izolasyonları ve orta ölçekli gökdelenlerde kullanılırlar. Büyük şaseli kamyonlar üzerinde oldukları için hem yakıt hem amortisman hem de operatör risk primi (yüksekte çalışma sebebiyle) bir kademe daha pahalıdır.</li>
                                <li><strong>50-75 Metre Arasında Dev Vinçler:</strong> Viyadük köprü onarımlarında, rüzgâr güllerinde veya devasa kulelerde (Plaza, AVM vb.) iş gören bu özel makineler, parkımızdaki en değerli araçlardır ve saatlik / günlük bedelleri piyasadaki en yüksek baremi temsil eder. Dar sokaklara giremeyeceğinden genellikle açık ve geniş şantiyelere tahsis edilirler.</li>
                            </ul>

                            <hr className="my-8" />

                            <h2>Sepetli Vinç Kiralarken Nelere Dikkat Edilmeli?</h2>
                            <p>
                                Fiyat odaklı düşünerek yapılan kiralamalar, beraberinde iş sağlığı ve güvenliği ihlallerini ve dolayısıyla büyük hukuki davaları getirebilir. Kiralamayı gerçekleştirirken tek kriteriniz <em>en ucuz teklif</em> olmamalıdır. Sepeti 30 metreye çıkardığınızda, platformun şiddetli rüzgâr direncine karşı devrilmesini engelleyen unsur operatörün uzmanlığı ve sensörlü stabilizatör (ayak) teknolojisidir.
                            </p>
                            <ul>
                                <li>Fiyat teklifi aldığınız firmanın <Link href="/blog/ankara-sepetli-vinc-guvenlik-standartlari">ISO, TSE Kalite Belgeleri</Link> ve personellerinin G sınıfı ehliyete sahip olduğunu daima teyit edin.</li>
                                <li>Telefonda adresi belirtirken, vincin çalışma sahasının dar veya geniş olduğunu, arazide meyil olup olmadığını operasyon ekibine mutlaka aktarın ki, son dakika fiyat farkları sürpriziyle karşılaşmayın.</li>
                                <li>İhtiyacınıza en uygun metrajı tahmin edemiyorsanız, kurumsal <Link href="/ankara-sepetli-vinc-kiralama">Ankara Sepetli Vinç Kiralama</Link> uzmanlarımızdan ücretsiz saha ekspertizi talebinde bulunun.</li>
                            </ul>

                            <div className="mt-12 bg-primary/5 p-6 rounded-xl border border-primary/20 text-center">
                                <h4 className="text-xl font-bold mb-4">Şeffaf Kurumsal Teklifimiz</h4>
                                <p className="mb-6 mx-auto max-w-lg">Sürpriz ekstra ücretler veya aracı / komisyoncu masraflarından kurtulup doğrudan makine parkurunun sahibi olan özmal işletmemizden net rakamları duymak için şimdi arayın.</p>
                                <div className="flex justify-center">
                                    <a
                                        href="tel:+905320000000"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors"
                                    >
                                        <Calculator className="w-5 h-5" />
                                        <span>Detaylı Fiyat Listesi Ara</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="lg:w-1/3 flex flex-col gap-6">

                            {/* Hizmet Bölgeleri Widget */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                                    Merkez Hizmet Ağımız
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link href="/ostim-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Ostim Sepetli Vinç Kiralama</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/etimesgut-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Etimesgut Saatlik Vinç</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sincan-sepetli-vinc" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors group">
                                            <span>Sincan Organize Vinç Fiyatları</span>
                                            <span className="text-gray-300 group-hover:text-primary transition-colors">→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Destek Widget */}
                            <div className="bg-gray-900 text-white rounded-2xl border border-gray-800 p-6 text-center shadow-xl">
                                <Banknote className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold mb-2">Kurumsal İskontolar</h4>
                                <p className="text-sm text-gray-300 mb-6 font-light">
                                    Aylık veya yıllık uzun periyotlu şantiye taahhüt anlaşmalarında çok daha ekonomik filo indirim avantajları sunuyoruz. Projenize özel maliyeti hesaplayalım.
                                </p>
                                <a
                                    href="tel:+905320000000"
                                    className="block w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded-xl font-bold transition-all"
                                >
                                    Projeye Özel Keşif İste
                                </a>
                            </div>

                        </aside>
                    </div>
                </div>
            </main>

            <div className="bg-white pb-20 border-t border-gray-100">
                <FAQ />
            </div>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
