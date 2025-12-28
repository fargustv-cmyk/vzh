# First Launch Checklist & Guide

## 🎯 Before You Push to GitHub

### Step 1: Verify Everything Works Locally

```bash
# In project directory
npm run dev
# Open http://localhost:3000
# ✓ Check page loads
# ✓ Click cards
# ✓ Hover effects work
# ✓ Links open in new tab
```

### Step 2: Build for Production

```bash
npm run build
# ✓ No errors
# ✓ Build completes in ~60 seconds
```

### Step 3: Update Content

Edit `app/data/data.json`:

```json
{
  "profile": {
    "name": "Your Name",
    "tagline": "Your Position",
    "photo": "/profile.jpg",
    "contacts": {
      "telegram": "https://t.me/yourhandle",
      "email": "mailto:your.email@example.com",
      "phone": "tel:+1234567890"
    }
  },
  "walletOrder": ["project1", "project2"],
  "projects": {
    "project1": {
      "id": "project1",
      "type": "project",
      "title": "Project Title",
      "cardColor": "#F5E6D3",
      "logo": "/logo.svg",
      "description": "Project description",
      "website": "https://example.com"
    }
  },
  "stacks": {},
  "stackItems": {}
}
```

### Step 4: Add Images

Place these files in `/public/`:
- `profile.jpg` — Your profile photo
- `og-image.jpg` — Social sharing image (1200×630)
- `favicon.ico` — Browser tab icon
- `*.svg` or `*.png` — Project logos

### Step 5: Update SEO

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://vozhakin.group"),
  title: "vozhakin.group",
  description: "Your description here",
  // ... rest of config
};
```

### Step 6: Test Mobile

Resize browser to mobile width:
```
F12 → Toggle device toolbar (Ctrl+Shift+M)
```

✓ Check:
- Header readable
- Cards stack properly
- No horizontal scroll
- Touch-friendly buttons

---

## 📤 Push to GitHub

### 1. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `wallet-portfolio` (or your choice)
3. Description: "Premium portfolio for Yasha Vozhakin"
4. Select **Public** or **Private**
5. Click "Create repository"

### 2. Configure Git Locally

```bash
# Set your Git identity
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Verify
git config user.name
git config user.email
```

### 3. Add Remote & Push

```bash
# Copy the HTTPS URL from your GitHub repo
# It looks like: https://github.com/username/wallet-portfolio.git

git remote add origin https://github.com/[USERNAME]/wallet-portfolio.git
git branch -M main
git add .
git commit -m "🎉 Initial commit: Premium portfolio setup"
git push -u origin main
```

### 4. Verify on GitHub

- Go to your GitHub repo
- Verify all files are there
- Check the code displays correctly

---

## 🚀 Deploy to Vercel

### 1. Create Vercel Account

Go to [vercel.com/signup](https://vercel.com/signup)
- Sign up with GitHub (recommended)
- Authorize GitHub access

### 2. Import Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `wallet-portfolio` repo
4. Click "Import"

### 3. Configure Project

**Framework Preset:** Next.js (auto-detected)

**Root Directory:** `./` (default)

**Build & Output:**
- Build Command: `npm run build` (auto)
- Output Directory: `.next` (auto)
- Install Command: `npm install` (auto)

**Environment Variables:** Leave empty (no env needed)

### 4. Deploy

Click "Deploy" button

⏳ Wait 2-3 minutes for first deploy

---

## ✅ Verify Deployment

### Check Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Look for green checkmark under "Deployments"
4. Status should say "READY"

### Test the Live Site

The Vercel deployment gives you a temporary URL like:
```
https://wallet-portfolio-[random].vercel.app
```

Test it:
- ✓ Page loads
- ✓ Cards interactive
- ✓ Links work
- ✓ Mobile responsive
- ✓ No console errors (F12)

---

## 🌐 Connect Custom Domain

### 1. Purchase Domain (if needed)

Popular registrars:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

### 2. Add to Vercel

In Vercel dashboard:

1. Go to Project Settings
2. Click "Domains"
3. Enter: `vozhakin.group`
4. Click "Add"

### 3. Update DNS Records

Vercel gives you nameservers. In your registrar:

1. Go to DNS settings
2. Change nameservers to Vercel's:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

⏳ Wait 24-48 hours for DNS propagation

### 4. Verify

```bash
# Check DNS propagation
nslookup vozhakin.group
# Should show Vercel's IP
```

---

## 🎨 After Going Live

### First Week

- [ ] Monitor Lighthouse scores (F12 → Lighthouse)
- [ ] Check analytics (Vercel dashboard)
- [ ] Test on different devices
- [ ] Verify all links work
- [ ] Check email notifications

### Monthly

- [ ] Update portfolio content
- [ ] Review performance metrics
- [ ] Check for broken links
- [ ] Update dependencies: `npm update`

### Quarterly

- [ ] Lighthouse audit
- [ ] Performance review
- [ ] Backup data.json
- [ ] Update content as needed

---

## 📊 Performance Targets

After deployment, check:

| Metric | Target | How to Check |
|--------|--------|-------------|
| Performance | > 90 | F12 → Lighthouse |
| Mobile | Responsive | F12 → Device toolbar |
| Links | All working | Click each link |
| Load Time | < 2s | Monitor tab in Vercel |

---

## 🆘 Troubleshooting

### Deployment Failed

1. Check build log: Dashboard → Deployments → Failed → View Logs
2. Common issues:
   - Syntax error in code (check TypeScript: `npm run build`)
   - Missing dependency (check package.json)
   - Image path wrong (must be `/public/...`)

### Site Not Loading

1. Check: Is deployment marked READY? (green checkmark)
2. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check browser console: `F12 → Console` for errors

### Changes Not Showing

1. Verify: `git log` shows your commit
2. Verify: GitHub shows new code
3. Check: Vercel redeployed (new build in Deployments tab)
4. Hard refresh browser

### DNS Not Working

```bash
# Check if DNS is ready
nslookup vozhakin.group
# If not found, wait 24 hours and retry

# Or use: https://www.whatsmydns.net
```

---

## 📞 Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🎉 Deployment Complete!

Your portfolio is now live at:

```
https://vozhakin.group
```

Share it:
- 🐦 Twitter
- 💼 LinkedIn
- 📧 Email
- 📱 Messaging apps

---

**Next Steps After Launch:**

1. Monitor analytics
2. Keep content updated
3. Watch for performance issues
4. Celebrate! 🎊

**Congratulations on your premium portfolio!** 🚀

---

**Built with:** Next.js 16 + TypeScript + Tailwind CSS  
**Hosted on:** Vercel  
**Domain:** vozhakin.group  
**Status:** 🟢 Live & Ready
