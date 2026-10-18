export type UserRole = 'learner' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

export type ProgramCategory = 
  | 'Personal Growth & Life Management'
  | 'Emotional Intelligence & Human Effectiveness'
  | 'Communication & Public Speaking'
  | 'Sales & Business Performance'
  | 'Leadership & Team Development'
  | 'Industry Training'
  | 'Institutional Training';

export type TargetAudience = 'Individual (B2C)' | 'Corporate & Teams (B2B)' | 'Institutions & Public Sector (B2G)' | 'Keynote Speaking';

export type DeliveryMode = 'Online Self-Paced' | 'Live Online Cohort' | 'Offline / In-Person' | 'Hybrid (Online + Classroom)' | 'Keynote';

export type ProgramStatus = 
  | 'enrolling'    // Open for registration
  | 'upcoming'     // Scheduled for future date (waitlist open)
  | 'on-demand'    // Self-paced available immediately
  | 'past'         // Archive / Past workshop concept
  | 'draft';

export interface LessonResource {
  id: string;
  title: string;
  type: 'pdf' | 'worksheet' | 'checklist' | 'audio';
  url: string;
  size?: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  durationMinutes: number;
  videoUrl?: string;
  audioUrl?: string;
  order: number;
  keyTakeaways: string[];
  resources?: LessonResource[];
}

export interface Module {
  id: string;
  programId: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProgramCategory;
  audience: TargetAudience;
  instructor: string;
  instructorTitle: string;
  deliveryMode: DeliveryMode;
  duration: string;
  status: ProgramStatus;
  statusLabel?: string;
  price?: number;
  currency: string;
  priceDisplay?: string; // e.g. "To be confirmed" or "₹14,999" or "Custom Proposal"
  location?: string;
  datesText?: string;
  timezone: string;
  featured: boolean;
  coverImage: string;
  outcomes: string[];
  prerequisites: string[];
  modules: Module[];
  faqs: ProgramFAQ[];
  actionType: 'enroll' | 'waitlist' | 'proposal' | 'archive';
}

export interface Enrollment {
  id: string;
  userId: string;
  programId: string;
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  enrolledAt: string;
  completedLessonIds: string[];
  lastAccessedLessonId?: string;
  lastAccessedAt: string;
}

export interface LiveSession {
  id: string;
  programId: string;
  programTitle: string;
  title: string;
  description: string;
  date: string;
  time: string;
  timezone: string;
  instructor: string;
  status: 'scheduled' | 'live' | 'completed';
  joinUrl?: string;
  instructions: string;
}

export type LeadSegment = 'B2C' | 'B2B' | 'B2G' | 'Keynote' | 'General' | 'Youth';

export type LeadStatus = 'New' | 'Contacted' | 'Proposal Sent' | 'Enrolled' | 'Closed';

export interface LeadInquiry {
  id: string;
  segment: LeadSegment;
  name: string;
  email: string;
  phone: string;
  organization?: string;
  designation?: string;
  participantCount?: number;
  programInterest?: string;
  preferredFormat?: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
  notes?: string;
}

export interface SiteSettings {
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  contactCityState: string;
  whatsappNumber: string;
  isConfirmedByOwner: boolean;
  announcementText?: string;
  announcementActive: boolean;
  founderName: string;
  founderTitle: string;
  tagline: string;
  brandName: string;
}

export interface VideoTestimonial {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  speakerName: string;
  speakerRole: string;
  keyHighlight: string;
}
