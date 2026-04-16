import React from 'react';
import { Card } from '../ui/Card';

const UserSkeletonCard = () => {
  return (
    <div className='p-4 sm:p-6 w-full animate-pulse'>
      <Card className="glass-card shadow-sm w-full">
        <div className="relative m-6">
          <div className='flex flex-col sm:flex-row sm:gap-6 gap-4'>
            <div className='flex flex-row sm:flex-col items-center gap-4 sm:w-auto w-full'>
              {/* Avatar Skeleton */}
              <div className='w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-muted/80' />
              
              <div className='flex flex-col sm:items-center gap-2'>
                {/* Social Links Skeleton */}
                <div className='flex gap-2'>
                  <div className='w-5 h-5 rounded bg-muted/80' />
                  <div className='w-5 h-5 rounded bg-muted/80' />
                  <div className='w-5 h-5 rounded bg-muted/80' />
                </div>
                {/* Location Skeleton */}
                <div className='w-24 h-4 rounded bg-muted/80' />
              </div>
            </div>
            
            <div className='flex-1 min-w-0 space-y-3 sm:space-y-4 w-full'>
              <div className='space-y-3'>
                {/* Name Skeleton */}
                <div className='w-1/3 h-8 rounded-md bg-muted/80' />
                
                {/* Username Skeleton */}
                <div className='w-1/4 h-4 rounded bg-muted/80' />
                
                {/* Bio Skeleton */}
                <div className='space-y-2 pt-2'>
                  <div className='w-full h-4 rounded bg-muted/80' />
                  <div className='w-5/6 h-4 rounded bg-muted/80' />
                  <div className='w-4/6 h-4 rounded bg-muted/80' />
                </div>
                
                {/* Stats Skeleton */}
                <div className='w-full h-20 rounded-lg bg-secondary/50 mt-4' />
                
                {/* Contact Email Skeleton */}
                <div className='pt-4 space-y-2'>
                  <div className='w-16 h-3 rounded bg-muted/80' />
                  <div className='w-48 h-4 rounded bg-muted/80' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserSkeletonCard;
