const fs = require('fs');
const path = require('path');

const districts = [
    { file: 'yenimahalle', name: 'Yenimahalle' },
    { file: 'ostim', name: 'Ostim' },
    { file: 'ivedik', name: 'İvedik' }
];

districts.forEach(d => {
    const fp = path.join(__dirname, `src/app/bolgeler/${d.file}-sepetli-vinc-kiralama/page.tsx`);
    if (!fs.existsSync(fp)) return;

    let content = fs.readFileSync(fp, 'utf8');

    // Match the prose div exactly or its variants
    const match = content.match(/<div className="prose[^>]*>/);
    if (!match) {
        console.log("Start marker not found in " + d.file);
        return;
    }

    const startIndex = match.index;
    const endMarker = '          </div>\n        </div>\n\n        <CallToAction';
    const endIndex = content.indexOf(endMarker);

    if (endIndex === -1) {
        console.log(`End marker not found in ${d.file}`);
        return;
    }

    const newProse = `<div className="prose prose-lg prose-red max-w-none">
            <p className="lead font-medium text-xl text-gray-700">
              Ankara ${d.name} bölgesi ve çevresinde yılların deneyimiyle en hızlı, en güvenli sepetli vinç kiralama hizmetini sunuyoruz. Geniş makine parkurumuz sayesinde 10 metreden 70+ metreye kadar tüm yükseklik ihtiyaçlarınıza aynı gün çözüm üretiyoruz.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">En Sık Kullanım Alanları</h3>
            <ul>
              <li><strong>Dış Cephe İşlemleri:</strong> Cam temizliği, boya, mantolama ve tamirat.</li>
              <li><strong>Tabela ve Reklam:</strong> Totem tabela montajı, afiş asımı ve sökümü.</li>
              <li><strong>Ağaç Bakımı:</strong> Tehlike arz eden ve yüksek ağaçların budanması.</li>
              <li><strong>Elektrik ve Aydınlatma:</strong> Sokak lambaları ve yüksek direk arızaları.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Kiralama Sürecimiz (3 Adım)</h3>
            <ol className="space-y-2">
              <li><strong>1. İhtiyaç Analizi:</strong> Bizi arayın veya form doldurun. Ücretsiz keşif veya telefonda durum tespiti yapalım.</li>
              <li><strong>2. Doğru Araç Seçimi:</strong> Metraj ve kullanım alanına en uygun sepetli vincimizi hemen hazırlayalım.</li>
              <li><strong>3. Hızlı Operasyon:</strong> Sertifikalı operatörümüzle birlikte aracımız tam saatinde adresinizde olsun ve işiniz güvenle tamamlansın.</li>
            </ol>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4 not-prose mt-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">${d.name} bölgesine ne kadar sürede araç gönderebilirsiniz?</h4>
                <p className="text-gray-600 text-sm">Bölgelerdeki hazır araçlarımız sayesinde genellikle 30-45 dakika içerisinde acil sevkiyat sağlayabiliyoruz.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Operatör hizmeti fiyata dahil mi?</h4>
                <p className="text-gray-600 text-sm">Evet, tüm kiralama hizmetlerimizde alanında uzman, iş güvenliği sertifikalı operatörlerimiz aracı kullanmak üzere fiyata dahildir.</p>
              </div>
            </div>
`;

    const newContent = content.substring(0, startIndex) + newProse + "\n" + content.substring(endIndex);

    fs.writeFileSync(fp, newContent, 'utf8');
    console.log(`Updated ${d.file}`);
});
