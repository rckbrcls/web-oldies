# Secret Santa API

> **Status:** Archived
> Express and Mongoose backend kept inside the historical `web-oldies` archive.

## Summary

- Archived Express/Mongoose API for the Secret Santa experiment.
- Solves participant CRUD and draw execution for the matching frontend.
- Main stack: Node.js 18.18.2, Express, Mongoose, dotenv, cors, nodemon, and Docker.
- Current status: archived; the `test` script is a placeholder.
- Technical value: keeps a small API example with route/controller/model separation and draw helper logic.

Backend API for the Secret Santa experiment. It provides user CRUD routes and a draw endpoint used by the matching frontend.

## Features

- User list, create, update, get-by-id, and delete routes.
- Secret-santa draw route at `/users/sortear`.
- Email validation helper.
- Draw helper in `src/utils/sortearAmigos.js`.
- MongoDB connection through Mongoose.

## Tech Stack

- Node.js 18.18.2
- Express
- Mongoose
- dotenv
- cors
- nodemon for development

## Getting Started

Use `.env.example` and `.nvmrc` as the archived environment references.

## Usage

Scripts from `package.json`:

- `npm run dev`

The `test` script is the default placeholder and does not run a real test suite.

## Project Structure

```text
backend/secret-santa-api/
├── server.js
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── Dockerfile
└── package.json
```

## License

ISC, as declared in `package.json`.
