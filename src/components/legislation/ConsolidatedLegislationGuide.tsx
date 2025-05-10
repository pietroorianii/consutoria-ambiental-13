import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { legislationCategories } from '@/data/legislation/index';
import { LegislationCategory, LegislationItem as LegislationItemType } from '@/data/legislation/types';
import { LegislationItem } from './LegislationItem';
import { Filter, ChevronDown } from "lucide-react";
import { SearchBar } from './SearchBar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LocationState {
  searchTerm?: string;
  selectedItem?: string;
  categoryFilter?: string;
}

export const ConsolidatedLegislationGuide = () => {
  const location = useLocation();
  const locationState = location.state as LocationState;
  
  const [searchTerm, setSearchTerm] = useState(locationState?.searchTerm || '');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(locationState?.categoryFilter || null);
  const [selectedItem, setSelectedItem] = useState(locationState?.selectedItem || '');
  const [allLegislationItems, setAllLegislationItems] = useState<Array<LegislationItemType & { categoryId: string, categoryTitle: string }>>([]);
  const [filteredItems, setFilteredItems] = useState<Array<LegislationItemType & { categoryId: string, categoryTitle: string }>>([]);
  const [isCategoryCheckboxesOpen, setIsCategoryCheckboxesOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Collect all legislation items on component mount
  useEffect(() => {
    const items: Array<LegislationItemType & { categoryId: string, categoryTitle: string }> = [];
    
    legislationCategories.forEach(category => {
      const categoryId = category.link.split('/').pop() || '';
      
      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach(subcategory => {
          subcategory.items.forEach(item => {
            items.push({
              ...item,
              categoryId,
              categoryTitle: category.title
            });
          });
        });
      } else if (Array.isArray(category.items)) {
        category.items.forEach(item => {
          if (typeof item === 'object' && item !== null && 'title' in item) {
            items.push({
              ...item,
              categoryId,
              categoryTitle: category.title
            });
          }
        });
      }
    });
    
    setAllLegislationItems(items);
    
    // Initialize selected categories with all available categories
    const allCategoryIds = [...new Set(items.map(item => item.categoryId))];
    setSelectedCategories(allCategoryIds);
  }, []);
  
  // Apply filtering when search term or category filters change
  useEffect(() => {
    const filtered = allLegislationItems.filter(item => {
      // Filter by selected categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(item.categoryId)) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm) {
        const regex = new RegExp(searchTerm, 'i');
        return regex.test(item.title) || regex.test(item.description);
      }
      
      return true;
    });
    
    // Apply search term and highlight flags
    const itemsWithHighlight = filtered.map(item => ({
      ...item,
      shouldHighlight: searchTerm ? 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) : false,
      searchTerm: searchTerm,
      isSelected: item.title === selectedItem
    }));
    
    setFilteredItems(itemsWithHighlight);
  }, [searchTerm, selectedCategories, allLegislationItems, selectedItem]);
  
  // Scroll to selected item when it changes
  useEffect(() => {
    if (selectedItem) {
      setTimeout(() => {
        const element = document.getElementById(`legislation-item-${selectedItem.replace(/\s+/g, '-').toLowerCase()}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight-item');
          
          // Remove highlight after animation
          setTimeout(() => {
            element.classList.remove('highlight-item');
          }, 4000);
        }
      }, 500);
    }
  }, [selectedItem]);

  // Get unique category IDs from filtered items  
  const availableCategories = [...new Set(allLegislationItems.map(item => item.categoryId))];
  
  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      {/* Hero search box */}
      <div className="mb-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Consulta de Legislação Ambiental
          </h2>
          <p className="text-muted-foreground mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
            Pesquise por leis, resoluções ou palavras-chave para encontrar rapidamente a legislação que você precisa.
          </p>
          <div className="bg-gradient-to-r from-eco-green/5 to-eco-blue/5 p-6 rounded-lg border border-eco-green/20 shadow-md">
            <SearchBar onSearch={handleSearch} initialValue={searchTerm} />
          </div>
        </div>
      </div>
      
      {/* Filter options */}
      <div className="flex flex-wrap gap-3 items-center mb-6 px-4">
        <p className="text-muted-foreground flex-1">
          Filtros adicionais:
        </p>
        
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
      </div>
      
      {/* Legislation items */}
      <div className="mt-8">
        {searchTerm && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6 border border-yellow-200 dark:border-yellow-800/30">
            <p className="text-center">
              <span className="font-medium">Resultados para: </span>
              <span className="bg-yellow-200 dark:bg-yellow-800 px-2 py-0.5 rounded">{searchTerm}</span>
              <span className="ml-2 text-muted-foreground">({filteredItems.length} itens encontrados)</span>
            </p>
          </div>
        )}
        
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
    </div>
  );
};
