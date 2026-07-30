"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Brand } from "@/types/brand";
import type { Perfume } from "@/types/perfume";
import { perfumeWhatsAppUrl } from "@/lib/whatsapp";
import { FragranceNotes } from "./FragranceNotes";

export function PerfumeModal({
  perfume,
  brand,
  onClose,
}: {
  perfume: Perfume | null;
  brand: Brand | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!perfume) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [perfume, onClose]);

  if (!perfume || !brand) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="perfume-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090909]/92 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="mx-auto my-6 grid max-w-6xl border border-[#C6A66B]/30 bg-[#0D0D0D] shadow-2xl md:my-12 md:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-[360px] bg-[#090909] md:min-h-[720px]">
          <Image
            src={perfume.images[0]}
            alt={`${perfume.name} bottle composition`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative p-6 sm:p-8 lg:p-12">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close perfume details"
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-[#F3EEE5] transition hover:text-[#C6A66B]"
          >
            <X size={24} />
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C6A66B]">{brand.name}</p>
          <h2 id="perfume-modal-title" className="mt-4 pr-10 font-serif text-5xl leading-tight text-[#F3EEE5]">
            {perfume.name}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#A7A29A]">{perfume.description}</p>
          <dl className="mt-8 grid gap-4 border-y border-white/10 py-6 text-sm sm:grid-cols-2">
            <div><dt className="text-[#A7A29A]">Family</dt><dd className="mt-1 text-[#F3EEE5]">{perfume.fragranceFamily}</dd></div>
            <div><dt className="text-[#A7A29A]">Gender</dt><dd className="mt-1 text-[#F3EEE5]">{perfume.gender}</dd></div>
            <div><dt className="text-[#A7A29A]">Concentration</dt><dd className="mt-1 text-[#F3EEE5]">{perfume.concentration}</dd></div>
            <div><dt className="text-[#A7A29A]">Sizes</dt><dd className="mt-1 text-[#F3EEE5]">{perfume.sizes.join(", ")}</dd></div>
          </dl>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <FragranceNotes title="Top Notes" notes={perfume.topNotes} />
            <FragranceNotes title="Heart Notes" notes={perfume.heartNotes} />
            <FragranceNotes title="Base Notes" notes={perfume.baseNotes} />
          </div>
          <p className="mt-8 border-l border-[#C6A66B] pl-4 text-sm leading-7 text-[#A7A29A]">
            Availability changes by size. Contact Barrista Perfumes directly for current options and guidance.
          </p>
          <a
            href={perfumeWhatsAppUrl(perfume, brand)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center border border-[#C6A66B] bg-[#C6A66B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#090909] transition hover:bg-[#F3EEE5]"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
