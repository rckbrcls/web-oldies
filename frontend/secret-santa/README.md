# Secret Santa Frontend

> **Status:** Archived
> React frontend for the Secret Santa experiment.

This frontend pairs with `backend/secret-santa-api`. It lets users register participants, view the participant list, edit or remove entries, and trigger a Secret Santa draw.

## Responsibilities

- Render the main Secret Santa page.
- Register participants through the API.
- Display participant cards and list items.
- Trigger draw behavior through the API.
- Use a shared Axios client from `src/services/api.js`.

## Stack

- React 18
- React Router 6
- Axios
- Bootstrap and React Bootstrap
- styled-components
- EmailJS dependency
- Webpack
- Vite configuration is present, but package scripts use Webpack for development and build.

## Environment

Use `.env.example` as the reference:

```env
VITE_API_URL=http://localhost:3000
```

`src/services/api.js` falls back to `https://secret-santa-api.erickbarcelos.com` when no API URL is provided.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `dev` | `webpack serve --config webpack.config.cjs --mode development` |
| `build` | `webpack --config webpack.config.cjs --mode production` |
| `serve` | `vite preview` |

## Project Structure

```text
frontend/secret-santa/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- pages/
|   |-- services/
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- vite.config.js
|-- webpack.config.cjs
`-- package.json
```

## API Dependency

The expected backend is `backend/secret-santa-api`.

## Deployment Surface

`vercel.json` is present as historical deployment configuration.

## Known Limitations

- No automated test script was identified.
- Active scripts use Webpack even though Vite files are present.
- Public API fallback URLs may be stale.
