# Architecture

Barrista Perfumes is a static Next.js App Router catalogue. It has three public routes: `/`, `/about` and `/contact`.

## Structure

- `app/` contains route files, metadata, sitemap, robots and global CSS.
- `components/` contains reusable layout, home, perfume and form UI.
- `data/` contains business configuration, brands and perfume records.
- `lib/` contains reusable logic for WhatsApp URLs, SEO metadata and catalogue filtering.
- `types/` contains catalogue TypeScript interfaces.
- `public/images/` contains local demo assets.
- `test/` contains Vitest utility tests.

## Data Flow

Brand and perfume components render from `data/brands.ts` and `data/perfumes.ts`. The Home page passes selected perfume data into a modal instead of routing to public product pages. Contact details render from `data/site-config.ts`.

## Why No Database Is Required

Phase 1 is a brochure and enquiry catalogue. Visitors browse content and contact the reseller through WhatsApp. There is no checkout, inventory management, account system or admin workflow, so static TypeScript data is simpler, faster and easier to deploy.

## Future CMS Migration

If the catalogue becomes large or requires non-developer editing, the `data/` files can be replaced by a CMS fetch layer. The current component contracts already use typed brand and perfume objects, so a CMS adapter can return the same shapes.

## Scaling to 14 or More Brands

Brand rendering uses arrays, sorting and responsive grids. Filters use brand names from data rather than page-specific markup. Adding brands does not require new public routes or redesigning the Home page.
