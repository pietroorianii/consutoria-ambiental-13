
import React from 'react';
import { SearchBar } from './SearchBar';
import { FiltersSection } from './FiltersSection';
import { LegislationResults } from './LegislationResults';
import { useLegislationData } from '@/hooks/useLegislationData';

export const ConsolidatedLegislationGuide = () => {
  const {
    searchTerm,
    filteredItems,
    handleSearch,
    availableCategories,
    selectedCategories,
    setSelectedCategories,
    isCategoryCheckboxesOpen,
    setIsCategoryCheckboxesOpen
  } = useLegislationData();

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      {/* Hero search box */}
      <div className="mb-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Consulta de Legislação Ambiental
          </h2>
          <p className="text-muted-foreground mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
            Pesquise por leis, resoluções ou palavras-chave para encontrar rapidamente a legislação que você precisa.
          </p>
          <div className="bg-gradient-to-r from-eco-green/5 to-eco-blue/5 p-6 rounded-lg border border-eco-green/20 shadow-md">
            <SearchBar onSearch={handleSearch} initialValue={searchTerm} />
          </div>
        </div>
      </div>
      
      {/* Filter options */}
      <FiltersSection 
        availableCategories={availableCategories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        isCategoryCheckboxesOpen={isCategoryCheckboxesOpen}
        setIsCategoryCheckboxesOpen={setIsCategoryCheckboxesOpen}
      />
      
      {/* Legislation items */}
      <LegislationResults 
        searchTerm={searchTerm}
        filteredItems={filteredItems}
      />
    </div>
  );
};
