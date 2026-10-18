import React from 'react';
import { 
  Sparkles, Compass, Shield, Flame, BookOpen, 
  CheckCircle2, ArrowRight, MapPin, Quote
} from 'lucide-react';
import { LeadSegment } from '../../types';
import { FounderPortrait } from '../common/FounderPortrait';

interface YouthPageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const YouthPage: React.FC<YouthPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="space-y-16 py-10">
      {/* 1. HERO SECTION WITH DEEPAK VERMA'S YUVA EMPOWERMENT QUOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-800 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D13A28]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-[#D13A28] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                <span>YUVA Power Initiative • Bharat's Youth Mission</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                  Empowering the Youth with Inner Depth and Outer Mastery
                </h1>
              </div>

              {/* Founder's Authoritative Mission Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border-l-4 border-[#D13A28] shadow-lg space-y-2">
                <Quote className="w-6 h-6 text-[#D13A28] opacity-80" />
                <p className="text-lg sm:text-2xl font-black text-white italic tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  “I want to empower the YUVA Power of our Country Spiritually.”
                </p>
                <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                  <span className="font-bold uppercase tracking-wider text-[#D13A28]">
                    — Deepak Verma
                  </span>
                  <span>Founder, Mastermind Alliance Coaching</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                The youth of India hold boundless energy, intelligence, and ambition. Yet in an era of constant digital distraction, anxiety, and superficial comparisons, technical talent alone is not enough. Deepak Verma believes true empowerment begins within: grounding the young mind in spiritual strength, moral conviction, emotional resilience, and fearless execution.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenInquiry('Youth', 'YUVA Power Youth Masterclass Inquiry')}
                  className="px-7 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer shadow-lg shadow-[#D13A28]/25 flex items-center gap-2"
                >
                  <span>Join Next Youth Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenInquiry('Youth', 'Campus / College Workshop Request')}
                  className="px-6 py-3.5 bg-neutral-800/90 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer border border-neutral-700"
                >
                  Invite for College / Campus Workshop
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <FounderPortrait size="xl" showBadge={true} />
              <div className="mt-4 text-center">
                <h3 className="text-base font-bold text-white">Deepak Verma</h3>
                <p className="text-xs text-neutral-400">Guiding India's Next Generation of Thinkers & Builders</p>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#D13A28] font-semibold mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 PILLARS OF SPIRITUAL & VOCATIONAL YOUTH EMPOWERMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Holistic Youth Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Why Spiritual Empowerment Matters for Today's Youth
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Spiritual empowerment is not dogmatic dogma. It is inner self-mastery, mental calm, clear discernment between right and wrong, and the courage to act with integrity in a hyper-competitive world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                Pillar 1
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Spiritual Grounding & Mental Calm
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Quiet the inner restlessness, conquer modern anxiety, and build emotional composure that remains stable through career uncertainty and exam pressure.
              </p>
            </div>
            <ul className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Overcoming digital addiction</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mindfulness & self-awareness</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6 text-[#D13A28]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                Pillar 2
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Purpose Discovery & Life Clarity
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Move past parental and societal herd mentality. Discover genuine strengths, clarify long-term vision, and build an intentional roadmap for the next decade.
              </p>
            </div>
            <ul className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Goal decomposition & milestones</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Aligning passion with livelihood</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6 text-[#D13A28]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                Pillar 3
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Vocational & Communication Mastery
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Translate inner values into real-world effectiveness: consultative sales psychology, public speaking, active listening, and conflict-free collaboration.
              </p>
            </div>
            <ul className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Fearless self-expression</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Interview and workplace readiness</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                Pillar 4
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Ethical Leadership & Nation-Building
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Building character before building wealth. Cultivate empathy for fellow citizens, integrity in business dealings, and a lifelong commitment to national progress.
              </p>
            </div>
            <ul className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Peer alliance & accountability</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Service-driven leadership mindset</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. YOUTH INITIATIVES & WORKSHOPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
                Action Pathways
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                Programs Engineered for Young Bharat
              </h2>
            </div>
            <button
              onClick={() => onOpenInquiry('Youth', 'Youth Program Consultation')}
              className="text-xs font-bold text-[#D13A28] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Request Custom Campus Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Initiative 1 */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-[#D13A28] rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Campus & University
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Campus YUVA Power Masterclass
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Half-day and full-day immersive campus workshops for undergraduate, postgraduate, and engineering/management students on emotional discipline, career focus, and spiritual resilience.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('Youth', 'Campus YUVA Power Masterclass')}
                className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Book for Campus / College
              </button>
            </div>

            {/* Initiative 2 */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Early Careers
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Youth Professional Accelerator
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Tailored for young professionals (ages 21-29) in their first 5 years of career. Mastering consultative sales, personal time management, handling feedback, and overcoming impostor syndrome.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('Youth', 'Youth Professional Accelerator')}
                className="w-full py-2.5 bg-[#D13A28] hover:bg-[#b82f20] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Enroll in Next Cohort
              </button>
            </div>

            {/* Initiative 3 */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Peer Community
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  The Mastermind Youth Circle
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  A nationwide peer accountability network where driven young Indians meet weekly to review goals, read transformative literature, practice speaking, and support each other's ethical progress.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('Youth', 'Mastermind Youth Circle Membership')}
                className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Apply for Youth Circle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEPAK VERMA'S PERSONAL MESSAGE TO YOUTH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
              Mentor's Address to Young India
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              “Your youth is not for reckless distraction—it is the forge where your destiny is hammered into shape.”
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              In Mastermind Alliance Coaching, we teach young people that spiritual power is not retreating to the mountains; it is maintaining inner equanimity while achieving great deeds in the marketplace. When your mind is calm and your conscience is clean, your capacity for work, focus, and leadership multiplies ten-fold.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('catalogue')}
              className="px-6 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer"
            >
              Explore Signature Programs
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-6 py-3 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              Read About Deepak Verma
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
