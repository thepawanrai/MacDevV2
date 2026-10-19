import React, { useState } from 'react';
import { MapPin, ShieldCheck, Award } from 'lucide-react';

interface FounderPortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showBadge?: boolean;
  altText?: string;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  className = '',
  size = 'md',
  showBadge = true,
  altText = 'Deepak Verma — Founder and Mentor, Mastermind Alliance Coaching',
}) => {
  const [imgError, setImgError] = useState(false);

  const containerSizes = {
    sm: 'w-20 h-20',
    md: 'w-36 h-36',
    lg: 'w-56 h-56 sm:w-64 sm:h-64',
    xl: 'w-72 h-80 sm:w-80 sm:h-96',
    hero: 'w-full max-w-sm sm:max-w-md aspect-[4/5]',
  }[size];

  return (
    <div className={`relative group shrink-0 ${className}`}>
      {/* Editorial Decorative Framing */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#D13A28]/20 via-neutral-200/40 to-neutral-100 rounded-3xl blur-xs group-hover:from-[#D13A28]/30 transition-all pointer-events-none" />

      <div className={`relative ${containerSizes} rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#1c1c1c] via-[#111111] to-[#0a0a0a] border border-neutral-800 shadow-xl flex flex-col justify-between p-6 select-none`}>
        {!imgError ? (
          <>
            <img
              src="/deepak-verma-founder.jpg"
              alt={altText}
              className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
              onError={(e) => {
                if (e.currentTarget.src !== 'https://plain-apac-prod-public.komododecks.com/202610/18/rVAfVRSTZeFvxOExiiUc/image.jpg') {
                  e.currentTarget.src = 'https://plain-apac-prod-public.komododecks.com/202610/18/rVAfVRSTZeFvxOExiiUc/image.jpg';
                } else {
                  setImgError(true);
                }
              }}
            />
            {/* Subtle bottom vignette to ensure text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          </>
        ) : null}

        {/* Clean Top Tag */}
        <div className="relative z-10 flex items-start justify-end w-full">
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-neutral-700/60 rounded-full text-[10px] font-bold text-neutral-300 uppercase tracking-wider">
            Mentor & Coach
          </span>
        </div>

        {/* Bottom Details (Deepak Verma Name & Title Only) */}
        <div className="relative z-10 space-y-1 pt-12">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Deepak Verma
          </h3>

          <p className="text-xs text-neutral-300 font-medium">
            Founder & Principal Mentor
          </p>
        </div>
      </div>

      {/* Floating Trust Badge */}
      {showBadge && (
        <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-white border border-neutral-200/90 shadow-lg rounded-xl px-3.5 py-2 flex items-center gap-2.5 z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D13A28] animate-pulse" />
          <div className="text-left">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
              15+ Years • 25,000+ Guided
            </div>
            <div className="text-xs font-bold text-neutral-900">
              Life Coach & Corporate Trainer
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
