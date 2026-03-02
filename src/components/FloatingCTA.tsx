import { Phone, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function FloatingCTA() {
  const telLink = 'tel:+905516066878';
  const wpLink = 'https://wa.me/905516066878';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.15)] z-50">
      <div className="flex items-center justify-between gap-2 max-w-sm mx-auto">
        <a
          href={telLink}
          className="flex-1 flex flex-col items-center justify-center py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
        >
          <Phone size={22} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">Hemen Ara</span>
        </a>

        <a
          href={wpLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors"
        >
          <MessageCircle size={22} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        <Link
          href="#teklif-formu"
          className="flex-[1.2] flex flex-col items-center justify-center py-2 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors shadow-sm"
        >
          <FileText size={22} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wider">Teklif Al</span>
        </Link>
      </div>
    </div>
  );
}
