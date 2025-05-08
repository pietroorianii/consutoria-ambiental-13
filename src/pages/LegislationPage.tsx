
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Globe } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { LegislationCard } from "@/components/legislation/LegislationCard";
import { legislationCategories } from "@/data/legislationData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LegislationSearch } from "@/components/legislation/LegislationSearch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const LegislationPage = () => {
  const [activeTab, setActiveTab] = useState("categories");
  
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
      
      {/* Search Section */}
      <section className="container py-10 relative">
        <div className="max-w-3xl mx-auto text-center mb-6 scroll-trigger">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Consulta de Legislação Ambiental
          </h2>
          <p className="text-muted-foreground mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
            Pesquise por leis, resoluções ou palavras-chave para encontrar rapidamente a legislação que você precisa.
          </p>
          <LegislationSearch />
        </div>
      </section>
      
      {/* Legislation Content */}
      <section className="container py-8 relative">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <TabsList className="w-full bg-muted/50 p-1 mb-8 flex justify-center">
            <TabsTrigger 
              value="categories" 
              className="text-base py-2 px-4 data-[state=active]:bg-eco-green data-[state=active]:text-white"
            >
              Categorias
            </TabsTrigger>
            <TabsTrigger 
              value="updates" 
              className="text-base py-2 px-4 data-[state=active]:bg-eco-green data-[state=active]:text-white"
            >
              Atualizações Recentes
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {legislationCategories.map((category, index) => (
                <LegislationCard 
                  key={index}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="updates" className="space-y-6">
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
          </TabsContent>
        </Tabs>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationPage;
