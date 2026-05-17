import { 
  Droplet, Leaf, TreePine, 
  Map, FileText, Briefcase, 
  GraduationCap, LineChart, 
  Globe2, Wind, ShieldCheck,
  Beaker, Users, Triangle,
  ClipboardList
} from "lucide-react";

export type ServiceColorTheme = 'green' | 'blue' | 'orange' | 'teal' | 'earth' | 'light-blue' | 'dark-green' | 'emerald';

export const getServiceTheme = (serviceId: string) => {
  const themes: Record<string, { icon: any, color: ServiceColorTheme }> = {
    // 1) Licenciamento Ambiental: folha, verde
    licensing: { icon: Leaf, color: 'green' },
    // Sub-serviços de licenciamento: folha, verde
    lp: { icon: Leaf, color: 'green' },
    li: { icon: Leaf, color: 'green' },
    lo: { icon: Leaf, color: 'green' },
    las: { icon: Leaf, color: 'green' },
    lac: { icon: Leaf, color: 'green' },
    dlam: { icon: Leaf, color: 'green' },

    // 2) Outorgas: gota, azul
    water_resources: { icon: Droplet, color: 'blue' },

    // 3) Recuperação de áreas: árvore, marrom clara
    degraded_areas: { icon: TreePine, color: 'earth' },

    // 4) Monitoramento e Análises: elemento químico, azul claro
    monitoring: { icon: Beaker, color: 'light-blue' },

    // 5) Estudos e relatórios: documento, mantem a cor que está (verde escuro)
    reports: { icon: FileText, color: 'dark-green' },

    // 6) Consultoria ambiental: pessoa (Users), mantem a cor (vamos usar orange/yellow)
    consulting: { icon: Users, color: 'orange' },

    // 7) Treinamentos e capacitações: chapéu
    training: { icon: GraduationCap, color: 'orange' },

    // 8) Consultoria ESG: terra, verde diferente do licenciamento
    esg: { icon: Globe2, color: 'emerald' },

    // 9) Mudanças climáticas: triângulo, cor teal
    climate: { icon: Triangle, color: 'teal' },

    // Gestão e manutenção (não citado, mantendo padrão)
    management: { icon: ClipboardList, color: 'teal' },
  };

  return themes[serviceId] || { icon: Leaf, color: 'green' };
};

export const getThemeClasses = (color: ServiceColorTheme) => {
  const classes = {
    green: {
      lightBg: 'bg-green-100',
      hoverLightBg: 'group-hover:bg-green-200',
      text: 'text-green-600',
      hoverText: 'group-hover:text-green-800',
      border: 'border-green-200 hover:border-green-400',
      buttonBg: 'bg-green-600 hover:bg-green-700 text-white',
      buttonOutline: 'border-green-300 text-green-600 hover:bg-green-600 hover:text-white',
      gradient: 'from-green-500 via-green-600 to-green-700',
      gradientOverlay: 'from-green-500/60 via-transparent to-green-800/80',
      checkIcon: 'text-green-600',
      checkBg: 'bg-green-50',
    },
    blue: {
      lightBg: 'bg-blue-100',
      hoverLightBg: 'group-hover:bg-blue-200',
      text: 'text-blue-600',
      hoverText: 'group-hover:text-blue-800',
      border: 'border-blue-200 hover:border-blue-400',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonOutline: 'border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      gradientOverlay: 'from-blue-500/60 via-transparent to-blue-800/80',
      checkIcon: 'text-blue-600',
      checkBg: 'bg-blue-50',
    },
    'light-blue': {
      lightBg: 'bg-sky-100',
      hoverLightBg: 'group-hover:bg-sky-200',
      text: 'text-sky-500',
      hoverText: 'group-hover:text-sky-700',
      border: 'border-sky-200 hover:border-sky-400',
      buttonBg: 'bg-sky-500 hover:bg-sky-600 text-white',
      buttonOutline: 'border-sky-300 text-sky-500 hover:bg-sky-500 hover:text-white',
      gradient: 'from-sky-400 via-sky-500 to-sky-600',
      gradientOverlay: 'from-sky-400/60 via-transparent to-sky-700/80',
      checkIcon: 'text-sky-500',
      checkBg: 'bg-sky-50',
    },
    'dark-green': {
      lightBg: 'bg-emerald-900/10',
      hoverLightBg: 'group-hover:bg-emerald-900/20',
      text: 'text-emerald-800',
      hoverText: 'group-hover:text-emerald-950',
      border: 'border-emerald-800/30 hover:border-emerald-800/60',
      buttonBg: 'bg-emerald-800 hover:bg-emerald-900 text-white',
      buttonOutline: 'border-emerald-800/40 text-emerald-800 hover:bg-emerald-800 hover:text-white',
      gradient: 'from-emerald-700 via-emerald-800 to-emerald-900',
      gradientOverlay: 'from-emerald-700/60 via-transparent to-emerald-950/80',
      checkIcon: 'text-emerald-800',
      checkBg: 'bg-emerald-900/5',
    },
    emerald: {
      lightBg: 'bg-emerald-100',
      hoverLightBg: 'group-hover:bg-emerald-200',
      text: 'text-emerald-500',
      hoverText: 'group-hover:text-emerald-700',
      border: 'border-emerald-200 hover:border-emerald-400',
      buttonBg: 'bg-emerald-500 hover:bg-emerald-600 text-white',
      buttonOutline: 'border-emerald-300 text-emerald-500 hover:bg-emerald-500 hover:text-white',
      gradient: 'from-emerald-400 via-emerald-500 to-emerald-600',
      gradientOverlay: 'from-emerald-400/60 via-transparent to-emerald-700/80',
      checkIcon: 'text-emerald-500',
      checkBg: 'bg-emerald-50',
    },
    orange: {
      lightBg: 'bg-orange-100',
      hoverLightBg: 'group-hover:bg-orange-200',
      text: 'text-orange-500',
      hoverText: 'group-hover:text-orange-700',
      border: 'border-orange-200 hover:border-orange-400',
      buttonBg: 'bg-orange-500 hover:bg-orange-600 text-white',
      buttonOutline: 'border-orange-300 text-orange-500 hover:bg-orange-500 hover:text-white',
      gradient: 'from-orange-400 via-orange-500 to-orange-600',
      gradientOverlay: 'from-orange-400/60 via-transparent to-orange-700/80',
      checkIcon: 'text-orange-500',
      checkBg: 'bg-orange-50',
    },
    teal: {
      lightBg: 'bg-teal-100',
      hoverLightBg: 'group-hover:bg-teal-200',
      text: 'text-teal-500',
      hoverText: 'group-hover:text-teal-700',
      border: 'border-teal-200 hover:border-teal-400',
      buttonBg: 'bg-teal-500 hover:bg-teal-600 text-white',
      buttonOutline: 'border-teal-300 text-teal-500 hover:bg-teal-500 hover:text-white',
      gradient: 'from-teal-400 via-teal-500 to-teal-600',
      gradientOverlay: 'from-teal-400/60 via-transparent to-teal-700/80',
      checkIcon: 'text-teal-500',
      checkBg: 'bg-teal-50',
    },
    earth: {
      lightBg: 'bg-amber-100',
      hoverLightBg: 'group-hover:bg-amber-200',
      text: 'text-amber-600',
      hoverText: 'group-hover:text-amber-800',
      border: 'border-amber-200 hover:border-amber-400',
      buttonBg: 'bg-amber-600 hover:bg-amber-700 text-white',
      buttonOutline: 'border-amber-300 text-amber-600 hover:bg-amber-600 hover:text-white',
      gradient: 'from-amber-500 via-amber-600 to-amber-700',
      gradientOverlay: 'from-amber-500/60 via-transparent to-amber-800/80',
      checkIcon: 'text-amber-600',
      checkBg: 'bg-amber-50',
    }
  };

  return classes[color];
};
