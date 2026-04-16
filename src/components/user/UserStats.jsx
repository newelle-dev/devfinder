import React from 'react';
import { Users, WarehouseIcon } from 'lucide-react';

const UserStats = ({ user }) => {
  const BASE_URL = "https://github.com/";
  
  const StatBlock = ({ icon: Icon, value, label, to }) => (
    <a 
      href={to} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex-1 min-w-[30%]"
    >
      <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-card border border-border/40 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group shadow-sm hover:shadow-md">
        <Icon className='h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mb-2 group-hover:text-primary transition-colors duration-300' />
        <div className='text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
          {value}
        </div>
        <div className='text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mt-0.5'>
          {label}
        </div>
      </div>
    </a>
  );

  return (
    <div className='flex items-center justify-between w-full gap-3 sm:gap-4 mt-4 py-2'>
      <StatBlock 
        icon={Users} 
        value={user.followers} 
        label="Followers" 
        to={`${BASE_URL}${user.login}?tab=followers`} 
      />
      <StatBlock 
        icon={Users} 
        value={user.following} 
        label="Following" 
        to={`${BASE_URL}${user.login}?tab=following`} 
      />
      <StatBlock 
        icon={WarehouseIcon} 
        value={user.public_repos} 
        label="Repositories" 
        to={`${BASE_URL}${user.login}?tab=repositories`} 
      />
    </div>
  );
};

export default UserStats;