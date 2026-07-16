# Deployment Guide

## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages.

### Prerequisites

1. Make sure your repository is named `mobile-shop` (or update the base path in `.env.production`)
2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select `gh-pages` branch
   - Click Save

### Deployment Steps

#### Option 1: Using the deployment script (Recommended)

```bash
# Make the script executable (Linux/Mac)
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

#### Option 2: Manual deployment

```bash
# 1. Build the project
npm run build

# 2. Deploy using gh-pages package
# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d dist
```

#### Option 3: Using git subtree

```bash
# 1. Build the project
npm run build

# 2. Push dist folder to gh-pages branch
git add dist/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Vercel Deployment

If deploying to Vercel:

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your `mobile-shop` repository from GitHub
5. Vercel will automatically detect the Vite framework
6. The `vercel.json` configuration file will handle the build settings
7. Click "Deploy"

Your site will be live at: `https://mobile-shop.vercel.app/` (or your custom domain)

**Note**: Vercel uses `/` as the base path, so icons and assets will load correctly.

### Environment Variables

- `.env` - Used for local development (base path: `/`)
- `.env.production` - Used for production builds (base path: `/mobile-shop/`)

### Troubleshooting

**Issue: Assets not loading on deployed site**

- Make sure `.env.production` has the correct base path
- Rebuild the project after changing environment variables
- Check that GitHub Pages is enabled in repository settings

**Issue: Icons not showing (lucide-react error)**

- Run `npm install` to ensure all dependencies are installed
- The `lucide-react` package is already in `package.json`

### Live Site

Once deployed, your site will be available at:
`https://rezaul3950.github.io/mobile-shop/`