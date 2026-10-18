import React, { useState } from 'react';
import { Program, LeadInquiry, LiveSession, SiteSettings, User } from '../../types';
import { AppStore } from '../../services/store';
import { 
  ShieldCheck, BookOpen, Users, PhoneCall, Calendar, 
  Settings, Plus, Edit2, Trash2, CheckCircle2, AlertCircle, 
  Search, Filter, ExternalLink, Save, RefreshCw, Eye 
} from 'lucide-react';

interface AdminDashboardProps {
  programs: Program[];
  settings: SiteSettings;
  onRefreshPrograms: () => void;
  onRefreshSettings: () => void;
  onPreviewProgram: (slug: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  programs,
  settings,
  onRefreshPrograms,
  onRefreshSettings,
  onPreviewProgram,
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'programs' | 'sessions' | 'settings'>('leads');
  
  // Leads management
  const [leads, setLeads] = useState<LeadInquiry[]>(() => AppStore.getLeads());
  const [leadSegmentFilter, setLeadSegmentFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<LeadInquiry | null>(null);

  // Live sessions management
  const [sessions, setSessions] = useState<LiveSession[]>(() => AppStore.getLiveSessions());
  const [newSessionModal, setNewSessionModal] = useState(false);
  const [newSessionTitle, setNewSessionTitle] = useState('');
  const [newSessionProg, setNewSessionProg] = useState(programs[0]?.title || '');
  const [newSessionDate, setNewSessionDate] = useState('2026-11-05');
  const [newSessionTime, setNewSessionTime] = useState('19:00 - 20:30');

  // Program edit state
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);

  // Settings form state
  const [settingsForm, setSettingsForm] = useState<SiteSettings>({ ...settings });
  const [settingsSaveMsg, setSettingsSaveMsg] = useState('');

  // Handle lead status update
  const handleUpdateLeadStatus = (id: string, status: LeadInquiry['status']) => {
    AppStore.updateLeadStatus(id, status);
    setLeads(AppStore.getLeads());
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status });
    }
  };

  // Handle Settings Save
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    AppStore.saveSettings(settingsForm);
    onRefreshSettings();
    setSettingsSaveMsg('Contact and site settings saved successfully!');
    setTimeout(() => setSettingsSaveMsg(''), 3000);
  };

  // Handle Program Save
  const handleSaveProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProgram) return;

    AppStore.updateProgram(editingProgram);
    onRefreshPrograms();
    setEditingProgram(null);
  };

  // Handle Add Session
  const handleAddSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSessionTitle) return;

    AppStore.addLiveSession({
      programId: 'custom-prog',
      programTitle: newSessionProg,
      title: newSessionTitle,
      description: 'Live interactive masterclass and Q&A hosted by Deepak Verma.',
      date: newSessionDate,
      time: newSessionTime,
      timezone: 'IST',
      instructor: 'Deepak Verma',
      status: 'scheduled',
      instructions: 'Please join with camera and microphone prepared for live exercises.',
    });

    setSessions(AppStore.getLiveSessions());
    setNewSessionModal(false);
    setNewSessionTitle('');
  };

  const filteredLeads = leads.filter(l => 
    leadSegmentFilter === 'all' ? true : l.segment === leadSegmentFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Header */}
      <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mastermind Alliance Coaching — Admin Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Operations & Curriculum Management
          </h1>
          <p className="text-xs text-neutral-400">
            Founder: Deepak Verma • Manage inquiries, edit programs, schedule live cohorts, and audit site data.
          </p>
        </div>

        {/* Quick Metrics */}
        <div className="flex items-center gap-4 bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-2xl">
          <div className="text-center px-2">
            <div className="text-xl font-black text-white">{leads.length}</div>
            <div className="text-[10px] uppercase font-bold text-neutral-400">Leads</div>
          </div>
          <div className="h-6 w-px bg-neutral-800" />
          <div className="text-center px-2">
            <div className="text-xl font-black text-[#D13A28]">{programs.length}</div>
            <div className="text-[10px] uppercase font-bold text-neutral-400">Programs</div>
          </div>
          <div className="h-6 w-px bg-neutral-800" />
          <div className="text-center px-2">
            <div className="text-xl font-black text-emerald-400">{sessions.length}</div>
            <div className="text-[10px] uppercase font-bold text-neutral-400">Live Labs</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-200 gap-6 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('leads')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'leads'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Inquiries & Leads ({leads.length})
        </button>

        <button
          onClick={() => setActiveTab('programs')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'programs'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Programs & Statuses ({programs.length})
        </button>

        <button
          onClick={() => setActiveTab('sessions')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'sessions'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Live Sessions Manager ({sessions.length})
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`pb-3 border-b-2 transition-all cursor-pointer ${
            activeTab === 'settings'
              ? 'border-[#D13A28] text-[#D13A28]'
              : 'border-transparent text-neutral-500 hover:text-neutral-900'
          }`}
        >
          Contact & Site Settings
        </button>
      </div>

      {/* TAB 1: Leads and Inquiries */}
      {activeTab === 'leads' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-500">Filter Segment:</span>
              {(['all', 'B2B', 'B2G', 'B2C', 'Youth', 'Keynote'] as const).map(seg => (
                <button
                  key={seg}
                  onClick={() => setLeadSegmentFilter(seg)}
                  className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                    leadSegmentFilter === seg
                      ? 'bg-[#111111] text-white font-bold'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {seg === 'all' ? 'All Segments' : seg}
                </button>
              ))}
            </div>

            <span className="text-xs text-neutral-500">
              Showing {filteredLeads.length} leads
            </span>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Segment / Org</th>
                    <th className="p-4">Interest / Format</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-800">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-neutral-400">
                        No inquiries recorded in this category yet.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-neutral-50/80 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-neutral-900">{lead.name}</div>
                          <div className="text-[11px] text-neutral-500">{lead.email}</div>
                          <div className="text-[11px] text-neutral-500">{lead.phone}</div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            lead.segment === 'B2B' ? 'bg-blue-100 text-blue-800' :
                            lead.segment === 'B2G' ? 'bg-purple-100 text-purple-800' :
                            lead.segment === 'Keynote' ? 'bg-amber-100 text-amber-800' :
                            'bg-neutral-100 text-neutral-800'
                          }`}>
                            {lead.segment}
                          </span>
                          {lead.organization && (
                            <div className="font-semibold text-neutral-800 mt-1">{lead.organization}</div>
                          )}
                          {lead.participantCount && (
                            <div className="text-[11px] text-neutral-400">{lead.participantCount} Participants</div>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="font-semibold text-neutral-900">{lead.programInterest}</div>
                          <div className="text-[11px] text-neutral-500">{lead.preferredFormat || 'Direct'}</div>
                        </td>
                        <td className="p-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value as any)}
                            className="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-neutral-200 bg-white"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Proposal Sent">Proposal Sent</option>
                            <option value="Enrolled">Enrolled</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="p-4 text-[11px] text-neutral-400">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold transition-colors"
                          >
                            View Notes
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lead Detail Modal / Panel */}
          {selectedLead && (
            <div className="p-6 bg-white rounded-2xl border border-neutral-300 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <h3 className="font-bold text-sm text-neutral-900">
                  Lead Details: {selectedLead.name} ({selectedLead.segment})
                </h3>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-xs text-neutral-400 hover:text-neutral-700"
                >
                  Close Panel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-neutral-400 block">Phone / WhatsApp:</span>
                  <span className="font-semibold text-neutral-800">{selectedLead.phone}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Email Address:</span>
                  <span className="font-semibold text-neutral-800">{selectedLead.email}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Program Interest:</span>
                  <span className="font-semibold text-neutral-800">{selectedLead.programInterest}</span>
                </div>
              </div>

              <div className="text-xs space-y-1">
                <span className="text-neutral-400 font-semibold">User Message / Requirement:</span>
                <p className="p-3 bg-neutral-50 rounded-xl text-neutral-700 border border-neutral-200/60 leading-relaxed">
                  {selectedLead.message || 'No additional message provided.'}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-neutral-500">Update Status:</span>
                {(['New', 'Contacted', 'Proposal Sent', 'Closed'] as const).map(st => (
                  <button
                    key={st}
                    onClick={() => handleUpdateLeadStatus(selectedLead.id, st)}
                    className={`px-3 py-1 rounded text-xs font-semibold ${
                      selectedLead.status === st ? 'bg-[#D13A28] text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Programs and Statuses (Editable without code edits as required by brief) */}
      {activeTab === 'programs' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-neutral-500">
              Manage program pricing, dates, delivery format, and live status (Upcoming, Enrolling, On-Demand, Past).
            </p>
          </div>

          {/* Program Edit Modal / Inline Editor */}
          {editingProgram && (
            <form onSubmit={handleSaveProgram} className="bg-white p-6 rounded-2xl border-2 border-[#D13A28]/40 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <h3 className="text-base font-bold text-neutral-900">
                  Editing Program: {editingProgram.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingProgram(null)}
                  className="text-xs text-neutral-500 hover:text-neutral-800"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editingProgram.title}
                    onChange={(e) => setEditingProgram({ ...editingProgram, title: e.target.value })}
                    className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Status</label>
                  <select
                    value={editingProgram.status}
                    onChange={(e) => setEditingProgram({ ...editingProgram, status: e.target.value as any })}
                    className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                  >
                    <option value="upcoming">Upcoming (Waitlist)</option>
                    <option value="enrolling">Enrolling (Active Cohort)</option>
                    <option value="on-demand">On-Demand (Self-Paced)</option>
                    <option value="past">Past / Concept Archive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Schedule / Dates Text</label>
                  <input
                    type="text"
                    value={editingProgram.datesText || ''}
                    onChange={(e) => setEditingProgram({ ...editingProgram, datesText: e.target.value })}
                    placeholder="e.g. Proposed Launch: Q4 2026 or Oct 2026"
                    className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Tuition / Price Display</label>
                  <input
                    type="text"
                    value={editingProgram.priceDisplay || ''}
                    onChange={(e) => setEditingProgram({ ...editingProgram, priceDisplay: e.target.value })}
                    placeholder="e.g. ₹14,999 or Registrations Opening Soon"
                    className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Delivery Mode</label>
                  <select
                    value={editingProgram.deliveryMode}
                    onChange={(e) => setEditingProgram({ ...editingProgram, deliveryMode: e.target.value as any })}
                    className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                  >
                    <option value="Online Self-Paced">Online Self-Paced</option>
                    <option value="Live Online Cohort">Live Online Cohort</option>
                    <option value="Offline / In-Person">Offline / In-Person (Lucknow)</option>
                    <option value="Hybrid (Online + Classroom)">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={editingProgram.duration}
                    onChange={(e) => setEditingProgram({ ...editingProgram, duration: e.target.value })}
                    className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Summary</label>
                <textarea
                  rows={2}
                  value={editingProgram.summary}
                  onChange={(e) => setEditingProgram({ ...editingProgram, summary: e.target.value })}
                  className="w-full p-2 text-xs border border-neutral-200 rounded-lg"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingProgram(null)}
                  className="px-4 py-2 border border-neutral-300 text-xs font-semibold rounded-xl text-neutral-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20]"
                >
                  Save Program Updates
                </button>
              </div>
            </form>
          )}

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28] bg-red-50 px-2 py-0.5 rounded">
                      {prog.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      prog.status === 'upcoming' ? 'bg-amber-100 text-amber-800' :
                      prog.status === 'enrolling' ? 'bg-emerald-100 text-emerald-800' :
                      prog.status === 'past' ? 'bg-neutral-200 text-neutral-700' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {prog.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-neutral-900 truncate">
                    {prog.title}
                  </h4>

                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {prog.summary}
                  </p>

                  <div className="text-[11px] text-neutral-600 pt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <span>Pricing: <strong>{prog.priceDisplay || 'Proposal'}</strong></span>
                    <span>Mode: <strong>{prog.deliveryMode}</strong></span>
                    {prog.datesText && <span>Schedule: <strong className="text-[#D13A28]">{prog.datesText}</strong></span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={() => setEditingProgram(prog)}
                    className="p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs flex items-center gap-1 transition-colors"
                    title="Edit program parameters"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => onPreviewProgram(prog.slug)}
                    className="p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs flex items-center gap-1 transition-colors"
                    title="Preview public course page"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Live Sessions Manager */}
      {activeTab === 'sessions' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs text-neutral-500">
              Schedule live cohort labs and masterclasses. Links and dates sync directly with learner dashboards.
            </p>
            <button
              onClick={() => setNewSessionModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D13A28] text-white text-xs font-bold rounded-xl hover:bg-[#b82f20] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Schedule New Live Lab</span>
            </button>
          </div>

          {newSessionModal && (
            <form onSubmit={handleAddSession} className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-md space-y-4">
              <h3 className="font-bold text-sm text-neutral-900">Schedule Live Coaching Session</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Session Title</label>
                  <input
                    type="text"
                    required
                    value={newSessionTitle}
                    onChange={(e) => setNewSessionTitle(e.target.value)}
                    placeholder="e.g. Live Practice Lab: Handling Tough Objections"
                    className="w-full p-2.5 text-xs border border-neutral-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Associated Program</label>
                  <input
                    type="text"
                    value={newSessionProg}
                    onChange={(e) => setNewSessionProg(e.target.value)}
                    placeholder="e.g. Sales Master or Communication Skills"
                    className="w-full p-2.5 text-xs border border-neutral-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={newSessionDate}
                    onChange={(e) => setNewSessionDate(e.target.value)}
                    className="w-full p-2.5 text-xs border border-neutral-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Time (IST)</label>
                  <input
                    type="text"
                    value={newSessionTime}
                    onChange={(e) => setNewSessionTime(e.target.value)}
                    placeholder="19:30 - 21:00"
                    className="w-full p-2.5 text-xs border border-neutral-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setNewSessionModal(false)}
                  className="px-4 py-2 border border-neutral-300 text-xs font-semibold rounded-xl text-neutral-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#111111] text-white text-xs font-bold rounded-xl"
                >
                  Schedule Session
                </button>
              </div>
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessions.map((sess) => (
              <div key={sess.id} className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D13A28] bg-red-50 px-2 py-0.5 rounded">
                    {sess.programTitle}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {sess.date} • {sess.time}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-neutral-900">{sess.title}</h4>
                <p className="text-xs text-neutral-600">{sess.description}</p>
                <div className="text-[11px] text-neutral-400">
                  Conducted by: {sess.instructor}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Contact & Site Settings */}
      {activeTab === 'settings' && (
        <form onSubmit={handleSaveSettings} className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs space-y-6 max-w-3xl">
          <div className="border-b border-neutral-100 pb-4">
            <h3 className="text-lg font-bold text-neutral-900">Contact Details & Integrity Safeguards</h3>
            <p className="text-xs text-neutral-500 mt-1">
              As per Content Integrity Rule 13: Store contact details in admin settings and require owner confirmation before launch; do not hard-code them throughout the app.
            </p>
          </div>

          {settingsSaveMsg && (
            <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{settingsSaveMsg}</span>
            </div>
          )}

          {/* Owner Confirmation Toggle */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-amber-900">
                  Owner Verification Status:
                </span>
              </div>
              <label className="flex items-center gap-2 text-xs font-bold text-amber-900 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settingsForm.isConfirmedByOwner}
                  onChange={(e) => setSettingsForm({ ...settingsForm, isConfirmedByOwner: e.target.checked })}
                  className="rounded text-[#D13A28] focus:ring-[#D13A28]"
                />
                <span>Confirmed & Approved by Deepak Verma</span>
              </label>
            </div>
            <p className="text-[11px] text-amber-800">
              When unchecked, public footer and contact forms display a transparent review disclaimer indicating details are pending final confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Official Phone Number
              </label>
              <input
                type="text"
                value={settingsForm.contactPhone}
                onChange={(e) => setSettingsForm({ ...settingsForm, contactPhone: e.target.value })}
                className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                value={settingsForm.contactEmail}
                onChange={(e) => setSettingsForm({ ...settingsForm, contactEmail: e.target.value })}
                className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Lucknow Address (Street / Sector)
              </label>
              <input
                type="text"
                value={settingsForm.contactAddress}
                onChange={(e) => setSettingsForm({ ...settingsForm, contactAddress: e.target.value })}
                className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                City, State, Postal Code
              </label>
              <input
                type="text"
                value={settingsForm.contactCityState}
                onChange={(e) => setSettingsForm({ ...settingsForm, contactCityState: e.target.value })}
                className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Top Notification Announcement Text
            </label>
            <input
              type="text"
              value={settingsForm.announcementText || ''}
              onChange={(e) => setSettingsForm({ ...settingsForm, announcementText: e.target.value })}
              className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#111111] text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Save Settings
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
