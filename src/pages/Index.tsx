
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
        title="Solari Soluções Ambientais | Consultoria em Paraná"
        description="Garanta a conformidade legal do seu negócio com nossa assessoria completa em licenciamento, gestão de resíduos e estudos de impacto ambiental."
        keywords="consultoria ambiental Paraná, licenciamento IAT, gestão resíduos, conformidade ambiental, evitar multas ambientais, Solari Soluções Ambientais"
        companyName="Solari Soluções Ambientais"
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
