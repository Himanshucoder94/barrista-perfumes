import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export function ExperienceSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 border border-[#C6A66B]/22 p-6 sm:p-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Fragrance Consultation</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F3EEE5] sm:text-6xl">Not sure which fragrance suits you?</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#A7A29A]">
              Tell us the mood, notes or occasion you have in mind, and we will help you explore suitable options from the current catalogue.
            </p>
          </div>
          <ButtonLink href={generalWhatsAppUrl()} target="_blank" rel="noreferrer" className="lg:justify-self-end">
            <MessageCircle size={18} /> Speak with Us on WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
