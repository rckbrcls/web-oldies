# Electoral System Frontend

> **Status:** Archived
> SolidJS frontend kept inside the historical `web-oldies` archive.

## Summary

- Archived SolidJS frontend for browsing and editing electoral-system data.
- Solves the UI side of the matching Flask API, including candidates, parties, offices, judicial processes, support teams, people, and donations.
- Main stack: SolidJS, TypeScript, Tailwind CSS, DaisyUI, Webpack, and Vite dependencies.
- Current status: archived; active scripts use Webpack.
- Technical value: shows typed interfaces, API-backed lists, search/filter behavior, and deletion handlers in an older frontend stack.

Frontend for browsing and editing electoral-system data from the matching Flask API.

## Features

- Fetches candidates, parties, offices, judicial processes, support teams, people, and donations.
- Search and filter flow for candidates.
- Delete handlers for several domain entities.
- Header component and typed domain interfaces.
- Default API URL configured in `src/App.tsx`, with Vite define support for overrides.

## Tech Stack

- SolidJS
- TypeScript
- Tailwind CSS
- DaisyUI
- Webpack
- Vite dependencies are present, but the active scripts use Webpack.

## Usage

Scripts from `package.json`:

- `npm run start`
- `npm run dev`
- `npm run build`
- `npm run serve`

## Project Structure

```text
frontend/electoral-system/
├── src/
│   ├── components/
│   ├── interfaces/
│   ├── App.tsx
│   └── index.tsx
├── webpack.config.cjs
├── vite.config.ts
└── package.json
```

## License

MIT, as declared in `package.json`.
