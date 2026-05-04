# Deployment

This repository contains historical deployment surfaces, not one complete production deployment workflow.

No root `docker-compose` file, root CI/CD workflow, or root release pipeline was found.

## Frontend Deployment Surfaces

Several frontend projects include `vercel.json`:

- `frontend/alan-turing/vercel.json`
- `frontend/electoral-system/vercel.json`
- `frontend/joystick/vercel.json`
- `frontend/lojinha-simples/vercel.json`
- `frontend/rgbwallet/vercel.json`
- `frontend/secret-santa/vercel.json`
- `frontend/video-project-manage/vercel.json`

These files indicate historical Vercel deployment intent. Before deploying any project, verify:

- The active build command in that project's `package.json`.
- The expected output directory for the active bundler.
- Required environment variables such as `VITE_API_URL` or `REACT_APP_USE_MOCKS`.
- Whether public API URLs still exist.
- Whether dependencies still install on the selected Node version.

## Backend Dockerfiles

Backend Dockerfiles exist in:

- `backend/electoral-system-api/Dockerfile`
- `backend/joystick-api/Dockerfile`
- `backend/rgbwallet-api/Dockerfile`
- `backend/secret-santa-api/Dockerfile`

These Dockerfiles are project-local. No root compose file was found to coordinate APIs, databases, and the tunnel.

## Cloudflare Tunnel

`backend/cloudflared/config.yml` maps hostnames to internal service names:

| Hostname | Service |
| --- | --- |
| `electoral-api.erickbarcelos.com` | `http://electoral-system-api:5000` |
| `joystick-api.erickbarcelos.com` | `http://joystick-api:3000` |
| `rgbwallet-api.erickbarcelos.com` | `http://rgbwallet-api:3000` |
| `secret-santa-api.erickbarcelos.com` | `http://secret-santa-api:3000` |

The config references a concrete tunnel id and credentials file path. Treat this as historical configuration and rotate or replace credentials before any reuse.

## Production Readiness Notes

Do not treat these deployment files as production-ready without review:

- API CORS settings are permissive.
- Some secrets and environment files are tracked in Git.
- Several packages use old dependency versions.
- There is no documented migration or rollback process.
- There is no CI/CD workflow in the current repository.
- There is no root service orchestration for databases and APIs.

## Deployment Checklist For Reuse

Before reusing any archived project:

1. Create fresh environment variables and secrets.
2. Install dependencies on a supported runtime.
3. Confirm the actual local script and output directory.
4. Replace historical public API URLs if needed.
5. Run a dependency and security review.
6. Add a real database startup and migration process.
7. Add CI checks if the project will become active again.
