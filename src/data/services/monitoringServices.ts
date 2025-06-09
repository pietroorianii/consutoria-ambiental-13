
import { Beaker } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const monitoringServices: ServiceDetailData = {
  id: "monitoring",
  title: "Monitoramento e Análises Ambientais",
  description: "Acompanhamento sistemático das condições ambientais e cumprimento de condicionantes das licenças.",
  icon: Beaker,
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O monitoramento ambiental consiste no acompanhamento sistemático e contínuo das variáveis ambientais, permitindo avaliar a qualidade do meio ambiente e verificar o cumprimento das condicionantes estabelecidas nas licenças ambientais.",
  benefits: [
    "Cumprimento das condicionantes ambientais",
    "Prevenção de impactos ambientais",
    "Identificação precoce de problemas",
    "Subsidio para tomada de decisões",
    "Demonstração de responsabilidade ambiental",
    "Atendimento às exigências legais"
  ],
  steps: [
    {
      title: "Planejamento do Monitoramento",
      description: "Definição dos parâmetros, frequência e pontos de coleta conforme condicionantes",
      duration: "1 a 2 semanas"
    },
    {
      title: "Coleta de Amostras",
      description: "Execução das coletas seguindo protocolos técnicos e normas específicas",
      duration: "1 a 3 dias por campanha"
    },
    {
      title: "Análises Laboratoriais",
      description: "Análises físicas, químicas e biológicas em laboratórios credenciados",
      duration: "15 a 30 dias"
    },
    {
      title: "Elaboração de Relatórios",
      description: "Compilação dos resultados e elaboração de relatórios técnicos",
      duration: "7 a 15 dias"
    }
  ],
  documents: [
    "Plano de monitoramento ambiental",
    "Licença ambiental com condicionantes",
    "Laudos analíticos",
    "Relatórios de monitoramento",
    "Certificados de calibração dos equipamentos",
    "Registros fotográficos",
    "Cadeia de custódia das amostras"
  ],
  timeline: "O monitoramento é contínuo conforme frequência estabelecida nas condicionantes, geralmente mensal, trimestral ou semestral.",
  legalBasis: [
    "Resolução CONAMA nº 357/2005 - Águas",
    "Resolução CONAMA nº 396/2008 - Águas Subterrâneas",
    "Resolução CONAMA nº 491/2018 - Ar",
    "NBR ISO/IEC 17025 - Laboratórios",
    "Condicionantes específicas da licença"
  ],
  tips: [
    "Mantenha cronograma rigoroso de coletas",
    "Use apenas laboratórios credenciados",
    "Documente todos os procedimentos",
    "Monitore tendências dos parâmetros",
    "Mantenha equipamentos calibrados"
  ]
};
