import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

// Simple in-memory rate limiting map
// Key: IP Address, Value: Array of timestamps of recent requests
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 dakika
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Clean up old timestamps
  const recentRequests = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return false;
}

export async function POST(request: Request) {
  try {
    // Basic IP extraction for Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown-ip';

    console.log(`\n[API TEKLIF] Yeni Istek Basliyor. IP: ${ip}`);

    if (isRateLimited(ip)) {
      console.warn(`[API TEKLIF] Rate limit aşıldı! IP: ${ip}`);
      return NextResponse.json(
        { error: 'Çok fazla istek gönderdiniz. Lütfen 1 dakika sonra tekrar deneyin.' },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Mask phone for logging
    const maskedPhone = data.phone ? data.phone.replace(/.(?=.{4})/g, '*') : 'Yok';
    console.log(`[API TEKLIF] Gelen Payload: Ilce=${data.district}, Is=${data.jobType}, Tel=${maskedPhone}`);

    // Honeypot Check
    console.log(`[API TEKLIF] Honeypot Degeri: "${data.honeypot}"`);
    if (data.honeypot) {
      console.warn(`[API TEKLIF] Bot Engellendi (Honeypot Dolu). IP: ${ip}`);
      // Spam detected. Return 200 to trick the bot.
      return NextResponse.json({ success: true, message: 'Talep alındı.' }, { status: 200 });
    }

    // Validation
    const { name, phone, district, jobType, height, workDate, workDuration, notes } = data;

    if (!name || name.trim() === '') {
      return NextResponse.json({ error: 'Ad soyad alanı zorunludur.' }, { status: 400 });
    }
    if (!phone || phone.trim() === '') {
      return NextResponse.json({ error: 'Telefon numarası zorunludur.' }, { status: 400 });
    }
    if (!district || district.trim() === '') {
      return NextResponse.json({ error: 'İlçe seçimi zorunludur.' }, { status: 400 });
    }
    if (!jobType || jobType.trim() === '') {
      return NextResponse.json({ error: 'İş türü seçimi zorunludur.' }, { status: 400 });
    }

    const title = `Yeni Sepetli Vinç Talebi - ${district} - ${jobType}`;
    const toEmail = process.env.MAIL_TO || 'ysf.metu@gmail.com';
    const submissionDate = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

    // Generate HTML Email Content
    const htmlContent = `
      <h2>Yeni Teklif Talebi Alındı</h2>
      <p>Web siteniz üzerinden yeni bir kiralama talebi iletildi.</p>
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold; width: 30%;">Ad Soyad</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">Telefon</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">İlçe</td>
          <td>${district}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">İş Türü</td>
          <td>${jobType}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">Yükseklik</td>
          <td>${height || 'Belirtilmedi'}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">Çalışma Tarihi</td>
          <td>${workDate || 'Belirtilmedi'}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">Çalışma Süresi</td>
          <td>${workDuration === 'tam_gun' ? 'Tam Gün' : (workDuration || 'Belirtilmedi')}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">Açıklama</td>
          <td>${notes || 'Belirtilmedi'}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">IP Adresi</td>
          <td>${ip}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold;">Gönderim Tarihi</td>
          <td>${submissionDate}</td>
        </tr>
      </table>
      <br />
      <p>Bu mail otomatik sistem tarafından gönderilmiştir.</p>
    `;

    // Only attempt to send if an API key is actually provided to avoid dev crashes
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_placeholder') {
      console.log(`[API TEKLIF] Resend ile mail gonderiliyor. Alici: ${toEmail}`);

      const resendResponse = await resend.emails.send({
        from: 'Ankara Vinç Teklif <onboarding@resend.dev>', // If using custom domain: 'Ankara Vinç <no-reply@ankarasepetlivinc.com>'
        to: [toEmail],
        subject: title,
        html: htmlContent,
      });

      if (resendResponse.error) {
        console.error('[API TEKLIF] Resend Provider Hatasi:', resendResponse.error);
        throw new Error(resendResponse.error.message);
      }

      console.log(`[API TEKLIF] Resend Basarili. ID: ${resendResponse.data?.id}`);
    } else {
      console.log('[API TEKLIF] --- RESEND_API_KEY EKSIK VEYA GECERSIZ, FALLBACK DEVREDE ---');
      console.log('[API TEKLIF] Gonderilecek Mail Icerigi (Console Log):', { toEmail, title });
    }

    return NextResponse.json(
      { success: true, message: 'Talebiniz başarıyla alındı.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu, lütfen daha sonra tekrar deneyiniz.' },
      { status: 500 }
    );
  }
}
