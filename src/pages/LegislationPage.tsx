
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Globe } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { LegislationCard } from "@/components/legislation/LegislationCard";
import { legislationCategories } from "@/data/legislationData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LegislationPage = () => {
  const recentUpdates = [
    {
      title: "Resolução CONAMA nº 500/2020",
      date: "Publicada em 29/09/2020",
      description: "Revoga a Resolução nº 303/2002, que dispõe sobre parâmetros, definições e limites de Áreas de Preservação Permanente."
    },
    {
      title: "Lei nº 14.119/2021",
      date: "Publicada em 13/01/2021",
      description: "Institui a Política Nacional de Pagamento por Serviços Ambientais e altera as Leis nº 8.212/1991, 8.629/1993 e 6.015/1973."
    },
    {
      title: "Decreto nº 10.936/2022",
      date: "Publicada em 12/01/2022",
      description: "Regulamenta a Lei nº 12.305/2010, que institui a Política Nacional de Resíduos Sólidos."
    }
  ];

  return (
    <PageWrapper>
      <PageHeader 
        title="Legislação Ambiental"
        description="Conheça as principais legislações ambientais aplicáveis aos diferentes setores econômicos e atividades. Mantenha-se atualizado sobre as normas e regulamentações que afetam o seu negócio."
        icon={<Globe className="h-12 w-12 text-white" />}
        backgroundImage="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Legislation Categories */}
      <section className="container py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {legislationCategories.map((category, index) => (
            <LegislationCard 
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Legislation Updates */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12 scroll-trigger">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Atualizações Recentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              Fique por dentro das mais recentes alterações e atualizações na legislação ambiental brasileira.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recentUpdates.map((update, index) => (
              <Card 
                key={index}
                className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all scroll-trigger" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{update.title}</CardTitle>
                  <p className="text-sm text-eco-green font-medium">{update.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                    {update.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationPage;
