# Boston Cleaning Services — Official Website

> **Best & Trusted Cleaning Service in Mumbai**  
> Complete, production-ready, high-converting responsive static landing page built with React, Vite, TypeScript, and Tailwind CSS.

---

## 🧼 Business Overview

- **Business Name:** Boston Cleaning Services
- **Tagline:** Best & Trusted Cleaning Service in Mumbai
- **Official Website:** [https://www.bostoncleaningservices.in](https://www.bostoncleaningservices.in)
- **Primary Location:** Mumbai, Maharashtra, India
- **Phone:** `+91 9619650090`
- **Email:** `Bostoncleaning10@gmail.com`
- **Primary Objective:** Drive direct phone inquiries, WhatsApp booking requests, and communicate service capabilities with maximum trust and clarity.

---

## 🎨 Brand Design System

Derived directly from the official **Boston Cleaning Services** identity:
- **Navy Blue (`#102B4E`):** Primary corporate tone, typography, and authority
- **Royal Blue (`#1769AA`):** High-converting CTAs, active highlights, badges
- **Cyan (`#20C4D8`):** Water & freshness accents, sparkle marks, interactive focus rings
- **White (`#FFFFFF`):** Crisp surface cards and contrast areas
- **Light Blue-Grey (`#F4F8FC`):** Soft, clean, readable background tone
- **Dark Slate (`#172536`):** Readable, high-contrast body typography

---

## 📑 Structure & Section Breakdown

1. **Header & Navigation:** Sticky header with backdrop blur, official logo in native proportions, desktop navigation links with smooth scrolling, "Book a Cleaning" CTA button, and accessible mobile hamburger navigation drawer.
2. **Hero Section:** High-converting hero featuring modern spotless interior photography, descriptive H1 (`Professional Cleaning Services in Mumbai`), official tagline badge, primary `Call Now` (`tel:+919619650090`), secondary `Request a Quote` scroll action, and 3 key cleaning highlights.
3. **Trust & Service Highlights:** Compact trust strip with 4 factual service categories (Residential, Commercial, Deep Cleaning, Post-Renovation).
4. **About Boston Cleaning Services:** Natural local Mumbai SEO copy detailing residential and commercial cleaning solutions without fabricated claims.
5. **Our Cleaning Services:** 12 dedicated service cards with category filters (All, Residential, Commercial, Specialized). Every card includes an "Enquire Now" button that preselects the service in the booking form, plus a direct WhatsApp quick inquiry button.
   - *Deep Home Cleaning*
   - *Regular Home Cleaning*
   - *Kitchen Cleaning*
   - *Bathroom & Toilet Cleaning*
   - *Glass & Window Cleaning*
   - *Carpet & Furniture Cleaning*
   - *Office Cleaning*
   - *Commercial Cleaning*
   - *Post-Renovation Cleaning*
   - *Fridge Cleaning*
   - *Pest Control*
   - *Painting Services*
6. **Deep Cleaning Details:** In-depth 3-column breakdown (General Cleaning, Kitchen Cleaning, Bathroom Cleaning) with itemized checklists, honest scope transparency disclaimers, and an "Ask About Deep Cleaning" CTA.
7. **Why Choose Us:** 6 concise benefit cards highlighting versatile service options, attention to detail, and local Mumbai service dedication.
8. **Our Cleaning Process:** 4 simple, scan-friendly steps (Contact Us ➔ Discuss Your Needs ➔ Confirm the Service ➔ Get Your Space Cleaned).
9. **Property Types We Serve:** 4 visual categories with photography (Apartments & Flats, Independent Houses, Offices & Workplaces, Shops & Commercial Premises) with direct "Select & Enquire" triggers.
10. **Service Areas:** Natural Mumbai SEO section emphasizing coverage across Mumbai, Maharashtra, with an interactive prompt to check team availability.
11. **Frequently Asked Questions:** 12 accessible accordion items with ARIA states (`aria-expanded`, `aria-controls`) answering pricing, scheduling, and service scopes factually.
12. **Customer Reviews:** Tasteful, authentic review placeholder inviting real client feedback without fake ratings.
13. **Contact and Booking Form:** Clean, accessible enquiry form with client-side validation (Full Name, Phone Number, Service selection, Property Type, Locality in Mumbai, Optional Date, Message). Submitting generates an encrypted, URL-encoded WhatsApp message to `+91 9619650090` without database dependencies. Includes direct click-to-call, email, and website links.
14. **Final Call to Action:** Navy blue and cyan conversion strip for closing enquiries.
15. **Footer:** Official logo, business summary, quick links, all 12 services links, contact info, accessible Privacy Policy and Terms of Service starter modals, and dynamic copyright year.
16. **Mobile Sticky Bar:** Fixed bottom bar on mobile screens featuring one-touch `Call Now` and `WhatsApp` buttons.

---

## 🔍 SEO & Technical Highlights

- **Valid `LocalBusiness` JSON-LD Schema:** Injected in `<head>` containing official business name, telephone, email, Mumbai location, and confirmed services.
- **Canonical URL:** Configured to `https://www.bostoncleaningservices.in/`.
- **Social Sharing:** Complete Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Cards.
- **Sitemap & Robots:** Production-ready `public/sitemap.xml` and `public/robots.txt`.
- **High-Definition Favicon:** Clean SVG and PNG favicons derived from the logo emblem.
- **Accessibility:** Semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`), visible focus rings, ARIA labels, and reduced-motion support.

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (or yarn / pnpm)

### Installation
```bash
# Clone or navigate to the project directory
cd "d:\AI PROJECTS\boston"

# Install dependencies
npm install
```

### Start Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:5173`.

### Production Build & Verification
```bash
# Typecheck and build static production bundle
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

Because the project compiles to standard static HTML, CSS, and JavaScript with no backend requirement, it can be hosted on any static hosting provider:

### Option A: Vercel
1. Install Vercel CLI: `npm install -g vercel` or connect via GitHub on [vercel.com](https://vercel.com).
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Assign custom domain: `www.bostoncleaningservices.in`

### Option B: Netlify
1. Connect repository on [netlify.com](https://netlify.com) or drag-and-drop the `dist` folder into Netlify Drop.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add DNS records (CNAME / ALIAS) for `bostoncleaningservices.in`.

### Option C: Cloudflare Pages
1. Go to Cloudflare Dashboard ➔ Pages ➔ Create a project.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Build output directory: `dist`

### Option D: Traditional cPanel / Apache / Nginx / Shared Hosting
1. Run `npm run build` locally.
2. Upload all files and folders inside `dist/` (e.g. `index.html`, `assets/`, `logo.png`, `robots.txt`, `sitemap.xml`) to your server's `public_html` directory via FTP or File Manager.

---

## 📄 License & Brand Notice
All logo artwork, trademarks, and brand identity belong to **Boston Cleaning Services**.
