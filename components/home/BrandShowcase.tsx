import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { perfumes } from "@/data/perfumes";
import { getPerfumeCountForBrand } from "@/lib/catalogue";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandShowcase() {
  const activeBrands = brands.filter((brand) => brand.active).sort((a, b) => a.displayOrder - b.displayOrder);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading label="Selected Houses" title="Collections with room to grow.">
          The structure starts with two selected brands and is designed to remain composed as new perfume houses are introduced.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activeBrands.map((brand) => (
            <a
              key={brand.id}
              href="#collection"
              className="group grid min-h-[520px] overflow-hidden border border-white/10 bg-[#101010] transition hover:border-[#C6A66B]/45"
            >
              <div className="relative min-h-[300px] overflow-hidden">
                <Image src={brand.heroImage} alt={`${brand.name} editorial perfume visual`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C6A66B]">{brand.country}</p>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#A7A29A]">
                    {getPerfumeCountForBrand(perfumes, brand.id)} fragrances
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-4xl text-[#F3EEE5]">{brand.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#A7A29A]">{brand.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A66B]">
                  View Collection <ArrowRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
