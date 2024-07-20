import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../model/productSlice';
import { Product } from '../../model/types';
import './AddProductForm.css';
import Input from '../../../../shared/ui/Input/Input';
import Textarea from '../../../../shared/ui/Textarea/Textarea';
import Select from '../../../../shared/ui/Select/Select';
import Button from '../../../../shared/ui/Button/Button'; // Импортируем кастомную кнопку

const AddProductForm: React.FC = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleAddProduct = () => {
        const newProduct: Product = {
            id: String(Math.random()), // Генерация временного id (для демонстрации)
            name,
            description,
            price: parseFloat(price),
            color,
            category,
            image: image ? URL.createObjectURL(image) : undefined, // Использование URL.createObjectURL для изображения
        };

        dispatch(addProduct(newProduct));
        // Сброс формы или дополнительные действия после добавления товара
        setName('');
        setDescription('');
        setPrice('');
        setColor('');
        setCategory('');
        setImage(null);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setImage(file);
    };

    return (
        <div className="form-div">
            <h2>Add Product</h2>
            <div className="form-inner-div">
                <form>
                    <label className="custom-label">Product Title:</label>
                    <Input type="text" placeholder="Enter product title" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <label className="custom-label">Product Description:</label>
                    <Textarea placeholder="Enter product description" value={description}
                              onChange={(e) => setDescription(e.target.value)}/>
                    <br/>
                    <label className="custom-label">Price:</label>
                    <Input type="number" step="0.01" min="0" placeholder="Enter price" value={price}
                           onChange={(e) => setPrice(e.target.value)}/>
                    <br/>
                    <label className="custom-label">Color:</label>
                    <Input type="text" placeholder="Enter color" value={color}
                           onChange={(e) => setColor(e.target.value)}/>
                    <br/>
                    <label className="custom-label">Category:</label>
                    <div className="custom-select-wrapper">
                        <Select value={category} onChange={(e) => setCategory(e.target.value)} options={[
                            {value: '', label: 'Select a category'},
                            {value: 'Phone', label: 'Phone'},
                            {value: 'Laptop', label: 'Laptop'},
                            {value: 'Tablet', label: 'Tablet'},
                            {value: 'Watches', label: 'Watches'}
                        ]}/>
                    </div>
                        <br/>
                        <label className="custom-label">Product Image:</label>
                        <Input type="file" accept="image/*" onChange={handleImageChange}/>
                        <br/>
                        <div className="form-button-div">
                            <Button type="button" size="large" onClick={handleAddProduct}>Add Product</Button>
                        </div>

                </form>
            </div>
        </div>
);
};

export default AddProductForm;
