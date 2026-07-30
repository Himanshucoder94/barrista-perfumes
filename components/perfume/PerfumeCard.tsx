import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Brand } from "@/types/brand";
import type { Perfume } from "@/types/perfume";
import { Button } from "@/components/ui/Button";
import { perfumeWhatsAppUrl } from "@/lib/whatsapp";

const familyGlow: Record<string, string> = {
  Woody: "from-[#7A5735]/28 via-transparent to-transparent",
  Floral: "from-[#7C3843]/26 via-transparent to-transparent",
  Fresh: "from-[#A7A29A]/18 via-transparent to-transparent",
  Oriental: "from-[#D8984A]/25 via-transparent to-transparent",
  Oud: "from-[#4A2F1D]/35 via-transparent to-transparent",
};

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
    <article className="group tilt-card overflow-hidden border border-[#C6A66B]/18 bg-[#101010] shadow-[0_28px_80px_rgba(0,0,0,.32)] hover:border-[#C6A66B]/55 hover:shadow-[0_34px_100px_rgba(198,166,107,.12)]">
      <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-b ${familyGlow[perfume.fragranceFamily] ?? "from-[#C6A66B]/20 via-transparent to-transparent"} bg-[#090909]`}>
        <div className="absolute inset-x-8 bottom-10 h-8 rounded-full bg-[#F3EEE5]/12 blur-xl transition group-hover:bg-[#C6A66B]/18" />
        <div className="absolute left-5 top-5 z-10 border border-[#C6A66B]/26 bg-[#090909]/50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#C6A66B] backdrop-blur">
          {perfume.fragranceFamily}
        </div>
        <Image
          src={perfume.images[0]}
          alt={`${perfume.name} perfume bottle visual`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/72 via-transparent to-transparent" />
      </div>
      <div className="relative p-5">
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A66B]/70 to-transparent" />
        <p className="text-xs uppercase tracking-[0.18em] text-[#C6A66B]">{brand.name}</p>
        <h3 className="mt-3 font-serif text-4xl leading-none text-[#F3EEE5]">{perfume.name}</h3>
        <p className="mt-3 min-h-14 text-sm leading-7 text-[#A7A29A]">{perfume.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[#A7A29A]">
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
            className="magnetic inline-flex min-h-11 items-center justify-center gap-2 border border-[#C6A66B] bg-[#C6A66B] px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#090909] transition hover:bg-[#F3EEE5]"
          >
            <MessageCircle size={15} /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
