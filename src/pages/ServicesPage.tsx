import React from "react";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Leaf } from "lucide-react";
import { ServiceCategories } from "@/components/featured-services/ServiceCategories";

const ServicesPage = () => {
  return (
    <PageWrapper>
      <PageBanner
        title="Nossos Serviços"
        description="Licenciamento ambiental, autorizações, outorgas, emissões atmosféricas, estudos técnicos e gestão de conformidade — soluções especializadas para conformidade legal no Paraná"
        icon={<Leaf />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600"
      />

      {/* Mesmos 3 grupos da home — fonte única da verdade */}
      <ServiceCategories />

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 via-eco-blue/3 to-eco-earth-light/20 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        <CTASection />
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
