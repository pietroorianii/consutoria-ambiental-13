
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LegislationSubcategory } from "@/data/legislationData";

interface LegislationTabListProps {
  subcategories: (LegislationSubcategory & {
    items: any[];
  })[];
  highlightedCountPerTab: Record<string, number>;
  searchTerm?: string;
}

export const LegislationTabList: React.FC<LegislationTabListProps> = ({ 
  subcategories, 
  highlightedCountPerTab, 
  searchTerm 
}) => {
  return (
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
  );
};
