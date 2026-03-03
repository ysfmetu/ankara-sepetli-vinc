const fs = require('fs');
const path = require('path');
const https = require('https');

// Load .env.local manually to ensure PEXELS_API_KEY is available without external dependencies like 'dotenv'
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
            const key = match[1];
            let value = match[2] || '';
            // Remove wrapping quotes if present
            value = value.replace(/^['"]|['"]$/g, '');
            if (!process.env[key]) {
                process.env[key] = value;
            }
        }
    });
}

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

if (!PEXELS_API_KEY) {
    console.error("❌ PEXELS_API_KEY is not defined. Lütfen .env.local içerisine PEXELS_API_KEY ekleyin.");
    process.exit(1);
}

const slugs = [
    { slug: 'ankara-sepetli-vinc-kiralama-fiyatlari', subject: 'cherry picker truck construction' },
    { slug: 'sepetli-vinc-kac-metreye-kadar-cikar', subject: 'crane high reach building' },
    { slug: 'ostim-sepetli-vinc-kiralama', subject: 'industrial zone crane truck' },
    { slug: 'tabela-montaji-sepetli-vinc', subject: 'billboard installation crane' },
    { slug: 'cephe-temizligi-sepetli-vinc', subject: 'facade cleaning window building' },
    { slug: 'elektrik-direk-bakimi-sepetli-vinc', subject: 'electrical utility pole maintenance bucket truck' },
    { slug: 'agac-budama-sepetli-vinc', subject: 'tree trimming arborist truck' },
    { slug: 'ankara-vinc-kiralama-rehberi', subject: 'mobile crane construction site' },
    { slug: 'sepetli-vinc-kiralarken-nelere-dikkat-edilmeli', subject: 'construction worker safety harness' },
    { slug: 'ankara-sepetli-vinc-guvenlik-standartlari', subject: 'industrial safety helmet construction' }
];

const destDir = path.join(process.cwd(), 'public', 'images', 'blog');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Resim dosyasını https ile indirip diske yazma
function downloadFile(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return downloadFile(res.headers.location, filepath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`İndirme başarısız: ${res.statusCode}`));
            }
            const fileStream = fs.createWriteStream(filepath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => reject(err));
            });
        }).on('error', reject);
    });
}

// Pexels API Arama İsteği
function searchPexels(query, perPage = 10) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.pexels.com',
            path: `/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
            method: 'GET',
            headers: {
                'Authorization': PEXELS_API_KEY
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    return reject(new Error(`Pexels API Hatası: ${res.statusCode} - ${data}`));
                }
                try {
                    const json = JSON.parse(data);
                    resolve(json.photos || []);
                } catch (e) {
                    reject(new Error("Pexels'ten dönen JSON ayrıştırılamadı"));
                }
            });
        });

        req.on('error', reject);
        req.end();
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Retry / Backoff mekanizması ile API isteği fırlatır
async function fetchWithRetry(query, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await searchPexels(query);
        } catch (error) {
            const isRateLimitOrServer = error.message.includes('429') || error.message.includes('50');
            if (!isRateLimitOrServer || i === retries - 1) throw error;
            const waitTime = Math.pow(2, i) * 1000; // 1s, 2s, 4s backoff stratejisi
            console.warn(`⚠️ Sorgu tekrar deneniyor ("${query}") - Bekleniyor: ${waitTime}ms... (${i + 1}/${retries})`);
            await delay(waitTime);
        }
    }
}

async function main() {
    console.log('Pexels API üzerinden 20 gerçek görsel senkronize ediliyor...\n');

    const failedSlugs = [];
    const usedPhotoIds = new Set(); // Aynı ID'ye sahip fotoğrafları iki kez kullanmamak için takip

    for (const item of slugs) {
        const coverPath = path.join(destDir, `${item.slug}-cover.jpg`);
        const innerPath = path.join(destDir, `${item.slug}-1.jpg`);

        // Ayrı iki sorgu konsepti
        const coverQuery = `${item.subject} aerial work platform`;
        const inlineQuery = `${item.subject} worker detail`;

        try {
            // COVER (Kapak) Tarafı:
            const coverPhotos = await fetchWithRetry(coverQuery);
            let coverPhoto = coverPhotos.find(p => !usedPhotoIds.has(p.id)) || coverPhotos[0];

            if (!coverPhoto) {
                throw new Error(`Cover görseli bulunamadı: ${coverQuery}`);
            }
            usedPhotoIds.add(coverPhoto.id);
            // Pexels kaynak URL (large2x kalitesinde max görüntü)
            await downloadFile(coverPhoto.src.large2x || coverPhoto.src.large, coverPath);

            // INLINE (İç) Tarafı:
            const inlinePhotos = await fetchWithRetry(inlineQuery);
            let inlinePhoto = inlinePhotos.find(p => !usedPhotoIds.has(p.id)) || inlinePhotos[0];

            if (!inlinePhoto) {
                throw new Error(`İç görsel bulunamadı: ${inlineQuery}`);
            }
            usedPhotoIds.add(inlinePhoto.id);
            // Standart web okuması için large kaynak yeterli
            await downloadFile(inlinePhoto.src.large, innerPath);

            console.log(`✅ ${item.slug}: cover + inline saved`);
        } catch (error) {
            console.error(`❌ ${item.slug}: ${error.message}`);
            failedSlugs.push({ slug: item.slug, error: error.message });
        }
    }

    console.log('\n--- İstek İşlemleri Özeti ---');
    if (failedSlugs.length > 0) {
        console.log(`⚠️ ${failedSlugs.length} adet slug başarısız oldu:`);
        failedSlugs.forEach(f => console.log(` - ${f.slug}: ${f.error}`));
    } else {
        console.log('🎉 İşlem tamamlandı! 20 adet profesyonel görsel başarıyla ".jpg" olarak kaydedildi.');
    }
}

main();
