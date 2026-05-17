import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ServiceCategoryData } from "@/data/servicePageData";
import { getServiceTheme, getThemeClasses } from "@/utils/serviceTheme";

interface ServiceCategoryProps {
  category: ServiceCategoryData;
  index: number;
}

const ServiceCategoryComponent: React.FC<ServiceCategoryProps> = ({ category, index }) => {
  const IconComponent = category.icon;
  
  // Extrair o ID da categoria a partir do link (ex: '/services/water_resources' -> 'water_resources')
  const categoryId = category.link.split('/').pop() || "";
  const { color } = getServiceTheme(categoryId);
  const theme = getThemeClasses(color);

  return (
    <div 
      className="scroll-trigger max-w-4xl w-full" 
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className={`space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-md border ${theme.border} transition-all`}>
        <div className="flex flex-col items-center gap-4">
          <div className={`${theme.lightBg} p-4 rounded-full animate-float`}>
            <IconComponent className={`h-12 w-12 ${theme.text}`} />
          </div>
          <h2 className="text-3xl font-bold text-center" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            {category.title}
          </h2>
        </div>
        
        <p className="text-muted-foreground text-lg text-center" style={{
          fontFamily: "'Lato', sans-serif"
        }}>
          {category.description}
        </p>
        
        <ul className="space-y-3 mx-auto max-w-lg">
          {category.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 rounded-md">
              <div className={`${theme.lightBg} p-1 mt-0.5 rounded-full`}>
                <div className={`rounded-full ${theme.buttonBg} w-2 h-2`}></div>
              </div>
              <span 
                style={{ fontFamily: "'Lato', sans-serif" }} 
                className="text-muted-foreground text-lg font-medium"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center pt-2">
          <Button asChild className={`${theme.buttonBg} group`}>
            <Link to={category.link} className="flex items-center gap-2 hover:underline group-hover:scale-105 transition-all duration-300">
              Ver detalhes <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Memoização do componente
export const ServiceCategory = React.memo(ServiceCategoryComponent, (prevProps, nextProps) => {
  return prevProps.category.title === nextProps.category.title && 
         prevProps.index === nextProps.index;
});
