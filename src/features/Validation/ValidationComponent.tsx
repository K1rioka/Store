import { useState } from 'react';

interface ValidationErrors {
    [key: string]: string;
}

const useValidation = () => {
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validate = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!/^[a-zA-Z0-9\s]+$/.test(value)) { // Разрешаем пробелы
                    error = 'Title must contain only letters, numbers, and spaces';
                } else if (value.length < 15 || value.length > 30) {
                    error = 'Title must be 15-30 characters long';
                }
                break;
            case 'description':
                if (value.length < 5) {
                    error = 'Description must be at least 5 characters long';
                }
                break;
            case 'price':
                if (isNaN(parseFloat(value)) || parseFloat(value) <= 0) {
                    error = 'Price must be a positive number';
                }
                break;
            case 'color':
                if (!value) {
                    error = 'Please select a color';
                }
                break;
            case 'category':
                if (!value) {
                    error = 'Please select a category';
                }
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
        return error;
    };

    const showAlerts = () => {
        Object.values(errors).forEach(error => {
            if (error) {
                alert(error);
            }
        });
    };

    return { errors, validate, showAlerts };
};

export default useValidation;
