# lnynano.com

Portfolio and CV site for Kiktichej Sintaosathapon (Lnynano).

Built with Astro, TypeScript and Tailwind CSS. The output is fully static and deploys to GitHub Pages through GitHub Actions.

- `/`: home page with hero, projects, skills, experience and education
- `/cv`: one-page A4 CV with a "Download PDF" button (uses the browser's print dialog)

## Run locally

Requires Node.js 22.22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build to dist/
npm run preview   # serve dist/
```

## Edit content

All content lives in **`src/data/profile.ts`**. Both `/` and `/cv` render from it, so edit it once and both pages update.

- Any text field takes either a plain string (same in both languages) or `{ en: '...', th: '...' }`.
- Add a project by appending an object to `projects`. Fields: `name`, `description`, `stack`, `live`, `code`, `image`.
- Add a job by appending to `experience`. `period` and `details` are optional.
- Skills are grouped. Each group has a `label` and a list of `items`.

UI labels (section headings, buttons) are in `src/i18n/ui.ts`.

Privacy rule for this repo: do not add a phone number, address, birthdate, student ID or GPA.

### Project screenshots

Save a screenshot at the path in the project's `image` field, for example `public/projects/normalday.webp`. A 16:10 image works best (1280×800 suggested). A placeholder shows until the file exists.

### Open Graph image

`public/og.png` (1200×630) is the preview image for links shared on social apps and chat. Replace it with any 1200×630 PNG.

### CV / PDF

Open `/cv` and click **Download PDF**. In the print dialog, choose **Save as PDF** with paper size **A4**, and turn off headers and footers. The PDF uses the language currently selected on the page. Keep the CV content short enough to fit on one page.

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup: in the GitHub repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.

Until a custom domain is set, the site is served at `https://lnynano.github.io/portfolio/`. The workflow reads the correct base path from `actions/configure-pages`, so links work there and at the domain root later. You never need to edit `base` by hand.

## Add the custom domain later

1. **DNS** (at your domain registrar or Cloudflare), for the apex `lnynano.com`:
   - `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional IPv6 `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www` pointing to `lnynano.github.io`
   - If you use Cloudflare, set these records to **DNS only** (grey cloud) until GitHub issues the certificate.
2. **GitHub**: in **Settings → Pages → Custom domain**, enter `lnynano.com` and save. Wait for the DNS check to pass, then tick **Enforce HTTPS**.
   - Recommended: verify the domain first under your account's **Settings → Pages → Verified domains**. This stops other accounts from claiming it.
3. **Optional**: add a file `public/CNAME` containing `lnynano.com`. Deploys through Actions don't need it (the Settings value is what counts), but it documents the domain inside the repo.
4. **Redeploy**: push a commit or run the workflow manually (**Actions → Deploy to GitHub Pages → Run workflow**). The next build picks up the new origin and root base path automatically, so canonical URLs and Open Graph tags will point to `https://lnynano.com`.

## Structure

```
src/
  data/profile.ts       all content (EN + TH)
  i18n/ui.ts            UI strings
  layouts/Base.astro    <head>, Open Graph tags, theme/language bootstrap
  components/           Header, toggles, ProjectCard, Section, T (bilingual text)
  pages/index.astro     home
  pages/cv.astro        printable CV
  styles/global.css     Tailwind, color tokens, print styles
public/                 favicon, og.png, project screenshots
```

Theme follows the system setting until the toggle is used. Language defaults to English. Both choices are saved in `localStorage`.
