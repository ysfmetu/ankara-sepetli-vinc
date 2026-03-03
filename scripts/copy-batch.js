const fs = require('fs');
const path = require('path');

const brainDir = '/Users/yusufulku/.gemini/antigravity/brain/c2506b9d-ba81-4b87-ab14-1d47de543911';
const destDir = path.join(__dirname, '../public/images/blog');

const map = {
    'ankara-sepetli-vinc-kiralama-fiyatlari-cover': 'c1_fiyat_cover_1772524516728.png',
    'ankara-sepetli-vinc-kiralama-fiyatlari-1': 'i1_fiyat_inner_1772524534467.png',
    'sepetli-vinc-kac-metreye-kadar-cikar-cover': 'c2_metre_cover_1772524545950.png',
    'sepetli-vinc-kac-metreye-kadar-cikar-1': 'i2_metre_inner_1772524564394.png',
    'ostim-sepetli-vinc-kiralama-cover': 'c3_ostim_cover_1772524581604.png',
    'ostim-sepetli-vinc-kiralama-1': 'i3_ostim_inner_1772524598177.png',
    'tabela-montaji-sepetli-vinc-cover': 'c4_tabela_cover_1772524615003.png'
};

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

for (const [slug, srcFile] of Object.entries(map)) {
    const srcPath = path.join(brainDir, srcFile);
    const destPath = path.join(destDir, slug + '.png');

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('Copied ' + destPath);
    } else {
        console.error('File missing in brain dir: ' + srcPath);
    }
}
