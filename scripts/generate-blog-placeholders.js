const fs = require('fs');
const path = require('path');

const slugs = [
    'ankara-sepetli-vinc-kiralama-fiyatlari',
    'sepetli-vinc-kac-metreye-kadar-cikar',
    'ostim-sepetli-vinc-kiralama',
    'tabela-montaji-sepetli-vinc',
    'cephe-temizligi-sepetli-vinc',
    'elektrik-direk-bakimi-sepetli-vinc',
    'agac-budama-sepetli-vinc',
    'ankara-vinc-kiralama-rehberi',
    'sepetli-vinc-kiralarken-nelere-dikkat-edilmeli',
    'ankara-sepetli-vinc-guvenlik-standartlari'
];

const destDir = path.join(process.cwd(), 'public', 'images', 'blog');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Cleanup old placeholder-X.svg files (if present) to keep the directory clean
fs.readdirSync(destDir).forEach(file => {
    if (file.startsWith('placeholder-') && file.endsWith('.svg')) {
        fs.unlinkSync(path.join(destDir, file));
    }
});

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function generateSvg(slug, isInner) {
    // 1) Deterministik Seed ve Karakter Şablonu
    const typeModifier = isInner ? ":inline" : ":cover";
    const seed = simpleHash(slug + typeModifier) % 100;

    // Temel Renkler
    const baseDark = '#080C13';
    const midDark = '#111827';
    const lightAntrasit = '#1F2937';
    const accent = '#DC2626';

    // 2) İki Ayrı Template İçin Mantık

    // Arka Plan Renkleri: Cover daha dark/hero, Inline daha açık/soft
    const bgStop1 = isInner ? lightAntrasit : midDark;
    const bgStop2 = isInner ? midDark : baseDark;

    const angle = isInner ? (180 + (seed % 60)) : (20 + (seed % 70));
    const glassOffset = seed * 3;

    // Vinç Silüeti
    const isRight = seed % 2 === 0;
    const craneScale = isInner ? (1.0 + (seed % 5) / 10) : (1.3 + (seed % 10) / 10);
    const craneX = isRight ? 1200 - (180 * craneScale) : 10 + (seed % 100);
    const craneY = (isInner ? 450 : 350) + (seed % 80);
    const craneFlip = isRight;

    const scX = craneFlip ? -craneScale : craneScale;
    const trx = craneFlip ? craneX + 300 * craneScale : craneX;

    const craneSvg = `
        <g transform="translate(${trx}, ${craneY}) scale(${scX}, ${craneScale})" opacity="${isInner ? 0.04 : 0.08}">
            <rect x="0" y="150" width="160" height="35" rx="6" fill="${accent}"/>
            <circle cx="35" cy="185" r="16" fill="${baseDark}"/>
            <circle cx="125" cy="185" r="16" fill="${baseDark}"/>
            <polygon points="50,150 90,150 320,-80 290,-100" fill="${accent}"/>
            <rect x="290" y="-120" width="50" height="35" rx="5" fill="${isInner ? midDark : baseDark}"/>
            <path d="M 70 150 L 220 10" stroke="${baseDark}" stroke-width="8" opacity="0.8"/>
            <path d="M 80 150 L 240 -10" stroke="${baseDark}" stroke-width="4" opacity="0.5"/>
            <polygon points="50,150 65,150 300,-85 290,-95" fill="#ffffff" opacity="0.1"/>
        </g>
    `;

    // Diagonal Cam Panelleri: Yönler tamamen farklı
    const glassPolygons = isInner
        // Inline: Ters Yön, Daha yoğun saydamlık
        ? `<polygon points="${1200 + glassOffset},-100 ${900 + glassOffset},-100 ${400 + glassOffset},675 ${700 + glassOffset},675" fill="url(#glassGrad)" opacity="0.08" />
           <polygon points="${500 - glassOffset},-100 ${0 - glassOffset},-100 ${-400 - glassOffset},675 ${100 - glassOffset},675" fill="url(#glassGrad)" opacity="0.06" />`
        // Cover: Orijinal İhtişamlı Yön
        : `<polygon points="${-100 - glassOffset},675 ${300 - glassOffset},675 ${600 - glassOffset},0 ${200 - glassOffset},0" fill="url(#glassGrad)" opacity="0.06" />
           <polygon points="${600 + glassOffset},675 ${1100 + glassOffset},675 ${1400 + glassOffset},0 ${900 + glassOffset},0" fill="url(#glassGrad)" opacity="0.04" />`;

    // Kırmızı Accent Çizgileri 
    // Cover: Üst Bölgede Uzun ve Belirgin, Inline: Alt Sağ Bölgede Kısa ve Kompakt
    const accentBars = isInner
        ? `<rect x="${900 - (seed % 50)}" y="600" width="200" height="10" fill="${accent}" opacity="0.8" />
           <rect x="${1120 - (seed % 50)}" y="600" width="30" height="10" fill="${accent}" opacity="0.4" />`
        : `<rect x="${seed * 5}" y="0" width="400" height="15" fill="${accent}" opacity="0.9" />
           <rect x="${seed * 5 + 420}" y="0" width="60" height="15" fill="${accent}" opacity="0.5" />`;

    return `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bgGrad" gradientTransform="rotate(${angle})">
            <stop offset="0%" stop-color="${bgStop1}" />
            <stop offset="100%" stop-color="${bgStop2}" />
        </linearGradient>
        
        <!-- Vignette: Inline'da daha hafif, Cover'da daha sert -->
        <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
            <stop offset="30%" stop-color="#000000" stop-opacity="0" />
            <stop offset="100%" stop-color="#000000" stop-opacity="${isInner ? 0.35 : 0.65}" />
        </radialGradient>
        
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0" />
        </linearGradient>

        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.1" />
            <circle cx="40" cy="40" r="1.5" fill="${accent}" opacity="0.3" />
        </pattern>
        
        <pattern id="dotPattern" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="${accent}" opacity="0.18" />
        </pattern>
        
        <filter id="softGlow">
            <feGaussianBlur stdDeviation="60" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>

    <!-- Arka Plan -->
    <rect width="100%" height="100%" fill="url(#bgGrad)" />
    
    <!-- Pattern Overlay: Inline Dot yoğun, Cover Grid düşük -->
    <rect width="100%" height="100%" fill="${isInner ? 'url(#dotPattern)' : 'url(#gridPattern)'}" />
    
    <!-- Cam Paneller -->
    ${glassPolygons}
    
    <!-- Soft Inner Glow -->
    <circle cx="600" cy="337" r="300" fill="${lightAntrasit}" opacity="${isInner ? 0.2 : 0.4}" filter="url(#softGlow)"/>

    <!-- Mekanik Vinç Silüeti -->
    ${craneSvg}
    
    <!-- Kırmızı Accent Markörler -->
    ${accentBars}

    <!-- Vignette Çerçevesi -->
    <rect width="100%" height="100%" fill="url(#vignette)" pointer-events="none" />
</svg>`;
}

console.log('Generating distinct Cover and Inline SVGs...');
slugs.forEach((slug) => {
    const coverPath = path.join(destDir, slug + '-cover.svg');
    const innerPath = path.join(destDir, slug + '-1.svg');

    fs.writeFileSync(coverPath, generateSvg(slug, false));
    fs.writeFileSync(innerPath, generateSvg(slug, true));
    console.log(`Generated Distinct Pair: ${slug}`);
});
console.log('Successfully completed distinct SVG generation.');
