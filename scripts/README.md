# Scripts Directory

Helpful scripts for project management.

## git-init.sh (macOS/Linux)

Initialize Git and create initial commit.

```bash
chmod +x scripts/git-init.sh
./scripts/git-init.sh
```

## git-init.ps1 (Windows PowerShell)

Initialize Git and create initial commit (Windows version).

```powershell
# Run in PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\scripts\git-init.ps1
```

Or right-click → "Run with PowerShell"

## Manual Setup

If scripts don't work, set up Git manually:

```bash
# Configure user
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Create main branch
git branch -M main

# Add remote (after creating on GitHub)
git remote add origin https://github.com/[username]/repo.git

# Push to GitHub
git push -u origin main
```

## Troubleshooting

**Script won't run (macOS/Linux):**
```bash
chmod +x scripts/git-init.sh
```

**PowerShell execution policy error:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Git not found:**
- Install from: https://git-scm.com
- macOS: `brew install git`
- Ubuntu: `sudo apt install git`

## After Running Scripts

1. Create GitHub repository
2. Add remote: `git remote add origin [URL]`
3. Push: `git push -u origin main`
4. Connect to Vercel dashboard
5. Deploy!

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions.
