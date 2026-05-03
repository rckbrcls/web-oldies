# Lojinha Simples

> **Status:** Archived
> React storefront experiment kept inside the historical `web-oldies` archive.

## Summary

- Archived React storefront experiment for product browsing and checkout-like screens.
- Solves a small ecommerce UI with product routes, cart state, login/register screens, completed order, and not-found handling.
- Main stack: React 18, TypeScript, React Router, Redux Toolkit, React Query, Material UI, Webpack, and Vite config.
- Current status: archived.
- Technical value: shows early route organization, shared product cards, and Redux slices for cart/alert state.

Small ecommerce frontend with product browsing, cart flow, login/register pages, and order completion screens.

## Features

- Home, products, login, registration, cart, completed-order, and not-found routes.
- Product card component.
- Redux slices for cart and alert state.
- React Query dependency for data-fetching flows.
- Material UI dependency for component styling.

## Tech Stack

- React 18
- TypeScript
- React Router
- Redux Toolkit
- React Query
- Material UI
- Webpack

## Usage

Scripts from `package.json`:

- `npm run start`
- `npm run dev`
- `npm run build`
- `npm run lint`

## Project Structure

```text
frontend/lojinha-simples/
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── routes.tsx
│   └── main.tsx
├── webpack.config.cjs
├── vite.config.ts
└── package.json
```

## Lessons Learned

This archived app shows an early separation of routes, shared components, and Redux slices for a simple storefront flow.
