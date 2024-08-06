import React, { useState } from 'react';
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
    const [activeTab, setActiveTab] = useState('tab1');

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

    const [descriptionTab1, descriptionTab2] = product.description.split('<!--tab2-->');

    return (
        <div className="product-page-content">
            <div className="product-container">
                <div className="product-row">
                    <div className="product-slider">
                        {product.image && product.image.length > 0 ? (
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {renderSlides()}
                                </Slider>
                            </div>
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                    <div className="product-info">
                        <div className="product-info-greybox">
                            <div className="title-block">
                                <h2>{product.name}</h2>
                                <h3>{product.color}</h3>
                            </div>
                            <div className="short-block"></div>
                            <div className="price-block">
                                <p>${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="tab">
                    <li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>
                        <a data-toggle="tab" href="#tab1" aria-expanded={activeTab === 'tab1'}>
                            <span className="hidden-xs">преимущества и особенности</span>
                        </a>
                    </li>
                    <li className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>
                        <a data-toggle="tab" href="#tab2" aria-expanded={activeTab === 'tab2'}>технические характеристики</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="tab1" className={`tab-pane fade ${activeTab === 'tab1' ? 'in active' : ''}`}>
                        <div dangerouslySetInnerHTML={{ __html: descriptionTab1 }} />
                    </div>
                    <div id="tab2" className={`tab-pane fade ${activeTab === 'tab2' ? 'in active' : ''}`}>
                        <div dangerouslySetInnerHTML={{ __html: descriptionTab2 }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
