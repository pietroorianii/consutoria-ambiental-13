
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { legislationCategories } from '@/data/legislation/index';
import { LegislationItem } from '@/data/legislation/types';

interface LocationState {
  searchTerm?: string;
  selectedItem?: string;
  categoryFilter?: string;
}

interface LegislationItemWithCategory extends LegislationItem {
  categoryId: string;
  categoryTitle: string;
}

export const useLegislationData = () => {
  const location = useLocation();
  const locationState = location.state as LocationState;
  
  const [searchTerm, setSearchTerm] = useState(locationState?.searchTerm || '');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(locationState?.categoryFilter || null);
  const [selectedItem, setSelectedItem] = useState(locationState?.selectedItem || '');
  const [isCategoryCheckboxesOpen, setIsCategoryCheckboxesOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Memoizar a coleta de itens de legislação
  const allLegislationItems = useMemo(() => {
    const items: LegislationItemWithCategory[] = [];
    
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
    
    return items;
  }, []);
  
  // Initialize selected categories with all available categories
  useEffect(() => {
    const allCategoryIds = [...new Set(allLegislationItems.map(item => item.categoryId))];
    setSelectedCategories(allCategoryIds);
  }, [allLegislationItems]);
  
  // Memoizar itens filtrados
  const filteredItems = useMemo(() => {
    return allLegislationItems.filter(item => {
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
    }).map(item => ({
      ...item,
      shouldHighlight: searchTerm ? 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) : false,
      searchTerm: searchTerm,
      isSelected: item.title === selectedItem
    }));
  }, [allLegislationItems, selectedCategories, searchTerm, selectedItem]);
  
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

  // Get unique category IDs from all items
  const availableCategories = useMemo(() => {
    return [...new Set(allLegislationItems.map(item => item.categoryId))];
  }, [allLegislationItems]);
  
  // Memoizar função de busca
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return {
    searchTerm,
    filteredItems,
    handleSearch,
    availableCategories,
    selectedCategories,
    setSelectedCategories,
    isCategoryCheckboxesOpen,
    setIsCategoryCheckboxesOpen
  };
};
