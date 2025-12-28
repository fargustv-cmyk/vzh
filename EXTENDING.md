# Extending the Portfolio

## Quick Start Guide

This document explains how to customize and extend your portfolio.

## Adding Projects

### Example 1: Add a Single Project

Edit `app/data/data.json`:

```json
{
  "walletOrder": ["tsoh", "cineshift", "my-new-project"],
  "projects": {
    "my-new-project": {
      "id": "my-new-project",
      "type": "project",
      "title": "My New Project",
      "cardColor": "#E8D4B8",
      "logo": "/my-project-logo.svg",
      "description": "Amazing new project description",
      "website": "https://myproject.com"
    }
  }
}
```

The project automatically appears in the wallet! No code changes needed.

### Example 2: Hide a Project

Set `hidden: true` to hide without removing:

```json
{
  "projects": {
    "coming-soon": {
      "...": "...",
      "hidden": true  // Won't display in wallet
    }
  }
}
```

## Creating Stacks

### Example: Films Stack

```json
{
  "walletOrder": ["tsoh", "my-films", "cineshift"],
  "stacks": {
    "my-films": {
      "id": "my-films",
      "type": "stack",
      "title": "MY FILMS",
      "cardColor": "#1a1a1a",
      "count": 3,
      "items": ["film-1", "film-2", "film-3"]
    }
  },
  "stackItems": {
    "film-1": {
      "id": "film-1",
      "type": "project",
      "title": "Documentary",
      "cardColor": "#2a2a2a",
      "logo": "/film-1.jpg",
      "description": "Award-winning documentary",
      "website": "https://film1.com"
    },
    "film-2": { "..." }
  }
}
```

Click the stack card to reveal the films!

## Customizing Appearance

### Change Colors

Edit card colors in `data.json`:

```json
{
  "cardColor": "#FF6B6B"  // Hex colors only
}
```

Color tips:
- Light: `#F5E6D3`, `#FEFFFE`
- Dark: `#1a1a1a`, `#111111`, `#000000`
- Accent: `#FF6B6B`, `#4ECDC4`, `#F7DC6F`

### Update Fonts

In `app/globals.css`:

```css
body {
  font-family: var(--font-geist-sans), sans-serif;  /* Change to var(--font-forum) for serif */
}
```

Or use Tailwind classes:

```tsx
<h1 className="font-sans">Geist Sans (default)</h1>
<h1 className="font-forum">Forum (elegant)</h1>
<h1 className="font-mono">Geist Mono (code)</h1>
```

### Adjust Shadows & Animations

In `app/globals.css`:

```css
/* Increase shadow strength */
.shadow-premium {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}

/* Customize animation speed */
@keyframes fadeIn {
  animation: fadeIn 0.5s ease-out;  /* Change 0.3s to 0.5s */
}
```

In `tailwind.config.js`:

```js
extend: {
  transitionDuration: {
    400: '400ms',  // Add custom timing
  }
}
```

## Component Customization

### Card Component

Location: `components/Card.tsx`

```tsx
// Customize card height
className="h-40"  // Change to h-48, h-56, etc.

// Adjust padding
className="px-6"  // Increase spacing
```

### StackCard Component

Location: `components/StackCard.tsx`

```tsx
// Change badge style
<div className="w-8 h-8 rounded-full bg-white/90">  // Adjust opacity
```

### Wallet Component

Location: `components/Wallet.tsx`

```tsx
// Change spacing between cards
className="space-y-[-120px]"  // Adjust overlap

// Modify animation easing
className="transition-all duration-300 ease-out"  // Change duration
```

## Profile Information

Edit `app/data/data.json`:

```json
{
  "profile": {
    "name": "Your Name",
    "tagline": "Your Tagline",
    "photo": "/your-photo.jpg",
    "contacts": {
      "telegram": "https://t.me/yourhandle",
      "email": "mailto:your.email@example.com",
      "phone": "tel:+1234567890"
    }
  }
}
```

## Adding New Sections

### Example: Add a "Blog" or "Articles" Section

```json
{
  "stacks": {
    "articles": {
      "id": "articles",
      "type": "stack",
      "title": "ARTICLES",
      "cardColor": "#E8F4F8",
      "count": 5,
      "items": ["article-1", "article-2", "article-3", "article-4", "article-5"]
    }
  },
  "stackItems": {
    "article-1": {
      "id": "article-1",
      "type": "project",
      "title": "Design Principles",
      "cardColor": "#E8F4F8",
      "logo": "/article-icon.svg",
      "description": "Understanding premium design",
      "website": "https://medium.com/your-article"
    }
  }
}
```

Add to `walletOrder` and you're done!

## SEO Customization

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "vozhakin.group",  // Change site title
  description: "Your description here",
  
  openGraph: {
    title: "Your Title",
    description: "Your description",
    images: [
      {
        url: "/og-image.jpg",  // Change OG image
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

## Advanced: Custom Styling

### Add CSS Variables

In `app/globals.css`:

```css
:root {
  --color-primary: #FF6B6B;
  --color-secondary: #4ECDC4;
  --spacing-unit: 8px;
}

.custom-card {
  background: var(--color-primary);
  padding: calc(var(--spacing-unit) * 2);
}
```

### Override Tailwind Classes

In `tailwind.config.js`:

```js
extend: {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  },
  spacing: {
    card: '16px',
  }
}
```

## Troubleshooting

### Changes not showing?

1. Clear Next.js cache: `rm -rf .next`
2. Restart dev server: `npm run dev`
3. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Type errors after changes?

Check `data.json` structure:
- All required fields present
- Correct nesting
- Valid JSON (use jsonlint.com)

### Images not loading?

1. Image must be in `public/` folder
2. Use path: `/image-name.jpg`
3. Check file exists: `ls public/`

## Best Practices

✅ Do:
- Keep `data.json` as your single source of truth
- Use hex colors for consistency
- Test locally before deploying
- Backup `data.json` before major changes

❌ Don't:
- Edit HTML directly—use `data.json`
- Use CSS `!important`
- Commit node_modules or .next
- Forget to push to GitHub before Vercel deploy

## Need Help?

Check:
1. TypeScript errors: `npx tsc --noEmit`
2. Build issues: `npm run build`
3. JSON validity: Paste in jsonlint.com
4. Console logs: F12 → Console tab

Good luck with your portfolio!
