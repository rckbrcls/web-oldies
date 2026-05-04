# Joystick API

> **Status:** Archived
> Express and MongoDB backend for the Joystick game-store experiment.

This API pairs with `frontend/joystick`. It supports game catalog operations, user registration, authentication, cart management, library management, checkout behavior, and admin-only game management.

## Stack

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens
- dotenv
- md5 password hashing in legacy controller code
- SendGrid dependency
- Dockerfile for containerized execution

## Main Files

```text
backend/joystick-api/
|-- bin/server.js
|-- src/
|   |-- app.js
|   |-- controllers/
|   |-- models/
|   |-- repositories/
|   |-- routes/
|   `-- services/
|-- Dockerfile
|-- package-lock.json
|-- package.json
`-- yarn.lock
```

## Environment

Use `.env.example` as the reference:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/joystick
SALT_KEY=replace-with-a-secure-secret
```

`MONGODB_URI` is required. `SALT_KEY` should always be set; otherwise `src/services/auth-service.js` falls back to an insecure development secret.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `start` | `node ./bin/server.js` |
| `dev` | `nodemon ./bin/server.js --trace-warnings` |

No real test script was identified.

## API Surface

Mounted route groups:

- `/`
- `/games`
- `/users`

`src/routes/order-route.js` exists but is not mounted by `src/app.js`.

See `docs/api.md` at the repository root for endpoint details.

## Data Models

Mongoose models:

- `Game`: title, id, description, price, genders, carousel, best, release.
- `User`: id, name, username, email, password, isAdmin, cart, games.
- `Order`: present in `src/models/order.js`, but the order route appears inactive.

## Known Limitations

- CORS is open to all origins.
- Passwords are hashed with MD5 in the archived controller code.
- JWT has an insecure fallback secret if `SALT_KEY` is missing.
- Admin access depends on token middleware and legacy token payload shape.
- Both `package-lock.json` and `yarn.lock` are present, so package-manager history is mixed.
