import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
    const settings = {
        dots: true,          // Показывать точки навигации
        infinite: true,      // Бесконечная прокрутка
        speed: 500,          // Скорость анимации
        slidesToShow: 1,     // Количество видимых слайдов
        slidesToScroll: 1,  // Количество слайдов, прокручиваемых за один раз
        autoplay: true,         // Автоматическая прокрутка
        autoplaySpeed: 3000     // Скорость автопрокрутки (мс)
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://samsungstore.kg/files/media/15/15232.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://samsungstore.kg/files/media/15/15014.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://samsungstore.kg/files/media/15/15124.jpg" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;