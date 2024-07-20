import React from 'react';
import { Product } from '../../model/types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductCard;
