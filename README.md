# Patrick Pucan — Portfolio

Personal portfolio of Patrick Pucan, senior full-stack developer and Shopify Plus specialist.
Plain HTML, CSS, and JavaScript. No build step.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio page |
| `style.css` | Styles (Jost font, dark navy and green theme) |
| `script.js` | Expand/collapse roles, copy buttons, footer year |
| `profile.jpg` | Profile photo |
| `resume.pdf` | Resume linked from the Resume button |
| `favicon.svg` | Browser tab icon |
| `404.html` | Page shown for broken links |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Deploy on GitHub Pages

1. Create a repository named `<your-username>.github.io` (for `https://<your-username>.github.io`), or any name (for `https://<your-username>.github.io/<repo-name>/`).
2. Upload these files to the root of the repository, or push them:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then click **Save**.
5. After a minute or two, the live URL appears at the top of the Pages settings.

## Updating

Edit the files and push again. GitHub Pages redeploys automatically.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain and follow GitHub's DNS instructions, then tick **Enforce HTTPS**.
