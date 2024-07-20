import React from 'react';
import './Textarea.css';

interface TextareaProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, onChange, rows, cols }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
            className="custom-textarea"
        />
    );
};

export default Textarea;
