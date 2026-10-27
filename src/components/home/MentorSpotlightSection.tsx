import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Award, Target, Brain, HeartHandshake } from 'lucide-react';
import { LeadSegment } from '../../types';

interface MentorSpotlightSectionProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const MentorSpotlightSection: React.FC<MentorSpotlightSectionProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* 1. Header Row (Replicated from Screenshot 1) */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D13A28] mb-1 block">
            Meet Your Mentor • Mastermind Alliance Coaching
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
            Meet the Mentor Behind<br />Thousands of Transformations
          </h2>
        </div>
        <div 
          onClick={() => onNavigate('about')}
          className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer shadow-xs shrink-0 ml-4"
          title="Explore Full Profile"
        >
          <ChevronDown className="w-5 h-5 text-neutral-700" />
        </div>
      </div>

      {/* 2. Main Executive Grid (Replicated from Screenshot 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Card: Grey rounded container with Name, Stacked Pills, and Armchair Cutout breaking bottom boundary */}
        <div className="lg:col-span-8 bg-[#64686e] rounded-3xl sm:rounded-[2.5rem] relative pt-10 sm:pt-14 px-6 sm:px-12 pb-0 overflow-visible shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Left Info: Name & Pill Badges */}
            <div className="md:col-span-6 pb-8 sm:pb-14 space-y-5">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Deepak Verma
              </h3>
              
              <div className="flex flex-col gap-2.5 pt-1">
                <span className="inline-block bg-white text-neutral-900 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-xs w-fit">
                  Founder & Principal Mentor, MAC
                </span>
                <span className="inline-block bg-white text-neutral-900 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-xs w-fit">
                  Life Coach & Breakthrough Strategist
                </span>
                <span className="inline-block bg-white text-neutral-900 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-xs w-fit">
                  Corporate Leadership & Sales Trainer
                </span>
              </div>
            </div>

            {/* Right Armchair Cutout: Protrudes downwards breaking the bottom edge of the grey container */}
            <div className="md:col-span-6 flex justify-center md:justify-end -mb-10 sm:-mb-14 lg:-mb-18 relative z-20">
              <img
                src="/deepak-verma-mentor.png"
                alt="Deepak Verma — Founder & Mentor, Mastermind Alliance Coaching"
                className="w-68 sm:w-80 md:w-92 lg:w-96 max-w-none object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://plain-apac-prod-public.komododecks.com/202610/27/vqLXourDPW7eF2SpSAra/image.png') {
                    e.currentTarget.src = 'https://plain-apac-prod-public.komododecks.com/202610/27/vqLXourDPW7eF2SpSAra/image.png';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Stats Column (Outside grey card on white page canvas) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6 pt-2 lg:pt-6">
          {/* Stat 1 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              15+ Years
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-medium">
              Transforming Lives Across India & Abroad
            </div>
          </div>

          <div className="border-b border-neutral-200" />

          {/* Stat 2 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              25,000+
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-medium">
              Individuals, Teams & Executives Guided
            </div>
            <div className="text-[11px] text-neutral-400">
              Through GoalMaster, SalesMaster & Corporate Keynotes
            </div>
          </div>

          <div className="border-b border-neutral-200" />

          {/* Stat 3 */}
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Spiritual & Practical
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-medium">
              Empowering India&apos;s YUVA Power with emotional resilience and sales mastery
            </div>
          </div>

          {/* Pill CTA Button (Replicated from Screenshot 1) */}
          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer border border-neutral-200 shadow-xs"
            >
              <span>Meet Deepak Verma</span>
              <ArrowRight className="w-4 h-4 text-neutral-700" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Lower Philosophy & Pillars Row */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mission Quote */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D13A28] block">
              Foundational Guiding Purpose
            </span>
            <p className="text-sm sm:text-base font-bold text-neutral-800 italic leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
              “I want to empower the YUVA Power of our country spiritually and practically, giving them the emotional poise, sales acumen, and mental resilience to lead anywhere in the world.”
            </p>
            <div className="text-xs text-neutral-500 font-semibold pt-1">
              — Deepak Verma, Life Coach & Breakthrough Strategist
            </div>
          </div>

          {/* 3 Pillars & Direct Actions */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D13A28] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Goal Rigor
                </h4>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  Transforming goals into 90-day actionable sprints with daily scorecards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Emotional Poise
                </h4>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  Calm under pressure, navigating complex interpersonal situations with empathy.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Sales Acumen
                </h4>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  Consultative selling, authentic deal negotiation, and rapid objection resolution.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate('catalogue')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm shadow-[#D13A28]/25"
              >
                <span>Explore Signature Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry('Keynote', 'Invite Deepak Verma Sir')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-neutral-200 transition-all cursor-pointer"
              >
                <span>Invite For Keynotes / Corporate Training</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
