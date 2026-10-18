import React, { useState, useEffect } from 'react';
import { Program, Lesson, User, Module } from '../../types';
import { AppStore } from '../../services/store';
import { 
  ArrowLeft, CheckCircle2, Circle, Play, Pause, Volume2, 
  Download, ChevronRight, ChevronLeft, BookOpen, Clock, 
  FileText, Check, Award, AlertCircle 
} from 'lucide-react';

interface CoursePlayerProps {
  program: Program;
  currentUser: User;
  initialLessonId?: string;
  onBackToDashboard: () => void;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({
  program,
  currentUser,
  initialLessonId,
  onBackToDashboard,
}) => {
  // Find all lessons in flat array for sequential navigation
  const allLessons = program.modules.flatMap(m => m.lessons);

  // Initial active lesson
  const defaultLesson = initialLessonId 
    ? allLessons.find(l => l.id === initialLessonId) || allLessons[0]
    : allLessons[0];

  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const totalDurationSec = (activeLesson?.durationMinutes || 30) * 60;

  // Track completed lessons from AppStore
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    const enrollments = AppStore.getUserEnrollments(currentUser.id);
    const thisEnr = enrollments.find(e => e.programId === program.id);
    return thisEnr ? thisEnr.completedLessonIds : [];
  });

  const isCurrentCompleted = completedIds.includes(activeLesson.id);

  // Update last accessed lesson on load/change
  useEffect(() => {
    if (activeLesson) {
      AppStore.updateLastAccessedLesson(currentUser.id, program.id, activeLesson.id);
      setCurrentTimeSec(0);
      setIsPlaying(false);
    }
  }, [activeLesson, currentUser.id, program.id]);

  // Simulated video playback timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec(prev => {
          if (prev >= totalDurationSec) {
            setIsPlaying(false);
            return totalDurationSec;
          }
          return prev + 1 * playbackSpeed;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, totalDurationSec]);

  const currentIndex = allLessons.findIndex(l => l.id === activeLesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const handleToggleComplete = () => {
    const isNowComplete = AppStore.toggleLessonComplete(currentUser.id, program.id, activeLesson.id);
    if (isNowComplete) {
      setCompletedIds(prev => [...prev, activeLesson.id]);
      // Optional: automatically advance to next if available
      if (nextLesson) {
        setTimeout(() => setActiveLesson(nextLesson), 400);
      }
    } else {
      setCompletedIds(prev => prev.filter(id => id !== activeLesson.id));
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Calculate overall program completion %
  const completionPercentage = allLessons.length > 0 
    ? Math.round((completedIds.length / allLessons.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#111111] text-white px-4 sm:px-6 py-3 border-b border-neutral-800 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            title="Return to Learner Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#D13A28]">
              {program.category}
            </div>
            <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
              {program.title}
            </h1>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] text-neutral-400 font-medium">
              Course Progress: {completedIds.length}/{allLessons.length} Lessons
            </span>
            <div className="w-28 h-1.5 bg-neutral-800 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-[#D13A28] rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
          <span className="text-xs font-bold text-white bg-neutral-800 px-2 py-1 rounded-md">
            {completionPercentage}%
          </span>
        </div>
      </div>

      {/* Main Learning Grid */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-4 sm:p-6 gap-6">
        {/* Left Side: Video Player & Lesson Notes (Flex-1) */}
        <div className="flex-1 space-y-6">
          {/* Simulated HD Video Player */}
          <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl border border-neutral-800 relative group aspect-video flex flex-col justify-between">
            {/* Player Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Top Overlay */}
            <div className="p-4 sm:p-6 relative z-10 flex items-center justify-between text-white">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28] bg-black/50 px-2 py-0.5 rounded">
                  Lesson {currentIndex + 1}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-white">
                  {activeLesson.title}
                </h2>
              </div>
              <span className="text-xs text-neutral-300 bg-neutral-800/80 px-2.5 py-1 rounded-md">
                Deepak Verma
              </span>
            </div>

            {/* Center Big Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[#D13A28] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#D13A28]/40 cursor-pointer"
                aria-label={isPlaying ? 'Pause lesson' : 'Play lesson'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-white" />
                ) : (
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="p-4 sm:p-5 relative z-10 space-y-2 text-white">
              {/* Progress Slider */}
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setCurrentTimeSec(Math.round(pos * totalDurationSec));
                }}
              >
                <div 
                  className="bg-[#D13A28] h-full rounded-full transition-all"
                  style={{ width: `${(currentTimeSec / totalDurationSec) * 100}%` }}
                />
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-[#D13A28] transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] font-mono text-neutral-300">
                    {formatTime(currentTimeSec)} / {formatTime(totalDurationSec)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Speed Selector */}
                  <button
                    onClick={() => {
                      const nextSpeed = playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1;
                      setPlaybackSpeed(nextSpeed);
                    }}
                    className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded text-[10px] font-bold transition-colors"
                  >
                    {playbackSpeed}x Speed
                  </button>

                  <Volume2 className="w-4 h-4 text-neutral-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Action Bar: Previous / Complete / Next */}
          <div className="bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => prevLesson && setActiveLesson(prevLesson)}
              disabled={!prevLesson}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Lesson</span>
            </button>

            <button
              onClick={handleToggleComplete}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                isCurrentCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-[#D13A28] text-white hover:bg-[#b82f20]'
              }`}
            >
              {isCurrentCompleted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Marked Complete</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4" />
                  <span>Mark as Completed</span>
                </>
              )}
            </button>

            <button
              onClick={() => nextLesson && setActiveLesson(nextLesson)}
              disabled={!nextLesson}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Lesson Notes & Concept Breakdown */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28]">
                Detailed Study Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                {activeLesson.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                {activeLesson.description}
              </p>
            </div>

            {/* Actionable Key Takeaways */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D13A28]" />
                <span>Actionable Takeaways & Implementation Rules</span>
              </h3>
              <div className="space-y-2">
                {activeLesson.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Materials & Worksheets */}
            {activeLesson.resources && activeLesson.resources.length > 0 && (
              <div className="space-y-3 border-t border-neutral-100 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#D13A28]" />
                  <span>Downloadable Action Worksheets</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeLesson.resources.map((res) => (
                    <div
                      key={res.id}
                      className="p-3.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-[#D13A28]" />
                        <div>
                          <div className="text-xs font-bold text-neutral-800">{res.title}</div>
                          <div className="text-[10px] text-neutral-400">{res.size || 'PDF Guide'}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#D13A28] hover:underline cursor-pointer">
                        Download
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar: Module & Lesson Index (w-80 / lg:w-96) */}
        <div className="w-full lg:w-80 xl:w-96 space-y-4">
          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Course Syllabus Index
              </h3>
              <span className="text-[11px] font-semibold text-neutral-500">
                {completedIds.length} / {allLessons.length} Done
              </span>
            </div>

            {/* Modules and Lessons list */}
            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1">
              {program.modules.map((module) => (
                <div key={module.id} className="space-y-2">
                  <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider px-1">
                    {module.title}
                  </div>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => {
                      const isActive = lesson.id === activeLesson.id;
                      const isComplete = completedIds.includes(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          type="button"
                          onClick={() => setActiveLesson(lesson)}
                          className={`w-full p-3 rounded-xl text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#111111] text-white shadow-sm'
                              : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isComplete ? (
                              <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-[#D13A28]' : 'text-emerald-600'}`} />
                            ) : (
                              <Circle className={`w-4 h-4 ${isActive ? 'text-neutral-400' : 'text-neutral-300'}`} />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-neutral-900'}`}>
                              {lesson.title}
                            </div>
                            <div className={`text-[10px] mt-0.5 flex items-center justify-between ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                              <span>Lesson {lesson.order}</span>
                              <span>{lesson.durationMinutes} min</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
