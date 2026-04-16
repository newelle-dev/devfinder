import React, { createContext, useState, useEffect } from 'react';

export const SavedProfilesContext = createContext();

export const SavedProfilesProvider = ({ children }) => {
  const [savedProfiles, setSavedProfiles] = useState(() => {
    try {
      const stored = localStorage.getItem('savedProfiles');
      return stored ? JSON.parse(stored) : [];
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
    setSavedProfiles((prev) => {
      const exists = prev.some((p) => p.login === user.login);
      if (exists) {
        return prev.filter((p) => p.login !== user.login);
      }
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
