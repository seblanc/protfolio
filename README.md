# me.lalalan.ch

Static site: plain HTML/CSS/JS, no build step. Upload the whole folder to your web root.

## What to fill in

1. **GitHub link**: `js/projects.js`, first line (`const GITHUB = ...`). It updates every link on the page.
2. **Bio**: `index.html`, in the `#bio` paragraph (hero) and the `#about` section.
3. **Project texts, links and videos**: `js/projects.js`.
4. **Images**: drop them in `assets/images/`, named after each project `id`:

| Project | File |
|---|---|
| NOSTROMO | `nostromo.jpg` |
| Half-Life 2 Voice AI NPC | `hl2-voice-npc.jpg` |
| Pool monitoring with AI | `pool-monitor.jpg` |
| Websites (cover) | `websites.jpg` (+ `websites-randoresto.jpg`, `websites-soutiengestuel.jpg`) |
| MATIS | `matis.jpg` |
| Steel tracking | `steel-tracking.jpg` |
| ULP emotion classifier | `ulp-emotion.jpg` |
| SpectroX | `spectrox.jpg` |
| Witness ULP imager | `witness-ulp.jpg` |

Until an image exists, a soft coloured placeholder is shown. Landscape images of about 1600 px wide work best.
To use another name or format (e.g. `.png`, `.webp`), add `cover: "assets/images/whatever.webp"` to the project.

5. **Videos** (ULP emotion classifier, SpectroX): put an `.mp4` in `assets/video/` and set
   `video: "assets/video/spectrox.mp4"`, or paste a YouTube/Vimeo link instead.
   Projects with a video get a "▶ Video" badge.

## Preview locally

```
python -m http.server 8000
```
then open http://localhost:8000.
