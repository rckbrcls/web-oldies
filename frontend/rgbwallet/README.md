# RGBWallet Frontend

> **Status:** Archived
> React frontend for the RGBWallet experiment.

This frontend pairs with `backend/rgbwallet-api`. It provides login, protected administrator screens, user listing, user creation, and user editing flows.

## Responsibilities

- Render login and protected admin routes.
- Store login state in browser storage.
- List users through the RGBWallet API.
- Create and edit user records.
- Trigger balance reset and balance increase actions.
- Centralize API calls in `src/services/api.js`.

## Stack

- React 17
- Create React App / react-scripts
- React Router 5
- Axios
- Bootstrap and React Bootstrap
- CSS modules

## Environment

Use `.env.example` as the reference:

```env
VITE_API_URL=http://localhost:3000
```

`src/services/api.js` falls back to `https://rgbwallet-api.erickbarcelos.com` when no API URL is provided.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `start` | `react-scripts start` |
| `build` | `react-scripts build` |
| `test` | `react-scripts test` |
| `eject` | `react-scripts eject` |

## Project Structure

```text
frontend/rgbwallet/
|-- public/
|-- src/
|   |-- assets/
|   |-- pages/
|   |-- services/
|   |-- App.js
|   `-- routes.js
|-- build/
`-- package.json
```

## API Dependency

The expected backend is `backend/rgbwallet-api`.

## Deployment Surface

`vercel.json` is present as historical deployment configuration. The repository also contains tracked CRA `build/` output.

## Known Limitations

- The frontend uses Create React App while other archive projects use Webpack directly.
- Public API fallback URLs may be stale.
- Auth behavior is tied to archived browser-storage and backend middleware patterns.
