# RGBWallet API

> **Status:** Archived
> Express and MongoDB backend kept inside the historical `web-oldies` archive.

## Summary

- Archived Express/MongoDB API for the RGBWallet experiment.
- Solves login and administrator user-management flows for the matching React frontend.
- Main stack: Node.js, Express, MongoDB driver, bcryptjs, body-parser, cors, and Docker.
- Current status: archived; the `test` script is a placeholder.
- Technical value: preserves a compact admin/auth API with centralized Mongo connection and route/controller folders.

Backend API for the RGBWallet experiment. It supports login and administrator user-management flows for the matching React frontend.

## Features

- Root health route.
- Login route.
- Auth middleware for protected administrator routes.
- Admin user listing, creation, update, deletion, balance reset, and balance increase routes.
- MongoDB connection layer.

## Tech Stack

- Node.js
- Express
- MongoDB driver
- bcryptjs
- body-parser
- cors

## Getting Started

Use `.env.example` as the environment reference before starting the API. The package includes `package-lock.json`, so npm is the documented package-manager baseline for this archived project.

## Usage

Scripts from `package.json`:

- `npm start`

The `test` script is the default placeholder and does not run a real test suite.

## Project Structure

```text
backend/rgbwallet-api/
├── src/
│   ├── connections/
│   ├── controllers/
│   ├── middleaware/
│   ├── routers/
│   └── index.js
├── Dockerfile
└── package.json
```

## License

ISC, as declared in `package.json`.
