# Video Project Manager

> **Status:** Archived
> React CRUD frontend experiment kept inside the historical `web-oldies` archive.

This frontend manages client and video-project screens. No matching backend was identified in the repository; development behavior uses MirageJS mocks when enabled by environment or development mode.

## Responsibilities

- Render login, home, client, video, edit, create, and not-found pages.
- Provide reusable form and list components for clients and videos.
- Use Redux Toolkit for local state.
- Start MirageJS mock behavior in development or when `REACT_APP_USE_MOCKS=true`.
- Centralize API calls in `src/services/api.js`.

## Stack

- React 18
- React Router 6
- Redux Toolkit
- MirageJS
- Axios
- styled-components
- Webpack
- react-scripts dependencies remain in the archived package

## Environment

Use `.env.example` as the reference:

```env
REACT_APP_USE_MOCKS=true
```

`src/App.js` starts the MirageJS server when `NODE_ENV === "development"` or `REACT_APP_USE_MOCKS === "true"`.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `dev` | `webpack serve --config webpack.config.cjs --mode development` |
| `build` | `webpack --config webpack.config.cjs --mode production` |
| `test` | `react-scripts test` |
| `eject` | `react-scripts eject` |

## Project Structure

```text
frontend/video-project-manage/
|-- mock/
|-- public/
|-- src/
|   |-- app/
|   |-- components/
|   |-- features/
|   |-- mirage/
|   |-- pages/
|   |-- services/
|   |-- App.js
|   `-- routes.js
|-- webpack.config.cjs
`-- package.json
```

## Development Notes

- `commitlint.config.js` and Commitizen config are present.
- `.husky/` exists in the project folder.
- `mock/db.json` provides archived mock data.

## Deployment Surface

`vercel.json` is present as historical deployment configuration. The repository also contains tracked `dist/` output.

## Known Limitations

- No real backend was identified.
- MirageJS behavior is development/mock oriented.
- The package mixes Webpack scripts with remaining `react-scripts` dependencies.
