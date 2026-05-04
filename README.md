# web-oldies

> **Status:** Archived
> This repository is not actively maintained. It is kept for historical reference, learning review, and portfolio context.

`web-oldies` is a collection of older web-development projects. It is not a single application, package workspace, or production monorepo. Each subfolder is an independent learning artifact with its own dependencies, scripts, runtime assumptions, and deployment traces.

The repository is useful as a timeline of early frontend, backend, database, API, and deployment experiments. Treat it as reference material, not as the current standard for architecture, security, testing, or production readiness.

## What Is In This Repository

| Area | Project | Type | Main stack | Purpose |
| --- | --- | --- | --- | --- |
| `backend/electoral-system-api` | Electoral System API | Backend API | Flask, Flask-Cors, psycopg2, PostgreSQL, SQL scripts, Docker | Electoral-domain API around candidates, parties, offices, people, donations, judicial processes, support teams, elections, and seed/cleanup functions. |
| `backend/joystick-api` | Joystick API | Backend API | Node.js, Express, Mongoose, MongoDB, JWT, Docker | Game-store backend for catalog, users, authentication, cart, library, checkout, and admin game management. |
| `backend/rgbwallet-api` | RGBWallet API | Backend API | Node.js, Express, MongoDB driver, bcryptjs, Docker | Login and administrator user-management backend for the RGBWallet frontend. |
| `backend/secret-santa-api` | Secret Santa API | Backend API | Node.js, Express, Mongoose, MongoDB, Docker | Participant CRUD and draw generation for the Secret Santa frontend. |
| `backend/cloudflared` | Cloudflare Tunnel config | Infrastructure config | Cloudflare Tunnel | Historical tunnel config for exposing backend services through hostnames. |
| `frontend/alan-turing` | Alan Turing | Frontend app | SolidJS, TypeScript, Tailwind CSS, Webpack, Vite config | Static educational single-page site about Alan Turing and computing-history topics. |
| `frontend/electoral-system` | Electoral System Frontend | Frontend app | SolidJS, TypeScript, Tailwind CSS, DaisyUI, Webpack, Vite config | UI for listing, filtering, and deleting electoral-system data from the Flask API. |
| `frontend/joystick` | Joystick | Frontend app | React, React Router, Axios, Bootstrap, styled-components, Webpack | Game-store UI for browsing, auth, cart, checkout, profile, library, and admin game screens. |
| `frontend/lojinha-simples` | Lojinha Simples | Frontend app | React, TypeScript, Redux Toolkit, React Query, Material UI, Webpack, Vite config | Small storefront UI using Fake Store API product data and local cart state. |
| `frontend/rgbwallet` | RGBWallet Frontend | Frontend app | React 17, Create React App, React Router 5, Axios, Bootstrap | Login and protected administrator UI for RGBWallet users. |
| `frontend/secret-santa` | Secret Santa Frontend | Frontend app | React 18, React Router 6, Axios, Bootstrap, styled-components, Webpack, Vite config | Participant registration, participant list, and draw-trigger UI. |
| `frontend/video-project-manage` | Video Project Manager | Frontend app | React 18, Redux Toolkit, MirageJS, Axios, styled-components, Webpack, react-scripts | CRUD-style UI for clients and video projects with local mock server behavior. |

## Repository Shape

```text
web-oldies/
|-- backend/
|   |-- cloudflared/
|   |-- electoral-system-api/
|   |-- joystick-api/
|   |-- rgbwallet-api/
|   `-- secret-santa-api/
|-- docs/
|   |-- api.md
|   |-- architecture.md
|   |-- database.md
|   |-- deployment.md
|   |-- security.md
|   `-- setup.md
`-- frontend/
    |-- alan-turing/
    |-- electoral-system/
    |-- joystick/
    |-- lojinha-simples/
    |-- rgbwallet/
    |-- secret-santa/
    `-- video-project-manage/
```

There is no root `package.json`, root test command, root build command, or root application entrypoint. Commands must be run from the specific subproject directory that owns the relevant `package.json`, `requirements.txt`, or Dockerfile.

## Documentation Map

- [Architecture](docs/architecture.md): how the archive is organized and which frontends pair with which backends.
- [Setup](docs/setup.md): prerequisites, environment files, dependency installation, and database setup by subproject.
- [API](docs/api.md): real backend route surfaces found in the codebase.
- [Database](docs/database.md): PostgreSQL tables/scripts and MongoDB model or collection usage.
- [Deployment](docs/deployment.md): Dockerfiles, Vercel configs, and Cloudflare Tunnel notes found in the repo.
- [Security](docs/security.md): concrete archival risks and security limitations identified in the codebase.

Each standalone project also has its own README in its subfolder.

## Runtime Requirements

Requirements vary by subproject:

- Node.js projects generally expect Node 18-era runtimes. Some folders declare exact engines or `.nvmrc` files.
- Python API work is isolated under `backend/electoral-system-api` and uses dependencies from `requirements.txt`.
- MongoDB is required by `backend/joystick-api`, `backend/rgbwallet-api`, and `backend/secret-santa-api`.
- PostgreSQL is required by `backend/electoral-system-api`.
- Frontend projects with `vercel.json` are historical static deployment candidates, but they still depend on each project-specific build configuration.

See [Setup](docs/setup.md) for the exact per-project references discovered in the repository.

## Scripts

The repository has no root scripts. Script names are project-local and should be read from each `package.json`.

Common examples found in the archive:

| Command | Where it appears | Meaning |
| --- | --- | --- |
| `npm run dev` | Most Webpack frontend projects and some Node APIs | Starts that subproject's development workflow. |
| `npm run build` | Most frontend projects | Builds that frontend according to its local Webpack or CRA configuration. |
| `npm start` | Some CRA frontends and Node APIs | Starts the subproject-specific entrypoint. |
| `npm test` | Some CRA or placeholder packages | May be real only in CRA apps; several backend packages contain placeholder test scripts. |
| `npm run lint` | `frontend/lojinha-simples` | Runs that project's ESLint command. |

Because this is an archive, verify dependency compatibility before relying on any script.

## Current Status And Limitations

- This archive contains old dependencies and old implementation patterns.
- Some generated artifacts are tracked, including frontend `build/` or `dist/` folders, `.turbo` logs, Python `__pycache__`, and IDE metadata.
- Some `.env` files are tracked. Treat every value as exposed historical data.
- Some projects contain public hosted API URLs and deployment configs that may no longer be valid.
- Several apps mix Webpack and Vite-era files; the active scripts in `package.json` are the safest source of truth.
- The code includes legacy security practices such as open CORS, fallback JWT secrets, MD5 password hashing in one backend, and default database credentials in one Flask module.

## License

No root license file was found. Some subprojects declare package-level licenses in their own `package.json` files.
