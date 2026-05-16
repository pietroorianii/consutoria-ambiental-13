
import React from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { Users } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";

// Sample team data - in a real application, this would likely come from an API or database
const teamMembers = [
  {
    id: 1,
    name: "Dr. Ana Costa",
    role: "Diretora Técnica | Bióloga",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Doutora em Ciências Ambientais com mais de 15 anos de experiência em estudos de impacto ambiental e recuperação de áreas degradadas.",
    specialties: ["Licenciamento Ambiental", "Estudos de Biodiversidade", "Recuperação de Áreas Degradadas"]
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor Executivo | Eng. Ambiental",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Especialista em gestão ambiental corporativa com vasta experiência em implementação de sistemas de gestão ambiental ISO 14001.",
    specialties: ["Gestão Ambiental", "Consultoria Estratégica", "ISO 14001"]
  },
  {
    id: 3,
    name: "Dra. Marcela Santos",
    role: "Advogada Ambiental",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Especialista em direito ambiental, atua na orientação jurídica para conformidade legal e resolução de conflitos ambientais.",
    specialties: ["Direito Ambiental", "Compliance", "Licenciamento"]
  },
  {
    id: 4,
    name: "Paulo Rodrigues",
    role: "Geólogo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Especialista em hidrogeologia e contaminação de solos, com experiência em avaliação de riscos ambientais.",
    specialties: ["Hidrogeologia", "Remediação de Áreas Contaminadas", "Análise de Risco"]
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Engenheira Ambiental",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Especialista em gestão de recursos hídricos e tratamento de efluentes industriais.",
    specialties: ["Recursos Hídricos", "Tratamento de Efluentes", "Outorgas"]
  },
  {
    id: 6,
    name: "Roberto Alves",
    role: "Químico Ambiental",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Especialista em monitoramento ambiental e análises laboratoriais de contaminantes.",
    specialties: ["Análises Químicas", "Monitoramento Ambiental", "Controle de Poluição"]
  }
];

const TeamPage = () => {
  return (
    <PageWrapper>
      <PageBanner 
        title="Nossa Equipe"
        description="Conheça os profissionais por trás da Eco Consultoria. Uma equipe multidisciplinar comprometida com a excelência e a sustentabilidade."
        icon={<Users className="h-12 w-12 text-eco-green" />}
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
              Especialistas em Meio Ambiente
            </h2>
            <div className="h-1 w-24 bg-eco-green mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Contamos com uma equipe multidisciplinar de profissionais altamente qualificados,
              comprometidos com a excelência e inovação em consultoria ambiental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
              Trabalhando juntos por um futuro sustentável
            </h2>
            <p className="text-lg mb-6">
              Nossa equipe está constantemente se atualizando e buscando novas soluções para os desafios 
              ambientais enfrentados por nossos clientes. Estamos prontos para ajudar sua empresa a alcançar 
              a conformidade ambiental e implementar práticas sustentáveis.
            </p>
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default TeamPage;
