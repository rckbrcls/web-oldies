# Alan Turing

> **Status:** Archived
> SolidJS educational frontend kept inside the historical `web-oldies` archive.

This is a static educational single-page site about Alan Turing and related computing-history topics. It does not have a local backend.

## Responsibilities

- Render an educational landing experience through section components.
- Load profile data from `src/data/profiles.ts`.
- Provide timeline, concepts, applications, resources, and legacy sections.
- Link to and embed a Google Forms questionnaire.

## Stack

- SolidJS
- TypeScript
- Tailwind CSS
- Webpack
- Vite configuration is present, but package scripts use Webpack for development and build.

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
frontend/alan-turing/
|-- public/
|-- src/
|   |-- components/
|   |-- data/
|   |-- App.tsx
|   `-- index.tsx
|-- index.html
|-- tailwind.config.js
|-- vite.config.ts
|-- webpack.config.cjs
`-- package.json
```

## External Services

`src/App.tsx` links to and embeds a Google Forms URL.

## Deployment Surface

`vercel.json` is present as historical deployment configuration. Confirm the build command and output directory before any reuse.

## Known Limitations

- No automated tests were identified.
- No backend integration exists.
- Active scripts use Webpack even though Vite files are present.
