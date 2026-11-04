# Project guidelines

## Translations

- The website supports Spanish (`es`) and English (`en`). Keep all user-facing content available and consistent in both languages.
- When adding or changing visible text, update both language entries in the relevant files under `frontend/src/app/i18n/` (for example, `homePage.ts`, `aboutPage.ts`, `navigation.ts`, `common.ts`, and `data.ts`).
- Do not add user-facing copy directly to a component when it belongs in the translation data. Use the existing translation structure and language-selection hooks.
- When adding a translation key, add it to both `es` and `en` so neither language is missing content.
- Before finishing, verify the corresponding Spanish and English text and run the frontend build with `npm --prefix frontend run build`.

## CV and LLM profile files

- When adding or changing information about Nacho's CV, professional experience, projects, education, skills, or contact details, update both `frontend/public/llms.txt` and `frontend/public/llms-full.txt` to keep the AI-readable profile consistent with the website.
- Keep `llms.txt` concise and point readers to `/llms-full.txt` for the complete profile.
