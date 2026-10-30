// src/components/atoms/Button.tsx

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}) => {
  const base = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400';
  const variants = {
    primary: 'bg-gold-500 text-dark-900 hover:bg-gold-400',
    secondary: 'border border-gold-500 text-gold-500 hover:text-gold-300 hover:border-gold-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;