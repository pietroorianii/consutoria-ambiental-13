import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { MetaTags } from "@/components/layout/MetaTags";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { serviceDetails } from "@/data/serviceDetails";
import { legacyServiceRedirects } from "@/data/serviceCatalog";
import { ServiceDetailHero } from "@/components/service/ServiceDetailHero";
import { SectionNav, Overview, Steps, Documents, LegalAndTime, Tips, RelatedAndCta } from "@/components/service/ServiceDetailSections";
import { ModalityStrip } from "@/components/service/ModalityExplorer";
import NotFound from "./NotFound";

const ServiceDetailPage = () => {
  const { serviceId = "" } = useParams<{ serviceId: string }>();
  const service = serviceDetails[serviceId];

  const nav = useMemo(() => {
    if (!service) return [];
    return [
      { id: "visao-geral", label: "Visão geral" },
      ...(serviceId === "licensing" ? [{ id: "modalidades", label: "Modalidades" }] : []),
      ...(service.steps.length ? [{ id: "etapas", label: "Etapas" }] : []),
      ...(service.documents.length ? [{ id: "documentos", label: "Documentos" }] : []),
      { id: "base-legal", label: "Prazos e base legal" },
      ...(service.tips.length ? [{ id: "dicas", label: "Dicas" }] : []),
    ];
  }, [service, serviceId]);

  // Endereços antigos/duplicados apontam para o serviço oficial.
  if (legacyServiceRedirects[serviceId]) return <Navigate to={`/service/${legacyServiceRedirects[serviceId]}`} replace />;
  if (!service) return <NotFound />;

  return (
    <PageWrapper>
      <MetaTags title={`${service.title} no Paraná | Axis Soluções Ambientais`} description={service.description} />
      <ServiceDetailHero service={service} />
      <SectionNav items={nav} />
      <Overview s={service} />
      {serviceId === "licensing" && (
        <section id="modalidades" className="scroll-mt-32 bg-white pb-16 md:pb-20">
          <div className="container">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-dark md:text-[2.1rem]">Modalidades: qual se aplica a você</h2>
            <span className="axis-rule mt-4" />
            <ModalityStrip className="mt-8" />
          </div>
        </section>
      )}
      <Steps s={service} />
      <Documents s={service} />
      <LegalAndTime s={service} />
      <Tips s={service} />
      <RelatedAndCta s={service} />
    </PageWrapper>
  );
};

export default ServiceDetailPage;
