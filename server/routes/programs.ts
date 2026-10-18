import { Router } from 'express';
import type { Request, Response } from 'express';
import { programService } from '../services/programService.ts';

export const programsRouter = Router();

// GET /api/programs - List all programs
programsRouter.get('/', (_req: Request, res: Response) => {
  const programs = programService.getAllPrograms();
  res.status(200).json({
    success: true,
    count: programs.length,
    data: programs,
  });
});

// GET /api/programs/:slug - Get program by slug or ID
programsRouter.get('/:slug', (req: Request, res: Response) => {
  const program = programService.getProgramBySlug(req.params.slug);
  if (!program) {
    res.status(404).json({
      success: false,
      error: 'NotFound',
      message: `Program '${req.params.slug}' not found`,
    });
    return;
  }
  res.status(200).json({
    success: true,
    data: program,
  });
});
