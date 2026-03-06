# Blender 3D Tooling - Portfolio

A portfolio site showcasing a suite of Python tools and scripts built on top of the Blender API. Built with React, TypeScript, GSAP, and Lenis for smooth scroll and animation.

**[Live demo →](https://teduard.github.io/blender-tools)**

---

## Projects

**BlendFinder** - Scans a directory for all `.blend` files, generates top-view scene previews, and exports all objects to `.glTF` for browser-based 3D viewing via a Three.js renderer.

**Camera Rendering Addon** - A Blender Python addon that automates rendering the current scene from multiple camera viewpoints, removing the need for manual camera setup.

**Andrew Wyeth Calendar** - Programmatically generates a calendar using Andrew Wyeth's paintings as assets, combining data templating with Blender's rendering pipeline.

---

## Stack

- **React 19**, **TypeScript**, **Vite 8**
- **GSAP 3**, **@gsap/react** - animations and scroll-triggered reveals
- **Lenis** - smooth scroll
- **SplitType** - text line splitting for hero reveal animation
- **Prism.js** - syntax highlighting for code snippets in project modals
- **Tailwind CSS v4**

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Requires Node 20+.

---

## Project Structure

```
src/
├── components/
│   ├── Cursor.tsx          # Custom GSAP-driven cursor (desktop only)
│   ├── Header.tsx          # Hamburger nav with clip-path curtain animation
│   ├── Hero.tsx            # Kinetic text reveal on load
│   ├── Modal.tsx           # Project detail overlay
│   ├── ProjectCard.tsx     # Individual project row
│   └── ProjectList.tsx     # Project section wrapper
├── data/
│   └── projects.tsx        # Project content - titles, descriptions, code snippets
├── hooks/
│   ├── useLenis.ts         # Smooth scroll setup scoped to window
│   └── useModal.ts         # Modal open/close state and GSAP timeline
└── main.tsx                # GSAP plugin registration
```

---

## Deployment

The project deploys to GitHub Pages via a GitHub Actions workflow on every push to `main`. The built output is served from the `/docs` folder.

To deploy manually:

```bash
npm run build
# then commit and push - the workflow handles the rest
---

## License

MIT
```
