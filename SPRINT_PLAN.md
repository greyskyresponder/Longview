# LvSG Digital Operations Platform -- Sprint Development Plan

**Based on:** Digital Operations Platform Architecture v1.0
**Tech Stack:** Next.js + Sanity CMS + Vercel + Mapbox + Algolia
**Methodology:** Decision-gated, milestone-driven sprints
**Progression Model:** Each sprint advances only when its Definition of Done is met and the Decision Gate is cleared. No sprint begins until its prerequisites are satisfied. Phase transitions require formal stakeholder review.

---

## How This Plan Works

**This is not a calendar.** Sprints do not advance on a schedule -- they advance on decisions.

- **Definition of Done (DoD):** The measurable criteria that must ALL be true before a sprint can be marked complete.
- **Decision Gate:** The stakeholder decision required to advance to the next sprint. Some gates are simple (developer verifies technical criteria). Others require Roy's review, content approval, or a go/no-go call.
- **Prerequisites:** What must exist before a sprint can begin. If a prerequisite is blocked, the sprint cannot start -- surface the blocker, don't work around it.
- **Phase Gates:** Major decision points between phases. These are formal reviews where the platform is evaluated against operational requirements before committing resources to the next phase.

**The sprint numbers indicate sequence, not time.** Sprint 5 follows Sprint 4 because it depends on Sprint 4's output -- not because a calendar says so.

---

## PHASE 1: FOUNDATION

**Phase Objective:** Launch a credible, government-ready digital operations platform with core Company, Capabilities, Operations, Government, and Contact sections.

**Phase 1 Entry Decision:** Stakeholder confirms tech stack selection (Next.js + Sanity CMS + Vercel) and authorizes development to begin.

---

### Sprint 0 -- Project Setup & Infrastructure
**Goal:** Development environment, tooling, and CI/CD pipeline operational.

**Prerequisites:** Tech stack decision finalized. Domain name secured or confirmed. Hosting account authorized.

- [ ] Initialize Next.js 14+ project with App Router, TypeScript, Tailwind CSS
- [ ] Configure ESLint, Prettier, Husky pre-commit hooks
- [ ] Set up Sanity.io project with initial workspace
- [ ] Configure Vercel project with preview deployments on PR
- [ ] Set up Git repository, branching strategy (main / develop / feature branches)
- [ ] Configure environment variables and secrets management
- [ ] Set up Plausible or Fathom analytics account
- [ ] Purchase and configure domain (LongviewSolutionsGroup.com)
- [ ] Set up SSL/HTTPS via Vercel
- [ ] Create project documentation (README, contributing guide)

**Definition of Done:**
- [ ] `localhost:3000` renders a blank Next.js app without errors
- [ ] `git push` to `main` triggers a successful Vercel deployment to a live preview URL
- [ ] Sanity Studio is accessible and authenticated
- [ ] Domain DNS is configured and resolving (even if pointing to placeholder)

**Decision Gate:** Developer confirms all infrastructure operational. → Advance to Sprint 1.

---

### Sprint 1 -- Design System & Core Layout
**Goal:** Implement the visual identity system and site shell.

**Prerequisites:** Sprint 0 DoD met. Architecture doc Section 7 (Visual Identity) reviewed and approved as the design source of truth.

- [ ] **Color System:** Implement full palette as CSS variables/Tailwind config
  - Command Navy (#0A1628), Steel Blue (#1B2B45), Operational Steel (#2C3E5A)
  - Signal Gold (#C5933A), Warm Gold Light (#F5E6C8)
  - Clean White (#FFFFFF), Light Gray (#F0F2F5), Medium Gray (#8B95A5)
  - Dark Charcoal (#3A4555), Alert Red (#B53B2E)
- [ ] **Typography:** Configure Google Fonts / self-hosted fonts
  - Page Titles: Playfair Display Bold 36-48px
  - Section Headers: Playfair Display Bold 24-32px
  - Subheaders: Inter Semi-Bold 18-22px
  - Body: Inter Regular 16-18px
  - Data/Status: IBM Plex Mono Regular 14-16px
- [ ] **Utility Bar Component:** Slim navy bar (#0A1628) with links (Capability Statement, Contract Vehicles, Grey Sky Portal, Emergency Contact, Search)
- [ ] **Main Navigation Component:** 7-item nav (COMPANY, CAPABILITIES, OPERATIONS, GOVERNMENT, INTEL, COMMUNITY, CONTACT) with dropdown menus, gold "REQUEST CONSULTATION" CTA button
- [ ] **Footer Component:** Full-width dark footer with company info, quick links, SAM.gov/DUNS badges, social links, tagline
- [ ] **Responsive breakpoints:** Mobile, tablet, desktop layouts for nav and footer
- [ ] **Icon set:** Source or create thin-line icons inspired by military symbology/ICS

**Definition of Done:**
- [ ] Site shell (nav + utility bar + footer + content area) renders correctly at 375px, 768px, 1024px, 1440px, 1920px
- [ ] All 10 brand colors are tokenized and applied consistently
- [ ] All 5 typography tiers render with correct fonts, weights, and sizes
- [ ] Navigation dropdowns function on desktop (hover) and mobile (tap)
- [ ] Footer links are wired (can point to placeholder pages)

**Decision Gate:** Roy reviews the deployed site shell on desktop and mobile, confirms it communicates "operational authority, not corporate polish." → Advance to Sprint 2.

---

### Sprint 2 -- Homepage: Hero, Status Bar, Mission
**Goal:** Build the top half of the homepage -- first impression sections.

**Prerequisites:** Sprint 1 DoD met and design approved. Hero background image provided or placeholder approved. Status bar initial data values confirmed.

- [ ] **Hero Section:** Full-width dark background with desaturated image overlay
  - "LONGVIEW SOLUTIONS GROUP" heading
  - "Strategic Capability. Operational Deployment. National Reach." subheading
  - Supporting tagline
  - Two CTA buttons: "REQUEST CONSULTATION" (gold) + "VIEW DEPLOYMENTS" (outline)
  - Gold divider bar below hero
- [ ] **Operational Status Bar:** Dark steel bar with 4 metrics
  - Active Missions (with status indicator)
  - States Served (with expanding map on hover)
  - Responders Credentialed (from Grey Sky Society)
  - Years of Operations (since 2005)
  - Sanity schema for status bar data (editable by admin)
- [ ] **Mission Statement Section:** Clean white background, centered text, subtle lighthouse watermark SVG
- [ ] **Image optimization:** Next.js Image component with blur placeholders, WebP/AVIF
- [ ] **Performance baseline:** Lighthouse audit target >90 all categories

**Definition of Done:**
- [ ] Hero section loads with background image in <2 seconds on standard broadband
- [ ] Status bar displays 4 data points, each editable in Sanity Studio
- [ ] Mission statement renders with lighthouse watermark visible but subtle
- [ ] Lighthouse performance score ≥90 on the homepage
- [ ] Both CTA buttons are styled correctly and clickable (can link to placeholder targets)

**Decision Gate:** Roy reviews the hero + status bar + mission section and confirms the "30-second authority test" -- a government decision-maker landing here would understand what LvSG does within 30 seconds. → Advance to Sprint 3.

---

### Sprint 3 -- Homepage: Capabilities, Operations, Government
**Goal:** Build the middle sections of the homepage.

**Prerequisites:** Sprint 2 DoD met. Mapbox account created. At minimum 3 deployment locations with lat/long coordinates confirmed for map markers. Six capability one-line descriptions finalized.

- [ ] **Core Capabilities Section:** "CAPABILITIES" header with 3x2 card grid
  - 6 capability cards: IMTs, EOC Management, Disaster Housing, Strategic Resilience, Exercise Design, National Security
  - Each card: icon, title, one-line description, "Learn More" link
  - Hover animations (subtle, operational feel)
- [ ] **Operational Credibility Section:** "OPERATIONS" header
  - Mapbox GL JS integration: dark-themed U.S. map
  - Gold markers for deployment locations
  - 3 featured deployment cards below map (disaster name, jurisdiction, role, team size, outcome)
  - "VIEW ALL DEPLOYMENTS" CTA
  - Sanity schema for deployment data
- [ ] **Government Trust Section:** "GOVERNMENT READY" header with 3-column layout
  - Contract Vehicles column
  - Framework Alignment column (NIMS/ICS/EMAP/HSEEP badges)
  - Past Performance column
  - "DOWNLOAD CAPABILITY STATEMENT" CTA

**Definition of Done:**
- [ ] 6 capability cards render in 3x2 grid on desktop, stack correctly on mobile
- [ ] Mapbox map loads with dark theme and at least 3 gold deployment markers
- [ ] 3 deployment cards display beneath the map with real or approved placeholder data
- [ ] Government Trust section displays 3 columns with correct framework badges
- [ ] All "Learn More" and CTA links are wired (to placeholder pages is acceptable)

**Decision Gate:** Roy reviews the full homepage scroll (hero through government section) and confirms the site answers "Can they do it?" and "Have they done it?" at a glance. If deployment data is insufficient, Roy decides whether to proceed with placeholders or pause to gather data first. → Advance to Sprint 4.

---

### Sprint 4 -- Homepage Complete + CMS Schemas
**Goal:** Complete the homepage. Build foundational Sanity schemas for all Phase 1 content types.

**Prerequisites:** Sprint 3 DoD met. Decisions made on: Grey Sky Drone Program description (public or placeholder), National Disaster Database description (public or placeholder).

- [ ] **Current Initiatives Section:** 3 cards
  - Grey Sky Responder Society card
  - Grey Sky Drone Program card
  - National Disaster Database card
- [ ] **Thought Leadership Preview:** "INTEL" section with 3 article preview cards (title, date, author, category, excerpt)
- [ ] **Recruitment Section:** Dark navy background with "JOIN THE MISSION" messaging and 2 CTAs
- [ ] **Sanity CMS Schemas:**
  - `page` (generic page schema)
  - `deployment` (name, jurisdiction, role, duration, team size, outcome, coordinates, status)
  - `caseStudy` (situation, mission, execution, sustainment, outcome, lessons)
  - `service` (title, description, icon, ESF alignment, related deployments)
  - `program` (name, description, team structure, deployment history)
  - `leader` (name, title, bio, photo, certifications, deployments)
  - `contractVehicle` (name, number, agency, scope, period, status)
  - `capabilityStatement` (title, audience, PDF, date)
  - `statusBar` (activeMissions, statesServed, respondersCredentialed, yearsOps)
- [ ] **Sanity Studio customization:** Brand the Studio with LvSG colors, organize document types by section

**Definition of Done:**
- [ ] Full homepage scrolls from hero through footer with all 12 sections rendering
- [ ] All Sanity schemas are defined, and sample documents can be created/edited/published in Studio
- [ ] Intel preview cards pull from Sanity (even if seed data is placeholder)
- [ ] Sanity Studio is organized by site section (Company, Capabilities, Operations, etc.)
- [ ] Homepage Lighthouse score remains ≥90

**Decision Gate:** Roy completes full homepage walkthrough on desktop and mobile. Confirms the page tells the complete LvSG story in a single scroll. Signs off on the homepage as the foundation all inner pages link back to. → Advance to Sprint 5.

---

### Sprint 5 -- Company Section Pages
**Goal:** Build all 3 Company section pages.

**Prerequisites:** Sprint 4 DoD met. The following content must be provided or explicitly deferred:
- Roy's bio, photo, and career timeline data
- Organizational milestones for the 2005-present timeline
- The 7 values with their 18th-century definitions and operational applications
- At least 3 field/operational photos (or approved placeholder strategy)

- [ ] **About LvSG Page:**
  - Founding narrative (SWO CONOPS 2008, Katrina 2005)
  - Interactive timeline of organizational milestones (2005-present)
  - U.S. map of deployment locations
  - Key statistics display (deployments, states, team members)
  - Photo documentary section
  - Trust signals sidebar
  - CTAs: Download Capability Statement, Request Consultation, View Deployments
- [ ] **Leadership Page:**
  - Roy E. Dunn profile (CEMO) as featured leader
  - Professional headshots (field/operational settings)
  - Career timeline with government/operational experience
  - Certification badges (ICS, EMAP, NIMS)
  - Sanity-powered leader profiles
  - CTAs: Request Speaker, Schedule Briefing
- [ ] **Mission & Values Page:**
  - Lighthouse imagery and symbolism
  - 7 values with 18th-century definitions: Valor, Bravery, Purity, Innocence, Vigilance, Perseverance, Justice
  - Each value: historical definition + operational application
  - Christian mission foundation section
  - CTAs: Join Our Mission, Explore Careers

**Definition of Done:**
- [ ] About page renders with timeline, map, stats, and narrative -- all editable via Sanity
- [ ] Leadership page displays Roy's profile with bio, photo, career timeline, and certifications
- [ ] Mission & Values page presents all 7 values with operational applications
- [ ] All 3 pages are accessible from the COMPANY nav dropdown
- [ ] All CTAs link to their intended targets (or placeholder pages)

**Decision Gate:** Roy reviews all 3 Company pages for factual accuracy and tone. Key question: "Does the Company section establish that LvSG was built in the field, not in a conference room?" If content gaps exist (e.g., missing leader bios, photos), Roy decides: fill now or launch with what's available. → Advance to Sprint 6.

---

### Sprint 6 -- Capabilities & Government Section Pages
**Goal:** Build the core service and government pages.

**Prerequisites:** Sprint 5 DoD met. The following content must be provided or explicitly deferred:
- Service descriptions for all 8 service areas
- Program descriptions for all 6 programs
- Contract vehicle details (Florida DMS State Term Contract number, DUNS/UEI, NAICS codes)
- At least 1 capability statement PDF ready for upload
- Past performance narratives (minimum 2)

- [ ] **Services Overview Page:**
  - Service cards organized by disaster lifecycle (Preparedness, Response, Recovery, Mitigation)
  - Each service linked to FEMA/NIMS frameworks
  - Deployment-ready indicators
  - 8 service areas: IMT Deployment, EOC Staffing, Disaster Housing, COOP Planning, Exercise Design, EM Program Assessment, Strategic Resilience, National Security
  - CTAs: Request Briefing, Download One-Pager, View Case Studies
- [ ] **Programs Page:**
  - Program cards with distinct visual identities
  - 6 programs: Grey Sky Travel, Drone Program, Responder Society, Disaster Housing, National Security, IMT Deployment
  - Team structure diagrams per program
  - CTAs: Request Program Briefing, Explore Teaming
- [ ] **Methodology & Standards Page:**
  - Framework alignment matrix (LvSG services mapped to national standards)
  - Process flow diagrams
  - Standards: NIMS, ICS, EMAP, HSEEP, NRF, NDRF, CPG 101
  - LvSG Proprietary Deployment Methodology
  - Compliance badges
- [ ] **Contract Vehicles Page:**
  - Vehicle cards (name, number, agency, scope, period)
  - Procurement portal links
  - Quick-reference ordering guide
  - DUNS/UEI, NAICS codes, small business status, SAM.gov status
- [ ] **Capability Statements Page:**
  - Downloadable PDFs organized by service area
  - Preview thumbnails
  - Date-stamped for currency
- [ ] **Past Performance Page:**
  - Past performance cards (contract name, client, period, value, scope)
  - CPARS-ready narrative format
  - Relevance tags linking to capability areas
- [ ] **Government Partnerships Page:**
  - Partner logos, jurisdictions served map
  - Federal/state/county engagement history
  - Framework alignment badges

**Definition of Done:**
- [ ] All 4 Capabilities pages render with content from Sanity
- [ ] All 4 Government pages render with contract vehicle data and at least 1 downloadable capability statement
- [ ] Framework alignment matrix displays correctly on Methodology page
- [ ] At least 2 past performance narratives are published in CPARS-ready format
- [ ] All pages accessible from their respective nav dropdowns

**Decision Gate:** Roy reviews Capabilities and Government sections with this test: "If a contracting officer landed on the Government section, could they determine within 60 seconds whether LvSG is qualified for their requirement?" Roy confirms all compliance data is accurate (contract numbers, NAICS codes, registration status). Any inaccuracies must be corrected before advancing. → Advance to Sprint 7.

---

### Sprint 7 -- Operations Section, Contact Forms & Phase 1 Launch Prep
**Goal:** Build remaining core pages, forms, and prepare for launch.

**Prerequisites:** Sprint 6 DoD met. The following must be resolved:
- At least 8 deployment records with complete data entered in Sanity
- At least 3 case studies written in AAR format
- Consultation form routing decided (which email addresses receive which requirement types)
- Emergency deployment phone number confirmed for utility bar

- [ ] **Deployments Page:**
  - Interactive Mapbox deployment map (dark theme, gold markers)
  - Deployment cards: disaster name, jurisdiction, role, duration, team size, outcome
  - Filters: disaster type, state, year, service type
  - Status indicators: Active / Complete / Standby
  - 8 initial deployments populated in Sanity
- [ ] **Case Studies Page:**
  - AAR format: Situation, Mission, Execution, Sustainment, Outcome, Lessons Learned
  - 3-5 initial case studies
  - Client testimonials where available
  - Quantified outcomes
- [ ] **Request Consultation Form:**
  - Structured intake: requirement type selector (Deployment, Planning, Assessment, Training, Teaming, Other)
  - Jurisdiction, scope, timeline, urgency fields
  - Preferred contact method
  - Formspree or custom API integration
  - Email routing by requirement type
  - Response time commitment displayed
- [ ] **Teaming Opportunities Page:**
  - Teaming interest form
  - Current teaming focus areas
  - Capability overlap assessment
- [ ] **Media & Speaking Page:**
  - Speaker bio packages
  - Topic list, media kit
  - Media contact form
- [ ] **SEO Foundation:**
  - Meta tags, Open Graph, structured data (JSON-LD) for all pages
  - XML sitemap generation
  - robots.txt configuration
  - Target keywords per page (per SEO strategy in doc)
- [ ] **Launch checklist:**
  - Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - Mobile responsiveness audit
  - Accessibility audit (WCAG 2.1 AA)
  - Performance audit (Lighthouse >90)
  - Content review and proofreading
  - 404 page
  - Favicon and app icons
  - Analytics verification

**Definition of Done:**
- [ ] Deployments page displays 8+ deployments with working map and filters
- [ ] 3+ case studies published in full AAR format
- [ ] Consultation form submits successfully and routes to correct email addresses (tested)
- [ ] Teaming and Media pages render with functional forms
- [ ] All pages pass Lighthouse ≥90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Cross-browser testing passes on Chrome, Firefox, Safari, Edge
- [ ] Mobile responsive testing passes at 375px and 768px
- [ ] XML sitemap generates and is accessible
- [ ] Analytics tracking fires on page views and form submissions
- [ ] All content proofread and factually verified

**Decision Gate -- PHASE 1 LAUNCH DECISION:** Roy conducts a full site walkthrough and answers the 5 government evaluator questions from Section 4 of the architecture doc:

| Question | Where on site | Verdict |
|----------|--------------|---------|
| Can they do it? | Capabilities section | ☐ Pass / ☐ Fail |
| Have they done it? | Operations section | ☐ Pass / ☐ Fail |
| Will they show up? | Status bar, Contact | ☐ Pass / ☐ Fail |
| Can they scale? | Deployments, Programs | ☐ Pass / ☐ Fail |
| Are they compliant? | Government, Methodology | ☐ Pass / ☐ Fail |

**All 5 must pass.** If any fail, identify what's missing and resolve before launch. Once all pass → **PHASE 1 GOES LIVE.** Domain pointed to production. Site is public.

---

## ⬛ PHASE GATE 1→2

**Gate Name:** Content Engine Authorization
**Gate Owner:** Roy

**Questions to answer before Phase 2 begins:**
1. Is the core site generating any inbound traffic or inquiries? (Validates the foundation is working)
2. Does Roy have a content pipeline -- at least 5 briefing topics identified and outlined?
3. Is a content author workflow needed (i.e., will anyone besides Roy publish), and if so, who?
4. Has the email newsletter platform been selected (ConvertKit vs. Mailchimp vs. other)?
5. Are there any Phase 1 defects or content gaps that must be addressed before building new features?

**Decision:** Fix Phase 1 gaps first, or proceed to Phase 2? → If proceed, which Intel content types to prioritize (Briefings vs. SitReps vs. White Papers)?

---

## PHASE 2: CONTENT ENGINE

**Phase Objective:** Build the thought leadership publishing platform, site-wide search, and document download system. Establish a sustainable content pipeline.

---

### Sprint 8 -- Intel Section: Briefings Infrastructure
**Goal:** Build the thought leadership publishing platform.

**Prerequisites:** Phase Gate 1→2 cleared. Email newsletter platform selected. At least 5 briefing topics identified.

- [ ] **Sanity Schemas for Intel Content:**
  - `briefing` (title, slug, author, date, category, excerpt, body, hero image, tags)
  - `situationReport` (event, severity, update frequency, map data, ICS format)
  - `whitePaper` (title, abstract, PDF, download count, related briefings)
  - `author` (name, title, bio, photo, credentials)
  - `category` (Operations, Policy, Technology, Leadership, Recovery)
- [ ] **Briefings List Page:**
  - Article cards with category tags, author, date
  - Featured briefing with hero image
  - Category filters
  - Pagination
- [ ] **Briefing Detail Page:**
  - Rich text rendering from Sanity Portable Text
  - Author bio sidebar with credentials
  - Related briefings
  - Social sharing
  - CTAs: Subscribe, Request Expert Commentary
- [ ] **RSS feed generation** for briefings
- [ ] **Portable Text custom components** for callouts, data tables, image galleries

**Definition of Done:**
- [ ] A briefing can be created in Sanity, published, and rendered on the site with correct formatting
- [ ] Briefing list page displays cards with category filtering and pagination
- [ ] Detail page renders Portable Text with all custom components (callouts, tables, images)
- [ ] RSS feed generates valid XML with published briefings
- [ ] Author bio displays with credentials on each briefing

**Decision Gate:** Roy publishes a test briefing end-to-end (write in Sanity → preview → publish → verify on site). Confirms the workflow is viable for regular publishing. → Advance to Sprint 9.

---

### Sprint 9 -- Situation Reports, White Papers & Newsletter
**Goal:** Build the remaining Intel content types and email distribution.

**Prerequisites:** Sprint 8 DoD met. Newsletter platform account created. Decision made on whether White Papers will be gated (email capture required) or open.

- [ ] **Situation Report Template:**
  - ICS-standard SitRep format
  - Map integration showing affected areas (Mapbox)
  - Severity indicators and operational status
  - Timestamp and update frequency display
  - Active event vs. archived event states
- [ ] **White Papers & Research Page:**
  - White paper covers with download counts
  - Abstract previews
  - Gated PDF download with email capture (if decided)
  - Related briefings linked
- [ ] **Email newsletter integration:**
  - ConvertKit or Mailchimp setup
  - Subscribe forms on Intel pages
  - SitRep alert subscription option
  - Monthly digest template
- [ ] **Content preview/draft workflow in Sanity** (draft → review → publish)
- [ ] **Populate initial content:**
  - 5 seed briefings/articles
  - 1 white paper (Trust, but Verify or Disaster Database)

**Definition of Done:**
- [ ] SitRep template renders in ICS format with map, severity, and timestamp
- [ ] White Paper page displays with abstracts and download mechanism
- [ ] Email subscribe forms capture addresses and sync to newsletter platform
- [ ] Draft/preview workflow in Sanity allows non-destructive content review before publishing
- [ ] At least 5 briefings and 1 white paper are published and live

**Decision Gate:** Roy reviews the full Intel section with 5+ live articles. Key question: "Does this section position LvSG as a firm that operates AND thinks at the strategic level -- not just another blog?" If yes → Advance to Sprint 10.

---

### Sprint 10 -- Search & Deployment Map Interactivity
**Goal:** Add site-wide search and enhance the deployment map.

**Prerequisites:** Sprint 9 DoD met. Algolia account created. Sufficient content exists to make search useful (minimum: all pages + 5 briefings + 8 deployments).

- [ ] **Algolia Search Integration:**
  - Index all pages, briefings, deployments, case studies, capability statements
  - Search UI component with instant results
  - Search results page with filtering by content type
  - Integrate into utility bar search field
- [ ] **Enhanced Deployment Map:**
  - Click markers to navigate to case study or deployment detail
  - Hover tooltips with deployment summary
  - Filter controls (disaster type, state, year, service type)
  - Animated marker transitions
  - State-level detail maps for specific engagements
  - Mobile-optimized map interactions
- [ ] **Deployment Detail Pages** (individual pages for each deployment with full details)
- [ ] **"States Served" hover map** on the homepage status bar

**Definition of Done:**
- [ ] Search returns relevant results for: a service name, a deployment name, a briefing topic, and a framework acronym (NIMS, HSEEP)
- [ ] Search results are filterable by content type
- [ ] Deployment map markers are clickable and navigate to detail pages
- [ ] Map filters function for disaster type, state, and year
- [ ] Map renders correctly on mobile with touch interactions

**Decision Gate:** Developer + Roy test search with 10 representative government-evaluator queries (e.g., "disaster housing," "Florida contract," "HSEEP exercise"). If search returns useful results for ≥8 of 10 queries → Advance to Sprint 11.

---

### Sprint 11 -- PDF Downloads & Document System
**Goal:** Build the document download and capability statement system.

**Prerequisites:** Sprint 10 DoD met. PDF files prepared:
- At least 1 master capability statement
- At least 1 service-specific one-pager
- Decision on whether downloads require email capture

- [ ] **PDF Download System:**
  - Capability statement downloads with optional email capture
  - Service one-pagers as downloadable PDFs
  - Past performance summary downloads
  - Methodology brief downloads
  - Teaming capability overview download
  - Download tracking in analytics
- [ ] **Media Kit Page:**
  - Approved photos package
  - Logo files (various formats)
  - Approved messaging/boilerplate
  - Speaker headshot packages
- [ ] **Dynamic PDF generation** (optional): Generate custom capability briefs from Sanity data
- [ ] **Government compliance documentation** downloadable from Contract Vehicles page

**Definition of Done:**
- [ ] All PDF downloads function correctly across browsers
- [ ] Download events fire in analytics
- [ ] Email capture (if enabled) syncs to newsletter platform
- [ ] Media kit page provides downloadable logo files and approved photos
- [ ] Government compliance docs are accessible from Contract Vehicles page

**Decision Gate:** Roy downloads every PDF on the site and confirms: format is professional, data is current, and the download experience is frictionless. → Advance to Sprint 12.

---

### Sprint 12 -- SEO Authority & Performance Optimization
**Goal:** Harden SEO, performance, and accessibility across the full site.

**Prerequisites:** Sprint 11 DoD met. Site has sufficient content volume to meaningfully optimize (all core pages + 5+ briefings + 8+ deployments + downloadable PDFs).

- [ ] **Technical SEO:**
  - Structured data for all content types (Organization, Article, Event, Service)
  - Internal linking strategy implementation
  - Canonical URLs
  - Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] **Content SEO per target keywords:**
  - Capability pages: "incident management team deployment," "disaster housing consultant," "EOC staffing"
  - Geographic: "Florida emergency management consultant," "national disaster response firm"
  - Framework: "NIMS consultant," "HSEEP exercise design," "EMAP accreditation support"
  - Procurement: "emergency management state term contract"
- [ ] **Performance optimization:**
  - Image lazy loading and format optimization
  - Code splitting per route
  - Edge caching configuration on Vercel
  - Third-party script audit and optimization
  - Font loading optimization (display: swap, preload)
- [ ] **Accessibility hardening:**
  - Full WCAG 2.1 AA compliance audit
  - Screen reader testing
  - Keyboard navigation testing
  - Color contrast verification
  - Focus indicators on all interactive elements

**Definition of Done:**
- [ ] Lighthouse scores ≥95 for Performance, Accessibility, Best Practices, SEO on homepage and 3 key inner pages
- [ ] Core Web Vitals all green in Google Search Console (or verified via lab tools)
- [ ] All pages have valid structured data (tested with Google Rich Results Test)
- [ ] WCAG 2.1 AA audit passes with zero critical or major violations
- [ ] Keyboard-only navigation works on all pages and forms

**Decision Gate:** Run Google PageSpeed Insights and WAVE accessibility tool on 5 representative pages. All must score green/passing. → Advance to Sprint 13.

---

### Sprint 13 -- Content Pipeline & Phase 2 Finalization
**Goal:** Establish sustainable content workflow and finalize Phase 2.

**Prerequisites:** Sprint 12 DoD met. Roy has committed to a content publishing rhythm. If additional authors will publish, their Sanity accounts must be created.

- [ ] **Content workflow documentation:**
  - Briefing publication process in Sanity
  - SitRep activation procedure
  - White paper publication checklist
  - Image preparation guidelines
- [ ] **Publication cadence defined:**
  - Week 1: Operational Briefing (topical EM analysis)
  - Week 2: Leadership Insight or Lessons Learned
  - Week 3: Operational Briefing (policy/technology)
  - Week 4: Featured content (White Paper, SitRep, guest analysis)
- [ ] **LinkedIn distribution workflow** (Roy's personal + LvSG company page)
- [ ] **5 additional briefings published** (total: 10+ live articles)
- [ ] **QA pass on all Phase 1 + 2 pages**
- [ ] **User acceptance testing** with Roy and team

**Definition of Done:**
- [ ] Written content workflow documentation exists and Roy can follow it independently
- [ ] 10+ briefings are live on the site
- [ ] Newsletter has been sent at least once (even to a test list)
- [ ] No critical bugs across all Phase 1 + 2 pages
- [ ] Roy has independently published at least 1 briefing without developer assistance

**Decision Gate -- PHASE 2 COMPLETE:** Roy publishes a briefing from start to finish without developer help. He confirms: "I can sustain this content operation." If any workflow blockers remain, resolve before advancing.

---

## ⬛ PHASE GATE 2→3

**Gate Name:** Community Launch Authorization
**Gate Owner:** Roy

**Questions to answer before Phase 3 begins:**
1. Is the Grey Sky Responder Society Glide app operational and ready for inbound traffic from the website?
2. Does LvSG have deployment stories written or outlined (minimum 3)?
3. Are there open deployment roles to list, or is the recruiting section aspirational?
4. Has the responder credentialing model (Tier 1-5) been finalized in the Glide app?
5. Are there any Phase 1/2 issues that are undermining credibility and must be fixed first?

**Decision:** Is the organization ready to publicly launch its community presence, or should it continue building content authority first?

---

## PHASE 3: COMMUNITY

**Phase Objective:** Launch the Grey Sky Responder Society gateway, recruiting section, and deployment stories. Integrate the community brand across the site.

---

### Sprint 14 -- Grey Sky Responder Society Gateway
**Goal:** Build the Society landing page and integration architecture.

**Prerequisites:** Phase Gate 2→3 cleared. Glide app URL confirmed. Tier 1-5 model finalized. Society statistics available (member count, tier distribution) or reasonable estimates approved.

- [ ] **Grey Sky Responder Society Page:**
  - Hero section with Society mission
  - Tier 1-5 progression visualization across ICS functional areas
  - Tier badges: Bronze (T1), Silver (T2), Gold (T3), Platinum (T4), Diamond (T5)
  - Responder count and deployment statistics (dynamic from Sanity or API)
  - Featured responder profiles
  - Credentialing process explanation
  - ICS functional area alignment (Command, Ops, Planning, Logistics, Finance/Admin)
  - CTAs: Apply, Login, Verify a Responder, Learn About Tiers
- [ ] **Glide App Integration:**
  - Login link in utility nav bar (deep link to Glide app)
  - Enrollment flow: starts on LvSG site, completes in Glide
  - Responder verification badges linkable to Society profiles
- [ ] **Sanity schemas:**
  - `responderProfile` (name, tier, functional area, deployments, photo)
  - `societyStats` (total members, tier distribution, deployment count)

**Definition of Done:**
- [ ] Society gateway page renders with tier visualization, stats, and credentialing explanation
- [ ] Utility nav "Grey Sky Responder Portal" links to Glide app login
- [ ] Apply CTA initiates flow that reaches Glide app enrollment
- [ ] At least 2 featured responder profiles display
- [ ] Tier badge design is distinct and visually differentiated across all 5 tiers

**Decision Gate:** Roy reviews the Society gateway and confirms it accurately represents the Grey Sky Responder Society brand and credentialing model. Tests the Glide app link flow end-to-end. → Advance to Sprint 15.

---

### Sprint 15 -- Recruiting Section
**Goal:** Build the recruiting/careers section.

**Prerequisites:** Sprint 14 DoD met. Decisions made on:
- Which ICS functional areas have open roles (or aspirational roles)
- Whether application form routes to email, ATS, or Glide
- At least 2 current team member profiles approved for publication

- [ ] **Recruiting Landing Page:**
  - Hero: dark background, field photo, "Join the Mission"
  - Mission culture narrative (daily check-ins, camaraderie, purpose)
  - Operational language -- not HR language
- [ ] **Open Roles Section:**
  - Organized by ICS functional area (not HR job titles)
  - Command, Operations, Planning, Logistics, Finance/Admin categories
  - Sanity-managed role listings
- [ ] **Onboarding Flow Visualization:**
  - Apply → Credential Verification → Grey Sky Society Enrollment → Team Assignment → Deployment Ready
  - Step-by-step visual with descriptions
- [ ] **Application Form:**
  - Structured intake (ICS qualifications, deployment history, certifications)
  - Integration with email routing
- [ ] **Responder Profiles Section:**
  - Brief profiles of current team members
  - Diverse backgrounds and deployment experience
  - Photos from field operations

**Definition of Done:**
- [ ] Recruiting page communicates operational culture, not corporate HR
- [ ] Open roles display organized by ICS functional area
- [ ] Onboarding flow is visualized as a clear 5-step process
- [ ] Application form submits and routes correctly (tested)
- [ ] At least 2 team member profiles display

**Decision Gate:** Roy reviews the recruiting section with this test: "If a seasoned disaster responder -- someone who's managed an EOC at 2 AM -- landed here, would they feel recognized and called to something meaningful?" → Advance to Sprint 16.

---

### Sprint 16 -- Deployment Stories & Community Content
**Goal:** Build the narrative content system for community engagement.

**Prerequisites:** Sprint 15 DoD met. At least 3 deployment stories written (first-person narratives with photos).

- [ ] **Deployment Stories Page:**
  - Photo-rich narrative format
  - First-person accounts from deployed team members
  - Disaster context with operational outcomes
  - Video embed integration (YouTube/Vimeo)
  - Sanity schema for stories
- [ ] **Sanity schemas:**
  - `deploymentStory` (title, author/responder, disaster, narrative, photos, video, outcomes)
- [ ] **3 initial deployment stories** populated
  - Hurricane Helene narrative
  - Kentucky NCS mission narrative
  - Hillsborough County operations narrative
- [ ] **Responder verification badges on deployment records** (cross-referencing Society tier)
- [ ] **Community section navigation** finalized and integrated
- [ ] **Social proof elements:** Testimonial component reusable across site

**Definition of Done:**
- [ ] 3 deployment stories published with photos and operational narratives
- [ ] Stories are linked from Community section and cross-linked from relevant deployment records
- [ ] Video embed works where video content is available
- [ ] Testimonial component renders correctly and is reusable on other pages
- [ ] Responder tier badges display on deployment team rosters

**Decision Gate:** Roy reads all 3 deployment stories and confirms they are factually accurate, operationally authentic, and that team members have approved their stories for publication. → Advance to Sprint 17.

---

### Sprint 17 -- Cross-Site Community Integration & Phase 3 QA
**Goal:** Integrate community features site-wide and polish.

**Prerequisites:** Sprint 16 DoD met. Society statistics (member count) confirmed for homepage display.

- [ ] **Cross-site Grey Sky integration:**
  - Homepage status bar: live responder count from Society data
  - Homepage initiative card links to Society gateway
  - Deployments page: verification badges on team member listings
  - Case studies: team member Society tier displayed
  - Footer: Society portal login link (persistent)
- [ ] **Content sharing pipeline** between Intel section and Society community
- [ ] **Recruiting SEO optimization:**
  - Target: "disaster response jobs," "emergency management deployment," "IMT positions"
- [ ] **Full regression testing** on all Phase 1-3 features
- [ ] **Performance audit** (site growth impact on load times)
- [ ] **Analytics review:** Conversion funnel analysis, traffic patterns

**Definition of Done:**
- [ ] Homepage status bar displays live (or regularly updated) responder count
- [ ] Grey Sky integration points are active on: homepage, deployments, case studies, footer
- [ ] No regressions introduced in Phase 1 or Phase 2 features
- [ ] Lighthouse scores remain ≥90 across all pages
- [ ] Analytics shows conversion events tracking for: consultation form, newsletter subscribe, application form, PDF downloads

**Decision Gate -- PHASE 3 COMPLETE:** Roy conducts full site review. The site now answers all 5 government evaluator questions AND communicates a community/culture story. Roy confirms: "The Grey Sky Responder Society presence on this site is accurate, inviting, and won't create expectations we can't deliver on." If the Glide app isn't ready for traffic, the Society pages can remain live with a "Coming Soon" enrollment flow.

---

## ⬛ PHASE GATE 3→4

**Gate Name:** Intelligence Platform Authorization
**Gate Owner:** Roy

**Questions to answer before Phase 4 begins:**
1. Has the site demonstrated traction? (Traffic, inquiries, or partner feedback that validates continued investment)
2. Is the content pipeline producing at the planned cadence, or is the team capacity-constrained?
3. Is the national disaster database data sourced and processable?
4. Does the organization need live SitRep capability before the next hurricane season?
5. Are there revenue-generating features (client portal, advanced deployments) that should be prioritized over intelligence features?

**Decision:** Build intelligence platform as planned, reprioritize to revenue features, or pause expansion to focus on content operations?

---

## PHASE 4: INTELLIGENCE PLATFORM

**Phase Objective:** Build live situational reporting, the national disaster database, comprehensive deployment archives, media systems, and site-wide polish.

---

### Sprint 18 -- Situation Report Live System
**Goal:** Build real-time SitRep publishing capability for active disaster events.

**Prerequisites:** Phase Gate 3→4 cleared. SitRep publishing workflow documented. Decision made on alert distribution (email list, SMS, or both).

- [ ] **SitRep Dashboard Page:**
  - Active events listed with severity and status
  - ICS-format report display
  - Map integration showing affected areas
  - Update history / version timeline
  - Auto-timestamp and update frequency display
- [ ] **SitRep Publishing Workflow in Sanity:**
  - Quick-publish template for operations team
  - Status: Draft → Active → Monitoring → Archived
  - Update mechanism (append new updates, maintain history)
- [ ] **SitRep Alert System:**
  - Email notification to subscribers on new/updated SitReps
  - Integration with ConvertKit/Mailchimp for targeted distribution
- [ ] **SitRep archive** with search and filtering

**Definition of Done:**
- [ ] A SitRep can be created, published, updated, and archived entirely through Sanity
- [ ] Active SitReps display on a dashboard with ICS formatting and map
- [ ] Subscribers receive email alerts when a new SitRep is published or updated
- [ ] Archived SitReps are searchable and filterable
- [ ] Publishing a new SitRep takes <10 minutes from decision to live on site

**Decision Gate:** Roy publishes a mock SitRep for a simulated event and evaluates the full cycle: create → publish → alert → update → archive. Confirms: "During an active disaster, I could use this to provide operational intelligence to our audience." → Advance to Sprint 19.

---

### Sprint 19 -- National Disaster Database Visualization
**Goal:** Build the county-level disaster data visualization tool.

**Prerequisites:** Sprint 18 DoD met. FEMA disaster declaration dataset obtained and processed. County boundary GeoJSON sourced.

- [ ] **Disaster Database Page:**
  - County-level Mapbox choropleth map (all U.S. counties)
  - Color-coded by disaster frequency/type/severity
  - Click county for detailed disaster history
  - Filter by: disaster type, year range, declaration type
- [ ] **Data pipeline:**
  - FEMA disaster declaration data import (public API or dataset)
  - County-level aggregation and processing
  - Periodic data refresh mechanism
- [ ] **County Detail Views:**
  - Disaster history timeline
  - Declaration types and frequencies
  - LvSG deployment history in that county (if any)
- [ ] **Data visualization components:**
  - Dashboard-aesthetic charts (dark bg, gold/white data colors)
  - No 3D effects, minimal gridlines
  - Inspired by EOC dashboard aesthetic per design doc

**Definition of Done:**
- [ ] Choropleth map renders all U.S. counties with color coding
- [ ] Clicking any county shows disaster history
- [ ] Filters function for disaster type, year range, and declaration type
- [ ] Data pipeline can refresh from FEMA source
- [ ] Map performance is acceptable (loads in <5 seconds, smooth panning/zooming)

**Decision Gate:** Roy selects 5 counties he's worked in and verifies the disaster data is accurate and the visualization is meaningful. Tests on mobile. Decides whether to feature this prominently on the homepage or keep it in the Intel section. → Advance to Sprint 20.

---

### Sprint 20 -- Historical Deployment Archive & Data Dashboards
**Goal:** Build comprehensive deployment archive and interactive data displays.

**Prerequisites:** Sprint 19 DoD met. All historical deployment data entered in Sanity (every deployment since 2005). Photos and team rosters gathered where available.

- [ ] **Expanded Deployment Records:**
  - Comprehensive historical archive (all deployments since 2005)
  - Enhanced deployment detail pages with full narrative
  - Photo galleries per deployment
  - Team roster with Society tier badges
- [ ] **Interactive Data Dashboards:**
  - Deployment statistics over time
  - Service type distribution
  - Geographic coverage visualization
  - Team deployment metrics
- [ ] **Deployment timeline visualization** (About page enhancement)
- [ ] **Populate remaining deployment data** in Sanity
- [ ] **Cross-linking:** Deployments ↔ Case Studies ↔ Services ↔ Programs

**Definition of Done:**
- [ ] Every LvSG deployment since 2005 has a record in the archive
- [ ] Data dashboards display deployment statistics with EOC-aesthetic charts
- [ ] Cross-linking works: clicking a service shows related deployments, clicking a deployment links to its case study (if any)
- [ ] About page timeline reflects all milestones

**Decision Gate:** Roy reviews the complete deployment archive. Confirms: "This is the most comprehensive record of LvSG's operational history that exists. Every deployment we're proud of is here." → Advance to Sprint 21.

---

### Sprint 21 -- Conference & Media Systems
**Goal:** Build the speaking request and media systems.

**Prerequisites:** Sprint 20 DoD met. Roy's speaking topic list finalized. Media kit assets (photos, logos, boilerplate) gathered.

- [ ] **Speaking Request System:**
  - Conference/event intake form
  - Topic selection from predefined list
  - Request routing to appropriate team member
- [ ] **Press Release Archive:**
  - Sanity schema for press releases
  - Chronological listing with search
  - Category filtering
- [ ] **Media Kit Enhancement:**
  - Downloadable speaker packages per topic
  - High-res photography downloads
  - Video embed library (conference talks, interviews)
  - Brand guidelines for media use
- [ ] **Conference appearance tracking** in Sanity
  - Past panels and speaking engagements
  - Upcoming events

**Definition of Done:**
- [ ] Speaking request form submits and routes correctly
- [ ] Media kit page offers downloadable packages (photos, logos, bios)
- [ ] Press release archive displays with search and filtering
- [ ] Conference appearance history displays past and upcoming events

**Decision Gate:** Roy submits a test speaking request and reviews the media kit downloads. Confirms all assets are current and professionally presented. → Advance to Sprint 22.

---

### Sprint 22 -- Site-Wide Polish & Micro-Interactions
**Goal:** Elevate the site from functional to premium.

**Prerequisites:** Sprint 21 DoD met. All content sections are live and populated. This sprint is purely enhancement -- no new features.

- [ ] **Scroll-triggered animations:**
  - Statistic counters animate on scroll-into-view
  - Section fade-in/slide-in animations
  - Deployment map markers animate on load
- [ ] **Map enhancements:**
  - Animated flight paths between deployment locations
  - Cluster markers for dense deployment areas
  - County-level drill-down from national view
- [ ] **Loading states and transitions:**
  - Page transition animations
  - Skeleton loaders for dynamic content
  - Smooth scroll between sections
- [ ] **Print stylesheets** for key pages (capability statements, case studies)

**Definition of Done:**
- [ ] Animations are smooth (60fps) and do not impact page load performance
- [ ] Animations respect `prefers-reduced-motion` accessibility setting
- [ ] Lighthouse performance score remains ≥90 with animations active
- [ ] Print output is clean and professional for case studies and capability pages

**Decision Gate:** Roy and at least one other team member browse the full site and evaluate: "Does this feel like walking into a well-run Emergency Operations Center -- calm, organized, information-dense, and decisively commanded?" If yes → Advance to Sprint 23.

---

### Sprint 23 -- Phase 4 Hardening & Final QA
**Goal:** Final quality assurance, security hardening, and production readiness.

**Prerequisites:** Sprint 22 DoD met. No known critical bugs.

- [ ] **Full site regression testing**
- [ ] **Cross-browser/cross-device testing matrix:**
  - Chrome, Firefox, Safari, Edge (latest 2 versions each)
  - iOS Safari, Android Chrome
  - Desktop: 1920px, 1440px, 1280px
  - Tablet: 768px, 1024px
  - Mobile: 375px, 414px
- [ ] **Accessibility audit** (WCAG 2.1 AA final pass)
- [ ] **Security audit:**
  - CSP headers configured
  - No third-party tracking leaks
  - Form input sanitization
  - Rate limiting on forms
- [ ] **Performance final pass:**
  - Target: <3s load on degraded connections
  - Edge caching verification
  - Image optimization audit
  - Bundle size analysis
- [ ] **Analytics verification:** All conversion events tracking
- [ ] **SEO audit:** All target keywords indexed and ranking
- [ ] **Backup and disaster recovery** plan for the site itself
- [ ] **Documentation:** Admin guide for Sanity CMS, deployment procedures

**Definition of Done:**
- [ ] Zero critical or high-severity bugs
- [ ] All pages pass cross-browser testing
- [ ] WCAG 2.1 AA compliance verified
- [ ] Security headers configured and validated
- [ ] Performance: <3s load on throttled 3G connection
- [ ] All analytics events firing correctly
- [ ] Admin documentation complete and usable by non-developer
- [ ] Backup/restore procedure tested

**Decision Gate -- PHASE 4 COMPLETE:** Full stakeholder review. The platform is evaluated as a complete Digital Operations Platform:

| Capability | Status | Verdict |
|-----------|--------|---------|
| Core site (Company, Capabilities, Ops, Gov, Contact) | ☐ Operational | ☐ Pass |
| Content engine (Briefings, White Papers, SitReps) | ☐ Operational | ☐ Pass |
| Community (Grey Sky, Recruiting, Stories) | ☐ Operational | ☐ Pass |
| Intelligence (Disaster DB, Data Dashboards) | ☐ Operational | ☐ Pass |
| Search, SEO, Performance, Accessibility | ☐ Verified | ☐ Pass |
| Content pipeline sustainable without developer | ☐ Confirmed | ☐ Pass |

**All must pass.** This gate marks the platform as feature-complete for Year 1.

---

## ⬛ PHASE GATE 4→5

**Gate Name:** Operations Center Investment Decision
**Gate Owner:** Roy

**This is the most significant gate.** Phase 5 represents a fundamentally different capability -- authenticated portals, real-time tracking, API integrations -- that requires sustained development resources.

**Questions to answer before Phase 5 begins:**
1. Has the site generated measurable business results? (Contracts, partnerships, or recruitment attributable to the platform)
2. Does LvSG have active client engagements that would benefit from a portal?
3. Is the Grey Sky Responder Society at sufficient scale to justify API integration?
4. What is the budget for ongoing development resources?
5. Should Phase 5 capabilities be built in-house or contracted?
6. Is a mobile app for deployed teams a higher priority than a client portal?

**Decision:** Authorize Phase 5 development, defer pending business results, or redirect resources to content operations and business development?

---

## PHASE 5: DIGITAL OPERATIONS CENTER

**Phase Objective:** Transform the website from a public-facing platform into a full digital operations center with authenticated portals, real-time tracking, and API integrations.

---

### Sprint 24 -- Client Portal Foundation
**Goal:** Build authenticated client portal for engagement management.

**Prerequisites:** Phase Gate 4→5 cleared. Authentication approach decided (NextAuth.js with magic links vs. SSO vs. other). At least 1 active client engagement that will use the portal. Data schema for engagement tracking designed.

- [ ] **Authentication system:** NextAuth.js with email magic links or SSO
- [ ] **Client dashboard shell:** Protected routes, role-based access
- [ ] **Active engagement view:** Status, milestones, deliverables tracking
- [ ] **Secure document exchange:** Upload/download with encryption
- [ ] **Client onboarding flow**

**Definition of Done:**
- [ ] Authenticated users can log in and see their engagement dashboard
- [ ] Documents can be securely uploaded and downloaded
- [ ] Role-based access prevents unauthorized data access
- [ ] At least 1 real client engagement is tracked through the portal

**Decision Gate:** Roy and the pilot client both use the portal for a real engagement. Both confirm it adds value over the current communication method. → Advance to Sprint 25.

---

### Sprint 25 -- Responder Deployment Tracking
**Goal:** Build internal deployment tracking dashboard.

**Prerequisites:** Sprint 24 DoD met. Grey Sky Responder Society API capabilities assessed. Decision made on FEMA IPAWS / NWS alert integration scope.

- [ ] **Responder deployment dashboard:** Assignment tracking, availability status
- [ ] **Grey Sky Responder Society API integration** (if Glide exposes API)
- [ ] **Real-time disaster monitoring integration** (FEMA IPAWS, NWS alerts)
- [ ] **Deployment notification system**

**Definition of Done:**
- [ ] Responder availability and assignment status visible in dashboard
- [ ] Disaster monitoring alerts display for active events
- [ ] Deployment notifications reach designated personnel
- [ ] Data from Grey Sky Society syncs (or manual update path exists if API unavailable)

**Decision Gate:** Operations team uses the dashboard during a real or exercise deployment scenario. Confirms it improves situational awareness over current methods. → Advance to Sprint 26.

---

### Sprint 26 -- Advanced Analytics, Reporting & Year 2 Planning
**Goal:** Build analytics capabilities and define the roadmap forward.

**Prerequisites:** Sprint 25 DoD met. 6+ months of analytics data available for analysis.

- [ ] **Advanced analytics dashboards:**
  - Site traffic patterns by audience segment
  - Conversion funnel performance
  - Content engagement metrics
  - Geographic traffic analysis
- [ ] **Automated reporting:** Monthly site performance reports
- [ ] **A/B testing framework** for CTA optimization
- [ ] **Year 2 roadmap development** based on data and stakeholder priorities

**Definition of Done:**
- [ ] Analytics dashboards display actionable insights on traffic, conversions, and content performance
- [ ] Monthly report generates automatically
- [ ] A/B testing framework is operational for at least 1 CTA experiment
- [ ] Year 2 roadmap document is drafted with data-informed priorities

**Decision Gate -- PHASE 5 MILESTONE:** Roy reviews analytics and Year 2 roadmap. Decides priorities for continued development:
- Mobile app for deployed teams?
- Expanded client portal features?
- Integration with government procurement systems?
- Advanced Grey Sky Society features?

The platform is now a living system. Future development follows the same decision-gated model: define the goal → establish prerequisites → build → verify → decide.

---

## Sprint Sequence Summary

| Sprint | Name | Advances When |
|--------|------|--------------|
| **0** | Project Setup & Infrastructure | Developer confirms all infrastructure operational |
| **1** | Design System & Core Layout | Roy approves site shell visual identity |
| **2** | Homepage: Hero, Status Bar, Mission | Roy confirms "30-second authority test" passes |
| **3** | Homepage: Capabilities, Ops, Gov | Roy confirms homepage answers "Can they?" and "Have they?" |
| **4** | Homepage Complete + CMS Schemas | Roy signs off on complete homepage story |
| **5** | Company Section Pages | Roy verifies factual accuracy and "built in the field" tone |
| **6** | Capabilities & Government Pages | Roy confirms contracting officer "60-second qualification test" |
| **7** | Operations, Contact & Launch Prep | **PHASE 1 LAUNCH:** All 5 government evaluator questions pass |
| | **◆ PHASE GATE 1→2** | Roy authorizes content engine investment |
| **8** | Intel: Briefings Infrastructure | Roy publishes a test briefing end-to-end |
| **9** | SitReps, White Papers & Newsletter | Roy confirms Intel section establishes thought leadership |
| **10** | Search & Map Interactivity | Search returns useful results for 8/10 test queries |
| **11** | PDF Downloads & Document System | Roy verifies all downloads are current and professional |
| **12** | SEO & Performance Optimization | Lighthouse ≥95 and WCAG AA compliance verified |
| **13** | Content Pipeline & Phase 2 Polish | **PHASE 2 COMPLETE:** Roy publishes independently |
| | **◆ PHASE GATE 2→3** | Roy authorizes community launch; Glide app ready |
| **14** | Grey Sky Responder Society Gateway | Roy confirms Society brand accuracy |
| **15** | Recruiting Section | Roy confirms recruiting speaks to seasoned responders |
| **16** | Deployment Stories | Roy verifies story accuracy; team members approve |
| **17** | Cross-Site Integration & QA | **PHASE 3 COMPLETE:** Community integrated site-wide |
| | **◆ PHASE GATE 3→4** | Roy evaluates site traction and authorizes intelligence build |
| **18** | Situation Report Live System | Roy publishes mock SitRep in <10 minutes |
| **19** | National Disaster Database | Roy verifies county data accuracy on 5 known counties |
| **20** | Deployment Archive & Dashboards | Roy confirms comprehensive operational history |
| **21** | Conference & Media Systems | Roy tests speaking request and media kit |
| **22** | Site-Wide Polish | Team confirms "EOC aesthetic" achieved |
| **23** | Phase 4 Hardening & Final QA | **PHASE 4 COMPLETE:** Full platform evaluation passes |
| | **◆ PHASE GATE 4→5** | Roy makes operations center investment decision |
| **24** | Client Portal Foundation | Roy + pilot client validate portal value |
| **25** | Responder Deployment Tracking | Operations team validates in real/exercise scenario |
| **26** | Analytics & Year 2 Planning | **Year 2 roadmap defined** from data |

---

## Team Recommendations

| Role | Phase 1 | Phase 2-3 | Phase 4-5 |
|------|---------|-----------|-----------|
| Lead Full-Stack Developer (Next.js) | Required | Required | Required |
| UI/UX Designer | Required | As needed | As needed |
| Sanity CMS / Content Developer | Required | Required | Required |
| DevOps / Infrastructure | Sprint 0 + as needed | As needed | As needed |
| Content Writer / Editor | Sprint 5+ | Required | Required |
| QA / Testing | Sprint 7 | Sprint 13, 17 | Sprint 23 |
| Mapbox / Data Visualization Dev | Sprint 3 | Sprint 10 | Sprint 19-20 |

---

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Content not ready at a decision gate | Sprint blocked until content arrives | Define minimum viable content per sprint; surface content dependencies 2 sprints early; Roy identifies content as the critical path |
| Roy unavailable for decision gate review | Sprint cannot advance | Delegate gate authority for technical gates to a designated reviewer; Roy retains authority on brand/content/strategy gates |
| Mapbox complexity exceeds estimate | Sprint 3 extends | Static map fallback for Phase 1; interactive map deferred to Sprint 10 |
| Sanity schema changes after content is entered | Data migration required | Design schemas with extensibility from Sprint 4; use Sanity's migration tools; avoid breaking changes |
| Photography/imagery not available | Pages launch with gaps | Source field-appropriate stock as placeholder; tag for replacement; do not hold a gate for placeholder images |
| Grey Sky Glide app not ready at Phase Gate 2→3 | Phase 3 blocked or launches incomplete | Design Society integration as one-way links; "Coming Soon" enrollment is acceptable for gate passage |
| Traffic spikes during active disasters | Performance degradation | Vercel edge caching + static generation handles architecturally; load test before hurricane season |
| SEO takes months to build authority | Not a blocker, but requires patience | Begin content publishing immediately after Phase 1 launch; target long-tail keywords first; set expectations that organic traffic builds over 6-12 months |
| Phase Gate 4→5 results in "defer" decision | Phase 5 not built | This is a feature, not a bug -- the gate exists precisely to prevent building capabilities the org doesn't yet need |

---

*Plan version 2.0 -- March 2026*
*Methodology: Decision-gated, milestone-driven*
*Aligned to LvSG Digital Operations Platform Architecture v1.0*
