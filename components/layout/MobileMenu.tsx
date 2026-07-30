"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="aurora-panel fixed inset-0 z-50 bg-[#090909]/98 px-6 py-6 backdrop-blur-xl animate-[reveal_.35s_ease_both] md:hidden">
      <div className="flex items-center justify-between">
        <Link href="/" onClick={onClose} className="font-serif text-2xl text-[#F3EEE5]">
          Barrista Perfumes
        </Link>
        <button aria-label="Close menu" onClick={onClose} className="border border-[#C6A66B]/25 p-2 text-[#F3EEE5]">
          <X size={24} />
        </button>
      </div>
      <nav aria-label="Mobile navigation" className="mt-16 flex flex-col gap-8">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-[#C6A66B]/18 pb-5 font-serif text-5xl leading-none text-[#F3EEE5]"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={generalWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="magnetic mt-4 border border-[#C6A66B] bg-[#C6A66B] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#090909]"
        >
          WhatsApp
        </a>
      </nav>
    </div>
  );
}
