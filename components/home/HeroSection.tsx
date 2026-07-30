import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="aurora-panel relative flex min-h-[100svh] items-center overflow-hidden pt-20">
      <Image
        src="/images/hero/barrista-hero.svg"
        alt="Layered perfume bottle artwork with floating glass forms and warm reflections"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-95 will-change-transform md:scale-[1.03]"
      />
      <div className="mist-layer absolute inset-x-0 bottom-0 h-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,transparent_0,rgba(9,9,9,.24)_32%,rgba(9,9,9,.86)_76%)]" />
      <div className="absolute left-[8%] top-[18%] hidden h-28 w-28 rounded-full border border-[#F3EEE5]/10 bg-white/[.025] blur-[1px] animate-[float-slow_9s_ease-in-out_infinite] md:block" />
      <div className="absolute right-[12%] top-[16%] h-20 w-20 rotate-45 border border-[#C6A66B]/22 bg-[#C6A66B]/[.035] backdrop-blur-sm animate-[float-slow_11s_ease-in-out_infinite]" />
      <div className="absolute bottom-[18%] right-[22%] hidden h-16 w-16 rounded-full border border-[#C6A66B]/25 bg-[#F3EEE5]/[.035] md:block" />
      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          <Badge>An Elevated World of Fragrance</Badge>
          <h1 className="mt-6 text-balance font-serif text-6xl leading-[0.88] text-[#F3EEE5] sm:text-8xl lg:text-[9.2rem]">
            Fragrance, <span className="gold-text">composed</span> beyond the ordinary.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D4CEC4] sm:text-xl">
            Barrista Perfumes curates distinctive scents for those who value presence, depth and individuality.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#collection">Explore the Collection</ButtonLink>
            <ButtonLink href={generalWhatsAppUrl()} target="_blank" rel="noreferrer" variant="secondary">
              <MessageCircle size={18} /> Speak on WhatsApp
            </ButtonLink>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-px bg-[#C6A66B]/20 text-center">
            {["Curated", "Direct", "Personal"].map((item) => (
              <div key={item} className="bg-[#090909]/72 px-3 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#A7A29A] backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[#C6A66B] md:flex">
        <span className="h-px w-12 bg-[#C6A66B]/55" />
        <ArrowDown className="animate-bounce" size={20} />
        <span className="h-px w-12 bg-[#C6A66B]/55" />
      </a>
    </section>
  );
}
