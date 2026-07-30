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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090909]/94 p-0 backdrop-blur-xl sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="aurora-panel mx-auto min-h-screen overflow-hidden border-[#C6A66B]/30 bg-[#0D0D0D] shadow-2xl sm:my-8 sm:min-h-0 sm:max-w-7xl sm:border md:grid md:grid-cols-[1.02fr_.98fr]">
        <div className="relative min-h-[46svh] overflow-hidden bg-[#090909] md:min-h-[820px]">
          <div className="absolute inset-x-12 bottom-20 h-12 rounded-full bg-[#F3EEE5]/10 blur-2xl" />
          <Image
            src={perfume.images[0]}
            alt={`${perfume.name} bottle composition`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover animate-[reveal_.65s_ease_both]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/76 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 border border-[#C6A66B]/30 bg-[#090909]/55 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#C6A66B] backdrop-blur">
            {perfume.fragranceFamily}
          </div>
        </div>
        <div className="relative p-6 sm:p-8 lg:p-14">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close perfume details"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 border border-[#C6A66B]/25 bg-[#090909]/60 p-3 text-[#F3EEE5] transition hover:border-[#C6A66B] hover:text-[#C6A66B]"
          >
            <X size={24} />
          </button>
          <p className="text-xs uppercase tracking-[0.24em] text-[#C6A66B]">{brand.name}</p>
          <h2 id="perfume-modal-title" className="mt-5 pr-12 font-serif text-6xl leading-[0.9] text-[#F3EEE5] sm:text-7xl lg:text-8xl">
            {perfume.name}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#A7A29A]">{perfume.description}</p>
          <dl className="mt-9 grid gap-px bg-[#C6A66B]/18 text-sm sm:grid-cols-2">
            {[
              ["Family", perfume.fragranceFamily],
              ["Gender", perfume.gender],
              ["Concentration", perfume.concentration],
              ["Sizes", perfume.sizes.join(", ")],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0D0D0D]/92 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-[#A7A29A]">{label}</dt>
                <dd className="mt-2 font-serif text-2xl text-[#F3EEE5]">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Olfactive Structure</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="glass-surface p-4"><FragranceNotes title="Top Notes" notes={perfume.topNotes} /></div>
              <div className="glass-surface p-4"><FragranceNotes title="Heart Notes" notes={perfume.heartNotes} /></div>
              <div className="glass-surface p-4"><FragranceNotes title="Base Notes" notes={perfume.baseNotes} /></div>
            </div>
          </div>
          <p className="mt-8 border-l border-[#C6A66B] pl-4 text-sm leading-7 text-[#A7A29A]">
            Availability changes by size. Contact Barrista Perfumes directly for current options and guidance.
          </p>
          <a
            href={perfumeWhatsAppUrl(perfume, brand)}
            target="_blank"
            rel="noreferrer"
            className="magnetic mt-8 inline-flex min-h-12 items-center justify-center border border-[#C6A66B] bg-[#C6A66B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#090909] transition hover:bg-[#F3EEE5]"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
