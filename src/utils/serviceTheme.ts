import { 
  Droplet, Leaf, TreePine, 
  Map, FileText, Briefcase, 
  GraduationCap, LineChart, 
  Globe2, Wind, ShieldCheck 
} from "lucide-react";

export type ServiceColorTheme = 'green' | 'blue' | 'orange' | 'teal' | 'earth';

export const getServiceTheme = (serviceId: string) => {
  const themes: Record<string, { icon: any, color: ServiceColorTheme }> = {
    water_resources: { icon: Droplet, color: 'blue' },
    licensing: { icon: ShieldCheck, color: 'green' },
    degraded_areas: { icon: TreePine, color: 'earth' },
    monitoring: { icon: LineChart, color: 'teal' },
    reports: { icon: FileText, color: 'blue' },
    consulting: { icon: Briefcase, color: 'orange' },
    training: { icon: GraduationCap, color: 'blue' },
    management: { icon: Map, color: 'teal' },
    esg: { icon: Globe2, color: 'green' },
    climate: { icon: Wind, color: 'teal' },
    
    // Sub-services (licensing)
    lp: { icon: Map, color: 'green' },
    li: { icon: Briefcase, color: 'orange' },
    lo: { icon: ShieldCheck, color: 'teal' },
    las: { icon: Leaf, color: 'green' },
    lac: { icon: Leaf, color: 'green' },
    dlam: { icon: FileText, color: 'earth' },
  };

  return themes[serviceId] || { icon: Leaf, color: 'green' };
};

export const getThemeClasses = (color: ServiceColorTheme) => {
  const classes = {
    green: {
      lightBg: 'bg-eco-green/15',
      hoverLightBg: 'group-hover:bg-eco-green/25',
      text: 'text-eco-green',
      hoverText: 'group-hover:text-eco-green-dark',
      border: 'border-eco-green/30 hover:border-eco-green/60',
      buttonBg: 'bg-eco-green hover:bg-eco-green-dark text-white',
      buttonOutline: 'border-eco-green/40 text-eco-green hover:bg-eco-green hover:text-white',
      gradient: 'from-eco-green via-eco-green-dark to-eco-blue',
      gradientOverlay: 'from-eco-green/60 via-transparent to-eco-green-dark/80',
      checkIcon: 'text-eco-green',
      checkBg: 'bg-eco-green/8',
    },
    blue: {
      lightBg: 'bg-eco-blue/15',
      hoverLightBg: 'group-hover:bg-eco-blue/25',
      text: 'text-eco-blue',
      hoverText: 'group-hover:text-blue-800',
      border: 'border-eco-blue/30 hover:border-eco-blue/60',
      buttonBg: 'bg-eco-blue hover:bg-blue-800 text-white',
      buttonOutline: 'border-eco-blue/40 text-eco-blue hover:bg-eco-blue hover:text-white',
      gradient: 'from-eco-blue via-blue-800 to-blue-900',
      gradientOverlay: 'from-eco-blue/60 via-transparent to-blue-900/80',
      checkIcon: 'text-eco-blue',
      checkBg: 'bg-eco-blue/8',
    },
    orange: {
      lightBg: 'bg-eco-accent-orange/15',
      hoverLightBg: 'group-hover:bg-eco-accent-orange/25',
      text: 'text-eco-accent-orange',
      hoverText: 'group-hover:text-orange-700',
      border: 'border-eco-accent-orange/30 hover:border-eco-accent-orange/60',
      buttonBg: 'bg-eco-accent-orange hover:bg-orange-700 text-white',
      buttonOutline: 'border-eco-accent-orange/40 text-eco-accent-orange hover:bg-eco-accent-orange hover:text-white',
      gradient: 'from-eco-accent-orange via-orange-600 to-orange-700',
      gradientOverlay: 'from-eco-accent-orange/60 via-transparent to-orange-700/80',
      checkIcon: 'text-eco-accent-orange',
      checkBg: 'bg-eco-accent-orange/8',
    },
    teal: {
      lightBg: 'bg-eco-accent-teal/15',
      hoverLightBg: 'group-hover:bg-eco-accent-teal/25',
      text: 'text-eco-accent-teal',
      hoverText: 'group-hover:text-teal-700',
      border: 'border-eco-accent-teal/30 hover:border-eco-accent-teal/60',
      buttonBg: 'bg-eco-accent-teal hover:bg-teal-700 text-white',
      buttonOutline: 'border-eco-accent-teal/40 text-eco-accent-teal hover:bg-eco-accent-teal hover:text-white',
      gradient: 'from-eco-accent-teal via-teal-600 to-teal-700',
      gradientOverlay: 'from-eco-accent-teal/60 via-transparent to-teal-700/80',
      checkIcon: 'text-eco-accent-teal',
      checkBg: 'bg-eco-accent-teal/8',
    },
    earth: {
      lightBg: 'bg-eco-earth/15',
      hoverLightBg: 'group-hover:bg-eco-earth/25',
      text: 'text-eco-earth',
      hoverText: 'group-hover:text-amber-800',
      border: 'border-eco-earth/30 hover:border-eco-earth/60',
      buttonBg: 'bg-eco-earth hover:bg-amber-800 text-white',
      buttonOutline: 'border-eco-earth/40 text-eco-earth hover:bg-eco-earth hover:text-white',
      gradient: 'from-eco-earth via-amber-700 to-amber-800',
      gradientOverlay: 'from-eco-earth/60 via-transparent to-amber-800/80',
      checkIcon: 'text-eco-earth',
      checkBg: 'bg-eco-earth/8',
    }
  };

  return classes[color];
};
