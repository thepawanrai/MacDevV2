import React from 'react';
import { Landmark, CheckCircle2, ShieldCheck, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { Program, LeadSegment } from '../../types';

interface InstitutionalTrainingPageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const InstitutionalTrainingPage: React.FC<InstitutionalTrainingPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-900 to-[#111111] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <Landmark className="w-4 h-4" />
          <span>B2G Institutional Training Pathway</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] max-w-3xl leading-tight">
          Public Institutions, Banking & Institutional Organizations
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
          Mastermind Alliance Coaching provides formal soft-skills development, citizen-facing communication, leadership, and professional effectiveness programs designed for public institutions, banks, and regulatory bodies.
        </p>

        {/* Integrity Rule Compliance Note */}
        <div className="p-3 bg-neutral-900/90 border border-neutral-700 rounded-xl text-xs text-neutral-400 max-w-xl">
          <strong className="text-white">Professional Transparency:</strong> MAC delivers private corporate and institutional executive workshops; we do not imply government empanelment or official contracts without formal written agreements.
        </div>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => onOpenInquiry('B2G', 'Institutional Training Proposal')}
            className="px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer"
          >
            Request Institutional Training Proposal
          </button>
          <button
            onClick={() => onNavigate('keynotes')}
            className="px-6 py-3.5 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Invite as Keynote Speaker
          </button>
        </div>
      </div>

      {/* Focus Capabilities */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Institutional Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Core Institutional Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-neutral-900">Citizen-Facing Communication</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              De-escalation of public frustration, patient listening, empathetic language, and maintaining institutional dignity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-neutral-900">Inter-Departmental Collaboration</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Reducing bureaucratic friction, improving cross-departmental coordination, and establishing ownership over handoffs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-neutral-900">Time & Workplace Effectiveness</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Workload prioritization, daily operational discipline, avoiding burnout, and structured file review meetings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D13A28] flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="text-base font-bold text-neutral-900">Ethical Leadership</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Fostering psychological safety, mentor-minded supervision, and leading institutional teams with transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Program Blueprint Link */}
      <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Curriculum Blueprint
          </span>
          <h3 className="text-xl font-bold text-neutral-900">
            Institutional Soft-Skills & Public Service Training
          </h3>
          <p className="text-xs text-neutral-600 max-w-xl">
            Detailed syllabus covering citizen empathy, workplace ethics, and professional conduct.
          </p>
        </div>
        <button
          onClick={() => onNavigate('program-detail', 'institutional-training')}
          className="px-6 py-3 bg-[#111111] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors shrink-0"
        >
          View Full Curriculum
        </button>
      </div>
    </div>
  );
};
