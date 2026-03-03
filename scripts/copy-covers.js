const fs = require('fs');
const path = require('path');

const brainDir = '/Users/yusufulku/.gemini/antigravity/brain/c2506b9d-ba81-4b87-ab14-1d47de543911';
const destDir = path.join(__dirname, '../public/images/blog');

const map = {
    'ankara-sepetli-vinc-kiralama-fiyatlari': 'ankara_sepetli_vinc_kiralama_fiyatlari_cover_1772523122706.png',
    'sepetli-vinc-kac-metreye-kadar-cikar': 'sepetli_vinc_kac_metreye_kadar_cikar_cover_1772523142148.png',
    'ostim-sepetli-vinc-kiralama': 'ostim_sepetli_vinc_kiralama_cover_1772523157766.png',
    'tabela-montaji-sepetli-vinc': 'tabela_montaji_sepetli_vinc_cover_1772523171230.png',
    'cephe-temizligi-sepetli-vinc': 'cephe_temizligi_sepetli_vinc_cover_1772523186259.png',
    'elektrik-direk-bakimi-sepetli-vinc': 'elektrik_direk_bakimi_sepetli_vinc_cover_1772524081850.png',
    'agac-budama-sepetli-vinc': 'agac_budama_sepetli_vinc_cover_1772524096606.png',
    'ankara-vinc-kiralama-rehberi': 'ankara_vinc_kiralama_rehberi_cover_1772524112015.png',
    'sepetli-vinc-kiralarken-nelere-dikkat-edilmeli': 'sepetli_vinc_kiralarken_nelere_dikkat_edilmeli_cover_1772524124416.png',
    'ankara-sepetli-vinc-guvenlik-standartlari': 'ankara_sepetli_vinc_guvenlik_standartlari_cover_1772524143161.png'
};

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

for (const [slug, srcFile] of Object.entries(map)) {
    const srcPath = path.join(brainDir, srcFile);
    const destPath = path.join(destDir, slug + '-cover.png');

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('Copied ' + destPath);
    } else {
        console.error('File missing in brain dir: ' + srcPath);
    }
}
