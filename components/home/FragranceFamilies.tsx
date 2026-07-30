"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const families = [
  ["Woody", "Structured, dry and composed, often built around cedar, vetiver, sandalwood or moss.", "rgba(122,87,53,.34)"],
  ["Floral", "Petal-led fragrances ranging from clean white florals to darker rose and textured bouquets.", "rgba(124,56,67,.32)"],
  ["Fresh", "Citrus, airy, green or aquatic profiles that feel clear, polished and easy to wear.", "rgba(167,162,154,.25)"],
  ["Oriental", "Warm spice, amber, resin and soft sweetness with a more enveloping signature.", "rgba(216,152,74,.3)"],
  ["Oud", "Deep, resinous and distinctive, often balanced with woods, spice, smoke or rose.", "rgba(65,42,28,.42)"],
];

export function FragranceFamilies() {
  const [active, setActive] = useState(0);
  const activeFamily = families[active];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 transition duration-700"
        style={{
          background: `radial-gradient(circle at 72% 42%, ${activeFamily[2]}, transparent 28rem)`,
        }}
      />
      <Container>
        <SectionHeading label="Fragrance Families" title="Choose by atmosphere, texture and trail." />
        <div className="relative grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="glass-surface relative min-h-[420px] overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(243,238,229,.12),transparent_14rem)]" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A66B]/20 bg-[#F3EEE5]/[.025] blur-[1px]" />
            <div className="relative flex min-h-[340px] flex-col justify-end">
              <p className="text-xs uppercase tracking-[0.24em] text-[#C6A66B]">Active Family</p>
              <h3 className="mt-4 font-serif text-7xl leading-none text-[#F3EEE5] sm:text-8xl">{activeFamily[0]}</h3>
              <p className="mt-6 max-w-md text-base leading-8 text-[#A7A29A]">{activeFamily[1]}</p>
            </div>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
          {families.map(([name, description], index) => (
            <button
              key={name}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className="group grid w-full gap-4 py-6 text-left transition hover:px-3 sm:grid-cols-[92px_1fr]"
            >
              <span className="font-serif text-4xl text-[#C6A66B]/75">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-serif text-4xl text-[#F3EEE5] transition group-hover:text-[#C6A66B]">{name}</span>
                <span className="mt-2 block text-sm leading-7 text-[#A7A29A]">{description}</span>
              </span>
            </button>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
