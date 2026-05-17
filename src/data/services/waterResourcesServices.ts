
import { Waves } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const waterResourcesServices: ServiceDetailData = {
  id: "water_resources",
  title: "Outorga e Recursos Hídricos",
  description: "Obtenção e gestão de outorgas de uso da água no Paraná, conforme Lei Estadual 12.726/1999 e regulamentações do IAT.",
  icon: Waves,
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Outorga de Direito de Uso de Recursos Hídricos é a autorização emitida pelo IAT para captar ou utilizar águas superficiais (rios, lagos e córregos) ou subterrâneas (poços artesianos). Regulamentada pela Lei Estadual 12.726/1999 e pelo Decreto Estadual 9.957/2014, é obrigatória para usos acima dos limites de insignificância definidos pelo IAT. Todo o processo é tramitado pelo SIGARH (Sistema Integrado de Gestão de Águas e Recursos Hídricos).",
  benefits: [
    "Direito legal de uso da água garantido, evitando embargos e paralisações",
    "Conformidade com as normas do IAT, Decreto 9.957/2014 e regulamentações da ANA",
    "Pré-requisito atendido para financiamentos agropecuários e industriais",
    "Estudos técnicos que identificam oportunidades de redução do consumo e custos",
    "Proteção contra conflitos pelo uso da água na mesma bacia hidrográfica",
    "Gestão integrada entre outorga e licença ambiental, quando aplicável"
  ],
  steps: [
    {
      title: "Diagnóstico e Enquadramento",
      description: "Verificação da necessidade de outorga conforme limites de uso insignificante (Resolução SEMA 39/2004) e identificação da fonte hídrica (superficial ou subterrânea)",
      duration: "5 a 10 dias úteis"
    },
    {
      title: "Estudos Técnicos",
      description: "Elaboração do estudo de disponibilidade hídrica, teste de bombeamento para poços e análise de qualidade da água",
      duration: "15 a 45 dias"
    },
    {
      title: "Protocolo no SIGARH e Acompanhamento",
      description: "Montagem do processo e submissão no SIGARH do IAT, com acompanhamento técnico da análise",
      duration: "60 a 180 dias"
    },
    {
      title: "Gestão de Condicionantes e Renovação",
      description: "Cumprimento das condicionantes emitidas pelo IAT (monitoramento, hidrometria e relatórios) e gestão proativa das renovações",
      duration: "Contínuo"
    }
  ],
  documents: [
    "Requerimento protocolado via SIGARH (Sistema Integrado de Gestão de Águas do IAT)",
    "Documentos de identificação do requerente (CPF/RG ou CNPJ/Contrato Social)",
    "Matrícula do imóvel atualizada ou documento de posse/arrendamento",
    "Estudo de disponibilidade hídrica com balanço da bacia",
    "Relatório de teste de bombeamento (para captação em poços artesianos)",
    "Análise físico-química da água realizada por laboratório credenciado",
    "ART do responsável técnico pelo estudo hídrico",
    "Comprovante de instalação de medidor de vazão (exigência do IAT para outorgas concedidas)"
  ],
  timeline: "Análise pelo IAT: 60 a 180 dias corridos. Usos enquadrados como insignificantes não exigem outorga. Renovação: protocolar com 90 dias de antecedência.",
  legalBasis: [
    "Lei Estadual nº 12.726/1999 — Política Estadual de Recursos Hídricos do Paraná",
    "Decreto Estadual nº 9.957/2014 — Regulamenta a outorga de uso de recursos hídricos no PR",
    "Resolução SEMA nº 39/2004 — Define usos insignificantes dispensados de outorga",
    "Instruções Normativas do IAT — Regulamentam procedimentos específicos de outorga",
    "Lei Federal nº 9.433/1997 — Política Nacional de Recursos Hídricos",
    "Resolução CONAMA nº 357/2005 — Classificação e qualidade dos corpos d'água superficiais"
  ],
  tips: [
    "Verifique primeiro se seu uso é insignificante (Resolução SEMA 39/2004) — pode dispensar a outorga",
    "Instale o medidor de vazão antes de protocolar o pedido — o IAT exige comprovante de instalação",
    "Inicie o processo com no mínimo 6 meses de antecedência em relação à necessidade de uso",
    "Um bom estudo de disponibilidade hídrica é o principal fator para aprovação da outorga"
  ]
};
