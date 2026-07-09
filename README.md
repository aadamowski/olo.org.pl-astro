# olo.org.pl-astro

Astro-based rebuild of olo.org.pl

## Requirements

- Node.js >= 18.x
- npm (or compatible package manager)

## Install

Run from the project root:

- npm install

This installs Astro and all dependencies defined in package.json.

## Commands

- npm run dev
  - Starts the development server at http://localhost:4321
- npm run build
  - Builds a production-ready static site into dist/
- npm run preview
  - Serves the built site locally from dist/

## Notes

- Content (posts/notes) lives in src/content/ and is managed via Astro content collections.
- Static assets (images, etc.) are in public/.
