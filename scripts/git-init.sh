#!/bin/bash
# git-init.sh - Initialize Git repository for vozhakin.group portfolio

set -e

echo "🚀 Initializing vozhakin.group Git repository..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Configure git
echo "⚙️  Configuring Git..."
read -p "Enter your name (for git commits): " GIT_NAME
read -p "Enter your email (for git commits): " GIT_EMAIL

git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"

# Initialize if not already initialized
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create initial commit
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit"
else
    git add .
    git commit -m "🎉 Initial commit: Premium portfolio setup

- Wallet component with type-safe card stack
- Data-driven content from data.json
- Responsive design with Tailwind CSS
- Vercel-ready deployment
- Full documentation

Ready for deployment to vozhakin.group"
    echo "✅ Initial commit created"
fi

# Setup main branch
git branch -M main 2>/dev/null || true

echo ""
echo "📝 Next steps:"
echo "1. Create repository on GitHub (https://github.com/new)"
echo "2. Add remote: git remote add origin https://github.com/[username]/wallet-portfolio.git"
echo "3. Push: git push -u origin main"
echo "4. Connect to Vercel: https://vercel.com/new"
echo ""
echo "✨ Happy deploying!"
