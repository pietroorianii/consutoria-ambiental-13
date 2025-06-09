
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Beaker, 
  FileText, 
  Users, 
  TreeDeciduous, 
  CloudSun,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [{
  icon: <Leaf className="h-8 w-8 text-eco-green" />,
  title: "Licenciamento Ambiental",
  description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
  highlights: [
    "Licenças Prévias, de Instalação e Operação",
    "Autorizações para supressão de vegetação",
    "Acompanhamento em órgãos ambientais"
  ],
  link: "/service/licensing",
  bgGradient: "from-eco-green/5 via-eco-green/2 to-transparent",
  borderColor: "border-eco-green/20 hover:border-eco-green/40",
  iconBg: "bg-eco-green/10",
  buttonColor: "bg-eco-green hover:bg-eco-green-dark"
}, {
  icon: <Beaker className="h-8 w-8 text-eco-blue" />,
  title: "Monitoramento e Análises",
  description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
  highlights: [
    "Acompanhamento de condicionantes",
    "Monitoramento de emissões",
    "Análises laboratoriais especializadas"
  ],
  link: "/service/monitoring",
  bgGradient: "from-eco-blue/5 via-eco-blue/2 to-transparent",
  borderColor: "border-eco-blue/20 hover:border-eco-blue/40",
  iconBg: "bg-eco-blue/10",
  buttonColor: "bg-eco-blue hover:bg-eco-blue-dark"
}, {
  icon: <FileText className="h-8 w-8 text-eco-earth-dark" />,
  title: "Planos e Relatórios",
  description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
  highlights: [
    "Planos de Gerenciamento (PGRS, PGRSS)",
    "Estudos de Impacto Ambiental",
    "Programas de Gestão Ambiental"
  ],
  link: "/service/reports",
  bgGradient: "from-eco-earth-medium/5 via-eco-earth-medium/2 to-transparent",
  borderColor: "border-eco-earth-medium/20 hover:border-eco-earth-medium/40",
  iconBg: "bg-eco-earth-medium/10",
  buttonColor: "bg-eco-earth-dark hover:bg-eco-earth-dark/90"
}, {
  icon: <Users className="h-8 w-8 text-eco-accent-teal" />,
  title: "Consultoria Especializada",
  description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
  highlights: [
    "Acompanhamento de projetos",
    "Relatórios para Auto de Infração",
    "Inspeções e auditorias ambientais"
  ],
  link: "/service/consulting",
  bgGradient: "from-eco-accent-teal/5 via-eco-accent-teal/2 to-transparent",
  borderColor: "border-eco-accent-teal/20 hover:border-eco-accent-teal/40",
  iconBg: "bg-eco-accent-teal/10",
  buttonColor: "bg-eco-accent-teal hover:bg-eco-accent-teal/90"
}, {
  icon: <TreeDeciduous className="h-8 w-8 text-eco-accent-sage" />,
  title: "Treinamentos Ambientais",
  description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
  highlights: [
    "Treinamentos presenciais e remotos",
    "Gerenciamento de Resíduos Sólidos",
    "Certificação de participantes"
  ],
  link: "/service/training",
  bgGradient: "from-eco-accent-sage/5 via-eco-accent-sage/2 to-transparent",
  borderColor: "border-eco-accent-sage/20 hover:border-eco-accent-sage/40",
  iconBg: "bg-eco-accent-sage/10",
  buttonColor: "bg-eco-accent-sage hover:bg-eco-accent-sage/90"
}, {
  icon: <CloudSun className="h-8 w-8 text-eco-blue-muted" />,
  title: "Gestão Ambiental",
  description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
  highlights: [
    "Renovação de licenças e autorizações",
    "Declarações e inventários anuais",
    "Manutenções periódicas"
  ],
  link: "/service/management",
  bgGradient: "from-eco-blue-muted/5 via-eco-blue-muted/2 to-transparent",
  borderColor: "border-eco-blue-muted/20 hover:border-eco-blue-muted/40",
  iconBg: "bg-eco-blue-muted/10",
  buttonColor: "bg-eco-blue-muted hover:bg-eco-blue-muted/90"
}];

export function FeaturedServices() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background aprimorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-eco-green/5 to-white"></div>
      <div className="absolute inset-0 organic-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/4 right-10 w-60 h-60 bg-eco-green/3 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-eco-blue/3 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-green/10 text-eco-green font-medium text-sm uppercase tracking-wider rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções Ambientais Completas
          </h2>
          
          <div className="h-1 w-24 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores,
            auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-500 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border-2 ${service.borderColor} h-full hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] scroll-trigger`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`
              }}
            >
              {/* Overlay sutil para profundidade */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`mb-4 ${service.iconBg} p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="font-secondary text-xl group-hover:text-eco-green-dark transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center px-8 pb-6 flex-grow relative z-10">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                
                {/* Principais highlights */}
                <ul className="space-y-2 text-left">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-eco-green mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="mt-auto pt-4 pb-6 flex flex-col gap-3 border-t border-gray-100 bg-gray-50/50 relative z-10">
                <Button 
                  asChild 
                  className={`w-full ${service.buttonColor} text-white group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium`}
                >
                  <Link to={service.link} className="flex items-center justify-center gap-2">
                    Saiba mais 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 scroll-trigger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-eco-green/20">
              <CheckCircle className="h-5 w-5 text-eco-green" />
              <span className="font-medium text-gray-700">+500 Projetos Realizados</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-eco-blue/20">
              <CheckCircle className="h-5 w-5 text-eco-blue" />
              <span className="font-medium text-gray-700">98% Taxa de Sucesso</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-eco-accent-teal/20">
              <CheckCircle className="h-5 w-5 text-eco-accent-teal" />
              <span className="font-medium text-gray-700">Conformidade Garantida</span>
            </div>
          </div>
          
          <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg font-medium">
            <Link to="/services" className="flex items-center gap-2 relative z-10 text-base hover:underline">
              Ver Todos os Serviços
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
