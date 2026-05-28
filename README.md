# Recalibrate Landing Page

Static Wix-inspired landing page for the Recalibrate wellness resort.

## Local Preview

Open `index.html` directly in a browser, or run a local static server from this folder:

```powershell
python -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173
```

## Deploy to Vercel

Option 1: Vercel dashboard

1. Upload or push this folder to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Keep the project root as the repository root.
5. Leave Build Command and Output Directory blank.
6. Deploy.

Option 2: Vercel CLI

```powershell
cd "C:\Users\Lecoo\Documents\MKTG1001\Recalibrate_repo"
npm i -g vercel
vercel
vercel --prod
```

For a static page, Vercel will serve `index.html` from the project root.

## Visual Sources

The page uses local stock-style photography stored in `assets/`, downloaded from Pexels for preview/deployment stability.
