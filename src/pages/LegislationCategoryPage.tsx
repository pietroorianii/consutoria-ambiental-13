
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { legislationCategories, LegislationItem } from "@/data/legislationData";
import { LegislationList } from "@/components/legislation/LegislationList";
import { LegislationTabs } from "@/components/legislation/LegislationTabs";
import { CategoryNotFound } from "@/components/legislation/CategoryNotFound";
import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { CTASection } from "@/components/cta-section";
import { PageBanner } from "@/components/ui/page-banner";
import { SearchBar } from "@/components/legislation/SearchBar";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LocationState {
  searchTerm?: string;
  selectedItem?: string;
}

const LegislationCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as LocationState;
  
  const [searchTerm, setSearchTerm] = useState(locationState?.searchTerm || "");
  const [selectedItem, setSelectedItem] = useState(locationState?.selectedItem || "");
  
  const [scrollToItem, setScrollToItem] = useState(false);
  
  const categoryData = legislationCategories.find(cat => {
    const categoryId = cat.link.split('/').pop();
    return categoryId === category;
  });
  
  useEffect(() => {
    if (selectedItem && !scrollToItem) {
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
        setScrollToItem(true);
      }, 500);
    }
  }, [selectedItem, scrollToItem]);

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  if (!categoryData) {
    return <CategoryNotFound />;
  }

  // Get the appropriate icon for the header based on category
  const IconComponent = categoryData.icon;

  // Renderizar com subcategorias se existirem
  if (categoryData.subcategories && categoryData.subcategories.length > 0) {
    // If there's a search term, highlight it in subcategories
    const subcategoriesWithHighlight = categoryData.subcategories.map(subcategory => ({
      ...subcategory,
      items: subcategory.items.map(item => ({
        ...item,
        shouldHighlight: searchTerm ? (
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) : false,
        searchTerm: searchTerm || '',
        isSelected: item.title === selectedItem
      }))
    }));

    return (
      <PageWrapper>
        <PageBanner 
          title={categoryData.title}
          description={categoryData.description}
          icon={<IconComponent className="h-12 w-12 text-eco-green" />}
          image={categoryData.image}
        />
        
        <div className="container py-6">
          <div className="max-w-3xl mx-auto mb-8">
            <SearchBar 
              onSearch={handleSearch} 
              initialValue={searchTerm} 
              placeholder={`Buscar em ${categoryData.title}...`}
            />
          </div>
        </div>
        
        <TooltipProvider>
          <LegislationTabs subcategories={subcategoriesWithHighlight} searchTerm={searchTerm} />
        </TooltipProvider>
        
        <CTASection />
      </PageWrapper>
    );
  }

  // If the category has string items, convert them to LegislationItem objects
  const legislationItems: LegislationItem[] = Array.isArray(categoryData.items) 
    ? categoryData.items.map((item, index) => {
        const itemObj = typeof item === 'string' 
          ? {
              title: item,
              description: `Informações sobre ${item}`,
              link: "#" // Default placeholder link
            }
          : item;
          
        return {
          ...itemObj,
          shouldHighlight: searchTerm ? (
            itemObj.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            itemObj.description.toLowerCase().includes(searchTerm.toLowerCase())
          ) : false,
          searchTerm: searchTerm || '',
          isSelected: itemObj.title === selectedItem
        };
      })
    : [];

  // Renderização original para categorias sem subcategorias
  return (
    <PageWrapper>
      <PageBanner 
        title={categoryData.title}
        description={categoryData.description}
        icon={<IconComponent className="h-12 w-12 text-eco-green" />}
        image={categoryData.image}
      />
      
      <div className="container py-6">
        <div className="max-w-3xl mx-auto mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            initialValue={searchTerm} 
            placeholder={`Buscar em ${categoryData.title}...`}
          />
        </div>
      </div>
      
      <TooltipProvider>
        <LegislationList items={legislationItems} searchTerm={searchTerm} />
      </TooltipProvider>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationCategoryPage;
