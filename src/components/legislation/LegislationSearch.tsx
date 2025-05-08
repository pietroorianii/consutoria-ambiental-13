
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { legislationCategories } from "@/data/legislation/index";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  categoryTitle: string;
  subcategory?: string;
  link: string;
}

export const LegislationSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  // Flatten all legislation items into a searchable array
  const getAllLegislationItems = (): SearchResult[] => {
    const results: SearchResult[] = [];
    
    legislationCategories.forEach(category => {
      // If category has subcategories
      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach(subcategory => {
          subcategory.items.forEach(item => {
            results.push({
              title: item.title,
              description: item.description,
              category: category.link.split('/').pop() || '',
              categoryTitle: category.title,
              subcategory: subcategory.title,
              link: item.link
            });
          });
        });
      }
      // If category has direct items
      else if (category.items && Array.isArray(category.items)) {
        category.items.forEach(item => {
          if (typeof item === 'object' && item !== null && 'title' in item) {
            results.push({
              title: item.title,
              description: item.description || '',
              category: category.link.split('/').pop() || '',
              categoryTitle: category.title,
              link: item.link || '#'
            });
          }
        });
      }
    });
    
    return results;
  };

  const allItems = getAllLegislationItems();
  
  // Filter items based on search query
  const filteredItems = query === "" 
    ? [] 
    : allItems.filter(item => {
        const searchRegex = new RegExp(query, 'i');
        return (
          searchRegex.test(item.title) || 
          searchRegex.test(item.description)
        );
      });
  
  const handleSelectItem = (item: SearchResult) => {
    setOpen(false);
    
    // Navigate to the consolidated legislation page with search parameters
    navigate(`/legislation`, { 
      state: { 
        searchTerm: query,
        selectedItem: item.title,
        categoryFilter: item.category
      } 
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative w-full">
            <Input
              placeholder="Buscar legislação ambiental..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-4 py-3 shadow-md focus:ring-eco-green border-eco-green/20 hover:border-eco-green/40"
              onFocus={() => setOpen(true)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 rounded-full"
              >
                ✕
              </Button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <Command>
            <CommandInput placeholder="Buscar legislação..." value={query} onValueChange={setQuery} />
            <CommandList>
              <CommandEmpty>Nenhuma legislação encontrada.</CommandEmpty>
              <CommandGroup>
                {filteredItems.slice(0, 10).map((item, index) => (
                  <CommandItem
                    key={index}
                    onSelect={() => handleSelectItem(item)}
                    className="cursor-pointer flex flex-col items-start p-3 hover:bg-muted"
                  >
                    <div className="text-base font-medium">
                      {highlightMatch(item.title, query)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {highlightMatch(item.description, query)}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-eco-green/10 text-eco-green text-xs px-2 py-0.5 rounded-full">
                        {item.categoryTitle}
                      </span>
                      {item.subcategory && (
                        <span className="bg-eco-blue/10 text-eco-blue text-xs px-2 py-0.5 rounded-full">
                          {item.subcategory}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

// Helper function to highlight matched text
const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === query.toLowerCase()) {
      return <span key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">{part}</span>;
    }
    return part;
  });
};
