import React from 'react'
import './Button.css'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'kakao' | 'default'
    size?: 'small' | 'large' | 'responsive'
}

const Button: React.FC<ButtonProps> = ({
    theme = 'kakao',
    size = 'responsive',
    children,
    ...props
}) => (
    <button className={`button ${theme} ${size}`} type="button" {...props}>
        {children}
    </button>
)

export default Button
