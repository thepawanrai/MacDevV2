import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Award, ShieldCheck, Target, HeartHandshake } from 'lucide-react';
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0c0c0c] border border-neutral-800 text-white shadow-2xl p-6 sm:p-10 lg:p-14">
        {/* Ambient background glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D13A28]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Seated Armchair Mentor Image (Deepak Verma Sir) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center">
              {/* Backlight halo */}
              <div className="absolute inset-0 bg-radial from-[#D13A28]/25 via-transparent to-transparent rounded-full blur-2xl transform scale-90 pointer-events-none" />
              
              <img
                src="/deepak-verma-mentor.png"
                alt="Deepak Verma — Founder & Mentor, Mastermind Alliance Coaching"
                className="relative z-10 w-full max-h-[500px] sm:max-h-[560px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://plain-apac-prod-public.komododecks.com/202610/18/ofjNm2fdB2vqAIQECFyo/image.png') {
                    e.currentTarget.src = 'https://plain-apac-prod-public.komododecks.com/202610/18/ofjNm2fdB2vqAIQECFyo/image.png';
                  }
                }}
              />
            </div>

            {/* Floating Trust Pill */}
            <div className="mt-4 sm:-mt-6 relative z-20 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D13A28]/20 border border-[#D13A28]/40 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#D13A28]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">
                  15+ Years • 25,000+ Transformed
                </div>
                <div className="text-[11px] text-neutral-400 font-medium">
                  Founder & Principal Mentor, MAC
                </div>
              </div>
            </div>
          </div>

          {/* Section Content & Strategic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D13A28]/15 border border-[#D13A28]/30 text-[#D13A28] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Meet Your Mentor • Deepak Verma</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Mentorship Grounded in Real Experience, Emotional Intelligence & <span className="text-[#D13A28]">Relentless Progress</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-1">
                At Mastermind Alliance Coaching, Deepak Verma guides individuals and corporate teams away from hollow motivation into systematic, measurable capability. His coaching synthesizes modern behavioral science, high-stakes consultative selling, and spiritual grounding.
              </p>
            </div>

            {/* Mission Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border-l-4 border-[#D13A28] border-neutral-800 space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D13A28] block">
                Foundational Guiding Purpose
              </span>
              <p className="text-sm sm:text-base font-bold text-neutral-100 italic font-['Plus_Jakarta_Sans',sans-serif]">
                “I want to empower the YUVA Power of our country spiritually and practically, giving them the emotional poise, sales acumen, and mental resilience to lead anywhere in the world.”
              </p>
              <div className="text-[11px] text-neutral-400 font-semibold pt-0.5">
                — Deepak Verma, Life Coach & Breakthrough Strategist
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#D13A28] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Goal Execution Rigor
                </h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Breaking 10-year aspirations into 90-day actionable sprints with daily accountability scorecards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Emotional Intelligence
                </h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Managing pressure, navigating difficult stakeholder conversations, and building authentic empathy.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Consultative Sales
                </h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  High-trust discovery questioning, live objection laboratories, and high-integrity deal closing.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate('catalogue')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-[#D13A28]/25"
              >
                <span>Explore Signature Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry('Keynote', 'Invite Deepak Verma Sir')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-neutral-700 transition-all cursor-pointer"
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
