import { Container } from "@/components/ui/Container";

export function IntroSection() {
  return (
    <section id="intro" className="border-y border-white/10 py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Barrista Perfumes</p>
          <p className="font-serif text-3xl leading-tight text-[#F3EEE5] sm:text-4xl lg:text-5xl">
            Barrista Perfumes brings together carefully selected fragrances for individuals who value character, craftsmanship and distinction. Explore our current collections and speak directly with us for availability, sizes and recommendations.
          </p>
        </div>
      </Container>
    </section>
  );
}
