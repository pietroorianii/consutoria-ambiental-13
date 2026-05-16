import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/5541999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ padding: isHovered ? '0.75rem 1.25rem' : '1rem' }}
    >
      <MessageCircle className="h-6 w-6" />
      <span
        className={`font-inter font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isHovered ? 'ml-2 max-w-[150px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Fale conosco
      </span>
    </a>
  );
}
