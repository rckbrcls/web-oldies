# Electoral System Frontend

> **Status:** Archived
> SolidJS frontend for the Electoral System experiment.

This frontend pairs with `backend/electoral-system-api`. It fetches electoral-domain data, displays lists and filters, and calls delete or database utility endpoints from the Flask API.

## Responsibilities

- Fetch candidates, parties, offices, people, judicial processes, support teams, and donations.
- Filter and search candidate data.
- Delete records through API calls.
- Trigger database cleanup and seed actions through the header component.
- Keep domain TypeScript interfaces in `src/interfaces/Interfaces.ts`.

## Stack

- SolidJS
- TypeScript
- Tailwind CSS
- DaisyUI
- Webpack
- Vite configuration is present, but package scripts use Webpack for development and build.

## Environment

Use `.env.example` as the reference:

```env
VITE_API_URL=http://localhost:3000
```

`src/App.tsx` falls back to `https://electoral-api.erickbarcelos.com` when no build-time API URL is provided.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `start` | `webpack serve --config webpack.config.cjs --mode development` |
| `dev` | `webpack serve --config webpack.config.cjs --mode development` |
| `build` | `webpack --config webpack.config.cjs --mode production` |
| `serve` | `vite preview` |

## Project Structure

```text
frontend/electoral-system/
|-- src/
|   |-- components/
|   |-- interfaces/
|   |-- App.tsx
|   `-- index.tsx
|-- index.html
|-- tailwind.config.js
|-- vite.config.ts
|-- webpack.config.cjs
`-- package.json
```

## API Dependency

Primary API calls are in `src/App.tsx` and `src/components/Header.tsx`. The expected backend is `backend/electoral-system-api`.

## Deployment Surface

`vercel.json` is present as historical deployment configuration.

## Known Limitations

- No automated tests were identified.
- Delete and database utility actions rely on an API with no identified authentication layer.
- Active scripts use Webpack even though Vite files are present.
