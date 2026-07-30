import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  ["Curated Selection", "A focused catalogue selected for character, wearability and distinctive composition."],
  ["Authentic Sourcing", "We focus on thoughtfully sourced products and transparent customer assistance."],
  ["Personal Guidance", "Ask for help by occasion, note preference, season or the impression you want to leave."],
  ["Direct Assistance", "Availability, sizes and recommendations are handled through direct conversation."],
];

export function AuthenticitySection() {
  return (
    <section className="bg-[#101010] py-20 sm:py-28">
      <Container>
        <SectionHeading label="Why Barrista Perfumes" title="A quieter way to discover fragrance." />
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {pillars.map(([title, copy]) => (
            <div key={title} className="bg-[#101010] p-6 sm:p-8">
              <h3 className="font-serif text-3xl text-[#F3EEE5]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#A7A29A]">{copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
