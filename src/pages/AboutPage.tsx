
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Info, Users, Building, Target } from "lucide-react"; // Importar o ícone Info

// Team members data
const teamMembers = [{
  name: "Dra. Lilian C. Prates",
  role: "Diretora Executiva e Consultora Ambiental Sênior",
  imageUrl: "/lovable-uploads/f0e39d9d-92ef-40b8-8252-05cdfebcb9f6.png",
  bio: "Engenheira Ambiental com vasta experiência em licenciamento, gestão de resíduos e auditorias. Lidera a equipe com foco em soluções inovadoras e sustentáveis.",
  linkedin: "#",
  email: "lilian.prates@lpsolucoes.com"
}, {
  name: "Dr. Paulo R. Almeida",
  role: "Consultor Ambiental Especialista em Recursos Hídricos",
  imageUrl: "/lovable-uploads/d620006c-64d5-4c80-b264-c256773f112f.png",
  bio: "Geólogo especializado em hidrogeologia e outorgas. Responsável por projetos de uso e conservação da água, garantindo conformidade e eficiência.",
  linkedin: "#",
  email: "paulo.almeida@lpsolucoes.com"
}];
const AboutPage = () => {
  return <PageWrapper>
      {/* Cabeçalho da página com imagem de fundo e efeito de sobreposição */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-eco-green/80 to-eco-blue/80 overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518976029346-3e1b599isfunc?auto=format&fit=crop&q=80&w=1920&h=800')"
      }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Textura de folhas no cabeçalho */}
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-eco-green/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-eco-blue/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        
        <div className="container relative z-10">
          <div className="text-center">
            <div className="inline-block p-5 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-float shadow-glass">
              <Info className="h-12 w-12 text-eco-green" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 scroll-trigger">
              Sobre a L&P Soluções Ambientais
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 scroll-trigger" style={{
            animationDelay: "0.2s"
          }}>
              Conectando desenvolvimento e sustentabilidade com expertise e inovação.
            </p>
          </div>
        </div>
        
        {/* Divisor de onda elegante */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="wave-divider">
            <div className="wave wave-1" style={{
            fill: "hsl(var(--background))"
          }}></div>
            <div className="wave wave-2" style={{
            fill: "hsl(var(--background))"
          }}></div>
            <div className="wave wave-3" style={{
            fill: "hsl(var(--background))"
          }}></div>
          </div>
        </div>
      </div>
      
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
              <p className="text-muted-foreground text-lg mb-6">
                Fundada em [Ano de Fundação], a L&P Soluções Ambientais nasceu da paixão pela natureza e do compromisso com o desenvolvimento sustentável. Nossa missão é oferecer consultoria ambiental de excelência, auxiliando empresas a prosperar em harmonia com o meio ambiente.
              </p>
              <p className="text-muted-foreground text-lg">
                Com uma equipe multidisciplinar e experiente, combinamos conhecimento técnico com uma abordagem personalizada para cada cliente, garantindo soluções eficazes e em conformidade com as mais recentes legislações ambientais.
              </p>
            </div>
            
            <div className="relative scroll-trigger animate-slide-right">
              <div className="aspect-video rounded-xl overflow-hidden shadow-soft hover-grow">
                <img src="/lovable-uploads/9a64c487-4744-489a-9762-3739eb5961ad.png" alt="Equipe L&P em campo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-eco-blue/10 rounded-full -z-10 eco-blob"></div>
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
            {teamMembers.map((member, index) => <TeamMemberCard key={index} member={member} animationDelay={index * 0.15} />)}
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>;
};
export default AboutPage;
