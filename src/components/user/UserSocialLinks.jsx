import React from 'react';
import { Github, Globe, TwitterIcon } from 'lucide-react';

const UserSocialLinks = ({ user }) => {
  return (
    <div className='flex items-center gap-2'>
      <a 
        href={`https://github.com/${user.login}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-muted-foreground hover:text-primary transition-colors'
      >
        <Github className='w-5 h-5' />
      </a>
      {user.blog && (
        <div className='flex items-center'>
          <a 
            href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Globe className='w-5 h-5' />
          </a>
        </div>
      )}
      {user.twitter_username && (
        <a 
          href={`https://x.com/${user.twitter_username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-muted-foreground hover:text-primary transition-colors'
        >
          <TwitterIcon className='mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5' />
        </a>
      )}
    </div>
  );
};

export default UserSocialLinks;