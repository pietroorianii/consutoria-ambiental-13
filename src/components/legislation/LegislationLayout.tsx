
import { PageWrapper } from "@/components/ui/page-wrapper";
import { useEffect } from "react";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { LucideIcon } from "lucide-react";

interface LegislationLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
  children: React.ReactNode;
}

export const LegislationLayout = ({
  title, 
  description, 
  icon, 
  backgroundImage,
  children
}: LegislationLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      {/* Standardized Page Header */}
      <PageHeader 
        title={title}
        description={description}
        icon={icon}
        backgroundImage={backgroundImage}
      />
      
      {children}
      
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};
