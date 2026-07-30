import { describe, expect, it } from "vitest";
import { brands } from "@/data/brands";
import { perfumes } from "@/data/perfumes";
import {
  buildPerfumeEnquiryMessage,
  buildWhatsAppUrl,
  perfumeWhatsAppUrl,
  sanitizeWhatsAppNumber,
} from "@/lib/whatsapp";

describe("whatsapp utilities", () => {
  it("sanitises a WhatsApp number", () => {
    expect(sanitizeWhatsAppNumber("+91 12345-67890")).toBe("911234567890");
  });

  it("generates an encoded WhatsApp URL", () => {
    expect(buildWhatsAppUrl("Hello Barrista Perfumes", "+91 12345 67890")).toBe(
      "https://wa.me/911234567890?text=Hello%20Barrista%20Perfumes",
    );
  });

  it("builds the perfume-specific enquiry message", () => {
    const perfume = perfumes[0];
    const brand = brands.find((item) => item.id === perfume.brandId);
    expect(brand).toBeDefined();
    expect(buildPerfumeEnquiryMessage(perfume, brand!)).toContain(
      `I am interested in ${perfume.name} by ${brand!.name}.`,
    );
    expect(perfumeWhatsAppUrl(perfume, brand!)).toContain("available%20sizes");
  });
});
