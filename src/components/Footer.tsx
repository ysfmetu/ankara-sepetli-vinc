import { Phone, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { siteConfig, getPhoneUrl } from '@/config/site';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const telLink = getPhoneUrl();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 md:pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="mb-6 flex">
              <Link href="/" aria-label="Ankara Sepetli Vinç Ana Sayfa" className="inline-block relative w-max">
                <Logo variant="light" hideText={false} iconSize={44} />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ankara&apos;nın her noktasına 7/24 kesintisiz, güvenilir ve uygun fiyatlı kiralık
              sepetli vinç, platform ve hiyap hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              İletişim
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm">Ostim Organize Sanayi Bölgesi Yenimahalle / Ankara</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={telLink} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a
                  href="mailto:info@ankarasepetlivinc.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@ankarasepetlivinc.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary shrink-0" size={18} />
                <span className="text-sm">7 Gün 24 Saat Hizmet</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Hızlı Menü
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Blog (Bilgi Merkezi)
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/sepetli-vinc-kiralama"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2 mt-4 pt-4 border-t border-gray-800"
                >
                  <span className="text-primary">›</span> Sepetli Vinç Kiralama
                </Link>
              </li>
              <li>
                <Link
                  href="/operatorlu-vinc-kiralama"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Operatörlü Vinç
                </Link>
              </li>
              <li>
                <Link
                  href="/saatlik-vinc-kiralama"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Saatlik Vinç
                </Link>
              </li>
              <li>
                <Link
                  href="/gunluk-vinc-kiralama"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Günlük Vinç
                </Link>
              </li>
            </ul>
          </div>

          {/* Badges/Certificates Placeholder */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Sertifikalarımız
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-2 border-yellow-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-yellow-500 font-bold text-xs">K1</span>
                </div>
                <span className="text-xs font-medium text-gray-400">K1 Belgesi</span>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-2 border-green-500 rounded-full flex items-center justify-center mb-2">
                  <ShieldCheck className="text-green-500" size={20} />
                </div>
                <span className="text-xs font-medium text-gray-400">Sigorta</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <span className="text-lg font-bold text-white mb-2">Tüm Araçlarımızda:</span>
              <span className="bg-orange-100 text-orange-800 border border-orange-200 px-3 py-1.5 rounded text-sm text-center font-bold">
                Periyodik Bakım Şartı
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-gray-500">
            <p className="mb-1 md:mb-0 md:inline-block">
              &copy; {currentYear} Ankara Sepetli Vinç. Tüm Hakları Saklıdır.
            </p>
            <span className="hidden md:inline-block mx-2">|</span>
            <p className="inline-block">
              Web Tasarım & Yazılım:{' '}
              <a
                href="https://imerasoft.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Imerasoft Web Tasarım ve Yazılım"
                className="text-gray-400 hover:text-white hover:underline transition-all"
              >
                Imerasoft
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
