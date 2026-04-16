# Social Intelligence & AI Lab — website

Astro + Tailwind static site, deployed to GitHub Pages at
<https://neowangkkk.github.io/sia-lab/>.

## Local development

```bash
cd sia-lab
npm install
npm run dev
```

Dev server runs at <http://localhost:4321/sia-lab/>.

## Editing content

All content lives in `src/content/`, as markdown files with YAML frontmatter:

- `projects/*.md` — one file per research project. Frontmatter fields: `title`, `cluster`
  (`empathy` | `agents` | `society`), `stage`, `oneLine`, `lastActivity`, `collaborators`, `venue`,
  `order`. Body is the full project description.
- `people/*.md` — one file per lab member. `name`, `role`, `affiliation`, `email`, `photo`,
  `links.{scholar,github,website}`, `order`.
- `news/*.md` — one file per news item. `date`, `title`. Body is the news text.
- `publications/*.json` — one file per publication (placeholder until BibTeX pipeline lands).

The content schema is enforced by `src/content/config.ts` — if a required field is missing, the
build will fail with a clear error.

## Pages

- `src/pages/index.astro` — home / hero + three threads + recent news
- `src/pages/research.astro` — the three research threads with projects grouped under each
- `src/pages/projects/index.astro` — flat list of all projects
- `src/pages/projects/[slug].astro` — dynamic project detail page
- `src/pages/people.astro`, `publications.astro`, `news.astro`, `contact.astro`

## Design

Minimal scaffolding only. Typography is Fraunces (display) + Inter (body) via Fontsource.
Colors are a restrained ink/paper/muted/rule palette defined in `tailwind.config.mjs`. The next
design pass (after picking reference sites together) will refine spacing, color, and hero
treatment.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with `withastro/action@v3`
and deploys via `actions/deploy-pages@v4`. Before the first deploy:

1. Create the repo on GitHub as `neowangkkk/sia-lab`
2. In repo settings → Pages → Build and deployment, set **Source: GitHub Actions**
3. Push `main`
