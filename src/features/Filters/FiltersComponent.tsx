import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../entities/Product/model/productSlice';
import { Filters } from '../../entities/Product/model/types';
import Button from "../../shared/ui/Button";
import Select from "../../shared/ui/Select/Select";
import Input from "../../shared/ui/Input/Input";

const FiltersComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [filters, setLocalFilters] = useState<Filters>({
        category: '',
        minPrice: 0,
        maxPrice: 0,
        color: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Преобразование значений для чисел
        if (name === 'minPrice' || name === 'maxPrice') {
            setLocalFilters({
                ...filters,
                [name]: parseFloat(value) || 0,
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
        <div className="filters-div">
            <form className="filters-form" onSubmit={handleSubmit}>
                <h2 className="h2-form">Filter Products</h2>
                <div className="filter-inner-div">
                    <div className="filters-row">
                        <label className="custom-label">Category:</label>
                        <br/>
                        <div className="custom-select-wrapper">
                            <Select
                                name="category"
                                value={filters.category}
                                onChange={handleChange}
                                options={[
                                    { value: '', label: 'Select a category' },
                                    { value: 'Phone', label: 'Phone' },
                                    { value: 'Laptop', label: 'Laptop' },
                                    { value: 'Tablet', label: 'Tablet' },
                                    { value: 'Watches', label: 'Watches' },
                                ]}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="filters-row">
                        <label className="custom-label">Min Price:</label>
                        <br/>
                        <Input
                            name="minPrice"
                            type="number"
                            value={filters.minPrice}
                            onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="filters-row">
                        <label className="custom-label">Max Price:</label>
                        <br/>
                        <Input
                            name="maxPrice"
                            type="number"
                            value={filters.maxPrice}
                            onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="filters-row">
                        <label className="custom-label">Color:</label>
                        <br/>
                        <div className="custom-select-wrapper">
                            <Select
                                name="color"
                                value={filters.color}
                                onChange={handleChange}
                                options={[
                                    { value: '', label: 'Select a color' },
                                    { value: 'black', label: 'Black' },
                                    { value: 'white', label: 'White' },
                                    { value: 'silver', label: 'Silver' },
                                    { value: 'gold', label: 'Gold' },
                                    { value: 'rose', label: 'Rose' },
                                    { value: 'violet', label: 'Violet' },
                                    { value: 'red', label: 'Red' },
                                    { value: 'dark green', label: 'Dark Green' },
                                    { value: 'titan', label: 'Titan' },
                                ]}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="filter-button-div">
                        <Button type="submit" size="medium">Apply Filters</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FiltersComponent;
