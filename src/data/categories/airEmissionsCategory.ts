import React from "react";
import { Wind } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const airEmissionsCategory: ServiceCategoryData = {
  title: "Controle de Emissões Atmosféricas",
  description: "Cadastro de fontes fixas de emissão, elaboração de Plano de Automonitoramento e declarações periódicas de emissões atmosféricas — via SGADEA (Sistema de Gestão de Declaração de Emissões Atmosféricas do IAT). Obrigação contínua vinculada à Licença de Operação.",
  icon: React.createElement(Wind, { className: "h-8 w-8 text-eco-blue" }),
  image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Plano de Automonitoramento Atmosférico",
      description: "Elaboração do Plano de Automonitoramento de fontes fixas de emissão (chaminés, caldeiras, fornos, dutos). Define parâmetros, frequência e metodologia de medição conforme condicionantes de LO.",
      detailId: "air_emissions",
    },
    {
      title: "Cadastro de Fontes Fixas no SGADEA",
      description: "Cadastramento de todas as fontes fixas de emissão atmosférica do empreendimento no sistema SGADEA do IAT.",
      detailId: "air_emissions",
    },
    {
      title: "Declarações Periódicas de Emissões — SGADEA",
      description: "Envio periódico (mensal, trimestral ou anual conforme condicionante) dos resultados de medição de emissões no SGADEA. Atraso gera auto de infração automático.",
      detailId: "air_emissions",
    },
    {
      title: "Medições de Emissões em Fontes Fixas",
      description: "Campanhas de medição de emissões em chaminés e fontes fixas com laboratório credenciado INMETRO (NBR ISO/IEC 17025). Laudo com cadeia de custódia.",
      detailId: "air_emissions",
    },
    {
      title: "Inventário de Fontes de Emissão",
      description: "Levantamento e caracterização de todas as fontes fixas de emissão do empreendimento para instrução do Plano de Automonitoramento e cadastro no SGADEA.",
      detailId: "air_emissions",
    },
    {
      title: "Laudos de Emissão para Condicionantes de Licença",
      description: "Elaboração de laudos técnicos de emissões atmosféricas para atendimento de condicionantes de LP, LI e LO e instrução de processos de renovação.",
      detailId: "air_emissions",
    },
  ],
};
