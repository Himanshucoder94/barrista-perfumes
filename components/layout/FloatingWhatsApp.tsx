import { MessageCircle } from "lucide-react";
import { generalWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Barrista Perfumes on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center border border-[#C6A66B] bg-[#090909]/90 text-[#C6A66B] shadow-2xl shadow-black/40 backdrop-blur transition hover:bg-[#C6A66B] hover:text-[#090909] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={24} />
    </a>
  );
}
