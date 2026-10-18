import React from 'react';
import { Shield, FileText, RefreshCw, ArrowLeft } from 'lucide-react';

interface PolicyPageProps {
  policyType?: 'privacy' | 'terms' | 'refund';
  onBack: () => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({
  policyType = 'privacy',
  onBack,
}) => {
  const [currentTab, setCurrentTab] = React.useState<'privacy' | 'terms' | 'refund'>(policyType);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Previous Page</span>
      </button>

      {/* Policy Selector Tabs */}
      <div className="flex border-b border-neutral-200 gap-6 text-sm font-semibold">
        <button
          onClick={() => setCurrentTab('privacy')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            currentTab === 'privacy'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-800'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setCurrentTab('terms')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            currentTab === 'terms'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-800'
          }`}
        >
          Terms of Service
        </button>
        <button
          onClick={() => setCurrentTab('refund')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            currentTab === 'refund'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-800'
          }`}
        >
          Refund & Cancellation Policy
        </button>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200 shadow-xs space-y-6 text-neutral-700 text-xs sm:text-sm leading-relaxed">
        {currentTab === 'privacy' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-500">
              Effective Date: 2026 • Mastermind Alliance Coaching (MAC)
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">1. Minimal Information Collection</h2>
            <p>
              Mastermind Alliance Coaching collects only the personal information necessary to deliver training services, evaluate corporate proposals, and grant enrolled learners access to our course portal. This includes full name, email address, phone number, and organizational designation when provided voluntarily.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">2. How Information Is Used</h2>
            <p>
              Your contact data is used exclusively for program coordination, scheduling live cohort masterclasses, sending authorized course access links, and replying to inquiries submitted through our website. We do not sell, rent, or trade your personal data to third parties.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">3. Storage & Safeguards</h2>
            <p>
              Learner enrollment records and inquiry communications are stored securely. Payment credentials, where applicable, are handled directly through certified payment gateways; Mastermind Alliance Coaching never stores raw payment card numbers or bank credentials on our servers.
            </p>
          </div>
        )}

        {currentTab === 'terms' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
              Terms of Service
            </h1>
            <p className="text-xs text-neutral-500">
              Mastermind Alliance Coaching • Founder: Deepak Verma
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">1. Educational Nature of Services</h2>
            <p>
              Programs, workshops, and coaching provided by Mastermind Alliance Coaching (MAC) are educational in nature, designed to impart practical skills in communication, sales consultation, habit architecture, and leadership. Individual results depend upon participant application, consistent practice, and market variables. No guarantees of specific financial earnings, sales quotas, or employment promotions are made.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">2. Intellectual Property & Course Materials</h2>
            <p>
              All proprietary frameworks, worksheets, video modules, and lecture presentations delivered by Deepak Verma and Mastermind Alliance Coaching are protected by intellectual property laws. Enrolled learners receive a personal, non-transferable license to review materials for individual learning. Unauthorized recording, commercial redistribution, or public publishing of training content is strictly prohibited.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">3. Code of Conduct</h2>
            <p>
              Participants in live interactive cohorts and corporate workshops must maintain professional respect toward fellow learners and instructors. Disruptive or defamatory behavior will result in revocation of access without refund.
            </p>
          </div>
        )}

        {currentTab === 'refund' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-neutral-500">
              Mastermind Alliance Coaching • Lucknow, Uttar Pradesh
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">1. Digital On-Demand Courses</h2>
            <p>
              Because digital self-paced programs provide immediate access to proprietary curriculum recordings and downloadable worksheets, requests for cancellation must be submitted within 48 hours of purchase, provided less than 25% of the course modules have been accessed.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-2">2. Live Cohorts & Offline Bootcamps (e.g. Sales Master, Life Master)</h2>
            <p>
              For scheduled offline intensives or live cohorts where seat capacity is strictly limited:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cancellations requested 14 days prior to cohort commencement are eligible for a 100% refund (less processing fees) or seat transfer to the subsequent batch.</li>
              <li>Cancellations requested between 7 to 13 days prior are eligible for a 50% refund or full transfer to the next edition.</li>
              <li>Cancellations requested under 7 days before event start are non-refundable due to venue commitments, but another participant may be designated with prior approval.</li>
            </ul>

            <h2 className="text-base font-bold text-neutral-900 pt-2">3. Corporate & Institutional Training</h2>
            <p>
              Custom corporate workshops and B2G institutional programs are governed by the specific terms defined in their mutually executed service agreement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
