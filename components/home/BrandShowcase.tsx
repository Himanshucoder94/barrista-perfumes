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
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(198,166,107,.12),transparent_28rem),radial-gradient(circle_at_82%_70%,rgba(243,238,229,.045),transparent_24rem)]" />
      <Container>
        <SectionHeading label="Selected Houses" title="Campaign-led collections with room to grow.">
          The structure starts with two selected brands and is designed to remain composed as new perfume houses are introduced.
        </SectionHeading>
        <div className="relative space-y-8">
          {activeBrands.map((brand, index) => (
            <a
              key={brand.id}
              href="#collection"
              className="group aurora-panel grid min-h-[560px] overflow-hidden border border-[#C6A66B]/20 bg-[#0D0D0D] transition duration-500 hover:border-[#C6A66B]/55 lg:grid-cols-[1.15fr_.85fr]"
            >
              <div className={`relative min-h-[330px] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={brand.heroImage}
                  alt={`${brand.name} cinematic perfume collection visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/82 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-[6rem] font-semibold leading-none text-[#F3EEE5]/[.035] sm:text-[9rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <div className="absolute right-5 top-6 hidden origin-top-right rotate-90 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#C6A66B]/70 lg:block">
                  Collection
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C6A66B]">{brand.country}</p>
                <h3 className="mt-5 text-balance font-serif text-6xl leading-none text-[#F3EEE5] sm:text-7xl lg:text-8xl">{brand.name}</h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#A7A29A]">{brand.description}</p>
                <div className="mt-8 flex items-center gap-5">
                  <span className="font-serif text-5xl text-[#C6A66B]">{getPerfumeCountForBrand(perfumes, brand.id)}</span>
                  <span className="max-w-32 text-xs uppercase tracking-[0.18em] text-[#A7A29A]">listed fragrances</span>
                </div>
                <span className="mt-9 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A66B] transition group-hover:translate-x-2">
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
