
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  companyName?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Solari Soluções Ambientais | Consultoria Ambiental Especializada",
  description = "Consultoria e assessoria completa para licenciamento, gestão de resíduos e conformidade com a legislação ambiental.",
  keywords = "consultoria ambiental, licenciamento ambiental, sustentabilidade, gestão de resíduos, IAT, Paraná, Solari Soluções Ambientais",
  image = "/lovable-uploads/027bd48a-0820-4102-841d-43d98185f223.png",
  url = "https://solariambiental.com.br",
  companyName = "Solari Soluções Ambientais"
}) => {
  return (
    <Helmet>
      {/* Tags Essenciais */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={companyName} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={companyName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Adicionais */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};
