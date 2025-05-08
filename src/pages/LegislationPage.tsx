
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Globe } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { ConsolidatedLegislationGuide } from "@/components/legislation/ConsolidatedLegislationGuide";

const LegislationPage = () => {
  return (
    <PageWrapper>
      <PageHeader 
        title="Legislação Ambiental"
        description="Conheça as principais legislações ambientais aplicáveis aos diferentes setores econômicos e atividades. Mantenha-se atualizado sobre as normas e regulamentações que afetam o seu negócio."
        icon={<Globe className="h-12 w-12 text-white" />}
        backgroundImage="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      <ConsolidatedLegislationGuide />
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationPage;
