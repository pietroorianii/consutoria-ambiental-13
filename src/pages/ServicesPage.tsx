import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
  MessageCircle,
} from "lucide-react";

// ── Todos os dados de serviços inline para esta página ──────────────────────

const ALL_CATEGORIES = [
  {
    id: "licensing",
    color: "green",
    accentHex: "#2A6F47",
    icon: Leaf,
    tag: "LICENCIAMENTO",
    title: "Licenciamento e Autorizações Ambientais",
    summary:
      "Todas as modalidades conforme a nova regulamentação do IAT-PR — da dispensa ao licenciamento trifásico.",
    services: [
      { title: "DLAM — Declaração de Dispensa", desc: "Para atividades de baixo impacto (1–15 dias via SGA do IAT)." },
      { title: "LAC — Licença por Adesão e Compromisso", desc: "Emissão eletrônica imediata para atividades padronizáveis." },
      { title: "LAS — Licença Ambiental Simplificada", desc: "Processo unificado LP+LI+LO para pequeno porte (até 60 dias)." },
      { title: "LP — Licença Prévia", desc: "Aprovação de viabilidade na fase de planejamento." },
      { title: "LI — Licença de Instalação", desc: "Autoriza a implantação conforme projeto aprovado." },
      { title: "LO — Licença de Operação", desc: "Autoriza o início das atividades após verificação das condicionantes." },
      { title: "Regularização — LASR / LIR / LOR", desc: "Adequação de empreendimentos em situação irregular (PRA)." },
      { title: "Autorizações AA e AF", desc: "Autorização Ambiental e Florestal para atividades específicas." },
    ],
  },
  {
    id: "water_resources",
    color: "blue",
    accentHex: "#0077C2",
    icon: Droplet,
    tag: "RECURSOS HÍDRICOS",
    title: "Outorga e Recursos Hídricos",
    summary:
      "Direito legal de uso de águas superficiais e subterrâneas, captação e lançamento de efluentes no Paraná.",
    services: [
      { title: "Outorga de Captação Superficial", desc: "Direito de uso em rios e lagos para irrigação, criação de animais e aquicultura." },
      { title: "Outorga de Captação Subterrânea", desc: "Uso de poços artesianos com ART, testes e análise físico-química." },
      { title: "Outorga de Lançamento de Efluentes", desc: "Direito de lançar efluentes tratados em corpos hídricos com DCP." },
      { title: "Outorga de Barragem", desc: "Barramento de cursos d'água com projeto executivo e estudo hídrico." },
      { title: "Estudos de Disponibilidade Hídrica", desc: "Análises técnicas para fundamentar pedidos de outorga." },
      { title: "Monitoramento de Qualidade e Vazão", desc: "Atendimento de condicionantes de outorga vigentes." },
    ],
  },
  {
    id: "degraded_areas",
    color: "orange",
    accentHex: "#E07A5F",
    icon: TreePine,
    tag: "PASSIVOS AMBIENTAIS",
    title: "Recuperação de Áreas e Passivos Ambientais",
    summary:
      "Da investigação à remediação completa de áreas degradadas e passivos ambientais.",
    services: [
      { title: "GAC — Investigação e Remediação", desc: "Ciclo completo da avaliação preliminar ao monitoramento pós-remediação." },
      { title: "PRAD — Projeto de Recuperação", desc: "Projetos técnicos para restaurar ecossistemas e atender à lei." },
      { title: "TAC — Assessoria para Ajuste de Conduta", desc: "Suporte técnico em negociação e cumprimento de acordos ambientais." },
      { title: "Auditoria de Passivos Ambientais", desc: "Diagnóstico completo para M&A, fusões e due diligence." },
    ],
  },
  {
    id: "monitoring",
    color: "blue",
    accentHex: "#1A759F",
    icon: Beaker,
    tag: "MONITORAMENTO",
    title: "Monitoramento e Análises Ambientais",
    summary:
      "Monitoramento contínuo e análises técnicas para conformidade e atendimento às condicionantes.",
    services: [
      { title: "Emissões Atmosféricas", desc: "Controle de poluentes conforme condicionantes de licenças e SGADEA." },
      { title: "Efluentes Líquidos", desc: "Análise e controle de qualidade de efluentes industriais e sanitários." },
      { title: "Qualidade da Água", desc: "Acompanhamento de águas superficiais e subterrâneas." },
      { title: "Gestão de Análises Laboratoriais", desc: "Coordenação de coletas com laboratórios credenciados INMETRO." },
      { title: "Acompanhamento de Condicionantes", desc: "Gestão sistemática do cumprimento de condicionantes de licença." },
    ],
  },
  {
    id: "reports",
    color: "green",
    accentHex: "#3B7D59",
    icon: FileText,
    tag: "ESTUDOS TÉCNICOS",
    title: "Estudos e Documentos Técnicos",
    summary:
      "Todos os instrumentos técnicos exigidos no licenciamento — do EIA ao PGRAD.",
    services: [
      { title: "EIA/RIMA", desc: "Estudo de Impacto Ambiental para empreendimentos de significativo impacto." },
      { title: "RAP / RAS", desc: "Relatórios Ambientais Prévios e Simplificados por modalidade de licença." },
      { title: "MCE — Memorial de Caracterização", desc: "Documento técnico detalhado exigido em LAC, LAS e LP." },
      { title: "PGRS / PGRSS / PGRCC", desc: "Planos de gerenciamento de resíduos sólidos por setor." },
      { title: "PCA / PRAD / PRF", desc: "Controle, recuperação de áreas e resgate da flora." },
      { title: "Plano de Automonitoramento", desc: "Efluentes, resíduos e parâmetros de condicionantes de LO." },
    ],
  },
  {
    id: "consulting",
    color: "teal",
    accentHex: "#00A3AD",
    icon: Users,
    tag: "CONSULTORIA",
    title: "Consultoria Ambiental Especializada",
    summary:
      "Assessoria técnica estratégica, auditorias, defesas e adequações regulatórias.",
    services: [
      { title: "Auditorias Ambientais", desc: "Conformidade legal, desempenho ambiental e due diligence." },
      { title: "Defesas e Recursos Ambientais", desc: "Elaboração de defesas para autos de infração e recursos administrativos." },
      { title: "Assessoria para TAC", desc: "Suporte técnico em Termos de Ajuste de Conduta ambiental." },
      { title: "Perícia Ambiental", desc: "Avaliação técnica para processos judiciais e administrativos." },
      { title: "Geotecnologias (SIG)", desc: "Mapeamento e análise ambiental com Sistemas de Informação Geográfica." },
      { title: "Certificações — ISO 14001", desc: "Assessoria para certificações de gestão ambiental." },
    ],
  },
  {
    id: "training",
    color: "green",
    accentHex: "#2A6F47",
    icon: GraduationCap,
    tag: "CAPACITAÇÃO",
    title: "Treinamentos e Capacitações Ambientais",
    summary:
      "Programas de educação e capacitação técnica para equipes, da legislação às emergências.",
    services: [
      { title: "Legislação Ambiental", desc: "Capacitação sobre normas do IAT e legislação aplicável por setor." },
      { title: "Gerenciamento de Resíduos Sólidos", desc: "Treinamento certificado em PGRS (Lei nº 12.305/2010)." },
      { title: "Atendimento a Emergências", desc: "Capacitação para resposta rápida a incidentes ambientais." },
      { title: "Capacitações Setoriais", desc: "Programas específicos para indústria, agronegócio e construção." },
    ],
  },
  {
    id: "management",
    color: "blue",
    accentHex: "#0077C2",
    icon: ClipboardList,
    tag: "GESTÃO CONTÍNUA",
    title: "Gestão Ambiental Contínua",
    summary:
      "Manutenção da conformidade pós-licença: renovações, declarações e suporte permanente.",
    services: [
      { title: "Gestão de Requisitos Legais", desc: "Sistema de gestão de obrigações ambientais e controle de prazos." },
      { title: "Renovação de Licenças (LO)", desc: "Acompanhamento e renovação com antecedência mínima de 120 dias." },
      { title: "Renovação de Outorgas", desc: "Controle de vencimentos e renovação no SIGARH." },
      { title: "Declarações Anuais e SGA IR", desc: "Inventários e relatórios obrigatórios aos órgãos ambientais." },
      { title: "Suporte Técnico Contínuo", desc: "Assessoria permanente para questões ambientais do dia a dia." },
    ],
  },
  {
    id: "esg",
    color: "teal",
    accentHex: "#4DA1A9",
    icon: Globe2,
    tag: "ESG",
    title: "Consultoria ESG",
    summary:
      "Critérios ambientais, sociais e de governança para competitividade e sustentabilidade corporativa.",
    services: [
      { title: "Diagnóstico e Estratégia ESG", desc: "Avaliação completa e desenvolvimento de estratégias customizadas." },
      { title: "Relatórios de Sustentabilidade", desc: "Elaboração conforme GRI, SASB, TCFD e outros frameworks." },
      { title: "Análise de Riscos ESG", desc: "Identificação de riscos e oportunidades ambientais e de governança." },
      { title: "Engajamento com Stakeholders", desc: "Comunicação com investidores, comunidades e colaboradores." },
      { title: "Políticas Corporativas ESG", desc: "Desenvolvimento de políticas e indicadores de desempenho." },
    ],
  },
  {
    id: "climate",
    color: "green",
    accentHex: "#3B7D59",
    icon: Wind,
    tag: "CLIMA",
    title: "Mudanças Climáticas e Descarbonização",
    summary:
      "Gestão de riscos climáticos, inventários de GEE, planos de descarbonização e créditos de carbono.",
    services: [
      { title: "Inventários de GEE", desc: "Inventários corporativos conforme ISO 14064 com verificação terceirizada." },
      { title: "Planos de Descarbonização", desc: "Estratégias de redução e roadmap para neutralidade carbônica." },
      { title: "Análise de Vulnerabilidade Climática", desc: "Riscos físicos e de transição para adaptação empresarial." },
      { title: "Projetos de Crédito de Carbono", desc: "Desenvolvimento desde a concepção até a comercialização." },
      { title: "Economia Circular", desc: "Implementação de estratégias e modelos de negócio sustentáveis." },
    ],
  },
];

// Paleta de cores por tipo
const COLOR_MAP: Record<string, { bg: string; border: string; badge: string; dot: string; check: string }> = {
  green:  { bg: "bg-[#2A6F47]/8",  border: "border-[#2A6F47]/20",  badge: "bg-[#2A6F47]/10 text-[#2A6F47]",  dot: "bg-[#2A6F47]",  check: "text-[#2A6F47]" },
  blue:   { bg: "bg-[#0077C2]/8",  border: "border-[#0077C2]/20",  badge: "bg-[#0077C2]/10 text-[#0077C2]",  dot: "bg-[#0077C2]",  check: "text-[#0077C2]" },
  orange: { bg: "bg-[#E07A5F]/8",  border: "border-[#E07A5F]/20",  badge: "bg-[#E07A5F]/10 text-[#E07A5F]",  dot: "bg-[#E07A5F]",  check: "text-[#E07A5F]" },
  teal:   { bg: "bg-[#00A3AD]/8",  border: "border-[#00A3AD]/20",  badge: "bg-[#00A3AD]/10 text-[#00A3AD]",  dot: "bg-[#00A3AD]",  check: "text-[#00A3AD]" },
};

// ── Componente de card de categoria ─────────────────────────────────────────
function CategoryCard({ cat, index }: { cat: (typeof ALL_CATEGORIES)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const c = COLOR_MAP[cat.color] ?? COLOR_MAP.green;
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`rounded-2xl border ${c.border} bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
    >
      {/* Header clicável */}
      <button
        className="w-full text-left p-6 flex items-start gap-4 group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {/* Ícone */}
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className="h-6 w-6" style={{ color: cat.accentHex }} />
        </div>

        {/* Texto */}
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2 ${c.badge}`}>
            {cat.tag}
          </span>
          <h3 className="text-base font-bold text-gray-900 leading-snug font-sora mb-1">
            {cat.title}
          </h3>
          <p className="text-sm text-gray-500 font-inter leading-relaxed line-clamp-2">
            {cat.summary}
          </p>
        </div>

        {/* Contador + chevron */}
        <div className="flex-shrink-0 flex flex-col items-end gap-2 ml-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>
            {cat.services.length} serviços
          </span>
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Lista de serviços expansível */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`border-t ${c.border} mx-6`} />
            <div className="p-6 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.services.map((svc, i) => (
                <div key={i} className="flex items-start gap-2.5 group/item">
                  <CheckCircle2
                    className={`h-4 w-4 mt-0.5 flex-shrink-0 ${c.check}`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 font-sora leading-snug">
                      {svc.title}
                    </p>
                    <p className="text-xs text-gray-500 font-inter leading-relaxed mt-0.5">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Botões de ação */}
            <div className="px-6 pb-5 flex gap-3">
              <Button
                asChild
                size="sm"
                className="flex-1 rounded-xl text-white font-semibold transition-all hover:scale-[1.02]"
                style={{ backgroundColor: cat.accentHex }}
              >
                <Link to="/request-quote" className="flex items-center justify-center gap-2">
                  Solicitar orçamento
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                <Link to={`/services/${cat.id}`} className="flex items-center gap-1.5">
                  Ver detalhes
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
const ServicesPage = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <PageWrapper>
      {/* ── Hero da página ── */}
      <div className="relative bg-brand-dark text-brand-cream overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1600&h=600"
          alt="Rio e floresta preservada"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />

        <div className="container relative z-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-accent/15 text-brand-accent border border-brand-accent/30 mb-6">
              <Leaf className="h-3 w-3" />
              Consultoria Ambiental · IAT-PR · 2025/2026
            </span>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              Todos os nossos{" "}
              <span className="text-brand-accent">serviços</span>
            </h1>
            <p className="font-inter text-lg text-brand-cream/75 leading-relaxed max-w-2xl mb-8">
              10 frentes de atuação, {ALL_CATEGORIES.reduce((acc, c) => acc + c.services.length, 0)} serviços especializados.
              Clique em qualquer área para ver a lista completa — ou solicite um orçamento direto.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-2xl bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-7">
                <Link to="/request-quote" className="flex items-center gap-2">
                  Solicitar orçamento <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl border-brand-cream/25 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream/15 px-7">
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" /> Falar com especialista
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Barra de stats */}
        <div className="relative z-10 border-t border-brand-cream/10">
          <div className="container py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "10", label: "Áreas de atuação" },
                { n: `${ALL_CATEGORIES.reduce((acc, c) => acc + c.services.length, 0)}+`, label: "Serviços disponíveis" },
                { n: "300+", label: "Processos aprovados" },
                { n: "15+", label: "Anos de experiência" },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="font-sora text-2xl font-bold text-brand-accent">{s.n}</div>
                  <div className="text-xs text-brand-cream/60 font-inter mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid de categorias ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container">
          {/* Cabeçalho da seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-sora mb-2">
                Nossas áreas de atuação
              </h2>
              <p className="text-gray-500 font-inter text-sm">
                Clique em cada área para expandir a lista de serviços
              </p>
            </div>
            <button
              onClick={() => setExpandAll((v) => !v)}
              className="text-sm font-semibold text-brand-accent hover:text-brand-accent/80 underline underline-offset-4 transition-colors self-start md:self-auto"
            >
              {expandAll ? "Recolher todas" : "Expandir todas"}
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {ALL_CATEGORIES.map((cat, i) => (
              <CategoryCardControlled key={cat.id} cat={cat} index={i} forceOpen={expandAll} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloco de diferenciais ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-sora mb-3">
              Por que escolher a SOLARI?
            </h2>
            <p className="text-gray-500 font-inter max-w-xl mx-auto">
              Mais de 15 anos conduzindo processos junto ao IAT-PR com metodologia rigorosa e acompanhamento completo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Especialização profunda",
                desc: "Toda a equipe atua exclusivamente na área ambiental — licenciamento, outorgas, estudos e conformidade.",
              },
              {
                icon: "⚡",
                title: "Processo ágil e transparente",
                desc: "Acompanhamento em tempo real de cada etapa do processo junto ao IAT, com comunicação proativa.",
              },
              {
                icon: "🛡️",
                title: "Segurança jurídica total",
                desc: "Documentação técnica rigorosa e atualizada conforme as INs do IAT vigentes em 2025/2026.",
              },
            ].map((d) => (
              <div key={d.title} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="font-bold text-gray-900 font-sora mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 font-inter leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <CTASection />
    </PageWrapper>
  );
};

// Versão controlada externamente (para "expandir todas")
function CategoryCardControlled({
  cat,
  index,
  forceOpen,
}: {
  cat: (typeof ALL_CATEGORIES)[0];
  index: number;
  forceOpen: boolean;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const open = forceOpen || localOpen;
  const c = COLOR_MAP[cat.color] ?? COLOR_MAP.green;
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`rounded-2xl border ${c.border} bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
    >
      {/* Header clicável */}
      <button
        className="w-full text-left p-6 flex items-start gap-4 group"
        onClick={() => setLocalOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
          <Icon className="h-6 w-6" style={{ color: cat.accentHex }} />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2 ${c.badge}`}>
            {cat.tag}
          </span>
          <h3 className="text-base font-bold text-gray-900 leading-snug font-sora mb-1">{cat.title}</h3>
          <p className="text-sm text-gray-500 font-inter leading-relaxed line-clamp-2">{cat.summary}</p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-end gap-2 ml-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>
            {cat.services.length} serviços
          </span>
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`border-t ${c.border} mx-6`} />
            <div className="p-6 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.services.map((svc, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${c.check}`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 font-sora leading-snug">{svc.title}</p>
                    <p className="text-xs text-gray-500 font-inter leading-relaxed mt-0.5">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-5 flex gap-3">
              <Button
                asChild
                size="sm"
                className="flex-1 rounded-xl text-white font-semibold transition-all hover:scale-[1.02]"
                style={{ backgroundColor: cat.accentHex }}
              >
                <Link to="/request-quote" className="flex items-center justify-center gap-2">
                  Solicitar orçamento <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50">
                <Link to={`/services/${cat.id}`} className="flex items-center gap-1.5">
                  Ver detalhes
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ServicesPage;
