import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../entities/Product/model/productSlice';
import { Filters } from '../../entities/Product/model/types';

const FiltersComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [filters, setLocalFilters] = useState<Filters>({
        category: '', // Заменено type на category
        minPrice: 0,
        maxPrice: 0,
        color: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Преобразование значений для чисел
        if (name === 'minPrice' || name === 'maxPrice') {
            setLocalFilters({
                ...filters,
                [name]: parseFloat(value) || 0, // Преобразование строки в число
            });
        } else {
            setLocalFilters({
                ...filters,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setFilters(filters));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Category:</label> {/* Обновлено с Type на Category */}
                <input name="category" value={filters.category} onChange={handleChange} />
            </div>
            <div>
                <label>Min Price:</label>
                <input name="minPrice" type="number" value={filters.minPrice} onChange={handleChange} />
            </div>
            <div>
                <label>Max Price:</label>
                <input name="maxPrice" type="number" value={filters.maxPrice} onChange={handleChange} />
            </div>
            <div>
                <label>Color:</label>
                <input name="color" value={filters.color} onChange={handleChange} />
            </div>
            <button type="submit">Apply Filters</button>
        </form>
    );
};

export default FiltersComponent;
