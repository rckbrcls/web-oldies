# Security Notes

This repository is archived and should not be treated as production-ready. The points below are based on concrete files and patterns found in the current codebase.

## High-Risk Findings

| Concern | Where found | Why it matters |
| --- | --- | --- |
| Tracked `.env` files | Several backend and frontend folders | Values committed to Git should be treated as exposed. Rotate secrets before reuse. |
| Open CORS | `backend/joystick-api/src/app.js`, `backend/rgbwallet-api/src/index.js`, `backend/secret-santa-api/src/app.js`, `backend/electoral-system-api/app/__init__.py` | APIs accept broad cross-origin access. |
| JWT fallback secret | `backend/joystick-api/src/services/auth-service.js` | The API falls back to an insecure development secret if `SALT_KEY` is missing. |
| Legacy default database credentials | `backend/electoral-system-api/app/db.py` | The Flask API has fallback PostgreSQL credentials. Override them for any real environment. |
| MD5 password hashing | `backend/joystick-api/src/controllers/user-controller.js` | MD5 is not appropriate for password storage. |
| Public API URLs in clients | Frontend service wrappers and `frontend/electoral-system/src/App.tsx` | Historical public endpoints may be stale, unavailable, or unsafe to rely on. |
| Tunnel credentials path and tunnel id | `backend/cloudflared/config.yml` | Treat tunnel identifiers and credential paths as sensitive deployment information. |

## Authentication And Authorization

### Joystick API

`backend/joystick-api` uses JWTs through `src/services/auth-service.js`. Routes use both `authorize` and `isAdmin` middleware. The token secret should always come from `SALT_KEY`; the fallback behavior is suitable only as an archival warning, not for reuse.

Passwords are hashed with `md5` in `src/controllers/user-controller.js`. Replace this with a slow password hashing algorithm before any real deployment.

### RGBWallet API

`backend/rgbwallet-api` has an auth middleware in `src/middleaware/auth.js` and protected admin routes. Admin login uses `bcryptjs` comparison for admin passwords in `src/controllers/sessionController.js`.

The API uses body-driven admin operations, including deletion by `_id` in the request body.

### Secret Santa API

No authentication or authorization layer was identified. Participant CRUD and draw endpoints are exposed by route registration.

### Electoral System API

No authentication or authorization layer was identified. The API includes delete routes and database seed/cleanup function routes.

## Data Handling

- MongoDB APIs rely on request body data with limited validation.
- The Flask API issues SQL commands through route handlers and uses psycopg2 connections stored in Flask `g`.
- The Electoral System database scripts are destructive: `DML.sql` drops and creates the database, and `TEARDOWN.sql` drops tables.
- Frontend apps store some auth/session data in browser storage depending on the project.

## Generated Artifacts And Repository Hygiene

The current Git history includes generated or machine-local artifacts such as:

- Frontend `build/` and `dist/` output.
- `.turbo` logs.
- Python `__pycache__`.
- IDE metadata under `backend/electoral-system-api/.idea`.

These are not direct runtime vulnerabilities by themselves, but they make audits noisier and can accidentally preserve stale output or local state.

## Safe Reuse Guidelines

Before turning any project in this archive into an active application:

1. Remove or rotate every tracked secret and environment value.
2. Replace fallback secrets with required environment validation.
3. Lock down CORS to explicit frontend origins.
4. Replace MD5 password hashing with a modern password hashing strategy.
5. Add request validation and consistent error handling.
6. Add authentication to unauthenticated write/delete/database-function routes if they remain exposed.
7. Reinstall and audit dependencies.
8. Rebuild deployment from fresh infrastructure credentials.
