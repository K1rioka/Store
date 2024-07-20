import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../entities/Product/ui/ProductList';
import './HomePage.css';
import SliderComponent from '../../features/SliderComponent/index';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <SliderComponent />
        </div>
    );
};

export default HomePage;
