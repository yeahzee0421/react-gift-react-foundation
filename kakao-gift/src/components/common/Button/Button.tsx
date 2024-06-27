// src/Button.tsx
import React from 'react';
import './Button.css';

export interface ButtonProps {
  theme?: 'kakao' | 'default';
  size?: 'small' | 'large' | 'responsive';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ theme, size, children }) => (
  <button className={`button ${theme} ${size}`} type="button">
    {children}
  </button>
);

export default Button;
