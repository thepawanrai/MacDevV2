import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { apiRouter } from './routes/index.ts';
import { healthRouter } from './routes/health.ts';
import { errorHandler, apiNotFoundHandler } from './middleware/errorHandler.ts';
import type { ViteDevServer } from 'vite';

export interface AppOptions {
  isDev?: boolean;
  viteServer?: ViteDevServer;
}

export function createApp(options: AppOptions = {}): Express {
  const app = express();
  const isDev = options.isDev ?? (process.env.NODE_ENV !== 'production');

  // Disable x-powered-by header
  app.disable('x-powered-by');

  // Body parsing middleware
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));

  // Basic request logger in dev
  if (isDev) {
    app.use((req: Request, _res: Response, next: NextFunction) => {
      if (!req.url.startsWith('/@') && !req.url.startsWith('/node_modules')) {
        console.log(`[HTTP] ${req.method} ${req.url}`);
      }
      next();
    });
  }

  // Root health check endpoint
  app.use('/health', healthRouter);

  // Mount API endpoints under /api
  app.use('/api', apiRouter);

  // Catch-all for unknown /api routes -> return JSON 404
  app.all('/api/*', apiNotFoundHandler);

  // Static Assets and SPA routing
  const distPath = path.resolve(process.cwd(), 'dist');
  const distExists = fs.existsSync(distPath);

  if (!isDev && distExists) {
    // Production mode: Serve built frontend from dist
    app.use(
      express.static(distPath, {
        index: false,
        maxAge: '1d',
        setHeaders: (res, filePath) => {
          // Do not cache index.html to allow instant deployment updates
          if (filePath.endsWith('index.html')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          }
        },
      })
    );

    // Also serve public folder assets if needed
    const publicPath = path.resolve(process.cwd(), 'public');
    if (fs.existsSync(publicPath)) {
      app.use(express.static(publicPath, { maxAge: '1d' }));
    }

    // Client-side routing fallback: Send dist/index.html
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else if (options.viteServer) {
    // Development mode with Vite middleware
    app.use(options.viteServer.middlewares);
  } else if (distExists) {
    // Fallback: dist exists, serve it
    app.use(express.static(distPath, { index: false }));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Central error handler
  app.use(errorHandler);

  return app;
}
