import React from 'react';
import ProductList from "../../entities/Product/ui/ProductList";
import FiltersComponent from "../../features/Filters/FiltersComponent";
import "./ProductListPage.css"

const ProductListPage = () => {
    return (
        <>
            <div className="product-list-page">
                    <FiltersComponent />
                    <ProductList />
            </div>

        </>
    );
};

export default ProductListPage;