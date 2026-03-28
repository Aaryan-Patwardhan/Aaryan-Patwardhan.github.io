# Aaryan Patwardhan — Portfolio

> **aaryan.daemonlabs.systems** · AI Systems Engineer

Personal portfolio site built with Next.js 15 and React 19. Features an interactive 3D neural-network canvas, ambient particle field, skill constellation graph, and smooth Framer Motion entrance animations — rendered entirely client-side with progressive enhancement for low-end devices.

---

## ✨ Highlights

| Feature | Detail |
|---|---|
| **3D Hero Canvas** | Animated neural-network scene via React Three Fiber + Three.js |
| **Ambient Particles** | Canvas-based ambient particle field with mouse repulsion |
| **Skill Constellation** | Interactive graph of skills and co-occurrence relationships |
| **Framer Motion** | Site-wide entrance animations with staggered delays |
| **Device Tier Detection** | Falls back gracefully on low-performance devices |
| **Security Headers** | CSP, X-Frame-Options, Referrer-Policy set in `next.config.js` |
| **Analytics** | Optional Umami (privacy-first) analytics integration |
| **SEO** | OpenGraph + Twitter cards, sitemap, robots.txt — all auto-generated |

---

## 🛠 Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **UI** — [React 19](https://react.dev) + [Tailwind CSS v4](https://tailwindcss.com)
- **3D / Canvas** — [Three.js](https://threejs.org) · [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) · [Drei](https://github.com/pmndrs/drei) · [Postprocessing](https://github.com/pmndrs/react-postprocessing)
- **Animation** — [Framer Motion](https://www.framer.com/motion)
- **State** — [Zustand](https://zustand-demo.pmnd.rs)
- **Fonts** — Inter + Geist Mono (Google Fonts)
- **Deployment** — [Vercel](https://vercel.com) (Singapore region `sin1`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Aaryan-Patwardhan/Aaryan-Patwardhan.github.io.git
cd Aaryan-Patwardhan.github.io

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local — see Environment Variables section below

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
# Your Umami analytics site ID (optional — analytics are disabled if omitted)
NEXT_PUBLIC_UMAMI_ID=your-umami-site-id

# Canonical site URL (used for OpenGraph and sitemap generation)
NEXT_PUBLIC_SITE_URL=https://aaryan.daemonlabs.systems
```

---

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata, analytics)
│   ├── page.tsx            # Home page (section composition)
│   ├── projects/[slug]/    # Dynamic project detail pages
│   ├── robots.ts           # robots.txt generator
│   └── sitemap.ts          # Sitemap generator
├── components/
│   ├── canvas/             # Three.js scene, neural network, ambient particles
│   ├── layout/             # Global layout elements (cursor dot, navbar)
│   ├── sections/           # Page sections (Hero, About, Experience, Projects, Skills, Contact)
│   └── ui/                 # Reusable UI components (cards, skill constellation, etc.)
├── hooks/                  # Custom React hooks (device tier, intersection, etc.)
├── lib/                    # Resume data, skills data, project data
├── store/                  # Zustand global state
├── types/                  # TypeScript type definitions
├── public/                 # Static assets (OG image, fonts, etc.)
├── next.config.js          # Next.js config + security headers
└── vercel.json             # Vercel deployment config (region, redirects)
```

---

## 🧪 Scripts

```bash
npm run dev          # Start local dev server (port 3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check (no emit)
npm run test         # Vitest unit tests
```

---

## 🌐 Deployment

The site is deployed to **[aaryan.daemonlabs.systems](https://aaryan.daemonlabs.systems)** via Vercel.

### Deploy your own fork

1. Fork this repo
2. Import the project in [Vercel](https://vercel.com/new)
3. Set the environment variables (`NEXT_PUBLIC_UMAMI_ID`, `NEXT_PUBLIC_SITE_URL`)
4. Add your custom domain in Vercel project settings → Domains
5. Point your DNS CNAME record to `cname.vercel-dns.com`

---

## 📄 License

MIT © [Aaryan Patwardhan](https://github.com/Aaryan-Patwardhan)
