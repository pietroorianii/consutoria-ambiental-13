
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
        title="L&P Soluções Ambientais | Consultoria Ambiental Especializada"
        description="Consultoria ambiental especializada para empreendimentos e empresas que buscam excelência em sustentabilidade e conformidade legal. Licenciamento, monitoramento e gestão ambiental."
        keywords="consultoria ambiental, licenciamento ambiental, sustentabilidade empresarial, monitoramento ambiental, gestão ambiental"
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Fundo otimizado com padrão orgânico */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-eco-green/5">
        <div className="absolute inset-0 organic-pattern opacity-[0.02]"></div>
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
