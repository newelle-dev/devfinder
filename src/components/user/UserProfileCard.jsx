import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Copy, Github, Mail, MapPin, Search, UserPlus } from 'lucide-react';
import UserStats from './UserStats';
import UserSocialLinks from './UserSocialLinks';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import { useSavedProfiles } from '../../hooks/useSavedProfiles';

const UserProfileCard = ({ user }) => {
  const BASE_URL = "https://github.com/";
  const { isProfileSaved, toggleProfile } = useSavedProfiles();
  const isSaved = isProfileSaved(user.login);
  
  return (
    <div className='p-4 sm:p-6 w-full animate-fade-in'>
      <Card className="glass-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent"></div>
        <div className="relative m-6 mt-8">
          <div className='absolute -top-4 right-0 flex items-center gap-2 z-20'>
            <Button 
              variant="secondary" 
              size="icon" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleProfile(user);
              }}
              className="rounded-full shadow-lg border-2 border-background bg-card hover:bg-primary/10 hover:text-primary transition-all duration-300"
              title={isSaved ? "Remove from saved" : "Save profile"}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-primary text-primary' : ''}`} />
            </Button>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-8 gap-6'>
            <div className='flex flex-row sm:flex-col items-center gap-4 sm:w-auto w-full z-10'>
              <div className='relative group'>
                <div className='absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur group-hover:opacity-100 transition duration-500'></div>
                <img 
                  src={user.avatar_url} 
                  alt="User Avatar" 
                  className='relative w-24 h-24 sm:w-36 sm:h-36 rounded-full border-4 border-background/80 object-cover'
                />
                <Link 
                  to={`${BASE_URL}${user.login}`} 
                  className='absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 rounded-full transition-opacity backdrop-blur-sm'
                >
                  <Github className='w-8 h-8 sm:w-10 sm:h-10' />
                </Link>
                <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 absolute -top-1 -right-1 sm:top-2 sm:-right-2 transform text-[10px] sm:text-xs bg-green-500 text-white shadow-md'>
                  {!user.hirable ? 'Open to Work' : 'Not Available'}
                </div>
              </div>
              <div className='flex flex-col sm:items-center gap-3 mt-2'>
                <UserSocialLinks user={user} />
                <div className='flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full'>
                  <MapPin className='w-3 h-3 sm:w-4 sm:h-4 text-primary/70' />
                  <span className='font-medium'>{user.location || 'Location Unknown'}</span>
                </div>
              </div>
            </div>
            
            <div className='flex-1 min-w-0 space-y-4 sm:space-y-5 z-10 w-full'>
              <div className='space-y-2'>
                <div className='flex flex-col sm:flex-row sm:items-baseline gap-2'>
                  <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight truncate'>
                    {user.name || 'No Name Provided'}
                  </h2>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-sm sm:text-base font-medium text-primary'>@{user.login}</span>
                  <button className='p-1.5 rounded-md hover:bg-primary/15 transition-colors text-muted-foreground hover:text-foreground' 
                  onClick={() => {
                          navigator.clipboard.writeText(user.login);
                        }}
                        aria-label="Copy username">
                    <Copy className='w-4 h-4'/> 
                  </button>
                </div>
                <p className='text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-2xl'>
                  {user.bio || 'This user has not added a bio yet.'}
                </p>
                
                <UserStats user={user} />
                
                <div className='flex flex-wrap gap-2 sm:gap-3 pt-2'>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full border-border/60 hover:bg-primary/5 hover:border-primary/30" 
                    icon={<Search className='w-3 h-3 sm:w-4 sm:h-4' />} 
                    onClick={() => window.open(`https://www.google.com/search?q=${user.name || user.login}+developer`, '_blank')}
                  >
                    Find Social Profiles
                  </Button>
                </div>
                
                {user.email && (
                  <div className='space-y-1.5 pt-4 border-t border-border/40 mt-4'>
                    <p className='text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground'>Contact</p>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
                        <Mail className='w-4 h-4'/>
                      </div>
                      <Link to={`mailto:${user.email}`} className='text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors'>
                        {user.email}
                      </Link>
                      <button 
                        className='p-1.5 rounded-md hover:bg-primary/15 transition-colors group text-muted-foreground hover:text-foreground'
                        onClick={() => {
                          navigator.clipboard.writeText(user.email);
                        }}
                        aria-label="Copy email address"
                      >
                        <Copy className='w-4 h-4'/>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfileCard;