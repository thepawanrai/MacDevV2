import React, { useState } from 'react';
import { Program, User, LeadSegment } from '../../types';
import { AppStore } from '../../services/store';
import { 
  ArrowLeft, CheckCircle2, BookOpen, Clock, Calendar, 
  MapPin, UserCheck, ShieldCheck, Download, ChevronDown, 
  ChevronUp, Play, Lock, AlertCircle 
} from 'lucide-react';

interface ProgramDetailPageProps {
  program: Program;
  currentUser: User | null;
  onBack: () => void;
  onNavigateToPlayer: (programId: string, lessonId?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
  onEnrollSuccess: () => void;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({
  program,
  currentUser,
  onBack,
  onNavigateToPlayer,
  onOpenInquiry,
  onEnrollSuccess,
}) => {
  const [openModuleIds, setOpenModuleIds] = useState<string[]>(
    program.modules.map(m => m.id)
  );
  const [enrollMsg, setEnrollMsg] = useState('');

  const isEnrolled = currentUser ? AppStore.isUserEnrolled(currentUser.id, program.id) : false;

  const toggleModule = (id: string) => {
    setOpenModuleIds(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const handleEnrollNow = () => {
    if (!currentUser) {
      setEnrollMsg('Please sign in or select a demo user to enroll.');
      return;
    }
    AppStore.enrollUser(currentUser.id, program.id);
    setEnrollMsg('Successfully enrolled! Launching course player...');
    setTimeout(() => {
      onEnrollSuccess();
      onNavigateToPlayer(program.id);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Programs</span>
      </button>

      {/* Program Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-red-50 text-[#D13A28] border border-red-200 text-xs font-bold rounded-lg uppercase tracking-wider">
              {program.category}
            </span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-lg">
              {program.audience}
            </span>
            {program.status === 'upcoming' && (
              <span className="px-3 py-1 bg-[#D13A28] text-white text-xs font-bold rounded-lg uppercase">
                {program.statusLabel || 'Upcoming Program'}
              </span>
            )}
            {program.status === 'past' && (
              <span className="px-3 py-1 bg-neutral-500 text-white text-xs font-bold rounded-lg uppercase">
                Past Concept / Archive
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
            {program.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            {program.summary}
          </p>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
              Program Overview
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
              {program.description}
            </p>
          </div>

          {/* Embedded Full Recorded Training Video (if GoalMaster) */}
          {(program.slug === 'goalmaster' || program.id === 'prog-goalmaster') && (
            <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D13A28] animate-pulse" />
                  <span className="font-bold text-sm text-white">
                    Complete Recorded Goal Master Training Program
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=79rOg-B3ZhI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D13A28] hover:text-red-400 font-semibold underline"
                >
                  Watch on YouTube ↗
                </a>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/79rOg-B3ZhI?rel=0"
                  title="GoalMaster Full Recorded Training Program - Deepak Verma"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Watch the complete recorded session of Deepak Verma's Goal Master program above. Experience the milestone breakdown, daily accountability frameworks, and mindset conditioning directly.
              </p>
            </div>
          )}

          {/* Key Outcomes */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>What You Will Master & Execute</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {program.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D13A28] mt-2 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus / Curriculum */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  Curriculum & Module Breakdown
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {program.modules.length} Modules • {program.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Structured Lessons
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {program.modules.map((module) => {
                const isOpen = openModuleIds.includes(module.id);
                return (
                  <div key={module.id} className="border border-neutral-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleModule(module.id)}
                      className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-between text-left transition-colors cursor-pointer"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-neutral-900">
                          {module.title}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {module.description}
                        </p>
                      </div>
                      <div className="shrink-0 text-neutral-400">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="divide-y divide-neutral-100 p-2 bg-white">
                        {module.lessons.map((lesson) => (
                          <div key={lesson.id} className="p-3.5 space-y-2">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-2.5">
                                <div className="w-6 h-6 rounded-md bg-neutral-100 text-neutral-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                  {lesson.order}
                                </div>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-bold text-neutral-800">
                                    {lesson.title}
                                  </h4>
                                  <p className="text-xs text-neutral-500 mt-0.5">
                                    {lesson.description}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[11px] font-medium text-neutral-400 shrink-0">
                                {lesson.durationMinutes} min
                              </span>
                            </div>

                            {/* Takeaways snippet */}
                            {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
                              <div className="pl-8 pt-1">
                                <ul className="space-y-1">
                                  {lesson.keyTakeaways.map((tk, i) => (
                                    <li key={i} className="text-[11px] text-neutral-600 flex items-center gap-1.5">
                                      <span className="w-1 h-1 rounded-full bg-neutral-400" />
                                      <span>{tk}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Downloadable resources badge if any */}
                            {lesson.resources && lesson.resources.length > 0 && (
                              <div className="pl-8 pt-1 flex flex-wrap gap-2">
                                {lesson.resources.map(res => (
                                  <span key={res.id} className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 rounded text-[10px] text-neutral-600 font-medium">
                                    <Download className="w-3 h-3 text-[#D13A28]" />
                                    <span>{res.title} ({res.size})</span>
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQs */}
          {program.faqs && program.faqs.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {program.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-neutral-50 rounded-xl space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Card: Enrollment / Proposal / Action */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-md overflow-hidden p-6 space-y-5">
            {/* Image Preview */}
            <div className="rounded-xl overflow-hidden h-40 bg-neutral-100">
              <img
                src={program.coverImage}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tuition / Pricing */}
            <div className="space-y-1 border-b border-neutral-100 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Tuition & Registration
              </span>
              <div className="text-2xl font-black text-neutral-900">
                {program.priceDisplay || 'Custom Proposal'}
              </div>
              <p className="text-xs text-neutral-500">
                {program.deliveryMode} • {program.duration}
              </p>
            </div>

            {/* Action State */}
            {enrollMsg && (
              <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{enrollMsg}</span>
              </div>
            )}

            {isEnrolled ? (
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>You are enrolled in this program!</span>
                </div>
                <button
                  onClick={() => onNavigateToPlayer(program.id)}
                  className="w-full py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#D13A28]/20"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Continue Learning in Course Player</span>
                </button>
              </div>
            ) : program.actionType === 'enroll' ? (
              <div className="space-y-3">
                <button
                  onClick={handleEnrollNow}
                  className="w-full py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#D13A28]/20"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Enroll in Program</span>
                </button>
                <p className="text-[11px] text-neutral-500 text-center">
                  Instant access to digital modules and live cohorts upon confirmation.
                </p>
              </div>
            ) : program.actionType === 'waitlist' ? (
              <div className="space-y-3">
                <button
                  onClick={() => onOpenInquiry('B2C', program.title)}
                  className="w-full py-3.5 bg-[#111111] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D13A28]" />
                  <span>Join Waitlist for Next Cohort</span>
                </button>
                <p className="text-[11px] text-neutral-500 text-center">
                  Dates and seat capacity are updated as batches are confirmed.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => onOpenInquiry('B2B', program.title)}
                  className="w-full py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#D13A28]/20"
                >
                  <span>Request Corporate Proposal</span>
                </button>
                <p className="text-[11px] text-neutral-500 text-center">
                  Custom curriculum adapted to your team size and operational goals.
                </p>
              </div>
            )}

            {/* Quick Meta Details */}
            <div className="space-y-2.5 pt-2 text-xs text-neutral-600 border-t border-neutral-100">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Instructor:</span>
                <span className="font-semibold text-neutral-800">{program.instructor}</span>
              </div>
              {program.datesText && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Timing:</span>
                  <span className="font-semibold text-[#D13A28]">{program.datesText}</span>
                </div>
              )}
              {program.location && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Venue Base:</span>
                  <span className="font-semibold text-neutral-800">{program.location}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Timezone:</span>
                <span className="font-semibold text-neutral-800">{program.timezone}</span>
              </div>
            </div>
          </div>

          {/* Instructor Bio Box */}
          <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200/80 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Instructor & Program Director
            </span>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm shrink-0">
                DV
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">{program.instructor}</h4>
                <p className="text-xs text-neutral-500">{program.instructorTitle}</p>
              </div>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Sole founder of Mastermind Alliance Coaching, based in Lucknow. Dedicated to practical skills without hype.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
