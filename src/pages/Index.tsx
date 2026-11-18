import { HeroBanner } from "@/components/hero-banner";
import { CompanyIntro } from "@/components/company-intro";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { SegmentCards } from "@/components/SegmentCards";
import { WorkProcess } from "@/components/WorkProcess";
import { SocialProof } from "@/components/SocialProof";
import { CTASection } from "@/components/cta-section";
import { LegalRadar } from "@/components/LegalRadar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags, organizationJsonLd } from "@/components/layout/MetaTags";
import { ScrollProgress } from "@/components/fx/ScrollProgress";

const Index = () => {
  return (
    <PageWrapper>
      <MetaTags 
        title="Axis Soluções Ambientais | Consultoria Ambiental em Ponta Grossa e no Paraná"
        description="Garanta a conformidade legal do seu negócio com nossa assessoria completa em licenciamento, gestão de resíduos e estudos de impacto ambiental."
        keywords="consultoria ambiental Paraná, licenciamento IAT, gestão resíduos, conformidade ambiental, Axis Soluções Ambientais"
        companyName="Axis Soluções Ambientais"
        jsonLd={organizationJsonLd()}
      />

      <ScrollProgress />
      <HeroBanner />
      <ServicesShowcase />
      <SegmentCards />
      <CompanyIntro />
      <SocialProof />
      <WorkProcess />
      <LegalRadar />
      <CTASection />
      <WhatsAppFloat />
    </PageWrapper>
  );
};

export default Index;
