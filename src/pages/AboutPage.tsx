
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Info } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner"; // Importar PageBanner

// Team members data
const teamMembers = [{
  id: 1,
  name: "Dra. Lilian C. Prates",
  role: "Diretora Executiva e Consultora Ambiental Sênior",
  image: "/lovable-uploads/f0e39d9d-92ef-40b8-8252-05cdfebcb9f6.png",
  bio: "Engenheira Ambiental com vasta experiência em licenciamento, gestão de resíduos e auditorias. Lidera a equipe com foco em soluções inovadoras e sustentáveis.",
  specialties: ["Licenciamento Ambiental", "Gestão de Resíduos", "Auditorias Ambientais"]
}, {
  id: 2,
  name: "Dr. Paulo R. Almeida",
  role: "Consultor Ambiental Especialista em Recursos Hídricos",
  image: "/lovable-uploads/d620006c-64d5-4c80-b264-c256773f112f.png",
  bio: "Geólogo especializado em hidrogeologia e outorgas. Responsável por projetos de uso e conservação da água, garantindo conformidade e eficiência.",
  specialties: ["Recursos Hídricos", "Hidrogeologia", "Outorgas"]
}];

const AboutPage = () => {
  return (
    <PageWrapper>
      {/* Cabeçalho da página padronizado com PageBanner */}
      <PageBanner
        title="Sobre a L&P Soluções Ambientais"
        description="Conectando desenvolvimento e sustentabilidade com expertise e inovação."
        icon={<Info className="h-12 w-12 text-white" />} // Ícone ajustado para branco conforme padrão PageBanner
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920&h=800" // Imagem de fundo temática
      />
      
      {/* Seção de Introdução da Empresa */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-trigger animate-slide-left">
              <div className="inline-block px-4 py-2 bg-eco-green/10 text-eco-green font-medium text-sm uppercase tracking-wider rounded-full mb-6">
                Nossa História
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Pioneiros em Consultoria Ambiental Inovadora
              </h2>
              <div className="h-1 w-20 bg-eco-accent-teal rounded-full mb-8"></div>
              <p className="text-muted-foreground text-lg mb-6">Fundada em 2025, a L&P Soluções Ambientais nasceu da paixão pela natureza e do compromisso com o desenvolvimento sustentável. Nossa missão é oferecer consultoria ambiental de excelência, auxiliando empresas a prosperar em harmonia com o meio ambiente.</p>
              <p className="text-muted-foreground text-lg">
                Com uma equipe multidisciplinar e experiente, combinamos conhecimento técnico com uma abordagem personalizada para cada cliente, garantindo soluções eficazes e em conformidade com as mais recentes legislações ambientais.
              </p>
            </div>
            
            <div className="relative scroll-trigger animate-slide-right flex items-center justify-center">
              {/* Imagem da equipe removida e substituída pela logo */}
              <img 
                src="/lovable-uploads/a1326e41-9b89-4d6b-92d1-906cc37a9179.png" 
                alt="L&P Soluções Ambientais Logo" 
                className="max-h-60 w-auto object-contain hover-grow p-4 bg-white/50 dark:bg-black/30 rounded-lg shadow-soft border border-white/20 dark:border-white/10" 
              />
              {/* Blob decorativo removido pois a logo agora tem seu próprio tratamento visual */}
            </div>
          </div>
        </div>
      </section>
      
      <MissionVisionValues />
      
      {/* Seção da Equipe */}
      <section id="team" className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 scroll-trigger">
            <div className="inline-block px-4 py-2 bg-eco-blue/10 text-eco-blue font-medium text-sm uppercase tracking-wider rounded-full mb-6">
              Nossa Equipe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Especialistas Dedicados ao Seu Sucesso
            </h2>
            <div className="h-1 w-20 bg-eco-accent-orange rounded-full mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Conheça os profissionais que transformam desafios ambientais em oportunidades de crescimento sustentável para sua empresa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map(member =>
              <TeamMemberCard key={member.id} member={member} />
            )}
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};
export default AboutPage;
