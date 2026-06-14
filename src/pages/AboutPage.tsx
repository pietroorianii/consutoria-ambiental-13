
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { Users } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { MetaTags } from "@/components/layout/MetaTags";
import { motion } from "framer-motion";

// ── Equipe real da Solari Soluções Ambientais ──
const teamMembers = [
  {
    id: 1,
    name: "Pietro Bife Oriani",
    role: "Sócio-Fundador | Engenheiro Químico",
    image: "/lovable-uploads/pietro-bife-oriani.jpg",
    bio: "Engenheiro Químico com experiência direta no IAT — Instituto Água e Terra do Paraná. Participou de mais de 100 processos de licenciamento ambiental, com domínio técnico de todas as etapas do SGA/IAT. Fundou a Solari com o objetivo de desburocratizar o licenciamento para empresas paranaenses.",
    specialties: ["Licenciamento Ambiental", "Processos no IAT/SGA", "Outorga de Recursos Hídricos"],
  },
];

const AboutPage = () => {
  return (
    <PageWrapper>
      <MetaTags
        title="Sobre a Solari Soluções Ambientais | Consultoria Ambiental Especializada"
        description="Conheça a equipe da Solari Soluções Ambientais — especialistas em licenciamento ambiental no IAT com mais de 100 processos conduzidos no Paraná."
        keywords="consultoria ambiental paraná, engenheiro ambiental Ponta Grossa, licenciamento IAT, Pietro Bife Oriani, Solari"
      />

      {/* Banner */}
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
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent font-inter font-medium text-sm uppercase tracking-wider rounded-full mb-6">
                Nossa História
              </div>
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Consultoria Ambiental Especializada no Paraná
              </h2>
              <div className="h-1 w-20 bg-brand-accent rounded-full mb-8"></div>
              <p className="font-inter text-brand-dark/70 text-lg mb-6 leading-relaxed">
                A Solari Soluções Ambientais foi fundada por profissionais com experiência real
                dentro do IAT — Instituto Água e Terra do Paraná. Sabemos como o processo funciona
                por dentro, o que nos permite entregar resultados mais rápidos e seguros.
              </p>
              <p className="font-inter text-brand-dark/65 text-base leading-relaxed">
                Nosso foco é Ponta Grossa e região. Atendemos empresas que precisam regularizar
                sua situação ambiental, obter licenças ou cumprir condicionantes — sem burocracia
                desnecessária e com prazo definido.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <MissionVisionValues />

      {/* Seção da Equipe */}
      <section id="team" className="py-20 md:py-28 bg-brand-cream/30 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary font-inter font-medium text-sm uppercase tracking-wider rounded-full mb-6">
              Nossa Equipe
            </div>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Quem cuida do seu processo
            </h2>
            <div className="h-1 w-20 bg-brand-accent rounded-full mx-auto mb-8"></div>
            <p className="font-inter text-brand-dark/65 max-w-2xl mx-auto text-lg">
              Profissionais com experiência prática em licenciamento ambiental no Paraná —
              incluindo atuação dentro do próprio IAT.
            </p>
          </motion.div>

          {/* Cards da equipe real */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md w-full">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nota de transparência */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="font-inter text-sm text-brand-dark/40 max-w-lg mx-auto">
              A Solari é uma empresa em crescimento. Prezamos pela transparência — 
              exibimos apenas os profissionais reais que atuam nos seus processos.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
};

export default AboutPage;
