import React from "react";
import { Leaf } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { ServiceGroupCard } from "@/components/featured-services/ServiceGroupCard";
import { serviceGroups } from "@/components/featured-services/serviceGroupsData";

const ServicesPage = () => {
  return (
    <PageWrapper>
      <PageBanner
        title="Nossos Serviços"
        description="Soluções ambientais completas organizadas em três áreas estratégicas, com conformidade legal e excelência técnica."
        icon={<Leaf />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600"
      />

      <section className="container py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-gray-900">
            Três áreas estratégicas, um propósito
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            Conheça nossas frentes de atuação. Clique em <strong>Explorar</strong> para ver
            todos os serviços, etapas e entregas de cada área.
          </p>
          <div className="h-1 w-24 bg-prisma-green rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceGroups.map((group, index) => (
            <ServiceGroupCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
};

export default ServicesPage;
