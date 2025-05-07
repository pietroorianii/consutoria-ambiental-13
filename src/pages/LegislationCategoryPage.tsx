import { useParams } from "react-router-dom";
import { legislationCategories, LegislationItem } from "@/data/legislationData";
import { LegislationLayout } from "@/components/legislation/LegislationLayout";
import { LegislationList } from "@/components/legislation/LegislationList";
import { LegislationTabs } from "@/components/legislation/LegislationTabs";
import { CategoryNotFound } from "@/components/legislation/CategoryNotFound";

const LegislationCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = legislationCategories.find(cat => {
    const categoryId = cat.link.split('/').pop();
    return categoryId === category;
  });
  
  if (!categoryData) {
    return <CategoryNotFound />;
  }

  // Get the appropriate icon for the header based on category
  const IconComponent = categoryData.icon;

  // Renderizar com subcategorias se existirem
  if (categoryData.subcategories && categoryData.subcategories.length > 0) {
    return (
      <LegislationLayout
        title={categoryData.title}
        description={categoryData.description}
        icon={<IconComponent className="h-12 w-12 text-white" />}
        backgroundImage={categoryData.image}
      >
        <LegislationTabs subcategories={categoryData.subcategories} />
      </LegislationLayout>
    );
  }

  // If the category has string items, convert them to LegislationItem objects
  const legislationItems: LegislationItem[] = Array.isArray(categoryData.items) 
    ? categoryData.items.map((item, index) => ({
        title: item,
        description: `Informações sobre ${item}`,
        link: "#" // Default placeholder link
      }))
    : [];

  // Renderização original para categorias sem subcategorias
  return (
    <LegislationLayout
      title={categoryData.title}
      description={categoryData.description}
      icon={<IconComponent className="h-12 w-12 text-white" />}
      backgroundImage={categoryData.image}
    >
      <LegislationList items={legislationItems} />
    </LegislationLayout>
  );
};

export default LegislationCategoryPage;
