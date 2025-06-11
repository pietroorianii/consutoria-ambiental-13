
import React from "react";

const clientLogos = [
  { name: "Cliente 1", logo: "/placeholder.svg" },
  { name: "Cliente 2", logo: "/placeholder.svg" },
  { name: "Cliente 3", logo: "/placeholder.svg" },
  { name: "Cliente 4", logo: "/placeholder.svg" },
  { name: "Cliente 5", logo: "/placeholder.svg" },
  { name: "Cliente 6", logo: "/placeholder.svg" }
];

export function PrismaSocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Empresas que confiam na nossa expertise
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="group w-24 h-16 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
