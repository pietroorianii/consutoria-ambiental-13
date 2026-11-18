import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { company } from "@/config/company";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  /** URL canônica explícita. Se omitida, é montada a partir da rota atual. */
  url?: string;
  companyName?: string;
  /** Dados estruturados extras (JSON-LD) específicos da página. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = `${company.name} | Consultoria Ambiental em Ponta Grossa e no Paraná`,
  description = "Licenciamento no IAT, outorgas, estudos técnicos, resíduos, ESG e gestão de conformidade para empresas de Ponta Grossa e de todo o Paraná.",
  keywords,
  image = "/og-axis.jpg",
  url,
  companyName = company.name,
  jsonLd,
  noindex = false,
}) => {
  const { pathname } = useLocation();
  // Antes, todas as páginas declaravam a home como canônica — o Google podia ignorar as páginas internas.
  const canonical = url ?? `${company.domain}${pathname === "/" ? "" : pathname}`;
  const absImage = image.startsWith("http") ? image : `${company.domain}${image}`;
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={companyName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absImage} />

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
};

/** Dados estruturados da empresa (Google: negócio local / serviço profissional). */
export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  url: company.domain,
  logo: `${company.domain}/icon-512.png`,
  image: `${company.domain}/og-axis.jpg`,
  email: company.email,
  telephone: company.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
  areaServed: [...company.cities, "Paraná"].map((name) => ({ "@type": "Place", name })),
  openingHours: "Mo-Fr 08:00-18:00",
  knowsAbout: ["Licenciamento ambiental", "Outorga de recursos hídricos", "PGRS", "ESG", "IAT Paraná"],
});
