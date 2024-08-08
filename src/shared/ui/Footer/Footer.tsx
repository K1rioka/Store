import React from 'react';
import "./Footer.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col-left">
                        <div className="footer-inner-row">
                            <div className="footer-products-list">
                                <div className="footer-h4">
                                    <Link to="/product-list-page?category=">Products</Link>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <ul className="footer-ul">
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=Phone">Phones</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=Tablet">Tablets</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=Laptop">Laptops</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=Accessories">Accessories</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=Watches">Watches</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=Smart TV">Smart TVs</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                    <li className="li-a">
                                        <Link to="/product-list-page?category=For Home">For Home</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon"/>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-info-list">
                                <div className="footer-h4">
                                    <Link to="/Help">Help</Link>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <ul className="footer-ul">
                                    <li className="li-a">
                                        <a href={"https://help.crunchyroll.com/hc/en-us"}>FAQ</a>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon" />
                                    </li>
                                    <li className="li-a">
                                        <Link to="/contact-us">Contact Us</Link>
                                        <FontAwesomeIcon icon={faAngleRight} className="li-icon" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col-right">
                        <div className="footer-h4">
                            <p>Social Media</p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.com/SamsungKyrgyzstan/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="footer-icon-facebook" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} className="footer-icon-x" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="footer-icon-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
