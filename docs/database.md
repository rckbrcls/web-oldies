# Database

This archive contains both relational and document database experiments. There is no shared database layer across the repository.

## PostgreSQL: Electoral System API

Location: `backend/electoral-system-api`

Database scripts live in `database/`:

| File | Purpose |
| --- | --- |
| `database/DDL.sql` | Creates tables and triggers. |
| `database/DML.sql` | Drops and creates the `electoralsystem` database, then inserts seed data. |
| `database/TEARDOWN.sql` | Drops tables with cascading dependencies. |

### Tables

`database/DDL.sql` defines:

- `partido`: political parties.
- `cargo`: offices or positions.
- `pessoa`: people.
- `candidato`: candidates connected to `pessoa`, `partido`, `cargo`, and optionally another candidate as vice candidate.
- `processo_judicial`: judicial processes tied to candidates.
- `equipe_apoio`: support teams tied to candidates.
- `participante_equipe`: people participating in support teams.
- `doador`: donors.
- `doacao`: donations tied to donors and candidates.
- `pleito`: election results tied to offices and candidates.

### Triggers

`DDL.sql` also defines:

- `trg_check_unique_candidacy_per_year`: prevents the same person from being a candidate more than once in the same year.
- `trg_check_unique_support_team_per_year`: prevents the same person from joining more than one support team in the same year.

### Runtime Connection

`app/db.py` reads:

- `DB_HOST`
- `DB_NAME`
- `DB_USER`
- `DB_PASS`

If those variables are not set, the module uses legacy defaults. Override them before running the API against any non-disposable database.

## MongoDB: Joystick API

Location: `backend/joystick-api`

The API connects through Mongoose in `src/app.js` using `MONGODB_URI`.

### Models

`src/models/game.js` defines the `Game` model:

- `title`
- `id`
- `description`
- `price`
- `genders`
- `carousel`
- `best`
- `release`

`src/models/user.js` defines the `User` model:

- `id`
- `name`
- `username`
- `email`
- `password`
- `isAdmin`
- `cart`
- `games`

`src/models/order.js` defines an order model, but the current app does not mount `src/routes/order-route.js`, so the order API surface appears inactive.

## MongoDB: RGBWallet API

Location: `backend/rgbwallet-api`

The API connects through the MongoDB native driver in `src/connections/database.js`.

Environment variables:

- `MONGODB_URI`
- `MONGODB_DB`

Controller code uses:

- Database: `RGBWallet`
- Collection: `Usuarios`

Observed user fields in `src/controllers/admController.js` include:

- `name`
- `userName`
- `passwd`
- `month`
- `running`
- `week`
- `admin`
- `saldo`

No formal schema or migration system was identified for this API.

## MongoDB: Secret Santa API

Location: `backend/secret-santa-api`

The API connects through Mongoose using configuration under `src/config/`.

Environment variable:

- `MONGODB_URI`

`src/models/User.js` defines the participant model:

- `id`
- `nome`
- `email`

The model disables Mongoose's version key.

## Frontend-Only Data

Some frontends do not have a matching local database:

- `frontend/lojinha-simples` fetches product data from `https://fakestoreapi.com/products` and keeps cart/alert state in Redux.
- `frontend/video-project-manage` uses MirageJS mock behavior under `src/mirage/`.
- `frontend/alan-turing` is static and uses local content plus an embedded Google Forms URL.
