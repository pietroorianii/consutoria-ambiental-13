
import { useParams, useLocation } from "react-router-dom";
import { legislationCategories, LegislationItem } from "@/data/legislationData";
import { LegislationLayout } from "@/components/legislation/LegislationLayout";
import { LegislationList } from "@/components/legislation/LegislationList";
import { LegislationTabs } from "@/components/legislation/LegislationTabs";
import { CategoryNotFound } from "@/components/legislation/CategoryNotFound";
import { useEffect, useState } from "react";

interface LocationState {
  searchTerm?: string;
  selectedItem?: string;
}

const LegislationCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const locationState = location.state as LocationState;
  const searchTerm = locationState?.searchTerm;
  const selectedItem = locationState?.selectedItem;
  
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
      <LegislationLayout
        title={categoryData.title}
        description={categoryData.description}
        icon={<IconComponent className="h-12 w-12 text-white" />}
        backgroundImage={categoryData.image}
      >
        <LegislationTabs subcategories={subcategoriesWithHighlight} searchTerm={searchTerm} />
      </LegislationLayout>
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
    <LegislationLayout
      title={categoryData.title}
      description={categoryData.description}
      icon={<IconComponent className="h-12 w-12 text-white" />}
      backgroundImage={categoryData.image}
    >
      <LegislationList items={legislationItems} searchTerm={searchTerm} />
    </LegislationLayout>
  );
};

export default LegislationCategoryPage;
