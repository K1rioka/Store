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
    multiple?: boolean;
    name?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({
                                         type,
                                         placeholder,
                                         value,
                                         onChange,
                                         step,
                                         min,
                                         accept,
                                         id,
                                         multiple,
                                         name,
                                     }) => {
    return (
        <input
            type={type}
            placeholder={type !== 'file' ? placeholder : undefined}
            value={type !== 'file' ? (value as string) : undefined}
            onChange={onChange}
            className="custom-input"
            step={type === 'number' ? step : undefined}
            min={type === 'number' ? min : undefined}
            accept={type === 'file' ? accept : undefined}
            id={id}
            multiple={multiple}
            name={name}
        />
    );
};

export default Input;
