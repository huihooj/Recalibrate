# Recalibrate Landing Page

Static landing page for Recalibrate and the Recab Collection campaign.

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
4. Set the project root to `Recalibrate_Landing_Page` if the repository contains the full MKTG1001 folder.
5. Leave Build Command and Output Directory blank.
6. Deploy.

Option 2: Vercel CLI

```powershell
cd "C:\Users\Lecoo\Documents\MKTG1001\Recalibrate_Landing_Page"
npm i -g vercel
vercel
vercel --prod
```

For a static page, Vercel will serve `index.html` from the project root.
