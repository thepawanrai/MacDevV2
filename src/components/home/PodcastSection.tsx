import React, { useState } from 'react';
import { 
  Play, Radio, ExternalLink, Sparkles, CheckCircle2, 
  RotateCcw, ArrowRight, ShieldCheck, Headphones, Mic, Volume2 
} from 'lucide-react';
import { LeadSegment } from '../../types';

interface PodcastSectionProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const PodcastSection: React.FC<PodcastSectionProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const podcastVideoId = 'DS0oaJyXaww';
  const youtubeUrl = `https://www.youtube.com/watch?v=${podcastVideoId}`;
  const thumbUrl = thumbError
    ? `https://img.youtube.com/vi/${podcastVideoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${podcastVideoId}/maxresdefault.jpg`;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-800 shadow-2xl relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D13A28]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-neutral-800/80 pb-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold tracking-wider uppercase">
                <Radio className="w-3.5 h-3.5 text-[#D13A28] animate-pulse" />
                <span>Featured Podcast Spotlight • Deepak Verma in Conversation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Mindset, Human Psychology & <span className="text-[#D13A28]">Unseen Realities</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Step beyond conventional coaching theory. In this candid, in-depth podcast conversation, Deepak Verma discusses the psychological architecture of fear, subconscious resistance, emotional composure under pressure, and what it truly takes to confront uncertainty.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/10 shadow-sm"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-4 h-4 text-[#D13A28]" />
              </a>
              <button
                onClick={() => onOpenInquiry('Keynote', 'Podcast & Speaking Invitation for Deepak Verma')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D13A28]/25 cursor-pointer"
              >
                <span>Invite as Guest</span>
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Showcase Grid: Video Player + Editorial Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Cinematic Video Player */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-700/80 shadow-2xl group">
                {isPlaying ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${podcastVideoId}?autoplay=1&rel=0`}
                      title="Deepak Verma Podcast Episode"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-3 right-3 z-20 px-3 py-1.5 bg-black/85 hover:bg-black text-white text-xs font-bold rounded-lg flex items-center gap-1.5 backdrop-blur-md transition-colors cursor-pointer border border-white/20"
                      title="Reset video preview"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#D13A28]" />
                      <span>Back to Preview</span>
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full cursor-pointer select-none group/player"
                    title="Click to play Deepak Verma Podcast episode"
                  >
                    {/* Razor-sharp High-Resolution Thumbnail */}
                    <img
                      src={thumbUrl}
                      alt="Deepak Verma Podcast Interview"
                      loading="lazy"
                      onError={() => setThumbError(true)}
                      className="w-full h-full object-cover transform duration-700 group-hover/player:scale-105"
                    />

                    {/* Gradient Overlay for contrast and readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 group-hover/player:from-black/80 transition-all duration-300" />

                    {/* Top Overlay Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-md bg-[#D13A28] text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                          <Headphones className="w-3.5 h-3.5" />
                          <span>Special Episode</span>
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-black/70 text-neutral-300 text-[10px] font-semibold backdrop-blur-xs border border-white/10">
                          24 Minutes
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-black/70 text-emerald-400 text-[10px] font-bold backdrop-blur-xs border border-emerald-500/30">
                        1080p Full HD
                      </span>
                    </div>

                    {/* Prominent Red Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 rounded-2xl bg-red-600/30 group-hover/player:scale-125 transition-transform duration-500 animate-pulse" />
                        <div className="w-20 h-14 bg-[#D13A28] group-hover/player:bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-red-950/80 transition-all duration-300 transform group-hover/player:scale-110">
                          <Play className="w-8 h-8 fill-white text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                      <div>
                        <div className="text-xs font-semibold text-neutral-300">
                          Guest Speaker & Mentor
                        </div>
                        <div className="text-sm font-bold text-white tracking-wide">
                          Deepak Verma • Founder, Mastermind Alliance Coaching
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white text-neutral-900 rounded-lg text-xs font-bold shadow-md">
                        Play Episode ▶
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right 5 Columns: Thematic Insights & Quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#D13A28] tracking-widest uppercase flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4" />
                  <span>Key Conversation Highlights</span>
                </span>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Deconstructing Instinctual Fear</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                        Why the subconscious brain defaults to panic and how high performers cultivate emotional poise during unexpected crises.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Subconscious Conditioning & Self-Sabotage</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                        Unraveling the hidden mental loops that cause ambitious individuals to freeze when closing high-stakes opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Grounded Spiritual & Psychological Anchors</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">
                        Building inner stability and resilience so external chaos never dictates your personal peace or leadership decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-neutral-900 border-l-4 border-[#D13A28] border-neutral-800 space-y-2">
                <p className="text-xs sm:text-sm text-neutral-200 italic leading-relaxed">
                  "When you stop running from what makes you uncomfortable and learn to observe your mind with radical honesty, fear transforms into your sharpest guidance system."
                </p>
                <div className="text-[11px] font-bold text-neutral-400 text-right">
                  — Deepak Verma
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('catalogue')}
                  className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Mentorship Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D13A28]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
