import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { FeaturedPerfumes } from "@/components/home/FeaturedPerfumes";
import { FragranceFamilies } from "@/components/home/FragranceFamilies";
import { AuthenticitySection } from "@/components/home/AuthenticitySection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <BrandShowcase />
      <FeaturedPerfumes />
      <FragranceFamilies />
      <AuthenticitySection />
      <ExperienceSection />
      <WhatsAppCTA />
    </>
  );
}
