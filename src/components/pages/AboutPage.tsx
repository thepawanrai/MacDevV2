import React from 'react';
import { MapPin } from 'lucide-react';
import { SiteSettings, LeadSegment } from '../../types';
import { FounderPortrait } from '../common/FounderPortrait';

interface AboutPageProps {
  settings: SiteSettings;
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <span>About Mastermind Alliance Coaching</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Practical Development, Grounded Transformation.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
          Mastermind Alliance Coaching (MAC) was founded to replace superficial motivational noise with structured capability building, continuous guided practice, and ethical execution.
        </p>
      </div>

      {/* Founder Biography (Strict Adherence to Section 2 & 13) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <FounderPortrait size="lg" showBadge={true} />
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
                Founder & Mentor
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
                Deepak Verma
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D13A28]" />
                <span>Based in Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Core Mission Quote Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] text-white border-l-4 border-[#D13A28] shadow-sm my-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D13A28] block mb-1">
                Founder's Vision & Declaration
              </span>
              <p className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                “I want to empower the YUVA Power of our Country Spiritually.”
              </p>
              <span className="block mt-1 text-[11px] font-semibold text-neutral-400">
                — Deepak Verma, Founder & Mentor, Mastermind Alliance Coaching
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed bg-red-50/70 p-3 rounded-xl border border-red-100">
              <strong className="text-[#D13A28]">Mission Statement: </strong>
              “I want to empower the YUVA Power of our Country Spiritually.”
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                <strong>Deepak Verma</strong> is one of India’s leading Life Coaches, Breakthrough Strategists, and Corporate Trainers with <strong>15+ years of experience</strong> in transforming lives. Having guided over <strong>25,000 people</strong>, he empowers individuals and organizations with clarity, confidence, and purpose.
              </p>
              <p>
                From domestic to international corporate training, his expertise spans leadership development, productivity, and youth empowerment. Through his flagship Trainings, Deepak has inspired thousands to define their vision and achieve measurable success. His mission: <em>“I want to empower the youth of our country spiritually.”</em>
              </p>
              <p>
                Deepak is particularly passionate about Emotional Intelligence, teaching its practical relevance to personal effectiveness, sales professionals, employees, managers, and organizational leaders. His programs serve individual learners seeking self-mastery, corporate sales organizations looking to upgrade closing rates and client trust, and public institutions aiming to enhance citizen communication and workplace dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Deepak Verma? */}
        <div className="border-t border-neutral-100 pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
              Why Choose Deepak Verma?
            </h3>
            <span className="text-xs font-semibold text-[#D13A28] uppercase tracking-wider">
              Proven Track Record
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-xl font-black text-[#D13A28]">15+ Years</div>
              <div className="text-xs font-bold text-neutral-900">Coaching & Training Excellence</div>
              <p className="text-[11px] text-neutral-500">Over a decade and a half of high-impact corporate and life coaching.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-xl font-black text-neutral-900">25,000+</div>
              <div className="text-xs font-bold text-neutral-900">Lives Transformed</div>
              <p className="text-[11px] text-neutral-500">Mentored professionals, entrepreneurs & students across India and abroad.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-xl font-black text-emerald-600">Tailored</div>
              <div className="text-xs font-bold text-neutral-900">Customized Programs</div>
              <p className="text-[11px] text-neutral-500">Designed for Students, Professionals, Leaders & Corporates.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-xl font-black text-purple-600">Integrated</div>
              <div className="text-xs font-bold text-neutral-900">Psychology & Spirituality</div>
              <p className="text-[11px] text-neutral-500">A powerful blend of psychology, spirituality & practical action frameworks.</p>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="border-t border-neutral-100 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900">1. Action Precedes Motivation</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Waiting to feel like doing hard tasks leads to delay. We teach behavioral activation and friction elimination.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900">2. Ethical Consultative Selling</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              High-pressure tactics alienate buyers. High-trust discovery questioning turns salespeople into indispensable advisors.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900">3. The Mastermind Principle</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Shared accountability and peer alliance create the psychological friction needed to sustain long-term discipline.
            </p>
          </div>
        </div>
      </div>

      {/* Cross-Cutting Upskilling & Reskilling Vision */}
      <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Unifying Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Upskilling & Reskilling for a Changing Economy
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Whether preparing for high-stakes property consultations, managing a newly promoted team, or overcoming personal procrastination, our programs are engineered around modern cognitive upskilling—giving professionals resilient capabilities that withstand automation and industry shifts.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('catalogue')}
            className="px-6 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors"
          >
            Explore Course Offerings
          </button>
          <button
            onClick={() => onOpenInquiry('General')}
            className="px-6 py-3 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};
