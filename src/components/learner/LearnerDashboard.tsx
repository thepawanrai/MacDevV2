import React, { useState } from 'react';
import { User, Program, Enrollment, LiveSession, LeadSegment } from '../../types';
import { AppStore } from '../../services/store';
import { 
  BookOpen, Play, CheckCircle2, Clock, Calendar, 
  Download, Sparkles, Video, ArrowRight, MessageSquare, 
  User as UserIcon, Shield, ChevronRight, FileText 
} from 'lucide-react';

interface LearnerDashboardProps {
  currentUser: User;
  programs: Program[];
  onOpenPlayer: (programId: string, lessonId?: string) => void;
  onExplorePrograms: () => void;
  onOpenInquiry: (segment?: LeadSegment) => void;
}

export const LearnerDashboard: React.FC<LearnerDashboardProps> = ({
  currentUser,
  programs,
  onOpenPlayer,
  onExplorePrograms,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'sessions' | 'resources' | 'profile'>('courses');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const enrollments = AppStore.getUserEnrollments(currentUser.id);
  const liveSessions = AppStore.getLiveSessions();

  // Find enrolled program objects
  const enrolledPrograms = enrollments.map(enr => {
    const program = programs.find(p => p.id === enr.programId);
    return {
      enrollment: enr,
      program,
    };
  }).filter(item => item.program !== undefined) as { enrollment: Enrollment; program: Program }[];

  // Most recent or active enrolled program for "Continue Learning"
  const activeEnrolledItem = enrolledPrograms[0];
  const activeProgram = activeEnrolledItem?.program;
  const activeEnrollment = activeEnrolledItem?.enrollment;

  // Calculate totals
  const totalCompletedLessons = enrollments.reduce((acc, e) => acc + e.completedLessonIds.length, 0);

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportMessage.trim()) return;

    AppStore.addLead({
      segment: 'B2C',
      name: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone || '+91 9999999999',
      programInterest: 'Learner Support Request',
      message: supportMessage.trim(),
    });

    setSupportSubmitted(true);
    setSupportMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Learner Welcome Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Official Learner Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Welcome back, {currentUser.name}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Track your course progress, attend scheduled live coaching sessions, and access practical frameworks.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-6">
          <div className="text-center px-2">
            <div className="text-2xl font-black text-neutral-900">{enrolledPrograms.length}</div>
            <div className="text-[11px] font-semibold text-neutral-500 uppercase">Enrolled</div>
          </div>
          <div className="h-8 w-px bg-neutral-200" />
          <div className="text-center px-2">
            <div className="text-2xl font-black text-[#D13A28]">{totalCompletedLessons}</div>
            <div className="text-[11px] font-semibold text-neutral-500 uppercase">Completed</div>
          </div>
          <div className="h-8 w-px bg-neutral-200" />
          <div className="text-center px-2">
            <div className="text-2xl font-black text-emerald-600">{liveSessions.length}</div>
            <div className="text-[11px] font-semibold text-neutral-500 uppercase">Live Labs</div>
          </div>
        </div>
      </div>

      {/* Continue Learning Spotlight Banner (if user has active program) */}
      {activeProgram && activeEnrollment && (
        <div className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#222222] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden border border-neutral-800">
          <div className="space-y-3 max-w-xl z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D13A28] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Resume Where You Left Off</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
              {activeProgram.title}
            </h2>
            <p className="text-xs text-neutral-300 line-clamp-1">
              {activeProgram.summary}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="w-48 bg-white/20 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#D13A28] h-full rounded-full transition-all"
                  style={{
                    width: `${Math.round((activeEnrollment.completedLessonIds.length / (activeProgram.modules.flatMap(m => m.lessons).length || 1)) * 100)}%`
                  }}
                />
              </div>
              <span className="text-xs font-bold text-neutral-300">
                {activeEnrollment.completedLessonIds.length} of {activeProgram.modules.flatMap(m => m.lessons).length} Lessons Done
              </span>
            </div>
          </div>

          <div className="shrink-0 z-10">
            <button
              onClick={() => onOpenPlayer(activeProgram.id, activeEnrollment.lastAccessedLessonId)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors shadow-lg shadow-[#D13A28]/30 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Continue Lesson</span>
            </button>
          </div>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex border-b border-neutral-200 gap-6 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('courses')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'courses'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Enrolled Programs ({enrolledPrograms.length})
        </button>

        <button
          onClick={() => setActiveTab('sessions')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'sessions'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Scheduled Live Labs ({liveSessions.length})
        </button>

        <button
          onClick={() => setActiveTab('resources')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'resources'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Resource & Worksheet Vault
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'profile'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Learner Support & Guidance
        </button>
      </div>

      {/* Tab 1: Enrolled Courses */}
      {activeTab === 'courses' && (
        <div className="space-y-6">
          {enrolledPrograms.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
              <BookOpen className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-neutral-800">You are not enrolled in any programs yet.</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                Explore our full catalogue of practical sales, leadership, and communication programs to begin.
              </p>
              <button
                onClick={onExplorePrograms}
                className="mt-4 px-6 py-2.5 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20] transition-colors"
              >
                Browse All Programs
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledPrograms.map(({ program, enrollment }) => {
                const totalLessons = program.modules.flatMap(m => m.lessons).length;
                const completedCount = enrollment.completedLessonIds.length;
                const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

                return (
                  <div
                    key={program.id}
                    className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28] bg-red-50 px-2.5 py-1 rounded">
                          {program.category}
                        </span>
                        <span className="text-xs font-bold text-neutral-600">
                          {percent}% Completed
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
                        {program.title}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-2">
                        {program.summary}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-1.5 pt-2">
                        <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-[#D13A28] h-full rounded-full transition-all"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-neutral-500">
                          <span>{completedCount} of {totalLessons} lessons completed</span>
                          <span>Instructor: {program.instructor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between">
                      <button
                        onClick={() => onOpenPlayer(program.id, enrollment.lastAccessedLessonId)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Launch Course Player</span>
                      </button>

                      <span className="text-[11px] text-neutral-400">
                        Enrolled: {new Date(enrollment.enrolledAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Interested in additional programs?</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Explore corporate blueprints or join the waitlist for Life Master and Sales Master.</p>
            </div>
            <button
              onClick={onExplorePrograms}
              className="px-4 py-2 bg-white border border-neutral-300 text-neutral-800 text-xs font-bold rounded-xl hover:bg-neutral-100 transition-colors shrink-0"
            >
              Browse Catalogue
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Scheduled Live Labs */}
      {activeTab === 'sessions' && (
        <div className="space-y-4">
          <div className="text-xs text-neutral-500 mb-2">
            Admin-managed live sessions with Deepak Verma. Never miss a guided roleplay or practice drill.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28] bg-red-50 px-2.5 py-1 rounded">
                    {session.programTitle}
                  </span>
                  <span className="text-xs font-bold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                    {session.status === 'scheduled' ? 'Scheduled' : 'Live'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900">
                  {session.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {session.description}
                </p>

                <div className="bg-neutral-50 p-3.5 rounded-xl space-y-2 text-xs text-neutral-600 border border-neutral-200/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D13A28]" />
                    <span className="font-semibold">{session.date}</span>
                    <span>•</span>
                    <span>{session.time} ({session.timezone})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-neutral-400" />
                    <span>Conducted by: <strong className="text-neutral-800">{session.instructor}</strong></span>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-500 italic">
                  Note: {session.instructions}
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-700">
                    ✓ Access Granted for Registered Learner
                  </span>
                  <button
                    onClick={() => alert(`Connecting to session: ${session.title}. Scheduled for ${session.date} at ${session.time}.`)}
                    className="px-4 py-2 bg-[#111111] text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors"
                  >
                    Join Session Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Resource & Worksheet Vault */}
      {activeTab === 'resources' && (
        <div className="space-y-4">
          <p className="text-xs text-neutral-500 mb-2">
            Approved worksheets, planning templates, and objection frameworks developed for Mastermind Alliance Coaching learners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900">PREP Communication Framework</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Step-by-step structure for delivering articulate, confident impromptu opinions in business meetings.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                <span className="text-[10px] text-neutral-400">PDF • 190 KB</span>
                <button
                  onClick={() => alert('Downloading PREP Communication Framework PDF...')}
                  className="text-xs font-bold text-[#D13A28] hover:underline"
                >
                  Download Guide
                </button>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#111111] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Daily Execution Accountability Matrix</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                The morning and evening habit tracking blueprint for personal discipline and high-focus work blocks.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                <span className="text-[10px] text-neutral-400">PDF • 320 KB</span>
                <button
                  onClick={() => alert('Downloading Daily Execution Accountability Matrix PDF...')}
                  className="text-xs font-bold text-[#D13A28] hover:underline"
                >
                  Download Guide
                </button>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-neutral-900">Consultative Sales Objections Matrix</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Neutralizing price, timing, and competitor hesitations with high-trust consultative questioning.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                <span className="text-[10px] text-neutral-400">PDF • 410 KB</span>
                <button
                  onClick={() => alert('Downloading Consultative Sales Objections Matrix PDF...')}
                  className="text-xs font-bold text-[#D13A28] hover:underline"
                >
                  Download Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Learner Support & Guidance */}
      {activeTab === 'profile' && (
        <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <h3 className="text-lg font-bold text-neutral-900">Direct Learner Guidance & Support</h3>
            <p className="text-xs text-neutral-500 mt-1">
              Have a question regarding your assignments, live cohort schedules, or practicing frameworks? Submit your message directly to our coordination desk in Lucknow.
            </p>
          </div>

          {supportSubmitted ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs space-y-2 border border-emerald-200">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Message Received by Coordination Team</span>
              </div>
              <p>
                We have received your question and will reply directly to your email ({currentUser.email}) within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSupportSubmitted(false)}
                className="text-emerald-900 font-bold underline pt-1"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSupportSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Learner Name & Email
                </label>
                <div className="text-xs text-neutral-600 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  {currentUser.name} ({currentUser.email})
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Your Question or Implementation Barrier
                </label>
                <textarea
                  required
                  rows={4}
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  placeholder="Describe where you need clarification (e.g. practicing PREP framework, session timing, or corporate coaching)..."
                  className="w-full p-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20] transition-colors"
              >
                Submit for Instructor Review
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
