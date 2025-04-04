
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/cta-section";
import { TreeDeciduous } from "lucide-react";

const teamMembers = [
  {
    name: "Dra. Carla Mendes",
    role: "Diretora Executiva",
    bio: "Engenheira Ambiental com mais de 15 anos de experiência em consultoria ambiental. Especialista em licenciamento e gestão ambiental para diversos segmentos industriais.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Ricardo Almeida",
    role: "Diretor Técnico",
    bio: "Biólogo com doutorado em Ecologia. Coordena projetos de monitoramento ambiental e estudos de impacto, com vasta experiência em análises ambientais.",
    image: "/placeholder.svg"
  },
  {
    name: "Eng. Mariana Costa",
    role: "Especialista em Recursos Hídricos",
    bio: "Engenheira Civil com especialização em Recursos Hídricos. Responsável pelos projetos relacionados à gestão da água e outorgas.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Felipe Santos",
    role: "Consultor Jurídico Ambiental",
    bio: "Advogado especializado em Direito Ambiental, atua na interface entre as questões técnicas e legais, garantindo conformidade jurídica.",
    image: "/placeholder.svg"
  }
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=600')" }}>
          </div>
          <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-green/20"></div>
          
          {/* Elementos fluidos decorativos */}
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-eco-green/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-eco-blue/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm animate-float">
                <TreeDeciduous className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-up" style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.2)"
                }}>Sobre Nós</h1>
                <p className="text-white/90 mt-4 max-w-3xl animate-fade-up" style={{ 
                  fontFamily: "'Roboto', sans-serif", 
                  animationDelay: "0.1s"
                }}>
                  Conheça nossa história, valores e a equipe de especialistas por trás da EcoConsult.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company History */}
        <section className="container py-16 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Nossa História</h2>
                <div className="h-1 w-20 bg-eco-green mt-4"></div>
              </div>
              
              <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                Fundada em 2008, a EcoConsult nasceu da visão de profissionais com ampla experiência em meio ambiente que perceberam a necessidade de oferecer serviços especializados de consultoria ambiental para empresas.
              </p>
              
              <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                Ao longo dos anos, nos consolidamos como referência no mercado, desenvolvendo soluções ambientais personalizadas para diversos setores, como indústria, construção civil, agronegócio e serviços.
              </p>
              
              <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                Hoje, contamos com uma equipe multidisciplinar de engenheiros, biólogos, geólogos, advogados e outros especialistas, prontos para atender às mais diversas demandas ambientais de nossos clientes.
              </p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800&h=500"
                alt="História da empresa" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-green/30 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-0 leaf-pattern opacity-10"></div>
            </div>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Missão, Visão e Valores</h2>
              <div className="h-1 w-20 bg-eco-green mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold mb-4 text-eco-green" style={{ fontFamily: "'Poppins', sans-serif" }}>Missão</h3>
                <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Oferecer soluções ambientais de excelência, contribuindo para a sustentabilidade dos negócios de nossos clientes e para a preservação do meio ambiente.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-semibold mb-4 text-eco-blue" style={{ fontFamily: "'Poppins', sans-serif" }}>Visão</h3>
                <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Ser reconhecida como a consultoria ambiental mais confiável e inovadora do mercado, referência em soluções sustentáveis e conformidade legal.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-xl font-semibold mb-4 text-eco-earth-dark" style={{ fontFamily: "'Poppins', sans-serif" }}>Valores</h3>
                <ul className="text-muted-foreground space-y-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                  <li>• Compromisso com a sustentabilidade</li>
                  <li>• Excelência técnica</li>
                  <li>• Ética e transparência</li>
                  <li>• Inovação contínua</li>
                  <li>• Responsabilidade socioambiental</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="container py-16 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Nossa Equipe</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              Conheça os especialistas que fazem da EcoConsult uma referência em consultoria ambiental.
            </p>
            <div className="h-1 w-20 bg-eco-green mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eco-green/20 to-transparent mix-blend-multiply"></div>
                  <div className="absolute inset-0 leaf-pattern opacity-10"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{member.name}</h3>
                  <p className="text-eco-green font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
