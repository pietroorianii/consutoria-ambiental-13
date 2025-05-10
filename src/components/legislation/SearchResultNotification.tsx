
import React from 'react';

interface SearchResultNotificationProps {
  searchTerm: string;
  resultCount: number;
}

export const SearchResultNotification: React.FC<SearchResultNotificationProps> = ({
  searchTerm,
  resultCount
}) => {
  if (!searchTerm) return null;
  
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6 border border-yellow-200 dark:border-yellow-800/30">
      <p className="text-center">
        <span className="font-medium">Resultados para: </span>
        <span className="bg-yellow-200 dark:bg-yellow-800 px-2 py-0.5 rounded">{searchTerm}</span>
        <span className="ml-2 text-muted-foreground">({resultCount} itens encontrados)</span>
      </p>
    </div>
  );
};
