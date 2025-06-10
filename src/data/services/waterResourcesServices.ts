
import { ServiceDetailData } from '../types/serviceTypes';
import { Waves } from 'lucide-react';

export const waterResourcesServices: ServiceDetailData = {
  id: 'water_resources',
  title: 'Outorga e Recursos Hídricos',
  description: 'Garanta o direito de uso da água e gerencie este recurso vital de forma sustentável e em conformidade com a lei.',
  icon: Waves,
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000&h=600',
  whatIs: 'A Outorga de Uso de Recursos Hídricos é o ato administrativo pelo qual o Poder Público (União, Estados ou Distrito Federal) concede ao solicitante (outorgado) o direito de usar os recursos hídricos por um determinado período, com finalidade e condições específicas. O gerenciamento de recursos hídricos envolve um conjunto de ações destinadas a regular o uso, controle e proteção das águas, garantindo seu uso múltiplo e a sustentabilidade.',
  benefits: [
    'Segurança Hídrica: Garante o direito de uso da água, essencial para a continuidade das operações.',
    'Conformidade Legal: Evita multas, embargos e outras sanções por uso irregular dos recursos hídricos.',
    'Acesso a Financiamentos: Muitas instituições financeiras exigem a outorga para conceder crédito.',
    'Gestão Sustentável: Promove o uso consciente da água, melhorando a imagem da empresa.',
    'Prevenção de Conflitos: Regula o uso compartilhado das águas, evitando disputas com outros usuários.',
  ],
  steps: [
    { title: 'Diagnóstico e Coleta de Dados', description: 'Levantamento das necessidades hídricas do empreendimento e das características da fonte de água.', duration: '5-10 dias' },
    { title: 'Estudos Hidrogeológicos/Hidrológicos', description: 'Elaboração de estudos técnicos, como testes de vazão e análise da disponibilidade hídrica.', duration: '15-30 dias' },
    { title: 'Protocolo e Acompanhamento', description: 'Submissão do requerimento junto ao órgão ambiental competente (ANA, IAT, etc.) e acompanhamento técnico do processo.', duration: '60-180 dias' },
    { title: 'Cumprimento de Condicionantes', description: 'Suporte para atender às exigências estabelecidas na portaria de outorga, como a instalação de hidrômetros.', duration: '30-60 dias' },
    { title: 'Renovação e Regularização', description: 'Gerenciamento dos prazos e processos para renovação da outorga.', duration: 'Contínuo' },
  ],
  documents: [
    'Formulários específicos do órgão ambiental.',
    'Documentos de propriedade ou posse do imóvel.',
    'CNPJ ou CPF do requerente.',
    'Estudos de vazão e disponibilidade hídrica.',
    'Projetos técnicos da captação e uso da água.',
  ],
  timeline: '3 a 6 meses',
  legalBasis: [
    'Lei nº 9.433/1997 - Política Nacional de Recursos Hídricos.',
    'Resoluções da Agência Nacional de Águas (ANA).',
    'Legislações e decretos estaduais específicos (ex: Leis de Recursos Hídricos Estaduais).',
  ],
  tips: [
    'Inicie o processo com antecedência, pois os prazos podem ser longos.',
    'Mantenha medidores de vazão instalados e funcionando.',
    'Acompanhe as condicionantes e renove antes do vencimento.',
    'Considere estudos de reuso e eficiência hídrica para reduzir custos.',
  ]
};
