# Content Guide

## Business Details

Update `data/site-config.ts`:

- `businessName`
- `tagline`
- `description`
- `whatsappNumber`
- `displayPhone`
- `email`
- `instagramUrl`
- `location`
- `businessHours`
- `siteUrl`
- `seo`

## Brand Names and Stories

Update `data/brands.ts`. Replace demo names, short descriptions, full descriptions, country placeholders and image paths.

## Perfume Descriptions

Update `data/perfumes.ts`. Replace fictional perfume names, descriptions, gender, family, concentration, notes, sizes and availability.

## Notes

Each perfume has:

- `topNotes`
- `heartNotes`
- `baseNotes`

Use short note names and avoid claims that have not been confirmed by the customer.

## Contact Information

All contact page values come from `data/site-config.ts`. The WhatsApp form builds a URL locally and does not send data to a backend.

## SEO Metadata

Global SEO defaults are in `data/site-config.ts`. Page-specific metadata is set in each route file using `lib/seo.ts`.
