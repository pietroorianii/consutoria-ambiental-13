
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/cta-section";
import { Link } from "react-router-dom";
import { Beaker, FileText, Leaf, TreeDeciduous, Users, CloudSun, Earth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceList } from "@/components/service/ServiceList";
import { serviceCategories } from "@/data/serviceCategories";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600')" }}>
          </div>
          <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-green/20"></div>
          
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-eco-green/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-eco-blue/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm animate-float">
                <Earth className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-up" style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)"
              }}>Nossos Serviços</h1>
                <p className="text-white/90 mt-4 max-w-3xl animate-fade-up" style={{
                fontFamily: "'Roboto', sans-serif",
                animationDelay: "0.1s"
              }}>
                  Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Categories in Cards Format */}
        <section className="container py-16 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceCategories).map(([categoryKey, category], index) => (
              <Card 
                key={categoryKey}
                className="overflow-hidden border-eco-green/10 hover:border-eco-green/30 hover:shadow-lg transition-all duration-300 h-full animate-fade-up" 
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <div className="h-40 bg-gradient-to-r relative overflow-hidden"
                  style={{
                    backgroundImage: index % 2 === 0 
                      ? 'linear-gradient(90deg, hsla(134, 36%, 53%, 0.8) 0%, hsla(59, 86%, 68%, 0.8) 100%)' 
                      : 'linear-gradient(90deg, hsla(176, 73%, 88%, 0.8) 0%, hsla(46, 73%, 75%, 0.8) 100%)'
                  }}
                >
                  <div className="absolute inset-0 leaf-pattern opacity-10"></div>
                  <div className="absolute bottom-4 left-4 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <div className="text-white">{category.icon}</div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" style={{fontFamily: "'Lato', sans-serif"}}>
                    {category.description}
                  </p>
                  <Button asChild className="bg-eco-green hover:bg-eco-green-dark transition-all duration-300 w-full">
                    <Link to={`/services/${categoryKey}`} className="flex items-center justify-center gap-2">
                      Ver detalhes <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
