import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description: "Learn about Barrista Perfumes and its considered approach to fragrance discovery.",
  path: "/about",
});

const philosophy = [
  ["Fragrance is personal", "A scent should feel connected to the person wearing it, not simply fashionable."],
  ["Selection should be thoughtful", "The catalogue is kept intentional so customers can compare with clarity."],
  ["Assistance should be human", "Questions about notes, sizes and suitability are best handled through direct conversation."],
];

const values = ["Taste", "Transparency", "Attention", "Long-term relationships"];

export default function AboutPage() {
  return (
    <>
      <section className="aurora-panel relative overflow-hidden pt-32">
        <div className="mist-layer absolute inset-x-0 bottom-0 h-1/2" />
        <Container className="grid gap-10 pb-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>About Barrista Perfumes</Badge>
            <h1 className="mt-6 font-serif text-6xl leading-[0.92] text-[#F3EEE5] sm:text-8xl">A considered approach to fragrance.</h1>
            <p className="mt-6 text-lg leading-8 text-[#A7A29A]">
              Barrista Perfumes is a fragrance reseller and curator focused on helping customers discover distinctive perfumes with personal guidance.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-[#C6A66B]/22 shadow-[0_35px_100px_rgba(0,0,0,.45)]">
            <Image src="/images/about/about-atelier.svg" alt="Editorial perfume atelier visual" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/55 via-transparent to-transparent" />
          </div>
        </Container>
      </section>
      <section className="border-y border-[#C6A66B]/16 py-24">
        <Container>
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Brand Story</p>
            <p className="mt-6 font-serif text-4xl leading-tight text-[#F3EEE5] sm:text-6xl">
              The catalogue currently includes selected perfume houses, with more brands and collections to be introduced over time. The aim is to make fragrance discovery more personal, informed and direct.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="grid gap-px bg-[#C6A66B]/18 md:grid-cols-3">
            {philosophy.map(([title, copy], index) => (
              <div key={title} className="bg-[#090909] p-7 sm:p-9">
                <span className="font-serif text-5xl text-[#C6A66B]/35">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-10 font-serif text-4xl text-[#F3EEE5]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#A7A29A]">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="aurora-panel bg-[#101010] py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Current and Future Collections</p>
            <h2 className="mt-5 font-serif text-6xl leading-none text-[#F3EEE5]">Built for expansion.</h2>
            <p className="mt-5 text-base leading-8 text-[#A7A29A]">
              Barrista Perfumes starts with selected perfume houses and a flexible catalogue structure. New brands can be added through data files without creating public product pages or changing the browsing experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#C6A66B]/18">
            {values.map((value) => (
              <div key={value} className="bg-[#101010]/92 p-8 font-serif text-3xl text-[#F3EEE5]">{value}</div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <div className="glass-surface p-8 sm:p-12">
            <p className="font-serif text-3xl leading-tight text-[#C6A66B]">&quot;Fragrance should be chosen with attention, not urgency.&quot;</p>
            <h2 className="mt-8 font-serif text-5xl text-[#F3EEE5] sm:text-7xl">Speak with us directly.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#A7A29A]">Ask about availability, sizes, fragrance notes or recommendations for the current catalogue.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={generalWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact Page</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
