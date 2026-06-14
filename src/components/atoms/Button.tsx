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
  const base = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400';
  const variants = {
    primary:
      'bg-gold-500 text-dark-900 hover:bg-gold-400 motion-safe:hover:scale-105',
    secondary:
      'border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 motion-safe:hover:scale-105 dark:border-gold-500 dark:text-gold-500 light:border-gold-600 light:text-gold-600',
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