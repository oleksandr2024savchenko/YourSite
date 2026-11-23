# ClearPoint — GitHub Pages

Static export of the Next.js website for Vienna web projects.

## Live site

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

GitHub Actions builds the site and updates the `gh-pages` branch automatically
(on pushes to `main` and to the working branch `claude/bold-feynman-52ayl5`).
The Pages build is a **preview**: it is marked `noindex` so it never competes
with the main domain in search. Production (clearpoint.at) is deployed only from
`main` via `deploy-server.yml`.

## Contact form

Enquiry forms post to FormSubmit (`hello@clearpoint.at`). The first submission sends a confirmation mail that must be approved once.
