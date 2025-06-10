
import { HeroBanner } from "@/components/hero-banner";
import { CompanyIntro } from "@/components/company-intro";
import { FeaturedServices } from "@/components/featured-services";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";

const Index = () => {
  return (
    <PageWrapper>
      <MetaTags 
        title="L&P Consultoria Ambiental | Licenciamento sem Complicações | Evite Multas"
        description="Especialistas em licenciamento ambiental no Paraná. Regularize sua empresa e evite multas com nossa consultoria especializada. Diagnóstico gratuito em 24h. Garantia de resultado."
        keywords="consultoria ambiental Paraná, licenciamento ambiental, evitar multas ambientais, IAT Paraná, regularização ambiental, defesa ambiental"
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Fundo otimizado com nova paleta */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-eco-neutral-light via-white to-eco-green/5">
        <div className="absolute inset-0 organic-pattern opacity-[0.03]"></div>
      </div>
      
      <HeroBanner />
      <CompanyIntro />
      <FeaturedServices />
      <Testimonials />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
