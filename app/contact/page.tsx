import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site-config";
import { createMetadata } from "@/lib/seo";

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
      <section className="pt-32 pb-16">
        <Container>
          <Badge>Contact Us</Badge>
          <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-tight text-[#F3EEE5] sm:text-7xl">Let&apos;s find the fragrance you are looking for.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A7A29A]">
            Ask about availability, sizes, fragrance notes or recommendations. Barrista Perfumes will assist you directly.
          </p>
        </Container>
      </section>
      <section className="pb-24">
        <Container className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="border border-white/10 bg-[#101010] p-6 sm:p-8">
            <h2 className="font-serif text-4xl text-[#F3EEE5]">Contact details</h2>
            <dl className="mt-8 space-y-6">
              {methods.map(([label, value]) => (
                <div key={label}>
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
