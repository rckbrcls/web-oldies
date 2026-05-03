# Secret Santa Frontend

> **Status:** Archived
> React frontend kept inside the historical `web-oldies` archive.

## Summary

- Archived React frontend for the Secret Santa experiment.
- Solves participant registration, participant list display, and draw-trigger UI for the matching API.
- Main stack: React 18, React Router 6, Bootstrap, React Bootstrap, styled-components, Axios, EmailJS dependency, Webpack, and Vite config.
- Current status: archived; active scripts use Webpack.
- Technical value: preserves a compact event-style frontend with componentized cards, lists, API service wrapper, and asset usage.

Frontend for the Secret Santa experiment. It pairs with `backend/secret-santa-api` to register participants, list users, and trigger the draw flow.

## Features

- Home route.
- Participant registration card.
- User list and list item components.
- Draw component.
- API service wrapper.
- Gift image asset.

## Tech Stack

- React 18
- React Router 6
- Bootstrap / React Bootstrap
- styled-components
- Axios
- EmailJS dependency
- Webpack
- Vite dependency and config are present, but the active dev/build scripts use Webpack.

## Usage

Scripts from `package.json`:

- `npm run dev`
- `npm run build`
- `npm run serve`

## Project Structure

```text
frontend/secret-santa/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── webpack.config.cjs
├── vite.config.js
└── package.json
```
