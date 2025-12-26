import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  // Base: Pill shape (rounded-full), precise padding, font smoothing
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    // Mimics the "Sign In" button: Glassy, thin border, glow
    primary: "liquid-button text-white",
    
    // Ghost/Secondary
    secondary: "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};