import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/config/company';

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="fixed bottom-5 right-5 z-50 hidden md:flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-[#25D366]/30 transition-all hover:bg-[#20bd5a]"
    >
      <MessageCircle className="h-6 w-6" />
      <span
        className={`overflow-hidden whitespace-nowrap font-inter font-medium text-sm transition-all duration-300 ${
          open ? 'max-w-[160px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Falar pelo WhatsApp
      </span>
    </a>
  );
}
