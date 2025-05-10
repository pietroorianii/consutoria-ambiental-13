
import React from 'react';
import { LegislationItem } from './LegislationItem';
import { LegislationItem as LegislationItemType } from '@/data/legislation/types';
import { SearchResultNotification } from './SearchResultNotification';

interface LegislationResultsProps {
  searchTerm: string;
  filteredItems: Array<LegislationItemType & { categoryId: string, categoryTitle: string }>;
}

export const LegislationResults: React.FC<LegislationResultsProps> = ({
  searchTerm,
  filteredItems
}) => {
  return (
    <div className="mt-8">
      <SearchResultNotification searchTerm={searchTerm} resultCount={filteredItems.length} />
      
      {filteredItems.length === 0 ? (
        <div className="text-center p-10 bg-muted/30 rounded-lg border border-dashed border-muted-foreground/30">
          <p className="text-muted-foreground">Nenhuma legislação encontrada. Tente ajustar seus filtros de busca.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="group">
              <div className="text-xs text-muted-foreground mb-1 px-2">{item.categoryTitle}</div>
              <LegislationItem item={item} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
