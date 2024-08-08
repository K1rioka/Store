export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    color: string;
    category: string;
    image?: string[];
}

export interface Filters {
    category: string;
    minPrice: number;
    maxPrice: number;
    color: string;
}

export interface ProductState {
    products: Product[];
    filters: Filters;
}
