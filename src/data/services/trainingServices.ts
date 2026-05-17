
import { TreeDeciduous } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const trainingServices: ServiceDetailData = {
  id: "training",
  title: "Treinamentos e Capacitações Ambientais",
  description: "Programas de capacitação técnica em legislação ambiental, gerenciamento de resíduos, emergências ambientais e PGRS, com base nas normas IAT, CONAMA e NRs vigentes.",
  icon: TreeDeciduous,
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Os treinamentos e capacitações ambientais desenvolvidos pela SOLARI habilitam profissionais e equipes para o correto cumprimento da legislação ambiental, com foco em aplicação prática. Nossos programas abordam as Instruções Normativas do IAT mais recentes, incluindo as modalidades de licenciamento da Resolução CEMA 105/2019, o sistema MTR de rastreabilidade de resíduos (Decreto Federal 10.936/2022), a nova classificação de atividades de Baixo Risco (IN IAT 11/2026), e as exigências de monitoramento do IAT. Os treinamentos são elaborados por especialistas com registro profissional (CREA/CRBio/CRQ), com emissão de certificado e ART quando exigível pela condicionante da licença.",
  benefits: [
    "Atualização Legal: conteúdo baseado nas INs mais recentes do IAT e normas federais vigentes em 2025/2026",
    "Aplicação Prática: exemplos reais do setor industrial, agropecuário, construção civil e serviços de saúde do Paraná",
    "Cumprimento de Condicionantes: treinamentos documentados atendem exigências de licenças IAT",
    "Certificação: certificados com validade e, quando exigível, ART do responsável técnico",
    "Prevenção de Incidentes: redução de riscos operacionais por preparo inadequado da equipe",
    "Cultura Ambiental: desenvolvimento de consciência ambiental permanente na organização"
  ],
  steps: [
    {
      title: "Levantamento de Necessidades",
      description: "Análise das condicionantes da licença IAT, mapeamento das lacunas de conhecimento e identificação das normas aplicáveis ao setor da empresa",
      duration: "3 a 5 dias úteis"
    },
    {
      title: "Desenvolvimento do Conteúdo Programático",
      description: "Elaboração do material didático com base nas INs do IAT vigentes, legislação federal e exemplos práticos do setor",
      duration: "1 a 2 semanas"
    },
    {
      title: "Execução do Treinamento",
      description: "Realização das capacitações presenciais, EAD ou híbridas, com registro de presença e carga horária conforme condicionante",
      duration: "4 a 32 horas (conforme programa)"
    },
    {
      title: "Avaliação, Certificação e Registro",
      description: "Aplicação de avaliação de aprendizagem, emissão de certificados com carga horária, e elaboração de relatório de execução para arquivo no processo de licenciamento",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Programa de Treinamento detalhado com objetivos, conteúdo programático, carga horária e referências normativas (INs do IAT, Resoluções CONAMA, NRs); Material Didático completo e atualizado com a legislação vigente; Lista de Presença assinada com dados de todos os participantes; Avaliação de Aprendizagem com gabarito e resultados individuais; Certificado de Participação com carga horária, conteúdo e assinatura do responsável técnico; ART do profissional responsável (quando exigida como condicionante do IAT); Relatório de Execução do Treinamento para arquivo no processo de licenciamento; Registros fotográficos da execução; Declaração de Conclusão do Treinamento (para condicionantes de prazo específico)."
  ],
  timeline: "Treinamentos temáticos: 4 a 8 horas. Programas completos de capacitação em gestão ambiental: 16 a 40 horas. Cronograma anual de capacitações: definido conforme plano de treinamentos da empresa e condicionantes das licenças.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Condicionantes de capacitação exigidas no licenciamento estadual PR",
    "IN IAT 11/2026 — Nova classificação de Baixo Risco (conteúdo de enquadramento de atividades)",
    "Decreto Federal nº 10.936/2022 — Regulamenta PNRS e MTR (treinamento sobre rastreabilidade de resíduos)",
    "Lei Federal nº 12.305/2010 — PNRS e exigência de PGRS por geradores",
    "Lei Estadual nº 12.493/1999 — Política Estadual de Resíduos Sólidos do Paraná",
    "RDC ANVISA nº 222/2018 — PGRSS e capacitação das equipes de saúde",
    "Resolução CONAMA nº 358/2005 — Resíduos de serviços de saúde",
    "NR-25 (Portaria MTE 3.214/1978 e atualizações) — Resíduos industriais e treinamentos operacionais",
    "NR-20 (atualizações) — Treinamentos em líquidos combustíveis e inflamáveis",
    "Portaria IAT nº 012/2024 — Estudos de fauna e flora (capacitação de equipes de campo)",
    "ABNT ISO 14001/2015 — Treinamentos como requisito do Sistema de Gestão Ambiental"
  ],
  tips: [
    "Consulte as condicionantes da sua licença IAT — muitas exigem treinamentos com conteúdo e periodicidade específicos",
    "Atualize o conteúdo dos treinamentos sempre que o IAT publicar novas INs (as de 2025/2026 trouxeram mudanças importantes)",
    "O treinamento sobre MTR e PGRS deve ser renovado anualmente para manter as equipes atualizadas com mudanças no sistema",
    "Guarde toda a documentação dos treinamentos (listas, certificados, avaliações) — são exigidos em fiscalizações do IAT",
    "Para condicionantes específicas de licença, realize o treinamento antes do prazo exigido e protocole o comprovante no SGA"
  ]
};
