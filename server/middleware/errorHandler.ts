import type { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  status?: number;
  statusCode?: number;
  code?: string;
}

export function apiNotFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    status: 404,
    error: 'NotFound',
    message: `API endpoint ${req.method} ${req.originalUrl} does not exist.`,
    timestamp: new Date().toISOString(),
  });
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Do not leak stack traces in production
  const isDev = process.env.NODE_ENV !== 'production';

  console.error(`[Server Error] ${req.method} ${req.originalUrl}:`, err);

  if (res.headersSent) {
    return;
  }

  res.status(status).json({
    status,
    error: err.name || 'InternalServerError',
    message,
    ...(isDev && err.stack ? { stack: err.stack } : {}),
    timestamp: new Date().toISOString(),
  });
}
