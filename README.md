# Barrista Perfumes

Premium static perfume catalogue website for **Barrista Perfumes**. The site is built for a Vercel preview demonstration and supports browsing brands, viewing perfume information, filtering the catalogue and starting WhatsApp enquiries. It does not include e-commerce, authentication, database access or backend forms.

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Next.js Image
- ESLint
- Vitest

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
```

## Vercel Deployment

1. Push this standalone repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use the default build command: `npm run build`.
5. Use the default output settings.
6. Update `data/site-config.ts` with the final site URL once the preview or production domain is known.

## Updating Business Details

Edit `data/site-config.ts`. Replace WhatsApp number, display phone, email, Instagram URL, service location, business hours and SEO defaults before production launch.

## Replacing Demo Brands

Edit `data/brands.ts`. Replace `Brand One` and `Brand Two` with customer-supplied brand names, stories, country details and image paths. Keep each `id` stable once perfumes reference it.

## Adding a New Brand

Add a new object to `brands` in `data/brands.ts` with a unique `id`, `slug`, image path and `displayOrder`. Add the brand artwork under `public/images/brands`.

## Adding a New Perfume

Add a new object to `perfumes` in `data/perfumes.ts`. Set `brandId` to an existing brand `id`, add notes, sizes, concentration and image paths. Prices are intentionally not part of Phase 1.

## Replacing Images

Place final customer assets under `public/images`. Update image paths in `data/brands.ts`, `data/perfumes.ts` and page components if hero/about assets change. See `docs/image-guide.md`.

## Production Launch Checklist

- Replace placeholder business contact details.
- Replace placeholder brand names and stories.
- Replace fictional perfume records with real catalogue content.
- Replace all demo SVG images with approved product and brand imagery.
- Update `siteConfig.siteUrl` to the final domain.
- Confirm WhatsApp number includes country code.
- Run `npm run lint`, `npm run typecheck`, `npm test` and `npm run build`.
- Review trademark notice and customer-approved wording.
