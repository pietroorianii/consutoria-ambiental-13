
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
      <main>
        <ServiceBanner categoryData={categoryData} />
        <ServiceList services={categoryData.services} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ServiceCategoryPage;
