import { MetaTags } from "@/components/layout/MetaTags";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CTASection } from "@/components/cta-section";
import { ServiceBanner } from "@/components/service/ServiceBanner";
import { ServiceList } from "@/components/service/ServiceList";
import { CategoryNotFound } from "@/components/service/CategoryNotFound";
import { serviceCategories, ServiceCategoryType } from "@/data/serviceCategories";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { CheckCircle, Target, Users } from "lucide-react";
const ServiceCategoryPage = () => {
  const {
    categoryId
  } = useParams<{
    categoryId: string;
  }>();
  const categoryData = categoryId ? serviceCategories[categoryId as ServiceCategoryType] : null;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);
  if (!categoryData) {
    return <CategoryNotFound />;
  }
  return <PageWrapper>
      <MetaTags title={`${categoryData.title} no Paraná | Axis Soluções Ambientais`} description={categoryData.description} />
      <ServiceBanner categoryData={categoryData} categoryId={categoryId} backUrl="/services" backText="Todos os serviços" />
      
      {/* Introdução à Categoria */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeading
            title={<>Como a Axis conduz {categoryData.title.toLowerCase()}</>}
            intro={getDetailedCategoryDescription(categoryId || "")}
          />
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: Target, title: "Enquadramento antes de tudo", text: "Definimos a modalidade e os estudos exigidos antes de gastar com documentação." },
              { icon: Users, title: "Responsável técnico com ART", text: "Cada entrega sai assinada por profissional habilitado no conselho de classe." },
              { icon: CheckCircle, title: "Acompanhamento até o fim", text: "Respondemos às pendências do órgão até a decisão final do processo." },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-white p-5">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand-accent" strokeWidth={1.6} />
                <div>
                  <p className="font-display font-semibold text-brand-dark">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-dark/65">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Lista de Serviços da Categoria */}
      <div className="relative py-0">
        <div className="container relative">
          <ServiceList services={categoryData.services} categoryId={categoryId || ''} />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-brand-cream pt-4">
        <CTASection />
      </div>
    </PageWrapper>;
};

// Função auxiliar para descrições detalhadas por categoria
function getDetailedCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    licensing: "Nossa expertise em licenciamento ambiental conduz sua empresa pela modalidade certa de licença, com documentação completa desde o primeiro protocolo. Navegamos pela complexidade regulatória para que você possa focar no seu negócio, com a base legal atualizada (Lei Federal 15.190/2025, Lei Estadual 22.252/2024 e Decreto 9.541/2025).",
    monitoring: "Mantemos sua empresa em conformidade contínua através de monitoramento profissional e sistemático. Nossa abordagem proativa identifica oportunidades de melhoria e previne não conformidades antes que se tornem problemas.",
    reports: "Transformamos requisitos técnicos complexos em documentos claros e eficazes. Nossos planos e relatórios não apenas atendem às exigências legais, mas servem como ferramentas estratégicas para a gestão ambiental da sua empresa.",
    consulting: "Oferecemos assessoria estratégica técnica e próxima. Nossa consultoria vai além do cumprimento legal, ajudando sua empresa a transformar desafios ambientais em vantagens competitivas sustentáveis.",
    training: "Capacitamos suas equipes com conhecimento prático e aplicável. Nossos treinamentos são desenvolvidos especificamente para as necessidades do seu setor, garantindo que sua equipe esteja sempre preparada para os desafios ambientais.",
    management: "Cuidamos da gestão ambiental contínua da sua empresa, mantendo-a sempre em conformidade. Nossa abordagem sistemática garante que você nunca perca prazos importantes e mantenha todas as suas obrigações em dia."
  };
  return descriptions[categoryId] || "Nossa expertise nesta área traduz a legislação ambiental vigente em um plano claro, com prazos e responsáveis.";
}
export default ServiceCategoryPage;