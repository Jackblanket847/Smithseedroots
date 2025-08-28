# Smith Seed Roots — smithseedroots.shop

A clean, fast, static website scaffold for the Smith Seed Roots brand.

## What's inside
- **index.html** — modern, accessible landing page
- **src/** — styles, scripts, and brand assets
- **docs/** — easy-to-edit policy pages and content notes
- **.github/workflows/pages.yml** — automatic GitHub Pages deployment
- **CNAME** — pre-configured for `smithseedroots.shop`
- **robots.txt / sitemap.xml** — basic SEO hygiene
- **404.html** — helpful not-found page

## Quick start
1. Create a new GitHub repo (e.g., `smithseedroots.shop`).
2. Upload these files to the repo root.
3. Commit & push.
4. In GitHub, go to **Settings → Pages** and set Source to **GitHub Actions** (workflow is included).
5. Add a DNS CNAME record at your domain provider pointing `smithseedroots.shop` to `username.github.io` (replace with your username).

> If you prefer Pages from the `/docs` folder instead of Actions: move `index.html` and assets into `docs/`, and set Pages Source to **/docs** in repo settings.

## Customize
- Replace the SVG logo in `src/assets/logo.svg` with your final mark.
- Edit colors & typography in `src/styles.css` (all variables at the top).
- Update copy in `index.html` and legal pages in `docs/`.
- Add product images in `src/assets/` and reference them in `index.html`.

— Generated 2025-08-28
