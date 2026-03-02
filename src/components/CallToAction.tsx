'use client';

import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl, getPhoneUrl, siteConfig } from '@/config/site';

interface CallToActionProps {
  title?: string;
  message?: string;
}

export default function CallToAction({
  title = 'Projeleriniz İçin Hemen Teklif Alın',
  message,
}: CallToActionProps) {
  const pathname = usePathname();
  const wpLink = message
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
    : getWhatsAppUrl(pathname);
  const telLink = getPhoneUrl();

  return (
    <section className="bg-primary pt-16 pb-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{title}</h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
            İhtiyacınıza en uygun vinç seçeneğini belirlemek ve avantajlı fiyatlarımızdan
            yararlanmak için uzman ekibimize ulaşın.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Teklif Al Form Yönlendirmesi */}
            <Link
              href="/#teklif-formu"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Hemen Teklif Al
              <ArrowRight size={20} />
            </Link>

            {/* WhatsApp Yönlendirmesi */}
            <a
              href={wpLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              WhatsApp&apos;tan Yazın
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
            <span className="text-sm">Veya doğrudan arayın:</span>
            <a
              href={telLink}
              className="flex items-center gap-1 font-bold hover:text-white transition-colors"
            >
              <Phone size={16} />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
