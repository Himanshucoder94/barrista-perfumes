export type PerfumeGender = "Men" | "Women" | "Unisex";

export interface Perfume {
  id: string;
  slug: string;
  name: string;
  brandId: string;
  shortDescription: string;
  description: string;
  gender: PerfumeGender;
  fragranceFamily: "Woody" | "Floral" | "Fresh" | "Oriental" | "Oud";
  concentration: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  sizes: string[];
  images: string[];
  featured: boolean;
  available: boolean;
  displayOrder: number;
}
