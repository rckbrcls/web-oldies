# Joystick API

> **Status:** Archived
> Express and MongoDB backend kept inside the historical `web-oldies` archive.

## Summary

- Archived Express/MongoDB API for the Joystick game-store experiment.
- Solves game catalog, user/auth, cart, library, checkout, token refresh, and admin route flows for the matching frontend.
- Main stack: Node.js, Express, Mongoose/MongoDB, JWT, dotenv, SendGrid dependency, and Docker.
- Current status: archived; some routes exist but are not mounted.
- Technical value: shows an early layered Node API with controllers, repositories, services, JWT guards, and admin-only checks.

Backend API for the Joystick game-store experiment. It exposes game and user/cart flows for the matching frontend and persists data through MongoDB.

## Features

- Root health/version route.
- Game listing, lookup, creation, update, and deletion routes.
- User creation, authentication, token refresh, profile update, cart, library, checkout, and cart-cleaning routes.
- JWT authorization and admin-only route guards.
- Email-service and repository layers.

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens
- dotenv
- SendGrid dependency

## Getting Started

Use the environment variables described by `.env.example`. The app requires `MONGODB_URI`; startup fails when it is missing.

## Usage

Scripts from `package.json`:

- `npm start`
- `npm run dev`

The active app mounts:

- `/`
- `/games`
- `/users`

## Project Structure

```text
backend/joystick-api/
├── bin/server.js
├── src/
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.js
├── Dockerfile
└── package.json
```

## Technical Highlights

- `src/routes/order-route.js` exists, but `src/app.js` does not currently mount it.
- Debug logging reports whether `SALT_KEY` is configured without printing the secret.

## License

ISC, as declared in `package.json`.
