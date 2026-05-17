
import { ServiceDetailData } from '../types/serviceTypes';
import { Waves } from 'lucide-react';

export const waterResourcesServices: ServiceDetailData = {
  id: 'water_resources',
  title: 'Outorga e Recursos Hídricos',
  description: 'Garanta o direito de uso da água e gerencie este recurso vital de forma sustentável e em conformidade com a lei.',
  icon: Waves,
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000&h=600',
  whatIs: 'A Outorga de Direito de Uso de Recursos Hídricos é o instrumento legal pelo qual o Poder Público (seja a Agência Nacional de Águas - ANA, ou órgãos estaduais como o IAT no Paraná) autoriza o usuário a captar ou fazer uso de águas superficiais (rios, lagos) ou subterrâneas (poços artesianos). Este ato administrativo é fundamental para regular o uso da água, garantindo que seja feito de forma controlada, sustentável e sem conflitos entre os diversos usuários de uma mesma bacia hidrográfica. Na SOLARI Soluções Ambientais, nosso serviço vai além da simples obtenção da licença. Oferecemos uma gestão completa dos recursos hídricos para sua empresa, envolvendo desde os estudos técnicos iniciais de disponibilidade hídrica até o monitoramento contínuo exigido pelas condicionantes, assegurando segurança hídrica e total conformidade legal para suas operações.',
  benefits: [
    'Segurança Jurídica e Operacional: Garante o direito legal de uso da água, um insumo essencial para a continuidade de atividades industriais, agrícolas e de abastecimento, evitando o risco de embargos e paralisações.',
    'Conformidade e Prevenção de Multas: Manter a outorga regularizada é uma obrigação legal. Nosso serviço assegura o atendimento a todas as normas, prevenindo pesadas multas por captação ou uso irregular.',
    'Acesso a Crédito e Financiamentos: Instituições financeiras e programas de fomento frequentemente exigem a outorga como pré-requisito para a liberação de recursos.',
    'Uso Racional e Redução de Custos: Nossos estudos e planos de gerenciamento identificam oportunidades para o uso mais eficiente da água, o que pode levar a uma significativa redução nos custos operacionais.',
    'Prevenção de Conflitos: Ao ter seu uso regulamentado, sua empresa se protege contra potenciais conflitos pelo uso da água com outros usuários na mesma bacia hidrográfica.',
    'Valorização da Imagem Corporativa: Uma gestão hídrica responsável e sustentável fortalece a imagem da empresa perante clientes, investidores e a sociedade.',
  ],
  steps: [
    { title: 'Diagnóstico Hídrico', description: 'Levantamento completo das demandas de água do empreendimento, caracterização das fontes de captação e enquadramento na legislação pertinente.', duration: '5-10 dias' },
    { title: 'Estudos Técnicos', description: 'Elaboração de estudos de disponibilidade hídrica, testes de vazão em poços, e outros documentos técnicos necessários para fundamentar o pedido.', duration: '15-30 dias' },
    { title: 'Protocolo e Acompanhamento', description: 'Montagem do processo, protocolo junto ao órgão ambiental competente (ANA, IAT, etc.) e acompanhamento técnico semanal de toda a análise.', duration: '60-180 dias' },
    { title: 'Gestão de Condicionantes', description: 'Após a emissão da outorga, oferecemos suporte completo para o cumprimento de todas as exigências, como instalação de hidrômetros e envio de relatórios de consumo.', duration: '30-60 dias' },
    { title: 'Renovação e Regularização', description: 'Gerenciamos os prazos de validade de sua outorga e iniciamos o processo de renovação com a antecedência necessária para garantir a continuidade do seu direito de uso.', duration: 'Contínuo' },
  ],
  documents: [
    'Requerimento via Sistema SIGARH (Sistema Integrado de Gestão de Águas e Recursos Hídricos).',
    'Documentos de identificação (CPF/CNPJ) do requerente.',
    'Matrícula do imóvel ou documento de posse/arrendamento.',
    'ART (Anotação de Responsabilidade Técnica) do profissional responsável.',
    'Estudos técnicos específicos (teste de bombeamento, análise de água, etc.).',
    'Declaração de Carga Poluidora, se aplicável para lançamentos de efluentes.',
  ],
  timeline: 'O prazo para análise e emissão de uma outorga pode variar de 60 a 180 dias, a depender da complexidade do uso, da bacia hidrográfica em questão e da demanda do órgão ambiental.',
  legalBasis: [
    'Lei nº 9.433/1997 - Política Nacional de Recursos Hídricos.',
    'Resoluções da Agência Nacional de Águas (ANA).',
    'Legislação Estadual de Recursos Hídricos (ex: Leis e Decretos do IAT no Paraná).',
    'Normativas do IAT para uso de recursos hídricos no Paraná.',
    'Decreto Estadual nº 9.541/2025, no que tange às outorgas vinculadas ao licenciamento.',
  ],
  tips: [
    'Sempre inicie o processo de outorga ou renovação com a máxima antecedência.',
    'Um bom estudo técnico de vazão e disponibilidade hídrica é o fator mais crítico para o sucesso do processo.',
    'Mantenha a documentação do imóvel e da empresa sempre regularizada para evitar pendências.',
  ]
};
