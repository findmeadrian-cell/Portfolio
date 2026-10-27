/* =========================================================
   Adrian Reyhart portfolio: interactions
   1. Project data (edit this list to add your own work)
   2. Work grid + filters
   3. Case file pop-up
   4. Mobile menu, theme toggle, copy email, contact form, header
   5. Experience timeline (about page)
   6. Page transition between pages
   7. Home section dots
   Each part only runs on pages that have its elements.
   ========================================================= */

/* ---------- 1. Project data ----------
   To add a real image, put it in /images and set image: "images/your-file.jpg".
   Projects without an image show placeholder artwork.
   "tags" decide which filter buttons show a project.
   "featured: true" puts a project in the best 4 on the home page. */
const PROJECTS = [
  {
    id: "logo",
    title: "EIDORIAN Identity",
    tags: ["3D", "Brand"],
    size: "wide",
    featured: true,
    module: "3D Design · Coursework 1",
    summary: "A minimalist samurai combination mark for EIDORIAN, my design identity, modelled and rendered in Rhino.",
    facts: {
      Brief: "Design a logo and build it as a 3D model.",
      Tools: "Rhino, Photoshop",
      Idea: "A samurai in a red sun, with the katana as the I in EIDORIAN.",
      Materials: "Red lacquer, matte black, polished steel"
    },
    image: "",
    art: "sun"
  },
  {
    id: "magazine",
    title: "Magazine Design",
    tags: ["Print"],
    size: "",
    featured: true,
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
    id: "app",
    title: "Game Companion App",
    tags: ["UI/UX"],
    size: "half",
    featured: true,
    module: "UI/UX · Personal project",
    summary: "A mobile app that lets players track quests and loadouts, from user research and wireframes to a clickable prototype.",
    facts: {
      Brief: "Help players plan their next session away from the console.",
      Tools: "Figma",
      Process: "User interviews, user flows, wireframes, prototype, usability test",
      Status: "Placeholder: replace with your own project"
    },
    image: "",
    art: "phone"
  },
  {
    id: "hud",
    title: "Game HUD Kit",
    tags: ["Game", "UI/UX"],
    size: "half",
    module: "UI/UX · Personal project",
    summary: "Health, stamina and inventory UI designed to stay readable during fast combat.",
    facts: {
      Brief: "Design a HUD players can read at a glance.",
      Tools: "Figma, Illustrator",
      Status: "Placeholder: replace with your own project"
    },
    image: "",
    art: "hud"
  },
  {
    id: "character",
    title: "Character Sheet",
    tags: ["Game"],
    size: "",
    featured: true,
    module: "Personal project",
    summary: "A game hero shown as turnarounds, poses and colour tests.",
    facts: {
      Brief: "Design a hero that reads clearly at small sizes.",
      Tools: "Photoshop",
      Status: "Placeholder: replace with your own project"
    },
    image: "",
    art: "figure"
  },
  {
    id: "environment",
    title: "Level Concept",
    tags: ["Game", "3D"],
    size: "",
    module: "Personal project",
    summary: "A level concept from block-out to lit render.",
    facts: {
      Brief: "Design one playable level with a clear route.",
      Tools: "Blender",
      Status: "Placeholder: replace with your own project"
    },
    image: "",
    art: "level"
  },
  {
    id: "website",
    title: "This Portfolio",
    tags: ["Web", "UI/UX"],
    size: "",
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
  sun: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#111"/><use href="#samurai-mark" x="100" y="30" width="140" height="140"/></svg>`,
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
        <span class="panel-tag">${esc(p.tags.join(" · "))}</span>
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
  const mark = window.innerHeight * 0.65;            // the line reaches this point on screen
  const progress = Math.min(Math.max((mark - box.top) / box.height, 0), 1);
  timeline.style.setProperty("--progress", progress.toFixed(3));
  timeline.querySelectorAll(".tl-item").forEach(item => {
    const dot = item.querySelector(".tl-dot").getBoundingClientRect();
    item.classList.toggle("is-reached", dot.top < mark);
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
function goToTop() {
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = "";
}
goToTop();

// The loading name switches between English and Japanese with a red glitch.
// 英道理庵 is the kanji for Adrian (EIDORIAN); Reyhart is written in katakana.
const NAMES = ["ADRIAN REYHART", "英道理庵 レイハート"];
const transition = document.createElement("div");
transition.className = "page-transition is-entering";
transition.setAttribute("aria-hidden", "true");
transition.innerHTML = '<span class="page-transition-name"><span class="glitch" data-text="ADRIAN REYHART">ADRIAN REYHART</span></span>';
document.body.appendChild(transition);
const glitchText = transition.querySelector(".glitch");
let nameIndex = 0;
let glitchTimer = null;

function swapName() {
  nameIndex = (nameIndex + 1) % NAMES.length;
  glitchText.classList.add("is-glitching");
  setTimeout(() => {
    glitchText.textContent = NAMES[nameIndex];
    glitchText.dataset.text = NAMES[nameIndex];
  }, 120);
  setTimeout(() => glitchText.classList.remove("is-glitching"), 320);
}
function startGlitch() {
  if (!glitchTimer) glitchTimer = setInterval(swapName, 550);
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
  if (!isOtherPage || reduceMotion) return;
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
    goToTop();
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

/* ---------- Start ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
if (panelsEl) renderPanels();
