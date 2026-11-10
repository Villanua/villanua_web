# Module 3: Hostinger Deployment

The current website deployment uses Hostinger's Node.js Git integration to build and serve the React/Vite frontend as a static site. The React app is in `frontend/`; the root Express server is a separate deployment option and is not used by this Hostinger configuration.

## Current Hostinger Settings

Configure the repository in hPanel with:

| Setting | Value |
| --- | --- |
| Repository | `villanua_web` |
| Branch | `update/alisys-update` |
| Root directory | `frontend` |
| Framework / structure | React |
| Build configuration | Custom |
| Node.js version | `22.x` (22.12 or newer) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Entry file | Leave empty (static frontend) |

The `frontend/package.json` file defines `build` as `vite build`. Since the root directory is `frontend`, do not prefix the build command with `cd frontend`.

The branch is the one currently configured in Hostinger; update this value here if the deployment branch changes.

## Deploying

1. Connect the GitHub repository through Hostinger's Node.js Git deployment flow.
2. Set the values in the table above. Confirm the root directory is `frontend`, not the repository root.
3. Deploy or push to the configured branch.
4. Review the build log and confirm that the `dist` output is served.
5. Test `/`, `/about`, and `/contact`, including direct navigation or refresh on each route.

Use the Node.js Git integration when Hostinger needs to install dependencies and run the Vite build. Hostinger's generic Git deployment only copies repository files to a directory; it does not run `npm run build`.

## Domain and Routing Checks

The app uses React Router with client-side routes. If a route works through in-app navigation but returns 404 when opened or refreshed directly, check the host's SPA fallback configuration.

If `www` works but the apex domain (without `www`) returns a Hostinger 404, check that both domain variants are assigned to the same website and configure the desired redirect in hPanel. This is separate from the Vite build.

## Other Deployment Options

The repository root also contains an Express server that serves `frontend/dist` and falls back to `index.html` for SPA routes. Use that approach only when deploying the root Node.js application, rather than the current static React configuration.

For local development and frontend architecture, see [Website Documentation](./04-website.md).
