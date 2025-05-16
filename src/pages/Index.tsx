
import { HeroBanner } from "@/components/hero-banner";
import { CompanyIntro } from "@/components/company-intro";
import { FeaturedServices } from "@/components/featured-services";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { TexturedBackground } from "@/components/ui/textured-background";

const Index = () => {
  return (
    <PageWrapper>
      {/* Adicionar plano de fundo texturizado */}
      <TexturedBackground />
      
      <HeroBanner />
      <CompanyIntro />
      <FeaturedServices />
      <Testimonials />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
