import { HeroBanner } from "@/components/hero-banner";
import { CompanyIntro } from "@/components/company-intro";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { SegmentCards } from "@/components/SegmentCards";
import { WorkProcess } from "@/components/WorkProcess";
import { SocialProof } from "@/components/SocialProof";
import { CTASection } from "@/components/cta-section";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { OrganicDivider } from "@/components/fx/OrganicDivider";

const Index = () => {
  return (
    <PageWrapper>
      <MetaTags 
        title="Solari Soluções Ambientais | Consultoria no Paraná"
        description="Garanta a conformidade legal do seu negócio com nossa assessoria completa em licenciamento, gestão de resíduos e estudos de impacto ambiental."
        keywords="consultoria ambiental Paraná, licenciamento IAT, gestão resíduos, conformidade ambiental, Solari Soluções Ambientais"
        companyName="Solari Soluções Ambientais"
      />

      <ScrollProgress />
      <HeroBanner />
      <div className="bg-brand-dark">
        <OrganicDivider fill="fill-brand-cream" />
      </div>
      <ServicesShowcase />
      <SegmentCards />
      <CompanyIntro />
      <WorkProcess />
      <SocialProof />
      <CTASection />
      <WhatsAppFloat />
    </PageWrapper>
  );
};

export default Index;
