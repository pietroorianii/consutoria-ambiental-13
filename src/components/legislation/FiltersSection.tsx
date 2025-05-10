
import React from 'react';
import { CategoryFilterDropdown } from './CategoryFilterDropdown';

interface FiltersSectionProps {
  availableCategories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  isCategoryCheckboxesOpen: boolean;
  setIsCategoryCheckboxesOpen: (isOpen: boolean) => void;
}

export const FiltersSection: React.FC<FiltersSectionProps> = ({
  availableCategories,
  selectedCategories,
  setSelectedCategories,
  isCategoryCheckboxesOpen,
  setIsCategoryCheckboxesOpen
}) => {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-6 px-4">
      <p className="text-muted-foreground flex-1">
        Filtros adicionais:
      </p>
      
      <CategoryFilterDropdown
        availableCategories={availableCategories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        isCategoryCheckboxesOpen={isCategoryCheckboxesOpen}
        setIsCategoryCheckboxesOpen={setIsCategoryCheckboxesOpen}
      />
    </div>
  );
};
