// src/entities/Product/model/types.ts
export interface Product {
    id: string;
    name: string;
    description: string; // Верните поле 'description'
    price: number;
    color: string;
    category: string; // Замените 'type' на 'category'
    image?: string; // Поле для хранения URL изображения (если нужно)
}

export interface Filters {
    category: string; // Замените 'type' на 'category'
    minPrice: number;
    maxPrice: number;
    color: string;
}

export interface ProductState {
    products: Product[];
    filters: Filters;
}
