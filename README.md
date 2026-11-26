# Glavia Logistics LLP

**Connecting markets. Moving business forward.**

Glavia Logistics LLP's website introduces its freight forwarding, customs clearance, integrated logistics, express courier, and trade consultation services. An interactive hero lets visitors switch between an animated container port, a warehouse yard, and an air cargo terminal.

[Visit the live website](https://glavia-logistics21.vercel.app)

## Explore the site

- **Interactive freight scenes** — Switch between Road, Sea, and Air, or pause the animation at any time. The hero adapts its framing to smaller screens and respects the device's reduced-motion preference.
- **Light and dark themes** — The site follows the device preference on a first visit and remembers the visitor's choice after they use the theme toggle.
- **Company and service information** — Browse freight options, learn about Glavia and its founder, and find answers to common shipment and customs questions.
- **Direct enquiries** — Call or email Glavia from the contact section. The enquiry form opens a pre-filled draft in the visitor's email app.

## Run locally

Use Node.js 20.9 or later and npm. From the repository root, run:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and preview

```bash
npm run lint
npm run build
```

The production build runs TypeScript checks and writes the static export to `out/`. To preview it locally with Python 3:

```bash
python -m http.server 8080 --directory out
```

Open [http://localhost:8080](http://localhost:8080).

## Project guide

The site uses Next.js App Router, TypeScript, Tailwind CSS, Motion, and Radix UI. The freight scenes are SVGs with CSS animations.

| Path | What to edit |
| --- | --- |
| `src/app/page.tsx` | Homepage layout and section copy |
| `src/app/globals.css` | Theme colors, shared styles, and scroll animations |
| `src/components/hero.tsx` | Scene switching, framing, and playback controls |
| `public/scenes/` | Road, Sea, and Air artwork and animation timelines |
| `src/components/faq.tsx` | FAQ questions and answers |
| `src/components/quick-contact.tsx` | Contact section and email enquiry form |
| `src/lib/company.ts` | Shared service data and enquiry links |
| `public/information.md` | Company reference for published copy and service claims |

## Deploy to Vercel

Import the repository into Vercel with the Next.js framework preset, or run the following from a checkout linked to the existing Vercel project:

```bash
vercel deploy --prod
```

Confirm the production deployment is ready in Vercel, then check the public URL for the changes. The generated `out/` directory can also be deployed to another static host.
