import React from 'react';
import { useSavedProfiles } from '../hooks/useSavedProfiles';
import UserProfileCard from '../components/user/UserProfileCard';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const SavedProfilesPage = () => {
  const { savedProfiles } = useSavedProfiles();

  return (
    <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 h-full min-h-[80vh]'>
      <div className='rounded-xl sm:rounded-2xl bg-background/30 backdrop-blur-md shadow-sm border border-border/50 overflow-hidden h-full'>
        <div className='p-6 sm:p-8 md:p-10'>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Saved Profiles</h1>
              <p className="text-muted-foreground mt-1">
                Your collection of bookmarked developers.
              </p>
            </div>
          </div>

          {savedProfiles.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-border/60 bg-muted/30">
              <Users className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No profiles saved yet</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                You haven't bookmarked any developers. Search for GitHub users and click the bookmark icon to save them here.
              </p>
              <Link to="/search">
                <Button variant="primary">
                  Find Developers
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {savedProfiles.map((user) => (
                <div key={user.login} className="w-full">
                  <UserProfileCard user={user} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SavedProfilesPage;
