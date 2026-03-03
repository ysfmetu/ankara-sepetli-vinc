# Ankara Sepetli Vinç

Bu proje [Next.js](https://nextjs.org) (App Router), TypeScript ve Tailwind CSS kullanılarak oluşturulmuştur.

## Özellikler

- **Framework:** Next.js (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS
- **Lint/Format:** ESLint + Prettier
- **SEO & Performans:** Next.js Metadata API entegrasyonu ve (default) Server Components yapısı, `next/image` kullanımı.

---

### Local Development

Yerel ortamınızda geliştirme yapmak için:

```bash
npm install
npm run dev
```

### Production Test

Uygulamayı canlı ortama / Vercel'e göndermeden önce localde production build almak ve test etmek için:

```bash
npm install
npm run build
npm run start
```

### Environment Variables

Projenin iletişim formunu kullanabilmesi için Resend SDK entegre edilmiştir. Ayrıca blog görsellerini otomatik indirebilmek için Pexels API ayarı gerekir. Kök dizinde (root) bir `.env.local` veya `.env` dosyası oluşturun ve aşağıdaki değerleri kendi altyapınıza göre doldurun:

```env
RESEND_API_KEY=re_sizin_api_anahtariniz
MAIL_TO=ysf.metu@gmail.com
MAIL_FROM=onboarding@resend.dev

# Blog Resimleri Otomatik İndirme İçin (Pexels API Key)
PEXELS_API_KEY=sizin_pexels_api_anahtariniz
```

**Not:** Vercel Dashboard üzerinde Environment Variables girilmezse, production ortamında iletişim formu (mail) çalışmaz.

---

### Vercel Deploy

Uygulamayı Vercel üzerinde canlıya almak için aşağıdaki adımları izleyin:

1) Vercel'e GitHub hesabınız ile giriş yapın.
2) Sağ üstteki **"Add New"** > **"Project"** butonuna (veya "Import Project") tıklayın.
3) `ankara-sepetli-vinc` reposunu seçip "Import" deyin.
4) Çıkan konfigürasyon sayfasında **Environment Variables** bölümünü genişletin ve ekleyin:
   - `RESEND_API_KEY` = Sizin Resend anahtarınız
   - `MAIL_TO` = `ysf.metu@gmail.com`
5) **Deploy** butonuna basarak süreci başlatın.
6) Deploy başarılı olduktan sonra, sitedeki iletişim formunu test edin ve Vercel panosundaki **Project → Logs** sekmesinden `/api/teklif` end-point'inin loglarını kontrol edin.

---
Deployment trigger update.
