
import { Waves } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const waterResourcesServices: ServiceDetailData = {
  id: "water_resources",
  title: "Outorga e Recursos Hídricos",
  description: "Obtenção e gestão de outorgas de uso da água no Paraná, conforme Lei Estadual 12.726/1999 e Decreto Estadual 9.957/2014, com integração ao licenciamento ambiental.",
  icon: Waves,
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Outorga de Direito de Uso de Recursos Hídricos é o ato administrativo pelo qual o IAT (Instituto Água e Terra do Paraná) autoriza o uso de águas superficiais (rios, córregos, lagos) ou subterrâneas (poços artesianos e semiartesianos). Regulamentada pela Lei Estadual 12.726/1999 e pelo Decreto Estadual 9.957/2014, é condição obrigatória para captações que ultrapassem os limites de uso insignificante (definidos pela Resolução SEMA 39/2004). A IN IAT 09/2026 trouxe importante integração entre o processo de outorga de captação subterrânea e o licenciamento ambiental, simplificando a tramitação para os empreendedores. A IN IAT 63/2025 regulamentou a exigência de equipamentos de medição de vazão (hidrometria) para outorgas concedidas, ampliando as condicionantes de controle.',",
  benefits: [
    "Segurança Jurídica: direito legal de uso da água garantido, evitando embargos e paralisações",
    "Conformidade: atendimento às normas do IAT, ANA e Decreto Estadual 9.957/2014",
    "Acesso a Crédito: a outorga é pré-requisito em financiamentos agropecuários e industriais",
    "Uso Racional: estudos técnicos identificam oportunidades de redução de consumo e custos",
    "Prevenção de Conflitos: uso regulamentado protege contra disputas em bacias hidrográficas",
    "Integração: aproveitamento da IN 09/2026 para unificar outorga e licenciamento ambiental"
  ],
  steps: [
    {
      title: "Diagnóstico Hídrico",
      description: "Levantamento das demandas de captação, caracterização da fonte (superficial ou subterrânea) e enquadramento conforme Resolução SEMA 39/2004 (usos insignificantes não exigem outorga)",
      duration: "5 a 10 dias úteis"
    },
    {
      title: "Estudos Técnicos e Hidrometria",
      description: "Elaboração do estudo de disponibilidade hídrica, teste de bombeamento (poços), análise de qualidade da água e instalação de equipamentos de medição de vazão (obrigatório conforme IN 63/2025)",
      duration: "15 a 45 dias"
    },
    {
      title: "Protocolo no SIGARH e Acompanhamento",
      description: "Montagem do processo e protocolo no Sistema Integrado de Gestão de Águas e Recursos Hídricos (SIGARH) do IAT, com acompanhamento semanal da análise técnica",
      duration: "60 a 180 dias"
    },
    {
      title: "Gestão de Condicionantes e Renovação",
      description: "Cumprimento das condicionantes (monitoramento de vazão, relatórios periódicos) e gestão proativa de renovações antes do vencimento",
      duration: "Contínuo"
    }
  ],
  documents: [
    "Requerimento via SIGARH (Sistema Integrado de Gestão de Águas e Recursos Hídricos do IAT); Documentos de identificação do requerente (CPF/RG ou CNPJ/Contrato Social); Matrícula do imóvel atualizada ou documento de posse/arrendamento; ART ou TRT do responsável técnico pelo estudo hídrico; Estudo de Disponibilidade Hídrica com balanço hídrico da bacia; Teste de Bombeamento (para captação subterrânea) — com relatório técnico detalhado; Análise físico-química e bacteriológica da água (laboratório credenciado); Projeto do sistema de captação com plantas e memorial descritivo; Comprovante de instalação de hidrômetro/medidor de vazão (exigência da IN IAT 63/2025); Declaração de Carga Poluidora (para lançamentos de efluentes tratados); Licença Ambiental ou comprovante de integração outorga-licença (conforme IN IAT 09/2026); Plano de Uso Racional da Água (quando exigido pelo IAT)."
  ],
  timeline: "Prazo de análise pelo IAT: 60 a 180 dias corridos, dependendo da complexidade do uso e da demanda do órgão. Outorgas para uso insignificante: dispensadas. Renovação: deve ser solicitada com pelo menos 90 dias de antecedência do vencimento.",
  legalBasis: [
    "Lei Estadual nº 12.726/1999 — Política Estadual de Recursos Hídricos do Paraná",
    "Decreto Estadual nº 9.957/2014 — Regulamenta a outorga de direitos de uso de recursos hídricos no PR",
    "Decreto Estadual nº 7.348/2013 — Cobrança pelo uso da água",
    "Resolução SEMA nº 39/2004 — Define usos insignificantes dispensados de outorga",
    "IN IAT 09/2026 — Integração entre licenciamento ambiental e outorga de captação subterrânea",
    "IN IAT 63/2025 — Exigência de equipamentos de medição de vazão (hidrometria) para outorgas",
    "Lei Federal nº 9.433/1997 — Política Nacional de Recursos Hídricos",
    "Resoluções da ANA (Agência Nacional de Águas) — para corpos d'água de domínio da União",
    "Resolução CONAMA nº 357/2005 — Classificação e diretrizes para corpos d'água superficiais",
    "Resolução CONAMA nº 396/2008 — Classificação de águas subterrâneas"
  ],
  tips: [
    "Verifique primeiro se seu uso é insignificante (Resolução SEMA 39/2004) — nesse caso, a outorga pode ser dispensada",
    "A IN 09/2026 permite integrar a outorga de captação subterrânea ao processo de licenciamento ambiental — aproveite para tramitar tudo junto",
    "Instale o hidrômetro/medidor de vazão antes de protocolar o pedido — a IN 63/2025 tornou isso obrigatório",
    "Inicie o processo com no mínimo 6 meses de antecedência em relação à necessidade de uso",
    "Um bom estudo de disponibilidade hídrica é o fator mais crítico para aprovação — invista nessa etapa"
  ]
};
