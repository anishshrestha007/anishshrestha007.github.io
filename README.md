# anishshrestha007.github.io

Personal portfolio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

Requires Node 22.23 or newer.

```bash
npm install
```

```bash
npm run dev
```

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Local dev server at `http://localhost:4321` |
| `npm run build`   | Production build into `dist/`               |
| `npm run preview` | Serve the production build locally          |
| `npm run check`   | Type-check `.astro` and `.ts` files         |

## Editing content

Most updates are content edits, not code changes.

| To change                         | Edit                                                    |
| --------------------------------- | ------------------------------------------------------- |
| Name, role, pitch, links, skills  | `src/data/site.ts`                                      |
| A job in the Experience timeline  | `src/content/jobs/*.md`                                 |
| A project card and its case study | `src/content/projects/*.md`                             |
| About and Contact copy            | `src/pages/index.astro`                                 |
| Colours, type scale, spacing      | `src/styles/tokens.css`                                 |
| Résumé                            | Replace `public/resume.pdf`                             |

Adding a Markdown file to `src/content/jobs` or `src/content/projects` adds it to the
site. The frontmatter fields are validated by the schemas in `src/content.config.ts`,
so a missing or mistyped field fails the build with a clear message. Set `draft: true`
on a project to keep it out of the build.

## Structure

```
src/
  content/           jobs and projects as Markdown
  content.config.ts  schemas for both collections
  data/site.ts       identity, links and skills
  layouts/Base.astro document head, fonts, global styles
  components/        Sidebar, ProjectCard, JobItem
  pages/             index, projects/[slug], 404
  styles/            tokens.css and global.css
public/              résumé, favicon, social image
```

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes it on every push to
`master`. It needs the repository's Pages source set to **GitHub Actions**
(Settings → Pages → Build and deployment → Source).
