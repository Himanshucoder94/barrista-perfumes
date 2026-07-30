import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  return (
    <section className="aurora-panel relative overflow-hidden border-t border-white/10 py-24 sm:py-36">
      <div className="mist-layer absolute inset-x-0 bottom-0 h-2/3" />
      <Container className="relative">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">Direct Enquiry</p>
          <h2 className="mt-5 text-balance font-serif text-6xl leading-[0.95] text-[#F3EEE5] sm:text-8xl">
            Your next signature fragrance may be one conversation away.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={generalWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Start a WhatsApp Conversation
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">View Contact Details</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
