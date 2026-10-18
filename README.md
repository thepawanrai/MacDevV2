# Mastermind Alliance Coaching (MAC) — Web Platform

Production-ready web application and learning platform for Mastermind Alliance Coaching, powered by React 19, Vite 8, Tailwind CSS v4, and a full-stack Node.js + Express backend.

## Architecture

- **Frontend**: React 19 SPA bundled by Vite 8 with Tailwind CSS v4 and Plus Jakarta Sans / Inter typography.
- **Backend**: Modular Node.js + Express server in `server/` with `server.ts` entry point.
- **API Services**:
  - `GET /health` & `GET /api/health` — Liveness & uptime health check.
  - `GET /api/programs` & `GET /api/programs/:slug` — Program curriculum & details.
  - `GET /api/leads` & `POST /api/leads` — Lead capture & inquiry routing.
  - `GET /api/settings` — Site configuration & contact details.
  - `ALL /api/*` — Structured JSON 404 responses for unknown endpoints.
- **Production Asset Serving**: Static asset serving from `dist/` with non-cached `index.html` and SPA client-side fallback.

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Development

Runs the Express server with Vite middleware on port 3000:

```bash
npm run dev
```

### 3. Production Build & Start

Build the client frontend bundle and launch the Express production server:

```bash
npm run build
npm start
```

The application will listen on `PORT` (default `3000`) and `HOST` (default `0.0.0.0`).

### 4. Quality & Lint Checks

```bash
npm run lint
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | Listening port for Express | `3000` |
| `HOST` | Interface bind address | `0.0.0.0` |
| `NODE_ENV` | Environment (`development` or `production`) | `production` |
| `APP_URL` | Public deployment URL | — |
| `GEMINI_API_KEY` | Optional key for Gemini AI API integrations | — |
