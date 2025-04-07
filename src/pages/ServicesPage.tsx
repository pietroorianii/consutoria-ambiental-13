import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ServiceCategories } from "@/components/service/ServiceCategories";
import { CTASection } from "@/components/cta-section";
import { PageLayout } from "@/components/layout/PageLayout";

const ServicesPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-eco-green/90 to-eco-blue/90 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/lovable-uploads/a408d92a-4d31-4b65-a964-b21fa9920041.png')" }}></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Nossos Serviços
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-up" style={{ fontFamily: "'Roboto', sans-serif", animationDelay: "0.2s" }}>
            Descubra as soluções ambientais que oferecemos para sua empresa.
          </p>
        </div>
      </div>

      {/* Service Categories Section */}
      <ServiceCategories />

      {/* Call to Action Section */}
      <CTASection />
    </PageLayout>
  );
};

export default ServicesPage;
