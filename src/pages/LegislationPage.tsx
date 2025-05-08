
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Globe } from "lucide-react";
import { ConsolidatedLegislationGuide } from "@/components/legislation/ConsolidatedLegislationGuide";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageBanner } from "@/components/ui/page-banner";

const LegislationPage = () => {
  return (
    <PageWrapper>
      <PageBanner 
        title="Legislação Ambiental"
        description="Conheça as principais legislações ambientais aplicáveis aos diferentes setores econômicos e atividades. Mantenha-se atualizado sobre as normas e regulamentações que afetam o seu negócio."
        icon={<Globe className="h-12 w-12 text-eco-green" />}
        image="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      <TooltipProvider>
        <ConsolidatedLegislationGuide />
      </TooltipProvider>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationPage;
