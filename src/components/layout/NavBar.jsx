/* eslint-disable no-unused-vars */
import { Bookmark, Search, SearchCode, Settings, UserPlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './../common/ThemeToggle';

const navItems = [
  { label: 'Search', to: '/search', Icon: Search },
  { label: 'Saved Profiles', to: '/saved-profiles', Icon: UserPlus },
  { label: 'Saved Searches', to: '/saved-searches', Icon: Bookmark },
];

const NavBar = () => {
  return (
    <header className="sticky top-0 z-[100] w-full bg-background/90 dark:bg-background/80 backdrop-blur border-b border-border/60 dark:border-border/30 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-6">
        {/* Brand */}
        <NavLink to="/" className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
          <SearchCode className="h-8 w-8 text-primary" />
          <div className="flex flex-col leading-tight text-left">
            <h1 className="text-xl md:text-2xl font-poppins font-bold tracking-tight leading-none">
              <span className="text-primary">Dev</span>
              <span className="text-foreground">Finder</span>
            </h1>
            <p className="mt-0.5 text-sm md:text-l text-muted-foreground">
              Find your Developer
            </p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
          {navItems.map(({ label, to, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  'flex items-center gap-2 px-3 py-2 rounded-md text-l font-medium transition-colors duration-200',
                  'hover:text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                isActive 
                    ? 'bg-secondary hover:bg-secondary text-foreground font-semibold' 
                    : 'text-muted-foreground'
                ].join(' ')
              }
            >
              <Icon className="h-5 w-5 text-primary/80" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open settings"
            className="hidden md:block p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Settings className="h-5 w-5 md:h-6 md:w-6" />
          </button>

        {/* Mobile Navigation */}
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
