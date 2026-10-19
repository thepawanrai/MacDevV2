import React from 'react';
import { Mic, CheckCircle2, Calendar, MapPin, Sparkles, ArrowRight, Award } from 'lucide-react';
import { LeadSegment } from '../../types';

interface KeynotesPageProps {
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const KeynotesPage: React.FC<KeynotesPageProps> = ({
  onOpenInquiry,
}) => {
  const keynoteTopics = [
    {
      title: 'Achieving Success Together: The Mastermind Architecture',
      duration: '45 - 60 minutes',
      audience: 'Annual Conventions, Leadership Summits, All-Hands Meets',
      description: 'Why individual talent hits a ceiling without collective alignment. Deepak Verma explores the psychological mechanics of high-trust alliances, mutual accountability, and eradicating silo mentalities within fast-growing organizations.'
    },
    {
      title: 'Consultative Selling: The High-Trust Advisor Mindset',
      duration: '60 - 90 minutes',
      audience: 'Sales Kickoffs, Industry Conferences, Realtor & Insurance Assemblies',
      description: 'Breaking free from obsolete high-pressure pitching. Learn how top producers position themselves as indispensable advisors by mastering deep discovery questioning, ethical objection neutralization, and emotional buyer resonance.'
    },
    {
      title: 'The Discipline of Execution: Overcoming Procrastination & Friction',
      duration: '45 - 60 minutes',
      audience: 'Professional Associations, Youth & Entrepreneurship Summits',
      description: 'The science of sustained daily momentum. Practical cognitive tactics to eliminate decision fatigue, break free from chronic delay habits, and engineer ironclad personal accountability.'
    },
    {
      title: 'Ethical Leadership in Volatile Times',
      duration: '60 minutes',
      audience: 'Corporate Offsites, Banking Conferences, Executive Assemblies',
      description: 'Leading with psychological safety and radical ownership. How leaders inspire discretionary effort and build resilient team cultures during economic and market disruption.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <Mic className="w-4 h-4" />
          <span>Keynotes & Keynote Speaking</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] max-w-3xl leading-tight">
          Inspiring, Actionable Keynotes by Deepak Verma
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
          Energize your conference, corporate annual kickoff, or institutional assembly with grounded perspectives, practical frameworks, and authentic human delivery.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenInquiry('Keynote', 'Invite Deepak Verma as Keynote Speaker')}
            className="px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer shadow-md shadow-[#D13A28]/20"
          >
            Invite Deepak Verma as a Speaker
          </button>
        </div>
      </div>

      {/* Speaker Bio Card */}
      <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-xs flex flex-col md:flex-row items-center gap-8">
        <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-md border border-neutral-200">
          <img
            src="/deepak-verma-founder.jpg"
            alt="Deepak Verma"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="space-y-3">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
              Deepak Verma
            </h2>
            <p className="text-xs font-semibold text-[#D13A28] uppercase tracking-wider">
              Founder, Mastermind Alliance Coaching • Lucknow, Uttar Pradesh
            </p>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Deepak Verma speaks on the real-world dynamics of sales performance, personal discipline, and ethical leadership. His keynotes move beyond empty motivational buzzwords to deliver structured thinking and memorable tactical shifts that audiences can implement immediately.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-neutral-500 pt-1">
            <span>✓ Available for In-Person & Virtual Keynotes</span>
            <span>✓ English & Hindi Professional Delivery</span>
            <span>✓ Tailored to Event Theme</span>
          </div>
        </div>
      </div>

      {/* Signature Keynote Topics */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Keynote Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Signature Presentation Themes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keynoteTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#D13A28] font-bold">{topic.duration}</span>
                  <span className="text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded text-[10px] font-bold">
                    Keynote Address
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {topic.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {topic.description}
                </p>
                <div className="text-[11px] text-neutral-500">
                  <strong>Ideal for:</strong> {topic.audience}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <button
                  onClick={() => onOpenInquiry('Keynote', `Keynote: ${topic.title}`)}
                  className="w-full py-2 bg-neutral-50 hover:bg-neutral-100 text-[#111111] text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
                >
                  Check Availability for this Topic →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Organizer Inquiry Box */}
      <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-neutral-900">Planning an Event or Annual Conference?</h3>
        <p className="text-xs sm:text-sm text-neutral-600">
          Reach out with your prospective dates, location, and theme. Our coordination team will confirm availability and technical requirements.
        </p>
        <button
          onClick={() => onOpenInquiry('Keynote', 'Keynote Coordination')}
          className="px-6 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors"
        >
          Submit Event Inquiry
        </button>
      </div>
    </div>
  );
};
