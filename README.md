# YourSite — GitHub Pages

Static export of the Next.js landing page.

## Live site

After Pages is pointed at the `gh-pages` branch:

https://oleksandr2024savchenko.github.io/YourSite/

## Required Pages setting (one-time)

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/ (root)`**
4. Save

Do **not** use `main` as the Pages branch — that only shows the README.

## Redeploy

```bash
git add -A
git commit -m "Update site"
git push origin main
```

GitHub Actions builds the site and updates the `gh-pages` branch automatically.
