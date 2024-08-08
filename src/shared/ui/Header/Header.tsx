import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Подключение стилей

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">My Online Store</div>
                    <nav>
                        <ul>
                            <li><Link to="/" className="my-link">Home</Link></li>
                            <li><Link to="/add-product" className="my-link">Add a New Product</Link></li>
                            <li><Link to="/product-list-page" className="my-link">Product List</Link></li>
                            {/* Добавьте другие ссылки на страницы вашего приложения */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;