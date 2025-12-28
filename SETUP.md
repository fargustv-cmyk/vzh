# Setup Checklist

Before launching `vozhakin.group`, ensure everything is configured:

## Pre-Launch Checklist

### ✅ Project Files

- [x] `app/` folder with layout, page, globals.css
- [x] `components/` with Wallet, Card, StackCard
- [x] `public/` folder with images and fonts
- [x] `types/` folder with TypeScript definitions
- [x] Configuration files (tsconfig, tailwind, next.config)
- [x] Documentation (README, DEPLOYMENT, EXTENDING, ARCHITECTURE)

### ✅ Content

- [ ] `app/data/data.json` updated with actual projects
- [ ] Profile photo placed at `/public/profile.jpg`
- [ ] Project logos in `/public/`
- [ ] OG image at `/public/og-image.jpg` (1200×630px)
- [ ] Favicon at `/public/favicon.ico`
- [ ] Contact links verified (Telegram, Email, Phone)

### ✅ Metadata

- [ ] Update `metadataBase` in `app/layout.tsx` to actual domain
- [ ] Update `title` and `description` for your brand
- [ ] Set correct OG image path
- [ ] Verify favicon path

### ✅ Code Quality

- [ ] Run `npm run build` — no errors
- [ ] Run `npm run dev` — site loads locally
- [ ] Test all project links open correctly
- [ ] Click stack cards to expand/collapse
- [ ] Hover effects work smoothly
- [ ] Mobile view responsive

### ✅ Performance

- [ ] Images optimized (< 500KB per image)
- [ ] No console errors (F12 → Console)
- [ ] Lighthouse score > 90 (F12 → Lighthouse)
- [ ] Core Web Vitals good
- [ ] Mobile-friendly test passes

### ✅ Git & Deployment

- [ ] GitHub repository created
- [ ] `.gitignore` includes `node_modules`, `.next`, etc.
- [ ] Initial commit: `git commit -m "Initial commit"`
- [ ] Branch is `main`
- [ ] Vercel project connected
- [ ] Preview deployment successful

### ✅ Domain Setup

- [ ] Domain registered (if custom)
- [ ] Domain connected to Vercel
- [ ] DNS records propagated (check with: `nslookup vozhakin.group`)
- [ ] HTTPS certificate issued automatically
- [ ] www redirect configured (if desired)

### ✅ Browser Testing

Tested on:
- [ ] Chrome/Edge (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ Accessibility

- [ ] Contrast ratio > 4.5:1 (WCAG AA)
- [ ] All links have descriptive text
- [ ] Images have alt text
- [ ] Form labels associated (N/A for portfolio)
- [ ] Keyboard navigation works

## Quick Start After Clone

If cloning this project to a new machine:

```bash
# 1. Install dependencies
npm install

# 2. Verify setup
npm run build

# 3. Start development
npm run dev

# 4. Open browser
# Visit http://localhost:3000

# 5. Make changes to data.json
# Changes auto-reload (HMR)

# 6. Deploy to Vercel
git push origin main
# Vercel auto-deploys within 2 minutes
```

## Daily Operations

### Update Content

```bash
# Edit data.json
nano app/data/data.json

# Commit changes
git add app/data/data.json
git commit -m "Update portfolio: add new project"
git push origin main

# Vercel deploys automatically (~1-2 min)
```

### Monitor Deployments

1. Visit Vercel dashboard
2. Check "Deployments" tab
3. View build logs
4. Monitor production errors (if any)

### Backup Content

```bash
# Weekly backup of data
cp app/data/data.json app/data/data.backup.$(date +%Y-%m-%d).json
git add app/data/
git commit -m "Backup: $(date +%Y-%m-%d)"
git push origin main
```

## Troubleshooting

### Site not loading

1. Check: `npm run build` locally
2. Check Vercel logs: Dashboard → Deployments → Failed build
3. Verify: No TypeScript errors (`npx tsc --noEmit`)

### Changes not appearing

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear Vercel cache: Dashboard → Settings → Git → Clear Cache
3. Check: `git log` to verify push was successful

### Images not loading

1. Image must be in `/public/` folder
2. Check path: `/image-name.jpg` (leading slash required)
3. Verify file exists: `ls public/`

### Build takes too long

- First build: 2-3 minutes (normal)
- Subsequent: 30-60 seconds
- Check Vercel status: https://status.vercel.com

## Performance Targets

Aim for these Lighthouse scores:

| Metric | Target | Current |
|--------|--------|---------|
| Performance | > 90 | ___ |
| Accessibility | > 95 | ___ |
| Best Practices | > 90 | ___ |
| SEO | 100 | ___ |

Run audit: F12 → Lighthouse → Analyze page load

## Security Checklist

- [x] HTTPS enabled (automatic with Vercel)
- [x] CSP headers configured
- [x] X-Frame-Options set
- [x] X-XSS-Protection enabled
- [x] No sensitive data in code
- [x] Environment variables (if needed) in Vercel dashboard

## Maintenance Schedule

| Frequency | Task |
|-----------|------|
| Daily | Monitor Vercel deployments |
| Weekly | Test all project links |
| Monthly | Update portfolio content |
| Quarterly | Review Lighthouse scores |
| Yearly | Renew domain + SSL certificates |

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Issues:** For bugs in your project

## Final Sign-Off

Before considering live:

- [x] All files present and compiling
- [ ] Content accurate and reviewed
- [ ] All links working
- [ ] Mobile responsive
- [ ] Performance good
- [ ] Domain connected
- [ ] Team notified

---

**Ready to launch!** 🚀

When ready:
```bash
git push origin main
# Vercel automatically deploys
# Site live in ~2 minutes
```
