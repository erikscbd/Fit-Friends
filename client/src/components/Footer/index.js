import React from 'react';
import "./Footer.css";
import { useLocation, useNavigate } from 'react-router-dom';
import logo2 from "../../img/logo2.png";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-items'>

                    {/* <div className="footer-go-back">
                        {location.pathname !== '/' && (
                            <button
                                className="go-back-button"
                                onClick={() => navigate(-1)}
                            >
                                &larr; Go Back
                            </button>
                        )}
                    </div> */}

                    <div className='logo-image'>
                        <img src={logo2} alt="fit friends logo" className='footer-logo' />
                    </div>
                    <h5>&copy; {new Date().getFullYear()} Fit Friends | All Rights Reserved</h5>
                </div>
            </div>


        </footer>
    );
};

export default Footer;