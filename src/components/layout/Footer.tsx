import React from 'react';
import { MapPin, Mail, Phone, ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';
import { SiteSettings, LeadSegment } from '../../types';

interface FooterProps {
  settings: SiteSettings;
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment) => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  onNavigate,
  onOpenInquiry,
}) => {
  const contactPhone = '+91 831 853 9056';

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Column (2 cols wide on desktop) - Authoritative Footer Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <img
                src="/mac-footer-logo.png"
                alt="Mastermind Alliance Coaching"
                className="h-12 sm:h-14 w-auto object-contain cursor-pointer"
                onClick={() => onNavigate('home')}
                onError={(e) => {
                  e.currentTarget.src = 'https://plain-apac-prod-public.komododecks.com/202610/18/OuHxXVcrJMNQOPC4byBR/image.png';
                }}
              />
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm pt-1">
              Mastermind Alliance Coaching helps individuals build practical life and professional skills and helps organizations develop stronger salespeople, leaders, and teams through focused training, coaching, and learning experiences.
            </p>
          </div>

          {/* Business Routes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Training Routes
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('catalogue')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Individual Learning (B2C)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('corporate')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Training (B2B)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('institutional')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Institutional Training (B2G)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('emotional-intelligence')}
                  className="hover:text-white transition-colors text-neutral-200 font-semibold cursor-pointer"
                >
                  Emotional Intelligence (Core)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('keynotes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Keynotes & Public Speaking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('youth')}
                  className="hover:text-white transition-colors text-neutral-200 font-semibold cursor-pointer flex items-center gap-1.5"
                >
                  <span>Youth (YUVA Power)</span>
                  <span className="text-[9px] bg-red-950 text-red-400 border border-red-800 px-1.5 py-0.5 rounded font-bold">YUVA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-white transition-colors text-neutral-200 font-semibold cursor-pointer flex items-center gap-1.5"
                >
                  <span>MAC Events & Retreats</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D13A28] animate-pulse" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'life-master')}
                  className="hover:text-white transition-colors text-xs text-[#D13A28] cursor-pointer"
                >
                  ★ Life Master (Flagship Q4 2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'sales-master')}
                  className="hover:text-white transition-colors text-xs text-[#D13A28] cursor-pointer"
                >
                  ★ Sales Master (Oct 2026 Cohort)
                </button>
              </li>
            </ul>
          </div>

          {/* Industry Blueprints */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Industry Focus
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'real-estate-sales-mastery')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Real Estate Sales Mastery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'insurance-sales-training')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Insurance Sales Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'network-marketing-training')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Network Marketing Professional
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'core-leadership-program')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Core Leadership Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('program-detail', 'leadership-development-program')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Leadership Development Program
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Verification Status */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Contact & Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D13A28] shrink-0 mt-0.5" />
                <span>{settings.contactAddress}, {settings.contactCityState}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D13A28] shrink-0" />
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D13A28] shrink-0" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-white transition-colors">
                  {settings.contactEmail}
                </a>
              </div>
            </div>

            {/* Owner Review Compliance Note */}
            {!settings.isConfirmedByOwner && (
              <div className="p-2.5 bg-neutral-900 border border-neutral-700/60 rounded-xl text-[11px] text-neutral-400 flex items-start gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Notice: Contact data stored from legacy records. Pending owner confirmation before commercial launch.
                </span>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Mastermind Alliance Coaching (MAC). All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span>
              <a
                href="https://www.pracharprasar.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                title="Developed by Prachar Prasar (www.pracharprasar.co)"
              >
                <span>Developed by</span>
                <span className="text-white font-semibold underline decoration-[#D13A28] underline-offset-4 hover:text-[#D13A28]">
                  Prachar Prasar
                </span>
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('policy', 'privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('policy', 'terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('policy', 'refund')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Refund & Cancellation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
