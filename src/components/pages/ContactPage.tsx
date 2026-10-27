import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Building2, User, MessageSquare } from 'lucide-react';
import { SiteSettings, LeadSegment } from '../../types';
import { AppStore } from '../../services/store';
import { WEB3FORMS_ACCESS_KEY, submitToWeb3Forms } from '../../services/web3forms';

interface ContactPageProps {
  settings: SiteSettings;
}

export const ContactPage: React.FC<ContactPageProps> = ({ settings }) => {
  const [segment, setSegment] = useState<LeadSegment>('B2B');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [participantCount, setParticipantCount] = useState<number | ''>('');
  const [programInterest, setProgramInterest] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please provide a contact phone number.');
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
        participantCount: participantCount ? Number(participantCount) : undefined,
        programInterest: programInterest.trim() || 'General Inquiry',
        message: message.trim() || 'Inquiry submitted from Contact Page.',
      };

      // Record to internal store & backend
      AppStore.addLead(leadData);

      // Submit to Web3Forms
      await submitToWeb3Forms({
        ...leadData,
        subject: `Contact Desk Lead: ${leadData.name} (${leadData.segment})`,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setOrganization('');
      setMessage('');
    } catch {
      setIsSubmitting(false);
      setErrorMsg('Could not record your inquiry. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <span>Official Coordination Desk</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
          Contact Mastermind Alliance Coaching
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Submit your training requirements, request corporate proposals, or inquire about upcoming cohorts in Lucknow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Office Information & Safeguard Notice (1 Col) */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-neutral-200/90 shadow-xs space-y-6">
            <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider text-xs">
              Headquarters & Coordinates
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D13A28] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900">Training Base:</div>
                  <div className="mt-0.5">{settings.contactAddress}</div>
                  <div>{settings.contactCityState}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D13A28] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900">Direct Phone:</div>
                  <div className="mt-0.5">{settings.contactPhone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D13A28] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900">Email:</div>
                  <div className="mt-0.5">{settings.contactEmail}</div>
                </div>
              </div>
            </div>

            {/* Owner Confirmation Notice */}
            {!settings.isConfirmedByOwner && (
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-500 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-neutral-800">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Launch Verification Notice</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  These contact coordinates are currently undergoing confirmation before commercial deployment. Inquiries submitted through this form are logged in our internal operations database.
                </p>
              </div>
            )}
          </div>

          <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200/80 space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-neutral-800">
              Founder Attribution
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              <strong>Deepak Verma</strong> is the sole founder of Mastermind Alliance Coaching. All corporate proposals and training curriculum are supervised directly by him.
            </p>
          </div>
        </div>

        {/* Right: Comprehensive Inquiry Form (2 Cols) */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200/90 shadow-xs space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <h2 className="text-xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
              Send an Official Message or Inquiry
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Select your inquiry category so we route your request to the appropriate coordinator.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Message Successfully Submitted</h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting Mastermind Alliance Coaching. Your request has been stored in our system and our coordination desk in Lucknow will follow up promptly.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 bg-[#111111] text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Submit Another Inquiry
              </button>
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
                value={`Contact Desk Inquiry: ${name || 'Lead'} - ${programInterest || segment}`}
              />
              <input type="hidden" name="segment" value={segment} />

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Segment Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Your Requirement Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['B2C', 'B2B', 'B2G', 'Keynote'] as LeadSegment[]).map((seg) => (
                    <button
                      key={seg}
                      type="button"
                      onClick={() => setSegment(seg)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        segment === seg
                          ? 'border-[#D13A28] bg-[#D13A28]/5 text-[#D13A28] font-semibold'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      {seg === 'B2C' && 'Individual (B2C)'}
                      {seg === 'B2B' && 'Corporate (B2B)'}
                      {seg === 'B2G' && 'Institutional (B2G)'}
                      {seg === 'Keynote' && 'Keynote Speaking'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Deepak or Rahul"
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone & Program Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Program / Topic of Interest
                  </label>
                  <input
                    type="text"
                    name="programInterest"
                    value={programInterest}
                    onChange={(e) => setProgramInterest(e.target.value)}
                    placeholder="e.g. Life Master, Sales Master, Real Estate"
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white"
                  />
                </div>
              </div>

              {/* Organization (for B2B / B2G) */}
              {(segment === 'B2B' || segment === 'B2G' || segment === 'Keynote') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Organization / Institution Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Avadh Real Estate or Bank Branch"
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Estimated Participants
                    </label>
                    <input
                      type="number"
                      name="participantCount"
                      min="1"
                      value={participantCount}
                      onChange={(e) => setParticipantCount(e.target.value ? Number(e.target.value) : '')}
                      placeholder="e.g. 20"
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Message / Context
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific dates, team objectives, or questions..."
                  className="w-full p-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#D13A28] focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
