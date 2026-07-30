import { describe, expect, it } from "vitest";
import { brands } from "@/data/brands";
import { perfumes } from "@/data/perfumes";
import { filterPerfumes, validateBrandPerfumeRelationships } from "@/lib/catalogue";

describe("catalogue utilities", () => {
  it("validates brand and perfume relationships", () => {
    expect(validateBrandPerfumeRelationships(brands, perfumes)).toEqual([]);
  });

  it("filters perfumes by brand", () => {
    const results = filterPerfumes(perfumes, brands, "Brand One");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((perfume) => perfume.brandId === "brand-one")).toBe(true);
  });

  it("filters perfumes by family and gender", () => {
    expect(filterPerfumes(perfumes, brands, "Oud").every((perfume) => perfume.fragranceFamily === "Oud")).toBe(true);
    expect(filterPerfumes(perfumes, brands, "Unisex").every((perfume) => perfume.gender === "Unisex")).toBe(true);
  });
});
