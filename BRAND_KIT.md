# Brand Kit — Axis Soluções Ambientais

Versão 1.0 · novembro de 2026. Versão visual e interativa no site em **`/marca`**.

---

## 1. Essência da marca

| | |
|---|---|
| **O que fazemos** | Consultoria e engenharia ambiental: licenciamento no IAT, outorgas, estudos técnicos, resíduos, ESG e conformidade. |
| **Para quem** | Empresas de Ponta Grossa, dos Campos Gerais e de todo o Paraná: indústria, agro, construção, saúde, comércio e energia. |
| **Promessa** | Do diagnóstico à licença emitida, com responsável técnico e ART em cada etapa. |
| **Manifesto** | **Inovar. Preservar. Transformar.** |
| **Pilares** | Engenharia · Gestão · Inovação |
| **Personalidade** | Técnica sem arrogância, otimista sem exagero, próxima e segura. |

## 2. Logo

O símbolo une três elementos: a **fita do A** (estrutura e engenharia), a **folha** (natureza) e a **onda** (água).

| Versão | Arquivo | Uso |
|---|---|---|
| Vertical colorida | `src/assets/axis/axis-logo-full-color.png` | Fundos claros |
| Vertical prata | `src/assets/axis/axis-logo-full-white.png` | Fundos navy e fotos escuras |
| Símbolo colorido | `src/assets/axis/axis-symbol-color.png` | Avatar e selo em fundo claro |
| Símbolo prata | `src/assets/axis/axis-symbol-white.png` | Favicon, avatar e selo em fundo navy |
| Wordmark | `axis-wordmark-color.png` / `axis-wordmark-white.png` | Logo horizontal (navbar) |

No código: `import { AxisLogoHorizontal, AxisLogoStacked } from "@/components/brand/AxisLogo"`.

**Regras**
- Área de respiro: altura do “X” do wordmark em volta de todo o logo.
- Tamanho mínimo: vertical 96 px (25 mm); horizontal 140 px. Abaixo disso, só o símbolo.
- Não distorcer, rotacionar, recolorir, aplicar sombra/contorno, nem usar a versão colorida sobre navy.

> ⚠️ Os logos foram extraídos das artes em PNG (fundo removido). Para gráfica, placa, fachada e uniforme, peça ao designer os **arquivos vetoriais (SVG/AI/PDF)** do logo.

## 3. Cores

| Nome | HEX | RGB | Token Tailwind | Papel |
|---|---|---|---|---|
| Navy Axis | `#0A2433` | 10 36 51 | `brand-dark` | Cor institucional: fundos, navbar, rodapé, títulos |
| Abismo | `#061821` | 6 24 33 | `brand-abyss` | Profundidade em gradientes |
| Petrol | `#0E4A4F` | 14 74 79 | `brand-primary` | Fita do símbolo; superfícies e ícones |
| Verde Axis | `#377A25` | 55 122 37 | `brand-accent` | Links e destaques em fundo claro |
| Lime | `#94C13A` | 148 193 58 | `brand-lime` | Destaques e CTAs em fundo escuro |
| Água | `#3FA1BA` | 63 161 186 | `brand-water` | Recursos hídricos, efluentes, dados |
| Prata | `#D5DDE0` | 213 221 224 | `brand-silver` | Texto secundário em fundo navy |
| Névoa | `#F2F5F4` | 242 245 244 | `brand-cream` | Fundo claro das páginas |

**Proporção:** 60% navy ou névoa · 30% fotografia · 10% lime e verde.

**Acessibilidade (WCAG AA):** Lime sobre Navy = 7,6:1 ✅ · Verde Axis sobre Névoa = 4,8:1 ✅ · **Nunca** use lime para texto sobre fundo claro.

## 4. Tipografia

| Família | Papel | Pesos |
|---|---|---|
| **Montserrat** | Títulos, chamadas, botões (geometria do wordmark) | 500, 600, 700 |
| **Inter** | Textos, formulários, legendas | 400, 500, 600 |

Escala: Display 56–72 px (500, −2,5%) · H2 36–42 px (600, −2%) · H3 22–24 px (600) · Texto 16–18 px (entrelinha 1,7) · Apoio 14 px.
Classes: `font-display` (Montserrat) e `font-body` / `font-inter` (Inter).

**Destaque em título:** a parte final da frase em **lime negrito** (ex.: “para um futuro **mais sustentável.**”). Use só em títulos de abertura, no máximo um por tela.

## 5. Grafismos e componentes

| Elemento | Classe / componente | Regra |
|---|---|---|
| Traço sob títulos | `.axis-rule` (lime) / `.axis-rule-water` | 56 × 3 px, em degradê, abaixo do título |
| Linha do A | `<AxisALine />` | Traço fino (1,5 px), branco 10–60%, sobre fotos ou navy |
| Curva foto/painel | `PillarTile` em `ServicesShowcase.tsx` | Curva verde separando foto e painel navy |
| Superfície navy | `.axis-navy-surface` | Navy com brilho petrol no canto |
| Botão principal | `.axis-btn-solid` | Pílula lime, texto navy |
| Botão secundário | `.axis-btn-ghost` | Pílula com contorno lime, texto claro |
| Título de seção | `<SectionHeading />` | Título + traço + introdução, sem rótulo em caixa-alta |

## 6. Fotografia

Natureza preservada convivendo com operação industrial real. Luz de nascer do sol, verdes profundos, céu limpo.

| Grupo | Arquivos (`src/assets/axis/`) |
|---|---|
| Paisagens (hero/banners) | `hero-river-sunrise`, `hero-valley`, `hero-forest-river`, `banner-landscape` |
| Indústria e operação | `industry`, `power-plant`, `plant-night`, `water-treatment`, `water-treatment-wide`, `waste-bales` |
| Natureza em detalhe | `leaf-drop`, `water-drop`, `seedling`, `esg-hands`, `globe-hands`, `earth` |
| Marca aplicada | `forest-axis`, `engineering-helmet`, `audit-clipboard` |

No código: `import { axisImages } from "@/components/brand/assets"`.

> ⚠️ As fotos foram recortadas das artes (resolução de origem baixa, ampliadas 2×). Funcionam bem com sobreposição navy, mas para banners em tela cheia e materiais impressos vale gerar ou comprar versões em alta resolução.

## 7. Voz e mensagens

**Fazemos:** falar do resultado (licença emitida, multa evitada, prazo cumprido); citar o órgão e o instrumento certo (IAT, SIGARH, LO, PGRS); frases curtas e verbos no ativo.
**Evitamos:** prometer aprovação garantida; números de desempenho que não possam ser comprovados; jargão sem explicação; alarmismo.

**Frases da marca**
- Soluções ambientais para um futuro mais sustentável.
- Construindo um futuro mais sustentável para as próximas gerações.
- Consultoria técnica em meio ambiente e sustentabilidade para o seu negócio.
- Equilíbrio entre desenvolvimento e meio ambiente.
- Gestão ambiental com excelência e resultados reais.
- Inovar. Preservar. Transformar.

## 8. Arquivos gerais

- Favicon / ícones: `public/favicon.ico`, `public/icon-512.png`, `public/apple-touch-icon.png`
- Imagem de compartilhamento (WhatsApp, LinkedIn): `public/og-axis.jpg` (1200 × 630)
- Tokens: `src/index.css` (variáveis `--brand-*`) e `tailwind.config.ts` (`brand.*`)
