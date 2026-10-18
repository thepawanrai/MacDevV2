import React, { useState } from 'react';
import { 
  Calendar, MapPin, Users, Clock, ArrowRight, 
  Sparkles, CheckCircle2, Award, ExternalLink, Filter 
} from 'lucide-react';
import { LeadSegment } from '../../types';

interface EventsPageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

interface EventItem {
  id: string;
  title: string;
  badge: string;
  category: 'Offline Cohort' | 'Flagship Workshop' | 'Masterclass' | 'Keynote';
  dateDisplay: string;
  location: string;
  format: string;
  capacity: string;
  summary: string;
  highlights: string[];
  instructor: string;
  featured?: boolean;
}

const macEventsList: EventItem[] = [
  {
    id: 'event-sales-oct-2026',
    title: 'Sales Master Offline Intensive Cohort',
    badge: 'Offline Cohort • October 2026',
    category: 'Offline Cohort',
    dateDisplay: 'October 17–19, 2026 (3 Full Days)',
    location: 'Lucknow Training Hub, Uttar Pradesh',
    format: 'In-Person Intensive Workshop',
    capacity: 'Strictly 30 Seats (High Personal Feedback)',
    summary: 'The signature offline cohort of Sales Master. 3 intensive days of live buyer psychology, cold outreach drills, objection neutralization frameworks, and high-trust consultative closing directly coached by Deepak Verma.',
    highlights: [
      'Live recorded objection-handling roleplays with personalized feedback',
      'High-trust consultative questioning scripts and closing drills',
      'Emotional Intelligence integration in real estate, insurance, and high-ticket B2B',
      'Comprehensive workbook, call review frameworks, and 90-day execution roadmap'
    ],
    instructor: 'Deepak Verma',
    featured: true
  },
  {
    id: 'event-life-master-2026',
    title: 'Life Master: Mindset, Energy & Spiritual Alignment Weekend',
    badge: 'Flagship Retreat • Q4 2026',
    category: 'Flagship Workshop',
    dateDisplay: 'November 28–29, 2026 (Weekend Immersion)',
    location: 'Lucknow, Uttar Pradesh',
    format: 'In-Person Mastermind Retreat',
    capacity: 'Limited Cohort Size',
    summary: 'A 2-day immersive retreat designed to eliminate cognitive fatigue, break subconscious self-sabotage loops, and align daily actions with long-term spiritual conviction and career ambition.',
    highlights: [
      'Personal values and energy architecture audit',
      'Emotional regulation techniques for high-pressure leadership',
      'Daily habit design: frictionless morning & evening routines',
      'Accountability partner matching and 60-day check-in alliance'
    ],
    instructor: 'Deepak Verma',
    featured: true
  },
  {
    id: 'event-goalmaster-sprint',
    title: 'GoalMaster 2027 Strategic Blueprint Sprint',
    badge: 'Annual Planning Workshop',
    category: 'Masterclass',
    dateDisplay: 'December 20, 2026 (Full Day Intensive)',
    location: 'Hybrid (Live in Lucknow + Interactive Livestream)',
    format: 'Hands-on Planning Sprint',
    capacity: 'Open Registration',
    summary: 'Deconstruct vague New Year resolutions into quarterly milestones, weekly commitments, and daily friction elimination. Build a bulletproof execution plan for your personal, sales, and business goals.',
    highlights: [
      'Milestone decomposition worksheets and milestone trackers',
      'Psychological friction elimination (procrastination cures)',
      'Accountability rhythm establishment'
    ],
    instructor: 'Deepak Verma',
    featured: false
  },
  {
    id: 'event-corporate-ei-summit',
    title: 'Emotional Intelligence & High-Trust Leadership Summit',
    badge: 'Executive & Manager Meet',
    category: 'Keynote',
    dateDisplay: 'January 15, 2027',
    location: 'Executive Conference Center, Lucknow',
    format: 'Executive Half-Day Summit',
    capacity: 'Corporate Nominations & Leaders',
    summary: 'Tailored for senior directors, founders, and team managers. Discover why EQ is the ultimate competitive advantage in navigating corporate changes, building psychological safety, and driving team retention.',
    highlights: [
      'Managing difficult executive conversations with composure',
      'De-escalating workplace friction and conflict resolution',
      'Building a culture of trust and shared ownership'
    ],
    instructor: 'Deepak Verma',
    featured: false
  }
];

export const EventsPage: React.FC<EventsPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Offline Cohort', 'Flagship Workshop', 'Masterclass', 'Keynote'];

  const filteredEvents = selectedCategory === 'All'
    ? macEventsList
    : macEventsList.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-16 py-10">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-[#D13A28] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>MAC Events & Offline Cohorts</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
              Live Mentorship, Intensive Cohorts & Masterminds
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Step out of digital theory and into high-impact live practice. Experience face-to-face roleplay drills, real-time feedback, and lifelong peer alliances guided directly by Deepak Verma.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry('B2C', 'Sales Master Offline Cohort October 2026')}
                className="px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer shadow-lg shadow-[#D13A28]/25"
              >
                Reserve Seat for Oct 2026 Cohort
              </button>
              <button
                onClick={() => onOpenInquiry('Keynote', 'Host Deepak Verma for an Event')}
                className="px-6 py-3.5 bg-neutral-800/90 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer border border-neutral-700"
              >
                Host Deepak Verma for an Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVENT FILTER & CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-xs font-semibold text-neutral-500">
            Showing {filteredEvents.length} scheduled event{filteredEvents.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className={`rounded-3xl border transition-all p-6 sm:p-8 ${
                evt.featured
                  ? 'bg-white border-[#D13A28]/40 shadow-md ring-1 ring-[#D13A28]/10'
                  : 'bg-white border-neutral-200 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#D13A28] border border-red-200">
                      {evt.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 text-neutral-700">
                      {evt.format}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {evt.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Cohort Focus Areas:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                      {evt.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Meta & Action Box */}
                <div className="lg:col-span-4 bg-neutral-50 rounded-2xl p-5 border border-neutral-200/80 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-2.5 text-neutral-700">
                      <Calendar className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-neutral-900">Dates & Schedule</div>
                        <div>{evt.dateDisplay}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-neutral-700">
                      <MapPin className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-neutral-900">Location</div>
                        <div>{evt.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-neutral-700">
                      <Users className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-neutral-900">Batch Size</div>
                        <div>{evt.capacity}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-neutral-700">
                      <Award className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-neutral-900">Lead Mentor</div>
                        <div>{evt.instructor} (Founder, MAC)</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenInquiry('B2C', `RSVP / Inquiry: ${evt.title}`)}
                      className="w-full py-3 bg-[#D13A28] hover:bg-[#b82f20] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Register Interest / RSVP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORPORATE OR PRIVATE RETREATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking to organize a custom in-house event or private executive cohort?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Deepak Verma delivers tailored off-site sales intensives, managerial retreats, and keynote addresses for corporations and institutions across India.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('B2B', 'Custom In-House Event or Offsite')}
            className="px-6 py-3.5 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-100 transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            Request Private Cohort Proposal
          </button>
        </div>
      </section>
    </div>
  );
};
