import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import AddProductForm from '../../entities/Product/ui/AddProductForm';
import Button from '../../shared/ui/Button'; // Импортируем ваш кастомный Button
import './AddProductPage.css';

const AddProductPage: React.FC = () => {
    const navigate = useNavigate(); // Создаем функцию для навигации

    const handleGoBack = () => {
        navigate('/'); // Переход на главную страницу
    };

    return (
        <div className="add-product-page">
            <AddProductForm />
            <Button onClick={handleGoBack} size="medium" type="button">
                Go back to Home Page
            </Button>
        </div>
    );
};

export default AddProductPage;
