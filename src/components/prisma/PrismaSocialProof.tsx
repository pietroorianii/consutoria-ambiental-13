
import React from "react";

export function PrismaSocialProof() {
  const clientLogos = [
    { name: "Cliente 1", placeholder: true },
    { name: "Cliente 2", placeholder: true },
    { name: "Cliente 3", placeholder: true },
    { name: "Cliente 4", placeholder: true },
    { name: "Cliente 5", placeholder: true },
    { name: "Cliente 6", placeholder: true }
  ];

  return (
    <section className="py-16 bg-prisma-bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-prisma-text mb-4 font-poppins">
            Empresas que confiam na nossa expertise
          </h2>
          <div className="h-1 w-24 bg-prisma-green rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-20"
            >
              {client.placeholder ? (
                <div className="w-full h-8 bg-gray-200 rounded flex items-center justify-center group-hover:bg-prisma-green/20 transition-colors duration-300">
                  <span className="text-xs text-gray-400 font-medium">Logo {index + 1}</span>
                </div>
              ) : (
                <img 
                  src={`/clients/${client.name.toLowerCase().replace(' ', '-')}.png`}
                  alt={client.name}
                  className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-prisma-text/60 font-lato">
            Mais de 500 empresas já escolheram a PRISMA para suas necessidades ambientais
          </p>
        </div>
      </div>
    </section>
  );
}
