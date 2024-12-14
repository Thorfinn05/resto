import React from 'react';
import { COLORS } from '../../utils/menuData';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: `bg-[${COLORS.primary}] text-white hover:bg-opacity-90`,
    secondary: `bg-[${COLORS.secondary}] text-white hover:bg-opacity-90`,
    outline: `border-2 border-[${COLORS.primary}] text-[${COLORS.primary}] hover:bg-[${COLORS.primary}] hover:text-white`
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}