import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { Link } from "react-router-dom";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { ArrowRight, Beaker, FileText, Leaf, TreeDeciduous, Users, CloudSun, Earth } from "lucide-react";

const serviceCategories = [
  {
    icon: <Leaf className="h-12 w-12 text-eco-green" />,
    title: "Licenciamento e Autorizações",
    description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
    items: ["Licenciamentos Ambientais (LP, LI, LO, AA, LAS)", "Autorizações Ambientais", "Cadastro Técnico Federal (IBAMA)", "Outorgas de Recursos Hídricos"],
    link: "/services/licensing"
  },
  {
    icon: <Beaker className="h-12 w-12 text-eco-blue" />,
    title: "Monitoramento e Análises",
    description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
    items: ["Acompanhamento de condicionantes ambientais", "Declaração de Carga Poluidora (DCP)", "Monitoramento de emissões de poluentes", "Gestão de amostragens e análises"],
    link: "/services/monitoring"
  },
  {
    icon: <FileText className="h-12 w-12 text-eco-green-dark" />,
    title: "Planos e Relatórios",
    description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
    items: ["Inventário de Resíduos Sólidos", "Planos de Gerenciamento de Resíduos", "Estudos de Impacto Ambiental (EIA/RIMA, EIV/RIV)", "Programas de Gestão Ambiental"],
    link: "/services/reports"
  },
  {
    icon: <Users className="h-12 w-12 text-eco-blue-dark" />,
    title: "Acompanhamento e Consultoria",
    description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
    items: ["Acompanhamento de projetos ambientais", "Elaboração de relatórios para TAC e notificações", "Inspeções ambientais e auditorias", "Relatórios de cumprimento de condicionantes"],
    link: "/services/consulting"
  },
  {
    icon: <TreeDeciduous className="h-12 w-12 text-eco-green" />,
    title: "Treinamentos e Capacitações",
    description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
    items: ["Treinamentos presenciais e remotos", "Treinamento em Gerenciamento de Resíduos Sólidos", "Capacitações específicas para cada setor"],
    link: "/services/training"
  },
  {
    icon: <CloudSun className="h-12 w-12 text-eco-blue" />,
    title: "Gestão e Manutenção Ambiental",
    description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
    items: ["Renovação de licenças e autorizações", "Declarações e inventários anuais", "Defesas ambientais", "Manutenções e atualizações periódicas"],
    link: "/services/management"
  }
];

const ServicesPage = () => {
  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600')"
        }}>
        </div>
        <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-green/20"></div>
        
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-eco-green/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-eco-blue/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm animate-float">
              <Earth className="h-12 w-12 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-up" style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)"
              }}>Nossos Serviços</h1>
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                animationDelay: "0.1s"
              }} className="text-white/90 mt-4 max-w-3xl mx-auto animate-fade-up text-lg">
                Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Categories */}
      <section className="container py-16 relative">
        <div className="space-y-16 flex flex-col items-center">
          {serviceCategories.map((category, index) => (
            <div key={index} className="animate-fade-up max-w-4xl w-full" style={{
              animationDelay: `${0.1 + index * 0.1}s`
            }}>
              <div className="space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-eco-green/10 hover:border-eco-green/20 transition-all">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="bg-eco-green/10 p-4 rounded-full animate-float">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold" style={{
                    fontFamily: "'Poppins', sans-serif"
                  }}>{category.title}</h2>
                </div>
                
                <p className="text-muted-foreground text-lg text-center" style={{
                  fontFamily: "'Lato', sans-serif"
                }}>
                  {category.description}
                </p>
                
                <ul className="space-y-3 mx-auto max-w-lg">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 rounded-md">
                      <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                        <div className="rounded-full bg-eco-green w-2 h-2"></div>
                      </div>
                      <span style={{
                        fontFamily: "'Lato', sans-serif"
                      }} className="text-muted-foreground text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-center">
                  <Button asChild className="bg-eco-green hover:bg-eco-green-dark shimmer-button">
                    <Link to={category.link} className="flex items-center gap-2">
                      Ver detalhes <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        <div className="container relative">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Como Trabalhamos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{
              fontFamily: "'Lato', sans-serif"
            }}>Nossa abordagem para projetos ambientais é estruturada e orientada para resultados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{
              animationDelay: "0.2s"
            }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg shadow-lg animate-float">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>Diagnóstico</h3>
              <p className="text-muted-foreground" style={{
                fontFamily: "'Lato', sans-serif"
              }}>
                Realizamos uma análise detalhada da situação ambiental da empresa, identificando necessidades, pendências e oportunidades de melhoria.
              </p>
            </div>
            
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{
              animationDelay: "0.3s"
            }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>Planejamento</h3>
              <p className="text-muted-foreground" style={{
                fontFamily: "'Lato', sans-serif"
              }}>
                Desenvolvemos um plano de ação personalizado, com cronograma e definição clara dos entregáveis e responsabilidades.
              </p>
            </div>
            
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{
              animationDelay: "0.4s"
            }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>Execução</h3>
              <p className="text-muted-foreground" style={{
                fontFamily: "'Lato', sans-serif"
              }}>
                Implementamos as ações definidas, mantendo comunicação constante e transparente sobre o andamento dos trabalhos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default ServicesPage;
