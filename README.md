# BOOST — Project Page

Static project page for the **BOOST** paper, served via GitHub Pages at
`https://boost-robots.github.io`.

Built from the [Nerfies](https://github.com/nerfies/nerfies.github.io) template
(Bulma + carousel/slider, no build step). This is currently a **placeholder**
scaffold — structure and design are final, content is not.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Layout

```
index.html                  # the whole page (single file)
static/
  css/                      # bulma + custom (index.css) — infra, don't edit
  js/                       # carousel/slider/fontawesome (infra)
    index.js                #   navbar + bulma init (infra)
    experiments.js          #   tab + VLA carousel logic (infra)
    dataset-viewer.js       #   dataset viewer logic (infra)
    dataset.js              #   << EDIT: dataset viewer data (placeholder)
  images/                   # robot.png favicon + (TODO) figures
  videos/                   # (TODO) teaser.mp4, method.mp4
  dataset/                  # (TODO) per-source image/flow pairs + placeholder.png
  experiments/              # (TODO) result videos + placeholder.png
```

## Replacing placeholders with real content

Everything to swap is marked `TODO` / `placeholder` / `&mdash;`. Checklist:

1. **`index.html` — Hero**: title + subtitle, author names/links, affiliations,
   and the Paper / arXiv / Code / Hugging Face button `href`s.
2. **`index.html` — `<head>`**: `<title>`, `description`, `keywords`.
3. **Teaser**: add `static/videos/teaser.mp4`; point the `<video src>`/`poster` at
   real files; rewrite the TL;DR line.
4. **Method**: add `static/videos/method.mp4` + `static/images/architecture.png`.
5. **Abstract**: fill the four subsections (Motivation / Approach / Method / Results).
6. **Experiments (4 blocks)**: replace `&mdash;` table cells with numbers, the
   `Baseline 1/2`/`BOOST` labels, tab names, captions, and every
   `static/experiments/**/*.mp4` path. Adjust the number of carousel slides
   (`.vla-slide` + matching `.vla-dot`) as needed.
7. **Dataset Viewer**: edit `static/js/dataset.js` — set real `image`/`flow`
   paths and `language` per entry, and the source keys/labels (keep them in sync
   with the `#dataset-tabs` `data-dataset` values in `index.html`).
8. **Quick Start**: add `static/images/code_snippet.png` + model-card link.
9. **BibTeX**: fill `@article{boost2026, ...}`.

Until real media is added, missing videos simply show their `poster`
(the placeholder image); the dataset viewer falls back to `placeholder.png`.

## Deployment

GitHub Pages serves the root `index.html` from the `main` branch automatically.
Push to `main` and enable Pages (Settings → Pages → Source: `main` / root).
