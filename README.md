# Orbis 360 Studios website

A responsive Next.js website configured for static export and Vercel deployment.

## Run locally

1. Install Node.js 20 or newer.
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.
4. Run `npm run build` to validate the production build. Static files are generated in `out/`.

## Deploy to Vercel

1. Create a GitHub repository and upload the contents of this folder.
2. In Vercel, select **Add New → Project** and import the repository.
3. Framework: Next.js. Build command: `npm run build`. Output directory: `out` (usually detected automatically).
4. Deploy and connect your domain.

## Before launch

- Replace `https://www.orbis360studios.in` in `app/layout.tsx` and `public/sitemap.xml` with your final domain if different.
- Add actual published 360° tour URLs and replace the portfolio placeholder previews in `app/page.tsx`. The current preview cards are illustrative design placeholders, not live 360° tours.
- Add real portfolio photographs and social profile links as they become available.
- Verify your business phone, service details and Google Business Profile information.
- The enquiry form opens WhatsApp with the details pre-filled; it does not send or store the enquiry automatically.
- Google ranking cannot be guaranteed. For stronger local SEO, create useful original case studies for real projects, keep your Google Business Profile complete, collect genuine reviews, and add relevant city-specific pages only when you can provide unique local information.

## Key files

- `app/page.tsx` — page content, services, cities, FAQ and enquiry form.
- `app/globals.css` — responsive design system and styles.
- `app/layout.tsx` — metadata and LocalBusiness/ProfessionalService structured data.
- `public/orbis360-logo.png` — cropped version of the supplied logo.
- `public/robots.txt`, `public/sitemap.xml` — crawler guidance and sitemap.
