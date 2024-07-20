import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type: "submit" | "button" | "reset";
    size?: 'small' | 'medium' | 'large'; // Добавляем размер
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, size = 'medium' }) => {
    return (
        <button
            className={`custom-button custom-button--${size}`} // Добавляем класс на основе размера
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
