# Video Project Manager

> **Status:** Archived
> React frontend kept inside the historical `web-oldies` archive.

## Summary

- Archived React frontend experiment for managing clients and video projects.
- Solves CRUD-style pages for clients and videos with login, mock server behavior, routes, reusable forms, and Redux state.
- Main stack: React 18, React Router 6, Redux Toolkit, MirageJS, Axios, styled-components, Webpack, and remaining react-scripts dependencies.
- Current status: archived.
- Technical value: captures an early CRUD frontend with route-level pages, MirageJS mocks, and shared service code.

Frontend experiment for managing clients and video projects.

## Features

- Login page.
- Home page.
- Client registration, listing, and editing pages.
- Video registration and editing pages.
- Not-found page.
- Redux store.
- MirageJS mock server.
- API service wrapper.

## Tech Stack

- React 18
- React Router 6
- Redux Toolkit
- MirageJS
- Axios
- styled-components
- Webpack
- react-scripts dependencies remain in the archived package.

## Usage

Scripts from `package.json`:

- `npm run dev`
- `npm run build`
- `npm test`
- `npm run eject`

## Project Structure

```text
frontend/video-project-manage/
├── src/
│   ├── app/
│   ├── components/
│   ├── mirage/
│   ├── pages/
│   ├── routes.js
│   └── services/
├── webpack.config.cjs
└── package.json
```

## Lessons Learned

This archived app captures an early CRUD-style frontend with mock data, route-level pages, reusable forms, and Redux state.
