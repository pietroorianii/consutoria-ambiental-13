import { PageWrapper } from "@/components/ui/page-wrapper";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ExternalLink, Factory, Building2, Leaf, Droplets } from "lucide-react";
import { useEffect } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { legislationCategories } from "@/data/legislationData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type LegislationCategoryId = "industry" | "construction" | "agriculture" | "water";

const LegislationCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = legislationCategories.find(cat => {
    const categoryId = cat.link.split('/').pop();
    return categoryId === category;
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!categoryData) {
    return (
      <PageWrapper>
        <div className="container py-16">
          <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
          <p className="text-muted-foreground mb-8">A categoria de legislação solicitada não existe.</p>
        </div>
      </PageWrapper>
    );
  }

  // Get the appropriate icon for the header based on category
  const IconComponent = categoryData.icon;

  // Renderizar com subcategorias se existirem
  if (categoryData.subcategories && categoryData.subcategories.length > 0) {
    return (
      <PageWrapper>
        {/* Standardized Page Header */}
        <PageHeader 
          title={categoryData.title}
          description={categoryData.description}
          icon={<IconComponent className="h-12 w-12 text-white" />}
          backgroundImage={categoryData.image}
        />
        
        {/* Legislation List with Tabs */}
        <section className="container py-16 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue={categoryData.subcategories[0].title} className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto justify-center mb-6">
                {categoryData.subcategories.map((subcat, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={subcat.title}
                    className="mb-2 data-[state=active]:bg-eco-green data-[state=active]:text-white"
                  >
                    {subcat.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categoryData.subcategories.map((subcat, index) => (
                <TabsContent key={index} value={subcat.title} className="space-y-8">
                  <div className="bg-muted/30 p-4 rounded-lg mb-6">
                    <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {subcat.description}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {subcat.items.map((item, itemIndex) => (
                      <Card 
                        key={itemIndex} 
                        className="eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all animate-fade-up" 
                        style={{ animationDelay: `${0.1 + itemIndex * 0.1}s` }}
                      >
                        <CardHeader>
                          <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
                            {item.description}
                          </p>
                          <div>
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-eco-green hover:text-eco-green-dark transition-colors flex items-center gap-2 group"
                            >
                              Acessar legislação <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        <CTASection />
      </PageWrapper>
    );
  }

  // Renderização original para categorias sem subcategorias
  return (
    <PageWrapper>
      {/* Standardized Page Header */}
      <PageHeader 
        title={categoryData.title}
        description={categoryData.description}
        icon={<IconComponent className="h-12 w-12 text-white" />}
        backgroundImage={categoryData.image}
      />
      
      {/* Legislation List */}
      <section className="container py-16 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {categoryData.items.map((item, index) => (
            <Card key={index} className="eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>{item.description}</p>
                <div>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-eco-green hover:text-eco-green-dark transition-colors flex items-center gap-2 group"
                  >
                    Acessar legislação <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationCategoryPage;
