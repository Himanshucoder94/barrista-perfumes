"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { generalWhatsAppUrl } from "@/lib/whatsapp";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition duration-500 ${
          scrolled ? "border-b border-[#C6A66B]/24 bg-[#090909]/78 shadow-[0_18px_60px_rgba(0,0,0,.36)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="group inline-flex items-baseline gap-3 font-serif text-2xl text-[#F3EEE5]">
            <span className="h-2 w-2 rounded-full bg-[#C6A66B] shadow-[0_0_22px_rgba(198,166,107,.75)] transition group-hover:scale-125" />
            Barrista Perfumes
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm uppercase tracking-[0.18em] text-[#A7A29A] transition hover:text-[#F3EEE5]"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C6A66B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <a
            href={generalWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="magnetic hidden items-center gap-2 border border-[#C6A66B]/50 bg-[#C6A66B]/[.04] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F3EEE5] transition hover:border-[#C6A66B] hover:bg-[#C6A66B]/10 md:inline-flex"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="border border-[#C6A66B]/25 p-2 text-[#F3EEE5] md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
    </>
  );
}
