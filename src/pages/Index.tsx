
import { HeroBanner } from "@/components/hero-banner";
import { CompanyIntro } from "@/components/company-intro";
import { FeaturedServices } from "@/components/featured-services";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <CompanyIntro />
        <FeaturedServices />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
