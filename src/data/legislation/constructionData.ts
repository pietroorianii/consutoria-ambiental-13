
import { Building2 } from "lucide-react";
import { LegislationCategory } from "./types";

export const constructionLegislation: LegislationCategory = {
  title: "Construção Civil",
  description: "Normas e leis ambientais específicas para o setor da construção civil, desde o licenciamento até a gestão de resíduos.",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=500",
  icon: Building2,
  items: [
    "Gestão de resíduos da construção civil",
    "Avaliação de impactos ambientais",
    "Licenciamento de obras",
    "Normas da ABNT para construção sustentável"
  ],
  link: "/legislation/construction"
};
