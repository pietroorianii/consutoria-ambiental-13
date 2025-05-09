import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Info, Users } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
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
      <PageBanner title="Sobre Nós" description="Conheça nossa história, valores e compromisso com a sustentabilidade ambiental. Nossa missão é oferecer soluções ambientais eficientes e inovadoras para nossos clientes." icon={<Info className="h-12 w-12 text-eco-green" />} image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200&h=600" />
      
      {/* Our History Section */}
      <section className="container py-16 md:py-24 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
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
      
      {/* Our Team Section with id for direct linking */}
      <section id="team" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Nossa Equipe
            </h2>
            <div className="h-1 w-20 bg-eco-green mx-auto mb-8"></div>
            
            <p className="mb-8 text-lg max-w-3xl mx-auto">
              Nossos especialistas são profissionais altamente qualificados, com formação acadêmica e experiência 
              prática nas áreas de meio ambiente, sustentabilidade e legislação ambiental. Conheça os profissionais 
              que fazem da Eco Consultoria referência em soluções ambientais.
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