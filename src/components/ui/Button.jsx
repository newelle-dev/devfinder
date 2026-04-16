import Spinner from "./Spinner";

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  isLoading = false,
  loadingText = 'Loading...',
  showLoadingText = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-1px]',
    secondary: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent',
    vibrant: 'bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite] text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300',
    ghost: 'hover:bg-muted/60 text-muted-foreground hover:text-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'h-8 text-xs px-3',
    md: 'h-11 text-sm px-6 py-2',
    icon: 'h-8 w-8',
  };

  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  return (
   <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner size={size === 'sm' ? 'sm' : 'md'} />
          {showLoadingText && <span className="ml-2">{loadingText}</span>}
        </>
      ) : (
        <>
          {icon && <span className={`${children ? 'mr-2' : ''}`}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;