
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Info, Users } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageBanner 
        title="Sobre Nós"
        description="Conheça nossa história, valores e compromisso com a sustentabilidade ambiental. Nossa missão é oferecer soluções ambientais eficientes e inovadoras para nossos clientes."
        icon={<Info className="h-12 w-12 text-eco-green" />}
        image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Our History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{fontFamily: "'Poppins', sans-serif"}}>
              Nossa História
            </h2>
            <div className="h-1 w-20 bg-eco-green mx-auto mb-8"></div>
            
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-eco-green/10">
              <p className="mb-4 text-lg">
                Fundada em 2010, a Eco Consultoria nasceu com o propósito de transformar a relação entre empresas e meio ambiente, 
                oferecendo soluções sustentáveis que garantem conformidade legal e responsabilidade ambiental.
              </p>
              <p className="mb-4">
                Ao longo dos anos, expandimos nossa atuação em todo o território nacional, consolidando nossa expertise 
                em licenciamento ambiental, gestão de resíduos, estudos de impacto ambiental e consultoria especializada
                para diversos setores econômicos.
              </p>
              <p>
                Hoje, contamos com uma equipe multidisciplinar de profissionais altamente qualificados, 
                incluindo engenheiros ambientais, biólogos, geólogos e especialistas em legislação ambiental, 
                todos comprometidos com a excelência e a busca por soluções inovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <MissionVisionValues />
      
      {/* Our Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>
              Nossa Equipe
            </h2>
            <div className="h-1 w-20 bg-eco-green mx-auto mb-8"></div>
            
            <p className="mb-8 text-lg">
              Nossos especialistas são profissionais altamente qualificados, com formação acadêmica e experiência 
              prática nas áreas de meio ambiente, sustentabilidade e legislação ambiental. Conheça os profissionais 
              que fazem da Eco Consultoria referência em soluções ambientais.
            </p>
            
            <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green/80">
              <Link to="/team" className="flex items-center gap-2">
                <Users size={20} />
                Conhecer Nossa Equipe
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default AboutPage;
