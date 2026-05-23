# DistroKid Volta Redux — Immersive Interactive Showcase

An award-winning, creative-dev inspired redesign of the DistroKid marketing portal. Drawing direct creative influence from layout systems, fluid mechanics, typography, and premium storytelling of high-end portfolios, the site is stylized as **“Apple meets A24 meets modern music culture.”**

This project serves as a production-grade demonstration of next-generation interactive design using Next.js, Framer Motion, and Tailwind CSS v4.

---

## ⚡ Key Experience Highlights

### 1. Inertial Fluid Scrolling
*   **Engine**: Built using the [Lenis Smooth Scroll](https://lenis.darkroom.engineering/) engine (`smooth-scroll.tsx`).
*   **Physics**: Custom scroll speeds and easing functions match trackpads, scrollwheels, and mobile gestures, replacing default browser viewport stepping.
*   **Integration**: Seamlessly updates coordinates for mouse tracking, layout-driven entry animations, and scroll-linked transformation triggers.

### 2. Morphing Physics Cursor
*   **System**: A spring-bound custom cursor (`custom-cursor.tsx`) matching screen cursor movement using Framer Motion's `useMotionValue` and `useSpring`.
*   **Spring Specs**: Ultra-responsive latency metrics using `damping: 30`, `stiffness: 350`, and `mass: 0.5`.
*   **State Machine**: Dynamically shifts shapes and colors based on mouse hover context:
    *   `default`: Translucent electric blue center glow.
    *   `hover`: Enlarged wireframe halo for interactive links/buttons.
    *   `view`: Solid white canvas overlay with text tags (e.g. `VIEW`).
    *   `drag`: Bright cyan tracking bubble with text tags (e.g. `DRAG` or `PULL`).
    *   `hide`: Automatic fallback fading off-screen.

### 3. Magnetic Gravitational Pull
*   **Physics**: A bounding-box tracking component (`magnetic.tsx`) wrapping buttons and logos.
*   **Behavior**: Calculates distances from the cursor coordinates to the component's center point. When the cursor falls within a set boundary range, a pull calculation magnetizes the element, shifting it dynamically toward the mouse coordinates.
*   **Parameters**: Fully customizable `range` (radius boundary) and `pullStrength` (displacement multiplier).

### 4. Staggered Text Masks
*   **Animations**: Letter-splitting masks that reveal text layouts progressively using Framer Motion parameters (`text-reveal.tsx`).
*   **Triggers**: Hooked to scrolling offsets so copy transitions in exactly when entering the viewport, emphasizing brand headers.

### 5. Interactive Distribution Ecosystem
*   **Visual Orbit**: An interactive central console displaying floating streaming platform nodes (`ecosystem.tsx`).
*   **Polar Mechanics**: Dynamically spaces streaming stores on concentric circle tracks using polar-coordinate math (`Math.cos(rad) * radius`, `Math.sin(rad) * radius`).
*   **Throw Physics**: Platform nodes are draggable using Framer Motion physics. Pulling a node triggers spring rebounds, routing feedback simulations, and dynamic ambient console logs.

### 6. AI Creator Dashboard
*   **Workspace mockup**: A fictional glassmorphism studio dashboard mockup (`ai-tools.tsx`) outlining growth features.
*   **Features**:
    *   **Caption Generator**: Text cards matching TikTok, Instagram, and YouTube.
    *   **Release Optimizer**: Sliding progress indicators calculating ideal days/times.
    *   **Audience Insights**: Animated geographic horizontal chart bars.
    *   **Viral Prediction Engine**: Circular SVG gauge loading a radial progress sweep (`strokeDasharray` and `strokeDashoffset` animations) to score viral potential.

### 7. Real-Time Royalty Accumulator
*   **Metrics**: A rolling dollar ticker (`statistics.tsx`) simulating independent payout velocity.
*   **Logic**: An active React hook utilizing a randomized interval generator. Periodically increments a baseline payment tally in real time, rendering numbers formatting via active regex parsing.

### 8. Asymmetrical Brutalist Layout Grids
*   **Design**: Contrast-rich layouts blending editorial magazine stories, glowing backdrops, moving marquee tickers, noise overlays, and floating album covers.

---

## 🎨 Creative Architecture & Styling System

The application relies on a unified CSS and Tailwind system using **Tailwind CSS v4** styling tokens.

### Theme Variables (`src/app/globals.css`)
Global variables customize aesthetics based on active theme states (`.light` or `.dark` class toggles):
```css
@theme {
  --font-sans: var(--font-inter-tight), ui-sans-serif, system-ui;
  --font-mono: var(--font-space-grotesk), ui-monospace, monospace;
  
  --color-electric-blue: #00f0ff;
  --color-neon-purple: #9d4edd;
  --color-bg-dark: #030303;
  --color-bg-card: #0c0c0e;
}
```

### Server-Side Cookie Theme Injection
To completely eliminate layout flashes (FOUC) when loading the client theme preferences, the app handles theme reading during server rendering (`src/app/layout.tsx`).
1.  A cookie containing the chosen theme (`dark` or `light`) is saved on theme changes.
2.  During initial loading, the layout processes incoming cookies, rendering the HTML container with the matching class.
3.  An inline script resolves overrides against local storage settings before hydration.

### Grain & Glassmorphic Effects
*   **Noise Grain overlay**: A hardware-accelerated animated SVG noise filter mapping across fixed positions:
    ```css
    .grain-overlay {
      position: fixed;
      width: 200%;
      height: 200%;
      background: transparent url('data:image/svg+xml,...') repeat;
      opacity: 0.8;
      pointer-events: none;
      z-index: 9999;
    }
    ```
*   **Glass Panels**: Clean background blurring combining alpha transparency, backdrop filtering, and soft cyan inner borders:
    ```css
    .glass-panel {
      background: rgba(12, 12, 14, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    ```

---

## 🛠️ Interactive Cursor API Reference

Add modern interactive mouse feedback to any component by applying custom data attributes. The global custom cursor captures these tags via mouse-over listeners.

| Attribute | Value Type | Cursor State | Visual Feedback |
| :--- | :--- | :--- | :--- |
| `data-cursor="pointer"` | String | `hover` | Expands to translucent tracking ring. |
| `data-cursor="magnetic"` | String | `hover` | Expands tracking ring and pulls wrapped item. |
| `data-cursor="view"` | String | `view` | Expands to larger solid white circle with label text. |
| `data-cursor="drag"` | String | `drag` | Expands to solid cyan circle with label text. |
| `data-cursor="hide"` | String | `hide` | Fades out completely. |
| `data-cursor-text="..."` | String | Custom Label | Overrides default text inside the cursor (e.g. `PULL`, `VIEW`). |

*Example Usage:*
```tsx
<div 
  data-cursor="drag" 
  data-cursor-text="PULL" 
  className="w-20 h-20 bg-blue-500 rounded-full"
>
  Drag Node
</div>
```

---

## 📁 Repository Structure

```bash
distrokids-website/
├── public/
│   └── images/               # Artist magazine cover portraits & generated assets
├── src/
│   ├── app/
│   │   ├── favicon.ico       # Brand portal asset icon
│   │   ├── globals.css       # Tailwind directives, theme colors, noise and scrollbar rules
│   │   ├── layout.tsx        # Pre-hydrated theme settings, font loading, custom cursor, noise layers
│   │   └── page.tsx          # Main layout assembly mounting sections & headers
│   ├── components/
│   │   ├── ai-tools.tsx      # Creator Studio dashboard featuring live widgets & circular graphs
│   │   ├── artist-success.tsx# Horizontal brutalist magazine cover slider with drag physics
│   │   ├── custom-cursor.tsx # Spring physics custom mouse cursor and mouse-over listener
│   │   ├── ecosystem.tsx     # Orbiting streaming platform nodes with drag capabilities
│   │   ├── experimental-cta.tsx# Moving convert marquee and custom magnetic portal
│   │   ├── features.tsx      # Developer specs cards displaying asymmetric layouts
│   │   ├── footer.tsx        # High-fashion brand footer with real-time operational feeds
│   │   ├── hero.tsx          # Interactive intro with soundwave animations and floating album art
│   │   ├── magnetic.tsx      # Bounding-box distance tracking script pulling items to mouse
│   │   ├── smooth-scroll.tsx # Lenis wrapper initializing inertial scroll velocities
│   │   ├── statistics.tsx    # Counter metrics and active royalty ticker
│   │   ├── text-reveal.tsx   # Word-splitting viewport scroll reveal wrappers
│   │   └── theme-toggle.tsx  # Dynamic dark/light theme switch menu (system / light / dark)
│   └── data/
│       └── distrokid-data.ts # Single source of truth containing content text, links, and parameters
```

---

## ⚙️ Customizing Content

All site copy, assets, colors, and motion parameters are grouped into `src/data/distrokid-data.ts` to make rebranding or updating simple.

1.  **Configure Hero Content**: Modify `heroContent` to update titles, sub-headers, or baseline stats.
2.  **Add/Remove Streaming Platforms**: Update `streamingPlatforms` to modify available orbit nodes, colors, and descriptions.
3.  **Adjust Testimonials**: Customize `testimonials` to change portrait images, magazine titles, stats, or quotes on the drag slider.
4.  **Edit Features & FAQs**: Modify `features` and `faqItems` lists to update the technical spec blocks.
5.  **Adjust Animation Speeds**: Modify `motionConfig` to alter transition easing and durations.

---

## 🚀 Setup & Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 2. Install Dependencies
Clone the repository and install all packages:
```bash
npm install
```

### 3. Run Development Server
Spin up the local compiler:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the interactive showcase.

### 4. Production Build
Perform full type-checking and bundling optimization tests:
```bash
npm run build
```
The application will bundle to fully optimized static routes under the `.next/` output folder.

---

## 🎨 Visual Assets License

All high-fashion magazine covers and artist album artworks included in the `/public/images/` directory were synthetically generated using premium creative prompt structures and are authorized for this digital design showcase.
