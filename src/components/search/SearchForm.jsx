import { Search, Bookmark, BookmarkCheck } from 'lucide-react';
import Button from '../ui/Button';
import { useSavedSearches } from '../../contexts/SavedSearchesContext';

const SearchForm = ({ username, setUsername, handleSearch, isLoading }) => {
  const { savedSearches, saveSearch, removeSearch } = useSavedSearches();
  const isSaved = savedSearches.includes(username.trim());

  return (
    <form onSubmit={handleSearch} className='w-full max-w-3xl mx-auto'>
      <div className='relative group'>
        <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-20 blur transition duration-500 group-hover:opacity-40 animate-gradient-shift'></div>
        <div className='relative flex flex-col md:flex-row gap-3 items-center glass rounded-2xl p-2'>
          <div className='relative flex-grow w-full flex items-center'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors' />
            <input 
              type="text" 
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='flex w-full rounded-xl bg-transparent px-3 py-3 pl-12 h-14 text-lg border-transparent placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-transparent text-foreground transition-all' 
              aria-label="GitHub username"
              autoFocus
            />
            {username.trim() && (
              <button
                type="button"
                onClick={() => isSaved ? removeSearch(username.trim()) : saveSearch(username.trim())}
                className={`mr-4 p-2 rounded-full transition-all duration-300 ${isSaved ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
                title={isSaved ? "Remove search" : "Save search"}
              >
                {isSaved ? <BookmarkCheck className="h-5 w-5 fill-current" /> : <Bookmark className="h-5 w-5" />}
              </button>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            loadingText="Searching"
            showLoadingText={true}
            className="w-full md:w-auto rounded-xl px-8 h-12 flex-shrink-0 animate-fade-in"
          >
            Find Developer
          </Button>
        </div>
      </div>
    </form> 
  ); 
};
 
export default SearchForm;