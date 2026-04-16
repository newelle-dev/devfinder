import { useContext } from 'react';
import { SavedProfilesContext } from '../contexts/SavedProfilesContext';

export function useSavedProfiles() {
  const context = useContext(SavedProfilesContext);
  if (!context) {
    throw new Error('useSavedProfiles must be used within a SavedProfilesProvider');
  }
  return context;
}
