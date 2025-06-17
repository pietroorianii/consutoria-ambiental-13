
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const loService: ServiceDetailData = {
  id: "lo",
  title: "Licença de Operação (LO)",
  description: "A LO autoriza o início das atividades, após verificar o cumprimento das exigências da LI.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Licença de Operação (LO) é a terceira e última fase do licenciamento ambiental trifásico, que autoriza o início das atividades operacionais do empreendimento. Esta licença confirma que todas as obras foram executadas conforme aprovado na LI e que os sistemas de controle ambiental estão funcionando adequadamente.",
  benefits: [
    "Autorização para início das operações",
    "Validação dos sistemas de controle ambiental",
    "Segurança jurídica para funcionamento",
    "Cumprimento integral do licenciamento",
    "Conformidade operacional",
    "Proteção contra autuações ambientais"
  ],
  steps: [
    {
      title: "Verificação de Obras",
      description: "Confirmação da execução das obras conforme aprovado na LI",
      duration: "1 a 2 semanas"
    },
    {
      title: "Testes e Comissionamento",
      description: "Realização de testes dos sistemas de controle ambiental",
      duration: "2 a 4 semanas"
    },
    {
      title: "Protocolo e Vistoria",
      description: "Submissão da documentação e acompanhamento de vistoria técnica",
      duration: "2 a 3 meses"
    },
    {
      title: "Emissão da LO",
      description: "Recebimento da licença e autorização para operação",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Cópia da Licença de Instalação (LI) válida",
    "Relatório de Autoavaliação comprovando o cumprimento das condicionantes da LI",
    "Laudos de comissionamento dos sistemas de controle ambiental",
    "Outorga de Direito de Uso de Recursos Hídricos (se aplicável)"
  ],
  timeline: "O prazo para análise da LO varia de 2 a 3 meses, incluindo vistoria técnica para verificação das instalações e sistemas de controle.",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025",
    "Resolução CEMA nº 107/2020",
    "Lei Federal nº 6.938/1981",
    "Lei Complementar nº 140/2011"
  ],
  tips: [
    "Execute todas as obras conforme projeto aprovado",
    "Realize testes dos sistemas antes da vistoria",
    "Mantenha documentação técnica organizada",
    "Prepare-se para renovações futuras"
  ]
};
