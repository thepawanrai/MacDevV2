import 'dotenv/config';
import { createApp } from './server/app.ts';
import type { Server } from 'http';
import type { ViteDevServer } from 'vite';

// Helper to parse CLI flags (e.g., --port 3000 or --port=3000)
function parseArg(flag: string): string | undefined {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === flag && args[i + 1]) {
      return args[i + 1];
    }
    if (args[i].startsWith(`${flag}=`)) {
      return args[i].split('=')[1];
    }
  }
  return undefined;
}

const isProduction = process.env.NODE_ENV === 'production';
const cliPort = parseArg('--port');
const cliHost = parseArg('--host');

const PORT = parseInt(cliPort || process.env.PORT || '3000', 10);
const HOST = cliHost || process.env.HOST || '0.0.0.0';

async function startServer() {
  let viteServer: ViteDevServer | undefined;

  // In development, mount Vite's middleware
  if (!isProduction) {
    const { createServer } = await import('vite');
    viteServer = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
  }

  const app = createApp({
    isDev: !isProduction,
    viteServer,
  });

  const server: Server = app.listen(PORT, HOST, () => {
    console.log(`[Mastermind Alliance Coaching] Server running in ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'} mode`);
    console.log(`[Mastermind Alliance Coaching] Listening on http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`);
    console.log(`[Mastermind Alliance Coaching] Health check ready at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/health`);
    console.log(`[Mastermind Alliance Coaching] API endpoints ready at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/api`);
  });

  // Graceful shutdown
  let isShuttingDown = false;
  const gracefulShutdown = async (signal: string) => {
    if (isShuttingDown) return;
    isShuttingDown = true;
    console.log(`\nReceived ${signal}. Starting graceful shutdown...`);

    const shutdownTimeout = setTimeout(() => {
      console.error('Shutdown timed out after 10s. Forcefully terminating.');
      process.exit(1);
    }, 10000);

    try {
      if (viteServer) {
        await viteServer.close();
      }

      await new Promise<void>((resolve, reject) => {
        server.close((err) => {
          if (err) return reject(err);
          resolve();
        });
      });

      clearTimeout(shutdownTimeout);
      console.log('Server stopped cleanly. Goodbye.');
      process.exit(0);
    } catch (err) {
      clearTimeout(shutdownTimeout);
      console.error('Error during shutdown:', err);
      process.exit(1);
    }
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
  process.exit(1);
});
