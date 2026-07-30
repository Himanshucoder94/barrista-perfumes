export interface Brand {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  country?: string;
  logo?: string;
  heroImage: string;
  featured: boolean;
  active: boolean;
  displayOrder: number;
}
