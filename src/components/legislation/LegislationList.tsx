
import { LegislationItem as LegislationItemType } from "@/data/legislation/types";
import { LegislationItem } from "./LegislationItem";

interface LegislationListProps {
  items: (LegislationItemType & {
    shouldHighlight?: boolean;
    searchTerm?: string;
    isSelected?: boolean;
  })[];
  searchTerm?: string;
}

export const LegislationList = ({ items, searchTerm }: LegislationListProps) => {
  return (
    <section className="container py-16 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10"></div>
      
      {searchTerm && (
        <div className="bg-muted/50 p-4 rounded-lg mb-6 border border-eco-green/10">
          <p className="text-center">
            <span className="font-medium">Resultados para: </span>
            <span className="bg-yellow-200 dark:bg-yellow-800 px-2 py-0.5 rounded">{searchTerm}</span>
          </p>
        </div>
      )}
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <LegislationItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
