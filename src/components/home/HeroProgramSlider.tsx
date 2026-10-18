import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, 
  Sparkles, Clock, Target, Play, Pause 
} from 'lucide-react';
import { Program, LeadSegment } from '../../types';

interface HeroProgramSliderProps {
  programs: Program[];
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

interface SlideData {
  id: string;
  slug: string;
  programNumber: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  deliveryText: string;
  timingText: string;
  keyPoints: string[];
  primaryCtaText: string;
  primaryAction: 'detail' | 'inquiry';
  inquiryTitle: string;
  secondaryCtaText: string;
  coverImage: string;
  tagline: string;
}

export const HeroProgramSlider: React.FC<HeroProgramSliderProps> = ({
  programs,
  onNavigate,
  onOpenInquiry,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000; // 6 seconds per slide
  const progressInterval = 50; // update progress every 50ms
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Retrieve programs from props or fallback to authoritative defaults
  const goalMaster = programs.find(p => p.slug === 'goalmaster' || p.id === 'prog-goalmaster');
  const salesMaster = programs.find(p => p.slug === 'salesmaster' || p.slug === 'sales-master');
  const lifeMaster = programs.find(p => p.slug === 'lifemaster' || p.slug === 'life-master');

  const slides: SlideData[] = [
    {
      id: 'slide-goalmaster',
      slug: 'goalmaster',
      programNumber: '01',
      badge: 'Core Program 01 • Goal Clarity & Execution',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      title: 'GoalMaster',
      subtitle: 'Turn Your Ambitions into a Structured Action Plan',
      description: 'Break free from procrastination, eliminate distractions, and bridge the gap between intention and sustained execution. Learn structured 90-day milestone decomposition and daily accountability scorecards under Deepak Verma’s guidance.',
      deliveryText: 'Offline Workshop & Accountability Sprints',
      timingText: 'Established Concept • Register for Next Cohort',
      keyPoints: [
        'Deconstruct long-term goals into 90-day execution sprints',
        'Identify subconscious distractions and friction triggers',
        'Daily habit scorecards and peer accountability loops',
        'Tested framework first conducted in 2025'
      ],
      primaryCtaText: 'Explore GoalMaster',
      primaryAction: 'detail',
      inquiryTitle: 'GoalMaster Priority Registration',
      secondaryCtaText: 'Register Interest',
      coverImage: goalMaster?.coverImage || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
      tagline: 'From Intention to Relentless Execution'
    },
    {
      id: 'slide-salesmaster',
      slug: 'salesmaster',
      programNumber: '02',
      badge: 'Core Program 02 • Flagship Offline Cohort (Oct 2026)',
      badgeColor: 'bg-[#D13A28]/20 text-red-400 border-[#D13A28]/40',
      title: 'SalesMaster',
      subtitle: 'Close Deals with Dignity & Master Consultative Selling',
      description: 'The premier 2-day offline boot camp. Master consultative discovery questioning, objection reframing, high-stakes negotiation psychology, and ethical closing frameworks through live roleplay simulations.',
      deliveryText: '2-Day In-Person Immersion Boot Camp',
      timingText: 'Next Cohort: October 2026 • Limited Enrollment',
      keyPoints: [
        'Consultative discovery frameworks to uncover real buyer priorities',
        'Real-world objection laboratories and live roleplay simulation',
        'Ethical closing techniques that build long-term client trust',
        'Direct mentorship from Deepak Verma on high-stakes negotiations'
      ],
      primaryCtaText: 'Join SalesMaster Waitlist',
      primaryAction: 'inquiry',
      inquiryTitle: 'SalesMaster October 2026 Waitlist',
      secondaryCtaText: 'View Curriculum',
      coverImage: salesMaster?.coverImage || 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      tagline: 'High-Impact Objection Labs & Live Drills'
    },
    {
      id: 'slide-lifemaster',
      slug: 'lifemaster',
      programNumber: '03',
      badge: 'Core Program 03 • Flagship Personal Transformation',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      title: 'LifeMaster',
      subtitle: 'Design a Purposeful Life & Cultivate Emotional Resilience',
      description: 'Envisioned as our flagship holistic personal-development journey. Navigate personal and professional crossroads, align your core values, strengthen emotional intelligence, and build permanent life momentum.',
      deliveryText: 'Multi-Week Guided Journey & Mastermind Rhythms',
      timingText: 'Flagship Launch Planned for Q4 2026',
      keyPoints: [
        'Personal and life-goal clarity at pivotal career crossroads',
        'Emotional Intelligence, self-regulation, and composure under pressure',
        'Values alignment for confident, conflict-free decision-making',
        'Habit architecture for consistent lifelong momentum'
      ],
      primaryCtaText: 'Discover LifeMaster',
      primaryAction: 'detail',
      inquiryTitle: 'LifeMaster Priority Waitlist',
      secondaryCtaText: 'Join Waitlist',
      coverImage: lifeMaster?.coverImage || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Emotional Intelligence & Holistic Life Architecture'
    }
  ];

  // Auto-slide effect with progress tracking
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const step = (progressInterval / slideDuration) * 100;

    timerRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentSlide(curr => (curr + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, progressInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSlide, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide(curr => (curr - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide(curr => (curr + 1) % slides.length);
    setProgress(0);
  };

  const current = slides[currentSlide];

  return (
    <div 
      className="relative overflow-hidden bg-[#111111] text-white border-b border-neutral-800"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D13A28] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-800 blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        {/* Active Slide Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[440px]">
          {/* Left Column: Program Value, Details & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slide Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${current.badgeColor}`}>
                {current.badge}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D13A28]" />
                {current.timingText}
              </span>
            </div>

            {/* Slide Program Title */}
            <div className="space-y-2">
              <div className="text-[#D13A28] font-bold text-sm tracking-widest uppercase">
                Program {current.programNumber} • Signature Program
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif]">
                {current.title}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-neutral-300">
                {current.subtitle}
              </p>
            </div>

            {/* Slide Description */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
              {current.description}
            </p>

            {/* Key Outcomes / Drills List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {current.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Slide Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              {current.primaryAction === 'detail' ? (
                <button
                  onClick={() => onNavigate('program-detail', current.slug)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D13A28] text-white font-bold text-sm rounded-xl hover:bg-[#b82f20] transition-all shadow-lg shadow-[#D13A28]/30 cursor-pointer"
                >
                  <span>{current.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => onOpenInquiry('B2C', current.inquiryTitle)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D13A28] text-white font-bold text-sm rounded-xl hover:bg-[#b82f20] transition-all shadow-lg shadow-[#D13A28]/30 cursor-pointer"
                >
                  <span>{current.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {current.primaryAction === 'detail' ? (
                <button
                  onClick={() => onOpenInquiry('B2C', current.inquiryTitle)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  <span>{current.secondaryCtaText}</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('program-detail', current.slug)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  <span>{current.secondaryCtaText}</span>
                </button>
              )}

              <button
                onClick={() => onNavigate('catalogue')}
                className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors py-2 px-3 text-center cursor-pointer"
              >
                View All Programs →
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card or Embedded Video Player */}
          <div className="lg:col-span-5">
            {current.slug === 'goalmaster' ? (
              <div className="space-y-3">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#D13A28]/60 shadow-2xl bg-black aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/79rOg-B3ZhI?rel=0"
                    title="GoalMaster Full Recorded Training Program - Deepak Verma"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between px-2 text-xs">
                  <span className="text-[#D13A28] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D13A28] animate-pulse" />
                    Complete Recorded GoalMaster Session
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=79rOg-B3ZhI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white underline text-[11px]"
                  >
                    Open on YouTube ↗
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative rounded-3xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900 group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src={current.coverImage}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#D13A28]" />
                      {current.deliveryText}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#D13A28] text-white flex items-center justify-center font-bold text-xs shadow-md">
                      {current.programNumber}
                    </span>
                  </div>

                  {/* Bottom Overlay Card Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-neutral-700/70 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#D13A28] font-bold uppercase tracking-wider">
                        Mentor: Deepak Verma
                      </span>
                      <span className="text-neutral-400 font-medium">
                        Mastermind Alliance Coaching
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      {current.tagline}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Minimal Slide Indicators & Controls */}
        <div className="flex items-center justify-between pt-8 mt-4 border-t border-neutral-900/60">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-8 bg-[#D13A28]' 
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${s.title}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-neutral-500 px-1">
              0{currentSlide + 1} / 0{slides.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
