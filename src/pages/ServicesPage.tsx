
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { Link } from "react-router-dom";
import { ArrowRight, CloudSun, FileText, Flask, Leaf, TreeDeciduous, Users } from "lucide-react";

const serviceCategories = [
  {
    icon: <Leaf className="h-12 w-12 text-eco-green" />,
    title: "Licenciamento e Autorizações",
    description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
    items: [
      "Licenciamentos Ambientais (LP, LI, LO, AA, LAS)",
      "Autorizações Ambientais",
      "Cadastro Técnico Federal (IBAMA)",
      "Outorgas de Recursos Hídricos"
    ],
    link: "/services/licensing"
  },
  {
    icon: <Flask className="h-12 w-12 text-eco-blue" />,
    title: "Monitoramento e Análises",
    description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
    items: [
      "Acompanhamento de condicionantes ambientais",
      "Declaração de Carga Poluidora (DCP)",
      "Monitoramento de emissões de poluentes",
      "Gestão de amostragens e análises"
    ],
    link: "/services/monitoring"
  },
  {
    icon: <FileText className="h-12 w-12 text-eco-green-dark" />,
    title: "Planos e Relatórios",
    description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
    items: [
      "Inventário de Resíduos Sólidos",
      "Planos de Gerenciamento de Resíduos",
      "Estudos de Impacto Ambiental (EIA/RIMA, EIV/RIV)",
      "Programas de Gestão Ambiental"
    ],
    link: "/services/reports"
  },
  {
    icon: <Users className="h-12 w-12 text-eco-blue-dark" />,
    title: "Acompanhamento e Consultoria",
    description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
    items: [
      "Acompanhamento de projetos ambientais",
      "Elaboração de relatórios para TAC e notificações",
      "Inspeções ambientais e auditorias",
      "Relatórios de cumprimento de condicionantes"
    ],
    link: "/services/consulting"
  },
  {
    icon: <TreeDeciduous className="h-12 w-12 text-eco-green" />,
    title: "Treinamentos e Capacitações",
    description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
    items: [
      "Treinamentos presenciais e remotos",
      "Treinamento em Gerenciamento de Resíduos Sólidos",
      "Capacitações específicas para cada setor"
    ],
    link: "/services/training"
  },
  {
    icon: <CloudSun className="h-12 w-12 text-eco-blue" />,
    title: "Gestão e Manutenção Ambiental",
    description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
    items: [
      "Renovação de licenças e autorizações",
      "Declarações e inventários anuais",
      "Defesas ambientais",
      "Manutenções e atualizações periódicas"
    ],
    link: "/services/management"
  }
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="bg-muted py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">Nossos Serviços</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
            </p>
          </div>
        </div>
        
        {/* Service Categories */}
        <section className="container py-16">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>
                  
                  <p className="text-muted-foreground text-lg">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                          <div className="rounded-full bg-eco-green w-2 h-2"></div>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                    <Link to={category.link} className="flex items-center">
                      Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="relative rounded-lg overflow-hidden h-[300px]">
                  <img
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1482938289607-e9573fc25ebb' : '1509316975850-ff9c5deb0cd9'}?auto=format&fit=crop&q=80&w=800&h=500`} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Process Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Trabalhamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossa metodologia de trabalho garante resultados eficientes e de qualidade para atender às necessidades específicas de cada cliente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative bg-background rounded-lg p-8 shadow-sm">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">Diagnóstico</h3>
                <p className="text-muted-foreground">
                  Realizamos uma análise detalhada da situação ambiental da empresa, identificando necessidades, pendências e oportunidades de melhoria.
                </p>
              </div>
              
              <div className="relative bg-background rounded-lg p-8 shadow-sm">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">Planejamento</h3>
                <p className="text-muted-foreground">
                  Desenvolvemos um plano de ação personalizado, com cronograma e definição clara dos entregáveis e responsabilidades.
                </p>
              </div>
              
              <div className="relative bg-background rounded-lg p-8 shadow-sm">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2">Execução</h3>
                <p className="text-muted-foreground">
                  Implementamos as ações definidas, mantendo comunicação constante e transparente sobre o andamento dos trabalhos.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
