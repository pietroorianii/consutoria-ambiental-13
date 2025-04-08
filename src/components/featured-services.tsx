import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, FileText, Leaf, TreeDeciduous, Users, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Leaf className="h-8 w-8 text-eco-green" />,
    title: "Licenciamento Ambiental",
    description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
    link: "/services/licensing"
  }, {
    icon: <Beaker className="h-8 w-8 text-eco-blue" />,
    title: "Monitoramento e Análises",
    description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
    link: "/services/monitoring"
  }, {
    icon: <FileText className="h-8 w-8 text-eco-green-dark" />,
    title: "Planos e Relatórios",
    description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
    link: "/services/reports"
  }, {
    icon: <Users className="h-8 w-8 text-eco-blue-dark" />,
    title: "Consultoria Especializada",
    description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
    link: "/services/consulting"
  }, {
    icon: <TreeDeciduous className="h-8 w-8 text-eco-green" />,
    title: "Treinamentos Ambientais",
    description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
    link: "/services/training"
  }, {
    icon: <CloudSun className="h-8 w-8 text-eco-blue" />,
    title: "Gestão Ambiental",
    description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
    link: "/services/management"
  }
];

export function FeaturedServices() {
  return (
    <section className="container py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-opacity-5 bg-eco-green-light leaf-pattern"></div>
      <div className="relative z-10">
        <div className="text-center mb-16 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
          <div className="flex justify-center mb-4">
            <div className="bg-eco-green/10 p-3 rounded-full inline-flex items-center justify-center">
              <Leaf className="h-10 w-10 text-eco-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{
            fontFamily: "'Roboto', sans-serif"
          }}>
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/70 eco-card h-full flex flex-col bg-white/90 backdrop-blur-sm hover:shadow-lg hover:shadow-eco-green/5 hover:border-eco-green/20 transition-all duration-300 animate-fade-up" style={{
              animationDelay: `${0.2 + index * 0.1}s`
            }}>
              <CardHeader className="text-center">
                <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center px-[12px] py-[12px] mx-auto">{service.icon}</div>
                <CardTitle style={{
                  fontFamily: "'Poppins', sans-serif"
                }}>{service.title}</CardTitle>
                <CardDescription style={{
                  fontFamily: "'Lato', sans-serif"
                }} className="text-lg text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4 flex justify-center">
                <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group">
                  <Link to={service.link} className="flex items-center gap-1">
                    Saiba mais <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{
          animationDelay: "0.8s"
        }}>
          <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative">
            <Link to="/services" className="flex items-center gap-2 relative z-10">
              Ver Todos os Serviços <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
