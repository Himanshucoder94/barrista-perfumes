import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <Image
        src="/images/hero/barrista-hero.svg"
        alt="Cinematic perfume bottle silhouettes with warm reflections"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/72 to-transparent" />
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <Badge>A Curated World of Fragrance</Badge>
          <h1 className="mt-6 text-balance font-serif text-6xl leading-[0.95] text-[#F3EEE5] sm:text-7xl lg:text-8xl">
            Fragrance, chosen with intention.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D4CEC4]">
            Barrista Perfumes curates distinctive fragrances from selected perfume houses for people who value character, craftsmanship and quiet presence.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#collection">Explore the Collection</ButtonLink>
            <ButtonLink href={generalWhatsAppUrl()} target="_blank" rel="noreferrer" variant="secondary">
              <MessageCircle size={18} /> Enquire on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
      <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[#C6A66B] md:block">
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}
