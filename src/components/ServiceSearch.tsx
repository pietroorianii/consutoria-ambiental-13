import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { navData } from '@/components/navbar/navData';

export function ServiceSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredServices = navData.services.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || 
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleSelect = (href: string) => {
    navigate(href);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-lg mt-8 z-50">
      <div className="relative flex items-center w-full h-14 rounded-2xl bg-white shadow-xl overflow-hidden focus-within:ring-2 focus-within:ring-brand-accent transition-all">
        <div className="grid place-items-center h-full w-12 text-brand-primary">
          <Search className="h-5 w-5" />
        </div>
        <input
          className="peer h-full w-full outline-none text-brand-dark pr-2 font-inter bg-transparent text-base"
          type="text"
          id="search"
          placeholder="Qual serviço ambiental você procura?"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          autoComplete="off"
        />
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-16 left-0 w-full bg-white rounded-xl shadow-2xl border border-brand-cream/50 overflow-hidden max-h-64 overflow-y-auto z-50">
          {filteredServices.length > 0 ? (
            <ul className="py-2">
              {filteredServices.map((service, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-brand-cream/50 transition-colors flex items-center justify-between group"
                    onClick={() => handleSelect(service.href)}
                  >
                    <div>
                      <div className="text-brand-dark font-sora font-semibold text-sm group-hover:text-brand-primary transition-colors">{service.title}</div>
                      <div className="text-brand-dark/60 font-inter text-xs mt-0.5 line-clamp-1">{service.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-brand-dark/60 font-inter text-sm">
              Nenhum serviço encontrado para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
