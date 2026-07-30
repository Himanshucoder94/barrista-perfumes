import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const families = [
  ["Woody", "Structured, dry and composed, often built around cedar, vetiver, sandalwood or moss."],
  ["Floral", "Petal-led fragrances ranging from clean white florals to darker rose and textured bouquets."],
  ["Fresh", "Citrus, airy, green or aquatic profiles that feel clear, polished and easy to wear."],
  ["Oriental", "Warm spice, amber, resin and soft sweetness with a more enveloping signature."],
  ["Oud", "Deep, resinous and distinctive, often balanced with woods, spice, smoke or rose."],
];

export function FragranceFamilies() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading label="Fragrance Families" title="Choose by mood, not by noise." />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {families.map(([name, description], index) => (
            <div key={name} className="grid gap-4 py-7 md:grid-cols-[120px_1fr] md:items-baseline">
              <span className="font-serif text-5xl text-[#C6A66B]/80">{String(index + 1).padStart(2, "0")}</span>
              <div className="grid gap-3 md:grid-cols-[.45fr_1fr] md:items-baseline">
                <h3 className="font-serif text-4xl text-[#F3EEE5]">{name}</h3>
                <p className="text-base leading-8 text-[#A7A29A]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
