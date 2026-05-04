# Setup

This repository has no root setup command. Install and run dependencies inside the specific project folder you want to inspect.

Do not assume a command from one subproject works in another. Each folder reflects a different learning phase, package manager history, and runtime expectation.

## Prerequisites

Install only what the target subproject needs:

| Need | Used by |
| --- | --- |
| Node.js and npm | Most frontend projects and all Express APIs |
| Yarn | `frontend/joystick` has `yarn.lock`; `backend/joystick-api` also has a `yarn.lock` alongside `package-lock.json` |
| Python | `backend/electoral-system-api` |
| PostgreSQL | `backend/electoral-system-api` |
| MongoDB | `backend/joystick-api`, `backend/rgbwallet-api`, `backend/secret-santa-api` |
| Docker | Backend folders that include Dockerfiles |
| Cloudflare account and `cloudflared` | `backend/cloudflared` |

## Project-Local Installation

For JavaScript projects:

```bash
cd frontend/joystick
npm install
```

or:

```bash
cd backend/secret-santa-api
npm install
```

Use the package manager indicated by the local lockfile when possible. For example, `frontend/joystick` has `yarn.lock`, while `backend/rgbwallet-api` has `package-lock.json`.

For the Flask API:

```bash
cd backend/electoral-system-api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Environment Files

The repository contains `.env.example` files and also tracks some `.env` files. Treat tracked `.env` values as exposed historical data, not as reusable secrets.

| Project | Environment reference | Variables found |
| --- | --- | --- |
| `backend/joystick-api` | `.env.example` | `PORT`, `MONGODB_URI`, `SALT_KEY` |
| `backend/rgbwallet-api` | `.env.example` | `PORT`, `MONGODB_URI`, `MONGODB_DB` |
| `backend/secret-santa-api` | `.env.example` | `PORT`, `MONGODB_URI` |
| `frontend/electoral-system` | `.env.example` | `VITE_API_URL` |
| `frontend/joystick` | `.env.example` | `VITE_API_URL` |
| `frontend/rgbwallet` | `.env.example` | `VITE_API_URL` |
| `frontend/secret-santa` | `.env.example` | `VITE_API_URL` |
| `frontend/video-project-manage` | `.env.example` | `REACT_APP_USE_MOCKS` |

No `.env.example` was found for `backend/electoral-system-api`; database defaults are currently embedded in `app/db.py`, and should be overridden through environment variables before any real reuse.

## Database Setup

### PostgreSQL: Electoral System API

`backend/electoral-system-api/database/` contains:

- `DDL.sql`: table definitions and triggers.
- `DML.sql`: database creation and seed data.
- `TEARDOWN.sql`: table cleanup.

The Flask connection reads:

- `DB_HOST`
- `DB_NAME`
- `DB_USER`
- `DB_PASS`

If these are missing, `app/db.py` uses legacy defaults. Replace them in your environment before running the API against any real database.

### MongoDB APIs

The MongoDB-backed APIs expect `MONGODB_URI`:

- `backend/joystick-api`
- `backend/rgbwallet-api`
- `backend/secret-santa-api`

`backend/rgbwallet-api` can also use `MONGODB_DB`; otherwise it derives a database name from the URI or uses its internal fallback behavior.

## Local Scripts

Read scripts from each subproject's `package.json`. There is no root command.

Examples found:

- `npm run dev`: Webpack dev server or Nodemon depending on the project.
- `npm run build`: frontend bundling.
- `npm start`: CRA dev server or Node API bootstrap depending on the project.
- `npm test`: real only where the package implements it; some backend packages use placeholder test scripts.
- `npm run lint`: currently found in `frontend/lojinha-simples`.

## Setup Cautions

- Several projects contain both Webpack and Vite config files. Use `package.json` scripts as the active command source.
- Some generated folders are tracked, including `build/`, `dist/`, `.turbo`, and Python `__pycache__`.
- Old dependency versions may require Node 18-era tooling.
- Public API URLs in frontend services may point to historical services that are no longer available.
