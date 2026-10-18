import React, { useState, useMemo } from 'react';
import { Program, ProgramCategory, TargetAudience, DeliveryMode, ProgramStatus, LeadSegment } from '../../types';
import { Search, Filter, ArrowRight, CheckCircle2, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

interface CataloguePageProps {
  programs: Program[];
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({
  programs,
  onNavigate,
  onOpenInquiry,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAudience, setSelectedAudience] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      // Search
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchesSearch =
          p.title.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.outcomes.some(o => o.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Audience
      if (selectedAudience !== 'all' && p.audience !== selectedAudience) {
        return false;
      }

      // Delivery Mode
      if (selectedMode !== 'all' && p.deliveryMode !== selectedMode) {
        return false;
      }

      // Status
      if (selectedStatus !== 'all' && p.status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [programs, searchTerm, selectedCategory, selectedAudience, selectedMode, selectedStatus]);

  const categories = [
    'all',
    'Personal Growth & Life Management',
    'Emotional Intelligence & Human Effectiveness',
    'Communication & Public Speaking',
    'Sales & Business Performance',
    'Leadership & Team Development',
    'Industry Training',
    'Institutional Training',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold text-[#D13A28] tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curriculum & Courses</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
          Program & Course Catalogue
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Explore structured personal development, sales mastery, emotional intelligence, leadership training, and industry blueprints designed and delivered by Deepak Verma.
        </p>
      </div>

      {/* Transparent Session Quotation Banner */}
      <div className="bg-gradient-to-r from-neutral-900 to-[#111111] text-white p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#D13A28]">
              Transparent Quotation Structure
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif]">
              Program Module & Session Structure Fees
            </h3>
            <p className="text-xs text-neutral-400">
              Standardized investment frameworks for keynote addresses, workshops, full-day intensives, and offsite residential programs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60 text-center">
              <div className="text-xs font-semibold text-neutral-300">60 Mins Talk</div>
              <div className="text-base font-black text-white mt-0.5">₹30,000</div>
            </div>
            <div className="p-3 bg-neutral-800/80 rounded-xl border border-[#D13A28]/50 text-center">
              <div className="text-xs font-semibold text-red-300">3 Hours Workshop</div>
              <div className="text-base font-black text-[#D13A28] mt-0.5">₹60,000</div>
            </div>
            <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60 text-center">
              <div className="text-xs font-semibold text-neutral-300">6 Hours (1-Day)</div>
              <div className="text-base font-black text-white mt-0.5">₹1,00,000</div>
            </div>
            <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60 text-center">
              <div className="text-xs font-semibold text-amber-300">3D2N Retreat</div>
              <div className="text-base font-black text-amber-400 mt-0.5">₹3,00,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by topic, keyword, or program name (e.g. Sales, Emotional Intelligence, Goal, Leadership)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
          />
        </div>

        {/* Filter Pills / Selects */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Category Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-[#D13A28]"
            >
              <option value="all">All Categories</option>
              <option value="Personal Growth & Life Management">Personal Growth & Life Management</option>
              <option value="Emotional Intelligence & Human Effectiveness">Emotional Intelligence & Human Effectiveness</option>
              <option value="Communication & Public Speaking">Communication & Public Speaking</option>
              <option value="Sales & Business Performance">Sales & Business Performance</option>
              <option value="Leadership & Team Development">Leadership & Team Development</option>
              <option value="Industry Training">Industry Training (Real Estate, Insurance, Network Marketing)</option>
              <option value="Institutional Training">Institutional Training (B2G)</option>
            </select>
          </div>

          {/* Audience Dropdown */}
          <div className="min-w-[160px]">
            <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Audience
            </label>
            <select
              value={selectedAudience}
              onChange={(e) => setSelectedAudience(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-[#D13A28]"
            >
              <option value="all">All Audiences</option>
              <option value="Individual (B2C)">Individual (B2C)</option>
              <option value="Corporate & Teams (B2B)">Corporate & Teams (B2B)</option>
              <option value="Institutions & Public Sector (B2G)">Institutions (B2G)</option>
            </select>
          </div>

          {/* Delivery Mode */}
          <div className="min-w-[160px]">
            <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Delivery Mode
            </label>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-[#D13A28]"
            >
              <option value="all">All Delivery Modes</option>
              <option value="Online Self-Paced">Online Self-Paced</option>
              <option value="Live Online Cohort">Live Online Cohort</option>
              <option value="Offline / In-Person">Offline / In-Person (Lucknow)</option>
              <option value="Hybrid (Online + Classroom)">Hybrid</option>
            </select>
          </div>

          {/* Status */}
          <div className="min-w-[140px]">
            <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 focus:outline-none focus:border-[#D13A28]"
            >
              <option value="all">All Statuses</option>
              <option value="enrolling">Enrolling Now</option>
              <option value="upcoming">Upcoming (Waitlist)</option>
              <option value="on-demand">On-Demand Available</option>
              <option value="past">Past / Concept Archive</option>
            </select>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== 'all' || selectedAudience !== 'all' || selectedMode !== 'all' || selectedStatus !== 'all') && (
            <div className="self-end pb-1">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedAudience('all');
                  setSelectedMode('all');
                  setSelectedStatus('all');
                }}
                className="text-xs text-[#D13A28] hover:underline font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
        <span>Showing {filteredPrograms.length} of {programs.length} programs</span>
        <span>Instructor: Deepak Verma — Founder, Mastermind Alliance Coaching</span>
      </div>

      {/* Program Cards Grid */}
      {filteredPrograms.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
          <p className="text-neutral-500 text-sm">No programs match your current filter criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedAudience('all');
              setSelectedMode('all');
              setSelectedStatus('all');
            }}
            className="mt-3 text-xs font-bold text-[#D13A28] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-neutral-100">
                  <img
                    src={program.coverImage}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-0.5 bg-[#111111]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase rounded tracking-wider">
                      {program.audience.split(' ')[0]}
                    </span>
                    {program.status === 'upcoming' && (
                      <span className="px-2 py-0.5 bg-[#D13A28] text-white text-[10px] font-bold uppercase rounded">
                        Upcoming
                      </span>
                    )}
                    {program.status === 'enrolling' && (
                      <span className="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold uppercase rounded">
                        Enrolling
                      </span>
                    )}
                    {program.status === 'past' && (
                      <span className="px-2 py-0.5 bg-neutral-600 text-white text-[10px] font-bold uppercase rounded">
                        Archived Concept
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-neutral-800 text-[10px] font-bold rounded">
                      {program.deliveryMode}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[11px] font-semibold text-[#D13A28] uppercase tracking-wider mb-1">
                    {program.category}
                  </div>
                  <h3
                    onClick={() => onNavigate('program-detail', program.slug)}
                    className="text-base font-bold text-neutral-900 mb-2 hover:text-[#D13A28] transition-colors cursor-pointer"
                  >
                    {program.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {program.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {program.outcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1 text-xs text-neutral-500 border-t border-neutral-100 pt-3">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium text-neutral-800">{program.duration}</span>
                    </div>
                    {program.datesText && (
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold text-[#D13A28]">{program.datesText}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Tuition:</span>
                      <span className="font-bold text-neutral-900">{program.priceDisplay || 'Inquire'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('program-detail', program.slug)}
                  className="text-xs font-bold text-neutral-700 hover:text-neutral-900 cursor-pointer"
                >
                  View Details
                </button>

                {program.actionType === 'enroll' ? (
                  <button
                    onClick={() => onNavigate('program-detail', program.slug)}
                    className="px-3.5 py-2 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer"
                  >
                    Enroll Now
                  </button>
                ) : program.actionType === 'waitlist' ? (
                  <button
                    onClick={() => onOpenInquiry('B2C', program.title)}
                    className="px-3.5 py-2 bg-[#111111] text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Join Waitlist
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenInquiry('B2B', program.title)}
                    className="px-3.5 py-2 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer"
                  >
                    Request Proposal
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
