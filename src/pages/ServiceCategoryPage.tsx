import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CTASection } from "@/components/cta-section";
import { ServiceBanner } from "@/components/service/ServiceBanner";
import { ServiceList } from "@/components/service/ServiceList";
import { CategoryNotFound } from "@/components/service/CategoryNotFound";
import { serviceCategories, ServiceCategoryType } from "@/data/serviceCategories";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
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
      <ServiceBanner categoryData={categoryData} />
      
      {/* Introdução à Categoria */}
      <div className="relative py-16 bg-gradient-to-br from-eco-green/3 to-eco-blue/2">
        <div className="absolute inset-0 leaf-pattern opacity-[0.02]"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-primary text-gray-900">
              Por Que Escolher a L&P para {categoryData.title}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-eco-green/20 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-eco-green/10 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-secondary">Expertise Comprovada</h3>
                  <p className="text-sm text-gray-600 font-body">Anos de experiência e centenas de projetos bem-sucedidos</p>
                </CardContent>
              </Card>
              
              <Card className="border-eco-blue/20 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-eco-blue/10 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-6 w-6 text-eco-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-secondary">Equipe Especializada</h3>
                  <p className="text-sm text-gray-600 font-body">Profissionais qualificados e atualizados com a legislação</p>
                </CardContent>
              </Card>
              
              <Card className="border-eco-accent-teal/20 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-eco-accent-teal/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-eco-accent-teal" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-secondary">Resultados Garantidos</h3>
                  <p className="text-sm text-gray-600 font-body">Acompanhamento completo até a finalização do processo</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed font-body max-w-3xl mx-auto">
              {getDetailedCategoryDescription(categoryId || '')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Lista de Serviços da Categoria */}
      <div className="relative py-0">
        <div className="container relative">
          <ServiceList services={categoryData.services} categoryId={categoryId || ''} />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 leaf-pattern -z-10 opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
        <CTASection />
      </div>
    </PageWrapper>;
};

// Função auxiliar para descrições detalhadas por categoria
function getDetailedCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    licensing: "Nossa expertise em licenciamento ambiental garante que sua empresa obtenha todas as autorizações necessárias de forma ágil e segura. Navegamos pela complexidade regulatória para que você possa focar no seu negócio, sempre mantendo total conformidade legal.",
    monitoring: "Mantemos sua empresa em conformidade contínua através de monitoramento profissional e sistemático. Nossa abordagem proativa identifica oportunidades de melhoria e previne não conformidades antes que se tornem problemas.",
    reports: "Transformamos requisitos técnicos complexos em documentos claros e eficazes. Nossos planos e relatórios não apenas atendem às exigências legais, mas servem como ferramentas estratégicas para a gestão ambiental da sua empresa.",
    consulting: "Oferecemos assessoria estratégica baseada em décadas de experiência no setor. Nossa consultoria vai além do cumprimento legal, ajudando sua empresa a transformar desafios ambientais em vantagens competitivas sustentáveis.",
    training: "Capacitamos suas equipes com conhecimento prático e aplicável. Nossos treinamentos são desenvolvidos especificamente para as necessidades do seu setor, garantindo que sua equipe esteja sempre preparada para os desafios ambientais.",
    management: "Cuidamos da gestão ambiental contínua da sua empresa, mantendo-a sempre em conformidade. Nossa abordagem sistemática garante que você nunca perca prazos importantes e mantenha todas as suas obrigações em dia.",
    esg: "Ajudamos sua empresa a se posicionar como líder em sustentabilidade. Nossa consultoria ESG conecta práticas ambientais responsáveis com objetivos de negócio, abrindo portas para novos mercados e oportunidades de investimento.",
    climate: "Preparamos sua empresa para o futuro com estratégias inteligentes de descarbonização. Nossa abordagem combina redução de impactos ambientais com oportunidades de negócio em economia verde e mercados de carbono."
  };
  return descriptions[categoryId] || "Nossa expertise nesta área garante soluções eficazes e conformidade total com a legislação ambiental vigente.";
}
export default ServiceCategoryPage;