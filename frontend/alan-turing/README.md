# Alan Turing

> **Status:** Archived
> SolidJS educational frontend kept inside the historical `web-oldies` archive.

## Summary

- Archived SolidJS educational site about Alan Turing and computing-history topics.
- Solves a static learning experience with profile data, timeline, concepts, applications, resources, legacy sections, and an embedded Google Form.
- Main stack: SolidJS, TypeScript, Tailwind CSS, Webpack, and Vite dependencies.
- Current status: archived; active scripts use Webpack.
- Technical value: preserves an early componentized educational frontend with data-driven sections.

Single-page educational site about Alan Turing and related computing-history topics.

## Features

- Introduction section.
- Profile sections driven by `src/data/profiles.ts`.
- Timeline, concepts, applications, educational resources, and legacy sections.
- Header and scroll button for navigation.
- Embedded Google Forms iframe.

## Tech Stack

- SolidJS
- TypeScript
- Tailwind CSS
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
frontend/alan-turing/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   └── index.tsx
├── webpack.config.cjs
├── vite.config.ts
└── package.json
```

## Technical Highlights

- Content is componentized by educational section.
- The Google Forms integration is embedded directly in `App.tsx`.
