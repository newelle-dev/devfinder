import React, { createContext, useState, useEffect } from 'react';

export const SavedProfilesContext = createContext();

export const SavedProfilesProvider = ({ children }) => {
  const [savedProfiles, setSavedProfiles] = useState(() => {
    try {
      const stored = localStorage.getItem('savedProfiles');
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('Failed to parse saved profiles from localStorage', error);
      return [];
    }
  });

  // Sync state with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('savedProfiles', JSON.stringify(savedProfiles));
  }, [savedProfiles]);

  const toggleProfile = (user) => {
    if (!user || !user.login) {
      console.warn('Attempted to toggle an invalid user profile', user);
      return;
    }
    
    setSavedProfiles((prev) => {
      const exists = prev.some((p) => p.login === user.login);
      if (exists) {
        console.log(`Removing profile: ${user.login}`);
        return prev.filter((p) => p.login !== user.login);
      }
      console.log(`Adding profile: ${user.login}`);
      return [user, ...prev];
    });
  };

  const isProfileSaved = (username) => {
    return savedProfiles.some((p) => p.login === username);
  };

  return (
    <SavedProfilesContext.Provider value={{ savedProfiles, toggleProfile, isProfileSaved }}>
      {children}
    </SavedProfilesContext.Provider>
  );
};
