/*
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to change the projects shown on the site.
 * ─────────────────────────────────────────────────────────────
 *  GITHUB    : your GitHub profile URL (used everywhere on the page)
 *
 *  Per project:
 *   id       : short name; the cover image is assets/images/<id>.jpg
 *   group    : "personal" or "professional"
 *   title, tag, summary (card), body (modal, HTML allowed)
 *   images   : optional extra images shown in the modal gallery
 *   video    : optional — a local file ("assets/video/x.mp4")
 *              or a YouTube / Vimeo link
 *   links    : optional buttons [{ label, url }]
 *   wide     : true → card spans two columns on desktop
 *   hue      : colour of the placeholder shown while no image exists
 */

const GITHUB = "https://github.com/seblanc";

const PROJECTS = [
  /* ── Personal ─────────────────────────────────────────── */
  {
    id: "nostromo",
    group: "personal",
    title: "NOSTROMO",
    tag: "Personal · Hardware & software",
    summary: "A short one‑line description of NOSTROMO.",
    body: `
      <p>Describe NOSTROMO here: what it is, why you built it and what makes it interesting.</p>
      <ul><li>Key feature or technology</li><li>Another highlight</li></ul>`,
    links: [{ label: "Source on GitHub ↗", url: GITHUB }],
    wide: true,
    hue: "#3a6ea5",
  },
  {
    id: "hl2-voice-npc",
    group: "personal",
    title: "Half‑Life 2 Voice AI NPC",
    tag: "Personal · AI · Game modding",
    summary: "Talk to Half‑Life 2 characters with your voice and have them answer back.",
    body: `
      <p>A mod that turns Half‑Life 2 NPCs into conversational characters: your speech is
      transcribed, an AI model answers in character, and the reply is spoken back in game.</p>
      <p>Add details: models used, latency, how it hooks into the Source engine.</p>`,
    links: [{ label: "Source on GitHub ↗", url: GITHUB }],
    hue: "#e8572a",
  },
  {
    id: "pool-monitor",
    group: "personal",
    title: "Pool monitoring with AI",
    tag: "Personal · IoT · AI",
    summary: "Sensors and AI keeping an eye on the pool's water quality.",
    body: `
      <p>Describe the setup: which sensors, what the AI does (predictions, alerts,
      dosing advice…), and how you view the data.</p>`,
    links: [{ label: "Source on GitHub ↗", url: GITHUB }],
    hue: "#2aa0c8",
  },
  {
    id: "websites",
    group: "personal",
    title: "Websites",
    tag: "Personal · Web",
    summary: "randoresto and soutiengestuel — sites designed and built from scratch.",
    body: `
      <p><strong>randoresto</strong> — describe the site.</p>
      <p><strong>soutiengestuel</strong> — describe the site.</p>`,
    images: ["assets/images/websites-randoresto.jpg", "assets/images/websites-soutiengestuel.jpg"],
    links: [
      // Fill in the real addresses:
      { label: "randoresto ↗", url: "" },
      { label: "soutiengestuel ↗", url: "" },
    ],
    wide: true,
    hue: "#7a9a4a",
  },

  /* ── Professional ─────────────────────────────────────── */
  {
    id: "matis",
    group: "professional",
    title: "MATIS",
    tag: "Professional · Multispectral imaging",
    summary: "Multispectral imaging for art analysis and forensics.",
    body: `
      <p>MATIS captures images across multiple spectral bands to reveal what the eye
      can't see — underdrawings and retouching in artworks, and traces in forensic evidence.</p>
      <p>Add your role and the key technical points.</p>`,
    wide: true,
    hue: "#8a4fbf",
  },
  {
    id: "steel-tracking",
    group: "professional",
    title: "Steel tracking",
    tag: "Professional · Computer vision",
    summary: "Tracking steel products through production.",
    body: `
      <p>Describe the steel‑tracking system and your contribution.</p>`,
    links: [{ label: "Read the article ↗", url: "" /* article URL */ }],
    hue: "#6b7280",
  },
  {
    id: "ulp-emotion",
    group: "professional",
    title: "ULP emotion classifier",
    tag: "Professional · Edge AI",
    summary: "Classifying emotions on an ultra‑low‑power device.",
    body: `
      <p>Describe the classifier: hardware, model, power budget and accuracy.</p>`,
    video: "" /* e.g. "assets/video/ulp-emotion.mp4" or a YouTube link */,
    hue: "#d4a017",
  },
  {
    id: "spectrox",
    group: "professional",
    title: "SpectroX",
    tag: "Professional · Spectroscopy",
    summary: "Describe SpectroX in one line.",
    body: `
      <p>Describe SpectroX and your role in it.</p>`,
    video: "" /* e.g. "assets/video/spectrox.mp4" or a YouTube link */,
    hue: "#c2410c",
  },
  {
    id: "witness-ulp",
    group: "professional",
    title: "Witness ULP imager",
    tag: "Professional · Imaging",
    summary: "Describe the Witness ULP imager in one line.",
    body: `
      <p>Describe the imager: sensor, use case and what you built.</p>`,
    hue: "#0f766e",
  },
];
