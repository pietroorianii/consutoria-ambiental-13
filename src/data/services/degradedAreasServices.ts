
import { ServiceDetailData } from '../types/serviceTypes';
import { Mountain } from 'lucide-react';

export const degradedAreasServices: ServiceDetailData = {
  id: 'degraded_areas',
  title: 'Recuperação de Áreas e Passivos Ambientais',
  description: 'Soluções completas para a recuperação de áreas e resolução de passivos ambientais, transformando problemas em oportunidades.',
  icon: Mountain,
  image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000&h=600',
  whatIs: 'O Gerenciamento de Áreas Contaminadas (GAC) é um conjunto de medidas para identificar, avaliar e reabilitar áreas com contaminação no solo ou nas águas subterrâneas.  O Plano de Recuperação de Áreas Degradadas (PRAD) é um estudo técnico exigido por lei para empreendimentos que causam supressão de vegetação ou degradação ambiental. O Termo de Ajustamento de Conduta (TAC) é um acordo firmado com o Ministério Público ou órgãos ambientais para que uma empresa corrija uma irregularidade ou compense um dano ambiental.',
  benefits: [
    'Resolução de Passivos Ambientais: Soluciona problemas de contaminação, evitando a desvalorização do imóvel e riscos à saúde.',
    'Viabilidade Ambiental de Projetos: O PRAD é essencial para obter licenças para novos empreendimentos.',
    'Segurança Jurídica: O cumprimento do TAC extingue a punibilidade administrativa e, em muitos casos, criminal.',
    'Valorização do Ativo: A recuperação de uma área degradada ou a remediação de uma contaminação agrega valor ao imóvel.',
    'Responsabilidade Corporativa: Demonstra o compromisso da empresa com a reparação e a preservação do meio ambiente.',
  ],
  steps: [
    { title: 'GAC - Avaliação Preliminar e Investigação', description: 'Identificação de fontes de contaminação e investigação para confirmar e delimitar a área afetada.', duration: '30-60 dias' },
    { title: 'GAC - Investigação Detalhada e Remediação', description: 'Quantificação da contaminação, avaliação de risco e elaboração de um plano de intervenção/remediação.', duration: '60-120 dias' },
    { title: 'PRAD - Diagnóstico e Projeto', description: 'Caracterização da área degradada e elaboração de um projeto técnico com as melhores técnicas de recuperação (plantio de mudas, bioengenharia, etc.).', duration: '30-60 dias' },
    { title: 'PRAD - Execução e Monitoramento', description: 'Implementação das ações de recuperação e monitoramento da eficácia ao longo do tempo.', duration: '6-36 meses' },
    { title: 'TAC - Negociação e Formalização', description: 'Assessoria técnica e jurídica para negociar as cláusulas, metas e prazos do acordo com as autoridades.', duration: '30-90 dias' },
  ],
  documents: [
    'Laudos de análise de solo e água.',
    'Levantamentos topográficos e de flora.',
    'Projetos de engenharia e remediação.',
    'Autos de infração e processos administrativos.',
    'Cronogramas de execução física e financeira.',
  ],
  timeline: 'Varia conforme a complexidade do caso',
  legalBasis: [
    'Resolução CONAMA nº 420/2009 - Gerenciamento de Áreas Contaminadas.',
    'Lei nº 12.651/2012 - Código Florestal (sobre PRAD).',
    'Lei nº 9.605/1998 - Lei de Crimes Ambientais.',
    'Instruções Normativas e Portarias de órgãos ambientais estaduais (IAT, CETESB, etc.).',
  ],
  tips: [
    'Realize uma avaliação preliminar detalhada para dimensionar corretamente o problema.',
    'Considere técnicas de fitorremediação para reduzir custos em casos específicos.',
    'Documente todo o processo com relatórios fotográficos para evidenciar o progresso.',
    'Mantenha comunicação constante com os órgãos ambientais durante o processo de recuperação.',
  ]
};
