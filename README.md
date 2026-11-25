# Glavia Logistics LLP

The website presents Glavia's freight forwarding, customs clearance, courier, and trade advisory services. Visitors can explore animated Road, Sea, and Air freight scenes, review the shipment process, and contact the team by email.

[Production website](https://glavia-logistics21.vercel.app)

## Local development

Use Node.js 20.9 or later and npm.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Checks and production build

```bash
npm run lint
npm run build
```

The build runs TypeScript checks and generates the static site in `out/`. To preview the export with Python 3, run the following command and open [localhost:8080](http://localhost:8080).

```bash
python -m http.server 8080 --directory out
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/page.tsx` | Homepage sections, including services, company profile, and shipment process |
| `src/app/globals.css` | Shared styles, light and dark themes, and scroll animations |
| `src/components/hero.tsx` | Freight scene selection, responsive framing, and animation controls |
| `public/scenes/` | Animated freight illustrations for Road, Sea, and Air |
| `src/components/faq.tsx` | Expandable frequently asked questions |
| `src/lib/company.ts` | Services, contact details, and enquiry links |
| `public/information.md` | Company reference for copy and claims |

The frontend uses Next.js App Router, TypeScript, Tailwind CSS, Motion, and Radix UI.

## Deployment

Vercel builds the site from the connected GitHub repository. A GitHub push updates the production URL after Vercel successfully deploys the commit. Use the deployment dashboard to confirm the commit SHA and check the public URL before sharing an update. The `out/` directory can also be served by a static host.
