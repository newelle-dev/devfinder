import React, { createContext, useState, useEffect, useContext } from 'react';

const SavedSearchesContext = createContext();

export const SavedSearchesProvider = ({ children }) => {
  const [savedSearches, setSavedSearches] = useState(() => {
    try {
      const stored = localStorage.getItem('savedSearches');
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('Failed to parse saved searches from localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('savedSearches', JSON.stringify(savedSearches));
  }, [savedSearches]);

  const saveSearch = (term) => {
    if (!term || typeof term !== 'string') return;
    const trimmed = term.trim();
    if (!trimmed) return;
    
    setSavedSearches((prev) => {
      if (prev.includes(trimmed)) return prev;
      return [trimmed, ...prev];
    });
  };

  const removeSearch = (term) => {
    setSavedSearches((prev) => prev.filter((t) => t !== term));
  };

  return (
    <SavedSearchesContext.Provider value={{ savedSearches, saveSearch, removeSearch }}>
      {children}
    </SavedSearchesContext.Provider>
  );
};

export const useSavedSearches = () => {
  const context = useContext(SavedSearchesContext);
  if (!context) {
    throw new Error('useSavedSearches must be used within a SavedSearchesProvider');
  }
  return context;
};
