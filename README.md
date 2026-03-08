# NEXUS — Tech Company Website

A complete, multi-page website for a fictitious deep-tech engineering studio. Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, case studies, testimonials |
| About | `pages/about.html` | Company story, team, timeline, values |
| Services | `pages/services.html` | Detailed service offerings with tech stacks |
| Pricing | `pages/pricing.html` | 3 packages, add-ons, comparison table, FAQ |
| Work | `pages/work.html` | Filterable case studies portfolio |
| Blog | `pages/blog.html` | Articles, sidebar, newsletter signup |
| Careers | `pages/careers.html` | Job listings, perks, hiring process |
| Contact | `pages/contact.html` | Contact form, office locations |

## Project Structure

```
nexus/
├── index.html          # Homepage
├── css/
│   └── main.css        # Shared styles (all pages)
├── js/
│   └── main.js         # Shared JavaScript (cursor, reveals, nav)
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── pricing.html
│   ├── work.html
│   ├── blog.html
│   ├── careers.html
│   └── contact.html
└── README.md
```

## Running Locally

Just open `index.html` in a browser — no build step needed.

For a local server (recommended for best experience):

```bash
# Python
python3 -m http.server 3000

# Node.js
npx serve .
```

Then open `http://localhost:3000`.

## Features

- **Custom cursor** with lag-ring follow effect
- **Scroll-triggered reveal animations** on all sections
- **Filterable portfolio** on Work page
- **Accordion FAQ** on Pricing page
- **Expandable job listings** on Careers page
- **Working contact form** with simulated submission
- **Mobile responsive** navigation
- **Marquee animation** for tech capabilities
- **Animated orbital SVG** on homepage hero
- Google Fonts (Syne, Instrument Serif, JetBrains Mono) — loaded via CDN

## Design System

- **Colors**: `#080808` black, `#f4f1eb` warm white, `#c8ff00` acid green
- **Fonts**: Syne (headings), Instrument Serif (italics/accents), JetBrains Mono (labels/code)
- **Aesthetic**: Industrial dark, editorial grid, acid-green accents

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name`
