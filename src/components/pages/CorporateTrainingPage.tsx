import React from 'react';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Users, Target, Award, Calendar } from 'lucide-react';
import { Program, LeadSegment } from '../../types';

interface CorporateTrainingPageProps {
  programs: Program[];
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const CorporateTrainingPage: React.FC<CorporateTrainingPageProps> = ({
  programs,
  onNavigate,
  onOpenInquiry,
}) => {
  const corporatePrograms = programs.filter(p => p.audience === 'Corporate & Teams (B2B)' || p.category === 'Industry Training');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#111111] via-[#1c1c1c] to-[#111111] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          <span>B2B Corporate & Industry Training</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] max-w-3xl leading-tight">
          Strengthen Sales Execution, Leadership Culture & Team Results
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
          Mastermind Alliance Coaching partners with companies to deliver targeted workshops, executive coaching, and industry sales blueprints tailored to your team's specific market challenges.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => onOpenInquiry('B2B', 'Corporate Training Proposal')}
            className="px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer shadow-md shadow-[#D13A28]/20"
          >
            Request Corporate Proposal
          </button>
          <button
            onClick={() => onNavigate('catalogue')}
            className="px-6 py-3.5 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Browse All Curriculum
          </button>
        </div>
      </div>

      {/* Priority Industry Blueprints */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Industry Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Specialized Industry Sales Training
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-2xl">
            Generic sales advice fails in specialized sectors. We teach field-tested buyer psychology, trust discovery, and closing rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blueprint 1: Real Estate */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#D13A28] px-2.5 py-1 rounded">
                Property & Realty
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Real Estate Sales Mastery
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Lead qualification, buyer trust, high-impact site visits, handling completion concerns, and closing high-ticket deals without heavy discounting.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Site-visit experiential choreography</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Objection drills: Pricing & documentation</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('program-detail', 'real-estate-sales-mastery')}
              className="w-full mt-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
            >
              View Blueprint Details →
            </button>
          </div>

          {/* Blueprint 2: Insurance */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                Financial Protection
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Insurance Sales Training
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Respectful needs analysis, ethical risk protection communication, overcoming skeptical hesitancy, and long-term policy retention. (No financial guarantees).
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Consultative family needs discovery</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>High-retention ethical advisory habits</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('program-detail', 'insurance-sales-training')}
              className="w-full mt-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
            >
              View Blueprint Details →
            </button>
          </div>

          {/* Blueprint 3: Network Marketing */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-1 rounded">
                Direct Selling
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Network Marketing Training
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ethical prospecting, pressure-free invitations, relationship building, team onboarding, and sustained leadership habits. (No income guarantees).
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Protecting personal relationships</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Consistent 30-day team onboarding plan</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('program-detail', 'network-marketing-training')}
              className="w-full mt-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
            >
              View Blueprint Details →
            </button>
          </div>
        </div>
      </section>

      {/* Leadership & Executive Programs */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Leadership Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Core & Executive Leadership Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Core Leadership Program</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Equip supervisors and first-time managers with the transition from individual execution to collective enablement. Covers self-awareness, radical ownership, active delegation, clear communication, and goal alignment.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs text-neutral-500">Duration: 4 Weeks or 2-Day Corporate Workshop</span>
              <button
                onClick={() => onNavigate('program-detail', 'core-leadership-program')}
                className="text-xs font-bold text-[#D13A28] hover:underline"
              >
                View Details →
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Leadership Development Program</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Designed for senior leaders and business heads. Focuses on coaching frameworks (GROW model), constructive conflict resolution, high-trust psychological safety, and driving execution without micromanagement.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs text-neutral-500">Duration: 6 Weeks Modular / Executive Offsite</span>
              <button
                onClick={() => onNavigate('program-detail', 'leadership-development-program')}
                className="text-xs font-bold text-[#D13A28] hover:underline"
              >
                View Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Intelligence for Organizations */}
      <section className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D13A28] bg-red-950/80 px-2.5 py-0.5 rounded border border-red-800">
              Core Subject • Organization-Wide Training
            </span>
            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif]">
              Emotional Intelligence: The Human Advantage in a Changing World
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Equip your frontline employees, managers, and executives with self-awareness, active listening, psychological safety, and stress self-regulation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('emotional-intelligence')}
            className="px-6 py-3 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0 shadow-md shadow-[#D13A28]/25"
          >
            Explore EI Curriculum →
          </button>
        </div>
      </section>

      {/* Official Training Program Quotation & Session Structure Fees */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/90 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-100 pb-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-red-50 text-[#D13A28] border border-red-200 uppercase tracking-wider">
              <span>Standard Pricing & Fee Structure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Training Program Quotation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Clear, transparent investment tiers for keynote addresses, corporate workshops, full-day intensives, and residential executive retreats.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('B2B', 'Custom Quotation Request')}
            className="px-5 py-2.5 bg-[#111111] text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
          >
            Request Custom Quotation
          </button>
        </div>

        {/* 4 Standard Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tier 1: 60 Minutes */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#D13A28]/50 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-neutral-200/70 text-neutral-800">
                Keynote / Power Talk
              </span>
              <div className="text-2xl font-black text-neutral-900 mt-2">
                ₹30,000
              </div>
              <div className="text-xs font-bold text-[#D13A28]">
                60 Minutes Duration
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                High-energy keynote address tailored for annual company summits, conferences, colleges, and kickoff meetings.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('Keynote', '60 Minutes Keynote / Power Talk (₹30,000)')}
              className="w-full py-2.5 text-xs font-bold rounded-xl bg-[#111111] text-white hover:bg-neutral-800 transition-colors cursor-pointer text-center"
            >
              Book 60 Mins Talk
            </button>
          </div>

          {/* Tier 2: 3 Hours */}
          <div className="p-6 rounded-2xl bg-red-50/40 border-2 border-[#D13A28]/30 hover:border-[#D13A28] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative">
            <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#D13A28] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
              Popular Choice
            </span>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-red-100 text-[#D13A28]">
                Half-Day Workshop
              </span>
              <div className="text-2xl font-black text-neutral-900 mt-2">
                ₹60,000
              </div>
              <div className="text-xs font-bold text-[#D13A28]">
                3 Hours Duration
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                Interactive skill-building workshop with practical drills, cognitive frameworks, and immediate action plans.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('B2B', '3 Hours Half-Day Workshop (₹60,000)')}
              className="w-full py-2.5 text-xs font-bold rounded-xl bg-[#D13A28] text-white hover:bg-[#b82f20] transition-colors cursor-pointer text-center shadow-md shadow-[#D13A28]/20"
            >
              Book 3 Hours Workshop
            </button>
          </div>

          {/* Tier 3: 6 Hours */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#D13A28]/50 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-neutral-200/70 text-neutral-800">
                Full-Day Training
              </span>
              <div className="text-2xl font-black text-neutral-900 mt-2">
                ₹1,00,000
              </div>
              <div className="text-xs font-bold text-[#D13A28]">
                6 Hours (1-Day Program)
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                Comprehensive 1-day deep dive including roleplay labs, objection laboratories, and customized team action roadmaps.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('B2B', '6 Hours Full-Day Training (₹1,00,000)')}
              className="w-full py-2.5 text-xs font-bold rounded-xl bg-[#111111] text-white hover:bg-neutral-800 transition-colors cursor-pointer text-center"
            >
              Book 6 Hours Full-Day
            </button>
          </div>

          {/* Tier 4: 3D2N */}
          <div className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 hover:border-[#D13A28] hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-neutral-800 text-amber-400">
                Residential Program
              </span>
              <div className="text-2xl font-black text-white mt-2">
                ₹3,00,000
              </div>
              <div className="text-xs font-bold text-[#D13A28]">
                3 Days 2 Nights (3D2N)
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                Transformational offsite residential retreat for executive leadership, deep cultural alignment, and life mastery.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('B2B', '3 Days 2 Nights Residential Program (₹3,00,000)')}
              className="w-full py-2.5 text-xs font-bold rounded-xl bg-[#D13A28] text-white hover:bg-[#b82f20] transition-colors cursor-pointer text-center shadow-md shadow-[#D13A28]/25"
            >
              Book 3D2N Retreat
            </button>
          </div>
        </div>
      </section>

      {/* Available Training Programs (All 17 Signature Programs) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Curriculum Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            17 Available Training Programs
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-3xl">
            Delivered directly by Deepak Verma with customized frameworks, participant worksheets, and actionable post-training scorecards.
          </p>
        </div>

        {/* 17 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Positive Attitude & Decision Making',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Build resilience, cultivate optimism, and develop powerful decision-making skills for professional & personal excellence.',
              tag: 'Mindset & Resilience'
            },
            {
              num: '02',
              title: 'Self Discipline & Stress Management',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Learn proven tools to stay disciplined, reduce stress, and create balance in a fast-paced world.',
              tag: 'Personal Mastery'
            },
            {
              num: '03',
              title: 'Master Your Communication Skills',
              duration: '6 Hours',
              fee: '₹1,00,000',
              desc: 'Enhance verbal, non-verbal & public communication for leadership impact and stronger human connections.',
              tag: 'Communication'
            },
            {
              num: '04',
              title: 'Master Your Goals, Master Your Life',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Deep dive into goal-setting frameworks that drive clarity, focus & long-term achievement.',
              tag: 'Goal Clarity'
            },
            {
              num: '05',
              title: 'Time Management & Professional Excellence',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Practical tools to prioritize tasks, enhance productivity & create professional mastery.',
              tag: 'Productivity'
            },
            {
              num: '06',
              title: 'Team Motivation & Human Relationships',
              duration: '3 Days 2 Nights',
              fee: '₹3,00,000',
              desc: 'A transformative residential program to build synergy, emotional intelligence & high-performing teams.',
              tag: 'Team Synergy (3D2N)'
            },
            {
              num: '07',
              title: 'Public Speaking Skills',
              duration: '6 Hours',
              fee: '₹1,00,000',
              desc: 'Overcome stage fear, master storytelling, and deliver high-impact presentations with confidence.',
              tag: 'Public Speaking'
            },
            {
              num: '08',
              title: 'Best Life Management',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Discover strategies for holistic life mastery – health, wealth, relationships & mindset.',
              tag: 'Life Mastery'
            },
            {
              num: '09',
              title: 'Be Your Own Creator',
              subtitle: 'Leadership Development Program',
              duration: '3 Days 2 Nights',
              fee: '₹3,00,000',
              desc: 'An immersive leadership journey designed to transform vision into action.',
              tag: 'Leadership (3D2N)'
            },
            {
              num: '10',
              title: 'Parenting is Fun',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Modern parenting strategies to raise confident, disciplined & happy children.',
              tag: 'Parenting & Family'
            },
            {
              num: '11',
              title: 'Advance Leadership Program',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'For managers & leaders aiming to unlock influence, authority & next-level leadership skills.',
              tag: 'Executive Leadership'
            },
            {
              num: '12',
              title: 'Enjoy Your Study & Exams',
              duration: '3 Hours',
              fee: '₹60,000',
              desc: 'Student-focused program to overcome exam stress and develop peak performance learning strategies.',
              tag: 'Youth & Students'
            },
            {
              num: '13',
              title: 'Power of Thoughts',
              subtitle: 'Leadership Development Program',
              duration: '3 Days 2 Nights',
              fee: '₹3,00,000',
              desc: 'Learn the science of mindset, thoughts & energy to shape leadership and destiny.',
              tag: 'Mindset & Energy (3D2N)'
            },
            {
              num: '14',
              title: 'Happy Marriage Life',
              duration: '3 Hours / 3D2N',
              fee: '₹60,000 / ₹3,00,000',
              desc: 'From understanding to communication – a program designed for couples to thrive together.',
              tag: 'Relationships'
            },
            {
              num: '15',
              title: 'Special Training Program for Real Estate',
              duration: '6 Hours (1-Day) / 7-Days',
              fee: '₹1,00,000 (1-Day) / Custom',
              desc: 'Specially designed for real estate professionals to boost client engagement, negotiation skills, and closing techniques.',
              tag: 'Real Estate Sales'
            },
            {
              num: '16',
              title: 'High-Performance Sales Training Program',
              duration: '6 Hours (1-Day) / 7-Days',
              fee: '₹1,00,000 (1-Day) / Custom',
              desc: 'A transformational program to master persuasion, closing strategies, and customer psychology for unbeatable sales growth.',
              tag: 'Sales Mastery'
            },
            {
              num: '17',
              title: 'Unbeatable Training for Network Marketing',
              duration: '6 Hours (1-Day) / 7-Days',
              fee: '₹1,00,000 (1-Day) / Custom',
              desc: 'Step-by-step framework for network marketing leaders to build teams, inspire confidence, and create exponential growth.',
              tag: 'Network Marketing'
            }
          ].map((tp) => (
            <div
              key={tp.num}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-[#D13A28] bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase">
                    {tp.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    #{tp.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#D13A28] transition-colors leading-snug">
                    {tp.title}
                  </h3>
                  {tp.subtitle && (
                    <div className="text-xs font-semibold text-neutral-500 mt-0.5">
                      {tp.subtitle}
                    </div>
                  )}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {tp.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-neutral-500">{tp.duration}</div>
                  <div className="text-sm font-black text-neutral-900">{tp.fee}</div>
                </div>
                <button
                  onClick={() => onOpenInquiry('B2B', `${tp.title} (${tp.duration}) Inquiry`)}
                  className="px-3.5 py-1.5 bg-neutral-900 hover:bg-[#D13A28] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Book / Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Call to Action */}
      <div className="bg-[#111111] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">Request a Tailored Corporate Proposal</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Let us know your team size, target competencies, and preferred workshop dates.
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry('B2B', 'Corporate Training Proposal')}
          className="px-6 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors shrink-0"
        >
          Request Proposal Now
        </button>
      </div>
    </div>
  );
};
