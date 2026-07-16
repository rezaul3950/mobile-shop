#!/bin/bash

# Build the project
npm run build

# Deploy to GitHub Pages
# Make sure you have the gh-pages package installed: npm install -g gh-pages

# Add dist folder to git
git add dist/

# Commit the build
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git subtree push --prefix dist origin gh-pages

echo "Deployment complete! Your site will be available at https://rezaul3950.github.io/mobile-shop/"