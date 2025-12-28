# Architecture & Code Organization

## Project Structure

```
wallet-portfolio/
├── app/
│   ├── data/
│   │   └── data.json                 # Single source of truth
│   ├── layout.tsx                    # Root layout + metadata
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles & animations
│   └── favicon.ico
│
├── components/
│   ├── Wallet.tsx                    # Apple Wallet stack container
│   ├── Card.tsx                      # Single project card
│   └── StackCard.tsx                 # Stack/collection header
│
├── types/
│   └── data.ts                       # Type definitions
│
├── public/
│   ├── fonts/                        # Local font files
│   └── *.{jpg,svg,png}              # Images & logos
│
├── next.config.ts                    # Next.js configuration
├── tailwind.config.js                # Tailwind CSS config
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies & scripts
└── README.md                         # Documentation
```

## Data Flow

### Content Hierarchy

```
data.json (single source of truth)
  ├── profile                    (user info & contacts)
  ├── walletOrder              (display order: ProjectId | StackId)
  ├── projects                 (individual items)
  │   └── [id]: Project
  ├── stacks                   (collections)
  │   └── [id]: Stack (contains items[])
  └── stackItems              (items within stacks)
      └── [id]: StackItem
```

### Component Flow

```
page.tsx
  ├── Profile Header
  │   └── Image + Name + Tagline + Contacts
  └── Wallet Component
      ├── Filters hidden items
      ├── Maps through walletOrder
      └── Renders per item:
          ├── If Project → Card
          └── If Stack → StackCard + openStack items
```

## Type Safety

### Type Hierarchy

```typescript
// Auto-inferred from data.json structure
ProjectId = keyof data.projects
StackId = keyof data.stacks
StackItemId = keyof data.stackItems
WalletId = ProjectId | StackId

// Type-safe access
data.projects[id as ProjectId]
data.stacks[id as StackId]
data.stackItems[itemId as StackItemId]
```

### Benefits

✅ Autocomplete in IDE  
✅ Compile-time error detection  
✅ No `any` types  
✅ Refactor-safe  
✅ IDE jump-to-definition works  

## Component Architecture

### Wallet.tsx

**Responsibility:** Container for card stack

**Key Logic:**
1. Filter hidden items
2. Manage `openStack` state
3. Calculate z-index & opacity
4. Handle stack toggle

**State:**
- `openStack: StackId | null` — currently open stack

**Dependencies:**
- `data.json` (imported as static)
- `Card` component
- `StackCard` component

### Card.tsx

**Responsibility:** Render single project

**Features:**
- Hover animations
- Link to project website
- Flexible styling

**Props:**
- `title: string`
- `logo: string` (SVG or image path)
- `color: string` (hex background)
- `href?: string` (optional project URL)

### StackCard.tsx

**Responsibility:** Stack header with count badge

**Features:**
- Click to expand/collapse
- Item count indicator
- Tactile shadow on hover

**Props:**
- `title: string`
- `count: number`
- `color: string`

## Styling Strategy

### CSS Organization

```
globals.css
  ├── CSS Variables (fonts, spacing)
  ├── @theme (Tailwind v4 syntax)
  ├── Base styles (html, body)
  └── Animations (@keyframes)

Tailwind Classes (component-level)
  ├── Layout (flex, grid, space-y)
  ├── Sizing (w-full, h-40)
  ├── Colors (bg-*, text-*)
  ├── Effects (shadow-*, hover:)
  └── Transitions (transition-all, duration-300)
```

### Animation System

```css
@keyframes fadeIn        /* Card expand animation */
@keyframes slideUp       /* Page load animation */
@keyframes scaleIn       /* Modal open animation */
```

Classes applied via:
- `animate-fadeIn` (Tailwind)
- `animate-slideUp` (Tailwind)
- `animate-scaleIn` (Tailwind)

## Responsive Design

### Breakpoints (Tailwind default)

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Current design is mobile-first with max-width constraint:

```tsx
<div className="max-w-2xl mx-auto">
  {/* Content limited to ~672px */}
</div>
```

## Data Fetching Strategy

**No API:** All data static from `data.json`

Benefits:
- Fast (no network requests)
- Simple deployment (no backend needed)
- Easy to version control
- Perfect for portfolio/static sites

If future API needed:
```tsx
// Option 1: Fetch at build time (ISR)
const data = await fetch('https://api.example.com/data');

// Option 2: Client-side fetch
useEffect(() => {
  fetchData();
}, []);
```

## Performance Optimizations

### Built-in

- **React Compiler:** Automatic memo/useMemo injection
- **Next.js Image:** Optimized image loading
- **Turbopack:** ~3.8x faster builds than Webpack
- **CSS Minification:** Tailwind purges unused styles

### Best Practices

✅ Images must be in `public/`  
✅ Use `next/image` for optimization  
✅ Keep bundle small (no heavy libraries)  
✅ Static data (no dynamic fetches)  

### Lighthouse Targets

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: 100

## Development Workflow

### Local Development

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build check
npm run lint     # ESLint check
npm start        # Run built app
```

### Code Quality

- **TypeScript:** Strict mode enabled
- **ESLint:** Enforced via Next.js config
- **Tailwind:** Linting via IDE extension

### Git Workflow

```bash
git add .
git commit -m "feat: Add new project"
git push origin main
# Vercel auto-deploys
```

## Deployment Pipeline

```
Local Commit
  ↓
Git Push to GitHub
  ↓
Vercel Webhook Triggered
  ↓
Build: npm run build
  ↓
Deploy to Edge Network
  ↓
DNS Routes to Vercel
  ↓
Live at vozhakin.group
```

Build logs visible in Vercel dashboard.

## Scalability

### Current Limits

- JSON file size: ~100KB (plenty for 50+ projects)
- Build time: ~30-60 seconds
- Bundle size: ~150KB (Next.js + React)

### Future Scaling

If outgrowing static JSON:

1. **Simple:** Move JSON to CMS (Sanity, Contentful)
2. **Medium:** Add Backend API (Node/Python/Go)
3. **Complex:** Full SPA with database

Current architecture designed for easy migration.

## Security

### Implemented

- CSP headers via next.config.ts
- X-Frame-Options: DENY
- X-XSS-Protection enabled
- No eval() or unsafe practices

### Best Practices

✅ All content user-provided (data.json)  
✅ No user input/form processing  
✅ External links open in new tabs  
✅ Image domain allowlist (if needed)  

## Testing

### Manual Testing

```bash
# Build check
npm run build

# Type check
npx tsc --noEmit

# Lint check
npm run lint

# Lighthouse (Chrome DevTools)
F12 → Lighthouse tab
```

### Recommended: Add unit tests

```bash
npm install --save-dev jest @testing-library/react
# Configure jest.config.js
# Add tests/ folder
```

## Monitoring

### Vercel Analytics

- Real-time metrics
- Core Web Vitals tracking
- Error monitoring
- Performance insights

### Manual Checks

- GitHub commits
- Vercel deployment status
- Website uptime (https://uptime.com)
- Lighthouse scores

## Documentation

- **README.md** — Quick start & overview
- **DEPLOYMENT.md** — How to deploy & configure
- **EXTENDING.md** — How to customize & add content
- **ARCHITECTURE.md** — This file

---

**Summary:** Minimal, type-safe, static architecture optimized for fast load times and easy content management.
