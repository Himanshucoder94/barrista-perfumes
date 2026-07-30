import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/seo";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description: "Contact Barrista Perfumes through WhatsApp for availability, sizes, notes and recommendations.",
  path: "/contact",
});

const methods = [
  ["WhatsApp", siteConfig.displayPhone],
  ["Phone", siteConfig.displayPhone],
  ["Email", siteConfig.email],
  ["Instagram", siteConfig.instagramUrl],
  ["Service Location", siteConfig.location],
  ["Business Hours", siteConfig.businessHours],
];

export default function ContactPage() {
  return (
    <>
      <section className="aurora-panel relative overflow-hidden pt-32 pb-20">
        <div className="mist-layer absolute inset-x-0 bottom-0 h-1/2" />
        <div className="absolute right-[8%] top-32 h-28 w-28 rotate-45 border border-[#C6A66B]/20 bg-[#C6A66B]/[.035] backdrop-blur-sm" />
        <Container>
          <Badge>Contact Us</Badge>
          <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.92] text-[#F3EEE5] sm:text-8xl">Let&apos;s find the fragrance you are looking for.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A7A29A]">
            Ask about availability, sizes, fragrance notes or recommendations. Barrista Perfumes will assist you directly.
          </p>
          <ButtonLink href={generalWhatsAppUrl()} target="_blank" rel="noreferrer" className="mt-9">
            <MessageCircle size={18} /> Start on WhatsApp
          </ButtonLink>
        </Container>
      </section>
      <section className="relative pb-24">
        <Container className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="glass-surface p-6 sm:p-8">
            <h2 className="font-serif text-5xl text-[#F3EEE5]">Direct details</h2>
            <dl className="mt-8 grid gap-px bg-[#C6A66B]/16">
              {methods.map(([label, value]) => (
                <div key={label} className="bg-[#0D0D0D]/92 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A66B]">{label}</dt>
                  <dd className="mt-2 break-words text-sm leading-7 text-[#A7A29A]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
