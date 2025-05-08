
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { CompanyIntro } from "@/components/company-intro";
import { Info } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageBanner 
        title="Sobre Nós"
        description="Conheça nossa história, valores e compromisso com a sustentabilidade ambiental. Nossa missão é oferecer soluções ambientais eficientes e inovadoras para nossos clientes."
        icon={<Info className="h-12 w-12 text-eco-green" />}
        image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      <CompanyIntro />
      
      <CTASection />
    </PageWrapper>
  );
};

export default AboutPage;
