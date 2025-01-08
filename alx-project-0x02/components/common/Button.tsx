import { ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-sm',
  children,
}) => {
  return (
    <button
      className={`${shape} border border-red-700 ${
        size === 'small'
          ? 'h-9 px-3'
          : size === 'medium'
          ? 'h-10 px-4'
          : 'h-11 px-8'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
