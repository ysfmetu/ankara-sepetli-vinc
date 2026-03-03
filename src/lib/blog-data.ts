export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string; // HTML content
    date: string;
    readTime: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: 'Ankara\'da Sepetli Vinç Seçerken Nelere Dikkat Edilmeli?',
        slug: 'ankarada-sepetli-vinc-secerken-nelere-dikkat-edilmeli',
        excerpt: 'Sepetli vinç kiralarken yükseklik, zemin durumu ve güvenlik donanımları gibi kriterleri doğru analiz etmek, iş süreçlerinizi hızlandırır ve görünmez kazaları önler.',
        readTime: '4 dk',
        date: '10 Mart 2026',
        image: '/images/services/agac-budama.jpg',
        content: `
      <p class="mb-4">Ankara gibi geniş bir coğrafyada tabela montajı, cephe temizliği veya ağaç budama gibi işlemler için doğru ekipmanı seçmek hayati önem taşır. Yanlış sepetli vinç tercihi işin gecikmesine veya güvenlik risklerine yol açabilir.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">1. Ulaşılacak Maksimum Yüksekliği Belirleyin</h3>
      <p class="mb-4">Kiralamanız gereken aracın bom (kol) uzunluğu, çalışacağınız noktadan en az 2-3 metre daha fazla erişim kapasitesine sahip olmalıdır. Ayrıca rüzgarlı günlerde maksimum uzantıda çalışmanın sepet dengesini etkileyebileceğini unutmayın.</p>

      <h3 class="text-xl font-bold mt-8 mb-4">2. Zemin Analizi Yapın</h3>
      <p class="mb-4">Sepetli vincin kurulacağı alanın eğimi ve taşıma kapasitesi önemlidir. Toprak zeminler için farklı, beton veya asfalt zeminler için farklı destek (stabilizatör) padlerine sahip araçlar tercih edilmelidir.</p>

      <h3 class="text-xl font-bold mt-8 mb-4">3. Operatör Sertifikasyonu ve İş Güvenliği</h3>
      <p class="mb-4">Kiraladığınız firmanın operatörleri Mesleki Yeterlilik Kurumu (MYK) belgesine sahip olmalıdır. Araç periyodik bakım testleri tam değilse kesinlikle çalışmaya başlanmamalıdır. Biz Ankara Sepetli Vinç olarak her zaman A Sınıfı iş güvenliği sağlamaktayız.</p>
    `
    },
    {
        title: 'Dış Cephe ve Cam Temizliği İçin Neden Sepetli Vinç Kullanılmalı?',
        slug: 'dis-cephe-ve-cam-temizligi-icin-neden-sepetli-vinc-kullanilmali',
        excerpt: 'Plazaların, iş merkezlerinin veya yüksek katlı rezidansların temizliğinde iskele kurmaktan %70 daha hızlı ve çok daha güvenli olan sepetli platform çözümleri.',
        readTime: '3 dk',
        date: '02 Mart 2026',
        image: '/images/services/cephe-temizligi.jpg',
        content: `
      <p class="mb-4">Büyük şehirlerdeki yüksek katlı binaların estetik görünümlerini korumak periyodik temizlik gerektirir. Geleneksel iskele kurma yöntemleri hem ciddi zaman kaybıdır hem de binaya hasar verebilir.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Güvenlik ve Konfor Bir Arada</h3>
      <p class="mb-4">Sepetli vinçlerimiz ile temizlik personeli, sarsılmayan, etrafı tamamen korunaklı çelik sepetin içinde tüm işini güvenle yapar. Olası bir rüzgarda veya ani harekette hidrolik emniyet sistemleri devreye girer.</p>

      <h3 class="text-xl font-bold mt-8 mb-4">Daha Hızlı ve Verimli Operasyon</h3>
      <p class="mb-4">Cephe iskelelerinin kurulum süreci günler sürebilir. Ancak sepetli vinç, sadece 15 dakika içerisinde çalışma alanına park eder, dengesini sağlar ve metrelerce yüksekliğe dakikalar içinde ulaşır.</p>
    `
    },
    {
        title: 'Saatlik Hiyap ve Sepetli Vinç Kiralama Fiyatları Ankara (2026)',
        slug: 'saatlik-hiyap-ve-sepetli-vinc-kiralama-fiyatlari-ankara',
        excerpt: 'Ankara ilçelerinde yapılacak çalışmalara göre günlük ve saatlik kiralama maliyetlerini etkileyen faktörler ile en uygun teklifi almanın yolları.',
        readTime: '5 dk',
        date: '15 Şubat 2026',
        image: '/images/services/elektrik-bakim.jpg',
        content: `
      <p class="mb-4">Vinç kiralama maliyetleri sabit bir tarife üzerinden işlemiyor. Çalışma süresi, kullanılacak ekipmanın sepet ulaşım yüksekliği (metraj), veya ekstra yük eklentilerine göre değişkenlik gösterebiliyor.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Metraja Göre Fiyatlandırma</h3>
      <p class="mb-4">20 metrelik standart bir vincin saat ücretleri ile 70 metrelik devasa bomlu bir aracın maliyeti farklıdır. İşinizi çözecek en düşük kapasiteli, verimli aracı kiralayarak kar edebilirsiniz. Deneyimli bir firmadan alınan iş ekspertizi gereğinden büyük araç kiralamanızı önler.</p>

      <h3 class="text-xl font-bold mt-8 mb-4">Adres - Mesafe İlişkisi</h3>
      <p class="mb-4">Ostim, İvedik, Sincan veya Mamak gibi Ankara'nın farklı uçlarında yer alan şantiyelere aracın intikal etme süresi yakıt masraflarına dahil edilebilir. Ancak bölgesinde güçlü filosu olan şirketler (bizim gibi) bu taşıma ücretlerini minimize eder.</p>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
        <h4 class="font-bold text-lg mb-2 text-gray-900">Gerçek ve En İyi Fiyat Garantisi İçin</h4>
        <p class="text-gray-600 text-sm">Hiçbir tahmine bağlı kalmadan iletişim numaramızdan bizi arayarak saniyeler içerisinde projenize en uygun saatlik, günlük veya haftalık fiyatımızı net olarak öğrenebilirsiniz.</p>
      </div>
    `
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
