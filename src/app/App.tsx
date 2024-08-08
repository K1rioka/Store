import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './../shared/ui/Header/Header';
import HomePage from './../pages/HomePage/HomePage';
import ProductsPage from './../pages/ProductPage';
import AddProductPage from "../pages/AddProductPage";
import '../App.css';
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "./../pages/ProductPage";
import Footer from "../shared/ui/Footer/Footer";
import ContactUs from "../pages/ContactUsPage/ContactUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/add-product" element={<AddProductPage />} />
                        <Route path="/product-list-page" element={<ProductListPage />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/contact-us" element={<ContactUsPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;