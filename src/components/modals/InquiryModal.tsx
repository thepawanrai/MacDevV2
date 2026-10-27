import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Building2, User, Mail, Phone, Users, Calendar, AlertCircle } from 'lucide-react';
import { AppStore } from '../../services/store';
import { LeadSegment } from '../../types';
import { WEB3FORMS_ACCESS_KEY, submitToWeb3Forms } from '../../services/web3forms';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSegment?: LeadSegment;
  defaultProgramTitle?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultSegment = 'B2C',
  defaultProgramTitle = '',
}) => {
  const [segment, setSegment] = useState<LeadSegment>(defaultSegment);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [designation, setDesignation] = useState('');
  const [participantCount, setParticipantCount] = useState<number | ''>('');
  const [programInterest, setProgramInterest] = useState(defaultProgramTitle);
  const [preferredFormat, setPreferredFormat] = useState('In-Person / Offline in Lucknow');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSegment(defaultSegment);
      setProgramInterest(defaultProgramTitle);
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen, defaultSegment, defaultProgramTitle]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid business or personal email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number for verification.');
      return;
    }

    if ((segment === 'B2B' || segment === 'B2G') && !organization.trim()) {
      setErrorMsg('Please provide your company or institution name.');
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        segment,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        organization: organization.trim() || undefined,
        designation: designation.trim() || undefined,
        participantCount: participantCount ? Number(participantCount) : undefined,
        programInterest: programInterest.trim() || 'General Consultation',
        preferredFormat,
        message: message.trim() || 'Inquiry submitted via website portal.',
      };

      // Add to internal store & backend
      AppStore.addLead(leadData);

      // Submit to Web3Forms
      await submitToWeb3Forms({
        ...leadData,
        subject: `New Lead: ${leadData.name} - ${leadData.programInterest} (${leadData.segment})`,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrorMsg('Failed to record inquiry. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-bold tracking-tight text-white pr-8">
            Connect with Mastermind Alliance Coaching
          </h3>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900">
                Inquiry Successfully Received
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-neutral-900">{name}</span>. Your request for{' '}
                <span className="font-semibold text-[#D13A28]">{programInterest || 'training consultation'}</span> has been recorded in our official coordination system.
              </p>
              <div className="bg-neutral-50 p-4 rounded-xl text-xs text-neutral-500 border border-neutral-200/60 max-w-md mx-auto">
                Our coordination team in Lucknow will review your requirements and reach out via phone ({phone}) or email ({email}) within 1 business day.
              </div>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#111111] text-white font-semibold text-sm rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Web3Forms required configuration */}
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="from_name" value="Mastermind Alliance Coaching" />
              <input
                type="hidden"
                name="subject"
                value={`New Inquiry: ${name || 'Lead'} - ${programInterest || segment}`}
              />
              <input type="hidden" name="segment" value={segment} />

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Segment Selector Tabs */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Select Your Route / Requirement
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {(['B2C', 'B2B', 'B2G', 'Keynote', 'Youth'] as LeadSegment[]).map((seg) => (
                    <button
                      key={seg}
                      type="button"
                      onClick={() => setSegment(seg)}
                      className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-all text-center ${
                        segment === seg
                          ? 'border-[#D13A28] bg-[#D13A28]/5 text-[#D13A28] font-semibold'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      {seg === 'B2C' && 'Individual'}
                      {seg === 'B2B' && 'Corporate'}
                      {seg === 'B2G' && 'Institutional'}
                      {seg === 'Keynote' && 'Keynote'}
                      {seg === 'Youth' && 'Youth (Yuva)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Program / Topic of Interest */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Program or Topic of Interest
                </label>
                <input
                  type="text"
                  name="programInterest"
                  value={programInterest}
                  onChange={(e) => setProgramInterest(e.target.value)}
                  placeholder="e.g. Life Master, Sales Master, Real Estate Sales, Core Leadership"
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Preferred Format
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <select
                      name="preferredFormat"
                      value={preferredFormat}
                      onChange={(e) => setPreferredFormat(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors text-neutral-800"
                    >
                      <option value="In-Person / Offline in Lucknow">In-Person (Lucknow)</option>
                      <option value="On-Site Corporate Workshop (Client Office)">On-Site Corporate Workshop</option>
                      <option value="Live Interactive Online Cohort">Live Online Cohort</option>
                      <option value="Keynote Address (Event / Conference)">Keynote Address</option>
                      <option value="Self-Paced Digital Course">Self-Paced Digital Course</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Organization & Participant Count for B2B / B2G */}
              {(segment === 'B2B' || segment === 'B2G' || segment === 'Keynote') && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      {segment === 'B2G' ? 'Institution / Department Name *' : 'Organization / Company *'}
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Avadh Properties or State Bank"
                        className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Expected Participants
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                      <input
                        type="number"
                        name="participantCount"
                        min="1"
                        value={participantCount}
                        onChange={(e) => setParticipantCount(e.target.value ? Number(e.target.value) : '')}
                        placeholder="e.g. 25"
                        className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Specific Goals or Notes (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your team's current challenges, preferred dates, or learning targets..."
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500">
                  🔒 Data kept strictly confidential. No spam.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#D13A28] text-white font-semibold text-sm rounded-xl hover:bg-[#b82f20] transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
