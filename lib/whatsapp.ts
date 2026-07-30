import { siteConfig } from "@/data/site-config";
import type { Brand } from "@/types/brand";
import type { Perfume } from "@/types/perfume";

export interface ContactFormMessageInput {
  name: string;
  perfume: string;
  family: string;
  message: string;
}

export function sanitizeWhatsAppNumber(number: string): string {
  return number.replace(/\D/g, "");
}

export function buildWhatsAppUrl(message: string, number: string = siteConfig.whatsappNumber): string {
  const sanitizedNumber = sanitizeWhatsAppNumber(number);
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralEnquiryMessage(): string {
  return `Hello ${siteConfig.businessName},

I would like to know more about your current perfume collection.`;
}

export function buildPerfumeEnquiryMessage(perfume: Perfume, brand: Brand): string {
  return `Hello ${siteConfig.businessName},

I am interested in ${perfume.name} by ${brand.name}.

Please share the available sizes, current availability and further details.`;
}

export function buildContactFormMessage(input: ContactFormMessageInput): string {
  return `Hello ${siteConfig.businessName},

My name is ${input.name}.

I am interested in: ${input.perfume}
Preferred fragrance family: ${input.family}

Message:
${input.message}`;
}

export function generalWhatsAppUrl(): string {
  return buildWhatsAppUrl(buildGeneralEnquiryMessage());
}

export function perfumeWhatsAppUrl(perfume: Perfume, brand: Brand): string {
  return buildWhatsAppUrl(buildPerfumeEnquiryMessage(perfume, brand));
}

export function formWhatsAppUrl(input: ContactFormMessageInput): string {
  return buildWhatsAppUrl(buildContactFormMessage(input));
}
