
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const licensingServices: ServiceDetailData = {
  id: "licensing",
  title: "Licenciamento e Autorizações Ambientais",
  description: "Serviços completos de licenciamento ambiental no Paraná, conforme Resolução CEMA nº 105/2019 e Instruções Normativas do IAT.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O licenciamento ambiental no Paraná é gerenciado pelo IAT (Instituto Água e Terra) e regulado pela Resolução CEMA nº 105/2019. As Instruções Normativas do IAT definem, para cada tipo de atividade econômica, qual modalidade é exigida: desde a Inexigibilidade e a DLAM para atividades de baixíssimo impacto, passando pela LAC e LAS para porte simplificado, até o licenciamento trifásico (LP, LI e LO) para empreendimentos de maior complexidade. Todo o processo tramita pelo Sistema de Gestão Ambiental (SGA) do IAT.",
  benefits: [
    "Enquadramento correto da modalidade, evitando exigências desnecessárias",
    "Processo conduzido do início ao fim no SGA do IAT",
    "Documentação completa que reduz pedidos de complementação",
    "Acompanhamento técnico durante toda a análise do órgão ambiental",
    "Gestão proativa de renovações para nunca operar com licença vencida",
    "Atualização contínua conforme novas Instruções Normativas do IAT"
  ],
  steps: [
    {
      title: "Enquadramento da Atividade",
      description: "Consulta às Instruções Normativas do IAT e à Resolução CEMA 105/2019 para identificar a modalidade correta (Inexigível, DLAM, LAC, LAS ou LP/LI/LO)",
      duration: "3 a 5 dias úteis"
    },
    {
      title: "Preparação da Documentação",
      description: "Elaboração dos estudos ambientais exigidos (RAS, EIA/RIMA ou RAP) e reunião de toda a documentação técnica com ART do responsável",
      duration: "2 a 8 semanas"
    },
    {
      title: "Protocolo e Acompanhamento no SGA",
      description: "Submissão eletrônica no SGA do IAT, acompanhamento da análise técnica e resposta a eventuais pedidos de complementação",
      duration: "15 dias a 6 meses (conforme modalidade)"
    },
    {
      title: "Obtenção e Cumprimento de Condicionantes",
      description: "Recebimento da licença/autorização e orientação sobre o cumprimento de todas as condicionantes estabelecidas",
      duration: "1 a 3 dias"
    }
  ],
  documents: [
    "Documentos de identificação do empreendedor (CPF/RG para pessoa física ou CNPJ/Contrato Social para empresa)",
    "Certidão de Uso e Ocupação do Solo emitida pelo município",
    "Matrícula atualizada do imóvel ou documento de posse",
    "Comprovante de pagamento da Taxa de Controle e Fiscalização Ambiental (TCFA)",
    "Estudo ambiental exigido conforme modalidade: RAS (LAS/LI), RAP ou EIA/RIMA (LP grandes empreendimentos)",
    "ART ou TRT do responsável técnico habilitado (CREA, CRBio ou equivalente)",
    "Planos e programas ambientais quando exigidos pelas Instruções Normativas do IAT (PGRS, PGRSS, etc.)",
    "Outorga de Recursos Hídricos, quando houver captação ou lançamento de efluentes"
  ],
  timeline: "Inexigibilidade/DLAM: imediato a 15 dias. LAC: emissão imediata via SGA. LAS: até 60 dias. LP/LI/LO: 4 a 8 meses por fase.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Critérios e procedimentos para licenciamento ambiental estadual no PR",
    "Instruções Normativas do IAT — Regulamentam atividades específicas por setor",
    "Resolução CONAMA nº 237/1997 — Diretrizes federais para LP, LI e LO",
    "Resolução CONAMA nº 01/1986 — Avaliação de Impacto Ambiental e EIA/RIMA",
    "Lei Federal nº 6.938/1981 — Política Nacional do Meio Ambiente",
    "Lei Complementar nº 140/2011 — Competências em matéria ambiental"
  ],
  tips: [
    "Verifique as Instruções Normativas do IAT vigentes para sua atividade antes de iniciar o processo — a modalidade correta pode simplificar muito o caminho",
    "Solicite o processo de renovação da licença com pelo menos 120 dias de antecedência do vencimento",
    "Utilize o SGA do IAT para acompanhar em tempo real o andamento do seu processo",
    "Mantenha todas as condicionantes documentadas — são o principal critério avaliado na renovação"
  ]
};
