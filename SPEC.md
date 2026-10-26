# AMG Website: Specification

Website for Apostle Mtho Gwebu. Built from scratch by Mvuyisi (MvuZu Tech) using Claude Code.
Status: Draft v5, 26 Oct 2026 (visual prototype first; later phases connect it to real data and add the admin side).

---

## 1. Purpose and Audience

**Purpose:** A single, trustworthy online home for Apostle Mtho Gwebu: who he is, what he preaches, what he is called to do, and how to reach, book and follow him.

**Audience (in priority order):**
1. Church members and followers who want to connect, watch, listen and follow.
2. First-time visitors who heard of him and want to know who he is.
3. Event organisers, pastors and ministries who want to book him.
4. Partners and givers who want to support the work.
5. Site admins: non-technical people who keep the content up to date (see section 6).

**Success looks like:** A visitor on a phone understands who Apostle is within 10 seconds, can find his socials in one tap, and can send a booking request in under a minute. A non-technical admin can update any content from their phone without a developer or an AI tool.

---

## 2. Design Principles

- **Mobile-first.** Design for a 360-430px wide phone screen first, then scale up to tablet and desktop. Most visitors will be on phones, many on mobile data.
- **Look and feel:** Predominantly white, minimal and vibrant. Colourful pill-shaped buttons, big bold uppercase headings, and video as a key feature.
- **Visual reference:** the approved colour mockup, option G (white with blue and amber). Exact colour values live in `src/index.css`.
- **Typography:** Outfit for headings (weights 600 to 800), DM Sans for body text. Large tap targets (minimum 44px).
- **Speed:** Compress and lazy-load all images. Target Lighthouse mobile performance of 85 or higher. Keep it light for users on limited data.
- **Language:** English only for launch.
- **Accessibility:** Good contrast (at least 4.5:1 for body text, including white text on the coloured buttons), alt text on all images, keyboard-friendly navigation.
- **Tone of copy:** Faith-led, confident, warm, never cold or corporate.

---

## 3. Site Structure

### 3.1 Home
- Top bar: logo, a **Book Apostle** button that is always visible, and a menu button.
- Hero: name and title and a one-line tagline, with a welcome video (with a play button) beneath them, not just a portrait. The video only loads when play is tapped, to save mobile data.
- A strip of three big-number tiles: years in ministry, lives touched, places preached. They show only real figures that Apostle approves, and the strip stays hidden until they are supplied.
- Three entry points to The Man, The Message and The Mandate.
- Primary buttons: **Book Apostle** and **Follow / Watch**.
- Short featured strip: latest sermon and next event (hideable).
- Footer with socials, contact and quick links.

### 3.2 The Man (About)
Who Apostle Mtho Gwebu is.
- Short bio: upbringing, calling, journey, family and ministry in brief.
- Roles and titles (church, ministry, organisations).
- Timeline of key moments in his journey (simple, vertical, mobile-friendly).
- A personal quote or statement.
- A portrait photo.

### 3.3 The Message
The message of **Grace, Purpose and Mercy**.
- One short introduction to his message.
- Three pillars, each with its own block: **Grace**, **Purpose**, **Mercy**. For each: a short explanation, a key scripture and a signature quote.
- Link to sermons for deeper listening (when the Sermons section is active).

### 3.4 The Mandate
Moving people from **darkness to light**.
- Statement of the mandate and the scripture behind it.
- How this shows up in practice: preaching, discipleship, outreach, mentorship, community work (content to be confirmed).
- A "darkness to light" visual treatment: the Mandate sits in a full-width colour band that moves from dark navy to bright blue.
- Call to action: Join us / Contact / Partner.

### 3.5 Gallery
- Photo grid (2 columns on mobile), tap to open a full-screen viewer with swipe.
- Category filters: Ministry, Events, Community (optional).
- Source is phone photos from events. Photos are uploaded through the admin dashboard and compressed automatically before upload.
- Video clips can be embedded later from YouTube or social links.

### 3.6 Socials
- Dedicated section and footer icons linking to all of Apostle's official channels.
- Socials supplied by **Mr. Caleb**. Until received, the database is seeded with placeholder links that an admin replaces in the dashboard under **Socials & Contact**.
- Optional embedded latest post or video (after launch, v2).

### 3.7 Bookings
- Booking request form: name, organisation or church, email, phone/WhatsApp, event type (conference, church service, mentorship, interview, other), event date, location, expected attendance, message.
- **Submission flow:** form saves to the database and also gives the visitor a one-tap **Chat on WhatsApp** button with a pre-filled message. A notification email goes to the designated booking address.
- Clear note that this is a request, not a confirmed booking, with an expected response time.
- Spam protection (honeypot field plus simple rate limiting).
- Booking contact: WhatsApp number and email (to be supplied).
- Requests are viewed and marked as handled in the admin dashboard (section 6).

---

## 4. Recommended Additions

These are built from the start but can be **hidden with a single on/off switch in the admin dashboard** so the site launches clean and grows over time.

| Section | Why it matters | Launch state |
|---|---|---|
| **Sermons / Messages** | Core to his ministry. Embeds from YouTube/Spotify/podcast, searchable by topic. | Hidden until content is ready |
| **Upcoming Events** | Shows where Apostle will be ministering, with date, venue, details. | Hidden until first event is added |
| **Partner / Give** | Lets people support the work. Link to the church's existing giving method first, a payment integration later. | Hidden until details are confirmed |
| **Newsletter / WhatsApp Channel** | Captures followers directly instead of relying on social algorithms. | Hidden until channel is created |
| **Testimonies** | Social proof of lives changed. Needs consent from each person. | After launch (v2) |
| **Books / Resources** | Sell or share books, teachings and downloads. | After launch (v2) |
| **Contact / Find the Church** | Service times, address, map, contact details. | Include if the church wants it |
| **Press kit (for bookers)** | Short bio, hi-res photo, speaking topics, so organisers do not have to ask. A simple download on the Bookings page. | Recommended |
| **Prayer request** | Simple form on the site. Strong fit with a ministry website. | After launch (v2) |
| **Footer essentials** | Privacy policy and copyright line. A privacy note is important because forms collect personal data (POPIA). | Required |

**Also recommended (technical):**
- Social sharing previews (Open Graph image and description) so links look great on WhatsApp.
- Basic analytics (privacy-friendly, e.g. Plausible or Vercel Analytics).
- Favicon and installable-app icon.
- A custom 404 page.
- Booking requests are viewed in the admin dashboard (section 6), not the Supabase dashboard.

---

## 5. Technical Specification

| Area | Choice |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS (mobile-first utilities) |
| Routing | React Router. `/admin` is its own route; public pages are one page with sections or separate routes (decide at build) |
| Backend / DB | Supabase: database for all site content and booking requests, Storage for photos and files, Auth for admin logins |
| Admin | Password-protected `/admin` dashboard (section 6) |
| Hosting | Local development first, then Vercel |
| Source control | Own GitHub repository |
| Domain | To be connected after approval |
| Content | Stored in Supabase and edited at `/admin`. `src/config/site.js` keeps only technical settings that never change after launch |

**Feature switches:** stored in the Supabase `settings` table and switched on or off in the dashboard under **Sections on/off**: `showSermons`, `showEvents`, `showGive`, `showNewsletter`, `showTestimonies`, `showPressKit`. (They start in `site.js` in Phase 0 and move to the database in Phase 2.)

**Environment variables** (never committed to GitHub): Supabase URL and anon key. Provide a `.env.example`. The Supabase service role key is never used in the website code.

---

## 6. Maintainability and Admin Dashboard (No-Claude Requirement)

**Requirement:** After launch, a non-technical person must be able to keep the whole site up to date through a simple web dashboard. No AI tool, no code editing and no developer should be needed for everyday changes.

**Rule of thumb:** if a visitor can see it on the site, an admin can change it from the dashboard. The few exceptions are listed in 6.7.

### 6.1 The Dashboard
- Lives at `/admin` and is protected by a login (Supabase Auth, email and password).
- Not linked from the public site and hidden from search engines.
- Mobile-friendly: works as well on a phone as on a laptop. A simple left menu on larger screens; on a phone, a menu button opens the same list.
- Menu: **Overview**, **Pages** (Home, The Man, The Message, The Mandate, Press kit), **Sermons**, **Events**, **Gallery**, **Socials & Contact**, **Sections on/off**, **Bookings**, plus **View site** and **Sign out**.
- **Overview** shows how many new booking requests are waiting and links to the most common tasks.
- Plain forms: one clearly labelled field per item, short help text where needed, one **Save** button per form.
- Clear feedback in plain English: "Saved", or what went wrong and what to do next. Ask "Are you sure?" before anything is deleted. Warn before leaving a form with unsaved changes.
- Same minimum 44px tap targets as the public site.
- Changes show on the live site straight away (on the next page load). No redeploy is needed.

### 6.2 What an Admin Can Do

| Area | What the admin can do |
|---|---|
| **Home** | Edit the hero title, tagline, portrait photo and welcome video link. |
| **The Man** | Edit the bio, personal quote and portrait photo. Edit the three number tiles (years in ministry, lives touched, places preached); leave them blank to keep the strip hidden. Add, edit, delete and reorder roles and titles, and timeline moments. |
| **The Message** | Edit the introduction. For each of **Grace**, **Purpose** and **Mercy**: edit the explanation, key scripture (verse text and reference) and signature quote. |
| **The Mandate** | Edit the mandate statement and its scripture. Add, edit, delete and reorder the "how it shows up in practice" items. Edit the call-to-action text. |
| **Press kit** | Replace the press kit download. Edit the short press bio and speaking topics. |
| **Sermons** | Add, edit and delete sermons: title, date, topic, short description and the YouTube, Spotify or podcast link. |
| **Events** | Add, edit and delete events: title, date and time, venue, town or city, details and an optional link. Past events drop off the upcoming list automatically. |
| **Gallery** | Upload photos (several at once), add a short description (used as alt text) and a category, edit them and delete them. |
| **Socials & Contact** | Edit each social link (leave it blank to hide it), the booking email, WhatsApp number, booking response time, giving details, newsletter or WhatsApp channel link, and church contact details. |
| **Sections on/off** | Switch Sermons, Events, Give, Newsletter, Testimonies and Press kit on or off. |
| **Bookings** | See all booking requests, newest first, with new ones highlighted. Open one to see every detail, with one-tap WhatsApp, call and email buttons. Mark a request as handled (or back to new). Delete a request, for example when the person asks for their data to be removed (POPIA). |

- Reordering uses simple **Move up** / **Move down** buttons (no drag and drop), which work reliably on a phone.
- Later sections (Testimonies, Books, Prayer requests) follow the same rule: when they are built, they come with their own admin forms.

### 6.3 Where Content Lives
- All editable text, links, settings and switches are stored in Supabase tables. Photos and files are stored in Supabase Storage. Nothing an admin can edit is hard-coded in the site's code.
- **Default content from day one:** a seed file fills a new database with sensible starting content: Claude's draft copy (clearly marked for Apostle's approval), placeholder social links, and the section switches set to the launch states in section 4. The site works fully as soon as the seed has run.
- The database setup lives in the repo as plain SQL files (`supabase/schema.sql` for tables and security rules, `supabase/seed.sql` for default content), so the database can be rebuilt from scratch at any time.
- Photos are resized and compressed in the browser before they upload, so large phone photos never slow the site down or fill up storage.
- **Security:** every table has Row Level Security. Visitors can read published content and can send a booking request, but can never read booking requests. Only admins can change content or see bookings.
- Suggested tables (final design confirmed in Phase 2, kept deliberately plain):

| Table | Holds |
|---|---|
| `settings` | One row: contact details, booking response time, giving and newsletter links, section switches. |
| `socials` | One row per social channel. |
| `page_content` | One row per block of page text or page photo (for example the Home tagline or The Man bio). |
| `pillars` | Grace, Purpose and Mercy. |
| `roles`, `timeline`, `mandate_activities` | Short ordered lists for The Man and The Mandate. |
| `sermons`, `events`, `gallery_photos` | One row per item. |
| `booking_requests` | One row per request, with a status of new or handled. |
| `admins` | Email addresses allowed into the dashboard. |

### 6.4 Admin Accounts
- Admins sign in with an email address and password through Supabase Auth.
- Public sign-up is switched off in Supabase, so nobody can create their own account.
- An account only gets into the dashboard if its email address is also on the `admins` list. That is two locks instead of one, so a single wrong setting cannot let a stranger in.
- Every admin has the same rights (no separate permission levels in v1).
- The login page has a **Forgot password?** link that emails a reset link.

**Adding a new admin** (also in MAINTENANCE.md, with screenshots):
1. In the Supabase dashboard, go to **Authentication > Users > Add user > Send invitation** and enter their email address.
2. Go to **Table Editor > admins > Insert row**, enter the same email address and save.
3. They open the invitation email, choose a password, and sign in at `<site address>/admin`.

**Removing an admin:** delete their row from `admins`, then delete their user under **Authentication > Users**.

### 6.5 MAINTENANCE.md
A guide in the repo root, written for a non-technical person.
- **Style:** plain English, short numbered steps, one task per heading, and a short glossary for the few technical words that cannot be avoided (dashboard, deploy, backup). Screenshots are added once the dashboard is final.
- **Must cover:**
  - **Where everything lives:** the accounts behind the site (Vercel for hosting, Supabase for content and logins, GitHub for code, the domain provider, the email service), what each one does, and who holds each login.
  - **Signing in** and resetting a forgotten password.
  - **Every admin task** in 6.2, step by step.
  - **Adding and removing an admin.**
  - **Backing up:** how often (monthly, and before any big change), exporting each table to CSV from the Supabase Table Editor, downloading photos and files from Supabase Storage, where to keep the copies, what Supabase's own backups cover on the chosen plan, and how to get data restored.
  - **Redeploying:** when it is needed (rarely: content changes never need it), how to redeploy from the Vercel dashboard, and how to roll back to the previous working version.
  - **Troubleshooting:** cannot sign in; a change is not showing on the site; a photo will not upload; a section has disappeared; booking emails are not arriving; the site is down or shows an error (including a paused Supabase project); and who to contact when nothing works, with what information to send them.
- **Kept current:** any phase that changes the dashboard updates MAINTENANCE.md in the same commit.

### 6.6 Code Standards
The code must stay easy for any developer to pick up later.
- Simple and readable beats clever. A little repetition is fine if it keeps each file easy to follow.
- No clever abstractions: no generic form builders, page builders or custom state libraries. Each admin form is a plain, hand-written form.
- Each file starts with a short comment explaining what it is for. Non-obvious code gets a comment explaining why it is done that way.
- Clear names, small files, one component per file.
- All database calls live in `src/lib/`, with one plain, named function per action (for example `getEvents`, `saveEvent`, `deleteEvent`).
- Few dependencies: add a library only when it clearly saves work (for example React Router and the Supabase client).

### 6.7 What Still Needs a Developer
The dashboard edits content, not design. These stay as developer tasks:
- Changing the layout, colours or fonts, or adding a brand-new kind of section.
- The site name, description and image shown when a link is shared on WhatsApp or Facebook. Messaging apps read these before the page loads, so they are set once in the code at launch.
- Account-level settings in Vercel, Supabase, GitHub and the domain provider. MAINTENANCE.md covers the common ones, such as redeploying and backups.

### 6.8 Technical Notes
- The admin code only loads when someone opens `/admin`, so public visitors never download it and the site stays fast.
- Public pages load their content in as few requests as possible, show a simple loading state, and show a friendly message (not a blank page) if the database cannot be reached.
- A Vercel rewrite rule makes `/admin` and every other route work when refreshed or opened from a link.
- Invitation and password-reset links land on a **Set your password** page in the dashboard.
- Supabase's built-in email sender is only meant for testing and sends very few emails per hour. Before launch, connect a proper email service (the same one used for booking notifications) for invitations and password resets.

---

## 7. Build Workflow

1. Create a local project folder and initialise Git.
2. Add this `SPEC.md` to the folder root and commit it.
3. Create the GitHub repo and push.
4. Build in phases through Claude Code (below), committing after each phase, starting with Phase 1: the visual prototype.
5. **Prototype review.** The prototype runs on localhost only and is reviewed there, with the browser resized to phone width, then shown to Apostle and Mr. Caleb in person or by screen share.
6. **Approval gate.** No database or admin work (Phase 2 onwards) starts until the prototype is approved, and any visual changes they ask for are made before moving on. A shareable preview link (for example on Vercel) is optional and only added if they ask for one; otherwise Vercel and the domain are connected at launch.
7. Build the remaining phases, committing after each phase.
8. Review everything on localhost, on a phone on the same Wi-Fi, including the admin dashboard.
9. Apostle's review and approval round.
10. Link repo to Vercel, connect the domain, go live.
11. Hand over: create the real admin accounts and walk each admin through MAINTENANCE.md.

### Build Phases
- **Phase 0: Setup.** Project scaffold, Tailwind, folder structure, `site.js` config, theme tokens (colours, fonts). *Done 15 Oct 2026. The feature switches and contact details in `site.js` move to the database in Phase 2.*
- **Phase 1: Visual prototype.** Build every public page in the approved white, blue and amber design, mobile-first, with placeholder or draft copy marked for Apostle's approval: Home (top bar with the **Book Apostle** button, welcome video hero with a play button, number tiles, three entry cards), The Man, The Message, The Mandate, Gallery, Bookings, and the optional sections (Sermons, Events, Give, Newsletter, Press kit) shown for review. All content comes from simple local data files in `src/content/`, shaped like the future database tables so they can be swapped for database calls later. The booking form validates and shows a thank-you message but saves nothing. No admin, no login and no Supabase in this phase. Ends at the approval gate (Build Workflow step 6).
- **Phase 2: Database and default content.** Supabase project, tables, Row Level Security, Storage buckets, the `admins` list, `supabase/schema.sql` and `supabase/seed.sql` with default draft content, `.env.local`, and plain functions in `src/lib/` to read content. Slim `site.js` down to technical settings only.
- **Phase 3: Connect the core pages.** The pages and interface already exist from Phase 1; this phase only connects them to real data, with no redesign. Replace the local data files in `src/content/` with database calls, using the plain functions in `src/lib/`, for Home, The Man, The Message and The Mandate, plus the parts every page shares (the footer's socials and contact details, and the section switches).
- **Phase 4: Admin dashboard foundation.** Login, forgot and set password, protected `/admin`, dashboard layout (left menu, phone menu), Overview, and editors for Home, The Man, The Message, The Mandate (text, lists and portrait photos), Socials & Contact, and Sections on/off. Start MAINTENANCE.md with signing in, adding an admin and every editor built so far.
- **Phase 5: Gallery and Socials.** The public gallery and socials section already exist from Phase 1. This phase connects them to the database and adds the Gallery admin, which is where photos are saved: upload with compression, descriptions, categories, delete.
- **Phase 6: Bookings.** The booking form already exists from Phase 1. This phase connects it to the database and makes it save: the Supabase table, the WhatsApp button, the email notification and spam protection. It also adds the Bookings admin (list, details, mark as handled, delete).
- **Phase 7: Optional sections.** Sermons, Events, Give, Newsletter and Press kit already exist from Phase 1. This phase connects them to the database, sets each one to its launch state from section 4 (hidden until ready), and adds each one's admin form.
- **Phase 8: Polish.** Performance, SEO and share previews, accessibility, 404, privacy note. Check every admin screen on a phone.
- **Phase 9: Handover.** Finish MAINTENANCE.md: backups, redeploying, troubleshooting and the accounts list. Test it by following every step exactly as written, ideally with the future admin doing it. Run a real test backup.
- **Phase 10: Review and launch.** Approval, Vercel deploy, domain, real admin accounts, production email sending.

**Rule from Phase 4 on:** any phase that adds something visitors can see also adds its admin form and its MAINTENANCE.md steps in the same phase, so nothing ships that only a developer can change.

---

## 8. Content Still Needed

Claude drafts the copy; these inputs are needed from Mvuyisi, Apostle and Mr. Caleb.

- [ ] Apostle's full bio facts: background, calling, key dates, family and ministry details he is happy to share.
- [ ] His signature scriptures and quotes for Grace, Purpose and Mercy.
- [ ] How the Mandate is lived out: outreach, discipleship, community work.
- [ ] Official titles and any ministry or organisation names and logos.
- [ ] High-quality portrait photo, plus event photos for the gallery.
- [ ] All social media links (from Mr. Caleb).
- [ ] Booking WhatsApp number and email address; expected response time.
- [ ] Any speaking topics and a short press bio.
- [ ] Welcome video for the Home hero (a YouTube or similar link).
- [ ] Real figures for the three number tiles (years in ministry, lives touched, places preached), approved by Apostle.
- [ ] Brand assets: logo, if one exists. (Colours are settled: palette G, see section 10.)
- [ ] Confirmation of who approves the site (Apostle, his office, or Mr. Caleb).
- [ ] Names and email addresses of the people who will manage the site (admins).

---

## 9. Out of Scope for v1
- Multiple languages.
- Online payments and giving integration.
- Members' login area (the only login is the admin dashboard, for people who edit the site).
- Live streaming inside the site.
- Changing layout, colours or fonts from the dashboard (see 6.7).
- Different admin permission levels: every admin can do everything.
- Version history or undo for content edits (backups cover recovery).

---

## 10. Open Questions
1. Should the site be one long scrolling page with section anchors, or separate pages for each section? (Recommendation: one scrolling Home with the three M's, plus separate pages for Gallery and Bookings.)
2. ~~Does Apostle already have a church or ministry brand (logo, colours) to follow?~~ **Answered 26 Oct 2026:** the palette is "G: white with blue and amber". The visual reference is the approved colour mockup, option G.
3. Which email address should receive booking requests?
4. ~~Who will update the site after launch: Mvuyisi, or should there be a simple admin for others?~~ **Answered 15 Oct 2026:** non-technical admins, through the dashboard in section 6.
5. Which Supabase plan? The free plan can pause a project when the site is quiet and does not include the daily backups that paid plans offer. Check current limits before launch.
6. Which email service will send booking notifications and admin emails (invitations, password resets), and from which address?
7. Who gives the final approval on the prototype (Phase 1): Apostle, his office, or Mr. Caleb? Nothing moves past the approval gate (Build Workflow step 6) without it.
