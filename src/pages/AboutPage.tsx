import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";

// Team members data
const teamMembers = [{
  id: 1,
  name: "Carlos Mendes",
  role: "Diretor Executivo",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  bio: "Especialista em Gestão Ambiental com mais de 15 anos de experiência na implementação de soluções sustentáveis para empresas de diversos setores.",
  specialties: ["Gestão Ambiental", "Licenciamento", "Consultoria Estratégica"]
}, {
  id: 2,
  name: "Ana Silva",
  role: "Engenheira Ambiental",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  bio: "Formada em Engenharia Ambiental com mestrado em Recursos Hídricos, atua na elaboração de estudos de impacto ambiental e gestão de recursos naturais.",
  specialties: ["Recursos Hídricos", "Impacto Ambiental", "Auditoria Ambiental"]
}, {
  id: 3,
  name: "Ricardo Oliveira",
  role: "Consultor Jurídico Ambiental",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  bio: "Advogado especializado em Direito Ambiental, com experiência em processos de licenciamento e defesa em processos administrativos ambientais.",
  specialties: ["Direito Ambiental", "Compliance Legal", "Processos Administrativos"]
}, {
  id: 4,
  name: "Mariana Costa",
  role: "Bióloga",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  bio: "Bióloga com doutorado em Ecologia, responsável pelos estudos de fauna e flora em projetos de gestão ambiental e recuperação de áreas degradadas.",
  specialties: ["Biodiversidade", "Recuperação de Áreas", "Inventários Biológicos"]
}, {
  id: 5,
  name: "Paulo Martins",
  role: "Geólogo",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  bio: "Geólogo com especialização em Hidrogeologia, atua em projetos de recuperação de áreas contaminadas e estudos de viabilidade ambiental.",
  specialties: ["Hidrogeologia", "Áreas Contaminadas", "Geotecnia Ambiental"]
}, {
  id: 6,
  name: "Juliana Santos",
  role: "Especialista em Gestão de Resíduos",
  image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  bio: "Engenheira Química especializada em Gestão de Resíduos Sólidos e Efluentes Industriais, com ampla experiência em indústrias de diversos segmentos.",
  specialties: ["Resíduos Sólidos", "Efluentes Industriais", "Economia Circular"]
}];
const AboutPage = () => {
  return <PageWrapper>
      {/* About Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-eco-green/90 to-eco-blue/90">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200&h=600')"
      }}>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-organic-pattern opacity-15 mix-blend-overlay"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 leaf-decoration animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-20 right-20 leaf-decoration animate-spin-slow opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="text-center">
            <div className="inline-block p-4 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 scroll-trigger">
              Sobre Nós
            </h1>
            
            <div className="h-1 w-24 bg-white/50 rounded-full mx-auto mb-8"></div>
            
            <p className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl scroll-trigger leading-relaxed">
              Conheça nossa história, valores e compromisso com a sustentabilidade ambiental. 
              Nossa missão é oferecer soluções ambientais eficientes e inovadoras para nossos clientes.
            </p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="wave-divider">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
      </section>
      
      {/* Our History Section */}
      <section className="container py-24 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Decorative background elements */}
          <div className="absolute top-10 -left-40 w-80 h-80 bg-eco-green/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-eco-blue/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-16 scroll-trigger">
            <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full text-eco-green font-medium text-sm uppercase tracking-wider mb-6">
              Nossa Trajetória
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Nossa História
            </h2>
            
            <div className="h-1 w-20 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="glass-card p-8 md:p-10 shadow-soft backdrop-blur-lg scroll-trigger">
            <p className="mb-6 text-lg leading-relaxed">Fundada em 2025, a L&P Soluções Ambientais nasceu com o propósito de transformar a relação entre empresas e meio ambiente, oferecendo soluções sustentáveis que garantem conformidade legal e responsabilidade ambiental.</p>
            
            <p className="mb-6 text-lg leading-relaxed">
              Ao longo dos anos, expandimos nossa atuação em todo o território nacional, consolidando nossa expertise 
              em licenciamento ambiental, gestão de resíduos, estudos de impacto ambiental e consultoria especializada
              para diversos setores econômicos.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed\n">
              Hoje, contamos com uma equipe multidisciplinar de profissionais altamente qualificados, 
              incluindo engenheiros ambientais, biólogos, geólogos e especialistas em legislação ambiental, 
              todos comprometidos com a excelência e a busca por soluções inovadoras.
            </p>
          </div>
        </div>
      </section>
      
      <MissionVisionValues />
      
      {/* Our Team Section */}
      <section id="team" className="py-24 px-4 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-organic-pattern opacity-25"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-eco-blue/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16 scroll-trigger">
            <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full text-eco-green font-medium text-sm uppercase tracking-wider mb-6">
              Especialistas
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Nossa Equipe
            </h2>
            
            <div className="h-1 w-20 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
            
            <p className="mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
              Nossos especialistas são profissionais altamente qualificados, com formação acadêmica e experiência 
              prática nas áreas de meio ambiente, sustentabilidade e legislação ambiental. Conheça os profissionais 
              que fazem da L&P Soluções Ambientais referência em soluções ambientais.
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => <TeamMemberCard key={member.id} member={member} />)}
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>;
};
export default AboutPage;