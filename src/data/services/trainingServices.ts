
import { TreeDeciduous } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const trainingServices: ServiceDetailData = {
  id: "training",
  title: "Treinamentos e Capacitações Ambientais",
  description: "Programas de educação ambiental e capacitação técnica para equipes.",
  icon: TreeDeciduous,
  image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Os treinamentos ambientais visam capacitar profissionais e equipes para o correto manejo de aspectos ambientais, cumprimento da legislação e implementação de práticas sustentáveis no ambiente de trabalho.",
  benefits: [
    "Capacitação de equipes",
    "Redução de riscos operacionais",
    "Melhoria da conscientização ambiental",
    "Cumprimento de exigências legais",
    "Certificação profissional",
    "Cultura organizacional sustentável"
  ],
  steps: [
    {
      title: "Levantamento de Necessidades",
      description: "Identificação das demandas de capacitação específicas da empresa",
      duration: "3 a 5 dias"
    },
    {
      title: "Desenvolvimento do Programa",
      description: "Elaboração do conteúdo programático e material didático",
      duration: "1 a 2 semanas"
    },
    {
      title: "Execução do Treinamento",
      description: "Realização das atividades de capacitação presencial ou remota",
      duration: "4 a 16 horas"
    },
    {
      title: "Avaliação e Certificação",
      description: "Aplicação de avaliações e emissão de certificados",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Programa de treinamento detalhado",
    "Material didático especializado",
    "Lista de presença",
    "Avaliações de aprendizagem",
    "Certificados de participação",
    "Relatório de execução",
    "Registros fotográficos"
  ],
  timeline: "Treinamentos podem ser executados em 1 dia (8h) até programas de 1 semana, conforme complexidade.",
  legalBasis: [
    "NR-25 - Resíduos Industriais",
    "Lei nº 12.305/2010 - PNRS",
    "Resolução CONAMA aplicáveis",
    "Normas técnicas específicas",
    "Condicionantes de licenças",
    "Decreto Estadual nº 9.541/2025 (para treinamentos sobre as novas modalidades de licenciamento)",
    "Resolução CEMA nº 107/2020 (para treinamentos sobre enquadramento de atividades)"
  ],
  tips: [
    "Adapte o conteúdo ao público-alvo",
    "Use exemplos práticos do dia a dia",
    "Promova participação ativa dos colaboradores",
    "Forneça material de consulta",
    "Realize treinamentos de reciclagem"
  ]
};
