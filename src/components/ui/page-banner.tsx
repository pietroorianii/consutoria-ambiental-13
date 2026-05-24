import React from "react";

type PageBannerVariant = 
  | "about"
  | "services"
  | "faq"
  | "contact"
  | "quote"
  | "team"
  | "licenses"
  | "default";

interface PageBannerProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: PageBannerVariant;
  iconColor?: string;
}

function BannerGraphic({ variant }: { variant: PageBannerVariant }) {
  switch (variant) {

    case "about":
      // Círculos concêntricos — representa a empresa, 
      // identidade, pessoas
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          <circle cx="1050" cy="160" r="220" 
            fill="none" stroke="white" strokeWidth="0.5" 
            strokeOpacity="0.08"/>
          <circle cx="1050" cy="160" r="160" 
            fill="none" stroke="white" strokeWidth="0.5" 
            strokeOpacity="0.08"/>
          <circle cx="1050" cy="160" r="100" 
            fill="none" stroke="white" strokeWidth="0.5" 
            strokeOpacity="0.08"/>
          <circle cx="1050" cy="160" r="50" 
            fill="white" fillOpacity="0.03"/>
          <circle cx="150" cy="300" r="120" 
            fill="none" stroke="white" strokeWidth="0.5" 
            strokeOpacity="0.05"/>
          <circle cx="150" cy="300" r="70" 
            fill="none" stroke="white" strokeWidth="0.5" 
            strokeOpacity="0.05"/>
          <line x1="200" y1="0" x2="850" y2="320" 
            stroke="white" strokeWidth="0.5" 
            strokeOpacity="0.04"/>
        </svg>
      );

    case "services":
      // Grade de hexágonos — representa estrutura técnica, 
      // processos, organização
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          {[...Array(6)].map((_, col) =>
            [...Array(3)].map((_, row) => {
              const size = 55;
              const x = 700 + col * (size * 1.73) + (row % 2) * (size * 0.87);
              const y = 40 + row * (size * 1.5);
              const pts = [0,1,2,3,4,5].map(i => {
                const a = (Math.PI / 180) * (60 * i - 30);
                return `${x + size * Math.cos(a)},${y + size * Math.sin(a)}`;
              }).join(" ");
              return (
                <polygon key={`${col}-${row}`} points={pts}
                  fill="none" stroke="white" strokeWidth="0.5"
                  strokeOpacity={0.06 + (col * 0.01)}/>
              );
            })
          )}
          <line x1="0" y1="200" x2="600" y2="200" 
            stroke="white" strokeWidth="0.5" strokeOpacity="0.05"/>
          <line x1="0" y1="230" x2="500" y2="230" 
            stroke="white" strokeWidth="0.5" strokeOpacity="0.04"/>
          <line x1="0" y1="260" x2="380" y2="260" 
            stroke="white" strokeWidth="0.5" strokeOpacity="0.03"/>
        </svg>
      );

    case "faq":
      // Linhas horizontais com espaçamento — representa 
      // perguntas e respostas, leitura, texto
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          {[60, 100, 140, 180, 220, 260].map((y, i) => (
            <line key={y} 
              x1={i % 2 === 0 ? 600 : 700} y1={y} 
              x2="1180" y2={y}
              stroke="white" strokeWidth="0.5"
              strokeOpacity={0.07 - i * 0.008}/>
          ))}
          <rect x="640" y="80" width="8" height="8" 
            fill="white" fillOpacity="0.06" rx="2"/>
          <rect x="640" y="120" width="8" height="8" 
            fill="white" fillOpacity="0.06" rx="2"/>
          <rect x="640" y="160" width="8" height="8" 
            fill="white" fillOpacity="0.06" rx="2"/>
          <rect x="640" y="200" width="8" height="8" 
            fill="white" fillOpacity="0.06" rx="2"/>
          <circle cx="200" cy="80" r="100" 
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
          <circle cx="200" cy="80" r="60" 
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
          <text x="168" y="90" fontSize="72" 
            fill="white" fillOpacity="0.04" 
            fontFamily="serif">?</text>
        </svg>
      );

    case "contact":
      // Ondas concêntricas — representa comunicação, 
      // sinal, alcance, conexão
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          {[50, 110, 170, 230, 290].map((r, i) => (
            <circle key={r} cx="960" cy="160" r={r}
              fill="none" stroke="white" strokeWidth="0.5"
              strokeOpacity={0.09 - i * 0.012}/>
          ))}
          <circle cx="960" cy="160" r="15"
            fill="white" fillOpacity="0.08"/>
          <line x1="0" y1="160" x2="920" y2="160"
            stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"
            strokeDasharray="6 8"/>
          <circle cx="240" cy="260" r="80"
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.04"/>
        </svg>
      );

    case "quote":
      // Setas diagonais e linhas — representa processo, 
      // fluxo, solicitação, envio
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          <path d="M 680 280 L 880 80 L 920 80" 
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.07"/>
          <path d="M 760 280 L 960 80 L 1000 80" 
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.06"/>
          <path d="M 840 280 L 1040 80 L 1080 80" 
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
          <path d="M 920 280 L 1120 80 L 1160 80" 
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.04"/>
          <rect x="680" y="100" width="160" height="120" 
            rx="8" fill="none" stroke="white" 
            strokeWidth="0.5" strokeOpacity="0.06"/>
          <line x1="700" y1="130" x2="820" y2="130"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.07"/>
          <line x1="700" y1="150" x2="800" y2="150"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.06"/>
          <line x1="700" y1="170" x2="780" y2="170"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.05"/>
          <line x1="700" y1="190" x2="760" y2="190"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.04"/>
          <circle cx="200" cy="160" r="130"
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
        </svg>
      );

    case "team":
      // Rede de pontos conectados — representa equipe, 
      // colaboração, pessoas
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          {[
            [800, 80], [920, 60], [1040, 100],
            [870, 180], [980, 200], [1100, 160],
            [820, 260], [1000, 280]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5"
              fill="white" fillOpacity="0.08"/>
          ))}
          {[
            "M800,80 L920,60", "M920,60 L1040,100",
            "M800,80 L870,180", "M920,60 L870,180",
            "M1040,100 L980,200", "M870,180 L980,200",
            "M980,200 L1100,160", "M870,180 L820,260",
            "M980,200 L1000,280"
          ].map((d, i) => (
            <path key={i} d={d} fill="none"
              stroke="white" strokeWidth="0.5"
              strokeOpacity="0.07"/>
          ))}
          <circle cx="220" cy="160" r="100"
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
          <circle cx="220" cy="160" r="60"
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
        </svg>
      );

    case "licenses":
      // Retângulos aninhados — representa documentos, 
      // licenças, formalidade
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          {[0, 1, 2, 3].map(i => (
            <rect key={i}
              x={700 + i * 30} y={40 + i * 25}
              width={400 - i * 60} height={240 - i * 50}
              rx="6" fill="none" stroke="white"
              strokeWidth="0.5"
              strokeOpacity={0.08 - i * 0.015}/>
          ))}
          <line x1="730" y1="100" x2="1050" y2="100"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.06"/>
          <line x1="730" y1="130" x2="980" y2="130"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.05"/>
          <line x1="730" y1="155" x2="920" y2="155"
            stroke="white" strokeWidth="0.5" strokeOpacity="0.05"/>
          <circle cx="200" cy="160" r="120"
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.04"/>
        </svg>
      );

    default:
      // Padrão genérico — linhas diagonais suaves
      return (
        <svg className="absolute inset-0 w-full h-full" 
             viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice"
             aria-hidden="true">
          {[0, 80, 160, 240, 320].map((offset, i) => (
            <line key={i}
              x1={600 + offset} y1="0"
              x2={offset} y2="320"
              stroke="white" strokeWidth="0.5"
              strokeOpacity={0.06 - i * 0.008}/>
          ))}
          <circle cx="960" cy="160" r="180"
            fill="none" stroke="white" strokeWidth="0.5"
            strokeOpacity="0.05"/>
        </svg>
      );
  }
}

export function PageBanner({
  title,
  description,
  icon,
  variant = "default",
  iconColor,
}: PageBannerProps) {
  return (
    <div className="relative overflow-hidden bg-brand-dark py-16">

      {/* Gráfico SVG de fundo específico por página */}
      <BannerGraphic variant={variant} />

      {/* Faixa de cor da marca no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 
        bg-gradient-to-r from-brand-accent via-brand-accent/60 
        to-transparent" />

      {/* Conteúdo centralizado */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-5 text-center">

          {/* Ícone */}
          <div className="flex h-16 w-16 items-center justify-center 
            rounded-2xl border border-white/10 bg-white/5 
            backdrop-blur-sm">
            {React.cloneElement(icon as React.ReactElement, {
              className: "h-8 w-8 text-brand-accent"
            })}
          </div>

          {/* Título */}
          <h1 className="font-sora text-3xl font-bold text-white 
            md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Linha decorativa */}
          <div className="h-0.5 w-16 rounded-full bg-brand-accent" />

          {/* Descrição */}
          <p className="font-inter text-base leading-relaxed 
            text-white/80 max-w-2xl md:text-lg">
            {description}
          </p>

        </div>
      </div>

      {/* Gradiente suave na base para transição com o conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 h-8 
        bg-gradient-to-t from-background/20 to-transparent" />

    </div>
  );
}
