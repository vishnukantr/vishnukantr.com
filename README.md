# vishnukantrr.com — Ultra‑Apple Cinematic (Next.js + Tailwind)

## 1) Run locally (Mac)
1. Install Node.js LTS (nodejs.org)
2. In Terminal inside this folder:
```bash
npm install
npm run dev
```
Open http://localhost:3000

## 2) Add your personal images (make it *yours*)
Put images in: `/public/images/`

Recommended:
- `/public/images/hero.jpg` (your portrait or a premium photo)
- `/public/images/amwaaj.jpg` (majlis / desert / luxury cultural image)
- `/public/images/logo.png` (optional)

Then update these lines in `app/page.js`:
- HERO_IMAGE = "/images/hero.jpg"
- AMWAAJ_IMAGE = "/images/amwaaj.jpg"

## 3) CV downloads
Place your PDF files in `/public/`:
- `/public/VishnukantR_CV_012026.pdf` (Marketing CV)
- `/public/VishnukantR_CV_012026_BD.pdf` (BD CV)

## 4) Deploy on Vercel (recommended)
- Push repo to GitHub
- Go to Vercel → Add New Project → Import repo → Deploy
- In Vercel: Settings → Domains → add `vishnukantrr.com`
- Vercel will show 1 A record + 1 CNAME to add in GoDaddy DNS

That’s it.
