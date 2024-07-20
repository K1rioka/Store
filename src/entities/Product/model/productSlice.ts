// src/entities/Product/model/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState, Filters } from './types';

const initialState: ProductState = {
    products: [],
    filters: {
        category: '', // Замените 'type' на 'category'
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
        },
        setFilters: (state, action: PayloadAction<Filters>) => {
            state.filters = action.payload;
        },
    },
});

export const { addProduct, setFilters } = productSlice.actions;
export default productSlice.reducer;
