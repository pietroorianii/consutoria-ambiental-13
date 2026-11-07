# Site mais interativo, fluido e com cara "feita à mão"

## Objetivo
Deixar a página inicial (e o visual geral) mais profissional, autoral e fácil de entender, com ilustrações ambientais exclusivas e movimento suave ao rolar e passar o mouse.

## O que muda para o visitante

1. **Ilustrações ambientais exclusivas** (geradas sob medida, estilo editorial/ilustração botânica nas cores da marca): rio e mata ciliar, folhas, montanhas, água. Usadas no topo, entre seções e nos cards — substituindo o visual "genérico".
2. **Topo (Hero) com profundidade**: camadas de paisagem ilustrada (montanhas, mata, rio) que se movem em velocidades diferentes ao rolar (efeito parallax) e reagem levemente ao movimento do mouse. Texto central mantido, mais objetivo: "o que fazemos" em uma frase + dois botões claros.
3. **Serviços**: cards com ícone ilustrado, leve inclinação 3D e brilho ao passar o mouse, e um "Saiba mais" que aparece deslizando.
4. **"Como trabalhamos"**: linha do tempo que vai se desenhando conforme a pessoa rola, cada etapa surgindo em sequência.
5. **Números da empresa**: contadores animados com folhas decorativas que crescem ao entrar na tela.
6. **Divisórias orgânicas** entre seções (ondas/curvas de relevo desenhadas à mão) em vez de cortes retos.
7. **Rolagem fluida**: rolagem suave, barra de progresso fina no topo indicando quanto da página foi lida, e elementos aparecendo de forma escalonada (sem exageros).
8. **Toque humano**: tipografia com títulos editoriais, pequenos detalhes desenhados (sublinhado manuscrito em palavras-chave, setas desenhadas), espaçamentos mais generosos e menos "gradientes de IA".
9. **Acessibilidade**: quem tem "reduzir movimento" ativado no aparelho vê tudo estático; no celular as animações ficam mais leves.

## Ordem da página inicial
Topo ilustrado → Serviços → Segmentos atendidos → Quem somos → Como trabalhamos → Números → Chamada para orçamento.

## Detalhes técnicos
- Gerar ~6 ilustrações em `src/assets/illustrations/` (paisagem em camadas PNG transparente, folhas, ícones de serviços).
- Framer Motion: `useScroll`/`useTransform` para parallax e progresso; `useMotionValue` para inclinação no hover; `whileInView` com `staggerChildren`.
- Novos componentes: `ScrollProgress`, `OrganicDivider`, `ParallaxLandscape`, `TiltCard`, `HandDrawnUnderline`.
- Refatorar `hero-banner`, `ServicesShowcase`, `WorkProcess`, `SocialProof`, `company-intro`, `SegmentCards`, `cta-section`.
- Respeitar `prefers-reduced-motion`; usar só `transform`/`opacity` para manter desempenho.
- Manter cores, fontes e conteúdo legal já definidos.
