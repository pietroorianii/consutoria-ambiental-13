
import { Shield } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const ibamaService: ServiceDetailData = {
  id: "ibama",
  title: "Cadastro e Obrigações IBAMA",
  description:
    "Inscrição no CTF/APP, emissão e renovação do Certificado de Regularidade, declaração anual RAPP e controle da TCFA. Conformidade federal sem burocracia.",
  icon: Shield,
  image:
    "https://images.unsplash.com/photo-1588421357574-87938a86fa28?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs:
    "O Cadastro Técnico Federal de Atividades Potencialmente Poluidoras ou Utilizadoras de Recursos Ambientais (CTF/APP) é obrigatório para toda pessoa física ou jurídica que exerça atividades sujeitas à fiscalização do IBAMA, listadas no Anexo VIII da Lei Federal nº 6.938/1981. A inscrição é feita no Sistema CTF do IBAMA e deve ser mantida atualizada. Com o CTF ativo, a empresa precisa emitir anualmente o Certificado de Regularidade (CR), que comprova adimplência com a Taxa de Controle e Fiscalização Ambiental (TCFA) — cobrada trimestralmente — e com a entrega do Relatório de Atividades Potencialmente Poluidoras e Utilizadoras de Recursos Naturais (RAPP), que deve ser enviado até 31 de março de cada ano. O CR é exigido em licitações públicas, contratos com órgãos federais e renovações de licenças ambientais. A ausência do CTF, do CR ou do RAPP pode gerar autuação, embargo e multas que variam de R$ 500 a R$ 10.000.000 (Lei 9.605/1998).",
  benefits: [
    "CTF/APP inscrito e atualizado conforme as atividades reais do empreendimento",
    "Certificado de Regularidade (CR) emitido e renovado anualmente sem interrupção",
    "RAPP declarado corretamente e no prazo (31 de março) — sem risco de multa",
    "TCFA calculada e controlada trimestralmente: janeiro, abril, julho e outubro",
    "CR disponível para licitações, contratos públicos e renovações de licenças",
    "Acompanhamento proativo: alertas de vencimento e pendências antes de virar problema",
  ],
  steps: [
    {
      title: "Diagnóstico de Enquadramento",
      description:
        "Verificação das atividades exercidas pela empresa no Anexo VIII da Lei 6.938/1981 e no sistema CTF do IBAMA para confirmar a obrigatoriedade e o porte correto (Pequeno, Médio, Grande ou Especial) — o porte define o valor da TCFA.",
      duration: "1 a 3 dias úteis",
    },
    {
      title: "Inscrição no CTF/APP",
      description:
        "Cadastro da empresa ou responsável técnico no Sistema CTF do IBAMA (ctf.ibama.gov.br), com upload de documentação comprobatória das atividades e definição das categorias de enquadramento.",
      duration: "2 a 5 dias úteis",
    },
    {
      title: "Regularização da TCFA",
      description:
        "Cálculo e pagamento das Taxas de Controle e Fiscalização Ambiental vencidas (se houver), com emissão de GRU (Guia de Recolhimento da União) e regularização de débitos anteriores para emissão do CR.",
      duration: "Conforme histórico de débitos",
    },
    {
      title: "Elaboração e Envio do RAPP",
      description:
        "Preenchimento do Relatório de Atividades Potencialmente Poluidoras no sistema RAPP do IBAMA, com dados de quantidade, forma de armazenamento, destinação e demais informações exigidas — prazo legal: 31 de março de cada ano.",
      duration: "3 a 10 dias úteis (antes de 31/03)",
    },
    {
      title: "Emissão do Certificado de Regularidade",
      description:
        "Com TCFA quitada e RAPP entregue, o CR é emitido diretamente no sistema CTF do IBAMA. Validade: até 31 de dezembro do ano corrente, com renovação automática se as obrigações estiverem em dia.",
      duration: "Imediato após regularização",
    },
    {
      title: "Gestão Contínua e Alertas",
      description:
        "Monitoramento trimestral da TCFA (vencimentos em 31/jan, 30/abr, 31/jul e 31/out), alertas para entrega do RAPP até 31 de março e suporte para atualização cadastral sempre que houver mudança de atividade.",
      duration: "Contínuo",
    },
  ],
  documents: [
    "CNPJ e contrato social atualizado da empresa",
    "Documentos do responsável legal (CPF, RG, procuração se aplicável)",
    "Descrição detalhada das atividades exercidas com enquadramento no Anexo VIII da Lei 6.938/1981",
    "Licença ambiental vigente (se houver) para vinculação ao cadastro",
    "GRU — Guia de Recolhimento da União para pagamento da TCFA trimestral",
    "Comprovantes de pagamentos anteriores da TCFA (para regularização de débitos)",
    "Relatório RAPP preenchido e protocolo de envio ao IBAMA (sistema próprio)",
    "Certificado de Regularidade (CR) emitido — para uso em licitações e contratos",
  ],
  timeline:
    "Inscrição no CTF: 3 a 7 dias úteis. Emissão do CR (empresa já inscrita e em dia): imediato. RAPP: prazo anual até 31 de março. TCFA: pagamento trimestral nos vencimentos de 31/jan, 30/abr, 31/jul e 31/out. Regularização de débitos históricos: conforme situação — em geral 5 a 15 dias úteis.",
  legalBasis: [
    "Lei Federal nº 6.938/1981 — Política Nacional do Meio Ambiente (institui o CTF e define atividades sujeitas)",
    "Lei Federal nº 10.165/2000 — institui a TCFA e o CTF/APP, altera a Lei 6.938/1981",
    "Instrução Normativa IBAMA nº 06/2013 — regulamenta o CTF/APP e o RAPP",
    "Instrução Normativa IBAMA nº 19/2021 — atualiza procedimentos do CTF e RAPP",
    "Lei Federal nº 9.605/1998 — crimes ambientais e infrações administrativas (penalidades por ausência de CTF)",
    "Portaria MMA nº 488/2023 — atualização das tabelas da TCFA",
    "Resolução CONAMA nº 237/1997 — vinculação do CTF ao licenciamento ambiental federal",
  ],
  tips: [
    "O CR é exigido em toda licitação pública federal — empresa sem CR não pode participar de contratos com o governo",
    "Atraso no RAPP gera multa de R$ 500 a R$ 10.000 — envie sempre antes de 31 de março",
    "TCFA não paga gera inscrição em dívida ativa e impede emissão do CR — controle os vencimentos trimestrais",
    "Mudança de atividade ou porte da empresa exige atualização imediata no CTF para não gerar enquadramento incorreto",
    "Pessoa física (engenheiro, biólogo, geólogo) também pode ser obrigada a se inscrever no CTF — verifique a categoria profissional",
    "O porte (Pequeno, Médio, Grande ou Especial) define o valor da TCFA trimestral — um enquadramento errado gera cobranças retroativas",
  ],
};
