
import React from "react";
import { Mountain } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const degradedAreasCategory: ServiceCategoryData = {
  title: "Recuperação de Áreas e Passivos Ambientais",
  description: "Soluções completas para a recuperação de áreas e resolução de passivos ambientais, transformando problemas em oportunidades.",
  icon: React.createElement(Mountain, { className: "h-8 w-8 text-eco-accent-orange" }),
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    { title: "GAC (Investigação e Remediação de Áreas Contaminadas)", description: "Ciclo completo, da avaliação preliminar ao monitoramento pós-remediação." },
    { title: "PRAD (Elaboração e Execução de Planos de Recuperação)", description: "Projetos técnicos para restaurar ecossistemas e atender à legislação." },
    { title: "TAC (Assessoria para Termos de Ajustamento de Conduta)", description: "Suporte técnico e jurídico para negociação e cumprimento de acordos." },
    { title: "Auditoria e Investigação de Passivos Ambientais", description: "Diagnóstico completo para processos de fusão, aquisição (M&A) e auditorias." },
  ]
};
