
import React from 'react';
import { Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { legislationCategories } from '@/data/legislation/index';

interface CategoryFilterDropdownProps {
  availableCategories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  isCategoryCheckboxesOpen: boolean;
  setIsCategoryCheckboxesOpen: (isOpen: boolean) => void;
}

export const CategoryFilterDropdown: React.FC<CategoryFilterDropdownProps> = ({
  availableCategories,
  selectedCategories,
  setSelectedCategories,
  isCategoryCheckboxesOpen,
  setIsCategoryCheckboxesOpen
}) => {
  return (
    <DropdownMenu open={isCategoryCheckboxesOpen} onOpenChange={setIsCategoryCheckboxesOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-md">
          <Filter size={16} /> Categorias <ChevronDown size={16} className={`transition-transform ${isCategoryCheckboxesOpen ? 'rotate-180' : ''}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {availableCategories.map((categoryId) => {
          const category = legislationCategories.find(cat => cat.link.includes(categoryId));
          return (
            <DropdownMenuCheckboxItem
              key={categoryId}
              checked={selectedCategories.includes(categoryId)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedCategories([...selectedCategories, categoryId]);
                } else {
                  setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
                }
              }}
            >
              {category?.title || categoryId}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
