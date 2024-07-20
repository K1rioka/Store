// src/components/ProductPage/ProductPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Убедитесь, что путь правильный
import { Product } from '../../entities/Product/model/types'; // Убедитесь, что путь правильный

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Получение параметра id из URL
    const products = useSelector((state: RootState) => state.products.products);

    const product = products.find((product: Product) => product.id === id);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="product-page-container">
            <h1>{product.name}</h1>
            {product.image && <img src={product.image} alt={product.name} className="product-image" />}
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Category:</strong> {product.category}</p>
        </div>
    );
};

export default ProductPage;
