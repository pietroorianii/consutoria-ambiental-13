
import { TabsContent } from "@/components/ui/tabs";
import { LegislationSubcategory } from "@/data/legislationData";
import { LegislationItem } from "./LegislationItem";

interface LegislationTabContentProps {
  subcategory: LegislationSubcategory;
  index: number;
}

export const LegislationTabContent = ({ subcategory, index }: LegislationTabContentProps) => {
  return (
    <TabsContent key={index} value={subcategory.title} className="space-y-8">
      <div className="bg-muted/30 p-4 rounded-lg mb-6">
        <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
          {subcategory.description}
        </p>
      </div>
      
      <div className="space-y-6">
        {subcategory.items.map((item, itemIndex) => (
          <LegislationItem key={itemIndex} item={item} index={itemIndex} />
        ))}
      </div>
    </TabsContent>
  );
};
