
import React from "react";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageHeader } from "@/components/ui/page-header";
import { Earth } from "lucide-react";
import { ServiceCategory } from "@/components/service/ServiceCategory";
import { ProcessSection } from "@/components/service/ProcessSection";
import { serviceCategories } from "@/data/servicePageData";

const ServicesPage = () => {
  return (
    <PageWrapper>
      {/* Page Header with standardized format */}
      <PageHeader 
        title="Nossos Serviços"
        description="Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis."
        icon={<Earth className="h-12 w-12 text-white" />}
        backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Service Categories */}
      <section className="container py-16 relative">
        <div className="space-y-16 flex flex-col items-center">
          {serviceCategories.map((category, index) => (
            <ServiceCategory 
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              items={category.items}
              link={category.link}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <ProcessSection />
      
      <CTASection />
    </PageWrapper>
  );
};

export default ServicesPage;
