import React from 'react'
import './UnderlineTextField.css'

export interface FieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    invalid?: boolean
    size?: undefined
}

const TextField: React.FC<FieldProps> = ({
    disabled,
    invalid,
    size,
    ...props
}) => (
    <input
        className={`input ${disabled ? 'disabled' : ''} ${invalid ? 'invalid' : ''} ${size}`}
        placeholder="placeholder"
        disabled={disabled}
        {...props}
    />
)

export default TextField
