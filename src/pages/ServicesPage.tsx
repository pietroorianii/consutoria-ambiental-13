import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Leaf,
  Droplet,
  TreePine,
  Beaker,
  FileText,
  Users,
  GraduationCap,
  ClipboardList,
  Globe2,
  Wind,
  ChevronDown,
} from "lucide-react";

// ── Dados de todas as categorias ─────────────────────────────────────────────
const ALL_CATEGORIES = [
  {
    id: "licensing",
    color: "prisma-green" as const,
    accentHex: "#2A6F47",
    icon: Leaf,
    badge: "LICENCIAMENTO",
    title: "Licenciamento e Autorizações Ambientais",
    description: "Todas as modalidades conforme a nova regulamentação do IAT-PR — da dispensa ao licenciamento trifásico.",
    services: [
      { title: "DLAM — Declaração de Dispensa", description: "Para atividades de baixo impacto (1–15 dias via SGA do IAT)." },
      { title: "LAC — Licença por Adesão e Compromisso", description: "Emissão eletrônica imediata para atividades padronizáveis." },
      { title: "LAS — Licença Ambiental Simplificada", description: "Processo unificado LP+LI+LO para pequeno porte (até 60 dias)." },
      { title: "LP / LI / LO — Licenciamento Trifásico", description: "Processo completo para empreendimentos de maior complexidade." },
      { title: "Regularização — LASR / LIR / LOR", description: "Adequação de empreendimentos em situação irregular (PRA)." },
      { title: "Autorizações Ambientais (AA) e Florestais (AF)", description: "Intervenções específicas em vegetação nativa e APP." },
    ],
    mainDeliverables: ["DLAM / LAC / LAS completos", "LP / LI / LO trifásico", "LASR, LIR, LOR regularização"],
  },
  {
    id: "water_resources",
    color: "prisma-blue" as const,
    accentHex: "#0077C2",
    icon: Droplet,
    badge: "RECURSOS HÍDRICOS",
    title: "Outorga e Recursos Hídricos",
    description: "Direito legal de uso de águas superficiais e subterrâneas — captação e lançamento de efluentes no Paraná.",
    services: [
      { title: "Outorga de Captação Superficial", description: "Irrigação, criação de animais e aquicultura em rios e lagos." },
      { title: "Outorga de Captação Subterrânea", description: "Poços artesianos com ART, testes e análise físico-química." },
      { title: "Outorga de Lançamento de Efluentes", description: "Lançamento de efluentes tratados com Declaração de Carga Poluidora." },
      { title: "Outorga de Barragem", description: "Barramento de cursos d'água com projeto executivo e estudo hídrico." },
      { title: "Estudos de Disponibilidade Hídrica", description: "Análises técnicas para fundamentar pedidos de outorga." },
      { title: "Monitoramento de Qualidade e Vazão", description: "Atendimento de condicionantes de outorga vigentes." },
    ],
    mainDeliverables: ["Outorgas superficiais e subterrâneas", "Outorgas de efluentes e barragens", "Estudos hídricos e monitoramento"],
  },
  {
    id: "degraded_areas",
    color: "prisma-yellow" as const,
    accentHex: "#C17F00",
    icon: TreePine,
    badge: "PASSIVOS AMBIENTAIS",
    title: "Recuperação de Áreas e Passivos",
    description: "Da investigação à remediação completa de áreas degradadas e passivos ambientais.",
    services: [
      { title: "GAC — Investigação e Remediação", description: "Ciclo completo da avaliação preliminar ao monitoramento pós-remediação." },
      { title: "PRAD — Projeto de Recuperação de Áreas Degradadas", description: "Projetos técnicos para restaurar ecossistemas e atender à lei." },
      { title: "TAC — Assessoria para Ajuste de Conduta", description: "Suporte técnico em negociação e cumprimento de acordos ambientais." },
      { title: "Auditoria de Passivos Ambientais", description: "Diagnóstico completo para M&A, fusões e due diligence." },
    ],
    mainDeliverables: ["GAC e remediação completa", "PRAD elaboração e execução", "Assessoria TAC e auditoria"],
  },
  {
    id: "monitoring",
    color: "prisma-blue" as const,
    accentHex: "#1A759F",
    icon: Beaker,
    badge: "MONITORAMENTO",
    title: "Monitoramento e Análises Ambientais",
    description: "Monitoramento contínuo e análises técnicas para conformidade e atendimento às condicionantes de licença.",
    services: [
      { title: "Monitoramento de Emissões Atmosféricas", description: "Controle de poluentes conforme condicionantes e SGADEA do IAT." },
      { title: "Monitoramento de Efluentes Líquidos", description: "Análise e controle de qualidade de efluentes industriais e sanitários." },
      { title: "Monitoramento da Qualidade da Água", description: "Acompanhamento de águas superficiais e subterrâneas." },
      { title: "Gestão de Análises Laboratoriais", description: "Coordenação de coletas com laboratórios credenciados INMETRO." },
      { title: "Acompanhamento de Condicionantes", description: "Gestão sistemática do cumprimento de todas as condicionantes." },
    ],
    mainDeliverables: ["Emissões atmosféricas e SGADEA", "Efluentes líquidos e água", "Laboratórios credenciados"],
  },
  {
    id: "reports",
    color: "prisma-green" as const,
    accentHex: "#2A6F47",
    icon: FileText,
    badge: "ESTUDOS TÉCNICOS",
    title: "Estudos e Documentos Técnicos",
    description: "Todos os instrumentos técnicos exigidos no licenciamento ambiental — do EIA ao PRAD.",
    services: [
      { title: "EIA / RIMA", description: "Estudo de Impacto Ambiental para empreendimentos de significativo impacto." },
      { title: "RAP / RAS — Relatórios Ambientais", description: "Relatórios prévios e simplificados conforme modalidade de licença." },
      { title: "MCE — Memorial de Caracterização", description: "Documento técnico detalhado exigido em LAC, LAS e LP." },
      { title: "PGRS / PGRSS / PGRCC", description: "Planos de gerenciamento de resíduos sólidos por setor." },
      { title: "PCA / PRAD / PRF", description: "Controle ambiental, recuperação de áreas e resgate da flora." },
      { title: "Plano de Automonitoramento", description: "Efluentes, resíduos e parâmetros de condicionantes de LO." },
    ],
    mainDeliverables: ["EIA / RIMA / RAS / MCE", "PGRS / PGRSS / PGRCC", "PCA / PRAD / PRF"],
  },
  {
    id: "consulting",
    color: "prisma-blue" as const,
    accentHex: "#0077C2",
    icon: Users,
    badge: "CONSULTORIA",
    title: "Consultoria Ambiental Especializada",
    description: "Assessoria técnica estratégica, auditorias, defesas administrativas e adequações regulatórias.",
    services: [
      { title: "Auditorias Ambientais", description: "Conformidade legal, desempenho ambiental e due diligence." },
      { title: "Defesas e Recursos Ambientais", description: "Elaboração de defesas para autos de infração e recursos administrativos." },
      { title: "Assessoria para TAC", description: "Suporte técnico em Termos de Ajuste de Conduta ambiental." },
      { title: "Perícia Ambiental", description: "Avaliação técnica para processos judiciais e administrativos." },
      { title: "Geotecnologias (SIG)", description: "Mapeamento e análise ambiental com Sistemas de Informação Geográfica." },
      { title: "Certificações — ISO 14001", description: "Assessoria para certificações de gestão ambiental." },
    ],
    mainDeliverables: ["Auditorias e defesas", "Perícia e assessoria TAC", "SIG e certificações ISO"],
  },
  {
    id: "training",
    color: "prisma-green" as const,
    accentHex: "#2A6F47",
    icon: GraduationCap,
    badge: "CAPACITAÇÃO",
    title: "Treinamentos e Capacitações",
    description: "Programas de educação ambiental e capacitação técnica para equipes de todos os setores.",
    services: [
      { title: "Legislação Ambiental", description: "Capacitação sobre normas do IAT e legislação aplicável por setor." },
      { title: "Gerenciamento de Resíduos Sólidos", description: "Treinamento certificado em PGRS (Lei nº 12.305/2010)." },
      { title: "Atendimento a Emergências Ambientais", description: "Capacitação para resposta rápida a incidentes ambientais." },
      { title: "Capacitações Setoriais", description: "Programas específicos para indústria, agronegócio e construção." },
    ],
    mainDeliverables: ["Legislação e normas IAT", "PGRS certificado", "Emergências e setorial"],
  },
  {
    id: "management",
    color: "prisma-blue" as const,
    accentHex: "#0077C2",
    icon: ClipboardList,
    badge: "GESTÃO CONTÍNUA",
    title: "Gestão Ambiental Contínua",
    description: "Manutenção da conformidade pós-licença: renovações, declarações e suporte permanente.",
    services: [
      { title: "Gestão de Requisitos Legais", description: "Sistema de gestão de obrigações ambientais e controle de prazos." },
      { title: "Renovação de Licenças (LO)", description: "Acompanhamento e renovação com antecedência mínima de 120 dias." },
      { title: "Renovação de Outorgas", description: "Controle de vencimentos e renovação no SIGARH." },
      { title: "Relatórios e Declarações — SGA IR", description: "Inventários e relatórios obrigatórios aos órgãos ambientais." },
      { title: "Suporte Técnico Contínuo", description: "Assessoria permanente para questões ambientais do dia a dia." },
    ],
    mainDeliverables: ["Renovação de LO e outorgas", "SGA IR declarações", "Suporte permanente"],
  },
  {
    id: "esg",
    color: "prisma-green" as const,
    accentHex: "#3B7D59",
    icon: Globe2,
    badge: "ESG",
    title: "Consultoria ESG",
    description: "Critérios ambientais, sociais e de governança para competitividade e sustentabilidade corporativa.",
    services: [
      { title: "Diagnóstico e Estratégia ESG", description: "Avaliação completa e desenvolvimento de estratégias customizadas." },
      { title: "Relatórios de Sustentabilidade", description: "Elaboração conforme GRI, SASB, TCFD e outros frameworks." },
      { title: "Análise de Riscos ESG", description: "Identificação de riscos e oportunidades ambientais e de governança." },
      { title: "Engajamento com Stakeholders", description: "Comunicação com investidores, comunidades e colaboradores." },
      { title: "Políticas Corporativas ESG", description: "Desenvolvimento de políticas e indicadores de desempenho." },
    ],
    mainDeliverables: ["Diagnóstico e estratégia", "Relatórios GRI / SASB / TCFD", "Políticas e indicadores"],
  },
  {
    id: "climate",
    color: "prisma-blue" as const,
    accentHex: "#1A759F",
    icon: Wind,
    badge: "CLIMA",
    title: "Mudanças Climáticas e Descarbonização",
    description: "Gestão de riscos climáticos, inventários de GEE, planos de descarbonização e créditos de carbono.",
    services: [
      { title: "Inventários de GEE", description: "Inventários corporativos conforme ISO 14064 com verificação terceirizada." },
      { title: "Planos de Descarbonização", description: "Estratégias de redução e roadmap para neutralidade carbônica." },
      { title: "Análise de Vulnerabilidade Climática", description: "Riscos físicos e de transição para adaptação empresarial." },
      { title: "Projetos de Crédito de Carbono", description: "Desenvolvimento desde a concepção até a comercialização." },
      { title: "Economia Circular", description: "Implementação de estratégias e modelos de negócio sustentáveis." },
    ],
    mainDeliverables: ["Inventários GEE ISO 14064", "Descarbonização e créditos", "Economia circular"],
  },
];

// ── Card individual — mesmo padrão visual do ServiceGroupCard da home ─────────
function ServiceCard({
  cat,
  index,
}: {
  cat: (typeof ALL_CATEGORIES)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = cat.icon;

  const isGreen = cat.color === "prisma-green";
  const isBlue = cat.color === "prisma-blue";
  // prisma-yellow for the rest

  const accentText = isGreen
    ? "text-prisma-green"
    : isBlue
    ? "text-prisma-blue"
    : "text-prisma-yellow";

  const accentBorder = isGreen
    ? "hover:border-prisma-green/50 hover:to-prisma-green/15"
    : isBlue
    ? "hover:border-prisma-blue/50 hover:to-prisma-blue/15"
    : "hover:border-prisma-yellow/50 hover:to-prisma-yellow/15";

  const accentBg = isGreen
    ? "from-prisma-green/5 via-prisma-green/10 to-prisma-green/20"
    : isBlue
    ? "from-prisma-blue/5 via-prisma-blue/10 to-prisma-blue/20"
    : "from-prisma-yellow/5 via-prisma-yellow/10 to-prisma-yellow/20";

  const accentIconBg = isGreen
    ? "from-prisma-green/20 to-emerald-300/30 group-hover:from-prisma-green/40 group-hover:to-emerald-300/50"
    : isBlue
    ? "from-prisma-blue/20 to-blue-300/30 group-hover:from-prisma-blue/40 group-hover:to-blue-300/50"
    : "from-prisma-yellow/20 to-yellow-300/30 group-hover:from-prisma-yellow/40 group-hover:to-yellow-300/50";

  const accentBadge = isGreen
    ? "bg-gradient-to-r from-prisma-green/20 to-emerald-300/30 text-prisma-green group-hover:from-prisma-green/40"
    : isBlue
    ? "bg-gradient-to-r from-prisma-blue/20 to-blue-300/30 text-prisma-blue group-hover:from-prisma-blue/40"
    : "bg-gradient-to-r from-prisma-yellow/20 to-yellow-300/30 text-prisma-yellow group-hover:from-prisma-yellow/40";

  const accentTopBar = isGreen
    ? "from-prisma-green to-emerald-400"
    : isBlue
    ? "from-prisma-blue to-blue-400"
    : "from-prisma-yellow to-yellow-400";

  const accentButtonOutline = isGreen
    ? "border-prisma-green/30 text-prisma-green hover:bg-prisma-green hover:text-white"
    : isBlue
    ? "border-prisma-blue/30 text-prisma-blue hover:bg-prisma-blue hover:text-white"
    : "border-prisma-yellow/30 text-prisma-yellow hover:bg-prisma-yellow hover:text-white";

  const accentButtonFill = isGreen
    ? "bg-prisma-green hover:bg-prisma-green/90"
    : isBlue
    ? "bg-prisma-blue hover:bg-prisma-blue/90"
    : "bg-prisma-yellow hover:bg-prisma-yellow/90 text-gray-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Card
        className={`group relative overflow-hidden transition-all duration-300 bg-gradient-to-br from-white via-white to-prisma-green/5 border-2 border-prisma-gray-light/30 ${accentBorder} h-full flex flex-col hover:shadow-xl hover:-translate-y-2 shadow-md`}
      >
        {/* Gradiente de fundo no hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentBg} opacity-0 group-hover:opacity-100 transition-all duration-700`}
        />

        {/* Linha de acento no topo — cresce no hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentTopBar} opacity-60 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}
        />

        <CardHeader className="text-center pb-2 relative z-10 pt-8">
          {/* Ícone 96×96 — mesmo padrão da home */}
          <div className="relative mb-5 mx-auto w-24 h-24">
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accentIconBg} transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}
            />
            <div className="relative w-full h-full flex items-center justify-center bg-white/90 rounded-2xl group-hover:bg-white transition-all duration-500 group-hover:-rotate-6 shadow-lg group-hover:shadow-2xl">
              <Icon
                className={`h-10 w-10 ${accentText} group-hover:scale-125 transition-all duration-500`}
              />
            </div>
          </div>

          {/* Badge */}
          <div className="mb-3">
            <span
              className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full ${accentBadge} group-hover:scale-105 transition-all duration-300 uppercase tracking-widest shadow-sm`}
            >
              {cat.badge}
            </span>
          </div>

          {/* Título */}
          <CardTitle
            className={`text-lg font-bold leading-snug mb-2 ${accentText} transition-colors duration-300`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {cat.title}
          </CardTitle>

          {/* Descrição */}
          <p
            className="text-sm text-prisma-gray-text/75 leading-relaxed"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            {cat.description}
          </p>
        </CardHeader>

        <CardContent className="px-6 pb-4 flex-grow relative z-10 flex flex-col">
          {/* Principais Entregas */}
          <div className="mb-4">
            <h4
              className="text-sm font-bold text-prisma-gray-text mb-3 uppercase tracking-wide"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Principais Entregas
            </h4>
            <ul className="space-y-2">
              {cat.mainDeliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckCircle
                    className={`h-4 w-4 flex-shrink-0 ${accentText}`}
                  />
                  <span
                    className="text-sm text-prisma-gray-text/90"
                    style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                  >
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços expansíveis */}
          <div className="border-t border-prisma-gray-light/40 pt-3">
            <button
              className={`flex items-center justify-between w-full text-sm font-semibold ${accentText} hover:opacity-80 transition-opacity`}
              onClick={() => setOpen((v) => !v)}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Ver todos os {cat.services.length} serviços</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="svc-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-2">
                    {cat.services.map((svc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-lg hover:bg-prisma-gray-light/30 transition-colors group/svc"
                      >
                        <ExternalLink
                          className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${accentText} opacity-60 group-hover/svc:opacity-100`}
                        />
                        <div>
                          <p
                            className="text-sm font-semibold text-prisma-gray-text leading-snug"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {svc.title}
                          </p>
                          <p
                            className="text-xs text-prisma-gray-text/65 leading-relaxed mt-0.5"
                            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                          >
                            {svc.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>

        {/* Footer com botões — mesmo padrão da home */}
        <div className="mt-auto p-5 pt-3 border-t border-prisma-gray-light/40 bg-gradient-to-r from-prisma-gray-light/10 to-prisma-gray-light/20 group-hover:from-prisma-gray-light/20 group-hover:to-prisma-gray-light/30 transition-all duration-300 relative z-10">
          <div className="flex gap-2.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className={`flex-1 ${accentButtonOutline} transition-all duration-300 font-semibold`}
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              <Link
                to={`/services/${cat.id}`}
                className="flex items-center justify-center gap-1.5"
              >
                Explorar
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className={`flex-1 ${accentButtonFill} text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg`}
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              <Link to="/request-quote">Orçamento</Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// ── Página de Serviços ────────────────────────────────────────────────────────
const ServicesPage = () => {
  return (
    <PageWrapper>
      {/* Banner idêntico ao original, com a foto da floresta */}
      <PageBanner
        title="Nossos Serviços"
        description="Licenciamento ambiental, autorizações florestais, outorgas, estudos técnicos, monitoramento e gestão de conformidade — soluções especializadas para conformidade legal no Paraná."
        icon={<Leaf />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600"
      />

      {/* Introdução e contagem */}
      <section className="container pt-14 pb-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-prisma-gray-text mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              10 áreas de atuação · {ALL_CATEGORIES.reduce((a, c) => a + c.services.length, 0)} serviços especializados
            </h2>
            <p
              className="text-prisma-gray-text/70 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Clique em <strong>Explorar</strong> para ver detalhes de cada área ou em{" "}
              <strong>Ver todos os serviços</strong> para expandir a lista completa dentro do card.
            </p>
            <div className="h-1 w-20 bg-prisma-green rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Grid de cards */}
      <section className="container py-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {ALL_CATEGORIES.map((cat, i) => (
            <ServiceCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <CTASection />
    </PageWrapper>
  );
};

export default ServicesPage;
