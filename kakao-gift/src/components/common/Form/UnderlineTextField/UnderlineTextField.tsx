// src/Button.tsx
import React from 'react';

export interface FieldProps {
  disabled?: boolean;
  invalid?: boolean;
  size: 'small' | 'large' | 'responsive';
}

const Button: React.FC<FieldProps> = ({ disabled, invalid, size }) => (
  <input
    className={`input ${disabled} ${invalid} ${size}`}
    placeholder="placeholder"
  />
);

Button.defaultProps = {
  disabled: false,
  invalid: false,
};

export default Button;
