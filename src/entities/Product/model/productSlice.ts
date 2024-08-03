import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState, Filters } from './types';

const loadProductsFromLocalStorage = (): Product[] => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
};

const initialState: ProductState = {
    products: loadProductsFromLocalStorage(),
    filters: {
        category: '',
        minPrice: 0,
        maxPrice: 0,
        color: '',
    },
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        setFilters: (state, action: PayloadAction<Filters>) => {
            state.filters = action.payload;
        },
    },
});

export const { addProduct, setFilters } = productSlice.actions;
export default productSlice.reducer;
