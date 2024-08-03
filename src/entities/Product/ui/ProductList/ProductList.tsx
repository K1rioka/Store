import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../app/store';
import { Product } from '../../model/types';
import './ProductList.css';

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const filters = useSelector((state: RootState) => state.products.filters);

    const filteredProducts = products.filter((product: Product) => {
        const meetsCategory = filters.category ? product.category === filters.category : true;
        const meetsMinPrice = filters.minPrice ? product.price >= filters.minPrice : true;
        const meetsMaxPrice = filters.maxPrice ? product.price <= filters.maxPrice : true;
        const meetsColor = filters.color ? product.color === filters.color : true;

        return meetsCategory && meetsMinPrice && meetsMaxPrice && meetsColor;
    });

    return (
        <div className="product-list-container">
            <h2>Product List</h2>
            <div className="product-list-div">
                <ul className="product-list" id="product-list-id">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product: Product) => (
                            <li key={product.id} className="product-item" id="product-item-id">
                                <div className="product-name">
                                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                                </div>
                                <div className="product-images">
                                    {product.image && Array.isArray(product.image) && product.image.length > 0 ? (
                                        <img src={product.image[0]} alt={`${product.name} image 1`}
                                             className="product-image"/>
                                    ) : (
                                        <p>No images available</p>
                                    )}
                                </div>
                                <div className="product-price">${product.price.toFixed(2)}</div>
                                <div className="product-category">{product.category}</div>
                            </li>
                        ))
                    ) : (
                        <p className="no-products-text">No products available</p>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default ProductList;
