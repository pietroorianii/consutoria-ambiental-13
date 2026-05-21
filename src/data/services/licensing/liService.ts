
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../../types/serviceTypes";

export const liService: ServiceDetailData = {
  id: "li",
  title: "Licença de Instalação (LI)",
  description: "A LI autoriza o início da construção e instalação do empreendimento conforme os projetos aprovados.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Licença de Instalação (LI) é a segunda fase do licenciamento ambiental trifásico, que autoriza o início da construção e instalação do empreendimento conforme os projetos aprovados na Licença Prévia. Esta etapa valida o cumprimento das condicionantes da LP e aprova os projetos executivos e programas ambientais.",
  benefits: [
    "Autorização para início das obras",
    "Validação dos projetos executivos",
    "Aprovação dos programas ambientais",
    "Segurança jurídica para construção",
    "Cumprimento das condicionantes da LP",
    "Preparação para fase de operação"
  ],
  steps: [
    {
      title: "Verificação de Condicionantes",
      description: "Análise do cumprimento de todas as condicionantes da LP",
      duration: "1 a 2 semanas"
    },
    {
      title: "Elaboração de Programas",
      description: "Desenvolvimento dos planos e programas ambientais exigidos",
      duration: "4 a 8 semanas"
    },
    {
      title: "Protocolo e Análise",
      description: "Submissão da documentação e acompanhamento da análise",
      duration: "3 a 4 meses"
    },
    {
      title: "Emissão da LI",
      description: "Recebimento da licença e autorização para início das obras",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Cópia da Licença Prévia (LP) válida",
    "Comprovação do cumprimento de todas as condicionantes da LP",
    "Planos, Programas e Projetos Ambientais detalhados (PCA, PGRS, etc.)",
    "Comprovante de publicação do pedido da LI"
  ],
  timeline: "O prazo para análise da LI varia de 3 a 4 meses, dependendo da complexidade dos programas ambientais e do cumprimento das condicionantes da LP.",
  legalBasis: [
    "Lei Estadual nº 22.252/2024 — normas gerais de licenciamento no Paraná",
    "Decreto Estadual nº 9.541/2025 — regulamentação da Lei 22.252/2024",
    "Lei Federal nº 6.938/1981",
    "Lei Complementar nº 140/2011"
  ],
  tips: [
    "Cumpra todas as condicionantes da LP antes de protocolar",
    "Desenvolva programas ambientais detalhados",
    "Mantenha comunicação constante com o órgão ambiental",
    "Prepare-se para vistorias técnicas"
  ]
};
