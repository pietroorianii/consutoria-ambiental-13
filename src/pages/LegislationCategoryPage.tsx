
import { useParams } from "react-router-dom";
import { legislationCategories } from "@/data/legislationData";
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

  // Renderização original para categorias sem subcategorias
  return (
    <LegislationLayout
      title={categoryData.title}
      description={categoryData.description}
      icon={<IconComponent className="h-12 w-12 text-white" />}
      backgroundImage={categoryData.image}
    >
      <LegislationList items={categoryData.items} />
    </LegislationLayout>
  );
};

export default LegislationCategoryPage;
