import React from 'react'
import './UnderlineTextField.css'

interface DefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    invalid?: boolean
}
export interface InputProps extends Omit<DefaultProps, 'size'> {
    size?: 'large' | 'small' | 'responsive'
}

const Input: React.FC<InputProps> = ({
    disabled = false,
    invalid = false,
    size = 'responsive',
    ...props
}) => (
    <input
        className={`input ${disabled ? 'disabled' : ''} ${invalid ? 'invalid' : ''} ${size}`}
        disabled={disabled}
        {...props}
    />
)

export default Input
