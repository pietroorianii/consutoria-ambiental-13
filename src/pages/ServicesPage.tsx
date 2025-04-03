import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { Link } from "react-router-dom";
import { ArrowRight, Beaker, FileText, Leaf, TreeDeciduous, Users, CloudSun, Earth } from "lucide-react";
const serviceCategories = [{
  icon: <Leaf className="h-12 w-12 text-eco-green" />,
  title: "Licenciamento e Autorizações",
  description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
  items: ["Licenciamentos Ambientais (LP, LI, LO, AA, LAS)", "Autorizações Ambientais", "Cadastro Técnico Federal (IBAMA)", "Outorgas de Recursos Hídricos"],
  link: "/services/licensing"
}, {
  icon: <Beaker className="h-12 w-12 text-eco-blue" />,
  title: "Monitoramento e Análises",
  description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
  items: ["Acompanhamento de condicionantes ambientais", "Declaração de Carga Poluidora (DCP)", "Monitoramento de emissões de poluentes", "Gestão de amostragens e análises"],
  link: "/services/monitoring"
}, {
  icon: <FileText className="h-12 w-12 text-eco-green-dark" />,
  title: "Planos e Relatórios",
  description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
  items: ["Inventário de Resíduos Sólidos", "Planos de Gerenciamento de Resíduos", "Estudos de Impacto Ambiental (EIA/RIMA, EIV/RIV)", "Programas de Gestão Ambiental"],
  link: "/services/reports"
}, {
  icon: <Users className="h-12 w-12 text-eco-blue-dark" />,
  title: "Acompanhamento e Consultoria",
  description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
  items: ["Acompanhamento de projetos ambientais", "Elaboração de relatórios para TAC e notificações", "Inspeções ambientais e auditorias", "Relatórios de cumprimento de condicionantes"],
  link: "/services/consulting"
}, {
  icon: <TreeDeciduous className="h-12 w-12 text-eco-green" />,
  title: "Treinamentos e Capacitações",
  description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
  items: ["Treinamentos presenciais e remotos", "Treinamento em Gerenciamento de Resíduos Sólidos", "Capacitações específicas para cada setor"],
  link: "/services/training"
}, {
  icon: <CloudSun className="h-12 w-12 text-eco-blue" />,
  title: "Gestão e Manutenção Ambiental",
  description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
  items: ["Renovação de licenças e autorizações", "Declarações e inventários anuais", "Defesas ambientais", "Manutenções e atualizações periódicas"],
  link: "/services/management"
}];
const ServicesPage = () => {
  return <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-opacity-5 leaf-pattern"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <Earth className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>Nossos Serviços</h1>
                <p className="text-white/90 mt-4 max-w-3xl" style={{
                fontFamily: "'Roboto', sans-serif"
              }}>
                  Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Categories */}
        <section className="container py-16">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} animate-fade-up`} style={{
            animationDelay: `${0.1 + index * 0.1}s`
          }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-eco-green/10 p-4 rounded-full">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold" style={{
                  fontFamily: "'Poppins', sans-serif"
                }}>{category.title}</h2>
                  </div>
                  
                  <p className="text-muted-foreground text-lg" style={{
                fontFamily: "'Lato', sans-serif"
              }}>
                    {category.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                        <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                          <div className="rounded-full bg-eco-green w-2 h-2"></div>
                        </div>
                        <span style={{
                    fontFamily: "'Lato', sans-serif"
                  }} className="text-muted-foreground font-medium">{item}</span>
                      </li>)}
                  </ul>
                  
                  <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                    <Link to={category.link} className="flex items-center gap-2">
                      Ver detalhes <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                <div className="relative rounded-lg overflow-hidden h-[300px] group">
                  <img src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1482938289607-e9573fc25ebb' : '1509316975850-ff9c5deb0cd9'}?auto=format&fit=crop&q=80&w=800&h=500`} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    {category.icon}
                  </div>
                </div>
              </div>)}
          </div>
        </section>
        
        {/* Process Section */}
        <section className="bg-gradient-to-br from-muted to-muted/50 py-16 leaf-pattern">
          <div className="container">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Como Trabalhamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" style={{
              fontFamily: "'Lato', sans-serif"
            }}>Licenciamentos Ambientais (LP, LI, LO, AA, LAS, DLAE)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative bg-background rounded-lg p-8 shadow-sm animate-fade-up" style={{
              animationDelay: "0.2s"
            }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg">
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
              
              <div className="relative bg-background rounded-lg p-8 shadow-sm animate-fade-up" style={{
              animationDelay: "0.3s"
            }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg">
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
              
              <div className="relative bg-background rounded-lg p-8 shadow-sm animate-fade-up" style={{
              animationDelay: "0.4s"
            }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg">
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
      </main>
      <Footer />
    </>;
};
export default ServicesPage;