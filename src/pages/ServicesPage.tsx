
import React from "react";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Leaf } from "lucide-react";
import { ServiceShowcase } from "@/components/service/ServiceShowcase";

const ServicesPage = () => {
  return (
    <PageWrapper>
      {/* Page Header */}
      <PageBanner 
        title="Nossos Serviços" 
        description="Descubra todas as soluções que oferecemos e saiba como podemos ajudar você." 
        icon={<Leaf />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600" 
      />
      
      {/* Service Showcase */}
      <ServiceShowcase />
      
      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 leaf-pattern -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
        <CTASection />
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
