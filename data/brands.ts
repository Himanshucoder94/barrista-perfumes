import type { Brand } from "@/types/brand";

// Demo brand data. Replace names, stories and imagery with customer-supplied brand details.
export const brands: Brand[] = [
  {
    id: "brand-one",
    name: "Brand One",
    slug: "brand-one",
    shortDescription: "Refined compositions with warm woods and luminous spice.",
    description:
      "A placeholder perfume house representing textured evening fragrances, polished woods and subtle amber depth.",
    country: "Origin to be confirmed",
    heroImage: "/images/brands/brand-one.svg",
    featured: true,
    active: true,
    displayOrder: 1,
  },
  {
    id: "brand-two",
    name: "Brand Two",
    slug: "brand-two",
    shortDescription: "Airy florals, clean musks and quietly expressive blends.",
    description:
      "A placeholder perfume house shaped around luminous florals, fresh notes and soft modern trails.",
    country: "Origin to be confirmed",
    heroImage: "/images/brands/brand-two.svg",
    featured: true,
    active: true,
    displayOrder: 2,
  },
];

export const activeBrands = brands
  .filter((brand) => brand.active)
  .sort((a, b) => a.displayOrder - b.displayOrder);
