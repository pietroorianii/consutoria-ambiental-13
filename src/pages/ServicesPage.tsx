
import React from "react";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Earth } from "lucide-react";
import { ServiceCategory } from "@/components/service/ServiceCategory";
import { ProcessSection } from "@/components/service/ProcessSection";
import { serviceCategories } from "@/data/servicePageData";

const ServicesPage = () => {
  return (
    <PageWrapper>
      {/* Page Header with standardized format */}
      <PageBanner 
        title="Nossos Serviços" 
        description="Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis." 
        icon={<Earth className="h-12 w-12 text-white" />} 
        image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600" 
      />
      
      {/* Service Categories */}
      <section className="container py-16 relative">
        {/* Background textures */}
        <div className="absolute inset-0 leaf-pattern opacity-15 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 to-eco-blue/5 -z-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-eco-green/10 rounded-full blur-xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-eco-blue/10 rounded-full blur-xl -z-10 animate-pulse-slow"></div>
        
        <div className="space-y-16 flex flex-col items-center">
          {serviceCategories.map((category, index) => (
            <ServiceCategory 
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        <div className="container relative">
          <div className="text-center mb-12 scroll-trigger">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Como Trabalhamos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{
              fontFamily: "'Lato', sans-serif"
            }}>Nossa abordagem para projetos ambientais é estruturada e orientada para resultados</p>
          </div>
          
          <ProcessSection />
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default ServicesPage;
