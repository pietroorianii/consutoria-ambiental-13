
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Users } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { MetaTags } from "@/components/layout/MetaTags";

// Team members data
const teamMembers = [{
  id: 1,
  name: "Dra. Lilian C. Prates",
  role: "Diretora Executiva e Consultora Ambiental Sênior",
  image: "/lovable-uploads/f0e39d9d-92ef-40b8-8252-05cdfebcb9f6.png",
  bio: "Engenheira Ambiental com vasta experiência em licenciamento, gestão de resíduos e auditorias. Lidera a equipe com foco em soluções inovadoras e sustentáveis.",
  specialties: ["Licenciamento Ambiental", "Gestão de Resíduos", "Auditorias Ambientais"],
  registro: "CREA-PR XXXXXX/D"
}, {
  id: 2,
  name: "Dr. Paulo R. Almeida",
  role: "Consultor Ambiental Especialista em Recursos Hídricos",
  image: "/lovable-uploads/d620006c-64d5-4c80-b264-c256773f112f.png",
  bio: "Geólogo especializado em hidrogeologia e outorgas. Responsável por projetos de uso e conservação da água, garantindo conformidade e eficiência.",
  specialties: ["Recursos Hídricos", "Hidrogeologia", "Outorgas"],
  registro: "CREA-PR YYYYYY/D"
}];



const AboutPage = () => {
  return (
    <PageWrapper>
      <MetaTags 
        title="Sobre a Solari Soluções Ambientais | Consultoria Ambiental Especializada"
        description="Conheça nossa equipe de especialistas em consultoria ambiental e nossa trajetória de sucesso em soluções para licenciamento e gestão ambiental."
        keywords="consultoria ambiental paraná, especialistas ambientais, equipe técnica, licenciamento"
      />
      
      {/* Cabeçalho da página padronizado com PageBanner */}
      <PageBanner
        title="Quem somos"
        description="Consultoria ambiental especializada em Ponta Grossa, PR."
        icon={<Users />}
        variant="about"
      />
      
      {/* Seção de Introdução da Empresa */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 -z-10"></div>
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="scroll-trigger animate-slide-left">
              <div className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent font-medium text-sm uppercase tracking-wider rounded-full mb-6">
                Nossa História
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Consultoria Ambiental Especializada no Paraná
              </h2>
              <div className="h-1 w-20 bg-brand-accent rounded-full mb-8"></div>
              <p className="text-muted-foreground text-lg mb-6">A Solari Soluções Ambientais nasceu da paixão pela natureza e do compromisso com o desenvolvimento sustentável. Nossa missão é oferecer consultoria ambiental de excelência, auxiliando empresas a prosperar em harmonia com o meio ambiente.</p>
              <p className="text-muted-foreground text-lg">
                Com uma equipe multidisciplinar e experiente, combinamos conhecimento técnico com uma abordagem personalizada para cada cliente, garantindo soluções eficazes e em conformidade com as mais recentes legislações ambientais.
              </p>
            </div>
            
            <div className="relative scroll-trigger animate-slide-right flex items-center justify-center">
              {/* Logo da empresa */}
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300">
                <img 
                  src="/lovable-uploads/d411c434-c49d-4917-ae05-49dc59580547.png" 
                  alt="Solari Soluções Ambientais Logo" 
                  className="max-w-full h-auto max-h-72 object-contain"
                />
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -z-10 top-1/4 right-1/4 w-32 h-32 bg-brand-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -z-10 bottom-1/4 left-1/4 w-40 h-40 bg-brand-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      <MissionVisionValues />
      
      {/* Seção da Equipe */}
      <section id="team" className="py-20 md:py-28 bg-brand-cream/30 relative">
        
        <div className="container">
          <div className="text-center mb-16 scroll-trigger">
            <div className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary font-medium text-sm uppercase tracking-wider rounded-full mb-6">
              Nossa Equipe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-sora">
              Nossa equipe técnica
            </h2>
            <div className="h-1 w-20 bg-brand-accent rounded-full mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-inter">
              Engenheiros registrados no CREA com experiência prática em licenciamento e gestão ambiental no Paraná.
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
