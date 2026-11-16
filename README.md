# reetom

A static academic portfolio built with Astro, TypeScript and Tailwind CSS. Fonts are served locally.

## Develop

Install Node.js 24 with npm. From this directory run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. To type-check, build all five pages, and preview the production output:

```sh
npm run check
npm run build
npm run preview
```

The production files and sitemap are in `dist/`.

## Deploy to GitHub Pages

Put this project's contents at the root of the GitHub repository `ReetomGangopadhyay/reetomgangopadhyay.github.io`. Under **Settings → Pages → Build and deployment**, choose **GitHub Actions**. Push to `main`, or manually run **Deploy Astro to GitHub Pages** in Actions. The workflow installs from the lockfile, checks the source, builds, and deploys the contents of `dist/` to https://reetomgangopadhyay.github.io/. The canonical site URL is set in `astro.config.mjs`.

## Update the content

- **CV** — Add the actual PDF at `public/Reetom_Gangopadhyay_CV.pdf` and rebuild. The homepage automatically includes a link that opens the PDF in a new tab when the file exists.
- **Projects** — Add a record in `src/data/projects.ts`. Use a unique, stable URL fragment for its ID. Choose Research, AI Systems & Software, or Applied Machine Learning & Statistics for its category. Set its title, optional subtitle (empty string when unused), metadata, and paragraphs. The current projects list on the homepage points to these IDs.
- **Publications** — Append a record in `src/data/publications.ts` with its group, title, authors and venue or preparation status. Include a DOI link only when available. For BibTeX, place the verified record under `public/bibliography/` and set the entry's optional `bibtex` path to `/bibliography/filename.bib`.
- **Repertoire** — Edit the composer and works arrays in `src/data/repertoire.ts`.
- **Recordings** — Append a recording in `src/data/music.ts` with its work title, composer, and optional date and location. Use `media: { type: 'youtube', source: 'VIDEO_ID' }` for the performance's YouTube video ID. For audio, place the file in `public/audio/` and use `media: { type: 'audio', source: '/audio/filename.mp3' }`. The recordings section renders each entry automatically.
- **Performances** — Add real events to the performances array in the same file. Provide title, date, location, and optionally a program URL or the path to a PDF under `public/`.

Rebuild after editing content. Push updates to main to redeploy.
