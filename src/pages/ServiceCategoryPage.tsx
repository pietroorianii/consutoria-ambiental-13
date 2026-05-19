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
              Por Que Escolher a SOLARI para {categoryData.title}?
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
    licensing: "Nossa expertise em licenciamento ambiental garante que sua empresa obtenha todas as autorizações necessárias de forma ágil e segura. Navegamos por todas as modalidades do novo marco regulatório — DLAM, LAC, LAS, LP, LI e LO — conforme a Lei Estadual nº 22.252/2024 e as INs vigentes do IAT 2025/2026.",
    authorizations: "Conduzimos todo o processo de Autorização Ambiental (AA) e Autorização Florestal (AF) junto ao IAT, desde o enquadramento na IN vigente até o acompanhamento na Câmara Técnica Florestal. Garantimos que toda intervenção em vegetação nativa ou em APP seja realizada com total segurança jurídica.",
    water_grants: "Gerenciamos o processo de outorga de ponta a ponta no SIGARH — do estudo de disponibilidade hídrica ao cumprimento das condicionantes de medição de vazão (IN IAT nº 63/2025). A outorga é frequentemente condicionante da LO: iniciamos o processo em paralelo ao licenciamento para evitar atrasos.",
    technical_studies: "Elaboramos todos os instrumentos técnicos exigidos no licenciamento com precisão e alinhamento às INs setoriais vigentes. O documento correto para a modalidade certa evita exigências do IAT e atrasos no processo — e isso é nossa responsabilidade, não sua.",
    air_emissions: "Empresas com fontes fixas de emissão têm obrigações contínuas no SGADEA. Gerenciamos todo o ciclo: inventário de fontes, Plano de Automonitoramento, campanhas de medição com laboratório credenciado e envio periódico de declarações. Um atraso no SGADEA gera auto de infração automático — nós garantimos que isso não aconteça.",
    compliance: "A licença obtida não é o fim — é o começo das obrigações. Mapeamos todas as condicionantes vigentes, criamos o calendário de conformidade e entregamos cada relatório no prazo certo via SGA IR. LO vencida sem renovação = operação irregular. Cuide da conformidade de forma proativa.",
  };
  return descriptions[categoryId] || "Nossa expertise nesta área garante soluções eficazes e conformidade total com a legislação ambiental vigente.";
}
export default ServiceCategoryPage;