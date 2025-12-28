# git-init.ps1 - Initialize Git repository for vozhakin.group portfolio (Windows)

Write-Host "🚀 Initializing vozhakin.group Git repository..." -ForegroundColor Green

# Check if git is installed
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Configure git
Write-Host "⚙️  Configuring Git..." -ForegroundColor Cyan
$gitName = Read-Host "Enter your name (for git commits)"
$gitEmail = Read-Host "Enter your email (for git commits)"

git config user.name "$gitName"
git config user.email "$gitEmail"

# Initialize if not already initialized
if (!(Test-Path .git)) {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

# Get git status
$status = git status --porcelain 2>&1

# Create initial commit
if ($status -and $status -ne "") {
    git add .
    $commitMsg = @"
🎉 Initial commit: Premium portfolio setup

- Wallet component with type-safe card stack
- Data-driven content from data.json
- Responsive design with Tailwind CSS
- Vercel-ready deployment
- Full documentation

Ready for deployment to vozhakin.group
"@
    git commit -m $commitMsg
    Write-Host "✅ Initial commit created" -ForegroundColor Green
} else {
    Write-Host "No changes to commit" -ForegroundColor Yellow
}

# Setup main branch
try {
    git branch -M main 2>$null
} catch {
    # Branch already main or error, ignore
}

Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Create repository on GitHub (https://github.com/new)" -ForegroundColor White
Write-Host "2. Add remote:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/[username]/wallet-portfolio.git" -ForegroundColor Yellow
Write-Host "3. Push:" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host "4. Connect to Vercel: https://vercel.com/new" -ForegroundColor White
Write-Host ""
Write-Host "✨ Happy deploying!" -ForegroundColor Green
