import Link from 'next/link';

export default function SEOBlock() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Ankara Sepetli Vinç Kiralama Hizmeti
        </h2>
        
        <div className="prose prose-lg text-gray-600 mx-auto text-left sm:text-center space-y-4">
          <p>
            Ankara sepetli vinç kiralama hizmetleri, yüksek alanlarda güvenli çalışma gerektiren işler için en ideal çözümlerden biridir. Çankaya, Keçiören, Yenimahalle, Sincan ve Etimesgut başta olmak üzere Ankara’nın tüm bölgelerinde hızlı servis sağlıyoruz.
          </p>
          <p>
            Sepetli vinçler; dış cephe temizliği, tabela montajı, aydınlatma sistemleri kurulumu ve bakım işleri gibi birçok alanda kullanılmaktadır. Modern ekipmanlarımız ve deneyimli operatör kadromuz ile hem güvenli hem de ekonomik çözümler sunuyoruz.
          </p>
          <p>
            Ankara vinç kiralama ihtiyaçlarınızda uygun fiyat, hızlı ulaşım ve profesyonel hizmet için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-700 font-medium">
            Ankara sepetli vinç kiralama hakkında detaylı bilgi için{' '}
            <Link href="/blog" className="text-primary hover:text-primary-hover font-bold underline underline-offset-2">
              blog yazılarımıza göz atın
            </Link>
            .
          </p>
        </div>
        
        <div className="mt-8">
          <div className="inline-block bg-primary/10 text-primary font-bold px-6 py-4 rounded-xl shadow-sm text-lg">
            Ankara sepetli vinç kiralama hizmeti için hemen arayın:{' '}
            <a href="tel:+905516066878" className="underline whitespace-nowrap">0551 606 68 78</a>
          </div>
        </div>
      </div>
    </section>
  );
}
