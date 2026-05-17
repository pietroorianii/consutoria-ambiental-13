
import { TreePine } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const authorizationsService: ServiceDetailData = {
  id: "authorizations",
  title: "Autorizações Ambientais e Florestais",
  description: "Autorização Ambiental (AA) e Autorização Florestal (AF) para supressão de vegetação, corte de árvores, manejo florestal, reposição florestal (SERFLOR) e intervenções em APP — via SGA do IAT.",
  icon: TreePine,
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "As Autorizações Ambientais (AA) e Florestais (AF) são atos administrativos emitidos pelo IAT para atividades específicas que não se enquadram no fluxo regular de licença ambiental. A AA cobre atividades como movimentação de solo acima dos limites de dispensa, intervenções em emergências ambientais e ligações elétricas em áreas protegidas. A AF regula supressão de vegetação nativa, manejo florestal sustentável, corte de árvores isoladas e retirada de espécies exóticas. A Câmara Técnica Florestal — instituída pela IN 10/2025 — emite parecer técnico obrigatório nos processos de licenciamento que envolvam supressão de vegetação nativa, adicionando uma etapa ao fluxo. A IN 05/2026 é a norma vigente para supressão geral de vegetação nativa (revogou a IN 48/2025). O SERFLOR — regulamentado pelo Decreto 1.940/1996 — controla a obrigação de reposição florestal associada a qualquer supressão com exigência de compensação.",
  benefits: [
    "Conformidade legal para intervenções em vegetação nativa e exótica",
    "Protocolo ágil via SGA do IAT para autorizações específicas",
    "Domínio das INs vigentes: 02, 03, 04, 05/2026 e 08, 10, 12, 14, 15, 19, 29/2025",
    "Elaboração de Plano de Resgate da Flora (PRF) quando exigido pela IN 15/2025",
    "Regularização de SERFLOR e reposição florestal obrigatória",
    "Atuação integrada com o licenciamento quando a supressão é condicionante"
  ],
  steps: [
    {
      title: "Diagnóstico e Enquadramento",
      description: "Identificação do tipo de autorização necessária (AA ou AF), IN aplicável vigente e documentação exigida para o caso concreto",
      duration: "2 a 3 dias"
    },
    {
      title: "Levantamento Florestal e Estudos",
      description: "Laudo de avaliação da vegetação, geração do arquivo vetorial KMZ (SIRGAS2000 UTM), mapeamento de APP e Reserva Legal, identificação de espécies quando exigido",
      duration: "1 a 3 semanas"
    },
    {
      title: "Protocolo no SGA do IAT",
      description: "Submissão do requerimento com toda a documentação, ART do responsável técnico e comprovante de pagamento de taxa ambiental",
      duration: "2 a 5 dias"
    },
    {
      title: "Acompanhamento da Câmara Técnica Florestal",
      description: "Quando aplicável (IN 10/2025 — supressão vinculada ao licenciamento), suporte técnico à análise e resposta a exigências da CTF do IAT",
      duration: "30 a 90 dias (variável conforme tipo)"
    }
  ],
  documents: [
    "AA — Movimentação de Solo (IN 04/2025): ART, memorial descritivo, dominialidade (90 dias), declaração de embargos, comprovante de taxa",
    "AF — Supressão de Vegetação Nativa (IN 05/2026): ART, arquivo vetorial KMZ (SIRGAS2000 UTM) com delimitação da área, mapeamento de APP e RL, laudos técnicos, declaração de embargos, SERFLOR quando aplicável",
    "AF — Corte de Árvore Isolada (IN 04/2026): ART, croqui de localização, justificativa técnica, declaração de embargos",
    "AF — Supressão de Nativas Plantadas (IN 29/2025): ART, laudo técnico, KMZ, comprovante de reposição ou isenção",
    "AF — Retirada de Exóticas em APP (IN 14/2025): ART, laudo de identificação das espécies, KMZ, plano de revegetação",
    "AF — Manejo de Bracatinga (IN 02/2026): ART, plano de manejo florestal sustentável, SERFLOR",
    "Anuência Prévia — Parcelamento Rural (IN 07/2026): ART, CAR, arquivo vetorial KMZ, matrícula do imóvel, taxa ambiental",
    "AA — Emergência/Calamidade (OT 01/2025): documentação simplificada conforme orientação técnica do IAT"
  ],
  timeline: "Variável conforme tipo: corte de árvore isolada (15–30 dias); supressão de vegetação sem Câmara Técnica (30–60 dias); supressão vinculada ao licenciamento com Câmara Técnica Florestal (30–90 dias); parcelamento rural (30–60 dias).",
  legalBasis: [
    "Lei Estadual nº 22.252/2024 e Decreto Estadual nº 9.541/2025",
    "IN IAT nº 05/2026 — supressão de vegetação nativa (vigente — revogou IN 48/2025)",
    "IN IAT nº 04/2026 — corte de árvore isolada (vigente — revogou IN 42/2025)",
    "IN IAT nº 02/2026 — Manejo Florestal Sustentável de Bracatinga (vigente — revogou IN 07/2025)",
    "IN IAT nº 03/2026 — exploração de pinhão (vigente — revogou IN 11/2025)",
    "IN IAT nº 10/2025 — Câmara Técnica Florestal para supressão em licenciamento",
    "IN IAT nº 08/2025 — reposição florestal e SERFLOR",
    "IN IAT nº 12, 14, 15, 19, 27, 29/2025",
    "IN IAT nº 07/2026 — desmembramento e parcelamento rural",
    "Decreto Estadual nº 1.940/1996 — SERFLOR",
    "Lei Federal nº 11.428/2006 — Lei da Mata Atlântica",
    "Lei Federal nº 12.651/2012 — Código Florestal"
  ],
  tips: [
    "Atenção às INs vigentes: IN 05/2026 revogou a 48/2025; IN 04/2026 revogou a 42/2025; IN 02/2026 revogou a 07/2025 — protocolar com base em IN revogada invalida o processo",
    "Licenciamentos que envolvam supressão de vegetação passam por Câmara Técnica Florestal (IN 10/2025) — preveja prazo adicional de 30 a 60 dias no cronograma do cliente",
    "SERFLOR (Decreto 1.940/1996) é exigido nas INs industriais e em qualquer supressão com reposição obrigatória — verifique antes de protocolar",
    "O arquivo KMZ deve estar em SIRGAS2000 projeção UTM — erro no sistema de referência invalida o protocolo e reinicia o prazo"
  ]
};
