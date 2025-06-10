
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { serviceCategories } from "@/data/serviceCategories";
import { 
  Leaf, 
  Beaker, 
  FileText, 
  Users, 
  TreeDeciduous, 
  CloudSun,
  Globe,
  Recycle,
  ArrowRight, 
  CheckCircle,
  Sparkles,
  TrendingUp,
  Waves,
  Mountain
} from "lucide-react";

// Mapeamento completo de estilos para todas as categorias - removendo isNew
const serviceStyles: { [key: string]: { icon: React.ReactNode; badge: string; bgGradient: string; borderColor: string; buttonColor: string } } = {
  licensing: {
    icon: <Leaf className="h-8 w-8 text-eco-green" />,
    badge: "Essencial",
    bgGradient: "from-eco-green/8 via-eco-green/3 to-transparent",
    borderColor: "border-eco-green/30 hover:border-eco-green/60",
    buttonColor: "bg-eco-green hover:bg-eco-green-dark"
  },
  water_resources: {
    icon: <Waves className="h-8 w-8 text-blue-500" />,
    badge: "Vital",
    bgGradient: "from-blue-500/8 via-blue-500/3 to-transparent",
    borderColor: "border-blue-500/30 hover:border-blue-500/60",
    buttonColor: "bg-blue-500 hover:bg-blue-600"
  },
  degraded_areas: {
    icon: <Mountain className="h-8 w-8 text-amber-600" />,
    badge: "Recuperação",
    bgGradient: "from-amber-600/8 via-amber-600/3 to-transparent",
    borderColor: "border-amber-600/30 hover:border-amber-600/60",
    buttonColor: "bg-amber-600 hover:bg-amber-700"
  },
  monitoring: {
    icon: <Beaker className="h-8 w-8 text-eco-blue" />,
    badge: "Contínuo",
    bgGradient: "from-eco-blue/8 via-eco-blue/3 to-transparent",
    borderColor: "border-eco-blue/30 hover:border-eco-blue/60",
    buttonColor: "bg-eco-blue hover:bg-eco-blue-dark"
  },
  reports: {
    icon: <FileText className="h-8 w-8 text-eco-earth-dark" />,
    badge: "Técnico",
    bgGradient: "from-eco-earth/8 via-eco-earth/3 to-transparent",
    borderColor: "border-eco-earth/30 hover:border-eco-earth/60",
    buttonColor: "bg-eco-earth-dark hover:bg-eco-earth-dark/90"
  },
  consulting: {
    icon: <Users className="h-8 w-8 text-eco-accent-teal" />,
    badge: "Estratégico",
    bgGradient: "from-eco-accent-teal/8 via-eco-accent-teal/3 to-transparent",
    borderColor: "border-eco-accent-teal/30 hover:border-eco-accent-teal/60",
    buttonColor: "bg-eco-accent-teal hover:bg-eco-accent-teal/90"
  },
  training: {
    icon: <TreeDeciduous className="h-8 w-8 text-eco-accent-orange" />,
    badge: "Capacitação",
    bgGradient: "from-eco-accent-orange/8 via-eco-accent-orange/3 to-transparent",
    borderColor: "border-eco-accent-orange/30 hover:border-eco-accent-orange/60",
    buttonColor: "bg-eco-accent-orange hover:bg-eco-accent-orange/90"
  },
  management: {
    icon: <CloudSun className="h-8 w-8 text-eco-blue-dark" />,
    badge: "Gestão",
    bgGradient: "from-eco-blue-dark/8 via-eco-blue-dark/3 to-transparent",
    borderColor: "border-eco-blue-dark/30 hover:border-eco-blue-dark/60",
    buttonColor: "bg-eco-blue-dark hover:bg-eco-blue-dark/90"
  },
  esg: {
    icon: <Globe className="h-8 w-8 text-eco-green-dark" />,
    badge: "Inovação",
    bgGradient: "from-eco-green-dark/8 via-eco-green-dark/3 to-transparent",
    borderColor: "border-eco-green-dark/30 hover:border-eco-green-dark/60",
    buttonColor: "bg-eco-green-dark hover:bg-eco-green-dark/90"
  },
  climate: {
    icon: <Recycle className="h-8 w-8 text-eco-accent-yellow" />,
    badge: "Futuro",
    bgGradient: "from-eco-accent-yellow/8 via-eco-accent-yellow/3 to-transparent",
    borderColor: "border-eco-accent-yellow/30 hover:border-eco-accent-yellow/60",
    buttonColor: "bg-eco-accent-yellow hover:bg-eco-accent-yellow/90"
  }
};

// Default fallback styles
const defaultStyles = {
  icon: <TrendingUp className="h-8 w-8 text-gray-500" />,
  badge: "Serviço",
  bgGradient: "from-gray-50/8 via-gray-50/3 to-transparent",
  borderColor: "border-gray-300/30 hover:border-gray-300/60",
  buttonColor: "bg-gray-500 hover:bg-gray-600"
};

export function FeaturedServices() {
  const serviceEntries = Object.entries(serviceCategories);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background aprimorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-eco-green/3 to-white"></div>
      <div className="absolute inset-0 organic-pattern opacity-[0.015]"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-green/10 text-eco-green font-medium text-sm uppercase tracking-wider rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Soluções Ambientais Completas
          </h2>
          
          <div className="h-1 w-24 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores,
            auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceEntries.map(([key, serviceData], index) => {
            const styles = serviceStyles[key] || defaultStyles;
            return (
              <Card 
                key={key} 
                className={`group relative overflow-hidden transition-all duration-500 bg-gradient-to-br ${styles.bgGradient} backdrop-blur-sm border-2 ${styles.borderColor} h-full flex flex-col hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] scroll-trigger`}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`mb-4 bg-opacity-15 p-3 rounded-xl w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md`}>
                    {styles.icon}
                  </div>
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-opacity-15 text-gray-600 group-hover:text-gray-800 transition-colors`}>
                      {styles.badge}
                    </span>
                  </div>
                  <CardTitle className="font-secondary text-lg group-hover:text-eco-green-dark transition-colors leading-tight">
                    {serviceData.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-6 flex-grow relative z-10 flex flex-col">
                  {/* LISTA DETALHADA DE SUB-SERVIÇOS com fonte maior */}
                  <ul className="space-y-2 text-left mb-4 flex-grow">
                    {serviceData.services.slice(0, 3).map((subService, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-eco-green mt-1 flex-shrink-0" />
                        <span className="font-body text-sm text-gray-700">{subService.title}</span>
                      </li>
                    ))}
                    {serviceData.services.length > 3 && (
                        <li className="flex items-start gap-2">
                             <CheckCircle className="h-4 w-4 text-eco-green/50 mt-1 flex-shrink-0" />
                            <span className="font-body text-sm text-gray-500">e mais...</span>
                        </li>
                    )}
                  </ul>
                </CardContent>
                
                <CardFooter className="mt-auto pt-4 pb-6 flex flex-col gap-3 border-t border-gray-100 bg-gray-50/60 relative z-10">
                  <Button 
                    asChild 
                    className={`w-full ${styles.buttonColor} text-white group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm`}
                  >
                    <Link to={`/services/${key}`} className="flex items-center justify-center gap-2">
                      Saiba mais 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16 scroll-trigger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-eco-green/30 hover:border-eco-green/50 transition-colors">
              <CheckCircle className="h-5 w-5 text-eco-green" />
              <span className="font-medium text-gray-700">+500 Projetos Realizados</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-eco-blue/30 hover:border-eco-blue/50 transition-colors">
              <CheckCircle className="h-5 w-5 text-eco-blue" />
              <span className="font-medium text-gray-700">98% Taxa de Sucesso</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-eco-accent-teal/30 hover:border-eco-accent-teal/50 transition-colors">
              <CheckCircle className="h-5 w-5 text-eco-accent-teal" />
              <span className="font-medium text-gray-700">Conformidade Garantida</span>
            </div>
          </div>
          
          <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/services" className="flex items-center gap-2 relative z-10 text-base">
              Ver Todos os Serviços
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
