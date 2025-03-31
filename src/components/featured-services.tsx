
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
  },
  {
    icon: <Beaker className="h-8 w-8 text-eco-blue" />,
    title: "Monitoramento e Análises",
    description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
    link: "/services/monitoring"
  },
  {
    icon: <FileText className="h-8 w-8 text-eco-green-dark" />,
    title: "Planos e Relatórios",
    description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
    link: "/services/reports"
  },
  {
    icon: <Users className="h-8 w-8 text-eco-blue-dark" />,
    title: "Consultoria Especializada",
    description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
    link: "/services/consulting"
  },
  {
    icon: <TreeDeciduous className="h-8 w-8 text-eco-green" />,
    title: "Treinamentos Ambientais",
    description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
    link: "/services/training"
  },
  {
    icon: <CloudSun className="h-8 w-8 text-eco-blue" />,
    title: "Gestão Ambiental",
    description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
    link: "/services/management"
  }
];

export function FeaturedServices() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border border-border/70 eco-card h-full flex flex-col">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4">
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                <Link to={service.link} className="flex items-center gap-1">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
          <Link to="/services">Ver Todos os Serviços</Link>
        </Button>
      </div>
    </section>
  );
}
