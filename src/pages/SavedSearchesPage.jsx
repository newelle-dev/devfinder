import React from 'react';
import { useSavedSearches } from '../contexts/SavedSearchesContext';
import { Bookmark, Search, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const SavedSearchesPage = () => {
  const { savedSearches, removeSearch } = useSavedSearches();
  const navigate = useNavigate();

  const handleSearchClick = (term) => {
    navigate(`/search?q=${term}`);
  };

  return (
    <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 h-full min-h-[80vh]'>
      <div className='rounded-xl sm:rounded-2xl bg-background/30 backdrop-blur-md shadow-sm border border-border/50 overflow-hidden h-full'>
        <div className='p-6 sm:p-8 md:p-10'>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Bookmark className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Saved Searches</h1>
              <p className="text-muted-foreground mt-1">
                Quick access to your common queries.
              </p>
            </div>
          </div>

          {savedSearches.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-border/60 bg-muted/30">
              <Search className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No searches saved yet</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                You haven't bookmarked any search terms. Enter a username in the search bar and click the bookmark icon to save it.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedSearches.map((term) => (
                <div 
                  key={term} 
                  className="group relative flex items-center justify-between p-4 rounded-xl bg-card border border-border/60 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div 
                    className="flex items-center gap-3 cursor-pointer flex-1"
                    onClick={() => handleSearchClick(term)}
                  >
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <Search className="w-4 h-4" />
                    </div>
                    <span className="font-medium truncate">{term}</span>
                  </div>
                  
                  <button
                    onClick={() => removeSearch(term)}
                    className="p-2 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all duration-300"
                    title="Remove search"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SavedSearchesPage;
