import React from "react";
import { ShieldCheck } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const complianceCategory: ServiceCategoryData = {
  title: "Gestão de Conformidade Ambiental",
  description: "Manutenção da conformidade legal após a licença: renovações de LO e outorgas, envio de relatórios periódicos via SGA IR, regularização ambiental e gestão de TAC. O não cumprimento gera embargo, multa e cassação da licença.",
  icon: React.createElement(ShieldCheck, { className: "h-8 w-8 text-eco-green" }),
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Envio de Relatórios Periódicos — SGA IR",
      description: "Elaboração e envio de todos os relatórios exigidos nas condicionantes de licença via SGA IR (Sistema de Gestão — Informes e Relatórios do IAT). Inclui relatórios de efluentes, resíduos e automonitoramento.",
      detailId: "compliance",
    },
    {
      title: "Renovação de Licença de Operação (LO)",
      description: "Gestão completa do processo de renovação de LO. Protocolar com mínimo de 120 dias de antecedência para evitar operação irregular. Inclui atualização de condicionantes.",
      detailId: "compliance",
    },
    {
      title: "Renovação de Outorga de Recursos Hídricos",
      description: "Gestão dos vencimentos e renovação de outorgas de captação, lançamento e barragens no SIGARH. Outorga vencida = captação irregular = risco de embargo.",
      detailId: "compliance",
    },
    {
      title: "Regularização Ambiental — LASR / LIR / LOR",
      description: "Condução do processo de regularização para empreendimentos em situação irregular via modalidades LASR, LIR e LOR, vinculados ao Programa de Regularização Ambiental (PRA — Portaria IAT nº 190/2024).",
      detailId: "compliance",
    },
    {
      title: "TC e TAC — Termo de Compromisso e Ajustamento",
      description: "Elaboração e gestão de Termos de Compromisso e Termos de Ajustamento de Conduta com o IAT. Negociação de cronograma factível e acompanhamento do cumprimento.",
      detailId: "compliance",
    },
    {
      title: "Mapeamento e Gestão de Condicionantes",
      description: "Levantamento de todas as condicionantes de licenças e outorgas vigentes, criação de calendário de conformidade com alertas de vencimento e relatórios.",
      detailId: "compliance",
    },
  ],
};
