import React from 'react';
import './Textarea.css';

interface TextareaProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    required?: boolean; // Добавлено свойство 'required'
}

const Textarea: React.FC<TextareaProps> = ({
                                               placeholder,
                                               value,
                                               onChange,
                                               rows,
                                               cols,
                                               required, // Добавлено свойство 'required'
                                           }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
            className="custom-textarea"
            required={required} // Передано свойство 'required'
        />
    );
};

export default Textarea;
