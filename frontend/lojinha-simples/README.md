# Lojinha Simples

> **Status:** Archived
> React storefront experiment kept inside the historical `web-oldies` archive.

This is a small ecommerce-style frontend. It does not have a local backend in this repository. Product data is fetched from the public Fake Store API, while cart and alert state are handled on the client.

## Responsibilities

- Render storefront, products, cart, login, registration, order-complete, and not-found pages.
- Fetch product data from `https://fakestoreapi.com/products`.
- Manage cart state through Redux Toolkit.
- Manage alert state through a local alert slice.
- Use shared product, navbar, and alert components.

## Stack

- React 18
- TypeScript
- React Router
- Redux Toolkit
- React Query
- Material UI
- Webpack
- Vite configuration is present, but package scripts use Webpack for development and build.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `start` | `webpack serve --config webpack.config.cjs` |
| `dev` | `webpack serve --config webpack.config.cjs` |
| `build` | `webpack --config webpack.config.cjs` |
| `lint` | `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0` |

## Project Structure

```text
frontend/lojinha-simples/
|-- public/
|-- src/
|   |-- components/
|   |-- interfaces/
|   |-- pages/
|   |-- store/
|   |-- App.tsx
|   |-- main.tsx
|   `-- routes.tsx
|-- index.html
|-- vite.config.ts
|-- webpack.config.cjs
`-- package.json
```

## External Services

- Fake Store API: `https://fakestoreapi.com/products`

## Deployment Surface

`vercel.json` is present as historical deployment configuration.

## Known Limitations

- No local backend or persistent database was identified.
- No automated test script was identified.
- Active scripts use Webpack even though Vite files are present.
