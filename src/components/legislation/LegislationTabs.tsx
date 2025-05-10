
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { LegislationSubcategory } from "@/data/legislationData";
import { LegislationTabContent } from "./LegislationTabContent";
import { TabSearchNotification } from "./TabSearchNotification";
import { LegislationTabList } from "./LegislationTabList";
import { TabsBackgroundDecoration } from "./TabsBackgroundDecoration";
import { useLegislationTabs } from "@/hooks/useLegislationTabs";

interface LegislationTabsProps {
  subcategories: (LegislationSubcategory & {
    items: any[];
  })[];
  searchTerm?: string;
}

export const LegislationTabs = ({ subcategories, searchTerm }: LegislationTabsProps) => {
  const { activeTab, setActiveTab, highlightedCountPerTab } = useLegislationTabs(subcategories, searchTerm);
  
  return (
    <section className="container py-16 relative">
      <TabsBackgroundDecoration />
      
      <div className="max-w-4xl mx-auto">
        <TabSearchNotification searchTerm={searchTerm} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <LegislationTabList 
            subcategories={subcategories} 
            highlightedCountPerTab={highlightedCountPerTab} 
            searchTerm={searchTerm} 
          />
          
          {subcategories.map((subcat, index) => (
            <LegislationTabContent key={index} subcategory={subcat} index={index} searchTerm={searchTerm} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};
