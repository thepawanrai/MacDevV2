import React from 'react';
import { Program, SiteSettings, LeadSegment } from '../../types';
import { 
  Users, Building2, Landmark, Mic, ArrowRight, CheckCircle2, 
  Sparkles, Calendar, MapPin, Award, BookOpen, Compass, Target, 
  ShieldCheck, HelpCircle, ChevronRight, PhoneCall, Brain, HeartHandshake, Eye 
} from 'lucide-react';
import { FounderPortrait } from '../common/FounderPortrait';
import { HeroProgramSlider } from '../home/HeroProgramSlider';
import { VideoTestimonialsSection } from '../home/VideoTestimonialsSection';
import { PodcastSection } from '../home/PodcastSection';

interface HomePageProps {
  programs: Program[];
  settings: SiteSettings;
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  programs,
  settings,
  onNavigate,
  onOpenInquiry,
}) => {
  // Find the three core B2C programs for the detailed card grid
  const goalMaster = programs.find(p => p.slug === 'goalmaster' || p.id === 'prog-goalmaster') || programs[0];
  const salesMaster = programs.find(p => p.slug === 'salesmaster' || p.slug === 'sales-master') || programs[1];
  const lifeMaster = programs.find(p => p.slug === 'lifemaster' || p.slug === 'life-master') || programs[2];

  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      {/* 1. HERO SECTION: 3 PROGRAM SLIDERS (GoalMaster, SalesMaster, LifeMaster) */}
      <HeroProgramSlider 
        programs={programs} 
        onNavigate={onNavigate} 
        onOpenInquiry={onOpenInquiry} 
      />

      {/* 2. AUTHENTIC VIDEO TESTIMONIALS SECTION FOR DEEPAK VERMA SIR */}
      <VideoTestimonialsSection 
        onNavigate={onNavigate} 
        onOpenInquiry={onOpenInquiry} 
      />

      {/* 3. FEATURED PODCAST INTERVIEW SPOTLIGHT FOR DEEPAK VERMA SIR */}
      <PodcastSection 
        onNavigate={onNavigate} 
        onOpenInquiry={onOpenInquiry} 
      />

      {/* 4. CORE PROGRAMS CURRICULUM BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="three-core-programs" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200/80 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D13A28]">
                Core Curriculum Deep-Dive
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Three Signature Programs Designed for Meaningful Progress
              </h2>
            </div>
            <button
              onClick={() => onNavigate('catalogue')}
              className="text-xs font-bold text-[#D13A28] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Program 1: GoalMaster */}
            <div className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={goalMaster.coverImage}
                    alt="GoalMaster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-[#111111]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase rounded-md tracking-wider">
                      Goal Clarity & Execution
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-neutral-800 text-[11px] font-bold rounded-md shadow-xs block truncate">
                      Conducted 2025 • Established Concept
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-[#D13A28] uppercase tracking-wider">
                      Program 01
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      GoalMaster
                    </h3>
                    <div className="text-xs font-semibold text-neutral-700 mt-1">
                      Turn Your Goals into a Clear Action Plan
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    GoalMaster is designed for individuals who want greater clarity about what they want to achieve, a more structured approach to planning, and practical steps to move from intention to action.
                  </p>

                  <div className="space-y-1.5 pt-1 border-t border-neutral-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Key Learning Themes:
                    </span>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Clarifying goals and priorities with laser focus</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Breaking long-term ambitions into 90-day action steps</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Identifying distractions and procrastination triggers</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Building practical daily accountability and momentum</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('program-detail', 'goalmaster')}
                  className="text-xs font-bold text-neutral-700 hover:text-neutral-900 cursor-pointer"
                >
                  Explore GoalMaster
                </button>
                <button
                  onClick={() => onOpenInquiry('B2C', 'GoalMaster Interest Registration')}
                  className="px-4 py-2 bg-neutral-900 hover:bg-[#111111] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Register Interest
                </button>
              </div>
            </div>

            {/* Program 2: SalesMaster */}
            <div className="bg-white rounded-3xl border-2 border-[#D13A28]/30 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative">
              <div className="absolute top-0 right-0 bg-[#D13A28] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider z-10">
                Next Cohort Oct 2026
              </div>

              <div>
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={salesMaster.coverImage}
                    alt="SalesMaster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-[#D13A28] text-white text-[10px] font-bold uppercase rounded-md tracking-wider">
                      Flagship Offline Boot Camp
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-neutral-900 text-[11px] font-bold rounded-md shadow-xs block truncate">
                      2-Day Offline Immersion
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-[#D13A28] uppercase tracking-wider">
                      Program 02
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      SalesMaster
                    </h3>
                    <div className="text-xs font-semibold text-neutral-700 mt-1">
                      Practical Selling, Objection Handling & Closing
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    SalesMaster is an intensive offline boot camp for sales executives, real-estate specialists, insurance advisors, and entrepreneurs who want to strengthen consultative communication and conversion confidence.
                  </p>

                  <div className="space-y-1.5 pt-1 border-t border-neutral-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Key Learning Themes:
                    </span>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D13A28] shrink-0 mt-0.5" />
                        <span>Sales psychology and customer mindset understanding</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D13A28] shrink-0 mt-0.5" />
                        <span>Consultative discovery questioning techniques</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D13A28] shrink-0 mt-0.5" />
                        <span>Structured, professional objection handling</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D13A28] shrink-0 mt-0.5" />
                        <span>Building authentic trust and closing conversations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('program-detail', 'salesmaster')}
                  className="text-xs font-bold text-neutral-700 hover:text-neutral-900 cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenInquiry('B2C', 'SalesMaster October 2026 Waitlist')}
                  className="px-4 py-2 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm shadow-[#D13A28]/30"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Program 3: LifeMaster */}
            <div className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={lifeMaster.coverImage}
                    alt="LifeMaster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-neutral-900 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">
                      Flagship Holistic Journey
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-neutral-800 text-[11px] font-bold rounded-md shadow-xs block truncate">
                      Planned Launch: Q4 2026
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-[#D13A28] uppercase tracking-wider">
                      Program 03
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      LifeMaster
                    </h3>
                    <div className="text-xs font-semibold text-neutral-700 mt-1">
                      Design a More Purposeful Life
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    LifeMaster is envisioned as a flagship personal-development experience for people who want to gain clarity about their goals, reconnect with their aspirations, strengthen their mindset, and take practical steps towards the life they want to create.
                  </p>

                  <div className="space-y-1.5 pt-1 border-t border-neutral-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Key Learning Themes:
                    </span>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Personal and life-goal clarity at crossroads</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Values alignment and confident decision-making</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Emotional Intelligence and self-management</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Focus, discipline, and daily momentum systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('program-detail', 'lifemaster')}
                  className="text-xs font-bold text-neutral-700 hover:text-neutral-900 cursor-pointer"
                >
                  Explore LifeMaster
                </button>
                <button
                  onClick={() => onOpenInquiry('B2C', 'LifeMaster Priority Waitlist')}
                  className="px-4 py-2 bg-neutral-900 hover:bg-[#111111] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEARNING PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
              Our Learning Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Practical Skills. Guided Drills. Measurable Growth.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Mastermind Alliance Coaching was founded on a simple realization: temporary motivational hype does not build lasting careers. True transformation comes from structured cognitive frameworks, deliberate roleplay simulation, and peer accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-neutral-100">
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                1. Practical Frameworks
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Tested tools like PREP speaking, consultative discovery, and habit scorecards built for instant workplace application.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                2. Live Guided Practice
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Interactive drills and live objection labs in Lucknow ensure knowledge turns into natural muscle memory.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                3. The Alliance Principle
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Consistent peer accountability ensures goals established in workshops are executed across the entire year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROMINENT EMOTIONAL INTELLIGENCE FEATURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-neutral-800 shadow-xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Emotional Intelligence: <br className="hidden sm:inline" />
              <span className="text-[#D13A28]">The Human Advantage</span> in a Changing World
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              In a world of increasing pressure, changing expectations, and constant interaction, technical knowledge alone is not enough. The ability to understand emotions, manage reactions, communicate with empathy, and build meaningful relationships can make a powerful difference in personal and professional life.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Through Emotional Intelligence training, Mastermind Alliance Coaching helps individuals and organizations develop greater self-awareness, emotional regulation, empathy, communication, relationship management, and responsible decision-making.
            </p>
          </div>

          {/* 3 Audience Pathways Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pathway A */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                  For Employees & Workforce
                </span>
                <h3 className="text-base font-bold text-white">
                  Workplace Self-Awareness & Resilience
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Understand emotional triggers, manage workplace stress, communicate with empathy, handle disagreements constructively, and build personal accountability.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('B2B', 'EI Workforce Training')}
                className="w-full mt-2 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Explore Workforce Training →
              </button>
            </div>

            {/* Pathway B */}
            <div className="bg-neutral-900/90 border-2 border-[#D13A28]/40 rounded-2xl p-6 space-y-4 flex flex-col justify-between relative">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  For People Managers
                </span>
                <h3 className="text-base font-bold text-white">
                  Psychological Safety & Constructive Feedback
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Understand individual and team dynamics, navigate difficult performance conversations, handle pressure, and support team motivation without micromanagement.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('B2B', 'EI Manager Development')}
                className="w-full mt-2 py-2.5 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md shadow-[#D13A28]/30"
              >
                Explore Manager Development →
              </button>
            </div>

            {/* Pathway C */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                  For Organizational Leaders
                </span>
                <h3 className="text-base font-bold text-white">
                  Executive Poise & Responsible Leadership
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Regulate anxiety in high-stakes decisions, lead empathetically through market change and uncertainty, build trust, and instill a culture of shared accountability.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('B2B', 'EI Leadership Training')}
                className="w-full mt-2 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Explore Leadership Training →
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Deepak Verma integrates Emotional Intelligence across SalesMaster, Core Leadership, and corporate workshops.
            </span>
            <button
              onClick={() => onNavigate('emotional-intelligence')}
              className="text-xs font-bold text-[#D13A28] hover:text-red-400 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Emotional Intelligence Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FOUR SEGMENT ROUTES (B2C, B2B, B2G, Keynotes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            All Organizational Routes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
            Clear Pathways for Individuals, Teams & Public Bodies
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            Engineered around participant context with direct coordination from our Lucknow headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: B2C */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                B2C Individual
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Individual Learning
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                GoalMaster, SalesMaster, LifeMaster, and self-paced digital communication courses.
              </p>
            </div>
            <button
              onClick={() => onNavigate('catalogue')}
              className="mt-6 text-xs font-bold text-[#D13A28] hover:underline flex items-center justify-between cursor-pointer"
            >
              <span>Browse Individual Courses</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: B2B */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#D13A28]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                B2B Corporate
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Corporate Training
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Sales execution, Core Leadership, and specialized blueprints for Real Estate, Insurance, and Direct Selling.
              </p>
            </div>
            <button
              onClick={() => onNavigate('corporate')}
              className="mt-6 text-xs font-bold text-neutral-900 hover:text-[#D13A28] flex items-center justify-between cursor-pointer"
            >
              <span>Explore Corporate Solutions</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: B2G */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                B2G Institutional
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Public Institutions
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Citizen-facing communication, teamwork, time management, and ethical conduct for public bodies and banks.
              </p>
            </div>
            <button
              onClick={() => onNavigate('institutional')}
              className="mt-6 text-xs font-bold text-neutral-900 hover:text-[#D13A28] flex items-center justify-between cursor-pointer"
            >
              <span>Institutional Details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Keynotes */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center">
                <Mic className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                Speaker Profile
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                Keynotes & Speaking
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Grounded keynote presentations for annual conferences, conventions, and corporate leadership meets.
              </p>
            </div>
            <button
              onClick={() => onNavigate('keynotes')}
              className="mt-6 text-xs font-bold text-[#D13A28] hover:underline flex items-center justify-between cursor-pointer"
            >
              <span>Invite Deepak Verma</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. MEET DEEPAK VERMA WITH AUTHENTIC PORTRAIT PRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <FounderPortrait size="xl" showBadge={true} />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
                  Founder & Principal Mentor
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  Deepak Verma
                </h2>
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D13A28]" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              {/* Guiding Life Mission Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900 text-white border-l-4 border-[#D13A28] shadow-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D13A28] block mb-1">
                  Guiding Life Mission
                </span>
                <p className="text-sm sm:text-base font-bold text-neutral-100 font-['Plus_Jakarta_Sans',sans-serif]">
                  “I want to empower the YUVA Power of our Country Spiritually.”
                </p>
                <span className="block mt-1 text-[11px] font-medium text-neutral-400">
                  — Deepak Verma, Founder & Mentor, Mastermind Alliance Coaching
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <p>
                  <strong>Deepak Verma</strong> is one of India’s leading Life Coaches, Breakthrough Strategists, and Corporate Trainers with <strong>15+ years of experience</strong> in transforming lives. Having guided over <strong>25,000 people</strong> across India & abroad, he empowers individuals and organizations with clarity, confidence, and purpose.
                </p>
                <p>
                  From domestic to international corporate training, his expertise spans leadership development, productivity, and youth empowerment. Through his flagship Trainings, Deepak has inspired thousands to define their vision and achieve measurable success. His mission: <em>“I want to empower the youth of our country spiritually.”</em>
                </p>
              </div>

              {/* Quick Credentials Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-sm font-black text-[#D13A28]">15+ Years</div>
                  <div className="text-[10px] text-neutral-600 font-semibold">Coaching Excellence</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-sm font-black text-neutral-900">25,000+</div>
                  <div className="text-[10px] text-neutral-600 font-semibold">Lives Transformed</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-sm font-black text-emerald-600">Tailored</div>
                  <div className="text-[10px] text-neutral-600 font-semibold">Custom Programs</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-sm font-black text-purple-600">Grounded</div>
                  <div className="text-[10px] text-neutral-600 font-semibold">Mindset & Action</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5 items-center">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Read Founder Profile & Philosophy
                </button>
                <button
                  onClick={() => onNavigate('emotional-intelligence')}
                  className="px-6 py-3 bg-red-50 hover:bg-red-100 text-[#D13A28] font-bold text-xs uppercase tracking-wider rounded-xl border border-red-200 transition-colors cursor-pointer"
                >
                  Emotional Intelligence Approach
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LEARNING METHODOLOGY / PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Structured Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
            The 4-Step Learning & Mastery Process
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            Every Mastermind Alliance Coaching program adheres to an operational loop engineered for lasting behavioral change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-2">
            <div className="text-2xl font-black text-[#D13A28]">01</div>
            <h3 className="text-base font-bold text-neutral-900">1. Diagnostic Audit</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We analyze baseline performance, identifying specific communication friction, sales drop-offs, or emotional triggers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-2">
            <div className="text-2xl font-black text-neutral-800">02</div>
            <h3 className="text-base font-bold text-neutral-900">2. Concept Frameworks</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Learners absorb structured principles: PREP communication, consultative discovery questioning, and emotional regulation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-2">
            <div className="text-2xl font-black text-neutral-800">03</div>
            <h3 className="text-base font-bold text-neutral-900">3. Simulation Drills</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Intensive live role-play, speech recordings, and live feedback sessions ensure principles are tested before high-stakes field encounters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-2">
            <div className="text-2xl font-black text-[#D13A28]">04</div>
            <h3 className="text-base font-bold text-neutral-900">4. Execution Rigor</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Daily habit scorecards, peer accountability check-ins, and actionable worksheets to cement permanent professional improvement.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FINAL DIRECT INQUIRY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900 to-[#1a1a1a] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-800 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
              Start The Conversation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Strengthen Your Skills or Team Performance?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Contact our Lucknow headquarters to discuss custom corporate proposals, institutional workshops, or register interest for GoalMaster, SalesMaster, and LifeMaster.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenInquiry('B2B', 'Corporate Training Proposal')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer text-center shadow-md shadow-[#D13A28]/25"
            >
              Request Corporate Proposal
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer text-center border border-neutral-700"
            >
              Contact Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
