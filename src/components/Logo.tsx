'use client';

import { useEffect, useState } from 'react';

interface LogoProps {
    isScrolled?: boolean;
    variant?: 'light' | 'dark'; // 'dark' generates dark text optimized for light backgrounds. 'light' generates white text.
    hideText?: boolean;
    iconSize?: number;
}

export default function Logo({
    isScrolled = false,
    variant = 'dark',
    hideText = false,
    iconSize = 56
}: LogoProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Delay slightly to trigger the fade-in animation gracefully on component mount
        const timer = setTimeout(() => setIsLoaded(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const textColor = variant === 'dark' ? '#1F2937' : '#F9FAFB'; // Koyu antrasit veya tam beyaz
    const subtextColor = variant === 'dark' ? 'text-gray-500' : 'text-gray-300';
    const headingColor = variant === 'dark' ? 'text-gray-900' : 'text-white';
    const primaryColor = '#B91C1C'; // Daha koyu ve tok kırmızı

    return (
        <div className="group flex items-center relative cursor-pointer">
            {/* SVG Icon Container - Scales down on scroll (56px to 48px relative size) */}
            <div
                className={`relative flex items-center justify-center transition-transform duration-250 ease-in-out origin-left ${isScrolled ? 'scale-[0.85]' : 'scale-100'
                    }`}
                style={{ height: `${iconSize}px`, width: `${iconSize}px`, minWidth: `${iconSize}px` }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                >
                    {/* Base A S Monogram Text - Fade In */}
                    <g className={`transition-opacity duration-400 ease-out motion-reduce:opacity-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <text
                            x="0"
                            y="46"
                            fontFamily="system-ui, -apple-system, sans-serif"
                            fontWeight="900"
                            fontSize="28"
                            fill={textColor}
                            letterSpacing="-1.5"
                        >
                            AS
                        </text>
                    </g>

                    {/* V (Crane Pattern) - Initial Slide Down & Fade In */}
                    <g
                        className={`transition-all duration-500 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[8px]'
                            }`}
                    >
                        {/* Crane Arm Hover Rotation Group */}
                        <g className="origin-[46px_48px] transition-transform duration-300 ease-in-out group-hover:rotate-[4deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
                            <path
                                d="M 39 20 L 46 48 L 62 12"
                                stroke={primaryColor}
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {/* Hydraulic Details */}
                            <line x1="41" y1="36" x2="51" y2="30" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />

                            {/* Basket Group - Micro Bounce Hover */}
                            <g className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                                <rect x="58" y="4" width="10" height="8" rx="1" stroke={primaryColor} strokeWidth="2.2" fill="transparent" />
                                <line x1="58" y1="8" x2="68" y2="8" stroke={primaryColor} strokeWidth="1.2" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            {/* Corporate Identity Text Container: Fades layout-safely on sticky shrink, hides completely on mobile */}
            {!hideText && (
                <div
                    className={`ml-1 hidden sm:flex flex-col relative w-[170px] origin-left transition-all duration-400 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                        }`}
                >
                    <span
                        className={`text-[1.15rem] font-bold leading-tight transition-transform duration-250 origin-left ${headingColor} ${isScrolled ? 'scale-95' : 'scale-100'
                            }`}
                    >
                        Ankara Sepetli Vinç
                    </span>
                    <span
                        className={`text-[11px] font-medium tracking-wide mt-0.5 ${subtextColor} absolute top-full left-0 transition-opacity duration-200 ease-in-out ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        Kiralama Hizmetleri
                    </span>
                </div>
            )}
        </div>
    );
}
