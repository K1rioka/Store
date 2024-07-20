import React from 'react';
import './Select.css';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
}

const Select: React.FC<SelectProps> = ({ value, onChange, options }) => {
    return (
        <select value={value} onChange={onChange} className="custom-select">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
