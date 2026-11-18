import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";
import { AxisPageHero } from "@/components/brand/AxisPageHero";
import { axisImages } from "@/components/brand/assets";
import { LicenseDiagnostic } from "@/components/tools/LicenseDiagnostic";
import { RenewalCalculator } from "@/components/tools/RenewalCalculator";
import { SectionHeading } from "@/components/brand/SectionHeading";

const DiagnosticPage = () => (
  <PageWrapper>
    <MetaTags
      title="Qual licença ambiental eu preciso? Diagnóstico gratuito | Axis"
      description="Responda 5 perguntas e descubra o caminho provável de licenciamento no Paraná: DLAM, LAC, LAS, LP/LI/LO, regularização, outorga e autorização florestal."
    />
    <AxisPageHero
      title={<>Qual licença ambiental <span className="font-semibold text-brand-lime">você precisa?</span></>}
      description="Cinco perguntas, dois minutos. Você recebe o caminho provável para a sua atividade e pode pedir a confirmação de um engenheiro, sem custo."
      image={axisImages.heroValley}
    />
    <section className="bg-brand-cream py-14 md:py-20">
      <div className="container max-w-5xl">
        <LicenseDiagnostic />
      </div>
    </section>
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-2">
        <SectionHeading
          title="Já tem licença? Não perca o prazo de renovação."
          intro="Perder o prazo de 120 dias tira a prorrogação automática. Calcule a data limite agora e, se quiser, deixe a Axis cuidar da renovação."
        />
        <RenewalCalculator />
      </div>
    </section>
  </PageWrapper>
);

export default DiagnosticPage;
