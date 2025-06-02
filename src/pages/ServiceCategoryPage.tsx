
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CTASection } from "@/components/cta-section";
import { ServiceBanner } from "@/components/service/ServiceBanner";
import { ServiceList } from "@/components/service/ServiceList";
import { CategoryNotFound } from "@/components/service/CategoryNotFound";
import { serviceCategories, ServiceCategoryType } from "@/data/serviceCategories";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { TabsBackgroundDecoration } from "@/components/legislation/TabsBackgroundDecoration";

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
    <PageWrapper>
      <ServiceBanner categoryData={categoryData} />
      
      <div className="relative py-16">
        <TabsBackgroundDecoration />
        
        <div className="container relative">
          <ServiceList services={categoryData.services} categoryId={category || ''} />
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 leaf-pattern -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
        <CTASection />
      </div>
    </PageWrapper>
  );
};

export default ServiceCategoryPage;
