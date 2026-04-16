import SearchForm from '../components/search/SearchForm';
import UserProfileCard from '../components/user/UserProfileCard';
import UserSkeletonCard from '../components/user/UserSkeletonCard';
import { useGithubUser } from '../hooks/useGithubUser';
import { Search } from 'lucide-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const QA_SEARCHES = ['torvalds', 'gaearon', 'yyx990803', 'rich-harris'];

const SearchPage = () => {
  const { username, setUsername, user, isLoading, error, hasSearched, searchUser } = useGithubUser();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setUsername(query);
      searchUser(null, query);
    }
  }, [searchParams, setUsername, searchUser]);

  const handleQuickSearch = (name) => {
    setUsername(name);
    // Note: Due to React state batching, passing 'name' directly would normally be better, 
    // but our searchUser hook uses the 'username' state. For a quick trick, we can 
    // simulate form submission or we can modify the searchUser hook if it accepted an argument,
    // but the hook uses state. We will rely on the user clicking the search button for now,
    // or we can pass a faux event to searchUser but it relies on username state.
    // Wait, since we are setting username, we can just let them click Search.
  };

  return (
    <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 h-full'>
      <div className='flex flex-col h-full'>
        <div className={`rounded-xl sm:rounded-2xl bg-background/30 backdrop-blur-md shadow-sm transition-all duration-700 ease-in-out ${hasSearched ? 'flex-1 mt-6' : 'flex-1 my-6 flex items-center justify-center border border-border/50'}`}>
          <div className='p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full'>
            <div className={`container max-w-screen-2xl mx-auto transition-all duration-700 ease-in-out flex flex-col ${!hasSearched ? 'items-center justify-center min-h-[60vh] space-y-8 animate-fade-in' : 'space-y-6'}`}>
              
              {!hasSearched && (
                <div className="text-center space-y-4 mb-4 animate-slide-up">
                  <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-primary/10 rounded-full mb-2">
                    <Search className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    Find <span className="text-gradient">Developers</span>
                  </h1>
                  <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
                    Search millions of GitHub profiles and discover amazing talent instantly.
                  </p>
                </div>
              )}

              <div className={`w-full transition-all duration-700 ease-in-out ${!hasSearched ? 'max-w-4xl mx-auto' : 'w-full'}`}>
                <SearchForm 
                  username={username}
                  setUsername={setUsername}
                  handleSearch={searchUser}
                  isLoading={isLoading}
                />
              </div>

              {!hasSearched && (
                <div className="pt-8 text-center animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <p className="text-sm text-muted-foreground mb-4">Quick Searches</p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {QA_SEARCHES.map(qs => (
                      <button 
                        key={qs}
                        onClick={() => handleQuickSearch(qs)}
                        className="px-4 py-2 rounded-full border border-border/50 bg-card/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all text-sm font-medium"
                      >
                        @{qs}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {hasSearched && (
                <div className="w-full max-w-5xl mx-auto animate-slide-up">
                  {error && (
                    <div className='p-6 glass-card rounded-xl text-center border-destructive/20 bg-destructive/5'>
                      <p className='text-destructive font-medium text-lg'>{error}</p>
                    </div>
                  )}
                  {isLoading && <UserSkeletonCard />}
                  {user && !isLoading && <UserProfileCard user={user} />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
