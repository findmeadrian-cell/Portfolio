# Adrian Reyhart Portfolio

A hand-coded portfolio website for Adrian's Portfolio Design module.

## Files
- `index.html`: home page (hero photo, bio, best 4 projects)
- `work.html`, `about.html`, `process.html`, `contact.html`: the other pages. The header and footer are copied on each page, so change them on all five.
- `css/style.css`: all styling, colour themes and responsive layout
- `js/main.js`: project data, filters, case file pop-ups, theme toggle, mobile menu
- `images/`: put your project images here

## Add your photo
The hero uses two portraits: `images/adrian-dark.jpg` (dark theme) and `images/adrian-light.jpg` (light theme). Replace them with wide 16:9 photos with you in the centre. If you change the backdrop, update `--hero-bg` in `css/style.css` to match it.

## Add your own project
Open `js/main.js` and edit the `PROJECTS` list. Set `image: "images/your-file.jpg"` to replace the placeholder art.

## Put it live with GitHub Pages
1. Create a free GitHub account and a new public repository (for example `eidorian-portfolio`).
2. Upload everything in this folder (Add file > Upload files).
3. Go to Settings > Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io/eidorian-portfolio/`.

## Security
- `_headers`: security headers that Cloudflare Pages sends with every page (a Content Security Policy, HTTPS only, no framing by other sites, and more). If you add a script, font or image from another website, add that website to the matching line in the Content Security Policy, or the browser will block it.
- `.well-known/security.txt`: tells people how to report a security problem. Update the email and renew the `Expires` date each year.
- `js/main.js`: project text is escaped before it goes on the page, the email is put together by script so spam bots can't collect it, and the contact form has a hidden spam trap.
- Replace `hello@eidorian.example` with your real email in the pages, `js/main.js` comments and `security.txt`.

## Learning journal (CW01)

`journal.html` holds one post per exercise for Weeks 01 to 05. Each post has Research, Process, Reflection and Outcome parts.
The posts are written in the JOURNAL list in the generator (or edit journal.html directly).
Check the dates on each post match your real class dates.
