import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {

    const navigate = useNavigate();
    const aboutUsClick = () => {
        navigate('/aboutUs');
    };

    return (
        <footer>
            <button className="about-us-button" onClick={aboutUsClick}>Equipe Tindoar</button>
            <div className="block-footer">
                <h3 className="font-footer">Contacts:</h3>
                <p className="font-footer">Tel: +55 31 3665-8484</p>
                <p className="font-footer">Email: contato@tindoar.com.br</p>
            </div>
            <div className="font-footer block-footer">
                feito com &lt;3
            </div>
        </footer>
    )
};

export default Footer;