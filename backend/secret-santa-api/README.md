# Secret Santa API

> **Status:** Archived
> Express and Mongoose backend for the Secret Santa experiment.

This API pairs with `frontend/secret-santa`. It stores participants, validates duplicate email usage, and returns draw assignments for a Secret Santa flow.

## Stack

- Node.js 18.18.2, as declared in `package.json`
- npm 8.19.4, as declared in `package.json`
- Express
- Mongoose
- MongoDB
- dotenv
- cors
- nodemon for development
- Dockerfile for containerized execution

## Main Files

```text
backend/secret-santa-api/
|-- server.js
|-- src/
|   |-- app.js
|   |-- config/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   `-- utils/
|-- Dockerfile
|-- package-lock.json
`-- package.json
```

## Environment

Use `.env.example` as the reference:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/secret-santa
```

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `dev` | `nodemon server.js --trace-warnings` |
| `test` | Placeholder script that exits with an error |

## API Surface

Routes are defined through `src/routes/index.js` and `src/routes/usersRoutes.js`:

- `GET /`
- `GET /users`
- `GET /users/sortear`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

See `docs/api.md` at the repository root for endpoint details.

## Data Model

`src/models/User.js` defines participant documents with:

- `id`
- `nome`
- `email`

The model disables the Mongoose version key.

## Known Limitations

- No authentication or authorization layer was identified.
- CORS is open through the default `cors()` middleware.
- Draw behavior depends on helper logic in `src/utils/sortearAmigos.js`.
- The test script is a placeholder and does not run a real test suite.
