
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "A consultoria da EcoConsult foi fundamental para obtermos todas as licenças ambientais necessárias para nossa operação. Processo ágil e descomplicado.",
    author: "Carlos Silva",
    role: "Diretor Industrial",
    company: "Metalúrgica Brasil",
    image: "/placeholder.svg"
  },
  {
    quote: "O monitoramento ambiental realizado pela equipe nos ajudou a reduzir custos e melhorar nossa conformidade com a legislação. Recomendo fortemente!",
    author: "Ana Martins",
    role: "Gestora Ambiental", 
    company: "Construtora Horizonte",
    image: "/placeholder.svg"
  },
  {
    quote: "Os treinamentos fornecidos para nossa equipe transformaram completamente a maneira como lidamos com resíduos. Excelente abordagem didática.",
    author: "Roberto Almeida",
    role: "Gerente de Produção",
    company: "Química Verde",
    image: "/placeholder.svg"
  }
];

export function Testimonials() {
  return (
    <section className="bg-muted py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-opacity-5 leaf-pattern bg-green-50"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg">
            Conheça a experiência de empresas que já contam com nossos serviços de consultoria ambiental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.author}-${index}`}
              className="bg-background border-none shadow-md hover:shadow-lg transition-all animate-fade-up"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg 
                      width="45" 
                      height="36" 
                      className="text-eco-green/30 mb-4" 
                      viewBox="0 0 45 36" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M13.4 35.2C9 35.2 5.56667 33.9333 3.1 31.4C1.03333 28.8667 0 25.7333 0 22C0 17.2 1.43333 12.9333 4.3 9.2C7.23333 5.46666 11.3333 2.66666 16.6 0.799996L18.1 4.3C13.1 6.1 9.43333 8.36666 7.1 11.1C4.83333 13.7667 3.7 16.8667 3.7 20.4H6.1C8.36667 20.4 10.2333 21.0667 11.7 22.4C13.2333 23.6667 14 25.4 14 27.6C14 30 13.3 31.9333 11.9 33.4C10.5667 34.6 8.86667 35.2 6.8 35.2H13.4ZM38.9 35.2C34.5 35.2 31.0667 33.9333 28.6 31.4C26.5333 28.8667 25.5 25.7333 25.5 22C25.5 17.2 26.9333 12.9333 29.8 9.2C32.7333 5.46666 36.8333 2.66666 42.1 0.799996L43.6 4.3C38.6 6.1 34.9333 8.36666 32.6 11.1C30.3333 13.7667 29.2 16.8667 29.2 20.4H31.6C33.8667 20.4 35.7333 21.0667 37.2 22.4C38.7333 23.6667 39.5 25.4 39.5 27.6C39.5 30 38.8 31.9333 37.4 33.4C36.0667 34.6 34.3667 35.2 32.3 35.2H38.9Z" fill="currentColor" />
                    </svg>
                    <p className="text-foreground">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-auto flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={`Foto de ${testimonial.author}`}
                        loading="lazy"
                      />
                      <AvatarFallback className="bg-eco-green/20 text-eco-green-dark">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
