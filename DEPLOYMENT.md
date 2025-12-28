# Deployment Guide

## Vercel Deployment

This project is configured for automatic deployment to Vercel.

### Prerequisites

1. GitHub repository (git remote)
2. Vercel account (vercel.com)
3. Connected GitHub account to Vercel

### Setup

1. **Push code to GitHub:**

```bash
git add .
git commit -m "Initial commit: Premium portfolio setup"
git push origin main
```

2. **Import project to Vercel:**

- Go to https://vercel.com/new
- Select "Import Git Repository"
- Choose your GitHub repository
- Click "Import"

3. **Environment Variables (if needed):**

- Leave as default (no env vars needed for this portfolio)

4. **Deploy:**

- Click "Deploy"
- Vercel will automatically build and deploy

### Automatic Deployments

After initial setup:

1. Any push to `main` branch triggers automatic build & deploy
2. Preview deployments for pull requests
3. Automatic rollback on build failure

### Custom Domain

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `vozhakin.group`
4. Follow DNS setup instructions from your registrar
5. Update `metadataBase` in `app/layout.tsx` if needed

### Building Locally

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Check for build errors
npm run build -- --no-optimize  # More verbose output
```

### Troubleshooting

**Build fails:**
- Check `npm run build` output locally
- Verify all imports are correct
- Check TypeScript errors: `npx tsc --noEmit`

**Deployment takes long:**
- Normal for first deploy (~2-3 minutes)
- Subsequent deploys faster (~30-60 seconds)

**Domain not resolving:**
- DNS propagation can take up to 24 hours
- Verify DNS records in registrar settings
- Check Vercel dashboard for correct nameservers

### Monitoring

- Build logs: Vercel dashboard → Deployments tab
- Real-time logs: Vercel CLI `vercel logs`
- Performance: Vercel Analytics dashboard

## GitHub Setup

Ensure `git` is configured:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Verify remote
git remote -v
# Should show: origin https://github.com/[username]/[repo].git

# Push changes
git push origin main
```

## Content Updates

To update portfolio content:

1. Edit `app/data/data.json`
2. Commit and push:

```bash
git add app/data/data.json
git commit -m "Update portfolio content"
git push origin main
```

3. Vercel automatically deploys changes
4. Website updates in ~1-2 minutes

## Local Development Tips

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Format code
npm run lint --fix

# Build for production
npm run build

# Test production build locally
npm run build && npm start
```

## Performance Checklist

- [ ] Images optimized (under 500KB total)
- [ ] No console errors or warnings
- [ ] Lighthouse score > 90
- [ ] Mobile responsive tested
- [ ] All links working

Run Lighthouse audit in Chrome DevTools (F12 → Lighthouse).
