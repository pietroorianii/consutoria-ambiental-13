
import { Droplets } from "lucide-react";
import { LegislationCategory } from "./types";

export const waterLegislation: LegislationCategory = {
  title: "Recursos Hídricos",
  description: "Normas e regulamentações para gestão, uso e preservação dos recursos hídricos, incluindo outorgas e enquadramento.",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=500",
  icon: Droplets,
  items: [
    "Política Nacional de Recursos Hídricos",
    "Classificação de corpos d'água",
    "Padrões de lançamento de efluentes",
    "Outorga de direito de uso da água"
  ],
  link: "/legislation/water"
};
