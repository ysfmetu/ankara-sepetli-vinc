'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl, getPhoneUrl, siteConfig } from '@/config/site';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  const phone = siteConfig.contact.phoneDisplay;
  const telLink = getPhoneUrl();
  const wpLink = getWhatsAppUrl(pathname);

  // Scroll Shrink Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to catch intermediate scroll positions
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax Micro Effect (Desktop Only)
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return; // Desktop only

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      rafId = requestAnimationFrame(() => {
        // Calculate very subtle parallax offset (max 3px)
        const moveX = ((mouseX - centerX) / centerX) * 2;
        const moveY = ((mouseY - centerY) / centerY) * 2;

        setParallaxOffset({ x: moveX, y: moveY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-250 ease-in-out border-b border-gray-200 ${isScrolled
        ? 'bg-white/85 backdrop-blur-md shadow-lg shadow-black/5'
        : 'bg-white shadow-sm'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-250 ease-in-out ${isScrolled ? 'h-[60px]' : 'h-[72px] md:h-20'}`}>
          {/* Logo & Brand */}
          <Link href="/" aria-label="Ankara Sepetli Vinç Ana Sayfa" className="flex items-center">
            <div
              className="transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`
              }}
            >
              <Logo isScrolled={isScrolled} variant="dark" />
            </div>
          </Link>

          {/* Actions & Menu */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button (Visible on both Mobile and Desktop) */}
            <a
              href={wpLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp'tan Yazın"
              className={`flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full font-medium transition-all duration-300 shadow-sm overflow-hidden min-h-[44px] justify-center ${isScrolled
                ? 'px-3 py-1.5 text-xs md:text-sm'
                : 'px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base'
                }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4 md:w-5 md:h-5' : 'w-5 h-5 md:w-[22px] md:h-[22px]'}`}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>WhatsApp'tan Yazın</span>
            </a>

            {/* Phone Button (Desktop Only) */}
            <a
              href={telLink}
              aria-label="Telefon ile ara"
              className={`hidden md:block text-gray-800 font-bold hover:text-primary transition-colors ${isScrolled ? 'text-sm' : 'text-base lg:text-lg'}`}
            >
              {phone}
            </a>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-primary focus:outline-none p-2 ml-1"
              aria-label="Menüyü aç/kapat"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
            <nav className="flex flex-col space-y-3 py-4 text-gray-800 font-medium">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hizmetler"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary"
              >
                Hizmetler
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary"
              >
                Blog
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary"
              >
                İletişim
              </Link>
              <div className="border-t border-gray-100 my-1 pt-2 flex flex-col space-y-3">
                <Link
                  href="/sepetli-vinc-kiralama"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-primary pl-2 border-l-2 border-transparent hover:border-primary transition-all"
                >
                  Sepetli Vinç Kiralama
                </Link>
                <Link
                  href="/operatorlu-vinc-kiralama"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-primary pl-2 border-l-2 border-transparent hover:border-primary transition-all"
                >
                  Operatörlü Vinç
                </Link>
                <Link
                  href="/saatlik-vinc-kiralama"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-primary pl-2 border-l-2 border-transparent hover:border-primary transition-all"
                >
                  Saatlik Vinç
                </Link>
                <Link
                  href="/gunluk-vinc-kiralama"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-primary pl-2 border-l-2 border-transparent hover:border-primary transition-all"
                >
                  Günlük Vinç
                </Link>
              </div>
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href={wpLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-4 py-3 rounded-xl font-medium transition-colors min-h-[44px]"
                onClick={() => setIsOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>WhatsApp&apos;tan Yazın</span>
              </a>
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-xl font-bold transition-colors min-h-[44px]"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                <span>Hemen Arayın</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
