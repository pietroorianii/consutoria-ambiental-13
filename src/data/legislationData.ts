
import { Factory, Building2, Leaf, Droplets } from "lucide-react";
import React from "react";
import { LegislationCategory } from "@/components/legislation/LegislationCard";

export const legislationCategories: LegislationCategory[] = [
  {
    title: "Indústrias",
    description: "Legislações ambientais aplicáveis ao setor industrial, incluindo normas federais, estaduais e municipais.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Factory className="h-10 w-10 text-eco-green" />,
    items: [
      "Política Nacional do Meio Ambiente",
      "Limites de emissões atmosféricas",
      "Gestão de resíduos industriais",
      "Licenciamento para atividades industriais"
    ],
    link: "/legislation/industry"
  },
  {
    title: "Construção Civil",
    description: "Normas e leis ambientais específicas para o setor da construção civil, desde o licenciamento até a gestão de resíduos.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Building2 className="h-10 w-10 text-eco-blue" />,
    items: [
      "Gestão de resíduos da construção civil",
      "Avaliação de impactos ambientais",
      "Licenciamento de obras",
      "Normas da ABNT para construção sustentável"
    ],
    link: "/legislation/construction"
  },
  {
    title: "Agricultura",
    description: "Legislações aplicáveis ao setor agrícola, incluindo normas sobre uso do solo, recursos hídricos e agrotóxicos.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Leaf className="h-10 w-10 text-eco-green-dark" />,
    items: [
      "Código Florestal",
      "Legislação de agrotóxicos",
      "Outorga para uso de recursos hídricos",
      "Área de Preservação Permanente e Reserva Legal"
    ],
    link: "/legislation/agriculture"
  },
  {
    title: "Recursos Hídricos",
    description: "Normas e regulamentações para gestão, uso e preservação dos recursos hídricos, incluindo outorgas e enquadramento.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=500",
    icon: <Droplets className="h-10 w-10 text-eco-blue-dark" />,
    items: [
      "Política Nacional de Recursos Hídricos",
      "Classificação de corpos d'água",
      "Padrões de lançamento de efluentes",
      "Outorga de direito de uso da água"
    ],
    link: "/legislation/water"
  }
];
