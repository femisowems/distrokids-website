# DistroKid Volta Redux — Immersive Interactive Showcase

An award-winning, creative-dev inspired redesign of the DistroKid marketing portal. Drawing direct creative influence from the layout systems, fluid mechanics, typography, and premium storytelling of high-end portfolios (like Dave Holloway), the site is stylized as **“Apple meets A24 meets modern music culture.”**

---

## ⚡ Key Experience Highlights

1. **Inertial Fluid Scrolling**: Implemented using the `lenis` engine for high-end scroll physics.
2. **Morphing Physics Cursor**: A custom-drawn canvas cursor that scales, displays custom labels (`VIEW`, `DRAG`), and hides based on the cursor pointer's context.
3. **Magnetic Gravitational Pull**: A coordinate tracking spring algorithm pulling active buttons and links toward the mouse pointer.
4. **Staggered Text Masks**: Word-splitting masks that reveal kinetic typography on scroll.
5. **Interactive Distribution Ecosystem**: A polar-coordinate computed orbit selector containing streaming stores that can be dragged and thrown using Framer Motion physics.
6. **AI Creator Dashboard**: A fully interactive glassmorphism workspace mockup where clicking through automated tools triggers circular progress sweeps, stats updates, and charts.
7. **Royalty Accumulator**: A real-time rolling counter showing streaming dollars paid out, ticking up continuously in fractions of a second.
8. **Asymmetrical Layout Grids**: Luxury brutalist layouts featuring high-fashion magazine success stories, offset borders, and neon gradient ambient backdrops.

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js 15 App Router](https://nextjs.org/) (React 19, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Typing enabled)
- **Styling**: [Tailwind CSS v4 Engine](https://tailwindcss.com/) (Direct `@theme` CSS integration)
- **Animation Framework**: [Framer Motion](https://www.framer.com/motion/)
- **Scroll Physics Engine**: [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Optimization**: [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)

---

## 📁 Repository Structure

```bash
distrokids-website/
├── public/
│   └── images/               # High-fashion generated artist covers & hero album art
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind v4 directives, noise grain filters, and custom scrollbars
│   │   ├── layout.tsx        # Mounts custom fonts, smooth scroll context, cursor, and noise grain overlay
│   │   └── page.tsx          # Assembles all page sections & integrates the floating glass nav header
│   └── components/
│       ├── smooth-scroll.tsx # Lenis wrapper initializing inertial viewport scrolling
│       ├── custom-cursor.tsx # Spring physics mouse cursor and layout tag triggers
│       ├── magnetic.tsx      # Spring motion gravitational button pulls
│       ├── text-reveal.tsx   # Word-splitting scroll mask reveal
│       ├── hero.tsx          # Cinematic opening, animated soundwaves, and floating art
│       ├── ecosystem.tsx     # Orbiting platform nodes and central status dashboard
│       ├── artist-success.tsx# Horizontal editorial success stories drag slider
│       ├── ai-tools.tsx      # Fictional AI tools switcher dashboard mockup
│       ├── statistics.tsx    # Rolling numerical metrics and royalty ticker
│       ├── features.tsx      # Asymmetric developer spec cards
│       ├── experimental-cta.tsx# Moving marquee tickers and magnetic conversion portal
│       └── footer.tsx        # High-fashion brand footer with real-time operational feeds
```

---

## 🚀 Setup & Installation

### 1. Pre-requisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### 2. Install Dependencies
Clone the repository and install the production package tree:
```bash
npm install
```

### 3. Run Development Server
Spin up the local compiler:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the interactive showcase.

### 4. Compile Production Build
Perform full type-checking and bundling optimization tests:
```bash
npm run build
```
The application will bundle to fully optimized static routes.

---

## 🎨 Visual Assets License

All high-fashion magazine covers and album artworks included in the `/public/images/` directory were synthetically generated using premium creative-dev prompt styles and are authorized for this digital design showcase.
