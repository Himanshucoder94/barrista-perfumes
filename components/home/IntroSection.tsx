import { Container } from "@/components/ui/Container";

export function IntroSection() {
  return (
    <section id="intro" className="relative overflow-hidden border-y border-[#C6A66B]/14 py-24 sm:py-32">
      <div className="absolute left-0 top-0 h-full w-px bg-[#C6A66B]/35 md:left-[8vw]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Barrista Perfumes</p>
            <div className="metal-line mt-6 h-px w-28" />
          </div>
          <p className="font-serif text-4xl leading-tight text-[#F3EEE5] sm:text-5xl lg:text-6xl">
            Barrista Perfumes brings together carefully selected fragrances for individuals who value character, craftsmanship and distinction. Explore our current collections and speak directly with us for availability, sizes and recommendations.
          </p>
        </div>
      </Container>
    </section>
  );
}
