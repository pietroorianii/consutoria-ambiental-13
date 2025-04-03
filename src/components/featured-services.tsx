
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, FileText, Leaf, TreeDeciduous, Users, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section header
            const header = entry.target.querySelector('.section-header');
            header?.classList.add('opacity-100', 'translate-y-0');
            header?.classList.remove('opacity-0', 'translate-y-10');

            // Animate cards
            cardsRef.current.forEach((card, index) => {
              if (card) {
                card.style.transitionDelay = `${0.2 + index * 0.1}s`;
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-10');
              }
            });

            // Animate "View All Services" button
            const button = entry.target.querySelector('.view-all-btn');
            button?.classList.add('opacity-100', 'translate-y-0');
            button?.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.classList.add('opacity-0', 'translate-y-10');
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="container py-16 md:py-20 relative overflow-hidden transition-all duration-700">
      <div className="absolute inset-0 bg-opacity-5 bg-eco-green-light leaf-pattern"></div>
      <div className="relative z-10">
        <div className="text-center mb-12 section-header opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex justify-center mb-4">
            <div className="bg-eco-green/10 p-3 rounded-full inline-flex items-center justify-center">
              <Leaf className="h-10 w-10 text-eco-green" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores, auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="opacity-0 translate-y-10 transition-all duration-700"
            >
              <Card className="border border-border/70 eco-card h-full flex flex-col bg-white/90 backdrop-blur-sm hover:shadow-lg hover:shadow-eco-green/5 hover:border-eco-green/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">{service.icon}</div>
                  <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{service.title}</CardTitle>
                  <CardDescription style={{ fontFamily: "'Lato', sans-serif" }}>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group">
                    <Link to={service.link} className="flex items-center gap-1">
                      Saiba mais <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 view-all-btn opacity-0 translate-y-10 transition-all duration-700">
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
