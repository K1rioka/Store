import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Product } from '../../entities/Product/model/types';
import Slider from 'react-slick'; // Импортируем Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductPage.css'; // Добавьте свои стили для слайдера

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = useSelector((state: RootState) => state.products.products.find(p => p.id === id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const settings = {
        dots: true,          // Показывать точки навигации
        infinite: false,      // Бесконечная прокрутка
        speed: 500,          // Скорость анимации
        slidesToShow: 1,     // Количество видимых слайдов
        slidesToScroll: 1,   // Количество слайдов, прокручиваемых за один раз
        autoplay: true,      // Автоматическая прокрутка
        autoplaySpeed: 3000, // Скорость автопрокрутки (мс)
    };

    const renderSlides = () => {
        const slides = [];
        if (product.image && product.image.length > 0) {
            for (let i = 0; i < product.image.length; i++) {
                slides.push(
                    <div key={i} className="slider-slide">
                        <img src={product.image[i]} alt={`${product.name} image ${i + 1}`} className="product-image" />
                    </div>
                );
            }
        }
        return slides;
    };

    return (
        <div className="product-page-container">
            <h2>{product.name}</h2>
            {product.image && product.image.length > 0 ? (
                <div className="slider-container">
                    <Slider {...settings}>
                        {renderSlides()}
                    </Slider>
                </div>
            ) : (
                <p>No images available</p>
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Color: {product.color}</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductPage;
