
import { Beaker } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const monitoringServices: ServiceDetailData = {
  id: "monitoring",
  title: "Monitoramento e Análises Ambientais",
  description: "Monitoramento sistemático de emissões, efluentes e qualidade da água conforme condicionantes do IAT, CONAMA e normas ABNT vigentes.",
  icon: Beaker,
  image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O monitoramento ambiental é o acompanhamento contínuo das variáveis ambientais (ar, água, solo e ruído) para verificar o cumprimento das condicionantes estabelecidas nas licenças emitidas pelo IAT, garantindo conformidade legal e antecipando problemas. No Paraná, as Instruções Normativas do IAT e as Resoluções CEMA especificam os parâmetros, frequências e métodos de coleta exigidos para cada tipo de atividade. As análises laboratoriais devem ser realizadas por laboratórios credenciados e acreditados pelo INMETRO (ABNT NBR ISO/IEC 17025). A Resolução CONAMA 491/2018 atualizou os padrões de qualidade do ar, e a Resolução CONAMA 357/2005 (alterada pela 430/2011) rege a qualidade das águas e o lançamento de efluentes.",
  benefits: [
    "Conformidade Garantida: cumprimento documentado de todas as condicionantes das licenças IAT",
    "Prevenção: identificação antecipada de não conformidades antes de autuações fiscais",
    "Rastreabilidade: cadeia de custódia completa e registros auditáveis para defesas administrativas",
    "Agilidade na Renovação: relatórios de monitoramento em dia facilitam a renovação das licenças",
    "Responsabilidade Ambiental: demonstração concreta de comprometimento com o meio ambiente",
    "Subsídio Técnico: dados para tomada de decisão e implantação de melhorias operacionais"
  ],
  steps: [
    {
      title: "Análise das Condicionantes",
      description: "Levantamento detalhado de todos os parâmetros, frequências, pontos de coleta e métodos exigidos pelas licenças IAT (LP, LI, LO, LAS) e Instruções Normativas aplicáveis",
      duration: "3 a 7 dias úteis"
    },
    {
      title: "Planejamento do Programa de Monitoramento",
      description: "Elaboração do Plano de Monitoramento Ambiental com cronograma anual, definição de laboratórios credenciados e procedimentos de coleta conforme normas ABNT",
      duration: "1 a 2 semanas"
    },
    {
      title: "Campanhas de Coleta e Análise",
      description: "Coletas em campo com cadeia de custódia completa e envio para análises em laboratórios acreditados pelo INMETRO (ABNT NBR ISO/IEC 17025)",
      duration: "1 a 3 dias por campanha; resultados em 15 a 30 dias"
    },
    {
      title: "Elaboração de Relatórios Técnicos",
      description: "Compilação de resultados, comparação com valores limites legais, análise de tendências e elaboração de Relatório de Monitoramento para submissão ao IAT",
      duration: "7 a 15 dias"
    }
  ],
  documents: [
    "Plano de Monitoramento Ambiental (PMA) aprovado pelo IAT; Cópia das condicionantes da licença vigente (LO, LAS ou autorização); Laudos analíticos emitidos por laboratórios acreditados pelo INMETRO (ABNT NBR ISO/IEC 17025); Relatórios de Monitoramento Ambiental periódicos (frequência conforme condicionante: mensal, trimestral ou semestral); Cadeia de Custódia das amostras (formulário preenchido em campo); Fichas de campo com dados da coleta (data, hora, responsável, condições meteorológicas); Certificados de calibração dos equipamentos utilizados em campo (pH, OD, condutividade, temperatura); Registros fotográficos das campanhas de coleta; Notas fiscais e laudos de laboratório (para fins de auditoria e renovação de licença); Comprovante de instalação e leitura periódica de medidor de vazão (quando exigido pela IN IAT 63/2025 para outorgas)."
  ],
  timeline: "O monitoramento é contínuo conforme frequência definida nas condicionantes: mensal (emissões críticas), trimestral (efluentes e água) ou semestral (parâmetros secundários). Relatórios são entregues ao IAT nos prazos estabelecidos na licença.",
  legalBasis: [
    "Resolução CONAMA nº 357/2005 (alterada pela 430/2011) — Classificação e padrões de qualidade das águas superficiais e lançamento de efluentes",
    "Resolução CONAMA nº 396/2008 — Classificação e diretrizes para águas subterrâneas",
    "Resolução CONAMA nº 491/2018 — Padrões nacionais de qualidade do ar (revogou CONAMA 003/1990)",
    "Resolução CONAMA nº 382/2006 — Limites de emissão para fontes fixas (processos de combustão)",
    "ABNT NBR ISO/IEC 17025 — Requisitos gerais para competência de laboratórios de ensaio",
    "ABNT NBR 10004/2004 — Classificação de resíduos sólidos",
    "Resolução CEMA nº 105/2019 — Condicionantes de monitoramento nas licenças estaduais (PR)",
    "IN IAT 63/2025 — Exigência de hidrometria para outorgas (monitoramento de vazão)",
    "Decreto Estadual nº 9.541 (vigente) — Exigências de monitoramento vinculadas ao licenciamento",
    "Portaria MS/GM nº 888/2021 — Padrão de potabilidade para águas de abastecimento"
  ],
  tips: [
    "Mantenha cronograma rigoroso de coletas — o descumprimento de datas é considerado infração às condicionantes",
    "Use exclusivamente laboratórios acreditados pelo INMETRO com escopo que contemple os parâmetros exigidos",
    "Preserve a cadeia de custódia das amostras — é o principal documento em caso de questionamento dos resultados",
    "Instale medidores de vazão conforme exigido pela IN IAT 63/2025 para outorgas — evite condicionantes retroativas",
    "Monitore as tendências dos parâmetros ao longo do tempo — identificar variações antes do limite legal permite ação corretiva antecipada",
    "Mantenha todos os equipamentos de campo calibrados e com certificados válidos — são documentos exigidos em fiscalizações do IAT"
  ]
};
