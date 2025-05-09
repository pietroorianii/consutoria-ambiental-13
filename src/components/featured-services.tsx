
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-green">
        <path d="M2 22c1.25-1.67 2.04-3.92 6-7 3 4 5 5 14 0-4.87 8.68-15 10-20 7z"></path>
        <path d="M22 8c0 5-3 7-8 7s-8-2-8-7c0-3.31 1.79-6 4-6 1 0 2.83 1.67 4 2 1.17-.33 3-2 4-2 2.21 0 4 2.69 4 6z"></path>
      </svg>
    ),
    title: "Licenciamento Ambiental",
    description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
    link: "/services/licensing"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-blue">
        <path d="M2.273 12.8a1.09 1.09 0 0 0 1.092-1.085l.001-.001c.01-2.741 2.246-4.971 5.008-4.971 2.414 0 4.432 1.7 4.911 3.969l.05.201c.144.538.597.864 1.174.864h.1c3.145-.253 5.872 2.104 6.15 5.249a5.51 5.51 0 0 1-5.5 5.785H7.742a5.5 5.5 0 0 1-5.5-4.983 5.452 5.452 0 0 1 0-1.066 1.087 1.087 0 0 0 .031-.262Z"></path>
        <path d="M8.794 12.141c.275-.92 1.152-1.591 2.199-1.591s1.924.671 2.199 1.591l.461 1.999c.111.483.181.978.209 1.475h-5.538c.028-.497.098-.992.209-1.474l.261-.999"></path>
        <path d="M10.994 12.3v2.7"></path>
        <path d="m15.5 9 2-2"></path>
        <path d="M8 7 6 5"></path>
      </svg>
    ),
    title: "Monitoramento e Análises",
    description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
    link: "/services/monitoring"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-green-dark">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" x2="8" y1="13" y2="13"></line>
        <line x1="16" x2="8" y1="17" y2="17"></line>
        <line x1="10" x2="8" y1="9" y2="9"></line>
      </svg>
    ),
    title: "Planos e Relatórios",
    description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
    link: "/services/reports"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-blue-dark">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Consultoria Especializada",
    description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
    link: "/services/consulting"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-green">
        <path d="M17 14V2a1.93 1.93 0 0 0-2.3-1.89c-.24.05-6.77 2.31-7.7 2.64A2.93 2.93 0 0 0 5 5.5V14"></path>
        <path d="M17 14H5"></path>
        <path d="m8 19-3-3 3-3"></path>
        <path d="M14 13v6"></path>
        <path d="M5 8c0-2.2 1.8-4 4-4"></path>
      </svg>
    ),
    title: "Treinamentos Ambientais",
    description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
    link: "/services/training"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-blue">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    ),
    title: "Gestão Ambiental",
    description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
    link: "/services/management"
  }
];

export function FeaturedServices() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-eco-green/5 to-white"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-organic-pattern opacity-25"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-eco-blue/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full text-eco-green font-medium text-sm uppercase tracking-wider mb-6">
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" 
               style={{fontFamily: "'Poppins', sans-serif"}}>
            Soluções Ambientais Completas
          </h2>
          
          <div className="h-1 w-24 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" 
             style={{fontFamily: "'Montserrat', sans-serif"}}>
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores,
            auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} 
                  className="border border-border/70 h-full flex flex-col bg-white/90 backdrop-blur-sm hover-grow transition-all duration-500 scroll-trigger"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-xl" style={{fontFamily: "'Poppins', sans-serif"}}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center px-8 pb-6">
                <CardDescription style={{fontFamily: "'Montserrat', sans-serif"}} 
                                 className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="mt-auto pt-4 pb-6 flex justify-center border-t border-gray-100">
                <Link to={service.link} 
                      className="text-eco-green font-medium inline-flex items-center gap-2 hover:text-eco-green-dark transition-colors group">
                  Saiba mais 
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 scroll-trigger">
          <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg">
            <Link to="/services" className="flex items-center gap-2 relative z-10 text-base">
              Ver Todos os Serviços
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
