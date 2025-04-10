
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Factory, Droplets, Building2, Leaf } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";

const legislationCategories = [
  {
    title: "Indústrias",
    description: "Legislações ambientais aplicáveis ao setor industrial, incluindo normas federais, estaduais e municipais.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Factory className="h-10 w-10 text-eco-green" />,
    items: [
      "Política Nacional do Meio Ambiente",
      "Limites de emissões atmosféricas",
      "Gestão de resíduos industriais",
      "Licenciamento para atividades industriais"
    ],
    link: "/legislation/industry"
  },
  {
    title: "Construção Civil",
    description: "Normas e leis ambientais específicas para o setor da construção civil, desde o licenciamento até a gestão de resíduos.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Building2 className="h-10 w-10 text-eco-blue" />,
    items: [
      "Gestão de resíduos da construção civil",
      "Avaliação de impactos ambientais",
      "Licenciamento de obras",
      "Normas da ABNT para construção sustentável"
    ],
    link: "/legislation/construction"
  },
  {
    title: "Agricultura",
    description: "Legislações aplicáveis ao setor agrícola, incluindo normas sobre uso do solo, recursos hídricos e agrotóxicos.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Leaf className="h-10 w-10 text-eco-green-dark" />,
    items: [
      "Código Florestal",
      "Legislação de agrotóxicos",
      "Outorga para uso de recursos hídricos",
      "Área de Preservação Permanente e Reserva Legal"
    ],
    link: "/legislation/agriculture"
  },
  {
    title: "Recursos Hídricos",
    description: "Normas e regulamentações para gestão, uso e preservação dos recursos hídricos, incluindo outorgas e enquadramento.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Droplets className="h-10 w-10 text-eco-blue-dark" />,
    items: [
      "Política Nacional de Recursos Hídricos",
      "Classificação de corpos d'água",
      "Padrões de lançamento de efluentes",
      "Outorga de direito de uso da água"
    ],
    link: "/legislation/water"
  }
];

const LegislationPage = () => {
  return (
    <PageWrapper>
      {/* Page Header with standardized format */}
      <PageHeader 
        title="Legislação Ambiental"
        description="Conheça as principais legislações ambientais aplicáveis aos diferentes setores econômicos e atividades. Mantenha-se atualizado sobre as normas e regulamentações que afetam o seu negócio."
        icon={<Globe className="h-12 w-12 text-white" />}
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Legislation Categories */}
      <section className="container py-16 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {legislationCategories.map((category, index) => (
            <Card key={index} className="eco-card h-full border-eco-green/10 hover:border-eco-green/30 transition-all duration-300 animate-fade-up bg-background/80 backdrop-blur-sm shadow-md hover:shadow-lg" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <div className="aspect-[3/2] w-full overflow-hidden rounded-t-lg relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 leaf-pattern opacity-10"></div>
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  {category.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{category.title}</CardTitle>
                <CardDescription style={{ fontFamily: "'Lato', sans-serif" }}>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                        <div className="rounded-full bg-eco-green w-2 h-2"></div>
                      </div>
                      <span className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-start pt-2">
                  <Link to={category.link} className="inline-flex items-center gap-1 text-eco-green hover:text-eco-green-dark transition-colors font-medium mt-4 group">
                    Ver legislações <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Legislation Updates */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Atualizações Recentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              Fique por dentro das mais recentes alterações e atualizações na legislação ambiental brasileira.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>Resolução CONAMA nº 500/2020</CardTitle>
                <p className="text-sm text-eco-green font-medium">Publicada em 29/09/2020</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Revoga a Resolução nº 303/2002, que dispõe sobre parâmetros, definições e limites de Áreas de Preservação Permanente.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>Lei nº 14.119/2021</CardTitle>
                <p className="text-sm text-eco-green font-medium">Publicada em 13/01/2021</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Institui a Política Nacional de Pagamento por Serviços Ambientais e altera as Leis nº 8.212/1991, 8.629/1993 e 6.015/1973.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>Decreto nº 10.936/2022</CardTitle>
                <p className="text-sm text-eco-green font-medium">Publicada em 12/01/2022</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Regulamenta a Lei nº 12.305/2010, que institui a Política Nacional de Resíduos Sólidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationPage;
