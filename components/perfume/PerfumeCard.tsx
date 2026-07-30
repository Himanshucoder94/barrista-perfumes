import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Brand } from "@/types/brand";
import type { Perfume } from "@/types/perfume";
import { Button } from "@/components/ui/Button";
import { perfumeWhatsAppUrl } from "@/lib/whatsapp";

export function PerfumeCard({
  perfume,
  brand,
  onViewDetails,
}: {
  perfume: Perfume;
  brand: Brand;
  onViewDetails: (perfume: Perfume) => void;
}) {
  return (
    <article className="group border border-white/10 bg-[#101010] transition duration-300 hover:border-[#C6A66B]/45">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#090909]">
        <Image
          src={perfume.images[0]}
          alt={`${perfume.name} perfume bottle visual`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-[#C6A66B]">{brand.name}</p>
        <h3 className="mt-3 font-serif text-3xl text-[#F3EEE5]">{perfume.name}</h3>
        <p className="mt-3 min-h-14 text-sm leading-7 text-[#A7A29A]">{perfume.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[#A7A29A]">
          <span>{perfume.fragranceFamily}</span>
          <span aria-hidden="true">/</span>
          <span>{perfume.gender}</span>
          <span aria-hidden="true">/</span>
          <span>{perfume.sizes.join(", ")}</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={() => onViewDetails(perfume)} className="px-3 text-[0.68rem]">
            View Details
          </Button>
          <a
            href={perfumeWhatsAppUrl(perfume, brand)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#C6A66B] bg-[#C6A66B] px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#090909] transition hover:bg-[#F3EEE5]"
          >
            <MessageCircle size={15} /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
