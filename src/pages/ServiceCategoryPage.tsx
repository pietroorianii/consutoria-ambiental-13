
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CTASection } from "@/components/cta-section";
import { ServiceBanner } from "@/components/service/ServiceBanner";
import { ServiceList } from "@/components/service/ServiceList";
import { CategoryNotFound } from "@/components/service/CategoryNotFound";
import { serviceCategories, ServiceCategoryType } from "@/data/serviceCategories";
import { PageLayout } from "@/components/layout/PageLayout";

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
    <PageLayout withLeafPattern={false}>
      <ServiceBanner categoryData={categoryData} />
      
      <div className="relative py-16">
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
    </PageLayout>
  );
};

export default ServiceCategoryPage;
