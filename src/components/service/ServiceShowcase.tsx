
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/serviceCategories";

// Mapeamento de cores por categoria
const categoryColors: Record<string, { bg: string; border: string; button: string; icon: string }> = {
  licensing: {
    bg: "from-eco-green/5 to-eco-green/3",
    border: "border-eco-green/20 hover:border-eco-green/40",
    button: "bg-eco-green hover:bg-eco-green-dark",
    icon: "text-eco-green"
  },
  water_resources: {
    bg: "from-blue-500/5 to-blue-500/3",
    border: "border-blue-500/20 hover:border-blue-500/40",
    button: "bg-blue-500 hover:bg-blue-600",
    icon: "text-blue-500"
  },
  degraded_areas: {
    bg: "from-amber-600/5 to-amber-600/3",
    border: "border-amber-600/20 hover:border-amber-600/40",
    button: "bg-amber-600 hover:bg-amber-700",
    icon: "text-amber-600"
  },
  monitoring: {
    bg: "from-eco-blue/5 to-eco-blue/3",
    border: "border-eco-blue/20 hover:border-eco-blue/40",
    button: "bg-eco-blue hover:bg-eco-blue-dark",
    icon: "text-eco-blue"
  },
  reports: {
    bg: "from-eco-earth/5 to-eco-earth/3",
    border: "border-eco-earth/20 hover:border-eco-earth/40",
    button: "bg-eco-earth-dark hover:bg-eco-earth-dark/90",
    icon: "text-eco-earth-dark"
  },
  consulting: {
    bg: "from-eco-accent-teal/5 to-eco-accent-teal/3",
    border: "border-eco-accent-teal/20 hover:border-eco-accent-teal/40",
    button: "bg-eco-accent-teal hover:bg-eco-accent-teal/90",
    icon: "text-eco-accent-teal"
  },
  training: {
    bg: "from-eco-accent-orange/5 to-eco-accent-orange/3",
    border: "border-eco-accent-orange/20 hover:border-eco-accent-orange/40",
    button: "bg-eco-accent-orange hover:bg-eco-accent-orange/90",
    icon: "text-eco-accent-orange"
  },
  management: {
    bg: "from-eco-blue-dark/5 to-eco-blue-dark/3",
    border: "border-eco-blue-dark/20 hover:border-eco-blue-dark/40",
    button: "bg-eco-blue-dark hover:bg-eco-blue-dark/90",
    icon: "text-eco-blue-dark"
  },
  esg: {
    bg: "from-eco-green-dark/5 to-eco-green-dark/3",
    border: "border-eco-green-dark/20 hover:border-eco-green-dark/40",
    button: "bg-eco-green-dark hover:bg-eco-green-dark/90",
    icon: "text-eco-green-dark"
  },
  climate: {
    bg: "from-eco-accent-yellow/5 to-eco-accent-yellow/3",
    border: "border-eco-accent-yellow/20 hover:border-eco-accent-yellow/40",
    button: "bg-eco-accent-yellow hover:bg-eco-accent-yellow/90",
    icon: "text-eco-accent-yellow"
  }
};

export const ServiceShowcase = () => {
  const categories = Object.entries(serviceCategories);

  return (
    <section className="relative py-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/3 via-background to-eco-blue/2"></div>
      <div className="absolute inset-0 leaf-pattern opacity-[0.02]"></div>
      
      <div className="container relative z-10">
        {/* Introdução à Seção */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-primary text-gray-900">
            Soluções Ambientais Completas para Sua Empresa
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-body">
            Na L&P Soluções Ambientais, oferecemos consultoria especializada que transforma desafios 
            ambientais em oportunidades de crescimento sustentável. Nossa abordagem integrada garante 
            conformidade legal, redução de riscos e fortalecimento da sua imagem corporativa no mercado.
          </p>
          <div className="h-1 w-24 bg-eco-green rounded-full mx-auto mt-6"></div>
        </div>

        {/* Grid de Categorias de Serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {categories.map(([key, category]) => {
            const colors = categoryColors[key] || categoryColors.licensing;
            
            return (
              <Card 
                key={key}
                className={`group ${colors.border} transition-all duration-300 bg-white/95 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden`}
              >
                {/* Header com ícone e título */}
                <CardHeader className={`pb-4 bg-gradient-to-br ${colors.bg}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-white/80 rounded-xl group-hover:bg-white transition-colors shadow-sm flex-shrink-0`}>
                      {React.cloneElement(category.icon as React.ReactElement, {
                        className: `h-8 w-8 ${colors.icon}`
                      })}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl font-secondary text-gray-900 group-hover:text-gray-800 transition-colors mb-2">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 leading-relaxed font-body">
                        {getShortDescription(key)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  {/* Principais Entregas/Focos */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 font-secondary">
                      Principais Entregas:
                    </h4>
                    <ul className="space-y-2">
                      {getMainDeliverables(key).map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className={`h-4 w-4 ${colors.icon} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-gray-600 font-body">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Action */}
                  <div className="flex gap-3">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className={`${colors.border.replace('border-', 'border-').replace('/20', '/40')} ${colors.icon} hover:bg-white hover:text-gray-800 transition-all duration-300 flex-1`}
                    >
                      <Link 
                        to={`/services/${key}`}
                        className="flex items-center justify-center gap-2"
                      >
                        Saiba Mais <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    
                    <Button 
                      asChild
                      size="sm"
                      className={`${colors.button} text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}
                    >
                      <Link 
                        to="/request-quote"
                        className="flex items-center gap-2"
                      >
                        Orçamento
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA geral */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl p-8 max-w-3xl mx-auto border border-eco-green/20">
            <h3 className="text-2xl font-bold mb-4 font-primary text-gray-900">
              Não Encontrou o Que Procura?
            </h3>
            <p className="text-gray-600 mb-6 font-body">
              Nossa equipe desenvolve soluções personalizadas para atender às necessidades específicas do seu negócio.
            </p>
            <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
              <Link to="/contact" className="flex items-center gap-2">
                Fale com Nossos Especialistas <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Funções auxiliares para conteúdo específico por categoria
function getShortDescription(key: string): string {
  const descriptions: Record<string, string> = {
    licensing: "Navegue pela burocracia ambiental e opere legalmente com nosso suporte especializado.",
    water_resources: "Garanta o direito de uso da água com estudos técnicos e outorgas completas.",
    degraded_areas: "Resolva passivos ambientais e recupere áreas com projetos técnicos especializados.",
    monitoring: "Mantenha conformidade contínua com monitoramento profissional e relatórios técnicos.",
    reports: "Documentação técnica especializada para gestão ambiental e atendimento legal.",
    consulting: "Assessoria estratégica para questões ambientais complexas e tomada de decisão.",
    training: "Capacite suas equipes com conhecimento ambiental prático e certificado.",
    management: "Gestão contínua para manter sua empresa sempre em conformidade ambiental.",
    esg: "Fortaleça sua posição ESG e acesse novos mercados e investimentos sustentáveis.",
    climate: "Prepare-se para o futuro com estratégias de descarbonização e adaptação climática."
  };
  return descriptions[key] || "";
}

function getMainDeliverables(key: string): string[] {
  const deliverables: Record<string, string[]> = {
    licensing: [
      "Licenças Ambientais (LP, LI, LO)",
      "Autorizações e Dispensas",
      "Acompanhamento de Processos"
    ],
    water_resources: [
      "Outorgas de Uso da Água",
      "Estudos de Disponibilidade Hídrica",
      "Anuência para Perfuração de Poços",
      "Monitoramento de Qualidade"
    ],
    degraded_areas: [
      "Gerenciamento de Áreas Contaminadas (GAC)",
      "Planos de Recuperação (PRAD)",
      "Assessoria em TAC",
      "Auditoria de Passivos Ambientais"
    ],
    monitoring: [
      "Coleta e Análises Laboratoriais",
      "Relatórios de Conformidade",
      "Gestão de Condicionantes"
    ],
    reports: [
      "Planos de Gerenciamento (PGRS, PGRSS)",
      "Estudos de Impacto (EIA/RIMA)",
      "Inventários e Relatórios Técnicos"
    ],
    consulting: [
      "Diagnóstico e Adequação Ambiental",
      "Assessoria em Fiscalizações",
      "Suporte em Decisões Estratégicas"
    ],
    training: [
      "Treinamentos Certificados",
      "Capacitação em Gestão Ambiental",
      "Programas Customizados"
    ],
    management: [
      "Renovação de Licenças",
      "Declarações Anuais",
      "Manutenção de Conformidade"
    ],
    esg: [
      "Diagnóstico e Estratégia ESG",
      "Relatórios de Sustentabilidade",
      "Análise de Riscos e Oportunidades"
    ],
    climate: [
      "Inventários de Gases de Efeito Estufa",
      "Planos de Descarbonização",
      "Projetos de Crédito de Carbono"
    ]
  };
  return deliverables[key] || [];
}
