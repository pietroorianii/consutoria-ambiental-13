import { PageWrapper } from "@/components/ui/page-wrapper";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

// Legislation category data
const legislationCategories = {
  industry: {
    title: "Legislação para Indústrias",
    description: "Principais legislações ambientais aplicáveis ao setor industrial, incluindo normas federais, estaduais e municipais que regulamentam as atividades industriais.",
    image: "https://images.unsplash.com/photo-1518542442123-4c25cc0f43d4?auto=format&fit=crop&q=80&w=1000&h=600",
    items: [
      {
        title: "Lei nº 6.938/1981",
        description: "Política Nacional do Meio Ambiente, seus fins e mecanismos de formulação e aplicação.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l6938.htm"
      },
      {
        title: "Resolução CONAMA nº 237/1997",
        description: "Regulamenta os aspectos de licenciamento ambiental estabelecidos na Política Nacional do Meio Ambiente.",
        link: "http://www2.mma.gov.br/port/conama/res/res97/res23797.html"
      },
      {
        title: "Lei nº 12.305/2010",
        description: "Política Nacional de Resíduos Sólidos, que dispõe sobre princípios, objetivos e instrumentos para a gestão integrada de resíduos sólidos.",
        link: "http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm"
      },
      {
        title: "Resolução CONAMA nº 436/2011",
        description: "Estabelece os limites máximos de emissão de poluentes atmosféricos para fontes fixas instaladas ou com pedido de licença de instalação anteriores a 02 de janeiro de 2007.",
        link: "http://www2.mma.gov.br/port/conama/res/res11/res43611.html"
      },
      {
        title: "Lei Complementar nº 140/2011",
        description: "Fixa normas para a cooperação entre a União, os Estados, o Distrito Federal e os Municípios nas ações administrativas relativas à proteção do meio ambiente.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp140.htm"
      }
    ]
  },
  construction: {
    title: "Legislação para Construção Civil",
    description: "Normas e leis ambientais específicas para o setor da construção civil, abrangendo desde o licenciamento de obras até a gestão de resíduos da construção civil.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000&h=600",
    items: [
      {
        title: "Resolução CONAMA nº 307/2002",
        description: "Estabelece diretrizes, critérios e procedimentos para a gestão dos resíduos da construção civil.",
        link: "http://www2.mma.gov.br/port/conama/res/res02/res30702.html"
      },
      {
        title: "Resolução CONAMA nº 348/2004",
        description: "Altera a Resolução CONAMA nº 307/2002, incluindo o amianto na classe de resíduos perigosos.",
        link: "http://www2.mma.gov.br/port/conama/res/res04/res34804.html"
      },
      {
        title: "Lei nº 10.257/2001 (Estatuto da Cidade)",
        description: "Regulamenta os artigos 182 e 183 da Constituição Federal, estabelece diretrizes gerais da política urbana e dá outras providências.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10257.htm"
      },
      {
        title: "NBR 15112/2004",
        description: "Resíduos da construção civil e resíduos volumosos - Áreas de transbordo e triagem - Diretrizes para projeto, implantação e operação.",
        link: "https://www.abntcatalogo.com.br/norma.aspx?ID=517"
      },
      {
        title: "NBR 15113/2004",
        description: "Resíduos sólidos da construção civil e resíduos inertes - Aterros - Diretrizes para projeto, implantação e operação.",
        link: "https://www.abntcatalogo.com.br/norma.aspx?ID=518"
      }
    ]
  },
  agriculture: {
    title: "Legislação para Agricultura",
    description: "Legislações ambientais aplicáveis ao setor agrícola, incluindo normas sobre uso do solo, recursos hídricos, agrotóxicos e preservação ambiental em áreas rurais.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000&h=600",
    items: [
      {
        title: "Lei nº 12.651/2012 (Código Florestal)",
        description: "Dispõe sobre a proteção da vegetação nativa, estabelecendo normas sobre as Áreas de Preservação Permanente (APP) e Reserva Legal.",
        link: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm"
      },
      {
        title: "Lei nº 7.802/1989",
        description: "Dispõe sobre a pesquisa, a experimentação, a produção, a embalagem e rotulagem, o transporte, o armazenamento, a comercialização, a propaganda comercial, a utilização, a importação, a exportação, o destino final dos resíduos e embalagens, o registro, a classificação, o controle, a inspeção e a fiscalização de agrotóxicos, seus componentes e afins.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l7802.htm"
      },
      {
        title: "Resolução CONAMA nº 284/2001",
        description: "Dispõe sobre o licenciamento de empreendimentos de irrigação.",
        link: "http://www2.mma.gov.br/port/conama/res/res01/res28401.html"
      },
      {
        title: "Decreto nº 4.074/2002",
        description: "Regulamenta a Lei nº 7.802/1989, que dispõe sobre agrotóxicos, seus componentes e afins.",
        link: "http://www.planalto.gov.br/ccivil_03/decreto/2002/d4074.htm"
      },
      {
        title: "Instrução Normativa nº 2/2008 do Ministério da Agricultura",
        description: "Aprova as normas de produção, comercialização e utilização de sementes e mudas.",
        link: "https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-agricolas/sementes-e-mudas/legislacao"
      }
    ]
  },
  water: {
    title: "Legislação para Recursos Hídricos",
    description: "Normas e regulamentações para gestão, uso e preservação dos recursos hídricos, incluindo outorgas, enquadramento de corpos d'água e cobrança pelo uso da água.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000&h=600",
    items: [
      {
        title: "Lei nº 9.433/1997",
        description: "Política Nacional de Recursos Hídricos e criação do Sistema Nacional de Gerenciamento de Recursos Hídricos.",
        link: "http://www.planalto.gov.br/ccivil_03/leis/l9433.htm"
      },
      {
        title: "Resolução CONAMA nº 357/2005",
        description: "Dispõe sobre a classificação dos corpos de água e diretrizes ambientais para o seu enquadramento, bem como estabelece as condições e padrões de lançamento de efluentes.",
        link: "http://www2.mma.gov.br/port/conama/res/res05/res35705.html"
      },
      {
        title: "Resolução CONAMA nº 430/2011",
        description: "Dispõe sobre as condições e padrões de lançamento de efluentes, complementa e altera a Resolução nº 357, de 17 de março de 2005, do Conselho Nacional do Meio Ambiente-CONAMA.",
        link: "http://www2.mma.gov.br/port/conama/res/res11/res43011.html"
      },
      {
        title: "Resolução CNRH nº 16/2001",
        description: "Estabelece critérios gerais para a outorga de direito de uso de recursos hídricos.",
        link: "https://cnrh.mdr.gov.br/resolucoes/74-resolucao-n-16-de-08-de-maio-de-2001/file"
      },
      {
        title: "Resolução CNRH nº 91/2008",
        description: "Dispõe sobre procedimentos gerais para o enquadramento dos corpos de água superficiais e subterrâneos.",
        link: "https://cnrh.mdr.gov.br/resolucoes/917-resolucao-n-91-de-5-de-novembro-de-2008/file"
      }
    ]
  }
};

type LegislationCategory = keyof typeof legislationCategories;

const LegislationCategoryPage = () => {
  const { category } = useParams<{ category: LegislationCategory }>();
  const categoryData = category ? legislationCategories[category as LegislationCategory] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!categoryData) {
    return (
      <PageWrapper>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
          <p className="text-muted-foreground mb-8">A categoria de legislação solicitada não existe.</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Banner */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${categoryData.image}')`,
            backgroundPosition: "center 40%"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 backdrop-blur-[1px]" />
        </div>
        
        <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-20"></div>
        
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ 
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
            }}>
              {categoryData.title}
            </h1>
            <p className="text-white/90 text-lg" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {categoryData.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Legislation List */}
      <section className="container py-16 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {categoryData.items.map((item, index) => (
            <Card key={index} className="eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <CardHeader className="text-center">
                <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center" style={{ fontFamily: "'Lato', sans-serif" }}>{item.description}</p>
                <div className="flex justify-center">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-eco-green hover:text-eco-green-dark transition-colors flex items-center gap-2 group"
                  >
                    Acessar legislação <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      <CTASection />
    </PageWrapper>
  );
};

export default LegislationCategoryPage;
