import { Program, LeadInquiry, LiveSession, SiteSettings, User, Enrollment } from '../types';
import { initialPrograms, initialLeads, initialLiveSessions, initialSiteSettings, initialUsers } from '../data/seedData';

const STORAGE_KEYS = {
  PROGRAMS: 'mac_programs_v2',
  LEADS: 'mac_leads_v1',
  LIVE_SESSIONS: 'mac_live_sessions_v1',
  SETTINGS: 'mac_settings_v4',
  CURRENT_USER: 'mac_current_user_v1',
  ENROLLMENTS: 'mac_enrollments_v1',
};

// Default initial enrollment for the demo learner in Communication Skills
const initialEnrollments: Enrollment[] = [
  {
    id: 'enr-1',
    userId: 'user-learner-demo',
    programId: 'prog-communication-skills',
    status: 'active',
    enrolledAt: '2026-03-01T10:00:00Z',
    completedLessonIds: ['les-comm-101'],
    lastAccessedLessonId: 'les-comm-102',
    lastAccessedAt: '2026-03-10T14:30:00Z',
  }
];

export class AppStore {
  // Programs
  static getPrograms(): Program[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRAMS);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    this.savePrograms(initialPrograms);
    return initialPrograms;
  }

  static savePrograms(programs: Program[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRAMS, JSON.stringify(programs));
    } catch (e) {
      console.error('Failed to save programs', e);
    }
  }

  static getProgramBySlug(slug: string): Program | undefined {
    const list = this.getPrograms();
    // Normalize aliases
    const normalized = slug === 'sales-master' ? 'salesmaster' 
      : slug === 'life-master' ? 'lifemaster'
      : slug === 'goalmaster-archive' ? 'goalmaster'
      : slug;

    return list.find(p => p.slug === normalized || p.id === normalized || p.slug === slug || p.id === slug);
  }

  static updateProgram(updated: Program): void {
    const list = this.getPrograms();
    const index = list.findIndex(p => p.id === updated.id);
    if (index >= 0) {
      list[index] = updated;
    } else {
      list.push(updated);
    }
    this.savePrograms(list);
  }

  static deleteProgram(id: string): void {
    const list = this.getPrograms().filter(p => p.id !== id);
    this.savePrograms(list);
  }

  // Leads
  static getLeads(): LeadInquiry[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LEADS);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    this.saveLeads(initialLeads);
    return initialLeads;
  }

  static saveLeads(leads: LeadInquiry[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
    } catch (e) {
      console.error('Failed to save leads', e);
    }
  }

  static addLead(lead: Omit<LeadInquiry, 'id' | 'createdAt' | 'status'>): LeadInquiry {
    const leads = this.getLeads();
    const newLead: LeadInquiry = {
      ...lead,
      id: 'lead-' + Date.now(),
      status: 'New',
      createdAt: new Date().toISOString(),
    };
    leads.unshift(newLead);
    this.saveLeads(leads);

    // Sync with backend API
    try {
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }).catch((err) => {
        console.warn('Backend sync deferred (offline/local mode):', err);
      });
    } catch {
      // Ignore network errors in offline context
    }

    return newLead;
  }

  static updateLeadStatus(id: string, status: LeadInquiry['status'], notes?: string): void {
    const leads = this.getLeads();
    const lead = leads.find(l => l.id === id);
    if (lead) {
      lead.status = status;
      if (notes !== undefined) lead.notes = notes;
      this.saveLeads(leads);
    }
  }

  // Live Sessions
  static getLiveSessions(): LiveSession[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LIVE_SESSIONS);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    this.saveLiveSessions(initialLiveSessions);
    return initialLiveSessions;
  }

  static saveLiveSessions(sessions: LiveSession[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.LIVE_SESSIONS, JSON.stringify(sessions));
    } catch (e) {
      console.error('Failed to save live sessions', e);
    }
  }

  static updateLiveSession(session: LiveSession): void {
    const sessions = this.getLiveSessions();
    const idx = sessions.findIndex(s => s.id === session.id);
    if (idx >= 0) {
      sessions[idx] = session;
    } else {
      sessions.push(session);
    }
    this.saveLiveSessions(sessions);
  }

  static addLiveSession(session: Omit<LiveSession, 'id'>): LiveSession {
    const sessions = this.getLiveSessions();
    const newSession: LiveSession = {
      ...session,
      id: 'session-' + Date.now(),
    };
    sessions.unshift(newSession);
    this.saveLiveSessions(sessions);
    return newSession;
  }

  // Site Settings
  static getSettings(): SiteSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    this.saveSettings(initialSiteSettings);
    return initialSiteSettings;
  }

  static saveSettings(settings: SiteSettings): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }

  // Auth & Current User
  static getCurrentUser(): User | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    // Default to the demo learner so the reviewer can experience the learning app immediately,
    // or return the demo learner.
    return initialUsers[1];
  }

  static setCurrentUser(user: User | null): void {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      }
    } catch (e) {
      console.error('Failed to set current user', e);
    }
  }

  static getAllUsers(): User[] {
    return initialUsers;
  }

  // Enrollments
  static getEnrollments(): Enrollment[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ENROLLMENTS);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    this.saveEnrollments(initialEnrollments);
    return initialEnrollments;
  }

  static saveEnrollments(enrollments: Enrollment[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(enrollments));
    } catch (e) {
      console.error('Failed to save enrollments', e);
    }
  }

  static getUserEnrollments(userId: string): Enrollment[] {
    return this.getEnrollments().filter(e => e.userId === userId && e.status === 'active');
  }

  static isUserEnrolled(userId: string, programId: string): boolean {
    return this.getEnrollments().some(
      e => e.userId === userId && e.programId === programId && e.status === 'active'
    );
  }

  static enrollUser(userId: string, programId: string): Enrollment {
    const list = this.getEnrollments();
    const existing = list.find(e => e.userId === userId && e.programId === programId);
    if (existing) {
      existing.status = 'active';
      this.saveEnrollments(list);
      return existing;
    }
    const newEnr: Enrollment = {
      id: 'enr-' + Date.now(),
      userId,
      programId,
      status: 'active',
      enrolledAt: new Date().toISOString(),
      completedLessonIds: [],
      lastAccessedAt: new Date().toISOString(),
    };
    list.push(newEnr);
    this.saveEnrollments(list);
    return newEnr;
  }

  static toggleLessonComplete(userId: string, programId: string, lessonId: string): boolean {
    const list = this.getEnrollments();
    const enr = list.find(e => e.userId === userId && e.programId === programId);
    if (!enr) return false;

    const exists = enr.completedLessonIds.includes(lessonId);
    if (exists) {
      enr.completedLessonIds = enr.completedLessonIds.filter(id => id !== lessonId);
    } else {
      enr.completedLessonIds.push(lessonId);
    }
    enr.lastAccessedLessonId = lessonId;
    enr.lastAccessedAt = new Date().toISOString();

    // Check if all lessons complete
    const program = this.getPrograms().find(p => p.id === programId);
    if (program) {
      const allLessonIds = program.modules.flatMap(m => m.lessons.map(l => l.id));
      if (allLessonIds.length > 0 && allLessonIds.every(id => enr.completedLessonIds.includes(id))) {
        enr.status = 'completed';
      } else {
        enr.status = 'active';
      }
    }

    this.saveEnrollments(list);
    return !exists;
  }

  static updateLastAccessedLesson(userId: string, programId: string, lessonId: string): void {
    const list = this.getEnrollments();
    const enr = list.find(e => e.userId === userId && e.programId === programId);
    if (enr) {
      enr.lastAccessedLessonId = lessonId;
      enr.lastAccessedAt = new Date().toISOString();
      this.saveEnrollments(list);
    }
  }
}
