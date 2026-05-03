# RGBWallet Frontend

> **Status:** Archived
> React frontend kept inside the historical `web-oldies` archive.

## Summary

- Archived React frontend for the RGBWallet experiment.
- Solves login, protected administrator pages, user listing, create-user, and edit-user screens backed by `backend/rgbwallet-api`.
- Main stack: React 17, Create React App/react-scripts, React Router 5, Bootstrap, React Bootstrap, Axios, and CSS modules.
- Current status: archived.
- Technical value: preserves a small admin UI with `PrivateRoute` and centralized API service calls.

Frontend for the RGBWallet experiment. It pairs with `backend/rgbwallet-api` and provides login, administrator, user, create-user, and edit-user screens.

## Features

- Login route.
- Admin dashboard route.
- User route.
- Protected admin routes for creating and editing users.
- API client wrapper in `src/services/api.js`.
- Bootstrap-based UI dependencies.

## Tech Stack

- React 17
- Create React App / react-scripts
- React Router 5
- Bootstrap / React Bootstrap
- Axios
- CSS modules

## Usage

Scripts from `package.json`:

- `npm start`
- `npm run build`
- `npm test`
- `npm run eject`

## Project Structure

```text
frontend/rgbwallet/
├── src/
│   ├── pages/
│   ├── services/
│   ├── routes.js
│   └── App.js
└── package.json
```

## Architecture

The app uses React Router 5 and a small `PrivateRoute` wrapper. API calls are centralized in `src/services/api.js`, while page-level code lives under `src/pages/`.
