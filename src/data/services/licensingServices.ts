
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const licensingServices: ServiceDetailData = {
  id: "licensing",
  title: "Licenciamento e Autorizações Ambientais",
  description: "Serviços completos de licenciamento ambiental no Paraná, conforme Resolução CEMA nº 105/2019, INs do IAT e Decreto Estadual vigente.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O licenciamento ambiental no Paraná é regulado pela Resolução CEMA nº 105/2019 e pelas Instruções Normativas do IAT. Abrange desde a Declaração de Dispensa (DLAM/Inexigibilidade), passando pela Licença por Adesão e Compromisso (LAC) e Licença Ambiental Simplificada (LAS), até o licenciamento trifásico (LP/LI/LO) para atividades de maior impacto. A IN 11/2026 introduziu a nova classificação de atividades de Baixo Risco, simplificando ainda mais o processo para diversas atividades econômicas. Todo o processo tramita no Sistema de Gestão Ambiental (SGA) do IAT.",
  benefits: [
    "Conformidade: enquadramento correto conforme Resolução CEMA 105/2019 e INs do IAT",
    "Agilidade: processo otimizado no SGA do IAT com acompanhamento semanal",
    "Segurança Jurídica: documentação completa e correta para operação sem riscos",
    "Economia: escolha da modalidade mais adequada reduz prazos e custos",
    "Atualização: incorporação das novidades da IN 11/2026 (Baixo Risco)",
    "Prevenção: eliminação do risco de multas por operação sem licença",
    "Continuidade: gestão proativa de renovações (120 dias de antecedência)"
  ],
  steps: [
    {
      title: "Enquadramento da Atividade",
      description: "Consulta às tabelas da Resolução CEMA 105/2019 e INs vigentes para identificar modalidade (Inexigível, DLAM, LAC, LAS, LP/LI/LO ou Baixo Risco — IN 11/2026)",
      duration: "3 a 5 dias úteis"
    },
    {
      title: "Preparação Documental",
      description: "Elaboração dos estudos exigidos (RAS, EIA/RIMA, RAP) e reunião de documentação técnica com ART do responsável",
      duration: "2 a 8 semanas"
    },
    {
      title: "Protocolo no SGA do IAT",
      description: "Submissão eletrônica e acompanhamento da análise técnica junto ao IAT, com respostas a pedidos de complementação",
      duration: "15 dias a 6 meses (conforme modalidade)"
    },
    {
      title: "Emissão e Cumprimento de Condicionantes",
      description: "Recebimento da licença e orientação sobre todas as condicionantes a cumprir para manutenção da validade",
      duration: "1 a 3 dias"
    }
  ],
  documents: [
    "INEXIGIBILIDADE / DLAM (Atividades de Baixo Impacto — IN 01/2026 e IN 11/2026): Formulário de Enquadramento no SGA; Certidão de Uso e Ocupação do Solo Municipal; Croqui de localização com coordenadas geográficas; Documentos da empresa (CNPJ, Contrato Social) ou pessoa física (CPF/RG); Matrícula atualizada do imóvel; Comprovante de recolhimento da taxa (quando aplicável); Declaração de Responsabilidade assinada pelo responsável técnico.",

    "LAC — Licença por Adesão e Compromisso (Atividades Padronizáveis via SGA): Cadastro completo no SGA do IAT; Certidão de Uso e Ocupação do Solo; Comprovante de pagamento da Taxa de Controle e Fiscalização Ambiental (TCFA); Documentos empresariais (CNPJ, Contrato Social/Estatuto); Matrícula do imóvel atualizada; Termo de Adesão e Compromisso (TAC) assinado digitalmente no SGA; ART ou TRT do responsável técnico habilitado.",

    "LAS — Licença Ambiental Simplificada (Pequeno Porte — prazo: até 60 dias): Requerimento de Licenciamento Ambiental (RLA) via SGA; Certidão de Uso e Ocupação do Solo; Comprovante da TCFA; Documentos empresariais (CNPJ, Contrato Social); Matrícula do imóvel; Relatório Ambiental Simplificado (RAS) com: descrição da atividade, controles ambientais implantados, layout e planta de situação, medidas mitigadoras; ART/TRT do responsável técnico.",

    "LP — Licença Prévia (1ª fase do trifásico — viabilidade e localização): Requerimento de Licenciamento Ambiental (RLA); Certidão de Uso e Ocupação do Solo; Comprovante da TCFA; Documentos empresariais; Matrícula do imóvel ou documento de justa posse; Estudo Ambiental aplicável: EIA/RIMA (grande porte), RAS (médio porte) ou RAP; Certidão Negativa de Débitos Ambientais do empreendedor junto ao IAT; Comprovante de publicação do pedido de licença (Diário Oficial e jornal local); ART/TRT do responsável pelo estudo ambiental.",

    "LI — Licença de Instalação (2ª fase — autorização para construir/implantar): Cópia da LP válida; Comprovação do cumprimento integral das condicionantes da LP; Planos, Programas e Projetos exigidos (PCA, PGRS, PGRSS, PGRCC, Plano de Monitoramento); Projeto Executivo detalhado das obras e instalações; Comprovante de publicação do pedido de LI; Outorga de Recursos Hídricos (se houver captação ou lançamento — integração com IN 09/2026); Certidão de Uso e Ocupação atualizada (se houver alteração de projeto).",

    "LO — Licença de Operação (3ª fase — autorização para operar): Cópia da LI válida; Relatório de Autoavaliação comprovando cumprimento das condicionantes da LI; Laudos de comissionamento dos sistemas de controle de emissões, efluentes e resíduos; Outorga de Direito de Uso de Recursos Hídricos (captação/lançamento — conforme IN 09/2026); Plano de Gerenciamento de Resíduos Sólidos (PGRS) aprovado e em execução; Relatórios de monitoramento ambiental iniciais; ART/TRT do responsável técnico pela operação.",

    "MODALIDADES DE REGULARIZAÇÃO (LASR, LIR, LOR — para empreendimentos já instalados sem licença): Todos os documentos das fases correspondentes; Cronograma de regularização com metas e prazos; Relatório de passivo ambiental identificado; Plano de Adequação Ambiental (PAA) com medidas corretivas e compensatórias; Comprovante de Cadastro Ambiental Rural (CAR) quando exigível."
  ],
  timeline: "DLAM/Inexigibilidade: emissão imediata a 15 dias. LAC: emissão imediata via SGA. LAS: até 60 dias corridos. LP: 4 a 8 meses. LI: 2 a 6 meses. LO: 2 a 4 meses. Atividades de Baixo Risco (IN 11/2026): processo simplificado com prazo reduzido.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Critérios e procedimentos para o licenciamento ambiental estadual no PR",
    "Resolução CONAMA nº 237/1997 — Diretrizes federais para LP, LI e LO",
    "Resolução CONAMA nº 01/1986 — Avaliação de Impacto Ambiental e EIA/RIMA",
    "IN IAT 11/2026 — Nova classificação de atividades de Baixo Risco",
    "IN IAT 09/2026 — Integração entre licenciamento ambiental e outorga de captação subterrânea",
    "IN IAT 06/2026 — Dispensa de licenciamento para pavimentação urbana",
    "IN IAT 01/2026 — Inexigibilidade para empreendimentos agrícolas específicos",
    "IN IAT 65/2025 — Critérios para licenciamento industrial",
    "IN IAT 60/2025 — Licenciamento de atividades de ensino e pesquisa",
    "IN IAT 04/2025 — Procedimentos para licenciamento de movimentação de solo",
    "Lei Federal nº 6.938/1981 — Política Nacional do Meio Ambiente",
    "Lei Complementar nº 140/2011 — Competências em matéria ambiental"
  ],
  tips: [
    "Consulte sempre as INs específicas do IAT vigentes para sua atividade — a IN 11/2026 pode simplificar significativamente seu processo",
    "Verifique se sua atividade se enquadra como Inexigível (IN 01/2026) antes de iniciar qualquer processo",
    "Utilize o SGA do IAT para todos os processos eletrônicos — acelera a análise e facilita o acompanhamento",
    "Inicie o processo de renovação da LO com pelo menos 120 dias de antecedência do vencimento",
    "A integração outorga-licenciamento (IN 09/2026) pode ser aproveitada para unificar processos e reduzir prazos",
    "Mantenha todas as condicionantes documentadas e em cumprimento — é o principal critério para renovação"
  ]
};
