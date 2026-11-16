/* =========================================================
   Adrian Reyhart portfolio: interactions
   1. Project data (edit this list to add your own work)
   2. Work grid + filters
   3. Case file pop-up
   4. Mobile menu, theme toggle, copy email, contact form, header
   5. Experience timeline (about page)
   6. Page transition between pages
   7. Home section dots
   8. Logo dot animation
   Each part only runs on pages that have its elements.
   ========================================================= */

/* ---------- 1. Project data ----------
   To add a real image, put it in /images and set image: "images/your-file.jpg".
   Projects without an image show placeholder artwork.
   "tags" decide which filter buttons show a project.
   "featured: true" puts a project in the best 4 on the home page.
   "page" (optional) links the pop-up to a full case study page. */
const PROJECTS = [
  {
    id: "logo",
    title: "Simply Creations 3D Logo",
    tags: ["3D", "Brand"],
    size: "wide",
    featured: false,
    module: "3D Design · Coursework 1",
    summary: "The Simply Creations logo, four people around a table, refreshed and built as a 3D model in Rhino.",
    facts: {
      Brief: "Design a logo and build it as a 3D model.",
      Tools: "Rhino, Illustrator",
      Idea: "Four figures around a table, each bringing a different idea.",
      Status: "3D renders coming soon"
    },
    image: "images/simply-creations-cover.jpg"
  },
  {
    id: "simply-creations",
    title: "Simply Creations",
    tags: ["Brand"],
    size: "",
    featured: true,
    module: "Logo design",
    summary: "The logo for the design studio I founded: four people around one table, each bringing a different idea, from sketch to final mark.",
    facts: {
      Brief: "A logo for a four-person design studio that feels simple, friendly and clear.",
      Tools: "Illustrator",
      Idea: "Four figures around a table, one colour for each member.",
      Deliverables: "Logo, colours, typography, five logo versions"
    },
    image: "images/simply-creations/case/card.jpg",
    page: "simply-creations.html"
  },
  {
    id: "voya",
    title: "VOYA Travel App",
    tags: ["UI/UX"],
    size: "half",
    featured: true,
    module: "UI/UX · Mobile app",
    summary: "A travel companion app that brings stays, flights, activities and transport into one place, from persona and user flow to 12 final screens.",
    facts: {
      Brief: "Let travellers discover, plan and book a trip in one app.",
      Tools: "Figma",
      Process: "Persona, sitemap, user flow, wireframes, style guide, final screens",
      Outcome: "12 high-fidelity screens"
    },
    image: "images/voya/cover.jpg",
    page: "voya.html"
  },
  {
    id: "codeplay",
    title: "CodePlay",
    tags: ["UI/UX"],
    size: "half",
    featured: false,
    module: "UI/UX · Gamification app",
    summary: "A gamified app that makes learning to code feel like a game: short lessons, coding challenges, XP, badges and a weekly leaderboard.",
    facts: {
      Brief: "Use gamification to help beginners keep learning to code.",
      Tools: "Figma",
      User: "Daniel, 21, a diploma student who gets bored with long tutorials",
      Features: "Learning path, challenges, XP and badges, leaderboard, friends"
    },
    image: "images/codeplay/cover.jpg",
    page: "codeplay.html"
  },
  {
    id: "oak-beech",
    title: "Oak & Beech",
    tags: ["Brand", "Print"],
    size: "",
    featured: true,
    module: "Brand identity",
    summary: "A calm, warm identity for a premium furniture seller: four leaves joined into a circle, a woodland palette and full brand guidelines.",
    facts: {
      Brief: "Create an identity that feels less like a showroom and more like home.",
      Tools: "Illustrator, Photoshop",
      Idea: "Two pairs of leaves, oak and beech, meeting like people around a table.",
      Deliverables: "Logo, colour system, pattern, stationery, signage"
    },
    image: "images/oak-beech/cover.jpg",
    page: "oak-beech.html"
  },
  {
    id: "looco-arabica",
    title: "Looco Arabica",
    tags: ["Brand", "Print"],
    size: "",
    featured: true,
    module: "Brand identity",
    summary: "A warm, refined identity for a modern Arabian café: layered arches like doorways and rising steam, navy and desert gold, and full brand guidelines.",
    facts: {
      Brief: "A café brand rooted in Arabian coffee culture, with a modern feel.",
      Tools: "Illustrator, Photoshop",
      Idea: "Layered arches that form an L, like a doorway and rising steam.",
      Deliverables: "Logo, colour system, pattern, cups and packaging, signage"
    },
    image: "images/looco-arabica/cover.jpg",
    page: "looco-arabica.html"
  },
  {
    id: "drift-coffee",
    title: "Drift Coffee Co.",
    tags: ["Brand", "Print"],
    size: "",
    featured: false,
    module: "Brand identity · Simply Creations",
    summary: "A third-wave café brand inspired by the calm of ocean waves: a round cup badge, warm espresso browns and a wave-like swirl pattern.",
    facts: {
      Brief: "My own concept brand for a calm, modern coffee shop.",
      Tools: "Illustrator, Photoshop",
      Studio: "Simply Creations (2021–2024)",
      Deliverables: "Logo, mood board, pattern, packaging, bag, poster"
    },
    image: "images/drift-coffee/cover.jpg",
    page: "drift-coffee.html"
  },
  {
    id: "pepperpoint",
    title: "Pepperpoint",
    tags: ["Print", "Brand"],
    size: "",
    featured: false,
    module: "Menu and social media · Simply Creations",
    summary: "A full menu, opening posts and social media for Pepperpoint Restaurant and Bar in Dompe, Sri Lanka, with some posts in Sinhala.",
    facts: {
      Client: "Pepperpoint Restaurant and Bar, Dompe, Sri Lanka",
      Tools: "Photoshop, Illustrator",
      Studio: "Simply Creations (2021–2024)",
      Deliverables: "Menu, opening post, food posts, anniversary post"
    },
    image: "images/pepperpoint/cover.jpg",
    page: "pepperpoint.html"
  },
  {
    id: "oriflame",
    title: "Oriflame Sri Lanka",
    tags: ["Print", "Brand"],
    size: "",
    featured: false,
    module: "Social media · Simply Creations",
    summary: "Social media posts for Oriflame cosmetics in Sri Lanka, promoting beauty workshops, offers and part-time business opportunities, in Sinhala and English.",
    facts: {
      Client: "Oriflame Sri Lanka (cosmetics)",
      Tools: "Photoshop, Illustrator",
      Studio: "Simply Creations (2023)",
      Deliverables: "12 posts: workshops, offers, recruitment"
    },
    image: "images/oriflame/cover.jpg",
    page: "oriflame.html"
  },
  {
    id: "freelance",
    title: "Freelance Designs",
    tags: ["Print", "Brand"],
    size: "",
    featured: false,
    module: "Freelance",
    summary: "Song covers, logos, a wedding invitation and festival greeting posts made for clients in Sri Lanka.",
    facts: {
      Clients: "Musicians, small businesses, clubs, families",
      Work: "Song covers, logos, invitation, greeting posts",
      Years: "2021–2024"
    },
    image: "images/freelance/cover.jpg",
    page: "freelance.html"
  },
  {
    id: "magazine",
    title: "Magazine Design",
    tags: ["Print"],
    size: "half",
    featured: false,
    module: "Print Media Design",
    summary: "An editorial magazine: cover, contents and feature spreads built on a strong grid.",
    facts: {
      Brief: "Design a magazine for print.",
      Tools: "InDesign, Photoshop",
      Pages: "Cover, contents, feature spread",
      Status: "In progress"
    },
    image: "",
    art: "grid"
  },
  {
    id: "website",
    title: "This Portfolio",
    tags: ["Web", "UI/UX"],
    size: "half",
    module: "Portfolio Design",
    summary: "A live, minimalist portfolio coded by hand in HTML, CSS and JavaScript.",
    facts: {
      Brief: "Design and build a live portfolio website.",
      Tools: "HTML, CSS, JavaScript, GitHub Pages",
      Features: "Filterable work, case file pop-ups, two themes, mobile layout"
    },
    image: "",
    art: "code"
  }
];

/* ---------- Placeholder artwork (simple SVG shapes) ---------- */
const ART = {
  grid: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#ececea"/><rect x="90" y="24" width="70" height="152" fill="#fff"/><rect x="160" y="24" width="70" height="152" fill="#fff"/><rect x="100" y="36" width="50" height="60" fill="#111"/><g fill="#999"><rect x="100" y="106" width="50" height="3"/><rect x="100" y="114" width="50" height="3"/><rect x="100" y="122" width="36" height="3"/><rect x="170" y="36" width="50" height="3"/><rect x="170" y="44" width="50" height="3"/></g><rect x="170" y="60" width="50" height="10" fill="#d81f26"/></svg>`,
  phone: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#ececea"/><rect x="128" y="20" width="64" height="170" rx="10" fill="#111"/><rect x="134" y="30" width="52" height="150" rx="4" fill="#fff"/><rect x="140" y="40" width="30" height="6" fill="#111"/><rect x="140" y="56" width="40" height="22" fill="#d81f26"/><g fill="#ccc"><rect x="140" y="86" width="40" height="8"/><rect x="140" y="100" width="40" height="8"/><rect x="140" y="114" width="40" height="8"/></g></svg>`,
  hud: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#111"/><rect x="24" y="24" width="150" height="10" fill="#333"/><rect x="24" y="24" width="110" height="10" fill="#d81f26"/><rect x="24" y="40" width="100" height="6" fill="#333"/><rect x="24" y="40" width="70" height="6" fill="#fff"/><g fill="none" stroke="#fff" stroke-width="2"><rect x="196" y="144" width="28" height="28"/><rect x="232" y="144" width="28" height="28"/><rect x="268" y="144" width="28" height="28"/></g></svg>`,
  figure: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#ececea"/><g fill="#111"><circle cx="120" cy="80" r="22"/><path d="M96 180 Q98 112 120 108 Q142 112 144 180Z"/></g><g fill="none" stroke="#111" stroke-width="2"><circle cx="200" cy="80" r="22"/><path d="M176 180 Q178 112 200 108 Q222 112 224 180Z"/></g></svg>`,
  level: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#1c1c1c"/><circle cx="230" cy="70" r="26" fill="#d81f26"/><path d="M0 200 L90 110 L150 160 L220 100 L320 180 L320 200Z" fill="#111"/><path d="M0 200 L60 150 L130 190 L0 200Z" fill="#2a2a2a"/></svg>`,
  code: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#ececea"/><rect x="40" y="30" width="240" height="140" fill="#fff" stroke="#111" stroke-width="2"/><rect x="40" y="30" width="240" height="14" fill="#111"/><rect x="56" y="62" width="100" height="10" fill="#111"/><rect x="56" y="80" width="70" height="4" fill="#999"/><rect x="56" y="140" width="40" height="12" fill="#d81f26"/><rect x="176" y="62" width="88" height="90" fill="#ddd"/></svg>`
};

/* Security: escape text before putting it into HTML, so a stray < or " in the
   project data can never turn into code on the page */
function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
}

function artFor(project) {
  if (project.image) {
    return `<img src="${esc(project.image)}" alt="${esc(project.title)}" loading="lazy">`;
  }
  return (ART[project.art] || ART.sun) + `<span class="placeholder-note">placeholder art</span>`;
}

/* ---------- 2. Work grid + filters ---------- */
const panelsEl = document.getElementById("panels");

function renderPanels() {
  // data-show="featured" on the home page, "all" on the work page
  const list = panelsEl.dataset.show === "featured" ? PROJECTS.filter(p => p.featured) : PROJECTS;
  panelsEl.innerHTML = list.map(p => `
    <button class="panel ${esc(p.size)}" type="button" data-id="${esc(p.id)}">
      <span class="panel-art">
        ${artFor(p)}
        <span class="panel-tags">${p.tags.map(t => `<span class="panel-tag" data-tag="${esc(t.toLowerCase())}">${esc(t)}</span>`).join("")}</span>
      </span>
      <span class="panel-body">
        <span class="panel-title">${esc(p.title)}</span>
        <span class="panel-module">${esc(p.module)}</span>
      </span>
    </button>
  `).join("");
}

function applyFilter(filter) {
  panelsEl.querySelectorAll(".panel").forEach(panel => {
    const p = PROJECTS.find(x => x.id === panel.dataset.id);
    const matches = filter === "all" || p.tags.some(t => t.toLowerCase() === filter);
    panel.hidden = !matches;
  });
}

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => {
      c.classList.remove("is-active");
      c.setAttribute("aria-pressed", "false");
    });
    chip.classList.add("is-active");
    chip.setAttribute("aria-pressed", "true");
    applyFilter(chip.dataset.filter);
  });
});

/* ---------- 3. Case file pop-up ---------- */
const dialog = document.getElementById("casefile");

function openCaseFile(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById("cf-art").innerHTML = artFor(p);
  document.getElementById("cf-meta").textContent = p.module;
  document.getElementById("cf-title").textContent = p.title;
  document.getElementById("cf-summary").textContent = p.summary;
  document.getElementById("cf-facts").innerHTML = Object.entries(p.facts)
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  // Projects with their own case study page get a button to open it
  let link = document.getElementById("cf-link");
  if (!link) {
    link = document.createElement("a");
    link.id = "cf-link";
    link.className = "btn btn-solid cf-link";
    link.textContent = "View full case study";
    document.getElementById("cf-facts").after(link);
  }
  link.hidden = !p.page;
  if (p.page) link.href = p.page;
  dialog.showModal();
}

if (panelsEl && dialog) {
  panelsEl.addEventListener("click", e => {
    const panel = e.target.closest(".panel");
    if (panel) openCaseFile(panel.dataset.id);
  });
  document.getElementById("cf-close").addEventListener("click", () => dialog.close());
  // Close when clicking the dark backdrop
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
}

/* ---------- 4a. Mobile menu ---------- */
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("site-nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "Close" : "Menu";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = "Menu";
}));

/* ---------- 4b. Theme toggle: dark / light ---------- */
const root = document.documentElement;
const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

function currentTheme() {
  return root.dataset.theme || (prefersLight.matches ? "light" : "dark");
}
function syncThemeButton() {
  root.classList.toggle("is-light", currentTheme() === "light");
}
try {
  const saved = localStorage.getItem("ar-theme");
  if (saved) root.dataset.theme = saved;
} catch (e) { /* storage blocked: use system theme */ }
syncThemeButton();
prefersLight.addEventListener("change", syncThemeButton);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = currentTheme() === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("ar-theme", next); } catch (e) {}
  syncThemeButton();
});

/* ---------- 4c. Email: built here so spam bots can't read it from the HTML ---------- */
const emailEl = document.getElementById("email-text");
if (emailEl && emailEl.dataset.user) {
  emailEl.textContent = emailEl.dataset.user + "@" + emailEl.dataset.domain;
}
document.getElementById("copy-email")?.addEventListener("click", () => {
  const email = document.getElementById("email-text").textContent;
  const status = document.getElementById("copy-status");
  navigator.clipboard.writeText(email)
    .then(() => { status.textContent = "Email copied."; })
    .catch(() => {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById("email-text"));
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      status.textContent = "Email selected. Press Ctrl+C or Cmd+C to copy it.";
    });
});

/* ---------- 4d. Contact form (checks the fields; no server yet) ---------- */
document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("form-status");
  // Spam trap: people never see the "website" field, so only bots fill it in
  if (form.elements.website && form.elements.website.value) {
    form.reset();
    return;
  }
  // Ignore messages that are only spaces
  ["name", "email", "message"].forEach(n => { form.elements[n].value = form.elements[n].value.trim(); });
  if (!form.checkValidity()) {
    status.textContent = "Please fill in your name, a valid email and a message.";
    return;
  }
  status.textContent = "Thanks! This form isn't connected to an inbox yet, so please email me directly for now.";
  form.reset();
});

/* ---------- 4e. Header: transparent at the top, solid after scrolling ---------- */
const header = document.querySelector(".site-header");
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20 || nav.classList.contains("is-open"));
}
window.addEventListener("scroll", updateHeader, { passive: true });
navToggle.addEventListener("click", updateHeader);
updateHeader();

/* ---------- 5. Experience timeline: the red line fills as you scroll ---------- */
const timeline = document.getElementById("timeline");

function updateTimeline() {
  const box = timeline.getBoundingClientRect();
  const mark = window.innerHeight * 0.6;             // an entry lights up when its dot passes this point
  const dots = [...timeline.querySelectorAll(".tl-dot")].map(dot => {
    const r = dot.getBoundingClientRect();
    return r.top + r.height / 2;                      // centre of each dot on screen
  });
  const first = dots[0], last = dots[dots.length - 1];
  // The grey line runs from the first dot to the last dot
  timeline.style.setProperty("--line-start", (first - box.top) + "px");
  timeline.style.setProperty("--line-length", (last - first) + "px");
  // The red fill reaches each dot at the same moment that entry lights up
  const progress = Math.min(Math.max((mark - first) / (last - first), 0), 1);
  timeline.style.setProperty("--progress", progress.toFixed(3));
  timeline.querySelectorAll(".tl-item").forEach((item, i) => {
    item.classList.toggle("is-reached", dots[i] <= mark);
  });
}

if (timeline) {
  timeline.classList.add("is-animated");
  window.addEventListener("scroll", updateTimeline, { passive: true });
  window.addEventListener("resize", updateTimeline);
  updateTimeline();
}

/* ---------- 6. Page transition: a layer slides between pages ---------- */
// Always open a page at the top, even when coming back with the Back button
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
// Every page opens at the top. Some browsers (and the preview) try to restore
// the old scroll position after the page has loaded, so this runs again on
// DOMContentLoaded and load, unless the visitor has already started scrolling
// or the link points at a section (#about-me, #step-02, ...).
let userScrolled = false;
["wheel", "touchstart", "keydown"].forEach(type =>
  window.addEventListener(type, () => { userScrolled = true; }, { once: true, passive: true }));
function goToTop(force) {
  if (!force && (userScrolled || (location.hash && location.hash !== "#top"))) return;
  const root = document.documentElement;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  requestAnimationFrame(() => { root.style.scrollBehavior = ""; });
}
goToTop();
document.addEventListener("DOMContentLoaded", () => goToTop());
window.addEventListener("load", () => { goToTop(); setTimeout(() => goToTop(), 60); });

// The loading name switches between English, Japanese and Chinese with a soft fade.
// Each new page carries on from the last name shown.
const NAMES = ["ADRIAN REYHART", "エイドリアン・レイハート", "阿德里安·雷哈特"];
const NAME_LANGS = ["en", "ja", "zh"];   // lets the CSS tidy spacing per script
let nameIndex = 0;
try { nameIndex = (parseInt(sessionStorage.getItem("nameIndex"), 10) || 0) % NAMES.length; } catch (e) {}
const transition = document.createElement("div");
transition.className = "page-transition is-entering";
transition.setAttribute("aria-hidden", "true");
transition.innerHTML = '<span class="page-transition-name"><span class="glitch"></span></span>';
document.body.appendChild(transition);
const glitchText = transition.querySelector(".glitch");
glitchText.textContent = NAMES[nameIndex];
glitchText.lang = NAME_LANGS[nameIndex];
let glitchTimer = null;

function swapName() {
  nameIndex = (nameIndex + 1) % NAMES.length;
  try { sessionStorage.setItem("nameIndex", nameIndex); } catch (e) {}
  glitchText.classList.add("is-glitching");
  setTimeout(() => {
    glitchText.textContent = NAMES[nameIndex];
    glitchText.lang = NAME_LANGS[nameIndex];
  }, 220);
  setTimeout(() => glitchText.classList.remove("is-glitching"), 240);
}
function startGlitch() {
  if (!glitchTimer) glitchTimer = setInterval(swapName, 600);
}
function stopGlitch() {
  clearInterval(glitchTimer);
  glitchTimer = null;
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Arriving: show the name switching once, then slide the layer up and away
startGlitch();
setTimeout(() => {
  transition.classList.remove("is-entering");
  transition.classList.add("is-leaving-up");
  setTimeout(stopGlitch, 450);
}, reduceMotion ? 0 : 700);

// Leaving: cover the page, then open the next one
document.querySelectorAll("a[href]").forEach(link => {
  const href = link.getAttribute("href");
  const isOtherPage = href && !href.startsWith("#") && !href.startsWith("http") && !href.startsWith("mailto:");
  if (!isOtherPage || reduceMotion || link.hasAttribute("download")) return;   // file downloads skip the transition
  link.addEventListener("click", e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;   // let "open in new tab" work
    e.preventDefault();
    transition.classList.remove("is-leaving-up");
    transition.classList.add("is-covering");
    startGlitch();
    setTimeout(() => { window.location.href = link.href; }, 650);
  });
});

// Coming back with the browser's Back button: start at the top and clear the layer
window.addEventListener("pageshow", e => {
  if (e.persisted) {
    goToTop(true);
    transition.classList.remove("is-covering");
    transition.classList.add("is-leaving-up");
    stopGlitch();
  }
});

/* ---------- 7. Home section dots: highlight the section on screen ---------- */
const dots = document.querySelectorAll(".section-dots a");
if (dots.length && "IntersectionObserver" in window) {
  const seen = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      dots.forEach(d => d.classList.toggle("is-active", d.getAttribute("href") === "#" + entry.target.id));
    });
  }, { threshold: 0.55 });
  dots.forEach(d => {
    const target = document.querySelector(d.getAttribute("href"));
    if (target) seen.observe(target);
  });
}

/* ---------- 8. Journal: show where the reader is ----------
   The contents list highlights the week and post on screen, a red rail
   beside it fills as you read, and a thin bar runs along the top. */
const toc = document.querySelector(".journal-toc");
if (toc) {
  const links = [...toc.querySelectorAll("a[href^='#']")];
  const subLinks = links.filter(a => !a.classList.contains("toc-week"));
  const progressText = document.createElement("p");
  progressText.className = "toc-progress";
  toc.insertBefore(progressText, toc.children[1]);
  const bar = document.createElement("div");
  bar.className = "read-bar";
  bar.setAttribute("aria-hidden", "true");
  bar.innerHTML = "<span></span>";
  document.body.appendChild(bar);
  const list = document.querySelector(".journal-posts");

  function updateToc() {
    const line = window.innerHeight * 0.35;          // the post crossing this line is "being read"
    let current = null;
    subLinks.forEach(a => {
      const el = document.querySelector(a.getAttribute("href"));
      if (el && el.getBoundingClientRect().top <= line) current = a;
    });
    if (!current) current = subLinks[0];
    let passed = true;
    subLinks.forEach(a => {
      a.classList.toggle("is-current", a === current);
      a.classList.toggle("is-read", passed && a !== current);
      if (a === current) passed = false;
      if (a === current) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
    });
    const week = current.closest("ul")?.previousElementSibling;
    toc.querySelectorAll(".toc-week").forEach(w => w.classList.toggle("is-current", w === week));
    const idx = subLinks.indexOf(current) + 1;
    progressText.innerHTML = `Reading <b>${idx}</b> of ${subLinks.length}`;

    // How far through the journal (0 to 1)
    const box = list.getBoundingClientRect();
    const read = Math.min(Math.max((line - box.top) / (box.height - window.innerHeight * 0.5), 0), 1);
    toc.style.setProperty("--read", read.toFixed(3));
    bar.style.setProperty("--read", read.toFixed(3));

    // Keep the highlighted item visible when the contents list itself scrolls
    if (toc.scrollHeight > toc.clientHeight) {
      const r = current.getBoundingClientRect(), t = toc.getBoundingClientRect();
      if (r.top < t.top + 20 || r.bottom > t.bottom - 20) toc.scrollTop += r.top - t.top - t.height / 2;
    }
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateToc(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", updateToc);
  updateToc();
}

/* ---------- Start ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
if (panelsEl) renderPanels();
