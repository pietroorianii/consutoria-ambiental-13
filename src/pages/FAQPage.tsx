
import React, { useState } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { faqData } from "@/data/faqData";
import { HelpCircle, Search, ExternalLink, MessageCircle } from "lucide-react";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar FAQs baseado na busca
  const filteredFAQs = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const displayCategories = selectedCategory 
    ? filteredFAQs.filter(cat => cat.id === selectedCategory)
    : filteredFAQs;

  return (
    <PageWrapper>
      <PageBanner
        title="Dúvidas frequentes"
        description="As perguntas que a maioria dos clientes faz antes de contratar."
        icon={<HelpCircle />}
        variant="faq"
      />

      {/* Grupo 5 — FAQ Schema JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.flatMap(cat =>
              cat.items.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            )
          })
        }}
      />
      
      <div className="container py-16 space-y-12">
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar dúvida..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-brand-accent text-white border-brand-accent" : "border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"}
            >
              Todas as Categorias
            </Button>
            {faqData.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-brand-accent text-white border-brand-accent" : "border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {displayCategories.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-secondary text-lg font-semibold mb-2">Nenhuma pergunta encontrada</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Não encontramos perguntas que correspondam à sua busca.
                </p>
                <Button asChild>
                  <Link to="/contact">Entre em contato conosco</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            displayCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader className="bg-brand-accent/5">
                  <CardTitle className="font-sora flex items-center gap-2 text-xl">
                    <div className="p-2 bg-brand-accent/10 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-brand-accent" />
                    </div>
                    {category.title}
                  </CardTitle>
                  <CardDescription className="font-body">
                    {category.items.length} pergunta{category.items.length !== 1 ? 's' : ''} nesta categoria
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`} className="border-b border-gray-100">
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                          <span className="font-secondary font-medium">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-4">
                            <p className="font-body text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                            {item.relatedLink && (
                              <Button asChild variant="link" className="p-0 h-auto text-brand-accent">
                                <Link to={item.relatedLink.href} className="flex items-center gap-1">
                                  {item.relatedLink.text}
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border-brand-accent/20">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="font-sora text-2xl font-bold mb-4">Não encontrou sua resposta?</h3>
              <p className="font-body text-muted-foreground mb-6">
                Nossa equipe está pronta para esclarecer suas dúvidas específicas e fornecer orientação personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white">
                  <Link to="/contact">Fale Conosco</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/request-quote">Solicitar Orçamento</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQPage;
