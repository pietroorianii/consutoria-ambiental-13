import { useState } from "react";
import { Check, Copy, Download, X } from "lucide-react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";
import { axisLogo, axisImages } from "@/components/brand/assets";
import { AxisALine, AxisLogoHorizontal } from "@/components/brand/AxisLogo";
import { SectionHeading } from "@/components/brand/SectionHeading";

const palette = [
  { name: "Navy Axis", hex: "#0A2433", rgb: "10 36 51", token: "brand-dark", role: "Cor institucional. Fundos, navbar, rodapé, títulos.", dark: true },
  { name: "Abismo", hex: "#061821", rgb: "6 24 33", token: "brand-abyss", role: "Profundidade em gradientes e sombras do navy.", dark: true },
  { name: "Petrol", hex: "#0E4A4F", rgb: "14 74 79", token: "brand-primary", role: "A fita do símbolo. Superfícies secundárias e ícones.", dark: true },
  { name: "Verde Axis", hex: "#377A25", rgb: "55 122 37", token: "brand-accent", role: "A folha. Links e destaques sobre fundo claro (AA).", dark: true },
  { name: "Lime", hex: "#94C13A", rgb: "148 193 58", token: "brand-lime", role: "Destaque sobre navy: CTAs, palavras-chave, traço.", dark: false },
  { name: "Água", hex: "#3FA1BA", rgb: "63 161 186", token: "brand-water", role: "A onda. Recursos hídricos, efluentes, dados.", dark: false },
  { name: "Prata", hex: "#D5DDE0", rgb: "213 221 224", token: "brand-silver", role: "O A metálico. Texto secundário sobre navy.", dark: false },
  { name: "Névoa", hex: "#F2F5F4", rgb: "242 245 244", token: "brand-cream", role: "Fundo claro padrão das páginas.", dark: false },
];

const typeScale = [
  { label: "Display", cls: "font-display text-5xl font-medium tracking-[-0.025em] md:text-6xl", spec: "Montserrat 500 · 56–72px · −2,5%" },
  { label: "Título H2", cls: "font-display text-4xl font-semibold tracking-tight", spec: "Montserrat 600 · 36–42px · −2%" },
  { label: "Título H3", cls: "font-display text-2xl font-semibold", spec: "Montserrat 600 · 22–24px" },
  { label: "Texto", cls: "text-lg leading-relaxed", spec: "Inter 400 · 16–18px · entrelinha 1,7" },
  { label: "Apoio", cls: "text-sm leading-relaxed", spec: "Inter 400 · 14px" },
];

const photoGroups: { title: string; note: string; keys: (keyof typeof axisImages)[] }[] = [
  { title: "Paisagens (hero e banners)", note: "Rios e florestas vistos do alto, luz de nascer do sol, horizonte limpo à direita para o texto.", keys: ["heroRiverSunrise", "heroValley", "heroForestRiver", "bannerLandscape"] },
  { title: "Indústria e operação", note: "Plantas e estações de tratamento reais, sempre com vegetação ou céu no quadro.", keys: ["industry", "powerPlant", "plantNight", "waterTreatment", "waterTreatmentWide", "wasteBales"] },
  { title: "Natureza em detalhe", note: "Macro de folha, água e solo. Verde saturado, fundo desfocado.", keys: ["leafDrop", "waterDrop", "seedling", "esgHands", "globeHands", "earth"] },
  { title: "Marca aplicada", note: "Símbolo em transparência sobre a paisagem ou em equipamentos.", keys: ["forestAxis", "engineeringHelmet", "auditClipboard"] },
];

const taglines = [
  "Soluções ambientais para um futuro mais sustentável.",
  "Construindo um futuro mais sustentável para as próximas gerações.",
  "Consultoria técnica em meio ambiente e sustentabilidade para o seu negócio.",
  "Equilíbrio entre desenvolvimento e meio ambiente.",
  "Gestão ambiental com excelência e resultados reais.",
  "Inovar. Preservar. Transformar.",
];

const voice = {
  do: ["Falar do resultado para o cliente: licença emitida, multa evitada, prazo cumprido.", "Citar o órgão e o instrumento certo (IAT, SIGARH, LO, PGRS).", "Frases curtas, verbos no ativo, tom seguro e próximo."],
  dont: ["Prometer aprovação garantida ou prazos que dependem do órgão.", "Números de desempenho que não possam ser comprovados.", "Jargão sem explicação ou alarmismo sobre multas."],
};

function Swatch({ c }: { c: (typeof palette)[number] }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard indisponível */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="group overflow-hidden rounded-2xl border border-brand-dark/10 bg-white text-left transition-shadow hover:shadow-lg"
      aria-label={`Copiar ${c.name} ${c.hex}`}
    >
      <div className="flex h-32 items-end justify-between p-4" style={{ background: c.hex }}>
        <span className={`font-display text-lg font-semibold ${c.dark ? "text-white" : "text-brand-dark"}`}>{c.name}</span>
        <span className={`grid h-8 w-8 place-items-center rounded-full ${c.dark ? "bg-white/15 text-white" : "bg-brand-dark/10 text-brand-dark"}`}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />}
        </span>
      </div>
      <div className="space-y-1 p-4 text-sm">
        <p className="font-semibold text-brand-dark">{copied ? "Copiado!" : c.hex} <span className="font-normal text-brand-dark/50">· RGB {c.rgb}</span></p>
        <p className="text-brand-dark/50">Tailwind: <code className="text-brand-primary">{c.token}</code></p>
        <p className="leading-relaxed text-brand-dark/70">{c.role}</p>
      </div>
    </button>
  );
}

function Block({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-20 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

const toc = [
  ["logo", "Logo"],
  ["cores", "Cores"],
  ["tipografia", "Tipografia"],
  ["grafismos", "Grafismos e componentes"],
  ["fotografia", "Fotografia"],
  ["voz", "Voz e mensagens"],
];

export default function BrandKitPage() {
  return (
    <PageWrapper>
      <MetaTags
        title="Identidade visual | Axis Soluções Ambientais"
        description="Brand kit da Axis Soluções Ambientais: logo, cores, tipografia, grafismos, fotografia e voz da marca."
      />

      {/* Abertura */}
      <section className="axis-navy-surface relative overflow-hidden py-20 text-white md:py-28">
        <AxisALine className="pointer-events-none absolute -right-16 top-0 h-full w-auto" strokeClass="stroke-white/15" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
              Brand kit <span className="font-semibold text-brand-lime">Axis.</span>
            </h1>
            <span className="axis-rule mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-brand-silver/80">
              Tudo o que é preciso para aplicar a marca Axis Soluções Ambientais com consistência: no site, nas redes, em propostas e em campo.
            </p>
            <nav aria-label="Seções do brand kit" className="mt-8 flex flex-wrap gap-2">
              {toc.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85 transition-colors hover:border-brand-lime hover:text-brand-lime">
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <img src={axisLogo.fullWhite} alt="Logo Axis Soluções Ambientais" className="w-56 md:w-72" />
        </div>
      </section>

      {/* Logo */}
      <Block id="logo" className="bg-white">
        <SectionHeading
          title="Logo"
          intro="O símbolo une a fita do A (estrutura, engenharia), a folha (natureza) e a onda (água). A versão colorida vai em fundos claros; a versão prata, em fundos navy ou fotos escuras."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <figure className="grid place-items-center rounded-2xl border border-brand-dark/10 bg-brand-cream p-12">
            <img src={axisLogo.fullColor} alt="Logo colorido vertical" className="w-56" />
            <figcaption className="mt-6 text-sm text-brand-dark/60">Vertical · fundo claro</figcaption>
          </figure>
          <figure className="axis-navy-surface grid place-items-center rounded-2xl p-12">
            <img src={axisLogo.fullWhite} alt="Logo prata vertical" className="w-56" />
            <figcaption className="mt-6 text-sm text-brand-silver/70">Vertical · fundo navy</figcaption>
          </figure>
          <figure className="grid place-items-center rounded-2xl border border-brand-dark/10 bg-white p-10">
            <AxisLogoHorizontal variant="light" />
            <figcaption className="mt-6 text-sm text-brand-dark/60">Horizontal · navbar e assinaturas</figcaption>
          </figure>
          <figure className="grid grid-cols-2 place-items-center gap-6 rounded-2xl bg-brand-dark p-10">
            <img src={axisLogo.symbolWhite} alt="Símbolo prata" className="w-24" />
            <div className="grid h-24 w-24 place-items-center rounded-[1.4rem] bg-brand-cream">
              <img src={axisLogo.symbolColor} alt="Símbolo colorido" className="w-16" />
            </div>
            <figcaption className="col-span-2 text-sm text-brand-silver/70">Símbolo isolado · avatar, favicon, selo</figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-dark/10 p-6">
            <p className="font-display font-semibold text-brand-dark">Área de respiro</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">Mantenha livre ao redor do logo uma margem igual à altura da letra “X” do wordmark.</p>
          </div>
          <div className="rounded-2xl border border-brand-dark/10 p-6">
            <p className="font-display font-semibold text-brand-dark">Tamanho mínimo</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">Vertical: 96 px (25 mm) de largura. Horizontal: 140 px. Abaixo disso, use só o símbolo.</p>
          </div>
          <div className="rounded-2xl border border-brand-dark/10 p-6">
            <p className="font-display font-semibold text-brand-dark">Não faça</p>
            <ul className="mt-2 space-y-1.5 text-sm text-brand-dark/65">
              {["Distorcer ou rotacionar", "Trocar as cores da folha e da onda", "Logo colorido sobre navy", "Aplicar sombra ou contorno"].map((d) => (
                <li key={d} className="flex items-center gap-2"><X className="h-3.5 w-3.5 text-red-600" />{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            [axisLogo.fullColor, "axis-logo-colorido.png", "Logo colorido"],
            [axisLogo.fullWhite, "axis-logo-prata.png", "Logo prata"],
            [axisLogo.symbolColor, "axis-simbolo-colorido.png", "Símbolo colorido"],
            [axisLogo.symbolWhite, "axis-simbolo-prata.png", "Símbolo prata"],
          ].map(([src, file, label]) => (
            <a key={file} href={src} download={file} className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 px-4 py-2 text-sm font-medium text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent">
              <Download className="h-4 w-4" />
              {label} (PNG)
            </a>
          ))}
        </div>
      </Block>

      {/* Cores */}
      <Block id="cores">
        <SectionHeading
          title="Cores"
          intro="O navy é a base; o lime é o ponto de luz. Proporção sugerida: 60% navy ou névoa, 30% fotografia, 10% lime e verde. Clique em uma cor para copiar o código."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((c) => <Swatch key={c.hex} c={c} />)}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-dark p-6 text-white">
            <p className="font-display text-xl"><span className="font-semibold text-brand-lime">Lime sobre navy</span> · contraste 7,6:1</p>
            <p className="mt-2 text-sm text-brand-silver/70">Use para palavras-chave e botões principais em fundo escuro.</p>
          </div>
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-6">
            <p className="font-display text-xl text-brand-dark"><span className="font-semibold text-brand-accent">Verde sobre névoa</span> · contraste 4,8:1</p>
            <p className="mt-2 text-sm text-brand-dark/60">Em fundo claro, troque o lime pelo Verde Axis para manter a leitura (WCAG AA).</p>
          </div>
        </div>
      </Block>

      {/* Tipografia */}
      <Block id="tipografia" className="bg-white">
        <SectionHeading
          title="Tipografia"
          intro="Montserrat dá a geometria do wordmark aos títulos. Inter cuida da leitura nos textos longos. Ambas são gratuitas no Google Fonts."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-dark p-8 text-white">
            <p className="font-display text-7xl font-semibold">Aa</p>
            <p className="mt-4 font-display text-2xl font-semibold">Montserrat</p>
            <p className="mt-1 text-sm text-brand-silver/70">Títulos, chamadas, botões · 500, 600, 700</p>
          </div>
          <div className="rounded-2xl border border-brand-dark/10 p-8">
            <p className="text-7xl font-semibold text-brand-dark">Aa</p>
            <p className="mt-4 text-2xl font-semibold text-brand-dark">Inter</p>
            <p className="mt-1 text-sm text-brand-dark/60">Textos, formulários, legendas · 400, 500, 600</p>
          </div>
        </div>
        <div className="mt-10 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
          {typeScale.map((t) => (
            <div key={t.label} className="grid gap-2 py-6 md:grid-cols-[10rem_1fr_16rem] md:items-baseline">
              <p className="text-sm font-medium text-brand-dark/50">{t.label}</p>
              <p className={`${t.cls} text-brand-dark`}>Engenharia ambiental com propósito</p>
              <p className="text-sm text-brand-dark/50 md:text-right">{t.spec}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Grafismos e componentes */}
      <Block id="grafismos">
        <SectionHeading
          title="Grafismos e componentes"
          intro="Três elementos repetem a marca sem repetir o logo: o traço verde sob títulos, a linha fina do A sobre fotos e a curva verde entre foto e painel."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8">
            <p className="font-display text-2xl font-semibold text-brand-dark">Título de seção</p>
            <span className="axis-rule mt-4" />
            <p className="mt-6 text-sm text-brand-dark/60">Traço: 56 × 3 px, lime em degradê. Sempre abaixo do título, alinhado à esquerda.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img src={axisImages.heroValley} alt="" className="h-full min-h-[12rem] w-full object-cover" />
            <AxisALine className="absolute inset-0 h-full w-full" strokeClass="stroke-white/70" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Linha do A · 1,5 px · branco 40–60%</p>
          </div>
          <div className="axis-navy-surface flex flex-col justify-center gap-4 rounded-2xl p-8">
            <a href="#grafismos" className="axis-btn-solid justify-center">Botão principal</a>
            <a href="#grafismos" className="axis-btn-ghost justify-center">Botão secundário</a>
            <p className="text-sm text-brand-silver/70">Botões em pílula. Lime sólido para a ação principal; contorno lime para a secundária.</p>
          </div>
        </div>
      </Block>

      {/* Fotografia */}
      <Block id="fotografia" className="bg-white">
        <SectionHeading
          title="Fotografia"
          intro="Natureza preservada convivendo com operação industrial real. Luz quente de nascer do sol, verdes profundos, céu limpo. Evite fotos genéricas de banco com pessoas posadas."
        />
        <div className="mt-12 space-y-12">
          {photoGroups.map((g) => (
            <div key={g.title}>
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <p className="font-display text-xl font-semibold text-brand-dark">{g.title}</p>
                <p className="max-w-xl text-sm text-brand-dark/60">{g.note}</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                {g.keys.map((k) => (
                  <img key={k} src={axisImages[k]} alt={k} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* Voz */}
      <Block id="voz">
        <SectionHeading
          title="Voz e mensagens"
          intro="A Axis fala como um engenheiro experiente que explica bem: técnica sem arrogância, otimista sem exagero."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8">
            <p className="font-display text-lg font-semibold text-brand-accent">Fazemos</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-dark/75">
              {voice.do.map((v) => <li key={v} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />{v}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <p className="font-display text-lg font-semibold text-red-700">Evitamos</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-dark/75">
              {voice.dont.map((v) => <li key={v} className="flex gap-3"><X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />{v}</li>)}
            </ul>
          </div>
        </div>
        <div className="axis-navy-surface mt-5 rounded-2xl p-8 text-white md:p-10">
          <p className="font-display text-lg font-semibold text-brand-lime">Frases da marca</p>
          <ul className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {taglines.map((t) => (
              <li key={t} className="border-l-2 border-brand-lime/60 pl-4 font-display text-lg leading-snug text-white/90">{t}</li>
            ))}
          </ul>
        </div>
      </Block>
    </PageWrapper>
  );
}
