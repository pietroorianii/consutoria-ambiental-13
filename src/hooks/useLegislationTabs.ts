
import { useState } from "react";
import { LegislationSubcategory } from "@/data/legislationData";

export const useLegislationTabs = (
  subcategories: (LegislationSubcategory & { items: any[] })[], 
  searchTerm?: string
) => {
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
  
  return { 
    activeTab,
    setActiveTab,
    highlightedCountPerTab
  };
};
