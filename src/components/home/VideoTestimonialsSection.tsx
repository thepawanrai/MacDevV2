import React, { useState } from 'react';
import { Play, Star, ExternalLink, Sparkles, Award, ArrowRight, RotateCcw } from 'lucide-react';
import { initialVideoTestimonials } from '../../data/seedData';
import { LeadSegment } from '../../types';

interface VideoTestimonialsSectionProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const VideoTestimonialsSection: React.FC<VideoTestimonialsSectionProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  // Track which video is currently playing to provide instant, crystal-clear thumbnail previews
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [thumbErrors, setThumbErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setThumbErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#D13A28] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Video Testimonials</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              What Learners Say About <span className="text-[#D13A28]">Deepak Verma Sir</span>
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Real reviews from corporate professionals, sales executives, and program graduates who experienced genuine mindset shifts, disciplined goal execution, and measurable career breakthroughs under Deepak Verma’s mentorship.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenInquiry('Keynote', 'Invite Deepak Verma Sir')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Invite Deepak Verma Sir</span>
              <ArrowRight className="w-4 h-4 text-[#D13A28]" />
            </button>
          </div>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialVideoTestimonials.map((item, idx) => {
            const isPlaying = activeVideoId === item.youtubeId;
            const hasError = thumbErrors[item.youtubeId];
            // High-resolution YouTube thumbnail with automatic fallback
            const thumbUrl = hasError 
              ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
              : `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Video Container: High-Res Thumbnail with Instant Play */}
                <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                        title={item.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setActiveVideoId(null)}
                        className="absolute top-2 right-2 z-10 px-2 py-1 bg-black/80 hover:bg-black text-white text-[10px] font-bold rounded-lg flex items-center gap-1 backdrop-blur-xs transition-colors cursor-pointer"
                        title="Reset thumbnail preview"
                      >
                        <RotateCcw className="w-3 h-3 text-[#D13A28]" />
                        <span>Reset</span>
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setActiveVideoId(item.youtubeId)}
                      className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
                      title={`Click to play: ${item.title}`}
                    >
                      {/* High-Definition Thumbnail */}
                      <img
                        src={thumbUrl}
                        alt={item.title}
                        loading="lazy"
                        onError={() => handleImageError(item.youtubeId)}
                        className="w-full h-full object-cover transform duration-500 group-hover/thumb:scale-105"
                      />

                      {/* Gentle contrast gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover/thumb:from-black/70 transition-all duration-300" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-[#D13A28] text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                          Review #{idx + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-semibold backdrop-blur-xs">
                          HD Video
                        </span>
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                          {/* Pulsing ring on hover */}
                          <div className="absolute w-16 h-16 rounded-2xl bg-red-600/30 group-hover/thumb:scale-125 transition-transform duration-500 animate-pulse" />
                          {/* YouTube Red Play Button */}
                          <div className="w-16 h-11 bg-[#D13A28] group-hover/thumb:bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-red-950/60 transition-all duration-300 transform group-hover/thumb:scale-110">
                            <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Prompt Bar */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold pointer-events-none">
                        <span className="truncate max-w-[80%] text-neutral-200">
                          {item.speakerName}
                        </span>
                        <span className="text-[#D13A28] bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-xs">
                          Click to Play
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Review Content & Feedback */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Rating Stars & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                        Video Testimonial {idx + 1}
                      </span>
                    </div>

                    {/* Title & Context */}
                    <h3 className="text-base font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif] leading-snug">
                      {item.title}
                    </h3>

                    {/* Key Takeaway / Quote */}
                    <div className="relative pl-3.5 border-l-2 border-[#D13A28]">
                      <p className="text-xs text-neutral-600 leading-relaxed italic">
                        "{item.keyHighlight}"
                      </p>
                    </div>
                  </div>

                  {/* Speaker Identity & YouTube Link */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">
                        {item.speakerName}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {item.speakerRole}
                      </div>
                    </div>

                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D13A28] hover:text-red-700 transition-colors"
                      title="Watch directly on YouTube"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
