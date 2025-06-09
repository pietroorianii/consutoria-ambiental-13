
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { serviceDetails } from "@/data/serviceDetails";
import { ServiceDetailHero } from "@/components/service/ServiceDetailHero";
import { ServiceOverview } from "@/components/service/ServiceOverview";
import { ServiceBenefits } from "@/components/service/ServiceBenefits";
import { ServiceProcess } from "@/components/service/ServiceProcess";
import { ServiceDetailsAccordion } from "@/components/service/ServiceDetailsAccordion";
import { ServiceDetailCTA } from "@/components/service/ServiceDetailCTA";

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <PageWrapper>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Serviço não encontrado</h1>
          <p className="text-muted-foreground mb-8">O serviço solicitado não existe ou foi removido.</p>
          <Button asChild>
            <Link to="/services">Voltar aos Serviços</Link>
          </Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Hero Banner */}
      <ServiceDetailHero service={service} />

      {/* Main Content */}
      <div className="container py-20 space-y-20">
        {/* Service Overview */}
        <ServiceOverview service={service} />

        {/* Service Benefits */}
        <ServiceBenefits benefits={service.benefits} />

        {/* Service Process */}
        <ServiceProcess steps={service.steps} />

        {/* Service Details Accordion */}
        <ServiceDetailsAccordion service={service} />

        {/* Final CTA */}
        <ServiceDetailCTA serviceTitle={service.title} />
      </div>

      {/* Bottom CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 via-eco-blue/3 to-eco-earth/10"></div>
        <CTASection />
      </div>
    </PageWrapper>
  );
};

export default ServiceDetailPage;
