
## Goal
Build a **single-page corporate company profile website** for **AGILE ENGINEERING CONSULTANTS (AEC)** that mirrors a company profile document: **same content, same section order, same headings, same wording**, in a **clean Middle East consultancy aesthetic** (white background, corporate blue + dark gray, grid-based layout, serious typography, subtle fade-ins only). Fully responsive, with a sticky header, smooth scrolling, and print/PDF-friendly styling.

---

## Information Architecture (Strict Section Order)
We will implement one long-scroll page with these sections **in this exact order**:

1. **Hero** (AEC name, contact details, intro paragraphs, subtle engineering background image)
2. **Introduction**
3. **About Us**
4. **Our Vision**
5. **Our Principles and Values** (4 equal columns with minimal icons)
6. **Our Services** (grid of bordered cards)
7. **Organization Chart** (hierarchical boxes connected with lines)
8. **Our Team**
9. **Office Address**
10. **Projects** (categories + full project list exactly as provided)
11. **Footer** (THANK YOU + contact details)

---

## Pages & Navigation
### Single Page
- Route: `/` only (replace the current blank Index page).
- **Sticky header navigation** with anchor links to each section.
- **Smooth scroll** to sections; active section highlight on scroll (subtle, corporate).

### Header Content
- Logo/wordmark style: “AEC” / “Agile Engineering Consultants” (typographic; no playful marks).
- Nav links: Hero, Introduction, About Us, Vision, Values, Services, Org Chart, Team, Office, Projects, Contact/Footer.

---

## Visual & Brand System (Corporate + Minimal)
### Color Palette (fixed, non-flashy)
- Primary: **Deep Corporate Blue** (e.g., `#0B3D91`)
- Secondary text: **Dark Gray** (`#333333`)
- Background: **White**
- Section accent background: **Light Gray** (`#F4F6F8`)
- Borders/dividers: subtle light gray

### Typography Hierarchy (serious + structured)
- Headings: bold, uppercase, modern sans-serif look
- Body: clean sans-serif, high readability, comfortable line height
- Clear hierarchy:
  - H1: Hero title
  - H2: Section titles
  - H3: Subtitles within sections
- Consistent spacing rhythm for a “report/document” feel.

### Layout & Spacing
- Desktop-first presentation quality (still responsive).
- Grid-based sections (2-column where appropriate, otherwise structured single-column).
- Strong use of dividers, section padding, and alignment for a corporate document flow.

---

## Section-by-Section UX Plan
### 1) Hero
- Left: Company name + contact block + the 3 intro paragraphs (exact wording).
- Background: subtle engineering-related image with low opacity overlay to keep white/clean feel.
- CTA not required (document-style), but we can include a small “Download/Print PDF” button later if desired.

### 2) Introduction / 3) About Us / 4) Our Vision / 8) Our Team
- Clean content blocks with:
  - Blue uppercase section title
  - Body text in dark gray
  - Optional left-side vertical accent bar in blue for section emphasis (minimal).

### 5) Principles & Values
- 4 equal columns (responsive down to 2 columns then 1).
- Minimal icons above each word (monoline icons).
- Cardless or very subtle bordered tiles (depending on desired severity).

### 6) Our Services
- Grid of **8** clean bordered cards with service names exactly as listed.
- Consistent card padding, equal heights, no shadows or playful effects.

### 7) Organization Chart
- Hierarchical layout using structured boxes with connecting lines:
  - Top: Board of Directors → Managing Director
  - Two branches: Admin & Account Dept. / Technical & Project Dept.
  - Nested lists exactly as provided
- Responsive approach:
  - Desktop: true org chart layout
  - Mobile: stacked tree layout while preserving hierarchy and clarity

### 9) Office Address
- Centered block, clean typography, generous spacing.

### 10) Projects
- Category headings (Industrial Works, Structural Works, Residential Works, Commercial Works).
- Under categories, show the project entries exactly as provided.
- Each project as a structured block:
  - Project title (bold)
  - Location line
  - Stage line
- Keep it highly readable and print-friendly.

### 11) Footer
- Large centered “THANK YOU”
- Minimal contact details repeated beneath in a corporate footer style.

---

## Motion & Interactions (Strictly Minimal)
- No animations except **subtle fade-ins** for sections when they enter viewport (light, professional).
- Hover states: minimal (underline or slight color shift only).
- Smooth scroll to anchors.

---

## Responsiveness & Accessibility
- Mobile-friendly navigation (simple menu / drawer).
- High contrast for readability; semantic headings for document structure.
- Keyboard navigable header and links.

---

## PDF / Print Optimization
- Add a print stylesheet profile:
  - Removes sticky header in print
  - Ensures backgrounds remain light and ink-friendly
  - Avoids awkward page breaks inside project entries/org chart where possible
  - Keeps typography consistent for PDF export via browser print

---

## Implementation Milestones (What will be built in order)
1. **Foundation styling**: define corporate colors, typography rules, spacing utilities.
2. **Sticky header + smooth scroll**: anchor nav and section IDs.
3. **Build all sections** with exact content and strict order.
4. **Values + Services grids** with consistent corporate styling.
5. **Organization chart** component (desktop + responsive fallback).
6. **Projects section** with categories + exact project list formatting.
7. **Subtle fade-in** behavior (very restrained).
8. **Print/PDF styling pass** + responsive QA across breakpoints.

---

## Items to Confirm (optional, but helpful for final polish)
- Do you want this as **single-page only** (recommended for a profile) or also a separate “Projects” page?
- Should we include a simple **AEC logo** (text-only) or will you provide a logo file to use?
- Do you want the site in **English only**, or should we plan for **Arabic (RTL) support** later?

