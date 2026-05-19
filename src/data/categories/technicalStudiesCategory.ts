import React from "react";
import { FileText } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const technicalStudiesCategory: ServiceCategoryData = {
  title: "Estudos e Documentos Técnicos",
  description: "Elaboração de todos os instrumentos técnicos exigidos no licenciamento ambiental: estudos de impacto, planos de gestão de resíduos, planos de controle e recuperação ambiental.",
  icon: React.createElement(FileText, { className: "h-8 w-8 text-eco-blue" }),
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "EIA — Estudo de Impacto Ambiental",
      description: "Estudo completo de impactos para empreendimentos de significativo impacto, exigido na LP. Inclui diagnóstico ambiental, análise de alternativas e programas de mitigação. Base: Res. CONAMA 01/1986 + IN IAT nº 13/2025.",
      detailId: "technical_studies",
    },
    {
      title: "RIMA — Relatório de Impacto ao Meio Ambiente",
      description: "Versão pública e de linguagem acessível do EIA. Obrigatório quando o EIA é exigido.",
      detailId: "technical_studies",
    },
    {
      title: "RAS — Relatório Ambiental Simplificado",
      description: "Diagnóstico ambiental simplificado para LAS e LP de pequeno porte. Conteúdo definido nas INs setoriais do IAT.",
      detailId: "technical_studies",
    },
    {
      title: "MCE — Memorial de Caracterização do Empreendimento",
      description: "Documento técnico detalhado da atividade — processos, insumos, efluentes e resíduos. Exigido em LAC, LAS e LP (ex: IN IAT nº 65/2025 para indústria).",
      detailId: "technical_studies",
    },
    {
      title: "PGRS — Plano de Gerenciamento de Resíduos Sólidos",
      description: "Inventário, classificação (NBR 10004), acondicionamento, coleta, transporte e destinação de resíduos. Condicionante de LI/LO para indústria e comércio. Base: Lei nº 12.305/2010.",
      detailId: "technical_studies",
    },
    {
      title: "PGRSS — Plano de Gerenciamento de RSS",
      description: "Gestão de resíduos de serviços de saúde (hospitais, clínicas, laboratórios). Condicionante de LI/LO. Base: RDC ANVISA nº 222/2018.",
      detailId: "technical_studies",
    },
    {
      title: "PCA — Plano de Controle Ambiental",
      description: "Medidas de controle ambiental durante a fase de instalação do empreendimento. Condicionante obrigatória da LI em obras.",
      detailId: "technical_studies",
    },
    {
      title: "PRAD — Projeto de Recuperação de Áreas Degradadas",
      description: "Projeto para recuperação de áreas degradadas ou alteradas. Exigido em TAC, condicionantes de licença e regularização ambiental. Base: Portaria IAT nº 170/2020.",
      detailId: "technical_studies",
    },
    {
      title: "PRF — Plano de Resgate da Flora",
      description: "Exigido em toda autorização de supressão de vegetação nativa. Inclui protocolo de resgate, transplante e monitoramento. Base: IN IAT nº 15/2025.",
      detailId: "technical_studies",
    },
    {
      title: "Plano de Automonitoramento Ambiental",
      description: "Monitoramento de efluentes líquidos, resíduos sólidos e parâmetros definidos nas condicionantes de LO. Envio periódico de resultados via SGA IR.",
      detailId: "technical_studies",
    },
  ],
};
