
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CTASection } from "@/components/cta-section";
import { ServiceBanner } from "@/components/service/ServiceBanner";
import { ServiceList } from "@/components/service/ServiceList";
import { CategoryNotFound } from "@/components/service/CategoryNotFound";
import { serviceCategories, ServiceCategoryType } from "@/data/serviceCategories";

const ServiceCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = category ? serviceCategories[category as ServiceCategoryType] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!categoryData) {
    return <CategoryNotFound />;
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <ServiceBanner categoryData={categoryData} />
        
        <div className="relative py-16">
          {/* Elementos decorativos fluidos */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          
          <div className="container relative">
            <ServiceList services={categoryData.services} />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 leaf-pattern -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServiceCategoryPage;
