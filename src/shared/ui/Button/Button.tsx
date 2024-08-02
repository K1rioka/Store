import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Сделать onClick необязательным
    children: React.ReactNode;
    type: "submit" | "button" | "reset";
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, size = 'medium' }) => {
    return (
        <button
            className={`custom-button custom-button--${size}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
