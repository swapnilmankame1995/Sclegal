# SheetCutters Legal Documentation

This repository contains the legal documentation and policy pages for SheetCutters.com.

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up at [Netlify](https://netlify.com)** (free)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Netlify auto-detects settings (build command: `npm run build`, publish directory: `dist`)
5. Click "Deploy"
6. Add custom domain in Site Settings → Domain Management
7. Update DNS: `CNAME legal → your-site.netlify.app`

### Option 2: Vercel

1. **Sign up at [Vercel](https://vercel.com)** (free)
2. Import your GitHub repository
3. Vercel auto-detects React settings
4. Deploy automatically
5. Add custom domain in project settings
6. Update DNS as instructed

### Option 3: GitHub Pages

1. Push all files to your GitHub repository
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. Push changes - the workflow will auto-deploy
5. Update DNS: `CNAME legal → username.github.io`

## 📁 Project Structure

```
/
├── App.tsx                 # Main app component
├── main.jsx               # Entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── Sidebar.tsx
│   ├── ContentArea.tsx
│   ├── Breadcrumbs.tsx
│   ├── WhatsAppButton.tsx
│   └── data.ts           # Content data
├── styles/
│   └── globals.css       # Global styles
├── public/
│   └── CNAME             # Custom domain
└── package.json          # Dependencies

```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Pages Available

- `/philosophy` - Our Philosophy
- `/contact` - Contact Us
- `/testimonials` - Testimonials
- `/privacy` - Privacy Policy
- `/returns` - Returns & Exchanges
- `/shipping` - Shipping Policy
- `/terms` - Terms & Conditions
- `/affiliate` - Affiliate Terms

## 🌐 Custom Domain

The site is configured for `legal.sheetcutters.com`

**DNS Configuration:**
- Type: CNAME
- Name: legal
- Value: [your-deployment-url]

## 📝 Making Updates

1. Edit content in `/components/data.ts`
2. Commit and push changes
3. Deployment happens automatically

## 🎨 Tech Stack

- React 18
- React Router (HashRouter for GitHub Pages compatibility)
- Tailwind CSS 4.0
- Vite
- Lucide Icons

## 📞 Support

For questions: support@sheetcutters.com or call 8123629917
