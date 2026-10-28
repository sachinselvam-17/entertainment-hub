# PLAYZONE (EntertainmentHub) - Professional Sports & Cinema YouTube Creator Website

> A high-performance, dark-mode, mobile-first static website built for YouTube creators publishing sports analysis, cinema reviews, bold opinions, fan challenges, and interactive games.
> 
> **Zero Budget Required (₹0)**: 100% vanilla HTML5, CSS3, and JavaScript. No backend servers, databases, node build tools, or paid API keys needed. Ready to deploy directly to **GitHub Pages**.

---

## 📸 Key Features & Sections

1. **Brand Identity ("PLAYZONE")**:
   - Modern broadcast & entertainment-magazine aesthetic with charcoal/black backgrounds (`#0A0B0E`), bold red accents (`#FF1E27`), and gold highlights (`#F59E0B`).
   - SVG vector branding (`logo.svg`, `favicon.svg`, custom themed SVG card covers).
   - Fluid typography using Google Fonts (`Outfit` and `Inter`).

2. **Full Working Navigation & Pages**:
   - **Home (`index.html`)**: Hero announcement, featured privacy-enhanced YouTube player, latest uploads grid, sports and cinema teasers, weekly challenge callout banner, and subscribe buttons.
   - **Sports Zone (`sports.html`)**: Category filters for Cricket, Football, Motorsports, and Other Sports. Reusable cards with reading modal viewer and video links.
   - **Cinema Zone (`cinema.html`)**: Filterable categories for Tamil Cinema, Movie Reviews, Trailers & Teasers, and Pop Culture/Box Office. Star rating badges, verdict tags, and detailed article modals.
   - **Opinions (`opinions.html`)**: Editorial layout for Match Opinions, Rankings/Tier Lists, Predictions, and Entertainment Debates, with explicit creator hot-take disclaimers.
   - **Fun & Challenges (`challenges.html`)**: **Three 100% working client-side interactive games**:
     - 🎯 *Sports & Cinema Multiple-Choice Quiz*: Filter by topic, instant answer feedback, score tracker, and end-of-game scorecard with replay.
     - ⏱️ *Random Challenge Generator*: Curated creator challenges with shuffle animation, countdown timer (Start/Pause/Reset), and funny forfeits.
     - ⚔️ *"Who Wins?" Comparison Game*: Side-by-side contender showdown, interactive voting, animated percentage bars, and creator verdict reveal.
   - **About (`about.html`)**: Creator bio, content pillars, transparent studio gear breakdown, and editorial ethics/anti-piracy standards.
   - **Contact (`contact.html`)**: Business inquiries, social media hub, FAQ section, and static-compatible email form (plus instructions for connecting Formspree/Web3Forms).
   - **Custom 404 (`404.html`)**: Branded "Transmission Lost" error page for static hosting.

3. **Central Content Command Center (`assets/js/content.js`)**:
   - Update your entire website from a single, beginner-friendly JavaScript file.
   - Change YouTube video IDs, article headlines, quiz questions, and social handles in seconds without modifying complex HTML.

---

## 🚀 Running The Website Locally

You can run this project locally on your computer using any of the following zero-install methods:

### Method 1: Using Python (Recommended)
Open a terminal in the project folder (`EntertainmentHub`) and run:
```bash
python -m http.server 8000
```
Then open your web browser and navigate to:
```
http://localhost:8000
```

### Method 2: Using Node.js
If you have Node.js installed, run:
```bash
npx serve .
```
Or with Node's built-in tools:
```bash
node -e "const http = require('http'), fs = require('fs'), path = require('path'); http.createServer((req, res) => { let f = '.' + (req.url === '/' ? '/index.html' : req.url); fs.readFile(f, (err, data) => { if (err) { res.writeHead(404); res.end('Not found'); } else { res.end(data); } }); }).listen(8000, () => console.log('Listening on http://localhost:8000'));"
```

### Method 3: Direct File Open
You can double-click `index.html` to open it in your browser. All internal links use relative paths (`sports.html`, `cinema.html`, etc.) so they will work immediately.

---

## 🌐 Publishing to GitHub Pages (Step-by-Step Guide)

Hosting on GitHub Pages is **100% free forever** for static websites.

### 📌 Publishing Root Directory
The **website publishing root** is this directory (`EntertainmentHub/`). 
The homepage **`index.html`** sits directly in the root directory along with all other pages (`about.html`, `sports.html`, `cinema.html`, `opinions.html`, `challenges.html`, `contact.html`, `404.html`), the `.nojekyll` configuration file, and the `assets/` folder.

All internal links and asset paths are strictly relative (e.g. `assets/css/style.css`, `sports.html`), ensuring that the website functions whether hosted at a custom domain root (`https://yourbrand.com/`) or under a GitHub repository subpath (`https://YOUR_USERNAME.github.io/EntertainmentHub/`).

---

### Deployment Method 1: Using Git Command Line (Recommended)

Open PowerShell or Terminal inside `c:\EntertainmentHub` and run:
```bash
git init
git add .
git commit -m "Fix GitHub Pages styling, asset paths, and missing images"
git branch -M main
git remote add origin https://github.com/sachinselvam-17/entertainment-hub.git
git push -u origin main --force
```

---

### Deployment Method 2: Web Browser Upload (Drag & Drop)

> ⚠️ **IMPORTANT**: In the GitHub web upload screen, clicking the *"choose your files"* button opens a file picker that only lets you select files, **not folders**. If you select files inside subfolders individually, GitHub strips their folder names and dumps them into the root repository folder!
>
> **To upload properly via the web browser:**
> 1. Open your repository at: **https://github.com/sachinselvam-17/entertainment-hub**
> 2. Click **Add file** > **Upload files**.
> 3. Open Windows File Explorer to `C:\EntertainmentHub`.
> 4. **Drag the entire `assets` folder** along with all HTML files directly into the GitHub drag-and-drop dropzone in your browser. (Modern browsers like Chrome and Edge will preserve the folder structure).
> 5. Wait for all files to be staged, then scroll down and click **Commit changes**.
>
> 💡 *Note: This project also includes root fallback copies (`style.css`, `main.js`, `logo.svg`, etc.) so even if files are flattened, every page and style continues to render seamlessly.*

---

### Verifying GitHub Pages Settings

1. On GitHub, navigate to **Settings** > **Pages**.
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Click **Save**.
4. Within 1–2 minutes, your website will be live and fully styled at:
   👉 **https://sachinselvam-17.github.io/entertainment-hub/**

---

### ⚙️ Why `.nojekyll` is Included
GitHub Pages runs a static site generator called Jekyll by default. The `.nojekyll` file at the root tells GitHub Pages to bypass Jekyll processing, ensuring all static assets, SVGs, and JavaScript modules are delivered directly and deployments build in under a minute.

---

## ✏️ Placeholders To Replace

Before launching publicly, update these items:

### 1. Founding Team & Creators (`assets/js/team.js`)
Edit `assets/js/team.js` to customize the four founding members:
- **Member 1 (Founder & Creative Director)**: Replace `"Your Name"`, bio, responsibilities, and social links.
- **Member 2 (Co-Founder & Editorial Lead)**: Replace `"Friend 1"`, bio, responsibilities, and social links.
- **Member 3 (Co-Founder & Operations Lead)**: Replace `"Friend 2"`, bio, responsibilities, and social links.
- **Member 4 (Co-Founder & On-Camera Talent Lead)**: Replace `"Friend 3"`, bio, responsibilities, and social links.

#### Adding Team Photos:
Drop four portrait photos (approx 3:4 aspect ratio) into `assets/images/team/`:
- `assets/images/team/member-1.jpg` (Founder & Creative Director)
- `assets/images/team/member-2.jpg` (Editorial Lead)
- `assets/images/team/member-3.jpg` (Operations Lead)
- `assets/images/team/member-4.jpg` (On-Camera Talent Lead)

*If any photo is missing or yet to be taken, the website automatically displays the neutral studio fallback avatar (`default-avatar.svg`) without breaking the card layout.*

---

### 2. Channel & Media Settings (`assets/js/content.js`)

| Setting | Location in `content.js` | What to Replace |
| :--- | :--- | :--- |
| **Brand Name** | `creatorProfile.brandName` | Change "PLAYZONE" when final brand name is decided |
| **YouTube Channel URL** | `creatorProfile.youtubeChannelUrl` | Replace `@PlayzoneOfficial` with your real channel handle |
| **Subscribe Link** | `creatorProfile.youtubeSubscribeUrl` | Replace with your channel's direct subscribe URL (`?sub_confirmation=1`) |
| **Business Email** | `creatorProfile.contactEmail` | Replace `contact@playzone-entertainment.demo` with your real email |
| **Social Links** | `creatorProfile.socialLinks` | Update links to your Instagram, X/Twitter, Discord, and Telegram |
| **Featured Video ID** | `featuredVideo.id` | Replace `dQw4w9WgXcQ` with your 11-character YouTube video ID |
| **Latest Videos Array** | `latestVideos` | Add your real video IDs, titles, and durations |

---

## 📁 Project File Structure

```
EntertainmentHub/
├── .nojekyll              # Disables Jekyll processing on GitHub Pages
├── 404.html               # Custom 404 error page
├── about.html             # Founding team, mission, gear setup, ethics
├── challenges.html        # 3 Interactive client-side games
├── cinema.html            # Cinema Zone with ratings & reviews
├── contact.html           # Business inquiries & static form
├── index.html             # Homepage with Hero & Video embed
├── opinions.html          # Hot takes, rankings & predictions
├── README.md              # Setup & deployment documentation
├── sports.html            # Sports Zone with category filters
└── assets/
    ├── css/
    │   └── style.css      # Design system & responsive styles
    ├── js/
    │   ├── content.js     # Central channel data hub
    │   ├── team.js        # Central founding team configuration
    │   └── main.js        # Navigation, modals & games logic
    └── images/
        ├── team/
        │   ├── default-avatar.svg # Neutral fallback avatar for team
        │   ├── member-1.jpg       # Founder photo (to be added)
        │   ├── member-2.jpg       # Friend 1 photo (to be added)
        │   ├── member-3.jpg       # Friend 2 photo (to be added)
        │   └── member-4.jpg       # Friend 3 photo (to be added)
        ├── cover-challenge.svg # Themed challenge illustration
        ├── cover-cinema.svg    # Themed cinema illustration
        ├── cover-opinion.svg   # Themed opinions illustration
        ├── cover-sports.svg    # Themed sports illustration
        ├── creator-avatar.svg  # Vector creator portrait
        ├── favicon.svg         # Site favicon
        └── logo.svg            # PLAYZONE broadcast logo
```

---

## 🛡️ Copyright & Ethical Guidelines

- **No live stream piracy**: Never upload or scrape copyrighted live match streams or studio theatrical footage.
- **Fair use commentary**: Reviews, editorial critiques, and trailer reactions fall under transformative commentary.
- **Original & royalty-free assets**: All images included in this repository are original SVGs created specifically for this project.
