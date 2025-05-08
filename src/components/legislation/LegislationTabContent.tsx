
import { TabsContent } from "@/components/ui/tabs";
import { LegislationSubcategory } from "@/data/legislationData";
import { LegislationItem } from "./LegislationItem";

interface LegislationTabContentProps {
  subcategory: LegislationSubcategory & {
    items: any[];
  };
  index: number;
  searchTerm?: string;
}

export const LegislationTabContent = ({ subcategory, index, searchTerm }: LegislationTabContentProps) => {
  const hasHighlightedItems = subcategory.items.some(item => item.shouldHighlight);
  
  return (
    <TabsContent key={index} value={subcategory.title} className="space-y-8">
      <div className="bg-muted/30 p-6 rounded-lg mb-8 border border-eco-green/20">
        <h3 className="text-xl font-medium mb-2 text-eco-green">{subcategory.title}</h3>
        <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
          {subcategory.description}
        </p>
      </div>
      
      {searchTerm && hasHighlightedItems && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800/30 mb-4">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <span className="font-medium">Resultados encontrados nesta subcategoria</span>
          </p>
        </div>
      )}
      
      <div className="space-y-6">
        {subcategory.items.map((item, itemIndex) => (
          <LegislationItem key={itemIndex} item={item} index={itemIndex} />
        ))}
      </div>
    </TabsContent>
  );
};
