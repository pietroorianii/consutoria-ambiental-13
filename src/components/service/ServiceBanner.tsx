
import { ServiceCategoryType } from "@/data/serviceCategories";

interface ServiceBannerProps {
  categoryData: {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: string;
  };
}

export function ServiceBanner({ categoryData }: ServiceBannerProps) {
  return (
    <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
        backgroundImage: `url('${categoryData.image || "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600"}')`
      }}>
      </div>
      <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-blue/20"></div>
      
      {/* Elementos fluidos decorativos */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-eco-green/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-eco-blue/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm animate-float">
            {categoryData.icon}
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-up" style={{
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0px 2px 4px rgba(0,0,0,0.2)"
            }}>{categoryData.title}</h1>
            <p style={{
              fontFamily: "'Roboto', sans-serif",
              animationDelay: "0.1s"
            }} className="text-white/90 mt-4 max-w-3xl mx-auto animate-fade-up text-lg">
              {categoryData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
