import React, { useState } from 'react';
import { MACLogo } from '../common/MACLogo';
import { User, Shield, BookOpen, Menu, X, ChevronDown, Sparkles, PhoneCall, LogIn, ArrowRight } from 'lucide-react';
import { User as UserType, LeadSegment } from '../../types';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string, param?: string) => void;
  currentUser: UserType | null;
  onOpenAuth: () => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  currentUser,
  onOpenAuth,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);

  const handleNav = (route: string, param?: string) => {
    onNavigate(route, param);
    setMobileMenuOpen(false);
    setCorporateDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#111111] text-white py-1.5 px-4 text-xs font-medium border-b border-neutral-800 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="text-neutral-300 inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>
              Upcoming: <strong className="text-white font-semibold">Sales Master</strong> Offline Intensive Cohort (October 2026, Lucknow)
            </span>
            <button
              onClick={() => handleNav('program-detail', 'sales-master')}
              className="font-bold text-[#D13A28] hover:text-red-400 underline underline-offset-2 cursor-pointer transition-colors inline-flex items-center gap-1 ml-1"
            >
              <span>Registration Open</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-15 md:h-16 py-1">
          {/* Logo */}
          <div
            onClick={() => handleNav('home')}
            className="cursor-pointer transition-transform hover:opacity-95 flex items-center"
          >
            <MACLogo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-neutral-700">
            {/* 1. Home */}
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'home' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Home
            </button>

            {/* 2. Program (Dropdown) */}
            <div className="relative group">
              <button
                onClick={() => handleNav('corporate')}
                onMouseEnter={() => setCorporateDropdownOpen(true)}
                className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${
                  ['corporate', 'program', 'program-detail', 'emotional-intelligence', 'institutional', 'keynotes'].includes(currentRoute)
                    ? 'text-[#D13A28]'
                    : 'hover:text-[#D13A28]'
                }`}
              >
                <span>Program</span>
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 py-2.5 hidden group-hover:block animate-fade-in z-50">
                <div className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                  Training & Advisory
                </div>
                <button
                  onClick={() => handleNav('corporate')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>Corporate Training Programs</span>
                  <span className="text-[10px] text-[#D13A28] font-bold bg-red-50 px-2 py-0.5 rounded">B2B</span>
                </button>
                <button
                  onClick={() => handleNav('institutional')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>Institutional Training</span>
                  <span className="text-[10px] text-neutral-600 font-bold bg-neutral-100 px-2 py-0.5 rounded">B2G</span>
                </button>
                <button
                  onClick={() => handleNav('emotional-intelligence')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>Emotional Intelligence</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Core</span>
                </button>
                <button
                  onClick={() => handleNav('keynotes')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>Keynotes & Speaking</span>
                  <span className="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">Keynote</span>
                </button>
                <div className="border-t border-neutral-100 my-1.5" />
                <div className="px-4 py-1 text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                  Specialized Industry Tracks
                </div>
                <button
                  onClick={() => handleNav('program-detail', 'real-estate-sales-mastery')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Real Estate Sales Mastery
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'insurance-sales-training')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Insurance Sales Training
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'network-marketing-training')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Network Marketing Training
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'core-leadership-program')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Core Leadership Program
                </button>
              </div>
            </div>

            {/* 3. Yuva */}
            <button
              onClick={() => handleNav('youth')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'youth' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Yuva
            </button>

            {/* 4. Courses */}
            <button
              onClick={() => handleNav('catalogue')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'catalogue' || currentRoute === 'courses' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Courses
            </button>

            {/* 5. Events */}
            <button
              onClick={() => handleNav('events')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'events' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Events
            </button>

            {/* 6. About */}
            <button
              onClick={() => handleNav('about')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'about' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              About
            </button>

            {/* 7. Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'contact' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Button (Clean Single CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            {currentUser ? (
              <button
                onClick={() => handleNav('learner')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D13A28] text-white rounded-xl text-xs font-bold hover:bg-[#b82f20] transition-all cursor-pointer shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>My Learning</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5 text-[#D13A28]" />
                <span>Sign In / Sign Up</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {currentUser ? (
              <button
                onClick={() => handleNav('learner')}
                className="px-3 py-1.5 bg-[#D13A28] text-white text-[11px] font-bold rounded-lg flex items-center gap-1.5"
              >
                <BookOpen className="w-3 h-3" />
                <span>My Learning</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3 py-1.5 bg-[#111111] text-white text-[11px] font-bold rounded-lg"
              >
                Sign In / Sign Up
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-5 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-neutral-800">
            {/* 1. Home */}
            <button
              onClick={() => handleNav('home')}
              className={`text-left py-2 border-b border-neutral-100 ${
                currentRoute === 'home' ? 'text-[#D13A28] font-bold' : 'hover:text-[#D13A28]'
              }`}
            >
              Home
            </button>

            {/* 2. Program */}
            <button
              onClick={() => handleNav('corporate')}
              className={`text-left py-2 border-b border-neutral-100 flex items-center justify-between ${
                ['corporate', 'program', 'institutional', 'emotional-intelligence', 'keynotes'].includes(currentRoute)
                  ? 'text-[#D13A28] font-bold'
                  : 'hover:text-[#D13A28]'
              }`}
            >
              <span>Program</span>
              <span className="text-[10px] text-neutral-500 font-normal">B2B / B2G / EI</span>
            </button>

            {/* 3. Yuva */}
            <button
              onClick={() => handleNav('youth')}
              className={`text-left py-2 border-b border-neutral-100 flex items-center justify-between ${
                currentRoute === 'youth' ? 'text-[#D13A28] font-bold' : 'hover:text-[#D13A28]'
              }`}
            >
              <span>Yuva</span>
              <span className="text-[10px] font-bold bg-red-100 text-[#D13A28] px-2 py-0.5 rounded">Power</span>
            </button>

            {/* 4. Courses */}
            <button
              onClick={() => handleNav('catalogue')}
              className={`text-left py-2 border-b border-neutral-100 ${
                currentRoute === 'catalogue' || currentRoute === 'courses' ? 'text-[#D13A28] font-bold' : 'hover:text-[#D13A28]'
              }`}
            >
              Courses
            </button>

            {/* 5. Events */}
            <button
              onClick={() => handleNav('events')}
              className={`text-left py-2 border-b border-neutral-100 flex items-center justify-between ${
                currentRoute === 'events' ? 'text-[#D13A28] font-bold' : 'hover:text-[#D13A28]'
              }`}
            >
              <span>Events</span>
              <span className="text-[10px] font-bold text-[#D13A28]">Upcoming</span>
            </button>

            {/* 6. About */}
            <button
              onClick={() => handleNav('about')}
              className={`text-left py-2 border-b border-neutral-100 ${
                currentRoute === 'about' ? 'text-[#D13A28] font-bold' : 'hover:text-[#D13A28]'
              }`}
            >
              About
            </button>

            {/* 7. Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`text-left py-2 border-b border-neutral-100 ${
                currentRoute === 'contact' ? 'text-[#D13A28] font-bold' : 'hover:text-[#D13A28]'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-3">
            {currentUser ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNav('learner');
                }}
                className="w-full py-2.5 bg-[#D13A28] text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>My Learning</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 bg-[#111111] text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
