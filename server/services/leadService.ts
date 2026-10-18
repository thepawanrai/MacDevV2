import type { LeadInquiry, LeadSegment, LeadStatus } from '../../src/types/index.ts';
import { initialLeads } from '../../src/data/seedData.ts';

class LeadService {
  private leads: LeadInquiry[];

  constructor() {
    // Clone seed leads
    this.leads = [...initialLeads];
  }

  public getAllLeads(segment?: LeadSegment): LeadInquiry[] {
    if (segment) {
      return this.leads.filter(l => l.segment === segment);
    }
    return [...this.leads].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  public getLeadById(id: string): LeadInquiry | undefined {
    return this.leads.find(l => l.id === id);
  }

  public createLead(data: {
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
  }): LeadInquiry {
    const newLead: LeadInquiry = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      segment: data.segment || 'B2C',
      name: data.name,
      email: data.email,
      phone: data.phone,
      organization: data.organization,
      designation: data.designation,
      participantCount: data.participantCount,
      programInterest: data.programInterest || 'General Inquiry',
      preferredFormat: data.preferredFormat,
      message: data.message,
      status: 'New',
      createdAt: new Date().toISOString(),
    };

    this.leads.unshift(newLead);
    return newLead;
  }

  public updateLeadStatus(id: string, status: LeadStatus, notes?: string): LeadInquiry | null {
    const lead = this.leads.find(l => l.id === id);
    if (!lead) return null;

    lead.status = status;
    if (notes !== undefined) {
      lead.notes = notes;
    }
    return lead;
  }
}

export const leadService = new LeadService();
