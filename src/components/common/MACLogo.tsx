import React, { useState } from 'react';

interface MACLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white-text' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MACLogo: React.FC<MACLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  const heightClass = {
    sm: 'h-8 md:h-9',
    md: 'h-10 sm:h-11 md:h-12 lg:h-13',
    lg: 'h-12 sm:h-14 md:h-16 lg:h-18',
    xl: 'h-16 sm:h-20 md:h-24 lg:h-28',
  }[size];

  const textColorClass = variant === 'white-text' ? 'text-white' : 'text-[#111111]';

  // If using authoritative web logo PNG provided via asset link
  if (variant !== 'icon' && !imageError && variant !== 'white-text') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/mac-web-logo.png"
          alt="Mastermind Alliance Coaching"
          className={`${heightClass} w-auto object-contain shrink-0`}
          style={{ aspectRatio: '500 / 111' }}
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Vector SVG Fallback / Dark Background Variant / Icon Only
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authoritative Emblem */}
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto shrink-0 aspect-[160/140]`}
        aria-label="Mastermind Alliance Coaching Logo Icon"
      >
        {/* Star */}
        <polygon
          points="80,18 83,27 92,27 85,32 87,41 80,36 73,41 75,32 68,27 77,27"
          fill="#D13A28"
        />

        {/* Head of Left Figure */}
        <circle cx="52" cy="46" r="10" fill="#D13A28" />

        {/* Head of Right Figure */}
        <circle cx="106" cy="42" r="9" fill={variant === 'white-text' ? '#E5E5E5' : '#111111'} />

        {/* Dynamic Left Body Arc (Red) */}
        <path
          d="M 44,60 C 58,52 82,58 92,72 C 78,82 52,80 40,70 C 34,65 38,62 44,60 Z"
          fill="#D13A28"
        />

        {/* Lower Charcoal Sweeping Loop (Alliance ring) */}
        <path
          d="M 32,84 C 38,72 65,70 94,76 C 118,81 126,92 118,102 C 108,112 76,116 46,104 C 36,100 28,92 32,84 Z"
          stroke={variant === 'white-text' ? '#888888' : '#333333'}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Lower Base Foundation Arc (Red Swoosh) */}
        <path
          d="M 28,124 C 55,126 95,122 136,110 C 120,118 85,128 28,124 Z"
          fill="#D13A28"
        />
        
        {/* Supporting Red Arc Accent */}
        <path
          d="M 42,92 C 34,105 45,122 62,122 C 70,122 66,110 58,102 C 52,96 46,92 42,92 Z"
          fill="#D13A28"
        />

        {/* Dark Figure Intertwined Reach */}
        <path
          d="M 98,58 C 110,64 122,78 116,92 C 112,102 96,110 82,118"
          stroke={variant === 'white-text' ? '#FFFFFF' : '#111111'}
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand Text Lockup */}
      {variant !== 'icon' && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-extrabold tracking-tight text-[#D13A28] text-base md:text-lg lg:text-xl font-['Plus_Jakarta_Sans',sans-serif]">
            MASTERMIND
          </span>
          <span
            className={`font-bold tracking-[0.14em] text-[10px] md:text-xs lg:text-[13px] uppercase mt-0.5 font-['Inter',sans-serif] ${textColorClass}`}
          >
            ALLIANCE COACHING
          </span>
        </div>
      )}
    </div>
  );
};
