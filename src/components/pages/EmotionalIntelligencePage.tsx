import React, { useState } from 'react';
import { 
  HeartHandshake, Brain, ShieldCheck, Users, Target, 
  ArrowRight, CheckCircle2, ChevronRight, HelpCircle, 
  MessageSquare, Sparkles, Building2, UserCheck, Award 
} from 'lucide-react';
import { FounderPortrait } from '../common/FounderPortrait';
import { LeadSegment } from '../../types';

interface EmotionalIntelligencePageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const EmotionalIntelligencePage: React.FC<EmotionalIntelligencePageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const eqFaqs = [
    {
      q: 'How does Emotional Intelligence training translate into measurable business performance?',
      a: 'Emotional Intelligence directly addresses the primary causes of workplace friction: unmanaged stress, poor listening, defensive conflict, and high employee turnover. When teams communicate with empathetic clarity and leaders regulate anxiety during pressure, project handoffs improve, client retention rises, and sales closing conversations become consultative rather than combative.'
    },
    {
      q: 'How is this training customized for our company or institution?',
      a: 'Before delivering a workshop, Deepak Verma coordinates with your executive stakeholders to understand your industry context, specific team dynamics, and cross-functional friction points. Roleplays and scenario exercises are drawn directly from your daily work environments.'
    },
    {
      q: 'Does Mastermind Alliance Coaching administer commercial psychometric test scores?',
      a: 'No. As part of our strict commitment to authentic, grounded development, we do not administer unverified commercial psychometric tests or issue generic personality labels. We focus on observable behavioral skills: active listening, emotional de-escalation, impulse control, and constructive feedback.'
    },
    {
      q: 'Can Emotional Intelligence training be combined with our sales or leadership offsite?',
      a: 'Yes. Many corporate clients integrate Emotional Intelligence modules into their sales kickoffs (improving buyer empathy and objection handling) or annual leadership retreats (fostering psychological safety and executive poise).'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-br from-[#111111] via-[#1c1c1c] to-[#0a0a0a] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-neutral-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D13A28]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-950/80 border border-red-800/80 rounded-full text-[#D13A28] text-xs font-bold uppercase tracking-wider">
              <Brain className="w-4 h-4" />
              <span>Core Subject • Mastermind Alliance Coaching</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-[1.12]">
              Emotional Intelligence: <br />
              <span className="text-[#D13A28]">The Human Advantage</span> in a Changing World
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              In a world of increasing pressure, changing expectations, and constant interaction, technical knowledge alone is not enough. The ability to understand emotions, manage reactions, communicate with empathy, and build meaningful relationships can make a powerful difference in personal and professional life.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry('B2B', 'Emotional Intelligence Training')}
                className="px-7 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer shadow-lg shadow-[#D13A28]/25"
              >
                Discuss Emotional Intelligence Training
              </button>
              <button
                onClick={() => onNavigate('catalogue')}
                className="px-7 py-3.5 bg-neutral-800/90 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer border border-neutral-700"
              >
                Explore All Curriculum
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <FounderPortrait size="lg" showBadge={true} />
          </div>
        </div>
      </section>

      {/* 2. WHY EMOTIONAL INTELLIGENCE MATTERS TODAY */}
      <section className="space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Critical Foundation
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
            Why Emotional Intelligence is Not Just a Soft Skill
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
            Emotional Intelligence is an essential capability that influences how people understand themselves, respond to others, communicate, manage pressure, make decisions, resolve conflicts, and lead teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-neutral-900">Cognitive Poise Under Pressure</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Stress triggers defensive physiological reflexes. Emotional self-regulation allows professionals to remain calm, reflective, and clear-headed in high-stakes negotiations and critical deadlines.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-neutral-900">Empathy Over Manipulation</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Authentic empathy enables salespeople and managers to read unstated concerns, listen deeply without interrupting, and build long-lasting trust that transactional scripts can never duplicate.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-neutral-900">Constructive Conflict Resolution</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Disagreements are natural in high-growth environments. Teams with high emotional intelligence de-escalate friction, separate egos from problems, and preserve interpersonal dignity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THREE DEDICATED AUDIENCE PATHWAYS */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Tailored Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
            Emotional Intelligence for Every Organizational Tier
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-2xl">
            Choose the focused curriculum designed specifically for frontline contributors, people managers, or executive leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pathway A: Workforce & Employees */}
          <div className="bg-white rounded-3xl border border-neutral-200 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D13A28] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                  Pathway A
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                  For Employees & Workforce
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Build foundational self-awareness, personal accountability, active listening, and stress resilience across daily project interactions.
              </p>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Core Competencies:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Self-awareness and recognizing emotional triggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Managing workplace stress and automatic reactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Active listening and clear interpersonal empathy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Receiving feedback and disagreements constructively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cross-functional collaboration and accountability</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('B2B', 'Emotional Intelligence: Workforce Training')}
              className="w-full py-3 bg-neutral-900 hover:bg-[#111111] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Workforce Training</span>
              <ChevronRight className="w-4 h-4 text-[#D13A28]" />
            </button>
          </div>

          {/* Pathway B: Managers */}
          <div className="bg-white rounded-3xl border-2 border-[#D13A28]/30 p-7 shadow-md flex flex-col justify-between space-y-6 relative">
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-0.5 bg-[#D13A28] text-white text-[10px] font-bold uppercase rounded-full">
                High Impact
              </span>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-[#111111] flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-[#D13A28]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Pathway B
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                  For People Managers
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Equip supervisors and team leads to handle difficult conversations, provide motivating feedback, and foster psychological safety without micromanagement.
              </p>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Core Competencies:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Understanding individual and team emotional dynamics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Structuring constructive, growth-oriented feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Conducting difficult conversations with dignity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Building psychological safety and candid dialogue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Sustaining team motivation through workload stress</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('B2B', 'Emotional Intelligence: Manager Development')}
              className="w-full py-3 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#D13A28]/20"
            >
              <span>Explore Manager Development</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Pathway C: Leaders & Executives */}
          <div className="bg-white rounded-3xl border border-neutral-200 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-[#111111] flex items-center justify-center">
                <Award className="w-6 h-6 text-neutral-800" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Pathway C
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                  For Organizational Leaders
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Executive-level self-mastery, steering organizations through disruption, emotional contagion awareness, and responsible high-stakes decision making.
              </p>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Core Competencies:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Executive self-awareness and emotional self-management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Empathetic, steady leadership during uncertainty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Balancing business metrics with human impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Influencing constructively across boards and stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Instilling an enterprise culture of high accountability</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('B2B', 'Emotional Intelligence: Executive Leadership')}
              className="w-full py-3 bg-neutral-900 hover:bg-[#111111] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Leadership Training</span>
              <ChevronRight className="w-4 h-4 text-[#D13A28]" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CONNECTING EQ TO SALES & LEADERSHIP */}
      <section className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200/90 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Integrated Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
            How Emotional Intelligence Strengthens All MAC Programs
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Rather than existing in isolation, Emotional Intelligence is woven directly into our sales mastery, corporate industry blueprints, and flagship personal growth programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('program-detail', 'salesmaster')}
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-[#D13A28]/50 transition-all cursor-pointer group space-y-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
              In SalesMaster
            </span>
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#D13A28] transition-colors">
              Customer Psychology & Trust
            </h4>
            <p className="text-xs text-neutral-500">
              Reading buyer hesitation, active discovery, and neutralizing objections without triggering buyer defensiveness.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('program-detail', 'real-estate-sales-mastery')}
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-[#D13A28]/50 transition-all cursor-pointer group space-y-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
              In Real Estate Sales
            </span>
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#D13A28] transition-colors">
              High-Ticket Buyer Anxiety
            </h4>
            <p className="text-xs text-neutral-500">
              Navigating family emotional concerns around large property investments and closing ethically.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('program-detail', 'core-leadership-program')}
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-[#D13A28]/50 transition-all cursor-pointer group space-y-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
              In Core Leadership
            </span>
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#D13A28] transition-colors">
              Empathetic Accountability
            </h4>
            <p className="text-xs text-neutral-500">
              Driving rigorous execution while maintaining psychological safety, trust, and team morale.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('program-detail', 'lifemaster')}
            className="p-5 bg-white rounded-2xl border border-neutral-200 hover:border-[#D13A28]/50 transition-all cursor-pointer group space-y-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
              In LifeMaster
            </span>
            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#D13A28] transition-colors">
              Internal Self-Regulation
            </h4>
            <p className="text-xs text-neutral-500">
              Mastering emotional discipline, conquering limiting self-talk, and building resilient daily habits.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY FORMATS */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Implementation Modes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif] mt-1">
            Available Delivery Formats
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 text-center space-y-1">
            <div className="font-bold text-sm text-neutral-900">Keynote Presentation</div>
            <p className="text-xs text-neutral-500">60-90 min high-impact address</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 text-center space-y-1">
            <div className="font-bold text-sm text-neutral-900">Half-Day Intensive</div>
            <p className="text-xs text-neutral-500">3.5 hours focused drills</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 text-center space-y-1">
            <div className="font-bold text-sm text-neutral-900">Full-Day Workshop</div>
            <p className="text-xs text-neutral-500">7 hours immersive simulations</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 text-center space-y-1">
            <div className="font-bold text-sm text-neutral-900">Multi-Week Cohort</div>
            <p className="text-xs text-neutral-500">Modular weekly practice + review</p>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {eqFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#D13A28] font-mono text-base">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CORPORATE INQUIRY CTA */}
      <section className="bg-gradient-to-r from-[#111111] to-[#1e1e1e] rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Ready to Begin?
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Discuss Emotional Intelligence Training for Your Organization
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Connect directly with Deepak Verma and the Mastermind Alliance Coaching coordination desk in Lucknow to outline your team’s development plan.
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onOpenInquiry('B2B', 'Emotional Intelligence Training Consultation')}
            className="px-8 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer text-center shadow-lg shadow-[#D13A28]/30"
          >
            Discuss Training Now
          </button>
        </div>
      </section>
    </div>
  );
};
