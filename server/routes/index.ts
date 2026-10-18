import { Router } from 'express';
import { healthRouter } from './health.ts';
import { leadsRouter } from './leads.ts';
import { programsRouter } from './programs.ts';
import { programService } from '../services/programService.ts';

export const apiRouter = Router();

// Health check under /api/health
apiRouter.use('/health', healthRouter);

// Leads API
apiRouter.use('/leads', leadsRouter);

// Programs API
apiRouter.use('/programs', programsRouter);

// Site Settings API
apiRouter.get('/settings', (_req, res) => {
  res.status(200).json({
    success: true,
    data: programService.getSettings(),
  });
});
