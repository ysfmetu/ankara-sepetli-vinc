'use client';

import { useState, FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function LeadForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showOptional, setShowOptional] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  // Dynamic tracking for WhatsApp message
  const [formData, setFormData] = useState({
    district: '',
    jobType: '',
    height: '',
    workDate: '',
    workDuration: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    // Telefon inputu özel olarak yönetilecek
    if (e.target.name === 'phone') return;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPhone = (value: string) => {
    // Sadece rakamları al
    const numbers = value.replace(/\D/g, '');

    if (numbers === '') {
      setPhoneInput('');
      setPhoneError(false);
      return;
    }

    // 0 ile başlamıyorsa başına 0 ekle (kullanıcı sildiyse vs)
    let formatted = numbers;
    if (!formatted.startsWith('0')) {
      formatted = '0' + formatted;
    }

    // Max 11 haneye sınırla
    formatted = formatted.slice(0, 11);

    // Boşluklu formata çevir: 0 (5XX) XXX XX XX
    let masked = '';
    if (formatted.length > 0) masked += formatted.slice(0, 1); // 0
    if (formatted.length > 1) masked += ' (' + formatted.slice(1, 4); // (5XX
    if (formatted.length >= 4) masked += ') ' + formatted.slice(4, 7); // ) XXX
    if (formatted.length >= 7) masked += ' ' + formatted.slice(7, 9); // XX
    if (formatted.length >= 9) masked += ' ' + formatted.slice(9, 11); // XX

    setPhoneInput(masked);

    // Regex check (5 ile başlayıp 10 hane mi devam ediyor?)
    const cleanNumber = formatted;
    const isValid = /^05[0-9]{9}$/.test(cleanNumber);
    setPhoneError(!isValid && cleanNumber.length > 1);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formatPhone(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const formElement = e.currentTarget as HTMLFormElement;
    const submittedData = new FormData(formElement);
    const data = Object.fromEntries(submittedData.entries());

    // Telefon verisini temizle (sadece rakam)
    const cleanPhone = phoneInput.replace(/\D/g, '');

    if (!/^05[0-9]{9}$/.test(cleanPhone)) {
      setErrorMessage('Lütfen 05XX XXX XXXX formatında geçerli bir numara giriniz.');
      setPhoneError(true);
      setStatus('error');
      return;
    }

    data.phone = cleanPhone;

    try {
      const response = await fetch('/api/teklif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.');
      }

      setStatus('success');
    } catch (error: unknown) {
      console.error('Submit Error:', error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Bilinmeyen bir hata oluştu');
      }
      setStatus('error');
    }
  };

  // Calculate dynamic WhatsApp Link
  const basePhone = '905516066878';
  let wpMessage = `Merhaba, ${pathname === '/' ? 'Ankara' : 'siteniz'} üzerinden teklif almak istiyorum.`;

  if (status === 'success' || showOptional || formData.district || formData.jobType) {
    const parts = [
      formData.district && `${formData.district} bölgesinde`,
      formData.jobType && `${formData.jobType} için`,
      formData.height && `${formData.height}m yükseklikte`,
      formData.workDate && `${formData.workDate} tarihinde`,
      formData.workDuration && `${formData.workDuration === 'tam_gun' ? 'Tam Gün' : formData.workDuration} süresiyle`,
    ].filter(Boolean);

    if (parts.length > 0) {
      wpMessage = `Merhaba, ${parts.join(', ')} sepetli vinç kiralama fiyatı almak istiyorum.`;
    }
  }

  const wpLink = `https://wa.me/${basePhone}?text=${encodeURIComponent(wpMessage)}`;

  if (status === 'success') {
    return (
      <div
        id="teklif-formu"
        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md mx-auto relative overflow-hidden border border-gray-100 flex flex-col items-center justify-center text-center space-y-6"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
        <CheckCircle2 size={64} className="text-green-500" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Talebiniz başarıyla alındı.</h2>
          <p className="text-gray-600">
            İlgili ekiplerimiz mesajınızı aldı. En kısa sürede tarafınıza fiyat teklifi
            iletilecektir.
          </p>
        </div>
        <p className="text-sm text-gray-400">Daha hızlı yanıt almak isterseniz:</p>
        <a
          href={wpLink}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-[#128C7E] hover:bg-[#0c6b5f] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 text-lg"
        >
          <MessageCircle size={24} />
          WhatsApp&apos;tan Yazın
        </a>
      </div>
    );
  }

  return (
    <div
      id="teklif-formu"
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md mx-auto relative overflow-hidden border border-gray-100"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Hemen Teklif Alın</h2>
        <p className="text-sm text-gray-600">İhtiyacınızı belirtin, hızlıca fiyatlandıralım.</p>
      </div>

      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg text-center font-medium">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-base">
        {/* Honeypot */}
        <div className="hidden">
          <label htmlFor="honeypot">Bunu boş bırakın</label>
          <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Lokasyon */}
        <div>
          <label htmlFor="district" className="sr-only">
            Lokasyon
          </label>
          <select
            id="district"
            name="district"
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50 appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Lokasyon (İlçe) Seçiniz
            </option>
            <option value="Çankaya">Çankaya</option>
            <option value="Yenimahalle">Yenimahalle</option>
            <option value="Keçiören">Keçiören</option>
            <option value="Mamak">Mamak</option>
            <option value="Sincan">Sincan</option>
            <option value="Etimesgut">Etimesgut</option>
            <option value="Gölbaşı">Gölbaşı</option>
            <option value="Altındağ">Altındağ</option>
            <option value="Ostim / İvedik">Ostim / İvedik</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        {/* Çalışma Türü */}
        <div>
          <label htmlFor="jobType" className="sr-only">
            Çalışma Türü
          </label>
          <select
            id="jobType"
            name="jobType"
            required
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50 appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Çalışma Türü Seçiniz
            </option>
            <option value="Sepetli Vinç Kiralama">Sepetli Vinç Kiralama</option>
            <option value="Platform Kiralama">Platform Kiralama</option>
            <option value="Hiyap Kiralama">Hiyap Kiralama</option>
            <option value="Tabela Montaj">Tabela Montaj</option>
            <option value="Cephe Temizliği">Cephe Temizliği</option>
            <option value="Ağaç Budama">Ağaç Budama</option>
            <option value="Diğer">Diğer / Bilmiyorum</option>
          </select>
        </div>

        {/* İletişim Bilgileri Grubu - Ad Soyad */}
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label htmlFor="name" className="sr-only">
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              placeholder="Adınız Soyadınız"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="sr-only">
              Telefon Numarası
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phoneInput}
              onChange={handlePhoneChange}
              placeholder="0 5XX XXX XXXX"
              required
              aria-invalid={phoneError}
              inputMode="numeric"
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none bg-gray-50 placeholder-gray-400 transition-colors font-semibold tracking-wide ${phoneError
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-red-700'
                : 'border-gray-300 focus:ring-primary focus:border-primary text-gray-700'
                }`}
            />
            {phoneError && (
              <span id="phone-error" className="text-red-500 text-xs font-medium mt-1 ml-1 animate-in fade-in">
                Lütfen 5 ile başlayan geçerli bir GSM numarası giriniz.
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="flex items-center justify-center gap-2 text-primary font-medium text-sm hover:underline mx-auto mt-2 py-2"
        >
          {showOptional ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          Detay Ekle (Opsiyonel)
        </button>

        {/* Optional Fields Accordion */}
        {showOptional && (
          <div className="space-y-4 pt-2 border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
            {/* Yükseklik */}
            <div>
              <label htmlFor="height" className="sr-only">
                Çalışma Yüksekliği
              </label>
              <select
                id="height"
                name="height"
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50 appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Çalışma Yüksekliği (Opsiyonel)
                </option>
                <option value="10-20">10-20 Metre</option>
                <option value="20-30">20-30 Metre</option>
                <option value="30-45">30-45 Metre</option>
                <option value="45-70">45-70 Metre</option>
                <option value="70+">70+ Metre</option>
              </select>
            </div>

            {/* Tarih ve Süre Grubu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="workDate" className="sr-only">
                  Çalışma Tarihi
                </label>
                <input
                  type="date"
                  id="workDate"
                  name="workDate"
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50"
                  aria-label="Çalışma Tarihi"
                />
                <p className="text-[11px] text-gray-500 mt-1 ml-1">Hangi tarihte çalıştırmak istiyorsunuz?</p>
              </div>

              <div>
                <label htmlFor="workDuration" className="sr-only">
                  Çalışma Süresi
                </label>
                <select
                  id="workDuration"
                  name="workDuration"
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50 appearance-none"
                  defaultValue=""
                  aria-label="Çalışma Süresi"
                >
                  <option value="" disabled>Çalışma Süresi (Opsiyonel)</option>
                  <option value="1 saat">1 saat</option>
                  <option value="2 saat">2 saat</option>
                  <option value="3 saat">3 saat</option>
                  <option value="4 saat">4 saat</option>
                  <option value="5 saat">5 saat</option>
                  <option value="6 saat">6 saat</option>
                  <option value="8 saat">8 saat</option>
                  <option value="10 saat">10 saat</option>
                  <option value="12 saat">12 saat</option>
                  <option value="tam_gun">Tam Gün</option>
                </select>
                <p className="text-[11px] text-gray-500 mt-1 ml-1">Kaç saat çalışma istiyorsunuz?</p>
              </div>
            </div>

            {/* Açıklama */}
            <div>
              <label htmlFor="notes" className="sr-only">
                Açıklama (Opsiyonel)
              </label>
              <textarea
                id="notes"
                name="notes"
                onChange={handleInputChange}
                placeholder="Yapılacak iş hakkında detay (Opsiyonel)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 bg-gray-50 placeholder-gray-400"
                rows={2}
              ></textarea>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center mt-4 text-lg"
        >
          {status === 'loading' ? 'Gönderiliyor...' : 'Ücretsiz Teklif Al'}
        </button>

        <p className="text-center text-xs text-gray-600 mt-3 font-medium">
          * 15 dakika içinde uzman ekibimiz size dönüş yapacaktır.
        </p>
      </form>
    </div>
  );
}
