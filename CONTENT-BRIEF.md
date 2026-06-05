# JP Volt Electric Inc — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-06-05
Prospect: https://jpvoltelectric.com/
Template: Unclog-Template
Reference site: Clients/InnerSunset-HVAC

---

## Source Material Summary

- **Business Name**: JP Volt Electric Inc
- **Owner/Contractor**: Junior Paez — Florida Licensed Electrical Contractor
- **License**: EC13011506
- **Primary Phone**: 786-451-1973
- **Secondary Phone**: 561-927-6015
- **Email**: jpvoltelectric@gmail.com
- **Address**: 625 El Vedado, West Palm Beach, FL 33405
- **Service Area**: West Palm Beach, Palm Beach County, South Florida
- **Social**:
  - Facebook: https://www.facebook.com/profile.php?id=100089103150752
  - Instagram: https://instagram.com/jpvoltelectric
  - WhatsApp: https://wa.me/message/FMCVSQGB3GLAN1
- **Years in business**: 10+
- **Credentials**: Works guided by NEC (National Electrical Code)
- **Testimonials**: None found on site — placeholder reviews generated for all 5 slots (TODO)

---

## Service Inventory

1. Security Camera Installation
2. Electrical Wiring
3. EV Charger Installation
4. Landscape Lighting
5. Lighting Installation
6. Meter Panel Upgrade
7. Outlet & Switch
8. Smart Home Automation
9. Electrical Troubleshooting

---

## Services Consolidated

None. All 9 services kept as separate pages. Note: The original site listed both "Electrical Wiring" and "Meter Panel" with identical copy about the electrical panel. These are treated as separate services here — "Electrical Wiring" covers new wiring/rewiring/circuit work, and "Meter Panel" covers panel upgrades specifically.

---

## Pages Built & Content Decisions

### Homepage (`app/page.tsx`)
- Added `ServicesSection` to the rendered page (it was imported but not used in template)
- Removed: no sections removed (TrustedLogos retained as-is)

### Hero (`HeroSection.tsx`)
- Headline: "Licensed Electricians in West Palm Beach — Panels, Wiring & More"
- Subhead: drawn from site taglines and service description
- CTA: "Free Estimate" (matching their offer)
- Video: placeholder TODOs for client video upload

### About Page (`AboutSection.tsx`)
- Heading rewritten for West Palm Beach electrician positioning
- 2 body paragraphs: extracted from "about-us" page copy + expanded from trade library
- Years: 10+ (sourced from troubleshooting page: "more than 10 years of experience")
- Photo: TODO placeholder retained

### Service Detail Pages (×9)
All 9 created as new routes replacing the 5 original template drain/grease pages.
Content drawn from each prospect service page where available; trade library used for structure.

### FAQ (`data/faq.ts`)
6 FAQs written — electrician-specific, Palm Beach County-specific. All generated from trade content library + prospect data.

### Pricing (`data/pricing.ts`)
3 placeholder pricing cards created (outlet service, EV charger, panel upgrade). Flagged TODO — confirm actual pricing with JP Volt Electric before going live.

### Blog (`data/blog.ts`)
3 placeholder blog posts. All flagged TODO — replace with real content.

### Testimonials (`data/testimonials.ts`)
5 placeholder reviews generated — no real reviews found on prospect site. TODO: pull actual Google/Yelp reviews before launch.

### `become-an-unclogger`
Redirects to `/contact-us`. JP Volt Electric does not need a careers/hiring page.

---

## Navigation Changes

**From template**: 5-item nav with dropdowns (About w/ FAQ, Services w/ 4 items, Contact w/ become-an-unclogger)
**Changed to**: 5-item flat-ish nav — Home | Services (9 children) | About | Blog | Contact
- Removed "Become an Unclogger" from nav (page redirects to contact)
- Moved FAQ to footer Quick Links only (not in main nav)

---

## Copy Generation Log

The following copy was generated from the trade content library or written fresh (not extracted from prospect site):

- Hero headline and description
- About section heading and both body paragraphs (expanded from thin source copy)
- All 5 testimonials (prospect site had no reviews)
- All 6 FAQ items (electrician-specific, Palm Beach County-specific)
- All 3 pricing cards (prospect site shows no pricing)
- All 3 blog post titles and excerpts
- All 6 "Why Choose Us" cards (`data/why-choose.ts`)
- CTA section right-panel copy
- Fleet/Equipment section heading and intro paragraph
- Service descriptions for all 9 service detail pages (tightened from thin source copy)
- `data/about.ts` why-choose bullets

Source copy that WAS extracted and used:
- Business name, owner name, license number, phone numbers, email, address
- Service names (all 9, exactly as listed on source site)
- Three JP Volt taglines (Super Efficient / Deeply Committed / Highly Skilled) — adapted for ticker
- "10+ years" and "NEC" from troubleshooting page
- Service descriptions from: EV Charge, Lighting, Landscape Lighting, Camera, Smart Home, Outlet and Switch pages
- Facebook and Instagram URLs

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | Created — disallows all (staging block) | Update to allow when moving to production domain |
| sitemap.ts | Created — covers all 9 service routes + standard routes | Replace BASE domain TODO |
| LocalBusiness JSON-LD | Added to `app/layout.tsx` | Trade type: `Electrician` |
| Root metadata (title, description, OG, Twitter) | Done | Template format with `%s` |
| Production domain | TODO: confirm | Used `[TODO: production-domain]` throughout |
| Business hours | TODO: confirm with client | JSON-LD hours placeholder |
| OG image (1200x630) | TODO: add to `/public/og-image.jpg` | |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Logo (header) | `public/logo.png` | Replace with JP Volt Electric logo (200×44) |
| Logo (footer) | `public/images/logo-image-50.png` | Replace with JP Volt Electric logo (239×58) |
| Hero video | `public/videos/hero.mp4` | Upload client video; update poster at `public/images/hero-poster.jpg` |
| About photo | `public/images/about-row.webp` | Replace with JP Volt team/work photo |
| Service card images (4×) | `data/services.ts` | Replace `/images/service-1.png` through `service-4.webp` |
| Equipment photos (3×) | `FleetSection.tsx` | Replace `/images/equipment-1.jpg` through `equipment-3.jpg` |
| OG image | `public/og-image.jpg` | Add 1200×630 image for social sharing |
| Testimonials | `data/testimonials.ts` | Pull real Google/Yelp reviews with avatar photos |
| Pricing | `data/pricing.ts` | Confirm actual service pricing with Junior Paez |
| Blog posts | `data/blog.ts` | Replace placeholders with real published content |
| Production domain | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` | Update all `[TODO: production-domain]` instances |
| Business hours | `app/layout.tsx` (JSON-LD) | Confirm operating hours with client |
| Google Maps embed | `app/contact-us/page.tsx` | Verify Maps embed URL resolves to correct address |
| Facebook social link (footer) | `Footer.tsx` | Confirm correct Facebook URL — current: profile.php?id=100089103150752 |
| Instagram social link (footer) | `Footer.tsx` | Confirm correct handle — current: @jpvoltelectric |
| Avatar images | `public/images/` | Download and save as avatar-1.png through avatar-5.png |
| Blog post images | `public/images/` | Replace blog-2.png and blog-3.png |
| Second phone number | — | Site shows 561-927-6015 as second number — confirm if it should appear anywhere on the site |
