
import { Globe } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const esgServices: ServiceDetailData = {
  id: "esg",
  title: "Consultoria ESG",
  description: "Assessoria especializada em critérios ambientais, sociais e de governança para sustentabilidade corporativa, conforme GRI, SASB, TCFD e Resolução CVM 193/2023.",
  icon: Globe,
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A consultoria ESG da SOLARI integra exigências regulatórias, demandas de investidores e melhores práticas internacionais para posicionar sua empresa como referência em sustentabilidade. No Brasil, a Resolução CVM 193/2023 tornou obrigatória a divulgação de informações de sustentabilidade para companhias abertas, adotando as normas IFRS S1 e S2 (emitidas pelo ISSB). No Paraná, o licenciamento ambiental responsável e a conformidade com as INs do IAT são pilares da dimensão 'E' do ESG. Auxiliamos desde o diagnóstico inicial até a publicação do Relatório de Sustentabilidade conforme padrão GRI, além de apoiar o acesso a linhas de crédito e financiamentos vinculados a desempenho ESG.",
  benefits: [
    "Acesso a Capital: rating ESG elevado abre portas para fundos ESG, CRA verde e financiamentos BNDES/CAF",
    "Conformidade Regulatória: adequação à Resolução CVM 193/2023 (IFRS S1 e S2) e demais normas",
    "Reputação Corporativa: posicionamento como empresa responsável perante clientes, investidores e comunidades",
    "Gestão de Riscos: identificação de riscos climáticos físicos e de transição (alinhado ao TCFD)",
    "Cadeia de Fornecimento: apoio para atender exigências ESG de grandes compradores e exportações",
    "Licenciamento Facilitado: histórico ambiental positivo influencia positivamente análises do IAT"
  ],
  steps: [
    {
      title: "Diagnóstico ESG",
      description: "Avaliação completa das práticas ESG atuais versus benchmarks do setor, identificação de gaps regulatórios (IFRS S1/S2, GRI) e mapeamento de stakeholders e materialidades",
      duration: "2 a 4 semanas"
    },
    {
      title: "Estratégia ESG e Matriz de Materialidade",
      description: "Desenvolvimento da estratégia ESG com temas materiais priorizados, definição de indicadores-chave (KPIs), metas de curto/médio/longo prazo alinhadas ao setor",
      duration: "3 a 6 semanas"
    },
    {
      title: "Implementação de Políticas e Programas",
      description: "Implantação de políticas ESG, programas de eficiência ambiental, governança e engajamento com stakeholders; adequação da conformidade ambiental estadual (IAT/SEMA)",
      duration: "3 a 12 meses"
    },
    {
      title: "Relatório de Sustentabilidade e Monitoramento",
      description: "Elaboração do Relatório de Sustentabilidade GRI, ISSB (IFRS S1/S2) ou SASB; verificação independente e publicação; monitoramento anual de indicadores e atualização",
      duration: "Processo contínuo"
    }
  ],
  documents: [
    "Relatório de Diagnóstico ESG com scoring por dimensão (E, S, G) e benchmarking setorial; Matriz de Materialidade com identificação e priorização dos temas relevantes para a empresa e seus stakeholders; Estratégia ESG Corporativa com metas, KPIs e cronograma de implementação; Políticas ESG (Política Ambiental, Política de Diversidade, Código de Conduta, Política de Compras Sustentáveis); Inventário de Gases de Efeito Estufa (GEE) — Escopos 1, 2 e 3 (conforme ISO 14064 e GHG Protocol Brasil); Relatório de Sustentabilidade: padrão GRI Standards (Universal, Setor e Tópicos); padrão IFRS S1 (informações gerais de sustentabilidade) e IFRS S2 (informações sobre clima); Plano de Engajamento com Stakeholders e Relatório de Engajamento; Sistema de Indicadores ESG com dados trimestrais e metodologia de cálculo; Análise de Riscos e Oportunidades Climáticas (alinhada ao TCFD e IFRS S2); Formulário de Referência ESG para empresas com obrigação CVM 193/2023."
  ],
  timeline: "Diagnóstico inicial: 2 a 4 semanas. Estratégia e materialidade: 1 a 2 meses. Primeiro relatório de sustentabilidade: 4 a 8 meses. Implementação completa e ciclo anual: 12 a 24 meses.",
  legalBasis: [
    "Resolução CVM nº 193/2023 — Divulgação obrigatória de informações de sustentabilidade (IFRS S1 e S2) para companhias abertas",
    "IFRS S1 — Divulgação geral de informações sobre sustentabilidade (ISSB, 2023)",
    "IFRS S2 — Divulgação de informações relacionadas ao clima (ISSB, 2023)",
    "GRI Standards (atualização 2021) — Global Reporting Initiative",
    "ISO 14064-1/2019 — Quantificação e relato de emissões de GEE organizacionais",
    "Programa Brasileiro GHG Protocol — Metodologia de inventário de emissões",
    "SASB Standards — Sustainability Accounting Standards Board (por setor)",
    "TCFD — Task Force on Climate-related Financial Disclosures (recomendações 2017)",
    "UN Global Compact — Dez princípios ESG para empresas",
    "Lei Federal nº 12.187/2009 — Política Nacional sobre Mudança do Clima",
    "Decreto Federal nº 11.075/2022 — Plano Setorial de Adaptação e Baixa Emissão de Carbono (PASAC)"
  ],
  tips: [
    "A Resolução CVM 193/2023 tornou obrigatória a divulgação IFRS S1 e S2 para companhias abertas — verifique se sua empresa está no escopo",
    "Comece pela dimensão 'E' com o inventário de GEE — é o indicador mais exigido por investidores e fundos de impacto",
    "O alinhamento entre a conformidade ambiental no IAT e a estratégia ESG cria sinergia e reduz custos de gestão",
    "A Matriz de Materialidade deve envolver ativamente seus principais stakeholders — é um requisito do GRI Standards",
    "Linhas de crédito do BNDES, CAF e bancos privados têm condições diferenciadas para empresas com rating ESG demonstrado"
  ]
};
