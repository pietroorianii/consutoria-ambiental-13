import type React from "react";
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
  const themes: Record<string, { icon: React.ComponentType<{ className?: string }>, color: ServiceColorTheme }> = {
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

// AXIS: um único sistema visual para todos os serviços (antes cada serviço tinha uma cor:
// verde, azul, laranja, teal... o que diluía a marca). Recursos hídricos usam o tom "água".
const axisTheme = {
  lightBg: 'bg-brand-accent/10',
  hoverLightBg: 'group-hover:bg-brand-accent/15',
  text: 'text-brand-accent',
  hoverText: 'group-hover:text-brand-accent',
  border: 'border-brand-dark/10 hover:border-brand-accent/50',
  buttonBg: 'bg-brand-dark hover:bg-brand-primary text-white',
  buttonOutline: 'border-brand-dark/20 text-brand-dark hover:border-brand-accent hover:text-brand-accent bg-white',
  gradient: 'from-brand-dark via-brand-dark to-brand-primary',
  gradientOverlay: 'from-brand-dark/60 via-transparent to-brand-abyss/80',
  checkIcon: 'text-brand-accent',
  checkBg: 'bg-brand-cream',
};
const waterTheme = { ...axisTheme, lightBg: 'bg-brand-water/10', hoverLightBg: 'group-hover:bg-brand-water/15', text: 'text-brand-primary', hoverText: 'group-hover:text-brand-primary', checkIcon: 'text-brand-water' };

export const getThemeClasses = (color: ServiceColorTheme) =>
  color === 'blue' || color === 'light-blue' ? waterTheme : axisTheme;
