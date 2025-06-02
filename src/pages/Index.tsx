
import { HeroBanner } from "@/components/hero-banner";
import { CompanyIntro } from "@/components/company-intro";
import { FeaturedServices } from "@/components/featured-services";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { PageWrapper } from "@/components/ui/page-wrapper";

const Index = () => {
  return (
    <PageWrapper>
      {/* Fundo simples e moderno */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-eco-green/5"></div>
      
      <HeroBanner />
      <CompanyIntro />
      <FeaturedServices />
      <Testimonials />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
