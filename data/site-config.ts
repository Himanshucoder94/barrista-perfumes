// Replace these placeholder business details before production launch.
export const siteConfig = {
  businessName: "Barrista Perfumes",
  tagline: "Curated fragrances. Timeless impressions.",
  description:
    "Discover distinctive fragrances selected for those who leave a lasting impression.",
  siteUrl: "https://barrista-perfumes.vercel.app",
  whatsappNumber: "911234567890",
  displayPhone: "+91 12345 67890",
  email: "hello@barristaperfumes.com",
  instagramUrl: "#",
  location: "Serving customers across India",
  businessHours: "Monday to Saturday, 10:00 AM - 7:00 PM",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ],
  seo: {
    defaultTitle: "Barrista Perfumes",
    titleTemplate: "%s | Barrista Perfumes",
    description:
      "A premium perfume catalogue for curated fragrances, personal guidance and direct WhatsApp assistance.",
    ogImage: "/images/hero/barrista-hero.svg",
  },
} as const;
