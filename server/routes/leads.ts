import { Router } from 'express';
import type { Request, Response } from 'express';
import { leadService } from '../services/leadService.ts';
import type { LeadSegment } from '../../src/types/index.ts';

export const leadsRouter = Router();

// GET /api/leads - List all leads
leadsRouter.get('/', (req: Request, res: Response) => {
  const segment = req.query.segment as LeadSegment | undefined;
  const leads = leadService.getAllLeads(segment);
  res.status(200).json({
    success: true,
    count: leads.length,
    data: leads,
  });
});

// GET /api/leads/:id - Get a specific lead
leadsRouter.get('/:id', (req: Request, res: Response) => {
  const lead = leadService.getLeadById(req.params.id);
  if (!lead) {
    res.status(404).json({
      success: false,
      error: 'NotFound',
      message: `Lead with ID ${req.params.id} not found`,
    });
    return;
  }
  res.status(200).json({
    success: true,
    data: lead,
  });
});

// POST /api/leads - Submit a new inquiry
leadsRouter.post('/', (req: Request, res: Response) => {
  const { name, email, phone, message, segment, organization, designation, participantCount, programInterest, preferredFormat } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    res.status(400).json({
      success: false,
      error: 'ValidationError',
      message: 'Name is required.',
    });
    return;
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({
      success: false,
      error: 'ValidationError',
      message: 'A valid email address is required.',
    });
    return;
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
    res.status(400).json({
      success: false,
      error: 'ValidationError',
      message: 'A valid phone number is required.',
    });
    return;
  }

  const createdLead = leadService.createLead({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: (message && typeof message === 'string') ? message.trim() : 'Inquiry submitted via portal.',
    segment: segment || 'B2C',
    organization: organization ? String(organization).trim() : undefined,
    designation: designation ? String(designation).trim() : undefined,
    participantCount: participantCount ? Number(participantCount) : undefined,
    programInterest: programInterest ? String(programInterest).trim() : undefined,
    preferredFormat: preferredFormat ? String(preferredFormat).trim() : undefined,
  });

  // Forward asynchronously to Web3Forms
  try {
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '952b754d-f09c-499b-9999-a579ee444317',
        from_name: 'Mastermind Alliance Coaching Website',
        subject: `New Lead: ${createdLead.name} (${createdLead.programInterest || createdLead.segment})`,
        name: createdLead.name,
        email: createdLead.email,
        phone: createdLead.phone,
        message: createdLead.message,
        segment: createdLead.segment,
        organization: createdLead.organization,
        designation: createdLead.designation,
        participantCount: createdLead.participantCount,
        programInterest: createdLead.programInterest,
        preferredFormat: createdLead.preferredFormat,
      }),
    }).catch((err) => {
      console.warn('Web3Forms server forward warning:', err);
    });
  } catch {
    // Non-blocking
  }

  res.status(201).json({
    success: true,
    message: 'Inquiry received successfully. Our team will contact you shortly.',
    data: createdLead,
  });
});

// PATCH /api/leads/:id - Update lead status
leadsRouter.patch('/:id', (req: Request, res: Response) => {
  const { status, notes } = req.body;
  if (!status) {
    res.status(400).json({
      success: false,
      error: 'ValidationError',
      message: 'Status is required.',
    });
    return;
  }

  const updated = leadService.updateLeadStatus(req.params.id, status, notes);
  if (!updated) {
    res.status(404).json({
      success: false,
      error: 'NotFound',
      message: `Lead with ID ${req.params.id} not found`,
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: updated,
  });
});
