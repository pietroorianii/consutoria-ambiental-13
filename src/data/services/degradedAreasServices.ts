
import { ServiceDetailData } from '../types/serviceTypes';
import { Mountain } from 'lucide-react';

export const degradedAreasServices: ServiceDetailData = {
  id: 'degraded_areas',
  title: 'Recuperação de Áreas e Passivos Ambientais',
  description: 'Soluções completas para a recuperação de áreas e resolução de passivos ambientais, transformando problemas em oportunidades.',
  icon: Mountain,
  image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000&h=600',
  whatIs: 'A gestão de passivos ambientais é um campo complexo que trata da identificação, avaliação e resolução de danos ambientais históricos, como a contaminação do solo e da água. Na L&P, abordamos este desafio através de três frentes principais: Gerenciamento de Áreas Contaminadas (GAC) - Um processo técnico detalhado, desde a investigação inicial até a remediação, para reabilitar locais impactados por atividades poluidoras e garantir que se tornem seguros para o uso futuro. Plano de Recuperação de Áreas Degradadas (PRAD) - Um estudo e projeto técnico, exigido por lei, para restaurar áreas que sofreram degradação, como supressão de vegetação, erosão ou atividades de mineração. Termo de Ajustamento de Conduta (TAC) - Atuamos como seu parceiro técnico e jurídico na negociação e cumprimento de acordos com órgãos ambientais ou Ministério Público, transformando uma autuação ou processo em um plano de ação viável para corrigir irregularidades e reparar danos.',
  benefits: [
    'Resolução Definitiva de Passivos: Soluciona problemas de contaminação, eliminando riscos à saúde, passivos legais e a desvalorização de ativos imobiliários.',
    'Viabilidade para Novos Projetos: A elaboração e aprovação de um PRAD é, muitas vezes, um passo obrigatório para obter licenças ambientais para novos empreendimentos que envolvam supressão de vegetação.',
    'Segurança Jurídica: O cumprimento de um TAC negociado adequadamente pode extinguir a punibilidade administrativa e criminal, permitindo que a empresa se regularize e opere com tranquilidade.',
    'Valorização de Ativos: Um imóvel com passivo ambiental resolvido ou uma área degradada em processo de recuperação tem seu valor de mercado significativamente aumentado.',
    'Fortalecimento da Reputação: Ações proativas de recuperação e remediação demonstram o compromisso da empresa com a sustentabilidade e a responsabilidade socioambiental.',
  ],
  steps: [
    { title: 'Diagnóstico e Investigação (GAC/Passivos)', description: 'Realizamos a Avaliação Preliminar e a Investigação Confirmatória para identificar e comprovar a existência de contaminação.', duration: '30-60 dias' },
    { title: 'Detalhamento e Plano de Ação (GAC/PRAD)', description: 'Conduzimos a Investigação Detalhada e a Avaliação de Risco (no GAC) ou o Diagnóstico Ambiental (no PRAD) para criar um projeto técnico detalhado, seja um Plano de Intervenção para remediação ou um projeto de recuperação.', duration: '45-90 dias' },
    { title: 'Negociação e Assessoria (TAC)', description: 'Oferecemos todo o suporte técnico e jurídico para negociar as melhores cláusulas, metas e prazos junto às autoridades, formalizando um acordo exequível.', duration: '3-12 meses' },
    { title: 'Execução e Gerenciamento', description: 'Gerenciamos a execução dos planos de remediação ou recuperação, coordenando fornecedores e garantindo o cumprimento de todas as etapas.', duration: 'Variável' },
    { title: 'Monitoramento e Relatórios', description: 'Realizamos o monitoramento contínuo da área em recuperação ou remediação e elaboramos todos os relatórios técnicos exigidos para comprovar o sucesso do projeto junto aos órgãos competentes.', duration: '2-5 anos' },
  ],
  documents: [
    'Histórico de ocupação e atividades na área.',
    'Matrícula atualizada do imóvel.',
    'Laudos de análises químicas de solo e água subterrânea.',
    'Levantamentos topográficos e de caracterização da vegetação.',
    'Cópias de autos de infração ou processos judiciais/administrativos, se aplicável.',
  ],
  timeline: 'Os prazos são altamente variáveis. Projetos de GAC podem durar de 6 meses (investigação) a vários anos (remediação e monitoramento). PRADs geralmente exigem um monitoramento mínimo de 2 a 5 anos. A negociação de um TAC pode levar de 3 a 12 meses.',
  legalBasis: [
    'Resolução CONAMA nº 420/2009 (Diretrizes para GAC).',
    'Lei Federal nº 12.651/2012 (Novo Código Florestal).',
    'Lei Federal nº 9.605/1998 (Lei de Crimes Ambientais).',
    'Decisões Normativas e Instruções Técnicas de órgãos estaduais (CETESB, IAT, etc.).',
    'Portaria IAT Nº 190/2024, que estabelece diretrizes para o Programa de Regularização Ambiental (PRA) no Paraná.',
    'Termos de Ajustamento de Conduta (TAC) conforme legislação estadual.',
  ],
  tips: [
    'Proatividade: Ao suspeitar de uma contaminação ou receber uma notificação, agir rapidamente pode reduzir drasticamente os custos e a complexidade da solução.',
    'Due Diligence: Antes de adquirir um imóvel industrial ou com histórico de risco, realize uma auditoria de passivo ambiental (Due Diligence). É o melhor investimento para evitar problemas futuros.',
    'Veja o TAC como uma Oportunidade: Um Termo de Ajustamento de Conduta não é apenas uma punição, mas uma oportunidade de regularizar sua situação de forma planejada e com segurança jurídica.',
  ]
};
