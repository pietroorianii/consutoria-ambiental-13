
import { useMemo, useCallback } from 'react';
import { debounce } from 'lodash-es';

export const useDebounceSearch = (onSearch: (term: string) => void, delay: number = 300) => {
  const debouncedSearch = useMemo(
    () => debounce((term: string) => {
      onSearch(term);
    }, delay),
    [onSearch, delay]
  );

  const handleSearch = useCallback((term: string) => {
    debouncedSearch(term);
  }, [debouncedSearch]);

  return handleSearch;
};
