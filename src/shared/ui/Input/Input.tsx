import React from 'react';
import './Input.css';

interface InputProps {
    type: 'text' | 'number' | 'file';
    placeholder?: string;
    value?: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    step?: string;
    min?: string;
    accept?: string;
    id?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, step, min, accept, id }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={type === 'file' ? undefined : value} // 'file' type should not use value
            onChange={onChange}
            className="custom-input"
            step={step}
            min={min}
            accept={accept}
            id={id}
        />
    );
};

export default Input;
