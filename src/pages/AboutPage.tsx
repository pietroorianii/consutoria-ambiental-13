
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/cta-section";

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
      <main>
        {/* Page Header */}
        <div className="bg-muted py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">Sobre Nós</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Conheça nossa história, valores e a equipe de especialistas por trás da EcoConsult.
            </p>
          </div>
        </div>
        
        {/* Company History */}
        <section className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold">Nossa História</h2>
                <div className="h-1 w-20 bg-eco-green mt-4"></div>
              </div>
              
              <p className="text-muted-foreground">
                Fundada em 2008, a EcoConsult nasceu da visão de profissionais com ampla experiência em meio ambiente que perceberam a necessidade de oferecer serviços especializados de consultoria ambiental para empresas.
              </p>
              
              <p className="text-muted-foreground">
                Ao longo dos anos, nos consolidamos como referência no mercado, desenvolvendo soluções ambientais personalizadas para diversos setores, como indústria, construção civil, agronegócio e serviços.
              </p>
              
              <p className="text-muted-foreground">
                Hoje, contamos com uma equipe multidisciplinar de engenheiros, biólogos, geólogos, advogados e outros especialistas, prontos para atender às mais diversas demandas ambientais de nossos clientes.
              </p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800&h=500"
                alt="História da empresa" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Missão, Visão e Valores</h2>
              <div className="h-1 w-20 bg-eco-green mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-eco-green">Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer soluções ambientais de excelência, contribuindo para a sustentabilidade dos negócios de nossos clientes e para a preservação do meio ambiente.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-eco-blue">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a consultoria ambiental mais confiável e inovadora do mercado, referência em soluções sustentáveis e conformidade legal.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-eco-earth-dark">Valores</h3>
                <ul className="text-muted-foreground space-y-2">
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
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Nossa Equipe</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Conheça os especialistas que fazem da EcoConsult uma referência em consultoria ambiental.
            </p>
            <div className="h-1 w-20 bg-eco-green mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background border border-border/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-eco-green font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
