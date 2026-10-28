/**
 * ==============================================================================
 * PLAYZONE ENTERTAINMENT - FOUNDING TEAM CONFIGURATION
 * ==============================================================================
 * 
 * WELCOME CREATORS!
 * This file is the central command center for the four founding members.
 * 
 * HOW TO EDIT:
 * 1. To change names: Replace "Your Name", "Friend 1", "Friend 2", "Friend 3" below.
 * 2. To change roles or bios: Update the 'role', 'bio', or 'responsibilities' fields.
 * 3. To add your photos:
 *    - Place your 3:4 portrait photos into: assets/images/team/
 *    - Name them: member-1.jpg, member-2.jpg, member-3.jpg, member-4.jpg
 *    - If an image file is not found, the website automatically displays
 *      a clean neutral fallback avatar (assets/images/team/default-avatar.svg)
 *      without broken image icons or visual glitches!
 * 4. To update social media links: Add URLs into 'socialLinks'.
 * ==============================================================================
 */

// Self-contained neutral SVG avatar data URI (never breaks even if remote image files are missing)
const DEFAULT_AVATAR_DATA_URI = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" width="100%" height="100%">
  <defs>
    <linearGradient id="avatar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181C28"/>
      <stop offset="50%" stop-color="#121520"/>
      <stop offset="100%" stop-color="#0A0C12"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#FF1E27" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#FF1E27" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="300" height="400" fill="url(#avatar-bg)"/>
  <line x1="0" y1="100" x2="300" y2="100" stroke="#1F2433" stroke-width="0.8" opacity="0.4"/>
  <line x1="0" y1="200" x2="300" y2="200" stroke="#1F2433" stroke-width="0.8" opacity="0.4"/>
  <line x1="0" y1="300" x2="300" y2="300" stroke="#1F2433" stroke-width="0.8" opacity="0.4"/>
  <circle cx="150" cy="140" r="100" fill="url(#halo)"/>
  <path d="M50 400 C50 310 90 280 150 280 C210 280 250 310 250 400 Z" fill="#1C2130" stroke="#2B3245" stroke-width="1.5"/>
  <path d="M85 400 C85 330 115 315 150 315 C185 315 215 330 215 400 Z" fill="#242B3E" opacity="0.7"/>
  <path d="M130 240 L170 240 L162 290 L138 290 Z" fill="#2B3349"/>
  <ellipse cx="150" cy="165" rx="52" ry="68" fill="#2B3349" stroke="#3A4460" stroke-width="1.5"/>
  <g transform="translate(115, 330)" opacity="0.9">
    <rect x="0" y="0" width="70" height="24" rx="12" fill="#121520" stroke="#FF1E27" stroke-width="1"/>
    <text x="35" y="16" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" fill="#CBD5E1" text-anchor="middle" letter-spacing="1.5">CREATOR</text>
  </g>
  <text x="150" y="380" font-family="'Inter', sans-serif" font-weight="500" font-size="10.5" fill="#64748B" text-anchor="middle" letter-spacing="0.5">Photo placeholder</text>
</svg>`);

const TEAM_DATA = {
  sectionTitle: "Meet Our Founding Team",
  sectionSubtitle: "Four creators. One entertainment brand.",
  sectionDescription: "We are an independent group of four creators uniting sports analysis, cinema breakdowns, uncensored opinions, and interactive games under one digital roof.",

  // Central array of team members
  members: [
    {
      id: "member-1",
      name: "Your Name", // EDIT: Replace with your actual name
      role: "Founder & Creative Director",
      isInitiatingFounder: true, // Highlights leadership badge while maintaining team equality
      badgeLabel: "Founder & Creative Vision",
      photo: "assets/images/team/member-1.jpg",
      fallbackPhoto: "assets/images/team/default-avatar.svg",
      bio: "Leads the creative vision and brand direction, bringing together sports, cinema and entertainment through engaging digital content.",
      responsibilities: [
        "Establishing the brand vision and creative direction.",
        "Developing content concepts and the overall entertainment identity.",
        "Maintaining content quality and visual consistency.",
        "Guiding creative decisions across sports, cinema and challenges."
      ],
      socialLinks: {
        youtube: "https://www.youtube.com/@PlayzoneOfficial",
        twitter: "https://twitter.com/playzone_demo",
        instagram: "https://www.instagram.com/playzone_official_demo",
        linkedin: ""
      }
    },
    {
      id: "member-2",
      name: "Friend 1", // EDIT: Replace with Friend 1's name
      role: "Co-Founder & Editorial Lead",
      isInitiatingFounder: false,
      badgeLabel: "Co-Founder • Editorial",
      photo: "assets/images/team/member-2.jpg",
      fallbackPhoto: "assets/images/team/default-avatar.svg",
      bio: "Leads editorial research and content development, turning sports and cinema topics into engaging discussions and stories.",
      responsibilities: [
        "Sports and cinema research.",
        "Preparing scripts, opinions and discussion topics.",
        "Checking facts and verifying information before publication.",
        "Developing engaging content ideas."
      ],
      socialLinks: {
        youtube: "https://www.youtube.com/@PlayzoneOfficial",
        twitter: "https://twitter.com/playzone_demo",
        instagram: "https://www.instagram.com/playzone_official_demo",
        linkedin: ""
      }
    },
    {
      id: "member-3",
      name: "Friend 2", // EDIT: Replace with Friend 2's name
      role: "Co-Founder & Operations Lead",
      isInitiatingFounder: false,
      badgeLabel: "Co-Founder • Operations",
      photo: "assets/images/team/member-3.jpg",
      fallbackPhoto: "assets/images/team/default-avatar.svg",
      bio: "Coordinates the team's workflow, production schedules and planning to keep content creation organised and consistent.",
      responsibilities: [
        "Planning the content calendar.",
        "Coordinating shoots and team schedules.",
        "Organising tasks and production timelines.",
        "Tracking upload schedules and workflow."
      ],
      socialLinks: {
        youtube: "https://www.youtube.com/@PlayzoneOfficial",
        twitter: "https://twitter.com/playzone_demo",
        instagram: "https://www.instagram.com/playzone_official_demo",
        linkedin: ""
      }
    },
    {
      id: "member-4",
      name: "Friend 3", // EDIT: Replace with Friend 3's name
      role: "Co-Founder & On-Camera Talent Lead",
      isInitiatingFounder: false,
      badgeLabel: "Co-Founder • On-Camera",
      photo: "assets/images/team/member-4.jpg",
      fallbackPhoto: "assets/images/team/default-avatar.svg",
      bio: "Brings entertainment to the screen through engaging presentations, challenges, games and audience interaction.",
      responsibilities: [
        "Presenting videos and entertainment discussions.",
        "Hosting fun challenges, games and audience activities.",
        "Engaging with viewers on camera.",
        "Helping develop entertaining presentation formats."
      ],
      socialLinks: {
        youtube: "https://www.youtube.com/@PlayzoneOfficial",
        twitter: "https://twitter.com/playzone_demo",
        instagram: "https://www.instagram.com/playzone_official_demo",
        linkedin: ""
      }
    }
  ]
};

/**
 * Renders the four team cards into the container #founding-team-grid
 */
function renderFoundingTeam(containerId = "founding-team-grid") {
  const container = document.getElementById(containerId);
  if (!container || !TEAM_DATA || !Array.isArray(TEAM_DATA.members)) return;

  const cardsHtml = TEAM_DATA.members.map((member) => {
    const isFounder = member.isInitiatingFounder;
    const cardClass = isFounder ? "team-card team-card-lead" : "team-card";
    const badgeClass = isFounder ? "team-badge team-badge-founder" : "team-badge";

    // Build social links icons
    let socialsHtml = "";
    if (member.socialLinks) {
      const { youtube, twitter, instagram, linkedin } = member.socialLinks;
      const links = [];
      if (youtube && youtube !== "#") {
        links.push(`
          <a href="${youtube}" target="_blank" rel="noopener noreferrer" class="team-social-icon" aria-label="${member.name} on YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        `);
      }
      if (instagram && instagram !== "#") {
        links.push(`
          <a href="${instagram}" target="_blank" rel="noopener noreferrer" class="team-social-icon" aria-label="${member.name} on Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        `);
      }
      if (twitter && twitter !== "#") {
        links.push(`
          <a href="${twitter}" target="_blank" rel="noopener noreferrer" class="team-social-icon" aria-label="${member.name} on X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        `);
      }
      if (linkedin && linkedin !== "#") {
        links.push(`
          <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="team-social-icon" aria-label="${member.name} on LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        `);
      }
      if (links.length > 0) {
        socialsHtml = `<div class="team-socials-row">${links.join("")}</div>`;
      }
    }

    // Build responsibilities list
    const responsibilitiesHtml = (member.responsibilities || [])
      .map(
        (r) =>
          `<li class="team-resp-item"><span class="team-resp-bullet">✓</span><span>${r}</span></li>`
      )
      .join("");

    return `
      <article class="${cardClass}" id="${member.id}" aria-label="Team member: ${member.name}">
        <!-- Portrait Photo (3:4 ratio) with Fallback -->
        <div class="team-photo-wrap">
          <img 
            src="${member.photo}" 
            alt="Portrait of ${member.name}, ${member.role}" 
            class="team-photo"
            loading="lazy"
            onerror="this.onerror=null; this.src=DEFAULT_AVATAR_DATA_URI; this.parentElement.classList.add('is-fallback');"
          />
          <div class="team-photo-overlay"></div>
          <span class="${badgeClass}">${member.badgeLabel}</span>
        </div>

        <!-- Card Body -->
        <div class="team-body">
          <div class="team-header-block">
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
          </div>

          <p class="team-bio">${member.bio}</p>

          <!-- Core Responsibilities -->
          <div class="team-resp-section">
            <h4 class="team-resp-heading">Key Responsibilities</h4>
            <ul class="team-resp-list">
              ${responsibilitiesHtml}
            </ul>
          </div>

          <!-- Social Links / Footer -->
          <div class="team-footer">
            ${socialsHtml}
          </div>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = cardsHtml;
}

// Attach to window and auto-render (robust against DOMContentLoaded timing)
if (typeof window !== "undefined") {
  window.TEAM_DATA = TEAM_DATA;
  window.renderFoundingTeam = renderFoundingTeam;
  window.DEFAULT_AVATAR_DATA_URI = DEFAULT_AVATAR_DATA_URI;

  function initTeamRendering() {
    renderFoundingTeam("founding-team-grid");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTeamRendering);
  } else {
    initTeamRendering();
  }
}
