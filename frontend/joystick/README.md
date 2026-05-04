# Joystick Frontend

> **Status:** Archived
> React frontend for the Joystick game-store experiment.

This frontend pairs with `backend/joystick-api`. It originated as a web coursework project for an online game store and includes customer flows, administrator screens, cart behavior, library behavior, profile editing, and checkout screens.

## Responsibilities

- Render public game browsing and detail pages.
- Provide login and sign-up routes.
- Protect profile, cart, and library pages with `RequireAuth`.
- Support cart and checkout flows.
- Provide administrator pages for creating, listing, and editing games.
- Centralize API calls in `src/services/api.js`.

## Stack

- React 18
- React Router 6
- Axios
- Bootstrap and React Bootstrap
- styled-components
- Webpack

## Environment

Use `.env.example` as the reference:

```env
VITE_API_URL=http://localhost:3000
```

`src/services/api.js` falls back to `https://joystick-api.erickbarcelos.com` when no API URL is provided.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `dev` | `webpack serve --config webpack.config.cjs --mode development` |
| `build` | `webpack --config webpack.config.cjs --mode production` |

## Main Routes

Routes are defined in `src/routes.js`:

- `/`
- `/login`
- `/cadastro`
- `/explorar`
- `/detalhe-jogo/:idJogo`
- `/cadastrar-jogo`
- `/lista-de-jogos`
- `/editar-jogo/:id`
- `/finalizar-compra`
- `/perfil`
- `/carrinho`
- `/biblioteca`

## Project Structure

```text
frontend/joystick/
|-- mockup/
|-- old/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- pages/
|   |-- providers/
|   |-- services/
|   |-- App.js
|   `-- routes.js
|-- webpack.config.cjs
`-- package.json
```

## Deployment Surface

`vercel.json` is present as historical deployment configuration. The repository also contains tracked `dist/` output.

## Known Limitations

- No automated test script was identified.
- Some route comments and historical coursework context remain in the archived code.
- Admin route protection depends on frontend routing and backend token behavior.
- Public API fallback URLs may be stale.
