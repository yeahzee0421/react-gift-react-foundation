// src/Button.tsx
import React from 'react';
import './UnderlineTextField.css';

export interface FieldProps {
  disabled?: boolean;
  invalid?: boolean;
  size?: 'small' | 'large' | 'responsive';
}

const TextField: React.FC<FieldProps> = ({ disabled, invalid, size }) => (
  <input
    className={`input ${disabled} ${invalid} ${size}`}
    placeholder="placeholder"
  />
);

TextField.defaultProps = {
  disabled: false,
  invalid: false,
  size: 'responsive',
};

export default TextField;
