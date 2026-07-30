"use client";

import { useMemo, useState } from "react";
import { brands } from "@/data/brands";
import { perfumes } from "@/data/perfumes";
import type { Perfume } from "@/types/perfume";
import { filterPerfumes, getBrandById, type PerfumeFilter } from "@/lib/catalogue";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PerfumeFilters } from "@/components/perfume/PerfumeFilters";
import { PerfumeCard } from "@/components/perfume/PerfumeCard";
import { PerfumeModal } from "@/components/perfume/PerfumeModal";

const filters: PerfumeFilter[] = ["All", "Brand One", "Brand Two", "Men", "Women", "Unisex", "Woody", "Floral", "Fresh", "Oriental", "Oud"];

export function FeaturedPerfumes() {
  const [activeFilter, setActiveFilter] = useState<PerfumeFilter>("All");
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const filteredPerfumes = useMemo(() => filterPerfumes(perfumes, brands, activeFilter), [activeFilter]);
  const selectedBrand = selectedPerfume ? getBrandById(brands, selectedPerfume.brandId) ?? null : null;

  return (
    <section id="collection" className="border-y border-white/10 bg-[#0B0B0B] py-20 sm:py-28">
      <Container>
        <SectionHeading label="Current Catalogue" title="Eight demo fragrances, ready to be replaced.">
          Browse by brand, gender or fragrance family. Product details open in a focused enquiry overlay, with no cart or checkout.
        </SectionHeading>
        <PerfumeFilters filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPerfumes.map((perfume) => {
            const brand = getBrandById(brands, perfume.brandId);
            if (!brand) return null;
            return <PerfumeCard key={perfume.id} perfume={perfume} brand={brand} onViewDetails={setSelectedPerfume} />;
          })}
        </div>
      </Container>
      <PerfumeModal perfume={selectedPerfume} brand={selectedBrand} onClose={() => setSelectedPerfume(null)} />
    </section>
  );
}
