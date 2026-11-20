(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // GitHub links everywhere
  document.querySelectorAll("[data-github]").forEach((a) => {
    a.href = GITHUB;
    if (a.textContent.includes("github.com/")) a.textContent = GITHUB.replace(/^https?:\/\//, "") + " ↗";
  });
  $("#year").textContent = new Date().getFullYear();

  const cover = (p) => p.cover || `assets/images/${p.id}.jpg`;
  const initials = (t) => t.trim()[0];

  // Image with graceful placeholder when the file isn't there yet
  const mediaHTML = (p) => `
    <div class="placeholder" style="--hue:${p.hue || "#e8572a"}">${esc(initials(p.title))}</div>
    <img src="${esc(cover(p))}" alt="${esc(p.title)}" loading="lazy" onerror="this.remove()">`;

  // Cards
  PROJECTS.forEach((p, i) => {
    const grid = $(`.grid[data-group="${p.group}"]`);
    if (!grid) return;
    const card = document.createElement("button");
    card.className = "card" + (p.wide ? " wide" : "");
    card.style.transitionDelay = `${(i % 3) * 80}ms`;
    const badge = p.video ? '<span class="badge">▶ Video</span>' : "";
    card.innerHTML = `
      <div class="media">${badge}${mediaHTML(p)}</div>
      <div class="card-meta">
        <span class="tag mono">${esc(p.tag)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
      </div>`;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".card").forEach((c) => io.observe(c));

  // Top bar border on scroll
  const bar = $(".topbar");
  addEventListener("scroll", () => bar.classList.toggle("scrolled", scrollY > 10), { passive: true });

  // Video helpers
  const embed = (url) => {
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (yt) return `<iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Video"></iframe>`;
    const vm = url.match(/vimeo\.com\/(\d+)/);
    if (vm) return `<iframe src="https://player.vimeo.com/video/${vm[1]}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Video"></iframe>`;
    return `<video src="${esc(url)}" controls playsinline preload="metadata" poster="${esc("")}"></video>`;
  };

  // Modal
  const modal = $("#modal");
  function openModal(p) {
    const media = $(".m-media", modal);
    media.innerHTML = p.video ? embed(p.video) : mediaHTML(p);
    const v = $("video", media);
    if (v) v.poster = cover(p);

    $(".m-gallery", modal)?.remove();
    if (p.images?.length) {
      const g = document.createElement("div");
      g.className = "m-gallery";
      g.innerHTML = [cover(p), ...p.images]
        .map((src) => `<img src="${esc(src)}" alt="" loading="lazy" onerror="this.remove()">`).join("");
      g.addEventListener("click", (e) => {
        if (e.target.tagName !== "IMG") return;
        media.innerHTML = `<img src="${e.target.src}" alt="${esc(p.title)}">`;
      });
      media.after(g);
    }

    $(".m-tag", modal).textContent = p.tag;
    $("#m-title").textContent = p.title;
    $(".m-text", modal).innerHTML = p.body || `<p>${esc(p.summary)}</p>`;
    $(".m-links", modal).innerHTML = (p.links || [])
      .filter((l) => l.url)
      .map((l, i) => `<a class="btn${i ? " ghost" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("");
    modal.showModal();
    modal.scrollTop = 0;
  }
  const close = () => modal.close();
  $(".close", modal).addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  modal.addEventListener("close", () => { $(".m-media", modal).innerHTML = ""; }); // stops video playback
})();
