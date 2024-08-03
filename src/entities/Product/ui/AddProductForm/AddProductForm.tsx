import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../model/productSlice';
import { Product } from '../../model/types';
import './AddProductForm.css';
import Input from '../../../../shared/ui/Input/Input';
import Textarea from '../../../../shared/ui/Textarea/Textarea';
import Select from '../../../../shared/ui/Select/Select';
import Button from '../../../../shared/ui/Button/Button';
import useValidation from '../../../../features/Validation/ValidationComponent';
import { RootState } from '../../../../app/store';

const AddProductForm: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState<File[]>([]);

    const { errors, validate, showAlerts } = useValidation();

    const handleAddProduct = () => {
        const isNameValid = !validate('name', name);
        const isDescriptionValid = !validate('description', description);
        const isPriceValid = !validate('price', price);
        const isColorValid = !validate('color', color);
        const isCategoryValid = !validate('category', category);

        if (!isNameValid || !isDescriptionValid || !isPriceValid || !isColorValid || !isCategoryValid) {
            showAlerts();
            return;
        }

        const newProduct: Product = {
            id: String(Math.random()),
            name,
            description,
            price: parseFloat(price),
            color,
            category,
            image: images.length > 0 ? images.map(img => URL.createObjectURL(img)) : [],
        };

        dispatch(addProduct(newProduct));

        // Сброс формы или дополнительные действия после добавления товара
        setName('');
        setDescription('');
        setPrice('');
        setColor('');
        setCategory('');
        setImages([]);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setImages(Array.from(files));
        }
    };

    return (
        <div className="form-div">
            <h2>Add Product</h2>
            <div className="form-inner-div">
                <form>
                    <label className="custom-label">Product Title:</label>
                    <Input type="text" placeholder="Enter product title" value={name}
                           onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label className="custom-label">Product Description:</label>
                    <Textarea placeholder="Enter product description" value={description}
                              onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <label className="custom-label">Price:</label>
                    <Input type="number" step="0.01" min="0" placeholder="Enter price" value={price}
                           onChange={(e) => setPrice(e.target.value)} />
                    <br />
                    <label className="custom-label">Color:</label>
                    <div className="custom-select-wrapper">
                        <Select value={color} onChange={(e) => setColor(e.target.value)} options={[
                            { value: '', label: 'Select a color' },
                            { value: 'black', label: 'Black' },
                            { value: 'white', label: 'White' },
                            { value: 'silver', label: 'Silver' },
                            { value: 'gold', label: 'Gold' },
                            { value: 'rose', label: 'Rose' },
                            { value: 'violet', label: 'Violet' },
                            { value: 'red', label: 'Red' },
                            { value: 'dark green', label: 'Dark Green' },
                            { value: 'titan', label: 'Titan' }
                        ]} />
                    </div>
                    <br />
                    <label className="custom-label">Category:</label>
                    <div className="custom-select-wrapper">
                        <Select value={category} onChange={(e) => setCategory(e.target.value)} options={[
                            { value: '', label: 'Select a category' },
                            { value: 'Phone', label: 'Phone' },
                            { value: 'Laptop', label: 'Laptop' },
                            { value: 'Tablet', label: 'Tablet' },
                            { value: 'Watches', label: 'Watches' }
                        ]} />
                    </div>
                    <br />
                    <label className="custom-label">Product Images:</label>
                    <Input type="file" accept="image/*" multiple
                           onChange={handleImageChange} />
                    <br />
                    <div className="form-button-div">
                        <Button type="button" size="large" onClick={handleAddProduct}>Add Product</Button>
                    </div>
                </form>
                <div className="image-previews">
                    {images.map((image, index) => (
                        <img key={index} src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`}
                             style={{ width: '100px', height: 'auto', margin: '5px' }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
