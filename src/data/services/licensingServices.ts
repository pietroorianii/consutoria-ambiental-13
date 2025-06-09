
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const licensingServices: ServiceDetailData = {
  id: "licensing",
  title: "Licenciamento e Autorizações Ambientais",
  description: "Obtenção de licenças e autorizações ambientais para regularização e operação legal de empreendimentos.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O licenciamento ambiental é um procedimento administrativo pelo qual o órgão ambiental competente licencia a localização, instalação, ampliação e operação de empreendimentos e atividades utilizadoras de recursos ambientais consideradas efetiva ou potencialmente poluidoras ou daquelas que, sob qualquer forma, possam causar degradação ambiental.",
  benefits: [
    "Conformidade legal com a legislação ambiental",
    "Segurança jurídica para operação do empreendimento",
    "Acesso a financiamentos e investimentos",
    "Melhoria da imagem corporativa",
    "Redução de riscos de multas e penalidades",
    "Competitividade no mercado"
  ],
  steps: [
    {
      title: "Licença Prévia (LP)",
      description: "Aprovação da localização e concepção do empreendimento, atestando a viabilidade ambiental",
      duration: "4 a 6 meses"
    },
    {
      title: "Licença de Instalação (LI)",
      description: "Autorização para iniciar a construção do empreendimento de acordo com as especificações aprovadas",
      duration: "4 a 6 meses"
    },
    {
      title: "Licença de Operação (LO)",
      description: "Autorização para funcionamento do empreendimento após verificação do cumprimento das condicionantes",
      duration: "4 a 6 meses"
    },
    {
      title: "Renovação da LO",
      description: "Processo de renovação da licença de operação antes do vencimento",
      duration: "3 a 4 meses"
    }
  ],
  documents: [
    "Requerimento padrão",
    "Projeto básico ou executivo",
    "Estudos ambientais (conforme porte e potencial poluidor)",
    "Certidões municipais",
    "Outorga de uso da água (quando aplicável)",
    "Anuência de órgãos específicos",
    "Comprovação de propriedade ou posse do terreno"
  ],
  timeline: "O processo completo de licenciamento pode levar de 8 a 18 meses, dependendo da complexidade do empreendimento e do órgão licenciador.",
  legalBasis: [
    "Lei nº 6.938/1981 - Política Nacional do Meio Ambiente",
    "Resolução CONAMA nº 237/1997",
    "Lei Complementar nº 140/2011",
    "Legislação estadual e municipal específica"
  ],
  tips: [
    "Inicie o processo com antecedência adequada",
    "Mantenha toda documentação organizada e atualizada",
    "Acompanhe os prazos das condicionantes",
    "Considere a contratação de consultoria especializada",
    "Mantenha diálogo aberto com os órgãos ambientais"
  ]
};
