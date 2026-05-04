# Electoral System API

> **Status:** Archived
> Flask and PostgreSQL backend kept inside the historical `web-oldies` archive.

This backend exposes electoral-domain data through Flask blueprints backed by PostgreSQL. It pairs with `frontend/electoral-system`.

## Responsibilities

- Create the Flask application in `app/__init__.py`.
- Register domain blueprints from `app/routes/`.
- Manage a PostgreSQL connection per request through `app/db.py`.
- Provide list and delete endpoints for electoral entities.
- Provide seed and cleanup function routes through `app/routes/bd_functions.py`.
- Store SQL schema, seed, and teardown scripts under `database/`.

## Stack

- Python
- Flask
- Flask-Cors
- psycopg2
- PostgreSQL
- Dockerfile for containerized execution

## Main Files

```text
backend/electoral-system-api/
|-- app/
|   |-- __init__.py
|   |-- db.py
|   `-- routes/
|-- database/
|   |-- DDL.sql
|   |-- DML.sql
|   `-- TEARDOWN.sql
|-- Dockerfile
|-- requirements.txt
`-- run.py
```

## Environment

`app/db.py` reads:

- `DB_HOST`
- `DB_NAME`
- `DB_USER`
- `DB_PASS`

No `.env.example` was found for this project. If variables are missing, the app uses legacy defaults from `app/db.py`; override them before using any real database.

## Database

`database/DDL.sql` creates tables for parties, offices, people, candidates, judicial processes, support teams, participants, donors, donations, and election results. It also defines triggers for yearly candidacy and support-team uniqueness.

`database/DML.sql` drops and creates the `electoralsystem` database and inserts seed data. `database/TEARDOWN.sql` drops tables.

## API Surface

The API registers routes for:

- `/`
- `/candidato`
- `/partido`
- `/cargo`
- `/pessoa`
- `/processo_judicial`
- `/equipe_apoio`
- `/participante_equipe`
- `/doador`
- `/doacao`
- `/pleito`
- `/limpar`
- `/alimentar`

See `docs/api.md` at the repository root for route details.

## Known Limitations

- No authentication or authorization layer was identified.
- CORS is configured with permissive origins.
- SQL cleanup and seed endpoints are exposed as routes.
- Database defaults are embedded in code as legacy fallbacks.
- Generated `__pycache__` and IDE metadata are tracked in this archived folder.
