// src/Button.tsx
import React from 'react'
import './UnderlineTextField.css'

export interface FieldProps {
    disabled?: boolean
    invalid?: boolean
    size?: 'small' | 'large' | 'responsive'
}

const TextField: React.FC<FieldProps> = ({ disabled, invalid, size }) => (
    <input
        className={`input ${disabled ? 'disabled' : ''} ${invalid ? 'invalid' : ''} ${size}`}
        placeholder="placeholder"
        disabled={disabled}
    />
)

export default TextField
