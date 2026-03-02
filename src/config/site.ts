export const siteConfig = {
  contact: {
    // Telefon numarası boşluksuz, ülke kodu dahil formatta (wa.me ve tel: için)
    phoneE164: '+905516066878',
    phoneDisplay: '0 (551) 606 68 78',
    whatsappNumber: '905516066878',
    email: 'info@ankarasepetlivinc.com',
    address: 'Ostim Organize Sanayi Bölgesi Yenimahalle / Ankara, TR',
  },
  whatsapp: {
    defaultMessage: "Merhaba, Ankara'da sepetli vinç kiralama için teklif almak istiyorum.",
    serviceMessageTemplate:
      "Merhaba, {hizmet} için Ankara'da sepetli vinç kiralama fiyatı almak istiyorum.",
    districtMessageTemplate:
      'Merhaba, {ilce} bölgesinde sepetli vinç kiralama için teklif almak istiyorum.',
  },
};

/**
 * Mevcut URL path'ine göre dinamik WhatsApp mesajı oluşturur.
 */
export function getWhatsAppUrl(pathname: string): string {
  let message = siteConfig.whatsapp.defaultMessage;

  // Hizmet sayfası kontrolü (/hizmetler/...)
  if (pathname.includes('/hizmetler/') && pathname.split('/').length > 2) {
    const slug = pathname.split('/').pop() || '';
    // Slug verisinden okunabilir hizmet adı çıkarıyoruz
    const serviceName = slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Özel düzeltmeler
    const formattedName = serviceName
      .replace('Cephe Temizligi', 'Cephe Temizliği')
      .replace('Agac Budama', 'Ağaç Budama')
      .replace('Elektrik Bakim', 'Elektrik Bakım');

    message = siteConfig.whatsapp.serviceMessageTemplate.replace('{hizmet}', formattedName);
  }
  // Bölge sayfası kontrolü (/bolgeler/...)
  else if (pathname.includes('/bolgeler/') && pathname.split('/').length > 2) {
    const slug = pathname.split('/').pop() || '';
    const districtName =
      slug
        .split('-')[0] // Örneğin cankaya-sepetli-vinc -> cankaya
        .charAt(0)
        .toUpperCase() + slug.split('-')[0].slice(1);

    // Özel düzeltmeler (İvedik vb.)
    const formattedDistrict = districtName
      .replace('Ivedik', 'İvedik')
      .replace('Cankaya', 'Çankaya');

    message = siteConfig.whatsapp.districtMessageTemplate.replace('{ilce}', formattedDistrict);
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;
}

export function getPhoneUrl(): string {
  return `tel:${siteConfig.contact.phoneE164}`;
}
