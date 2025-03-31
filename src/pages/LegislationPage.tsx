
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const legislationCategories = [
  {
    title: "Indústrias",
    description: "Legislações ambientais aplicáveis ao setor industrial, incluindo normas federais, estaduais e municipais.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=500",
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
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=800&h=500",
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
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800&h=500",
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
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800&h=500",
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
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="bg-muted py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">Legislação Ambiental</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Conheça as principais legislações ambientais aplicáveis aos diferentes setores econômicos e atividades. Mantenha-se atualizado sobre as normas e regulamentações que afetam o seu negócio.
            </p>
          </div>
        </div>
        
        {/* Legislation Categories */}
        <section className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legislationCategories.map((category, index) => (
              <Card key={index} className="eco-card h-full">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                          <div className="rounded-full bg-eco-green w-2 h-2"></div>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={category.link} className="inline-flex items-center gap-1 text-eco-green hover:text-eco-green-dark transition-colors font-medium mt-4">
                    Ver legislações <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Legislation Updates */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Atualizações Recentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fique por dentro das mais recentes alterações e atualizações na legislação ambiental brasileira.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-background border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Resolução CONAMA nº 500/2020</CardTitle>
                  <p className="text-sm text-eco-green font-medium">Publicada em 29/09/2020</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Revoga a Resolução nº 303/2002, que dispõe sobre parâmetros, definições e limites de Áreas de Preservação Permanente.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Lei nº 14.119/2021</CardTitle>
                  <p className="text-sm text-eco-green font-medium">Publicada em 13/01/2021</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Institui a Política Nacional de Pagamento por Serviços Ambientais e altera as Leis nº 8.212/1991, 8.629/1993 e 6.015/1973.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Decreto nº 10.936/2022</CardTitle>
                  <p className="text-sm text-eco-green font-medium">Publicada em 12/01/2022</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regulamenta a Lei nº 12.305/2010, que institui a Política Nacional de Resíduos Sólidos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default LegislationPage;
