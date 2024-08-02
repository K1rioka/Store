export interface Product {
    id: string;
    name: string;
    description: string; // Поле 'description' возвращено
    price: number;
    color: string;
    category: string; // 'type' заменен на 'category'
    image?: string[]; // Поле для хранения URL изображений (если нужно)
}

export interface Filters {
    category: string; // 'type' заменен на 'category'
    minPrice: number;
    maxPrice: number;
    color: string;
}

export interface ProductState {
    products: Product[];
    filters: Filters;
}
