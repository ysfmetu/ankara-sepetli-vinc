'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ZoomableImageProps extends ImageProps {
  containerClassName?: string;
}

export default function ZoomableImage({ containerClassName = '', ...props }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll kilidi için
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`cursor-pointer group ${containerClassName}`}
        onClick={() => setIsOpen(true)}
      >
        <Image {...props} />
        {/* Hover overlay with zoom icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center rounded-[inherit] pointer-events-none">
           <div className="bg-white/95 text-primary p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform scale-90 group-hover:scale-100">
             <ZoomIn size={28} />
           </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50 shadow-lg"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image 
              src={props.src}
              alt={props.alt || 'Büyütülmüş Görsel'}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
