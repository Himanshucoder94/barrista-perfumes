import Link from "next/link";
import { Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { generalWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="aurora-panel border-t border-[#C6A66B]/18 bg-[#080808] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <p className="font-serif text-6xl leading-none text-[#F3EEE5] sm:text-7xl">Barrista Perfumes</p>
            <p className="mt-6 max-w-lg font-serif text-3xl leading-tight text-[#F3EEE5]">Curated fragrances for lasting presence.</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#A7A29A]">{siteConfig.tagline}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#A7A29A]">
              All trademarks belong to their respective owners.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.16em] text-[#A7A29A] hover:text-[#F3EEE5]">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 text-sm text-[#A7A29A]">
            <a href={generalWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#C6A66B] hover:text-[#F3EEE5]">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={siteConfig.instagramUrl} className="inline-flex items-center gap-2 hover:text-[#F3EEE5]">
              <Camera size={16} /> Instagram
            </a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-[#F3EEE5]">
              <Mail size={16} /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2"><Phone size={16} /> {siteConfig.displayPhone}</span>
          </div>
        </div>
        <p className="mt-12 border-t border-[#C6A66B]/16 pt-6 text-xs text-[#A7A29A]">
          Copyright (c) {new Date().getFullYear()} Barrista Perfumes. Catalogue preview for direct enquiry only.
        </p>
      </Container>
    </footer>
  );
}
