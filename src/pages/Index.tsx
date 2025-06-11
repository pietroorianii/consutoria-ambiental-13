
import { PrismaHeroBanner } from "@/components/prisma/PrismaHeroBanner";
import { PrismaPillars } from "@/components/prisma/PrismaPillars";
import { PrismaSocialProof } from "@/components/prisma/PrismaSocialProof";
import { PrismaFeaturedServices } from "@/components/prisma/PrismaFeaturedServices";
import { PrismaCTA } from "@/components/prisma/PrismaCTA";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";

const Index = () => {
  return (
    <PageWrapper>
      <MetaTags 
        title="PRISMA Soluções Ambientais | Consultoria Especializada"
        description="Conformidade ambiental que impulsiona seu negócio. Soluções estratégicas para licenciamento, gestão de resíduos e sustentabilidade."
        keywords="consultoria ambiental, licenciamento ambiental, gestão resíduos, conformidade ambiental, sustentabilidade empresarial"
        companyName="PRISMA Soluções Ambientais"
      />
      
      <PrismaHeroBanner />
      <PrismaPillars />
      <PrismaSocialProof />
      <PrismaFeaturedServices />
      <PrismaCTA />
    </PageWrapper>
  );
};

export default Index;
