# Professional Portfolio Website Builder

A modern multi-page portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update Your Content

1. Edit `src/data/portfolio.json`.
2. Replace placeholders like `[YOUR_NAME]`, `[PROJECT_NAME]`, `[EMAIL]`, and `[BLOG_POST_TITLE]`.
3. Add/remove projects and blog entries in the same file.

## Theme Customization

Update color variables in `src/styles/variables.css`.

## Contact Form Setup

### Netlify Forms (default)
- Form is preconfigured with `data-netlify="true"`.
- Deploy on Netlify and enable form notifications.

### EmailJS (optional)
- Add EmailJS client integration in `src/components/ContactForm.tsx`.
- Store IDs/keys in `.env.local` and set in Netlify environment variables.

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `.next`
- Config is already included in `netlify.toml`
- Connect GitHub repo to Netlify for auto-deploy.

## SEO and Accessibility

- Sticky semantic header/nav and skip-to-content link
- Focus-visible styles and keyboard-friendly controls
- Theme persistence via `localStorage`
- `robots.txt` and `sitemap.xml` included

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
