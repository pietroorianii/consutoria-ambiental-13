import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "A consultoria foi fundamental para obtermos todas as licenças ambientais necessárias para nossa operação. Processo ágil e descomplicado, com acompanhamento técnico em todas as etapas.",
    author: "Carlos Silva",
    role: "Diretor Industrial",
    company: "Metalúrgica",
    image: "/placeholder.svg"
  },
  {
    quote: "O monitoramento ambiental realizado pela equipe nos ajudou a reduzir custos e melhorar nossa conformidade com a legislação. Recomendo fortemente!",
    author: "Ana Martins",
    role: "Gestora Ambiental", 
    company: "Construtora",
    image: "/placeholder.svg"
  },
  {
    quote: "Os treinamentos fornecidos para nossa equipe transformaram completamente a maneira como lidamos com resíduos. Excelente abordagem didática.",
    author: "Roberto Almeida",
    role: "Gerente de Produção",
    company: "Indústria Química",
    image: "/placeholder.svg"
  },
  {
    quote: "Assessoria técnica impecável para nosso projeto de expansão. Profissionais altamente qualificados e comprometidos com os prazos estabelecidos.",
    author: "Juliana Mendes",
    role: "Diretora de Operações",
    company: "Agronegócio",
    image: "/placeholder.svg"
  }
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-brand-cream py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-5 organic-pattern"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora text-brand-dark">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-brand-dark/70 max-w-2xl mx-auto font-medium text-lg font-inter">
            Conheça a experiência de empresas que já contam com nossos serviços de consultoria ambiental.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-white border-brand-primary/10 shadow-md hover:shadow-lg transition-all">
                      <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full">
                        <div className="mb-6 flex-grow">
                          <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                            ))}
                          </div>
                          <p className="text-brand-dark/80 italic font-inter leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4 border-t border-brand-primary/10">
                          <Avatar className="h-12 w-12 border border-brand-primary/20">
                            <AvatarImage 
                              src={testimonial.image} 
                              alt={`Foto de ${testimonial.author}`}
                              loading="lazy"
                            />
                            <AvatarFallback className="bg-brand-primary/10 text-brand-primary font-bold font-sora">
                              {testimonial.author.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-bold text-sm text-brand-dark font-sora">{testimonial.author}</span>
                            <span className="text-xs text-brand-dark/60 font-inter">{testimonial.role}</span>
                            <span className="text-xs font-semibold text-brand-primary mt-0.5 font-inter">{testimonial.company}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" />
              <CarouselNext className="border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
