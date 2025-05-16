import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity } from "lucide-react";
const services = [{
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-green">
        <path d="M8 6h10"></path>
        <path d="M6 12h9"></path>
        <path d="M11 18h7"></path>
        <path d="M3 6v12c0 1 1 2 2 2s2-1 2-2V6c0-1-1-2-2-2s-2 1-2 2z"></path>
      </svg>,
  title: "Licenciamento Ambiental",
  description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
  link: "/services/licensing"
}, {
  icon: <Activity className="h-8 w-8 text-eco-blue" />,
  title: "Monitoramento e Análises",
  description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
  link: "/services/monitoring"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-green-dark">
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
        <path d="M9 17h6"></path>
        <path d="M9 13h6"></path>
      </svg>,
  title: "Planos e Relatórios",
  description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
  link: "/services/reports"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-blue-dark">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>,
  title: "Consultoria Especializada",
  description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
  link: "/services/consulting"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-green">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 3v18"></path>
        <path d="m14 15 3-3-3-3"></path>
      </svg>,
  title: "Treinamentos Ambientais",
  description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
  link: "/services/training"
}, {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-eco-blue">
        <path d="M20.9 18.55A10.58 10.58 0 0 0 22 12a10 10 0 1 0-20 0c0 4.83 3.44 8.86 8 9.8"></path>
        <path d="M12 2v10l4.45 4.45"></path>
        <path d="m19.5 15 2 2-2 2"></path>
        <path d="m15.5 19-2 2 2 2"></path>
      </svg>,
  title: "Gestão Ambiental",
  description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
  link: "/services/management"
}];
export function FeaturedServices() {
  return <section className="py-24 md:py-32 relative overflow-hidden">
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{
          fontFamily: "'Poppins', sans-serif"
        }}>
            Soluções Ambientais Completas
          </h2>
          
          <div className="h-1 w-24 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" style={{
          fontFamily: "'Montserrat', sans-serif"
        }}>
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores,
            auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="border border-border/70 h-full flex flex-col bg-white/90 backdrop-blur-sm hover-grow transition-all duration-500 scroll-trigger" style={{
          animationDelay: `${0.2 + index * 0.1}s`
        }}>
              <CardHeader className="text-center pb-4">
                <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-xl" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center px-8 pb-6 flex-grow">
                <CardDescription style={{
              fontFamily: "'Montserrat', sans-serif"
            }} className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="mt-auto pt-4 pb-6 flex justify-center border-t border-gray-100 rounded-b-xl bg-gray-100">
                <Link to={service.link} className="text-eco-green font-medium inline-flex items-center gap-2 hover:text-eco-green-dark hover:underline transition-colors group">
                  Saiba mais 
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </CardFooter>
            </Card>)}
        </div>
        
        <div className="text-center mt-16 scroll-trigger">
          <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg">
            <Link to="/services" className="flex items-center gap-2 relative z-10 text-base hover:underline">
              Ver Todos os Serviços
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>;
}