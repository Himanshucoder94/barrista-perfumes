import type { Brand } from "@/types/brand";
import type { Perfume, PerfumeGender } from "@/types/perfume";

export type PerfumeFilter =
  | "All"
  | string
  | PerfumeGender
  | "Woody"
  | "Floral"
  | "Fresh"
  | "Oriental"
  | "Oud";

export function getBrandById(brands: Brand[], brandId: string): Brand | undefined {
  return brands.find((brand) => brand.id === brandId);
}

export function getPerfumeCountForBrand(perfumes: Perfume[], brandId: string): number {
  return perfumes.filter((perfume) => perfume.brandId === brandId).length;
}

export function filterPerfumes(
  perfumes: Perfume[],
  brands: Brand[],
  activeFilter: PerfumeFilter,
): Perfume[] {
  if (activeFilter === "All") {
    return perfumes;
  }

  const matchingBrand = brands.find((brand) => brand.name === activeFilter);
  if (matchingBrand) {
    return perfumes.filter((perfume) => perfume.brandId === matchingBrand.id);
  }

  return perfumes.filter(
    (perfume) =>
      perfume.gender === activeFilter || perfume.fragranceFamily === activeFilter,
  );
}

export function validateBrandPerfumeRelationships(
  brands: Brand[],
  perfumes: Perfume[],
): string[] {
  const brandIds = new Set(brands.map((brand) => brand.id));
  return perfumes
    .filter((perfume) => !brandIds.has(perfume.brandId))
    .map((perfume) => `${perfume.name} references missing brand ${perfume.brandId}`);
}
