
import React from "react";
import { 
  Waves,
  Mountain,
  Leaf, 
  Beaker, 
  FileText, 
  Users, 
  TreeDeciduous, 
  CloudSun,
  Globe,
  Recycle,
  TrendingUp,
} from "lucide-react";

export interface ServiceStyle {
  icon: React.ReactNode;
  badge: string;
  bgGradient: string;
  borderColor: string;
  buttonColor: string;
}

export const serviceStyles: { [key: string]: ServiceStyle } = {
  licensing: {
    icon: <Leaf className="h-8 w-8 text-eco-green" />,
    badge: "Essencial",
    bgGradient: "from-eco-green/8 via-eco-green/3 to-transparent",
    borderColor: "border-eco-green/30 hover:border-eco-green/60",
    buttonColor: "bg-eco-green hover:bg-eco-green-dark"
  },
  water_resources: {
    icon: <Waves className="h-8 w-8 text-blue-500" />,
    badge: "Vital",
    bgGradient: "from-blue-500/8 via-blue-500/3 to-transparent",
    borderColor: "border-blue-500/30 hover:border-blue-500/60",
    buttonColor: "bg-blue-500 hover:bg-blue-600"
  },
  degraded_areas: {
    icon: <Mountain className="h-8 w-8 text-amber-600" />,
    badge: "Recuperação",
    bgGradient: "from-amber-600/8 via-amber-600/3 to-transparent",
    borderColor: "border-amber-600/30 hover:border-amber-600/60",
    buttonColor: "bg-amber-600 hover:bg-amber-700"
  },
  monitoring: {
    icon: <Beaker className="h-8 w-8 text-eco-blue" />,
    badge: "Contínuo",
    bgGradient: "from-eco-blue/8 via-eco-blue/3 to-transparent",
    borderColor: "border-eco-blue/30 hover:border-eco-blue/60",
    buttonColor: "bg-eco-blue hover:bg-eco-blue-dark"
  },
  reports: {
    icon: <FileText className="h-8 w-8 text-eco-earth-dark" />,
    badge: "Técnico",
    bgGradient: "from-eco-earth/8 via-eco-earth/3 to-transparent",
    borderColor: "border-eco-earth/30 hover:border-eco-earth/60",
    buttonColor: "bg-eco-earth-dark hover:bg-eco-earth-dark/90"
  },
  consulting: {
    icon: <Users className="h-8 w-8 text-eco-accent-teal" />,
    badge: "Estratégico",
    bgGradient: "from-eco-accent-teal/8 via-eco-accent-teal/3 to-transparent",
    borderColor: "border-eco-accent-teal/30 hover:border-eco-accent-teal/60",
    buttonColor: "bg-eco-accent-teal hover:bg-eco-accent-teal/90"
  },
  training: {
    icon: <TreeDeciduous className="h-8 w-8 text-eco-accent-orange" />,
    badge: "Capacitação",
    bgGradient: "from-eco-accent-orange/8 via-eco-accent-orange/3 to-transparent",
    borderColor: "border-eco-accent-orange/30 hover:border-eco-accent-orange/60",
    buttonColor: "bg-eco-accent-orange hover:bg-eco-accent-orange/90"
  },
  management: {
    icon: <CloudSun className="h-8 w-8 text-eco-blue-dark" />,
    badge: "Gestão",
    bgGradient: "from-eco-blue-dark/8 via-eco-blue-dark/3 to-transparent",
    borderColor: "border-eco-blue-dark/30 hover:border-eco-blue-dark/60",
    buttonColor: "bg-eco-blue-dark hover:bg-eco-blue-dark/90"
  },
  esg: {
    icon: <Globe className="h-8 w-8 text-eco-green-dark" />,
    badge: "Inovação",
    bgGradient: "from-eco-green-dark/8 via-eco-green-dark/3 to-transparent",
    borderColor: "border-eco-green-dark/30 hover:border-eco-green-dark/60",
    buttonColor: "bg-eco-green-dark hover:bg-eco-green-dark/90"
  },
  climate: {
    icon: <Recycle className="h-8 w-8 text-eco-accent-yellow" />,
    badge: "Futuro",
    bgGradient: "from-eco-accent-yellow/8 via-eco-accent-yellow/3 to-transparent",
    borderColor: "border-eco-accent-yellow/30 hover:border-eco-accent-yellow/60",
    buttonColor: "bg-eco-accent-yellow hover:bg-eco-accent-yellow/90"
  }
};

export const defaultStyles: ServiceStyle = {
  icon: <TrendingUp className="h-8 w-8 text-gray-500" />,
  badge: "Serviço",
  bgGradient: "from-gray-50/8 via-gray-50/3 to-transparent",
  borderColor: "border-gray-300/30 hover:border-gray-300/60",
  buttonColor: "bg-gray-500 hover:bg-gray-600"
};
