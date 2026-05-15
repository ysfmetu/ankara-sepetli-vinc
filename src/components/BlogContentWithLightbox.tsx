'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface BlogContentWithLightboxProps {
  html: string;
}

export default function BlogContentWithLightbox({ html }: BlogContentWithLightboxProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll lock when lightbox is open
  useEffect(() => {
    if (lightboxSrc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxSrc]);

  // Keyboard ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Attach click listeners to all <img> tags in rendered HTML
  useEffect(() => {
    if (!contentRef.current) return;
    const imgs = contentRef.current.querySelectorAll('img');
    const handlers: Array<{ img: HTMLImageElement; handler: () => void }> = [];

    imgs.forEach((img) => {
      // Skip images marked as no-lightbox (e.g. inside link cards)
      if (img.dataset.noLightbox) return;

      // Style: fully visible inside frame, cursor pointer
      img.style.objectFit = 'contain';
      img.style.cursor = 'zoom-in';
      img.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

      const handler = () => {
        setLightboxSrc(img.src);
        setLightboxAlt(img.alt || 'Görsel');
      };

      img.addEventListener('click', handler);
      handlers.push({ img, handler });

      // Hover effects via JS (can't use CSS on dangerouslySetInnerHTML content reliably)
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.02)';
        img.style.boxShadow = '0 8px 30px rgba(0,0,0,0.18)';
      });
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
      });
    });

    return () => {
      handlers.forEach(({ img, handler }) => img.removeEventListener('click', handler));
    };
  }, [html]);

  return (
    <>
      {/* Blog content */}
      <div
        ref={contentRef}
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-primary-hover prose-img:rounded-xl text-gray-700 leading-relaxed overflow-hidden"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Lightbox Overlay */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-50 shadow-lg"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            aria-label="Kapat"
          >
            <X size={28} />
          </button>

          {/* Image container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              style={{
                maxWidth: '100%',
                maxHeight: '88vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '0.75rem',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              }}
            />
          </div>

          {/* Caption */}
          {lightboxAlt && (
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white/80 text-sm px-4">{lightboxAlt}</p>
            </div>
          )}

          {/* Click outside hint */}
          <div className="absolute top-5 left-5">
            <span className="text-white/50 text-xs">Kapatmak için tıkla veya ESC</span>
          </div>
        </div>
      )}
    </>
  );
}
