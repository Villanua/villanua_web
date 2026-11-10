# Website Documentation

This guide documents the React website in `frontend/`. For its Hostinger build settings, see [Hostinger Deployment](./03-hostinger-deployment.md).

## Technology and Structure

- React and TypeScript, built with Vite.
- Source code is in `frontend/src/`.
- Public images and AI-readable profile files are in `frontend/public/`.
- The website is a client-side application using React Router.
- English and Spanish translations are maintained in `frontend/src/app/i18n/`.

## Pages and Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About and professional trajectory |
| `/contact` | Contact |

Routes are declared in `frontend/src/app/App.tsx`. The host must serve the SPA entry point for direct requests to these routes as well as for `/`.

## Local Development and Build

Run the frontend commands from the repository root:

```bash
npm --prefix frontend install
npm --prefix frontend run dev
npm --prefix frontend run build
```

Vite writes the production site to `frontend/dist/`. The same build is configured in Hostinger with `frontend` as the root directory, `npm run build` as the build command, and `dist` as the output directory.

## Content and Translations

- Home-page and contact copy: `frontend/src/app/i18n/homePage.ts`
- Professional experience and education data: `frontend/src/app/i18n/data.ts`
- Trajectory page content: `frontend/src/app/i18n/aboutPage.ts`
- Shared navigation and interface copy: the other modules under `frontend/src/app/i18n/`
- AI-readable profile: `frontend/public/llms.txt` and `frontend/public/llms-full.txt`

When changing user-facing text, keep the English and Spanish entries consistent. When changing CV information, update both AI-readable profile files as well.
