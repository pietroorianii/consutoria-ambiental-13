
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LegislationSubcategory } from "@/data/legislationData";
import { LegislationTabContent } from "./LegislationTabContent";
import { useState } from "react";

interface LegislationTabsProps {
  subcategories: (LegislationSubcategory & {
    items: any[];
  })[];
  searchTerm?: string;
}

export const LegislationTabs = ({ subcategories, searchTerm }: LegislationTabsProps) => {
  // If we have a search term, determine which tab should be active initially
  const getDefaultTab = (): string => {
    if (!searchTerm) return subcategories[0].title;
    
    // Find the first subcategory that has matching items
    const matchingSubcategory = subcategories.find(subcat => 
      subcat.items.some(item => item.shouldHighlight)
    );
    
    return matchingSubcategory ? matchingSubcategory.title : subcategories[0].title;
  };
  
  const [activeTab, setActiveTab] = useState(getDefaultTab());
  
  // Count highlighted items per tab
  const highlightedCountPerTab = subcategories.reduce((acc, subcat) => {
    acc[subcat.title] = subcat.items.filter(item => item.shouldHighlight).length;
    return acc;
  }, {} as Record<string, number>);
  
  return (
    <section className="container py-16 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        {searchTerm && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6 border border-yellow-200 dark:border-yellow-800/30">
            <p className="text-center">
              <span className="font-medium">Resultados para: </span>
              <span className="bg-yellow-200 dark:bg-yellow-800 px-2 py-0.5 rounded">{searchTerm}</span>
            </p>
          </div>
        )}
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto justify-center mb-8 bg-muted/50 p-2 border border-eco-green/10">
            {subcategories.map((subcat, index) => (
              <TabsTrigger 
                key={index} 
                value={subcat.title}
                className="mb-2 data-[state=active]:bg-eco-green data-[state=active]:text-white px-4 py-2 rounded-md font-medium relative"
              >
                {subcat.title}
                {searchTerm && highlightedCountPerTab[subcat.title] > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-200 text-black text-xs px-1.5 py-0.5 rounded-full">
                    {highlightedCountPerTab[subcat.title]}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {subcategories.map((subcat, index) => (
            <LegislationTabContent key={index} subcategory={subcat} index={index} searchTerm={searchTerm} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};
